/* ---------- Kapitel Torwart (nach DEB-Rahmentrainingskonzeption) ---------- */
// Tor unten: Torlinie y=350 (zone) bzw. y=470 (big), Pfosten x=186/214
const twOn=(p,d,gy)=>{gy=gy||350;const dx=p[0]-200,dy=p[1]-gy,l=Math.hypot(dx,dy)||1;return [Math.round(200+dx/l*d),Math.round(gy+dy/l*d)]};
const twBl=(pl,gy)=>{gy=gy||350;const dx=200-pl[0],dy=gy-pl[1],l=Math.hypot(dx,dy)||1;return [Math.round(pl[0]+dx/l*13),Math.round(pl[1]+dy/l*13)]};
const twTri=(p,gy,t,c)=>{gy=gy||350;c=c||'#2f6fd6';return {areas:[{d:`M${p[0]} ${p[1]}L186 ${gy}L214 ${gy}Z`,c,t:t||'',x:p[0],y:p[1]-16}]}};
const TWZ=o=>Object.assign({T:[200,338]},o);
const TWB=o=>Object.assign({T:[200,458]},o);
const UT='unser Tor';
const SLOT_RED={areas:[{d:'M186 350 L120 262 L120 222 L280 222 L280 262 L214 350 Z',c:'#e0393e',t:'Slot – hier nicht hin',x:200,y:240}]};
const CORNER_OK={areas:[{d:'M300 330A60 60 0 0 0 392 380V330Z M300 330H392V300H300Z',c:'#1D9E75',t:'Ecke',x:350,y:320}]};

const P1=[300,240],B1=twBl(P1),P1b=[110,250],B1b=twBl(P1b);
const P7a=[110,262],B7a=twBl(P7a),P7b=[290,262],B7b=twBl(P7b);

const QST=[
{id:'tw-01',chap:'Positionsspiel',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:P1,gF2:P1b,D1:[250,300],D2:[150,300],P:B1}),intro:I0,
 q:'Der Gegner rechts hat die Scheibe. Wonach richtet sich unser Torwart aus?',
 o:['Nach dem Puck – Nase und Bauchnabel zeigen mittig zum Puck','Nach dem Gegner, der dem Tor am nächsten steht','Immer gerade nach vorne zur Mitte des Eises','Nach dem freien Gegner ohne Scheibe'],
 ex:'Der Torwart richtet sich immer nach dem Puck aus, nicht nach dem Spieler. DEB-Faustregel: „Nase und Bauchnabel mittig zum Puck.“ Dann steht er auf der Linie zwischen Puck und Tormitte und deckt den Schusswinkel am besten ab. Wandert der Puck, wandert der Torwart mit.',
 solve:[{t:1000,m:{T:twOn(B1,16)},hl:twTri(B1),txt:'Mittig zum Puck'},{t:700,m:{P:'gF2'},hl:null,txt:'Pass …'},{t:800,m:{T:twOn(B1b,16)},hl:twTri(B1b),txt:'… und der Torwart geht mit'}]},

{id:'tw-02',chap:'Positionsspiel',lvl:'Torhüter',rink:'big',label:UT,
 setup:TWB({gF1:[200,150],D1:[190,40],P:[200,163]}),intro:[{t:1500,m:{gF1:[200,290],D1:[195,170],P:[200,303]},lin:true,txt:'Alleingang – 1 gegen 0!'}],
 q:'Ein Gegner kommt ganz alleine aufs Tor (1 gegen 0). Wo steht unser Torwart?',
 o:['Weiter vorne, außerhalb des Torraums – das macht den Winkel klein','Ganz hinten auf der Torlinie, damit er mehr Zeit hat','Er fährt dem Gegner bis zur blauen Linie entgegen','Er geht sofort in den Butterfly und wartet im Tor'],
 ex:'Bei 1 gegen 0 und 1 gegen 1 spielt der Torwart aggressiv: Er steht außerhalb des blauen Torraums. So sieht der Schütze weniger freies Tor. Wichtig: Rechtzeitig mit dem Schützen zurückgleiten, damit er nicht einfach umkurvt wird.',
 solve:[{t:900,m:{T:[200,428]},hl:twTri([200,303],470,'weniger freies Tor'),txt:'Raus aus dem Torraum'},{t:1100,m:{gF1:[200,350],P:[200,363],T:[200,440]},hl:null,lin:true,txt:'Mit dem Schützen zurückgleiten'}]},

