const CH='k1';
const $=id=>document.getElementById(id);
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CODECH='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const randCode=n=>Array.from({length:n},()=>CODECH[Math.floor(Math.random()*CODECH.length)]).join('');

/* ================= Backend: Supabase ================= */
function supaAPI(cfg){
  const sb=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY,{auth:{persistSession:true,autoRefreshToken:true}});
  const chk=({data,error})=>{if(error)throw new Error(error.message);return data};
  let meCache=null;
  return {
    async roster(code){return chk(await sb.rpc('team_roster',{p_code:code}))||[]},
    async signIn(code,memberId,pw){
      const email=chk(await sb.rpc('login_email',{p_code:code,p_member:memberId}));
      if(!email)throw new Error('Zugang nicht gefunden. Frag deinen Trainer.');
      const r=await sb.auth.signInWithPassword({email,password:pw});
      if(r.error)throw new Error('Passwort falsch.');
    },
    async signUp(code,memberId,pw){
      const email='m'+memberId.replace(/-/g,'').slice(0,12)+randCode(5).toLowerCase()+'@ehc-quiz.app';
      const r=await sb.auth.signUp({email,password:pw});
      if(r.error)throw new Error(r.error.message.includes('Password')?'Passwort zu kurz (mindestens 6 Zeichen).':r.error.message);
      if(!r.data.session)throw new Error('Einrichtung unvollständig: In Supabase muss „Confirm email“ ausgeschaltet sein.');
      const ok=chk(await sb.rpc('claim_member',{p_code:code,p_member:memberId,p_email:email}));
      if(!ok){await sb.auth.signOut();throw new Error('Dieser Name ist schon vergeben. Frag deinen Trainer.')}
    },
    async me(){const {data:s}=await sb.auth.getSession();if(!s.session)return null;
      const d=chk(await sb.rpc('me'));meCache=d&&d[0]||null;return meCache},
    async hasSession(){const {data:s}=await sb.auth.getSession();return !!s.session},
    async signOut(){await sb.auth.signOut();meCache=null},
    async loadProgress(){return chk(await sb.from('progress').select('question_id,ok,choice').eq('member_id',meCache.id).eq('chapter',CH))},
    async saveAnswer(qid,ok,choice){chk(await sb.from('progress').upsert({member_id:meCache.id,chapter:CH,question_id:qid,ok,choice,answered_at:new Date().toISOString()}))},
    async resetProgress(){chk(await sb.from('progress').delete().eq('member_id',meCache.id).eq('chapter',CH))},
    async saveAttempt(score,total){chk(await sb.from('attempts').insert({member_id:meCache.id,chapter:CH,score,total}))},
    async best(){const d=chk(await sb.from('attempts').select('score,total').eq('member_id',meCache.id).eq('chapter',CH));
      return d.length?Math.max(...d.map(a=>Math.round(a.score/a.total*100))):null},
    async teams(){return chk(await sb.from('teams').select('id,name,code').order('name'))},
    async members(teamId){return chk(await sb.from('members').select('id,display_name,role,user_id,progress(question_id,ok,chapter),attempts(score,total,chapter)').eq('team_id',teamId).order('display_name'))
      .map(m=>({id:m.id,name:m.display_name,role:m.role,claimed:!!m.user_id,progress:(m.progress||[]).filter(p=>p.chapter===CH),best:bestOf(m.attempts)}))},
    async addMembers(teamId,names,role){chk(await sb.from('members').insert(names.map(n=>({team_id:teamId,display_name:n,role}))))},
    async removeMember(id){chk(await sb.from('members').delete().eq('id',id))},
    async resetLogin(id){if(!chk(await sb.rpc('reset_login',{p_member:id})))throw new Error('Keine Berechtigung.')},
    async createTeam(name){const code=(name.replace(/[^A-Za-z0-9]/g,'').toUpperCase().slice(0,6)||'TEAM')+'-'+randCode(4);
      return chk(await sb.from('teams').insert({name,code}).select('id,name,code').single())},
    async newCode(team){const code=team.code.split('-')[0]+'-'+randCode(4);chk(await sb.from('teams').update({code}).eq('id',team.id));return code}
  };
}
function bestOf(att){const a=(att||[]).filter(x=>x.chapter===CH);return a.length?Math.max(...a.map(x=>Math.round(x.score/x.total*100))):null}

