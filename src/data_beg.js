RINK.big={vb:'0 0 400 540',svg:`
<path d="M5 5H395V450A80 80 0 0 1 315 530H85A80 80 0 0 1 5 450Z" fill="#ffffff" stroke="#333" stroke-width="3"/>
<circle cx="200" cy="12" r="40" fill="none" stroke="#2559a7" stroke-width="1.6"/><line x1="5" y1="12" x2="395" y2="12" stroke="#e0393e" stroke-width="6"/><line x1="5" y1="12" x2="395" y2="12" stroke="#fff" stroke-width="1.4" stroke-dasharray="5 9"/><circle cx="110" cy="128" r="4.5" fill="#e0393e"/><circle cx="290" cy="128" r="4.5" fill="#e0393e"/><line x1="5" y1="160" x2="395" y2="160" stroke="#2559a7" stroke-width="6"/>
<path d="M176 470V457A24 15 0 0 1 224 457V470Z" fill="#b3d1f0" stroke="#e0393e" stroke-width="1.4"/><line x1="8" y1="470" x2="392" y2="470" stroke="#e0393e" stroke-width="2"/><line x1="162" y1="470" x2="140" y2="530" stroke="#e0393e" stroke-width="1.5"/><line x1="238" y1="470" x2="260" y2="530" stroke="#e0393e" stroke-width="1.5"/><g><line x1="188" y1="472" x2="188" y2="486" stroke="#d9a3a5" stroke-width="0.8"/><line x1="192" y1="472" x2="192" y2="486" stroke="#d9a3a5" stroke-width="0.8"/><line x1="196" y1="472" x2="196" y2="486" stroke="#d9a3a5" stroke-width="0.8"/><line x1="200" y1="472" x2="200" y2="486" stroke="#d9a3a5" stroke-width="0.8"/><line x1="204" y1="472" x2="204" y2="486" stroke="#d9a3a5" stroke-width="0.8"/><line x1="208" y1="472" x2="208" y2="486" stroke="#d9a3a5" stroke-width="0.8"/><line x1="212" y1="472" x2="212" y2="486" stroke="#d9a3a5" stroke-width="0.8"/><line x1="186" y1="475" x2="214" y2="475" stroke="#d9a3a5" stroke-width="0.8"/><line x1="186" y1="479" x2="214" y2="479" stroke="#d9a3a5" stroke-width="0.8"/><line x1="186" y1="483" x2="214" y2="483" stroke="#d9a3a5" stroke-width="0.8"/><path d="M184 470V481Q184 488 191 488H209Q216 488 216 481V470" fill="none" stroke="#e0393e" stroke-width="2.8" stroke-linejoin="round"/></g><circle cx="110" cy="380" r="48" fill="none" stroke="#e0393e" stroke-width="1.8"/><circle cx="110" cy="380" r="4.5" fill="#e0393e"/><path d="M104 364V375H91" fill="none" stroke="#e0393e" stroke-width="1.6"/><path d="M104 396V385H91" fill="none" stroke="#e0393e" stroke-width="1.6"/><path d="M116 364V375H129" fill="none" stroke="#e0393e" stroke-width="1.6"/><path d="M116 396V385H129" fill="none" stroke="#e0393e" stroke-width="1.6"/><line x1="62" y1="376" x2="53" y2="376" stroke="#e0393e" stroke-width="1.6"/><line x1="62" y1="384" x2="53" y2="384" stroke="#e0393e" stroke-width="1.6"/><line x1="158" y1="376" x2="167" y2="376" stroke="#e0393e" stroke-width="1.6"/><line x1="158" y1="384" x2="167" y2="384" stroke="#e0393e" stroke-width="1.6"/><circle cx="290" cy="380" r="48" fill="none" stroke="#e0393e" stroke-width="1.8"/><circle cx="290" cy="380" r="4.5" fill="#e0393e"/><path d="M284 364V375H271" fill="none" stroke="#e0393e" stroke-width="1.6"/><path d="M284 396V385H271" fill="none" stroke="#e0393e" stroke-width="1.6"/><path d="M296 364V375H309" fill="none" stroke="#e0393e" stroke-width="1.6"/><path d="M296 396V385H309" fill="none" stroke="#e0393e" stroke-width="1.6"/><line x1="242" y1="376" x2="233" y2="376" stroke="#e0393e" stroke-width="1.6"/><line x1="242" y1="384" x2="233" y2="384" stroke="#e0393e" stroke-width="1.6"/><line x1="338" y1="376" x2="347" y2="376" stroke="#e0393e" stroke-width="1.6"/><line x1="338" y1="384" x2="347" y2="384" stroke="#e0393e" stroke-width="1.6"/><text x="200" y="520" text-anchor="middle" font-size="12" fill="#8a94a2" font-family="Barlow">gegnerisches Tor</text><text x="200" y="44" text-anchor="middle" font-size="12" fill="#8a94a2" font-family="Barlow">neutrale Zone</text>`};