{id:'tw-03',chap:'Positionsspiel',lvl:'Torhüter',rink:'big',label:UT,
 setup:TWB({gF1:[120,170],gF2:[290,180],D1:[205,250],P:[128,181]}),intro:[{t:1400,m:{gF1:[125,300],gF2:[285,315],D1:[205,370],P:[132,312]},lin:true,txt:'2 gegen 1!'}],
 q:'Zwei Gegner kommen gegen einen Verteidiger (2 gegen 1). Wie stellt sich unser Torwart?',
 o:['Eher im Torraum – so kommt er beim Querpass schnell rüber','Ganz weit raus, um dem Schützen den Winkel zu nehmen','Er bleibt mittig vor dem Tor, egal wo die Scheibe ist','Er fährt raus und greift den Spieler mit der Scheibe an'],
 ex:'Bei 2 gegen 1 und 2 gegen 2 spielt der Torwart passiver, eher im Torraum. Steht er zu weit draußen, ist der Weg zum anderen Pfosten nach einem Querpass zu weit. Der Verteidiger nimmt den Pass weg, der Torwart nimmt den Schützen.',
 solve:[{t:900,m:{T:twOn([132,312],13,470)},txt:'Im Torraum, mittig zum Puck'},{t:600,m:{P:'gF2'},txt:'Querpass!'},{t:500,m:{T:twOn(twBl([285,315],470),13,470)},txt:'Kurzer Weg – er ist rechtzeitig da'}]},

{id:'tw-04',chap:'Positionsspiel',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[305,265],gF2:[150,322],D1:[250,215],D2:[170,250],P:twBl([305,265])}),intro:I0,
 q:'Ein Gegner steht frei am langen Pfosten (Backdoor). Wie tief spielt unser Torwart gegen den Schützen?',
 o:['Etwas tiefer und vorsichtiger – er muss schnell rüberkommen','Besonders weit raus, weil der Schütze die größte Gefahr ist','Er stellt sich zum Spieler am langen Pfosten','Gar nicht anders – die Tiefe hängt nur vom Schützen ab'],
 ex:'Ist der lange Pfosten (Backdoor) vom Gegner besetzt, spielt der Torwart konservativer, also tiefer. Kommt der Querpass, ist der Weg kürzer. Ist der lange Pfosten frei, kann er aggressiver raus.',
 solve:[{t:900,m:{T:twOn(twBl([305,265]),12)},hl:[150,322,22],txt:'Backdoor besetzt – tiefer'},{t:1100,m:{gF2:[120,200]},hl:null},{t:800,m:{T:twOn(twBl([305,265]),30)},txt:'Backdoor frei – mehr raus'}]},

{id:'tw-05',chap:'Positionsspiel',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gD1:[245,110],gF1:[203,305],D2:[250,300],D1:[150,290],P:twBl([245,110])}),intro:I0,
 q:'Schuss von der blauen Linie – ein Gegner steht direkt vor unserem Torwart. Was macht er?',
 o:['Er sucht eine Sichtlinie am Gegner vorbei, meist auf der kurzen Seite','Er schaut auf den Gegner vor sich und reagiert auf dessen Schläger','Er macht sich ganz klein hinter dem Gegner und wartet','Er stellt sich weiter weg in die Ecke des Tores'],
 ex:'Den Puck sehen hat oberste Priorität. Steht ein Gegner vor ihm (Screen), sucht der Torwart eine Sichtlinie: zuerst über den Gegner, bei Schüssen von der blauen Linie meist auf der kurzen Seite vorbei.',
 solve:[{t:800,m:{T:[214,334]},hl:{d:`M${twBl([245,110])[0]} ${twBl([245,110])[1]}L214 334`,line:true},txt:'Vorbeischauen – Puck sehen'},{t:450,m:{P:[214,326]},lin:true,txt:'Schuss – gesehen und gehalten'}]},