/* ================= Backend: Demo (lokal) ================= */
function mockAPI(){
  const K='ehq-demo-db';
  let db;try{db=JSON.parse(localStorage.getItem(K)||'null')}catch(e){}
  if(!db){db={teams:[{id:'t1',name:'Test U15',code:'TEST-1234'},{id:'t0',name:'Trainer',code:'TRAINER-DEMO'}],
    members:[{id:'m1',team_id:'t1',display_name:'Muster M',role:'player'},{id:'m2',team_id:'t1',display_name:'Beispiel B',role:'player'},{id:'m3',team_id:'t1',display_name:'Coach C',role:'trainer'},{id:'m0',team_id:'t0',display_name:'Sebastian',role:'admin'}],
    progress:[],attempts:[],session:null}}
  const save=()=>{try{localStorage.setItem(K,JSON.stringify(db))}catch(e){}};
  const team=code=>db.teams.find(t=>t.code.toUpperCase()===code.trim().toUpperCase());
  const meM=()=>db.members.find(m=>m.id===db.session);
  const uid=()=>'x'+Math.random().toString(36).slice(2,10);
  return {
    async roster(code){const t=team(code);if(!t)return[];return db.members.filter(m=>m.team_id===t.id).sort((a,b)=>a.display_name.localeCompare(b.display_name)).map(m=>({id:m.id,display_name:m.display_name,claimed:!!m.pw,team_name:t.name}))},
    async signIn(code,id,pw){const m=db.members.find(x=>x.id===id);if(!m||m.pw!==pw)throw new Error('Passwort falsch.');db.session=id;save()},
    async signUp(code,id,pw){if(pw.length<6)throw new Error('Passwort zu kurz (mindestens 6 Zeichen).');const m=db.members.find(x=>x.id===id);if(m.pw)throw new Error('Dieser Name ist schon vergeben.');m.pw=pw;db.session=id;save()},
    async me(){const m=meM();if(!m)return null;const t=db.teams.find(t=>t.id===m.team_id);return {id:m.id,display_name:m.display_name,role:m.role,team_id:m.team_id,team_name:t.name}},
    async hasSession(){return !!db.session},
    async signOut(){db.session=null;save()},
    async loadProgress(){return db.progress.filter(p=>p.member_id===db.session&&p.chapter===CH)},
    async saveAnswer(qid,ok,choice){db.progress=db.progress.filter(p=>!(p.member_id===db.session&&p.chapter===CH&&p.question_id===qid));db.progress.push({member_id:db.session,chapter:CH,question_id:qid,ok,choice});save()},
    async resetProgress(){db.progress=db.progress.filter(p=>!(p.member_id===db.session&&p.chapter===CH));save()},
    async saveAttempt(score,total){db.attempts.push({member_id:db.session,chapter:CH,score,total});save()},
    async best(){return bestOf(db.attempts.filter(a=>a.member_id===db.session))},
    async teams(){const m=meM();return db.teams.filter(t=>m.role==='admin'||t.id===m.team_id).sort((a,b)=>a.name.localeCompare(b.name))},
    async members(tid){return db.members.filter(m=>m.team_id===tid).sort((a,b)=>a.display_name.localeCompare(b.display_name)).map(m=>({id:m.id,name:m.display_name,role:m.role,claimed:!!m.pw,progress:db.progress.filter(p=>p.member_id===m.id&&p.chapter===CH),best:bestOf(db.attempts.filter(a=>a.member_id===m.id))}))},
    async addMembers(tid,names,role){names.forEach(n=>db.members.push({id:uid(),team_id:tid,display_name:n,role}));save()},
    async removeMember(id){db.members=db.members.filter(m=>m.id!==id);db.progress=db.progress.filter(p=>p.member_id!==id);save()},
    async resetLogin(id){const m=db.members.find(x=>x.id===id);delete m.pw;save()},
    async createTeam(name){const t={id:uid(),name,code:(name.replace(/[^A-Za-z0-9]/g,'').toUpperCase().slice(0,6)||'TEAM')+'-'+randCode(4)};db.teams.push(t);save();return t},
    async newCode(team){const t=db.teams.find(x=>x.id===team.id);t.code=t.code.split('-')[0]+'-'+randCode(4);save();return t.code}
  };
}