const HAUS_D='M186 350 L110 262 L110 212 L290 212 L290 262 L214 350 Z';
const HAUS={areas:[{d:HAUS_D,c:'#f08c00',t:'Haus / Slot',x:200,y:240},{d:'M110 262 L110 350 L186 350 Z M290 262 L290 350 L214 350 Z',c:'#2f6fd6'}]};
const HASH={d:'M328 260a16 16 0 1 0 32 0a16 16 0 1 0 -32 0 M220 260a16 16 0 1 0 32 0a16 16 0 1 0 -32 0'};
const CORNERS={d:'M308 372a42 42 0 1 0 84 0a42 42 0 1 0 -84 0 M8 372a42 42 0 1 0 84 0a42 42 0 1 0 -84 0'};
const BOXZONES={areas:[
  {d:'M231 281H395V330A80 80 0 0 1 315 410H231Z',c:'#1D9E75',t:'D1',x:250,y:400},
  {d:'M236 284H378V362H236Z',c:'#7F3FBF',t:'F1',x:250,y:298},
  {d:'M235 92H392V281H235Z',c:'#2f6fd6',t:'F2',x:378,y:108},
  {d:'M158 193H234V292H158Z',c:'#D4537E',t:'F3',x:172,y:208},
  {d:'M156 277H234V350H156Z',c:'#f08c00',t:'D2',x:170,y:344}]};
const TRAPZONE={areas:[{d:'M205 8H395V148H205Z',c:'#2f6fd6',t:'Zone F2',x:300,y:28}]};
const OZ='gegnerisches Tor';
const I0=[{t:300,m:{}}];
const SD=o=>Object.assign({T:[200,338]},o);
const SO=o=>Object.assign({gT:[200,338]},o);
function boardPath(pts,v,txt){let prev=null;return pts.map((p,i)=>{const s={m:{P:p},lin:true,t:prev?Math.max(30,Math.hypot(p[0]-prev[0],p[1]-prev[1])/v):400};if(i===0&&txt)s.txt=txt;prev=p;return s})}
const RIMPTS=[[14,135],[14,330],[19,357],[35,380],[58,396],[85,401],[315,401],[342,396],[365,380],[381,357],[386,330],[386,246]];