{id:'tw-06',chap:'Positionsspiel',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gD1:[300,105],gF1:[245,275],D2:[300,300],D1:[150,280],P:twBl([300,105])}),intro:[{t:500,m:{T:twOn(twBl([300,105]),16)}}],
 q:'Ein Gegner vor dem Tor hält den Schläger rein, um den Schuss von der blauen Linie abzufälschen. Wonach richtet sich der Torwart jetzt aus?',
 o:['Nach dem Schläger, der den Puck zuletzt berührt – also dem Abfälscher','Weiter nach dem Schützen an der blauen Linie','Nach der Mitte zwischen Schütze und Abfälscher','Nach dem eigenen Verteidiger neben dem Tor'],
 ex:'Bei Abfälschungen zählt der Punkt, an dem der Puck die Richtung ändert – also der Schläger, der ihn zuletzt berührt. Dorthin richtet der Torwart seinen Körper aus.',
 solve:[{t:500,m:{P:'gF1'},lin:true,txt:'Abgefälscht!'},{t:450,m:{T:twOn(twBl([245,275]),14)},txt:'Neuer Ausgangspunkt: der Abfälscher'}]},

{id:'tw-07',chap:'Bewegung',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:P7a,gF2:P7b,D1:[160,215],D2:[245,300],P:B7a,T:twOn(B7a,16)}),intro:I0,
 q:'Weiter Querpass von einem Bullykreis zum anderen. Wie kommt der Torwart am schnellsten rüber?',
 o:['Mit einem T-Push – für weite Wege; der Shuffle ist für kurze','Mit vielen kleinen Shuffles, damit er stabil bleibt','Er dreht sich um und läuft vorwärts rüber','Er bleibt stehen und wartet, bis geschossen wird'],
 ex:'Für kurze Wege nimmt der Torwart den Shuffle (seitliche Schritte, Füße zeigen nach vorne). Für weite Wege den T-Push: Füße in T-Form, kräftig abdrücken und auf der Kufe sauber stoppen – mittig zum Puck.',
 solve:[{t:550,m:{P:'gF2'},lin:true,txt:'Querpass!'},{t:450,m:{T:twOn(B7b,16)},txt:'T-Push: weit und schnell'}]},

{id:'tw-08',chap:'Bewegung',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[262,382],gF2:[215,250],D1:[265,300],D2:[150,270],T:[209,341],P:[234,393]}),intro:I0,
 q:'Ein Gegner fährt mit der Scheibe hinter unserem Tor von rechts nach links. Was macht der Torwart?',
 o:['Er wechselt von Pfosten zu Pfosten und schaut über die Schulter zum Puck','Er bleibt in der Tormitte stehen und schaut nach vorne','Er fährt hinter das Tor und greift den Gegner an','Er bleibt am ersten Pfosten und wartet dort'],
 ex:'Ist der Puck hinter dem Tor, steht der Torwart am Pfosten auf der Puckseite. Wechselt der Puck die Seite, wechselt er mit – und behält den Puck dabei über die Schulter im Blick.',
 solve:[{t:1500,m:{gF1:[140,380],P:'gF1',T:[191,341]},txt:'Pfosten zu Pfosten – Puck im Blick'}]},

{id:'tw-09',chap:'Bewegung',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[215,255],gF2:[290,300],D1:[160,280],D2:[255,220],P:twBl([215,255]),T:twOn(twBl([215,255]),16)}),intro:[{t:450,m:{P:[203,326]},lin:true,txt:'Schuss – abgewehrt!'},{t:450,m:{P:[268,318]},lin:true}],
 q:'Der Torwart wehrt ab, der Puck springt zur Seite zu einem Gegner. Was ist jetzt am wichtigsten?',
 o:['Augen am Puck lassen und schnell wieder mittig zum Puck kommen','Liegen bleiben, damit unten alles zu ist','Zum Schiedsrichter schauen, ob abgepfiffen wird','Den Schläger fallen lassen, um mit beiden Händen zu fangen'],
 ex:'Nach der Abwehr geht es sofort weiter (Recovery): Die Augen bleiben am Puck, und der Torwart kommt so schnell wie möglich wieder mittig zum Puck – aber kontrolliert, nicht hektisch.',
 solve:[{t:400,m:{P:'gF2'}},{t:500,m:{T:twOn(twBl([290,300]),12)},txt:'Recovery: Augen am Puck, mittig zum Puck'}]},