const CFG=window.QUIZ_CONFIG||{};
const LIVE=!!(CFG.SUPABASE_URL&&CFG.SUPABASE_ANON_KEY&&window.supabase);
const API=LIVE?supaAPI(CFG):mockAPI();
if(!LIVE)$('demo').classList.remove('hide');

/* ================= Navigation ================= */
let ME=null;
function show(id){['boot','login','home','quiz','result','trainer'].forEach(s=>$(s).classList.toggle('hide',s!==id));
  document.body.classList.toggle('wide',id==='quiz');window.scrollTo(0,0)}
function ask2(text,yes='OK'){return new Promise(r=>{$('mtext').textContent=text;$('myes').textContent=yes;$('modal').classList.remove('hide');
  $('myes').onclick=()=>{$('modal').classList.add('hide');r(true)};$('mno').onclick=()=>{$('modal').classList.add('hide');r(false)}})}
function busy(btn,on,label){if(on){btn.dataset.l=btn.textContent;btn.textContent=label||'…';btn.disabled=true}else{btn.textContent=btn.dataset.l||btn.textContent;btn.disabled=false}}

/* ================= Login ================= */
let LG={code:'',roster:[],member:null};
function loginStep(n){['l1','l2','l3'].forEach((s,i)=>$(s).classList.toggle('hide',i!==n-1))}
async function toLogin(){show('login');loginStep(1);try{$('code').value=localStorage.getItem('ehq-code')||''}catch(e){}}
$('b1').onclick=async()=>{
  const code=$('code').value.trim();$('e1').textContent='';
  if(!code){$('e1').textContent='Gib den Mannschaftscode ein.';return}
  busy($('b1'),true);
  try{const r=await API.roster(code);
    if(!r.length){$('e1').textContent='Diesen Code gibt es nicht. Schau nochmal in die Nachricht deines Trainers.';return}
    LG={code,roster:r,member:null};try{localStorage.setItem('ehq-code',code)}catch(e){}
    $('tname').textContent=r[0].team_name;$('nfilter').value='';renderNames();loginStep(2);
  }catch(e){$('e1').textContent='Keine Verbindung. Versuch es gleich nochmal.'}
  finally{busy($('b1'),false)}
};
$('code').onkeydown=e=>{if(e.key==='Enter')$('b1').click()};
$('code').oninput=()=>{$('e1').textContent=''};
function renderNames(){
  const f=$('nfilter').value.trim().toLowerCase();
  $('names').innerHTML='';
  LG.roster.filter(m=>m.display_name.toLowerCase().includes(f)).forEach(m=>{
    const b=document.createElement('button');b.className='nm';
    b.innerHTML=`<span>${esc(m.display_name)}</span><small>${m.claimed?'':'erstes Mal'}</small>`;
    b.onclick=()=>pickName(m);$('names').appendChild(b)});
}
$('nfilter').oninput=renderNames;
$('back1').onclick=()=>loginStep(1);
$('back2').onclick=()=>loginStep(2);
function pickName(m){LG.member=m;$('pname').textContent=m.display_name;$('e3').textContent='';
  $('pwOld').classList.toggle('hide',!m.claimed);$('pwNew').classList.toggle('hide',m.claimed);
  ['pw','pw1','pw2'].forEach(i=>$(i).value='');$('b3').textContent=m.claimed?'Anmelden':'Passwort festlegen';
  loginStep(3);setTimeout(()=>$(m.claimed?'pw':'pw1').focus(),50)}