const QSB=[
{id:'b-01',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({D1:[318,340],D2:[150,322],F1:[255,322],F2:[255,225],F3:[150,225],gF1:[345,368],gF2:[225,280],gD1:[100,96],gD2:[300,96],P:[352,376]}),intro:I0,
 q:'Was ist das „Haus“ (auch „Slot“ genannt)?',
 o:['Der gefährliche Bereich vor unserem Tor – von den Pfosten bis hoch zu den Bullykreisen','Die Strafbank neben dem Eis, auf der Spieler ihre Strafe absitzen','Die Ecke hinter dem eigenen Tor, in der oft Zweikämpfe stattfinden','Die neutrale Zone zwischen den beiden blauen Linien in der Mitte'],
 ex:'Das Haus – auch Slot genannt – ist der gefährlichste Bereich vor dem Tor: von den Pfosten über die Bullypunkte bis zum oberen Rand der Bullykreise. Vergiss auch die Flächen von den Bullypunkten bis zur Torlinie und rüber zum Pfosten nicht (blau markiert) – auch von dort kann es gefährlich werden.',
 solve:[{t:700,m:{},hl:HAUS,txt:'Das Haus (Slot)'}]},

{id:'b-02',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({D1:[320,335],D2:[165,290],F1:[300,260],gF1:[345,368],gF2:[240,292],gD1:[100,96],gD2:[300,96],P:[352,376]}),intro:I0,
 q:'Was bedeutet „Netfront“?',
 o:['Der Platz direkt vor dem Tor','Das Tornetz auf der Rückseite','Die Linie zwischen den Pfosten','Der Bereich an der blauen Linie'],
 ex:'Netfront ist der Platz direkt vor dem Tor. In der eigenen Zone steht D2 dort, schützt die Mitte und hat den Gegner im Blick. In der Angriffszone steht dort unser Spieler, nimmt dem Torwart die Sicht und holt Rebounds.',
 solve:[{t:900,m:{D2:[210,318]},hl:[210,318,26],txt:'D2 an der Netfront'}]},

{id:'b-03',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({D1:[330,350],D2:[230,322],gF1:[342,366],gD1:[100,96],gD2:[300,96],P:[350,374]}),intro:I0,
 q:'Was ist der „kurze Pfosten“?',
 o:['Der Torpfosten auf der Seite, auf der die Scheibe ist','Der Torpfosten auf der Seite, die weiter weg von der Scheibe ist','Der kleinere der beiden Pfosten, weil das Tor schief steht','Die Mitte zwischen beiden Pfosten, direkt vor dem Torwart'],
 ex:'Kurzer Pfosten = Pfosten auf der Scheibenseite, langer Pfosten = der andere. Wechselt die Scheibe die Seite, wechselt auch der kurze Pfosten – und unsere Verteidiger tauschen: Der Verteidiger vor dem Tor geht in die Ecke, der aus der Ecke geht vors Tor.',
 solve:[{t:500,m:{},hl:[216,350,15],txt:'Kurzer Pfosten'},{t:1500,m:{P:[52,374],gF1:[60,366],D2:[82,345],D1:[170,316]},hl:[184,350,15],txt:'Seitenwechsel: D2 in die Ecke, D1 vors Tor'}]},

{id:'b-04',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',noSticks:true,
 setup:SD({C:[290,274],gC:[290,246],D1:[345,274],gW1:[345,246],F2:[236,274],gW2:[236,246],D2:[210,274],F3:[184,274],gD1:[110,99],gD2:[300,99],P:[290,260]}),intro:I0,
 q:'Was sind die „Hashmarks“?',
 o:['Die kurzen Striche links und rechts am Bullykreis','Die Bullypunkte in der neutralen Zone','Die rote Torlinie vor dem Tor','Die blaue Markierung im Torraum'],
 ex:'Hashmarks sind die kleinen Striche links und rechts am Bullykreis. Beim Bully stellen sich die Spieler daran auf – zum Beispiel D1 außen an den Hashmarks, F2 innen.',
 solve:[{t:700,m:{},hl:HASH,txt:'Hashmarks'}]},

{id:'b-06',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[230,200],D2:[140,164],F1:[290,142],F2:[110,240],F3:[330,230],gF1:[345,368],gF2:[300,175],gD1:[100,96],gD2:[300,96],P:[352,376]}),intro:I0,
 q:'Was bedeutet „Box + 1“?',
 o:['Unsere Grundordnung in der DZ: Jeder hat seine Zone, Gegner werden übergeben','Ein Spieler sitzt auf der Strafbank, wir spielen zu viert in einer Box','Wir spielen mit fünf Stürmern, damit wir schneller angreifen können','Vier Spieler greifen an, einer bleibt allein hinten als Absicherung'],
 ex:'Box + 1 ist unsere Basis in der defensiven Zone: Jeder Spieler ist in seiner Zone dafür verantwortlich, das Spiel zu stoppen. Die Zonen überschneiden sich. Wechselt ein Gegner die Zone, übergeben wir ihn. Je nach Situation kann jeder in jede Zone kommen.',
 solve:[{t:1200,m:{D1:[335,352],F1:[300,312],F2:[314,200],F3:[200,245],D2:[205,305]},hl:BOXZONES,txt:'Jeder in seiner Zone'},{t:1300,m:{gF2:[205,232],F2:[248,212],F3:[192,258]},txt:'Gegner wechselt die Zone: F2 übergibt an F3'}]},