{id:'tw-10',chap:'Pfosten',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[300,368],gF2:[225,265],D1:[255,295],D2:[160,280],P:twBl([300,368])}),intro:I0,
 q:'Ein Gegner steht mit der Scheibe neben unserem Tor an der Torlinie. Unser Torwart geht in die RVH. Wie sieht die aus?',
 o:['Pfostennahes Bein liegt flach am Pfosten, das andere ist aufgestellt und drückt','Pfostennahes Bein ist aufgestellt, das andere liegt flach auf dem Eis','Beide Beine flach im Butterfly, mitten im Torraum','Stehend, einen Meter vor dem Pfosten'],
 ex:'RVH (Reverse Vertical Horizontal): Das pfostennahe Bein liegt flach auf dem Eis am Pfosten, das andere ist aufgestellt und drückt über die Kufe ins Eis, damit kein Loch am Pfosten bleibt. Der Oberkörper lehnt am Pfosten. Aus der RVH kommt er schnell zur Seite, wenn der Puck vors Tor gespielt wird.',
 solve:[{t:700,m:{T:[210,343]},hl:[214,350,11],txt:'RVH: Pfosten zu'},{t:550,m:{P:'gF2'},hl:null,txt:'Pass in den Slot …'},{t:450,m:{T:twOn(twBl([225,265]),12)},txt:'… und schnell raus zum Puck'}]},

{id:'tw-11',chap:'Pfosten',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[330,235],D2:[300,215],gF2:[175,270],D1:[160,300],P:twBl([330,235])}),intro:[{t:1500,m:{gF1:[292,338],D2:[285,320],P:[262,346]},lin:true,txt:'Gegner zieht Richtung Torlinie'}],
 q:'Ein Gegner zieht außen mit der Scheibe Richtung Torlinie. Unser Torwart spielt Overlap. Was heißt das?',
 o:['Er überdeckt bewusst den Pfosten, der Schlittschuh steht auf oder hinter der Torlinie','Er stellt sich einen Meter vor den Pfosten','Er legt sich quer vor das ganze Tor','Er wechselt zum anderen Pfosten'],
 ex:'Beim Overlap überdeckt der Torwart bewusst den Pfosten, der untere Schlittschuh steht auf oder hinter der Torlinie, das Gewicht ist gleich verteilt. Gut, wenn ein Gegner von oben außen Richtung Torlinie zieht: Er kann auf den Schuss und auf den Pass in die Mitte reagieren.',
 solve:[{t:700,m:{T:[215,346]},hl:[214,350,12],txt:'Overlap: Pfosten überdeckt'}]},

{id:'tw-12',chap:'Pfosten',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[120,385],gF2:[215,265],D1:[160,280],D2:[255,290],P:[148,393],T:[200,338]}),intro:I0,
 q:'Der Puck ist in der Ecke, unser Torwart geht stehend an den Pfosten. Worauf kommt es an?',
 o:['Schlittschuh direkt am Pfosten – keine Lücke zwischen Schlittschuh und Pfosten','Ein kleiner Abstand zum Pfosten, damit er beweglich bleibt','Der Schläger liegt hinter dem Tor, damit kein Puck durchkommt','Er dreht sich zum Netz, um den Puck hinter sich zu sehen'],
 ex:'Am Pfosten steht der Torwart in athletischer Grundposition, der Schlittschuh direkt am Pfosten – kein Loch zwischen Kufe und Pfosten. Mit dem Schläger deckt er die Passwege vor das Tor ab.',
 solve:[{t:700,m:{T:[192,342]},hl:[186,350,11],txt:'Kein Loch am Pfosten'}]},

{id:'tw-13',chap:'Abwehr',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[295,250],gF2:[190,275],D1:[245,295],D2:[150,290],P:twBl([295,250]),T:twOn(twBl([295,250]),16)}),intro:I0,
 q:'Ein Schuss geht auf die Stockhand (Blocker). Wohin lenkt der Torwart den Puck?',
 o:['In die Ecke, weg vom Slot','Zurück in die Mitte vor das Tor','Hoch in die Luft, damit er ihn fangen kann','Zu dem Gegner, der am nächsten steht'],
 ex:'Mit der Stockhand wird nur gelenkt, nicht gefangen. Ziel ist die Ecke – weg vom gefährlichen Bereich vor dem Tor. Die Bewegung kommt aus einer kleinen Drehung im Handgelenk, nicht aus großem Ausholen.',
 solve:[{t:400,m:{P:[212,324]},lin:true,txt:'Schuss!'},{t:700,m:{P:[352,378]},hl:SLOT_RED,txt:'Weg vom Slot – ab in die Ecke'}]},

