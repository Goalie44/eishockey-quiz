const NS='http://www.w3.org/2000/svg';
let pos={},els={},token=0,order=[],idx=0,answers={},cur=null,shuffled=[];

let ang={},curA={},stickOn=false;
const STK='<g class="stk"><line x1="11" y1="0" x2="29" y2="0" stroke="#14181f" stroke-width="3" stroke-linecap="round"/><line x1="29" y1="0" x2="32" y2="7" stroke="#14181f" stroke-width="4.5" stroke-linecap="round"/></g>';
function hasStick(k){return stickOn&&k!=='P'&&k!=='T'&&k[0]!=='g'}
function autoA(k){const p=pos.P;if(!p)return 90;return Math.atan2(p[1]-pos[k][1],p[0]-pos[k][0])*180/Math.PI}
function drawSticks(){for(const k in els){if(!hasStick(k))continue;const a=ang[k]!=null?ang[k]:autoA(k);curA[k]=a;els[k].querySelector('.stk').setAttribute('transform','rotate('+a+')')}}
function lerpA(a,b,e){let d=((b-a)%360+540)%360-180;return a+d*e}
function mkEnt(k){
  const g=document.createElementNS(NS,'g');
  if(k==='P'){g.innerHTML='<circle r="5.5" fill="#14181f" stroke="#FFD100" stroke-width="1.5"/>';return g}
  const opp=k[0]==='g', lab=opp?k.slice(1):k;
  g.innerHTML=opp
   ?`<circle r="12" fill="#e0312b" stroke="#fff" stroke-width="1.5"/><text y="4" text-anchor="middle" font-size="10.5" font-weight="600" fill="#fff" font-family="Barlow">${lab}</text>`
   :(hasStick(k)?STK:'')+`<circle r="14" fill="#14181f" stroke="#FFD100" stroke-width="2"/><text y="4" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Barlow">${lab}</text>`;
  if(k==='T'||k==='gT')g.innerHTML='<g transform="scale(0.78)">'+g.innerHTML+'</g>';
  return g;
}
function setPos(k,p){pos[k]=p;els[k].setAttribute('transform',`translate(${p[0]} ${p[1]})`)}
function build(q){
  const r=RINK[q.rink],svg=$('rink');
  svg.setAttribute('viewBox',r.vb);
  svg.innerHTML=(q.label?r.svg.replace('>unser Tor<','>'+q.label+'<'):r.svg)+'<g id="hl"></g><g id="ents"></g>';
  pos={};els={};ang={};curA={};stickOn=(q.rink==='zone'||q.rink==='big')&&!q.noSticks;
  const keys=Object.keys(q.setup).sort((a,b)=>(a==='P')-(b==='P')||(b[0]==='g')-(a[0]==='g'));
  keys.forEach(k=>{els[k]=mkEnt(k);$('ents').appendChild(els[k]);setPos(k,q.setup[k]);if(q.setup[k][2]!=null)ang[k]=q.setup[k][2]});
  if(stickOn&&pos.P){const t={P:pos.P.slice()};snapPuck(t);setPos('P',t.P)}
  drawSticks();
  hl(null);banner('');
}
function hl(h){const g=$('hl');if(!g)return;g.innerHTML=!h?'':h.areas?h.areas.map(a=>`<path d="${a.d}" fill="${a.c}" fill-opacity="0.17" stroke="${a.c}" stroke-width="2.5" stroke-dasharray="${a.dash||'7 5'}"/>`+(a.t?`<text x="${a.x}" y="${a.y}" text-anchor="middle" font-size="13" font-weight="700" fill="${a.c}" font-family="Barlow">${a.t}</text>`:'')).join(''):h.d?`<path class="${h.line?'hlline':'hlarea'}" d="${h.d}"/>`:`<circle class="hlring" cx="${h[0]}" cy="${h[1]}" r="${h[2]}"/>`}
function banner(t){const b=$('banner');if(t){b.textContent=t;b.classList.add('on')}else b.classList.remove('on')}
function blade(c,dir){const d=Math.hypot(dir[0],dir[1])||1;return [c[0]+dir[0]/d*31,c[1]+dir[1]/d*31]}
function snapPuck(tg){if(!stickOn||!tg.P)return;let best=null,bd=18;
  for(const k in els){if(!hasStick(k))continue;const c=tg[k]||pos[k];const d=Math.hypot(tg.P[0]-c[0],tg.P[1]-c[1]);if(d<bd){bd=d;best=k}}
  if(best){const c=tg[best]||pos[best];tg.P=blade(c,[tg.P[0]-c[0],tg.P[1]-c[1]])}}
function targets(s){
  const tg={};for(const k in s.m){if(k!=='P'||typeof s.m.P!=='string')tg[k]=s.m[k]}
  if(typeof s.m.P==='string'){const k=s.m.P,c=tg[k]||pos[k],cur=pos[k];
    if(hasStick(k)){const carry=Math.hypot(pos.P[0]-cur[0],pos.P[1]-cur[1])<42;
      tg.P=carry?blade(c,[pos.P[0]-cur[0],pos.P[1]-cur[1]]):blade(c,[pos.P[0]-c[0],pos.P[1]-c[1]])}
    else tg.P=[c[0]+9,c[1]-9]}
  else snapPuck(tg);
  return tg;
}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function tween(tg,dur,tk,lin){
  const from={},fa={};for(const k in tg){from[k]=pos[k].slice();if(tg[k].length>2){if(tg[k][2]===null)ang[k]=null;else fa[k]=curA[k]!=null?curA[k]:0}}
  return new Promise(res=>{const t0=performance.now();
    function f(t){if(tk!==token)return res();let k=Math.min(1,(t-t0)/dur),e=lin?k:k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
      for(const id in tg){setPos(id,[from[id][0]+(tg[id][0]-from[id][0])*e,from[id][1]+(tg[id][1]-from[id][1])*e]);if(id in fa)ang[id]=lerpA(fa[id],tg[id][2],e)}
      drawSticks();
      k<1?requestAnimationFrame(f):res()}
    requestAnimationFrame(f)})
}
async function play(steps,tk){
  for(const s of steps){if(tk!==token)return false;
    if(s.txt!==undefined)banner(s.txt);if(s.hl!==undefined)hl(s.hl||null);
    await tween(targets(s),s.t||1000,tk,s.lin);await wait(s.lin?0:250)}
  return tk===token;
}
function jump(steps){steps.forEach(s=>{const tg=targets(s);for(const k in tg){setPos(k,tg[k]);if(tg[k].length>2)ang[k]=tg[k][2]}});drawSticks()}


