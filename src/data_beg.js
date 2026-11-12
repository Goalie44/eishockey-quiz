const HAUS={d:'M186 350 L110 262 L110 212 L290 212 L290 262 L214 350 Z'};
const HASH={d:'M328 260a16 16 0 1 0 32 0a16 16 0 1 0 -32 0 M220 260a16 16 0 1 0 32 0a16 16 0 1 0 -32 0'};
const CORNERS={d:'M308 372a42 42 0 1 0 84 0a42 42 0 1 0 -84 0 M8 372a42 42 0 1 0 84 0a42 42 0 1 0 -84 0'};
const BOXLINES={d:'M200 46 V350 M5 180 H395',line:true};
const OZ='gegnerisches Tor';
const I0=[{t:300,m:{}}];
const SD=o=>Object.assign({T:[200,338]},o);
const SO=o=>Object.assign({gT:[200,338]},o);

const QSB=[
{id:'b-01',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({D1:[255,322],D2:[150,322],F1:[318,340],F2:[255,225],F3:[150,225],gF1:[345,368],gF2:[225,280],gD1:[100,55],gD2:[300,55],P:[352,376]}),intro:I0,
 q:'Was ist das „Haus“?',
 o:['Der gefährliche Bereich vor unserem Tor – von den Pfosten bis hoch zu den Bullykreisen','Die Strafbank','Die Ecke hinter dem Tor','Die neutrale Zone zwischen den blauen Linien'],
 ex:'Das Haus ist der gefährlichste Bereich vor dem Tor: von den Pfosten über die Bullypunkte bis zum oberen Rand der Bullykreise. Aus dem Haus fallen die meisten Tore – das schützen wir.',
 solve:[{t:700,m:{},hl:HAUS,txt:'Das Haus'}]},

{id:'b-02',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({D1:[320,335],D2:[165,290],F1:[300,260],gF1:[345,368],gF2:[240,292],gD1:[100,55],gD2:[300,55],P:[352,376]}),intro:I0,
 q:'Was bedeutet „Netfront“?',
 o:['Der Platz direkt vor dem Tor','Das Tornetz hinten','Die Linie zwischen den Pfosten','Der Bereich an der blauen Linie'],
 ex:'Netfront ist der Platz direkt vor dem Tor. In der eigenen Zone steht D2 dort, schützt die Mitte und hat den Gegner im Blick. In der Angriffszone steht dort unser Spieler, nimmt dem Torwart die Sicht und holt Rebounds.',
 solve:[{t:900,m:{D2:[210,318]},hl:[210,318,26],txt:'D2 an der Netfront'}]},

{id:'b-03',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({D1:[318,330],D2:[230,322],gF1:[342,366],gD1:[100,55],gD2:[300,55],P:[350,374]}),intro:I0,
 q:'Was ist der „kurze Pfosten“?',
 o:['Der Torpfosten auf der Seite, auf der die Scheibe ist','Der Pfosten, der weiter weg von der Scheibe ist','Der kleinere der beiden Pfosten','Die Mitte zwischen den Pfosten'],
 ex:'Kurzer Pfosten = Pfosten auf der Scheibenseite, langer Pfosten = der andere. Wechselt die Scheibe die Seite, wechselt auch der kurze Pfosten.',
 solve:[{t:500,m:{},hl:[216,350,15],txt:'Kurzer Pfosten'},{t:1300,m:{P:[52,374],gF1:[60,366],D1:[82,332],D2:[172,322]},hl:[184,350,15],txt:'Scheibe links – jetzt ist das der kurze Pfosten'}]},

{id:'b-04',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({C:[290,274],gC:[290,246],D1:[345,274],gW1:[345,246],F2:[236,274],gW2:[236,246],D2:[248,296],F3:[222,292],gD1:[110,60],gD2:[300,60],P:[290,260]}),intro:I0,
 q:'Was sind die „Hashmarks“?',
 o:['Die kurzen Striche links und rechts am Bullykreis','Die Punkte in der neutralen Zone','Die Torlinie','Die Markierung im Torraum'],
 ex:'Hashmarks sind die kleinen Striche links und rechts am Bullykreis. Beim Bully stellen sich die Spieler daran auf – zum Beispiel D1 außen an den Hashmarks.',
 solve:[{t:700,m:{},hl:HASH,txt:'Hashmarks'}]},

{id:'b-05',chap:'Zonen & Positionen',lvl:'U13+',rink:'zone',
 setup:SD({D1:[330,350],F1:[310,320],D2:[225,322],F2:[275,210],F3:[200,235],gF1:[350,372],gD1:[100,60],gD2:[300,60],P:[355,380]}),intro:I0,
 q:'Was ist der „Point“?',
 o:['Die Position der Verteidiger an der blauen Linie','Der Bullypunkt in der Mitte','Ein Punkt für ein Tor','Die Spitze des Torraums'],
 ex:'Der Point ist die Position der Verteidiger an der blauen Linie. Von dort kommen viele Schüsse – deshalb schließen F2 und F3 zuerst die Schussbahn.',
 solve:[{t:1000,m:{P:[306,66]},hl:[300,60,26],txt:'Pass zum Point'}]},

{id:'b-06',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[230,200],D2:[140,150],F1:[290,120],F2:[110,240],F3:[330,230],gF1:[345,368],gF2:[300,165],gD1:[100,55],gD2:[300,55],P:[352,376]}),intro:I0,
 q:'Was bedeutet „Box + 1“?',
 o:['Unsere Grundordnung in der DZ: Jeder hat seine Zone, Gegner werden von Zone zu Zone übergeben','Ein Spieler sitzt auf der Strafbank','Wir spielen mit fünf Stürmern','Vier Spieler stürmen, einer bleibt hinten'],
 ex:'Box + 1 ist unsere Basis in der defensiven Zone: Jeder Spieler ist in seiner Zone dafür verantwortlich, das Spiel zu stoppen. Wechselt ein Gegner die Zone, übergeben wir ihn. Je nach Situation kann jeder in jede Zone kommen.',
 solve:[{t:1200,m:{D1:[328,345],F1:[296,288],D2:[218,312],F2:[306,192],F3:[218,192]},hl:BOXLINES,txt:'Jeder in seiner Zone'},{t:1300,m:{gF2:[110,175],F2:[262,186],F3:[150,186]},txt:'Gegner wird übergeben: F2 → F3'}]},