{id:'tw-14',chap:'Abwehr',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[180,240],gF2:[235,300],D1:[160,300],D2:[265,255],P:twBl([180,240]),T:twOn(twBl([180,240]),16)}),intro:I0,
 q:'Ein Schuss kommt auf die Fanghand, ein Gegner wartet vor dem Tor auf den Abpraller. Was ist die beste Lösung?',
 o:['Puck fangen und festhalten – dann gibt es Bully statt Nachschuss','Puck mit der Fanghand nach vorne abprallen lassen','Puck fangen und sofort nach vorne werfen','Puck fangen und direkt vor sich fallen lassen'],
 ex:'Die Fanghand kann den Puck festhalten. Lauert ein Gegner auf den Abpraller, hält der Torwart den Puck fest – dann gibt es Bully, und der Nachschuss ist weg. Nach vorne werfen ist verboten (2 Minuten).',
 solve:[{t:450,m:{P:'T'},lin:true,txt:'Gefangen – festhalten'},{t:800,m:{gF2:[245,290]},txt:'Kein Nachschuss möglich'}]},

{id:'tw-15',chap:'Abwehr',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[310,215],D1:[160,280],D2:[255,180],P:[222,312],T:[203,336]}),intro:[{t:900,m:{gF1:[270,262]},txt:'Puck liegt frei – Gegner kommt'}],
 q:'Nach einer Abwehr liegt der Puck frei vor dem Torraum, ein Gegner kommt angefahren. Was macht der Torwart?',
 o:['Er räumt den Puck mit dem Schläger weg und gibt ihn nie auf','Er wartet in der Grundstellung, bis der Gegner schießt','Er dreht sich weg und schützt sein Gesicht','Er wirft sich aus dem Torraum mit dem Körper auf den Puck'],
 ex:'Aktiver Schläger: Freiliegende Pucks nach einem Abpraller wegräumen. DEB-Grundsatz: den Puck nie aufgeben. Aber Vorsicht: Stürzt der Torwart aus dem Torraum und wirft sich auf den Puck, statt ihn zu spielen, gibt es 2 Minuten.',
 solve:[{t:450,m:{T:[212,330],P:[365,385]},txt:'Aktiver Schläger: wegräumen'}]},

{id:'tw-16',chap:'Spiel lesen',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[240,240],D1:[175,270],D2:[290,280],P:[225,265],T:twOn([225,265],16)}),intro:[{t:350,m:{P:[255,265]}},{t:350,m:{P:[225,268]}},{t:350,m:{P:[255,262]}}],
 q:'Woran erkennt der Torwart, dass der Gegner gleich schießt?',
 o:['Er hört auf, den Puck hin und her zu ziehen, hebt den Kopf und holt aus','Er schaut zur Bank und ruft nach einem Wechsel','Er fährt mit dem Rücken zum Tor in die Ecke','Er zieht den Puck schneller hin und her'],
 ex:'Typische Zeichen für einen Schuss: Das Puckmischen hört auf, die Beine stoppen, der Kopf geht hoch, der Schläger geht nach hinten, das Schlägerblatt zeigt zum Tor. Wer das früh liest, ist rechtzeitig bereit.',
 solve:[{t:500,m:{P:twBl([240,240])},txt:'Kopf hoch, ausholen – der Schuss kommt'},{t:400,m:{P:[205,325]},lin:true,txt:'Bereit – gehalten'}]},