{id:'b-07',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[318,325],D2:[215,322],F1:[300,240],F2:[270,205],F3:[195,235],gF1:[332,362],gF2:[230,285],gD1:[100,96],gD2:[300,96],P:[300,330]}),
 intro:[{t:900,m:{P:[352,386]}}],
 q:'Was bedeutet „Überladen“?',
 o:['Bei freier Scheibe oder gestopptem Spiel Überzahl an der Scheibe schaffen','Zu viele Spieler auf dem Eis haben und dafür eine Strafe bekommen','Die Scheibe ohne Ziel einfach hoch aus der eigenen Zone schießen','Mit zu viel Schwung in die Ecke fahren und an die Bande krachen'],
 ex:'Überladen heißt: Bei gestopptem Spiel oder freier Scheibe schaffen wir Überzahl an der Scheibe. Aber: Hinter dem eigenen Tor überladen wir nicht – sonst ist der Slot frei.',
 solve:[{t:1000,m:{D1:[352,360],F1:[326,378],gF1:[340,370]},hl:[342,374,44],txt:'Überladen: 2 gegen 1'}]},

{id:'b-08',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[300,270],D2:[215,320],F2:[260,200],gF1:[372,220],gD1:[100,96],gD2:[300,96],P:[380,226]}),intro:I0,
 q:'Was heißt „Pin“ – den Gegner festmachen?',
 o:['Den Gegner an der Bande festmachen, damit er nicht wegkommt','Den Puck mit dem Schlittschuh stoppen und unter Kontrolle bringen','Einen Pass hart an die Bande spielen, damit er abprallt','Sich vor das Tor stellen und den Torhüter beschützen'],
 ex:'Pin heißt: Den Gegner an der Bande festmachen – Körper zwischen Gegner und Tor, Schläger zum Puck. So stoppen wir seine Bewegung und gewinnen die Scheibe.',
 solve:[{t:1100,m:{gF1:[378,295],P:[386,301],D1:[356,303]},hl:[370,300,30],txt:'Pin: an der Bande festgemacht'},{t:600,m:{P:[340,312]},txt:'Scheibe gewonnen'}]},

{id:'b-09',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[245,275],D2:[170,320],gF1:[300,186],gD1:[100,96],gD2:[300,96],P:[310,190]}),intro:I0,
 q:'Was heißt „Stick on Puck“?',
 o:['Den Schläger zum Puck bringen – nicht auf den Körper','Mit dem Schläger laut aufs Eis klopfen, um anspielbar zu sein','Den Schläger hochhalten, damit der Gegner nicht passen kann','Den Puck mit der Hand stoppen und dann mit dem Schläger spielen'],
 ex:'Stick on Puck: Der Schläger geht zuerst zum Puck. Dabei haben wir nur eine Hand am Schläger – so ist unsere Reichweite größer, und mit der freien Hand können wir den Gegner steuern. So nehmen wir ihm die Scheibe weg, ohne eine Strafe zu riskieren.',
 solve:[{t:1000,m:{gF1:[275,245],P:[286,251],D1:[262,280]},txt:'Eine Hand am Schläger – zum Puck'},{t:500,m:{P:[232,300]},txt:'Scheibe gewonnen'}]},