{id:'b-07',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[318,325],D2:[215,322],F1:[300,240],F2:[270,205],F3:[195,235],gF1:[332,362],gF2:[230,285],gD1:[100,55],gD2:[300,55],P:[300,330]}),
 intro:[{t:900,m:{P:[352,386]}}],
 q:'Was bedeutet „Überladen“?',
 o:['Bei freier Scheibe oder gestopptem Spiel Überzahl an der Scheibe schaffen','Zu viele Spieler auf dem Eis haben','Die Scheibe hoch aus der Zone schießen','Mehr Ausrüstung tragen'],
 ex:'Überladen heißt: Bei gestopptem Spiel oder freier Scheibe schaffen wir Überzahl an der Scheibe. Aber: Hinter dem eigenen Tor überladen wir nicht – sonst ist der Slot frei.',
 solve:[{t:1000,m:{D1:[352,360],F1:[326,378],gF1:[340,370]},hl:[342,374,44],txt:'Überladen: 2 gegen 1'}]},

{id:'b-08',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[300,270],D2:[215,320],F2:[260,200],gF1:[372,220],gD1:[100,55],gD2:[300,55],P:[380,226]}),intro:I0,
 q:'Was heißt „Pin“ – den Gegner festmachen?',
 o:['Den Gegner an der Bande festmachen, damit er nicht wegkommt','Den Puck mit dem Schlittschuh stoppen','Einen Pass an die Bande spielen','Sich vor das Tor stellen'],
 ex:'Pin heißt: Den Gegner an der Bande festmachen – Körper zwischen Gegner und Tor, Schläger zum Puck. So stoppen wir seine Bewegung und gewinnen die Scheibe.',
 solve:[{t:1100,m:{gF1:[378,295],P:[386,301],D1:[356,303]},hl:[370,300,30],txt:'Pin: an der Bande festgemacht'},{t:600,m:{P:[340,312]},txt:'Scheibe gewonnen'}]},