['pw','pw1','pw2'].forEach(i=>{$(i).oninput=()=>{$('e3').textContent=''};$(i).onkeydown=e=>{if(e.key==='Enter')$('b3').click()}});
$('b3').onclick=async()=>{
  const m=LG.member;$('e3').textContent='';
  if(m.claimed){if(!$('pw').value){$('e3').textContent='Gib dein Passwort ein.';return}}
  else{const a=$('pw1').value,b=$('pw2').value;
    if(a.length<6){$('e3').textContent='Mindestens 6 Zeichen.';return}
    if(a!==b){$('e3').textContent='Die beiden Passwörter sind nicht gleich.';return}}
  busy($('b3'),true);
  try{if(m.claimed)await API.signIn(LG.code,m.id,$('pw').value);else await API.signUp(LG.code,m.id,$('pw1').value);
    await enter();
  }catch(e){$('e3').textContent=e.message||'Das hat nicht geklappt.'}
  finally{busy($('b3'),false)}
};
async function enter(){
  ME=await API.me();
  if(!ME){await API.signOut();toLogin();$('e1').textContent='Dein Zugang ist nicht mehr aktiv. Frag deinen Trainer.';return}
  await loadAnswers();home();
}
$('logout').onclick=async()=>{await API.signOut();ME=null;toLogin()};

/* ================= Fortschritt ================= */
let answers={},full=true;
const ALL=QS.map((q,i)=>i);
const qIndex=Object.fromEntries(QS.map((q,i)=>[q.id,i]));
async function loadAnswers(){answers={};try{(await API.loadProgress()).forEach(p=>{if(p.question_id in qIndex)answers[qIndex[p.question_id]]={ok:p.ok,oi:p.choice}})}catch(e){}}
async function home(){
  show('home');
  $('hello').textContent='Hallo '+ME.display_name.split(' ')[0]+'!';$('hteam').textContent=ME.team_name.toUpperCase();
  const n=Object.keys(answers).length,right=Object.values(answers).filter(a=>a.ok).length,pct=Math.round(n/QS.length*100);
  $('hdone').textContent=n?`${n} von ${QS.length} beantwortet · ${right} richtig`:'Noch nicht begonnen';
  $('hpct').textContent=pct+' %';$('hbar').style.width=pct+'%';
  $('hstart').textContent=n===0?'Starten':n<QS.length?'Weitermachen':'Ergebnis ansehen';
  $('hfresh').classList.toggle('hide',n===0);
  $('htrainer').classList.toggle('hide',ME.role==='player');
  $('hbest').textContent='';
  try{const b=await API.best();if(b!=null)$('hbest').textContent=`Bestes Ergebnis: ${b} %`}catch(e){}
}
$('hstart').onclick=()=>{const n=Object.keys(answers).length;if(n===QS.length){order=ALL;full=true;result();return}startRun(ALL,true)};
$('hfresh').onclick=async()=>{if(!await ask2('Kapitel 1 von vorne beginnen? Deine bisherigen Antworten werden gelöscht.','Von vorne'))return;
  try{await API.resetProgress()}catch(e){}answers={};startRun(ALL,true)};

/* ================= Quiz ================= */
function doneCount(){return order.filter(i=>answers[i]).length}
function updDone(){const n=doneCount(),pct=Math.round(n/order.length*100);$('barfill').style.width=pct+'%';$('done').textContent=`${pct} % geschafft`}
function startRun(list,isFull){full=isFull;order=list;
  idx=isFull?Math.max(0,order.findIndex(i=>!answers[i])):0;
  if(!isFull)list.forEach(i=>delete answers[i]);
  show('quiz');loadQ()}