{id:'b-10',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[290,330],D2:[160,250],F3:[200,186],gF1:[345,368],gF2:[245,205],gD1:[100,96],gD2:[300,96],P:[352,376]}),intro:I0,
 q:'„Box-out“ – was bedeutet das?',
 o:['Zwischen Gegner und Tor stehen und ihn vom Tor fernhalten','Den Gegner nach einem Foul in die Strafbox schicken','Die Scheibe mit voller Kraft aus der Zone schießen','Mit vier Spielern eine Box vor dem Tor bilden'],
 ex:'Box-out heißt: Wir stehen zwischen Gegner und Tor (Abwehrseite), kontrollieren seinen Schläger und lassen ihn nicht vors Tor. So gibt es keine Sichtbehinderung für unseren Torwart, kein Abfälschen und keine Nachschüsse.',
 solve:[{t:1000,m:{gF2:[222,268],D2:[214,300,-90]},txt:'Gegner will vors Tor'},{t:700,m:{gF2:[214,276]},hl:[214,290,30],txt:'Box-out: Er kommt nicht durch'}]},

{id:'b-11',chap:'Aufbau',lvl:'U13+',rink:'zone',
 setup:SD({D1:[110,385],D2:[300,380],F1:[40,240],F2:[160,200],F3:[330,260],gF1:[150,330],gD1:[100,96],gD2:[300,96],P:[118,390]}),intro:I0,
 q:'Was bedeutet „D2D“?',
 o:['Ein Pass von Verteidiger zu Verteidiger','Zwei Spieler gegen zwei Gegenspieler','Ein Doppelpass zwischen zwei Stürmern','Beide Verteidiger gehen auf den Puck'],
 ex:'D2D (D to D) ist ein Pass von einem Verteidiger zum anderen. So verlagern wir das Spiel auf die andere Seite – aber nur, wenn der Weg frei ist. F3 bietet sich an der halben Bande an, F2 kommt im Bogen und unterstützt ihn eng auf der Mittelbahn.',
 solve:[{t:400,m:{gF1:[130,365]},txt:'Druck auf D1'},{t:800,m:{P:'D2',F2:[215,250]},txt:'D2D: Seitenwechsel'},{t:900,m:{F3:[376,228],F2:[300,222]},txt:'F3 an die halbe Bande, F2 im Bogen dazu'},{t:550,m:{P:'F3'},txt:'Pass zu F3 – F2 unterstützt eng'}]},

{id:'b-12',chap:'Aufbau',lvl:'U13+',rink:'zone',
 setup:SD({D2:[120,350],D1:[90,320],C:[112,290],F3:[300,246],F2:[300,164],gF1:[140,270],gD1:[100,96],gD2:[300,96],P:[130,346]}),intro:I0,
 q:'Was ist ein „Wheel“?',
 o:['Der Verteidiger fährt mit der Scheibe hinter dem Tor herum auf die andere Seite','Eine schnelle Drehung beim Bully, um die Scheibe nach hinten zu spielen','Ein Schuss aus der Drehung, bei dem man sich einmal um sich selbst dreht','Die Scheibe rollt auf der Kante wie ein Rad über das Eis'],
 ex:'Beim Wheel fährt der Verteidiger mit der Scheibe hinter dem eigenen Tor herum und nimmt den Druck mit auf die andere Seite – von dort spielt er den Pass, zum Beispiel zu F3 über den Hashmarks (wie beim gewonnenen Bully in der DZ).',
 solve:[{t:900,m:{D2:[190,390],P:'D2'},txt:'Hinters Tor …'},{t:800,m:{D2:[245,386],P:'D2',F3:[344,246]},txt:'… herum: Wheel'},{t:550,m:{P:'F3'},txt:'Pass zu F3'}]},

{id:'b-13',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({F1:[350,370],F2:[205,300],F3:[200,193],D1:[100,99],D2:[300,99],gD1:[325,345],gF1:[220,250],gD2:[180,320],P:[358,378]}),intro:I0,
 q:'Was meint das Playbook mit „Todeszone“?',
 o:['Bande und Ecken in der Angriffszone – dort sind wir ungefährlich','Der Torraum des Gegners, den wir nicht betreten dürfen','Die Strafbank, auf der wir unserem Team nicht helfen können','Die Zone hinter der roten Linie, aus der Icing gepfiffen wird'],
 ex:'Aus Bande und Ecken fallen kaum Tore. Wir wollen dort weg – mit der Scheibe Richtung Mitte und Tor, wo wir gefährlich sind.',
 solve:[{t:700,m:{},hl:CORNERS,txt:'Todeszone: Bande und Ecken'},{t:1100,m:{F1:[300,255],P:'F1'},hl:0,txt:'Weg von der Bande – zur Mitte'}]},