{id:'b-09',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[245,275],D2:[170,320],gF1:[300,180],gD1:[100,55],gD2:[300,55],P:[310,186]}),intro:I0,
 q:'Was heißt „Stick on Puck“?',
 o:['Den Schläger zum Puck bringen – nicht auf den Körper','Mit dem Schläger aufs Eis klopfen','Den Schläger hochhalten','Den Puck mit der Hand spielen'],
 ex:'Stick on Puck: Der Schläger geht zuerst zum Puck. So nehmen wir dem Gegner die Scheibe weg, ohne eine Strafe zu riskieren – erst Schläger, dann Körper.',
 solve:[{t:1000,m:{gF1:[275,245],P:[286,251],D1:[262,280]},txt:'Schläger zum Puck'},{t:500,m:{P:[232,300]},txt:'Scheibe gewonnen'}]},

{id:'b-10',chap:'Defensive',lvl:'U13+',rink:'zone',
 setup:SD({D1:[290,330],D2:[160,250],F3:[200,180],gF1:[345,368],gF2:[245,205],gD1:[100,55],gD2:[300,55],P:[352,376]}),intro:I0,
 q:'„Box-out“ – was bedeutet das?',
 o:['Zwischen Gegner und Tor stehen und ihn vom Tor fernhalten – Abwehrseite halten, Schläger kontrollieren','Den Gegner in die Strafbox schicken','Die Scheibe aus der Zone schießen','Mit vier Spielern eine Box bilden'],
 ex:'Box-out heißt: Wir stehen zwischen Gegner und Tor (Abwehrseite), kontrollieren seinen Schläger und lassen ihn nicht vors Tor. So gibt es keinen Abpraller und kein Abfälschen.',
 solve:[{t:1000,m:{gF2:[222,268],D2:[214,300,-90]},txt:'Gegner will vors Tor'},{t:700,m:{gF2:[214,276]},hl:[214,290,30],txt:'Box-out: Er kommt nicht durch'}]},

{id:'b-11',chap:'Aufbau',lvl:'U13+',rink:'zone',
 setup:SD({D1:[110,385],D2:[300,380],F1:[40,240],F2:[160,200],F3:[340,250],gF1:[150,330],gD1:[100,55],gD2:[300,55],P:[118,390]}),intro:I0,
 q:'Was bedeutet „D2D“?',
 o:['Ein Pass von Verteidiger zu Verteidiger','Zwei gegen zwei','Ein Doppelpass zwischen zwei Stürmern','Beide Verteidiger gehen auf den Puck'],
 ex:'D2D (D to D) ist ein Pass von einem Verteidiger zum anderen. So verlagern wir das Spiel auf die andere Seite – aber nur, wenn der Weg frei ist.',
 solve:[{t:400,m:{gF1:[130,365]},txt:'Druck auf D1'},{t:800,m:{P:'D2'},txt:'D2D: Seitenwechsel'},{t:600,m:{P:'F3'},txt:'Pass zu F3'}]},