async function loadQ(){
  cur=QS[order[idx]];const tk=++token;const a=answers[order[idx]];
  $('prog').textContent=`Frage ${idx+1} von ${order.length}`;
  $('chap').textContent=cur.chap;$('lvl').textContent=cur.lvl;updDone();
  $('prev').classList.toggle('hide',idx===0);
  $('opts').innerHTML='';$('fb').innerHTML='';$('next').classList.add('hide');$('replay').classList.add('hide');
  build(cur);
  if(a){jump(cur.intro);ask();markAnswer(a.oi);await wait(300);await play(cur.solve,tk);return}
  $('qtext').textContent='Schau genau hin …';$('qtext').classList.add('muted');
  await wait(450);
  if(!await play(cur.intro,tk))return;
  ask();
}
function ask(){
  $('qtext').textContent=cur.q;$('qtext').classList.remove('muted');
  shuffled=cur.o.map((t,i)=>i).sort(()=>Math.random()-.5);
  $('opts').innerHTML='';
  shuffled.forEach((oi,n)=>{const b=document.createElement('button');b.className='opt';
    b.innerHTML=`<b>${'ABCD'[n]}</b><span>${cur.o[oi]}</span>`;b.onclick=()=>pick(oi);$('opts').appendChild(b)});
  $('replay').textContent='Nochmal ansehen';$('replay').classList.remove('hide');$('replay').onclick=replayIntro;
}
async function replayIntro(){const tk=++token;build(cur);await wait(300);await play(cur.intro,tk)}
function markAnswer(oi){
  const ok=oi===0;
  [...$('opts').children].forEach((b,n)=>{b.onclick=null;const o=shuffled[n];
    if(o===0)b.classList.add('ok');else if(o===oi)b.classList.add('bad');else b.classList.add('dim')});
  $('fb').innerHTML=`<div class="fb ${ok?'ok':'bad'}"><strong>${ok?'Richtig!':'Leider falsch.'}</strong>${cur.ex}</div>`;
  $('next').textContent=idx<order.length-1?'Weiter':'Zur Auswertung';$('next').classList.remove('hide');
  $('replay').textContent='Lösung nochmal';$('replay').classList.remove('hide');$('replay').onclick=replaySolve;
}
async function pick(oi){
  const ok=oi===0;answers[order[idx]]={ok,oi};updDone();markAnswer(oi);
  API.saveAnswer(cur.id,ok,oi).catch(()=>{$('fb').insertAdjacentHTML('beforeend','<div class="err" style="margin-top:8px">Antwort konnte nicht gespeichert werden – prüfe deine Internetverbindung.</div>')});
  const tk=++token;await play(cur.solve,tk);
}
async function replaySolve(){const tk=++token;build(cur);jump(cur.intro);await wait(300);await play(cur.solve,tk)}
$('next').onclick=()=>{token++;
  if(idx<order.length-1){idx++;loadQ();return}
  const open=order.findIndex(i=>!answers[i]);
  if(open>=0){idx=open;loadQ()}else result()};
$('prev').onclick=()=>{if(idx>0){token++;idx--;loadQ()}};
$('menu').onclick=()=>{token++;home()};