{id:'b-14',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({F1:[345,368],F2:[205,318],F3:[230,186],D1:[100,99],D2:[300,99],gD1:[325,340],gD2:[185,318],gF1:[240,200],gF2:[140,157],P:[352,376]}),intro:I0,
 q:'Was ist ein „Sweet Spot“?',
 o:['Freies Eis, von dem aus man gut schießen kann','Die Stelle, an der der Puck am besten gleitet','Der beste Platz auf der eigenen Spielerbank','Die Ecke hinter dem Tor, wo man sicher ist'],
 ex:'Der Sweet Spot ist freies Eis mit guter Schussposition. Wer sich ständig bewegt und den Sweet Spot findet, bekommt Zeit und Raum für einen guten Schuss.',
 solve:[{t:900,m:{F3:[150,225]},hl:[150,225,28],txt:'F3 findet den Sweet Spot'},{t:600,m:{P:'F3'},txt:'Pass'},{t:450,m:{P:[192,346]},hl:0,txt:'Schuss!'}]},

{id:'b-15',chap:'Angriff',lvl:'U15+',rink:'big',
 setup:{gT:[200,458],F1:[90,48],C:[200,34],F2:[310,48],D1:[205,8],D2:[110,8],gD1:[140,215],gD2:[260,215],P:[98,54]},intro:I0,
 q:'Wer ist der „Trailer“?',
 o:['Ein Spieler, der dem Angriff hinterherfährt und für einen Rückpass bereit ist','Der Betreuer, der während des Spiels die Trinkflaschen an die Bande bringt','Der Stürmer, der als Allererster mit der Scheibe in die Angriffszone fährt','Ein Spieler, der gerade auf der Strafbank sitzt und auf seinen Einsatz wartet'],
 ex:'Der Trailer fährt dem Angriff hinterher. Fährt der mittlere Stürmer hart aufs Tor, zieht er die Verteidiger nach hinten – dahinter ist Platz. Der Pass hoch zum Trailer (hier D1) ist eine der sechs Optionen beim Eintritt.',
 solve:[{t:1700,m:{F1:[95,330],P:[103,336],C:[200,440],F2:[310,350],gD1:[150,395],gD2:[248,418],D1:[200,290],D2:[150,130]},txt:'C fährt hart aufs Tor – D1 kommt nach'},{t:550,m:{P:'D1'},hl:[200,290,26],txt:'Pass hoch zum Trailer D1'},{t:450,m:{P:[204,466]},hl:0,txt:'Schuss!'}]},

{id:'b-16',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({D1:[300,101],F2:[240,250],F1:[350,300],F3:[110,230],gD1:[230,300],gD2:[160,300],gF1:[290,142],P:[308,105]}),intro:I0,
 q:'Was ist ein „Screen“?',
 o:['Ein Spieler steht vor dem Torhüter und nimmt ihm die Sicht','Der große Videowürfel unter dem Hallendach mit der Zeitanzeige','Ein harter Schuss von der blauen Linie direkt auf das Tor','Ein Pass hinter dem Tor auf die andere Seite zum Mitspieler'],
 ex:'Beim Screen steht ein Spieler direkt vor dem Torhüter und nimmt ihm die Sicht. Dazu kommen Tip-in (Abfälschen) und Rebound (Abpraller) – deshalb steht immer ein Spieler vor dem Tor.',
 solve:[{t:900,m:{F2:[202,316]},hl:[202,322,24],txt:'F2 nimmt die Sicht'},{t:550,m:{P:[206,344]},txt:'Schuss durch den Screen'}]},