{id:'tw-17',chap:'Spiel lesen',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[268,375],D1:[160,270],D2:[250,280],gF2:[300,260],P:[244,391],T:[209,341]}),intro:I0,
 q:'Ein Gegner fährt hinter unserem Tor ganz eng um den Torrahmen. Was hat er wahrscheinlich vor?',
 o:['Er will selbst abschließen – zum Beispiel mit einem Bauerntrick','Er will an der Bande entlang vor das Tor passen','Er will zur Bank fahren und wechseln','Er will die Zeit runterspielen'],
 ex:'DEB-Faustregel: Fährt ein Gegner hinter dem Tor eng um den Torrahmen, will er meist selbst abschließen (Bauerntrick). Fährt er weiter weg an der Bande entlang, sucht er eher einen Pass vor das Tor. Beim Bauerntrick heißt es: Pfosten zu.',
 solve:[{t:1200,m:{gF1:[160,368],P:'gF1',T:[191,342]},txt:'Eng ums Tor = Abschluss'},{t:400,m:{},hl:[186,350,11],txt:'Pfosten zu!'}]},

{id:'tw-18',chap:'Spiel lesen',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gD1:[60,95],D1:[140,190],gF1:[95,150],gF2:[260,180],P:twBl([60,95])}),intro:[{t:500,m:{P:RIMPTS[0]},lin:true,txt:'Puck wird um die Bande gespielt'}],
 q:'Der Gegner spielt die Scheibe um die Bande hinter unser Tor. Unser Torwart stoppt sie für den Verteidiger. Worauf achtet er?',
 o:['Schnell stoppen, über die Schulter schauen und dem Mitspieler Bescheid sagen','Stoppen und sofort ohne hinzuschauen quer vors Tor passen','Die Scheibe in der Ecke außerhalb des Trapezes stoppen','Die Scheibe liegen lassen, bis der Schiedsrichter pfeift'],
 ex:'Eingeschossene Pucks: schnell raus aus dem Tor, Puck mit geschlossener Schlägerhaltung stoppen (im Trapez!), über die Schulter schauen und mit den Mitspielern sprechen, z. B. „Zeit!“ oder „Druck!“. Ein Pass vors eigene Tor ist gefährlich.',
 solve:[...boardPath(RIMPTS.slice(1,6).concat([[160,401]]),0.55),{t:500,m:{T:[178,388],P:'T',D1:[120,380],gF1:[110,300]},txt:'Stoppen im Trapez'},{t:600,m:{P:'D1'},txt:'Schulterblick, Bescheid sagen, ab zum Verteidiger'}]},

{id:'tw-19',chap:'Grundstellung',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[200,235],D1:[150,280],D2:[255,280],P:twBl([200,235])}),intro:I0,
 q:'Wie sieht die richtige Grundstellung des Torwarts aus?',
 o:['Knie gebeugt, Gewicht auf den Fußballen, Hände und Schläger vor dem Körper','Beine gestreckt, Gewicht auf den Fersen, Hände am Körper','Ganz tief in der Hocke, Hände auf den Knien abgestützt','Breitbeinig, Oberkörper aufrecht und leicht nach hinten'],
 ex:'Grundstellung nach DEB: Knie gebeugt, Schlittschuhe leicht auf den Innenkanten, Gewicht auf den Fußballen, Oberkörper leicht nach vorne, Hände und Schläger vor dem Körper. Jeder passt sie an seinen Körper an – die Grundsätze bleiben gleich.',
 solve:[{t:900,m:{},hl:[200,338,20],txt:'Bereit: Knie gebeugt, Hände vorne'}]},

{id:'tw-20',chap:'Grundstellung',lvl:'Torhüter',rink:'zone',
 setup:TWZ({gF1:[290,250],D1:[160,280],D2:[250,300],P:twBl([290,250])}),intro:I0,
 q:'Warum soll der Torwart in der Grundstellung locker bleiben – Hände, Schultern und Nacken?',
 o:['Lockere Muskeln reagieren schneller als angespannte','Damit er den Schläger fester halten kann','Damit er größer aussieht und mehr Tor abdeckt','Weil angespannte Muskeln die Ausrüstung verrutschen lassen'],
 ex:'DEB: Angespannte Muskeln heißt langsame Reaktion, entspannte Muskeln heißt schnelle Reaktion. Deshalb Hände, Schultern und Nacken locker lassen – vor allem, wenn der Puck weit weg ist, kurz durchatmen.',
 solve:[{t:900,m:{T:twOn(twBl([290,250]),16)},txt:'Locker bleiben = schneller reagieren'}]}
];