function result(){
  show('result');
  const ids=order,ok=i=>answers[i]&&answers[i].ok,right=ids.filter(ok).length,pct=Math.round(right/ids.length*100);
  $('pct').textContent=pct+' %';$('score').textContent=`${right} von ${ids.length} richtig`;
  $('verdict').textContent=pct>=80?'Bestanden! Du kennst dein Playbook.':pct>=50?'Gute Basis – übe die Fehler nochmal.':'Schau nochmal ins Playbook und probier die Fehler nochmal.';
  $('reslist').innerHTML=ids.map(i=>`<li><span class="mark" style="background:${ok(i)?'var(--ok)':'var(--bad)'}">${ok(i)?'✓':'✕'}</span><span><span class="muted" style="font-size:13px">${QS[i].chap}</span><br>${QS[i].q}</span></li>`).join('');
  const wrong=ids.filter(i=>!ok(i));
  $('retryWrong').classList.toggle('hide',!wrong.length);
  $('retryWrong').onclick=()=>startRun(wrong,false);
  if(full&&!result.saved){API.saveAttempt(right,ids.length).catch(()=>{})}
}
$('toHome').onclick=()=>home();

/* ================= Trainerbereich ================= */
let TEAMS=[],TEAM=null;
$('htrainer').onclick=()=>openTrainer();
$('tback').onclick=()=>home();
async function openTrainer(){
  show('trainer');
  document.body.classList.toggle('adminhide',ME.role!=='admin');
  $('trole').textContent=ME.role==='admin'?'Admin':'Trainer';
  TEAMS=await API.teams();
  if(!TEAM||!TEAMS.find(t=>t.id===TEAM.id))TEAM=TEAMS.find(t=>t.id!==ME.team_id||ME.role!=='admin')||TEAMS[0];
  renderTeams();await renderTeam();
}
function renderTeams(){$('tsel').innerHTML=TEAMS.map(t=>`<option value="${t.id}"${TEAM&&t.id===TEAM.id?' selected':''}>${esc(t.name)}</option>`).join('')}
$('tsel').onchange=async()=>{TEAM=TEAMS.find(t=>t.id===$('tsel').value);await renderTeam()};
async function renderTeam(){
  if(!TEAM){$('tlist').innerHTML='<p class="muted">Noch keine Mannschaft.</p>';return}
  $('tcode').textContent=TEAM.code;$('tcopymsg').textContent='';
  $('tlist').innerHTML='<p class="muted">Lädt …</p>';
  const ms=await API.members(TEAM.id);
  const players=ms.filter(m=>m.role==='player');
  $('tcount').textContent=`${players.length} Spieler · ${players.filter(m=>m.claimed).length} angemeldet`;
  $('tlist').innerHTML=ms.length?'':'<p class="muted" style="margin:10px 0 0">Noch niemand angelegt.</p>';
  ms.forEach(m=>{
    const n=m.progress.length,r=m.progress.filter(p=>p.ok).length,pct=Math.round(n/QS.length*100);
    const canEdit=ME.role==='admin'||m.role==='player';const self=m.id===ME.id;
    const d=document.createElement('div');d.className='mrow';
    d.innerHTML=`<div class="who"><b>${esc(m.name)}${m.role!=='player'?` <span class="tag" style="font-size:11px">${m.role==='admin'?'Admin':'Trainer'}</span>`:''}</b>
      <span>${m.claimed?`${pct} % geschafft · ${r}/${n} richtig${m.best!=null?` · Bestes: ${m.best} %`:''}`:'noch nicht angemeldet'}</span>
      <div class="minibar"><i style="width:${pct}%"></i></div></div>
      <div class="acts">${canEdit&&!self&&m.claimed?'<button class="btn small" data-a="reset">Passwort</button>':''}${canEdit&&!self?'<button class="btn small" data-a="del">Entfernen</button>':''}</div>`;
    d.querySelectorAll('[data-a]').forEach(b=>b.onclick=async()=>{
      if(b.dataset.a==='reset'){if(!await ask2(`Passwort von ${m.name} zurücksetzen? Beim nächsten Login legt ${m.name} ein neues fest. Der Fortschritt bleibt erhalten.`,'Zurücksetzen'))return;
        try{await API.resetLogin(m.id)}catch(e){await ask2('Das hat nicht geklappt: '+e.message)}}
      else{if(!await ask2(`${m.name} entfernen? Der Zugang und der Fortschritt werden gelöscht.`,'Entfernen'))return;
        try{await API.removeMember(m.id)}catch(e){await ask2('Das hat nicht geklappt: '+e.message)}}
      renderTeam()});
    $('tlist').appendChild(d)});
  renderStats(ms.filter(m=>m.role==='player'));
}
function renderStats(ms){
  const rows=QS.map((q,i)=>{const ps=ms.flatMap(m=>m.progress.filter(p=>p.question_id===q.id));
    const ok=ps.filter(p=>p.ok).length;return {i,q,n:ps.length,pct:ps.length?Math.round(ok/ps.length*100):null}});
  if(!rows.some(r=>r.n)){$('tstats').innerHTML='<p class="muted" style="margin:0;font-size:14px">Noch keine Antworten.</p>';return}
  rows.sort((a,b)=>(a.pct??101)-(b.pct??101));
  $('tstats').innerHTML=rows.filter(r=>r.n).map(r=>`<div class="srow"><div><span class="muted" style="font-size:12px">Frage ${r.i+1} · ${esc(r.q.chap)}</span><br>${esc(r.q.q)}${r.n?`<div class="sbar"><i style="width:${r.pct}%"></i></div>`:''}</div><div style="text-align:right;font-weight:600">${r.n?r.pct+' %':'–'}<br><span class="muted" style="font-size:12px;font-weight:400">${r.n} Antw.</span></div></div>`).join('');
}
$('tcopy').onclick=async()=>{const txt=`Eishockey-Quiz 🏒\n${location.href.split('#')[0]}\nMannschaftscode: ${TEAM.code}\nDann deinen Namen antippen und beim ersten Mal ein eigenes Passwort festlegen.`;
  try{await navigator.clipboard.writeText(txt);$('tcopymsg').textContent='Nachricht mit Link und Code kopiert – einfach in die WhatsApp-Gruppe einfügen.'}
  catch(e){$('tcopymsg').textContent='Kopieren nicht möglich. Code: '+TEAM.code}};