{id:'b-17',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({D1:[80,101],F1:[378,238],F2:[205,300],F3:[200,178],gD1:[250,330],gD2:[150,330],gF1:[110,135],P:[88,105]}),intro:I0,
 q:'Was bedeutet „Rim“?',
 o:['Die Scheibe hart an der Bande entlang um die Zone spielen','Ein Schuss genau ins obere Eck des gegnerischen Tores','Den Puck hochlupfen, damit er über die Schläger fliegt','Den Gegner mit dem Körper fest an die Bande drücken'],
 ex:'Beim Rim spielt man die Scheibe hart an der Bande entlang, oft hinter dem Tor herum. Die Gegner kommen schwer ran – und auf der anderen Seite nimmt ein Mitspieler die Scheibe an.',
 solve:boardPath(RIMPTS,0.75,'Rim: immer an der Bande entlang').concat([{t:200,m:{},txt:'… zu F1 auf der anderen Seite'}])},

{id:'b-18',chap:'Special Teams',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({D1:[200,101],F1:[60,230],F3:[340,230],F2:[200,322],C:[200,215],gD1:[140,164],gD2:[260,164],gF1:[150,285],gF2:[250,285],P:[348,236]}),intro:I0,
 q:'Wer ist im Überzahlspiel der „Bumper“?',
 o:['Der Spieler in der Mitte – im Slot zwischen den Bullykreisen','Der Spieler direkt vor dem Tor, der dem Torwart die Sicht nimmt','Der Spieler an der blauen Linie, der die Scheibe in der Zone hält','Der Spieler hinter dem Tor, der von dort die Pässe verteilt'],
 ex:'Der Bumper steht im Überzahlaufbau in der Mitte. Er ist für schnelle Pässe und Schüsse aus dem Slot da – zum Beispiel: F3 spielt zum Bumper, der legt zurück auf D1, und D1 schießt.',
 solve:[{t:500,m:{},hl:[200,215,26],txt:'Bumper (hier: C)'},{t:550,m:{P:'C'},txt:'F3 zum Bumper'},{t:550,m:{P:'D1'},hl:0,txt:'Bumper zu D1'},{t:500,m:{P:[200,346]},txt:'D1 schießt!'}]},

{id:'b-19',chap:'Forecheck & Backcheck',lvl:'U17',rink:'zone',label:OZ,
 setup:SO({F1:[200,200],F2:[100,157],F3:[300,157],D1:[100,99],D2:[300,99],gD1:[200,390],gD2:[110,385],gF1:[370,260],gF2:[30,260],P:[208,396]}),intro:I0,
 q:'Was ist „Forechecking“?',
 o:['Druck auf den Gegner in seiner eigenen Zone, um die Scheibe schnell zurückzugewinnen','Das gemeinsame Aufwärmen auf dem Eis, bevor das Spiel richtig losgeht','Schnell zurückfahren in die eigene Zone, nachdem wir die Scheibe verloren haben','Ein harter Schuss von vorne direkt aufs Tor, ohne vorher noch zu passen'],
 ex:'Beim Forechecking setzen wir den Gegner in seiner Zone unter Druck, damit er nicht aufbauen kann. F1 jagt, F2 macht die Bande zu. Ein Stürmer spielt den F3: Er bleibt oben im Slot zwischen den Bullykreisen – so ist er anspielbar und sichert ab, falls der Gegner die Scheibe gewinnt und angreift.',
 solve:[{t:900,m:{F1:[225,372],F2:[90,240],F3:[200,230]},txt:'F1 jagt – F3 bleibt oben im Slot'},{t:600,m:{P:'gD2'},txt:'Gegner muss schnell passen'},{t:700,m:{F2:[115,350]},hl:[112,370,32],txt:'F2 macht zu – Druck'},{t:400,m:{},hl:[200,230,28],txt:'F3: anspielbar und Absicherung'}]},