{id:'b-12',chap:'Aufbau',lvl:'U13+',rink:'zone',
 setup:SD({D2:[176,346],D1:[100,330],C:[112,305],F3:[300,246],F2:[300,150],gF1:[120,280],gD1:[100,55],gD2:[300,55],P:[186,340]}),intro:I0,
 q:'Was ist ein „Wheel“?',
 o:['Der Verteidiger fährt mit der Scheibe hinter dem Tor herum auf die andere Seite','Eine Drehung beim Bully','Ein Schuss mit Drehung','Die Scheibe rollt auf der Kante'],
 ex:'Beim Wheel fährt der Verteidiger mit der Scheibe hinter dem eigenen Tor herum und nimmt den Druck mit auf die andere Seite – von dort spielt er den Pass, zum Beispiel zu F3 über den Hashmarks.',
 solve:[{t:700,m:{D2:[195,388],P:'D2'},txt:'Hinters Tor …'},{t:800,m:{D2:[245,386],P:'D2',F3:[344,246]},txt:'… herum: Wheel'},{t:550,m:{P:'F3'},txt:'Pass zu F3'}]},

{id:'b-13',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({F1:[350,370],F2:[205,300],F3:[200,190],D1:[100,60],D2:[300,60],gD1:[325,345],gF1:[220,250],gD2:[180,320],P:[358,378]}),intro:I0,
 q:'Was meint das Playbook mit „Todeszone“?',
 o:['Bande und Ecken in der Angriffszone – dort sind wir ungefährlich','Der Torraum des Gegners','Die Strafbank','Die Zone hinter der roten Linie'],
 ex:'Aus Bande und Ecken fallen kaum Tore. Wir wollen dort weg – mit der Scheibe Richtung Mitte und Tor, wo wir gefährlich sind.',
 solve:[{t:700,m:{},hl:CORNERS,txt:'Todeszone: Bande und Ecken'},{t:1100,m:{F1:[300,255],P:'F1'},hl:0,txt:'Weg von der Bande – zur Mitte'}]},

{id:'b-14',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({F1:[345,368],F2:[205,318],F3:[230,180],D1:[100,60],D2:[300,60],gD1:[325,340],gD2:[185,318],gF1:[240,200],gF2:[140,140],P:[352,376]}),intro:I0,
 q:'Was ist ein „Sweet Spot“?',
 o:['Freies Eis, von dem aus man gut schießen kann','Die Stelle, an der der Puck am besten gleitet','Der Platz auf der Spielerbank','Die Ecke hinter dem Tor'],
 ex:'Der Sweet Spot ist freies Eis mit guter Schussposition. Wer sich ständig bewegt und den Sweet Spot findet, bekommt Zeit und Raum für einen guten Schuss.',
 solve:[{t:900,m:{F3:[150,225]},hl:[150,225,28],txt:'F3 findet den Sweet Spot'},{t:600,m:{P:'F3'},txt:'Pass'},{t:450,m:{P:[192,346]},hl:0,txt:'Schuss!'}]},

{id:'b-15',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({F1:[150,14],F2:[300,14],F3:[60,14],D1:[210,12],gD1:[140,110],gD2:[270,110],P:[158,20]}),intro:I0,
 q:'Wer ist der „Trailer“?',
 o:['Ein Spieler, der dem Angriff hinterherfährt und für einen Rückpass bereit ist','Der Spieler, der die Trinkflaschen bringt','Der Stürmer, der als Erster in die Zone fährt','Ein Spieler, der auf der Strafbank wartet'],
 ex:'Der Trailer fährt dem Angriff hinterher. Ziehen die Stürmer die Verteidiger nach hinten, ist hinter ihnen Platz – der Pass hoch zum Trailer ist eine der sechs Optionen beim Eintritt.',
 solve:[{t:1300,m:{F1:[140,230],P:[148,236],F2:[300,250],F3:[55,190],gD1:[150,280],gD2:[270,290],D1:[205,150]},txt:'Stürmer ziehen nach hinten'},{t:500,m:{P:'D1'},hl:[205,150,26],txt:'Pass hoch zum Trailer'},{t:450,m:{P:[205,346]},hl:0,txt:'Schuss!'}]},