$('tnewcode').onclick=async()=>{if(!await ask2(`Neuen Code für ${TEAM.name} erzeugen? Der alte Code funktioniert danach nicht mehr für neue Anmeldungen.`,'Neuer Code'))return;
  try{TEAM.code=await API.newCode(TEAM);$('tcode').textContent=TEAM.code}catch(e){await ask2('Das hat nicht geklappt: '+e.message)}};
$('tadd').onclick=async()=>{
  const names=[...new Set($('tnames').value.split('\n').map(s=>s.trim().replace(/\s+/g,' ')).filter(Boolean))];$('tadderr').textContent='';
  if(!names.length){$('tadderr').textContent='Trag mindestens einen Namen ein.';return}
  if(names.some(n=>n.length>40)){$('tadderr').textContent='Ein Name ist zu lang (max. 40 Zeichen).';return}
  busy($('tadd'),true);
  try{await API.addMembers(TEAM.id,names,$('trolesel').value);$('tnames').value='';await renderTeam()}
  catch(e){$('tadderr').textContent='Das hat nicht geklappt: '+e.message}
  finally{busy($('tadd'),false)}};
$('tnames').oninput=()=>{$('tadderr').textContent=''};
$('tcreate').onclick=async()=>{const n=$('tnewteam').value.trim();$('tcreateerr').textContent='';
  if(!n){$('tcreateerr').textContent='Gib einen Namen ein.';return}
  try{const t=await API.createTeam(n);$('tnewteam').value='';TEAMS=await API.teams();TEAM=TEAMS.find(x=>x.id===t.id)||t;renderTeams();await renderTeam()}
  catch(e){$('tcreateerr').textContent='Das hat nicht geklappt: '+e.message}};

/* ================= Start ================= */
(async()=>{
  try{if(await API.hasSession()){await enter();return}}catch(e){}
  toLogin();
})();