{id:'b-20',chap:'Forecheck & Backcheck',lvl:'U17',rink:'full',
 setup:{T:[52,150],gT:[548,150],F1:[440,150],F2:[365,95],F3:[365,205],D1:[255,140],D2:[255,200],gD1:[578,165],gD2:[520,60],gF1:[520,255],gF2:[480,80],P:[586,170]},intro:I0,
 q:'Was ist eine „Trap“?',
 o:['Abwartendes Forechecking: Wir verteidigen die rote Linie und lenken den Gegner an die Bande','Ein verbotener Haken mit dem Schläger, für den es zwei Minuten Strafe gibt','Wenn der Torwart die Scheibe festhält und der Schiedsrichter abpfeifen muss','Ein frecher Pass durch die Beine des Gegners hindurch zum freien Mitspieler'],
 ex:'Bei der Trap (1-2-2) teilt F1 die Mitte und lenkt den Puckführenden im Bogen an die Bande. Der zweite Stürmer kommt ebenfalls im Bogen – gemeinsam gewinnen sie die Scheibe an der Bande an der blauen Linie. F2 schützt die andere Seite zwischen den blauen Linien, D1 und D2 rücken auf. Wir wollen die Scheibe vor der roten Linie gewinnen – dann bleibt dem Gegner sonst nur noch ein Icing.',
 solve:[{t:1200,m:{gD1:[500,232],P:'gD1',F1:[468,188],D1:[285,150],D2:[298,232]},txt:'F1 teilt die Mitte und lenkt an die Bande'},
        {t:1200,m:{gD1:[425,266],P:'gD1',F1:[446,246],F3:[398,236],gF2:[330,70],F2:[318,96]},hl:TRAPZONE,txt:'F3 kommt im Bogen – F2 schützt die andere Seite'},
        {t:700,m:{gD1:[405,280],P:[402,284],F1:[422,272],F3:[392,262]},hl:[402,278,28],txt:'Scheibe gewonnen – vor der roten Linie'},
        {t:500,m:{P:'F3'},hl:0,txt:'Gegner bleibt nur noch Icing'}]},

{id:'b-21',chap:'Forecheck & Backcheck',lvl:'U17',rink:'zone',label:OZ,
 setup:SO({D1:[100,101],D2:[300,101],F1:[205,300],F2:[150,250],F3:[230,171],gD1:[250,340],gD2:[150,330],gF1:[355,210],P:[390,330]}),intro:I0,
 q:'Was bedeutet „Pinchen“?',
 o:['Der Verteidiger rückt an der Bande nach vorne, um die Scheibe in der Zone zu halten','Den Gegner heimlich kneifen, wenn der Schiedsrichter gerade nicht hinschaut','Den eigenen Schläger kürzen, damit man die Scheibe besser kontrollieren kann','Der Torwart verlässt sein Tor, damit ein zusätzlicher Feldspieler kommen kann'],
 ex:'Beim Pinch rückt der Verteidiger an der Bande nach vorne und hält die Scheibe in der Angriffszone. Wichtig: Ein Stürmer (z. B. F3) sichert dann die blaue Linie ab.',
 solve:[{t:700,m:{P:[386,200],gF1:[365,193]},txt:'Scheibe kommt an der Bande hoch'},{t:700,m:{D2:[372,187],P:[380,190],F3:[300,102]},hl:[372,187,28],txt:'D2 pincht – F3 sichert die blaue Linie'}]},

{id:'b-22',chap:'Forecheck & Backcheck',lvl:'U17',rink:'full',
 setup:{T:[52,150],gT:[548,150],D1:[330,150],D2:[300,215],gF1:[420,150],gF2:[430,230],P:[410,156]},intro:I0,
 q:'Was ist die „Gap“?',
 o:['Der Abstand zwischen Verteidiger und angreifendem Gegner','Die Lücke zwischen Torwart und Pfosten, in die man zielt','Eine kurze Pause im Spiel, zum Beispiel nach einem Tor','Der Abstand zwischen zwei Reihenwechseln auf der Bank'],
 ex:'Die Gap ist der Abstand zwischen Verteidiger und Gegner. Eine gute Gap ist klein: Der Verteidiger bleibt nah dran, damit der Gegner keine Zeit und keinen Raum hat.',
 solve:[{t:1500,m:{gF1:[250,150],P:[240,156],D1:[200,150],gF2:[260,230],D2:[205,220]},hl:[225,150,40],txt:'Gute Gap: nah dran bleiben'}]}
];