{id:'b-16',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({D1:[300,62],F2:[240,250],F1:[350,300],F3:[110,230],gD1:[230,300],gD2:[160,300],gF1:[290,120],P:[308,68]}),intro:I0,
 q:'Was ist ein „Screen“?',
 o:['Ein Spieler steht vor dem Torhüter und nimmt ihm die Sicht','Der Videowürfel in der Halle','Ein Schuss von der blauen Linie','Ein Pass hinter dem Tor'],
 ex:'Beim Screen steht ein Spieler direkt vor dem Torhüter und nimmt ihm die Sicht. Dazu kommen Tip-in (Abfälschen) und Rebound (Abpraller) – deshalb steht immer ein Spieler vor dem Tor.',
 solve:[{t:900,m:{F2:[202,316]},hl:[202,322,24],txt:'F2 nimmt die Sicht'},{t:550,m:{P:[206,344]},txt:'Schuss durch den Screen'}]},

{id:'b-17',chap:'Angriff',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({D1:[80,62],F1:[378,230],F2:[205,300],F3:[200,170],gD1:[250,330],gD2:[150,330],gF1:[110,110],P:[88,68]}),intro:I0,
 q:'Was bedeutet „Rim“?',
 o:['Die Scheibe hart an der Bande entlang um die Zone spielen','Ein Schuss ins obere Toreck','Den Puck hochlupfen','Den Gegner an die Bande drücken'],
 ex:'Beim Rim spielt man die Scheibe hart an der Bande entlang, oft hinter dem Tor herum. Die Gegner kommen schwer ran – und auf der anderen Seite nimmt ein Mitspieler die Scheibe an.',
 solve:[{t:500,m:{P:[14,300]},txt:'Rim an der Bande …'},{t:500,m:{P:[110,402]}},{t:600,m:{P:[300,402]}},{t:500,m:{P:[384,238]},txt:'… zu F1 auf der anderen Seite'}]},

{id:'b-18',chap:'Special Teams',lvl:'U15+',rink:'zone',label:OZ,
 setup:SO({D1:[200,62],F1:[60,230],F3:[340,230],F2:[200,322],C:[200,215],gD1:[140,150],gD2:[260,150],gF1:[150,285],gF2:[250,285],P:[208,68]}),intro:I0,
 q:'Wer ist im Überzahlspiel der „Bumper“?',
 o:['Der Spieler in der Mitte – im Slot zwischen den Bullykreisen','Der Spieler direkt vor dem Tor','Der Spieler an der blauen Linie','Der Spieler hinter dem Tor'],
 ex:'Der Bumper steht im Überzahlaufbau in der Mitte. Er ist für schnelle Pässe und Schüsse aus dem Slot da. In Unterzahl kontrolliert unser F2 die Mitte und den Bumper.',
 solve:[{t:500,m:{},hl:[200,215,26],txt:'Bumper (hier: C)'},{t:550,m:{P:'C'},txt:'Pass in die Mitte'},{t:450,m:{P:[196,346]},hl:0,txt:'Schuss!'}]},

{id:'b-19',chap:'Forecheck & Backcheck',lvl:'U17',rink:'zone',label:OZ,
 setup:SO({F1:[200,200],F2:[300,140],F3:[100,140],D1:[100,60],D2:[300,60],gD1:[200,390],gD2:[110,385],gF1:[370,260],gF2:[30,260],P:[208,396]}),intro:I0,
 q:'Was ist „Forechecking“?',
 o:['Druck auf den Gegner in seiner eigenen Zone, um die Scheibe schnell zurückzugewinnen','Das Aufwärmen vor dem Spiel','Zurückfahren in die eigene Zone','Ein Schuss direkt von vorne'],
 ex:'Beim Forechecking setzen wir den Gegner in seiner Zone unter Druck, damit er nicht aufbauen kann. Im 1-2-2 jagt F1, F2 liest und unterstützt, F3 macht die Bande zu und sichert ab.',
 solve:[{t:900,m:{F1:[225,372],F2:[255,250],F3:[90,240]},txt:'F1 jagt'},{t:600,m:{P:'gD2'},txt:'Gegner muss schnell passen'},{t:700,m:{F3:[115,350],F2:[180,300]},hl:[112,370,32],txt:'F3 macht zu – Druck'}]},

{id:'b-20',chap:'Forecheck & Backcheck',lvl:'U17',rink:'full',
 setup:{T:[52,150],gT:[548,150],F1:[440,150],F2:[365,95],F3:[365,205],D1:[255,115],D2:[255,185],gD1:[578,165],gD2:[520,60],gF1:[470,240],P:[586,170]},intro:I0,
 q:'Was ist eine „Trap“?',
 o:['Abwartendes Forechecking: Wir stehen in der neutralen Zone, verteidigen die rote Linie und lenken den Gegner an die Bande','Ein Foul mit dem Schläger','Wenn der Torwart den Puck festhält','Ein Pass durch die Beine'],
 ex:'Die Trap (1-2-2) spielen wir, wenn der Gegner hinter seinem Tor volle Kontrolle hat. Wir verteidigen die rote Linie, F1 teilt das Eis und winkelt an, der Spieler auf der Scheibenseite attackiert den Pass, die anderen sichern ab.',
 solve:[{t:1100,m:{gD1:[495,240],P:'gD1',F1:[470,200]},txt:'F1 winkelt an – Richtung Bande'},{t:700,m:{P:'gF1'},txt:'Pass an die Bande …'},{t:700,m:{F3:[455,248]},hl:[465,245,30],txt:'… F3 attackiert'}]},

{id:'b-21',chap:'Forecheck & Backcheck',lvl:'U17',rink:'zone',label:OZ,
 setup:SO({D1:[100,62],D2:[300,62],F1:[205,300],F2:[150,250],F3:[230,160],gD1:[250,340],gD2:[150,330],gF1:[355,210],P:[390,330]}),intro:I0,
 q:'Was bedeutet „Pinchen“?',
 o:['Der Verteidiger rückt von der blauen Linie an der Bande nach vorne, um die Scheibe in der Zone zu halten','Den Gegner kneifen','Den Schläger kürzen','Der Torwart verlässt sein Tor'],
 ex:'Beim Pinch rückt der Verteidiger an der Bande nach vorne und hält die Scheibe in der Angriffszone. Wichtig: Ein Stürmer (z. B. F3) sichert dann die blaue Linie ab.',
 solve:[{t:700,m:{P:[386,200],gF1:[365,190]},txt:'Scheibe kommt an der Bande hoch'},{t:700,m:{D2:[372,182],P:[380,186],F3:[300,64]},hl:[372,182,28],txt:'D2 pincht – F3 sichert die blaue Linie'}]},

{id:'b-22',chap:'Forecheck & Backcheck',lvl:'U17',rink:'full',
 setup:{T:[52,150],gT:[548,150],D1:[330,150],D2:[300,215],gF1:[420,150],gF2:[430,230],P:[410,156]},intro:I0,
 q:'Was ist die „Gap“?',
 o:['Der Abstand zwischen Verteidiger und angreifendem Gegner','Die Lücke im Tor','Eine Pause im Spiel','Der Abstand zwischen zwei Reihenwechseln'],
 ex:'Die Gap ist der Abstand zwischen Verteidiger und Gegner. Eine gute Gap ist klein: Der Verteidiger bleibt nah dran, damit der Gegner keine Zeit und keinen Raum hat.',
 solve:[{t:1500,m:{gF1:[250,150],P:[240,156],D1:[200,150],gF2:[260,230],D2:[205,220]},hl:[225,150,40],txt:'Gute Gap: nah dran bleiben'}]}
];
