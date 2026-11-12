
const RINK={
zone:{vb:'0 0 400 420',svg:`
<path d="M5 5H395V330A80 80 0 0 1 315 410H85A80 80 0 0 1 5 330Z" fill="#f3f8fb" stroke="#1d2733" stroke-width="3"/>
<rect x="5" y="34" width="390" height="12" fill="#2f6fd6"/>
<line x1="8" y1="350" x2="392" y2="350" stroke="#d6453d" stroke-width="2"/>
<path d="M172 350A28 28 0 0 1 228 350Z" fill="#bfe0f7" stroke="#d6453d" stroke-width="1.5"/>
<rect x="186" y="350" width="28" height="14" rx="3" fill="none" stroke="#1d2733" stroke-width="2.5"/>
<circle cx="110" cy="260" r="48" fill="none" stroke="#d6453d" stroke-width="2"/>
<circle cx="290" cy="260" r="48" fill="none" stroke="#d6453d" stroke-width="2"/>
<circle cx="110" cy="260" r="4" fill="#d6453d"/><circle cx="290" cy="260" r="4" fill="#d6453d"/>
<g stroke="#d6453d" stroke-width="2"><line x1="50" y1="252" x2="62" y2="252"/><line x1="50" y1="268" x2="62" y2="268"/><line x1="158" y1="252" x2="170" y2="252"/><line x1="158" y1="268" x2="170" y2="268"/><line x1="230" y1="252" x2="242" y2="252"/><line x1="230" y1="268" x2="242" y2="268"/><line x1="338" y1="252" x2="350" y2="252"/><line x1="338" y1="268" x2="350" y2="268"/></g>
<text x="200" y="400" text-anchor="middle" font-size="12" fill="#8a94a2" font-family="Barlow">unser Tor</text>`},
full:{vb:'0 0 600 300',svg:`
<rect x="5" y="5" width="590" height="290" rx="70" fill="#f3f8fb" stroke="#1d2733" stroke-width="3"/>
<rect x="195" y="5" width="10" height="290" fill="#2f6fd6"/><rect x="395" y="5" width="10" height="290" fill="#2f6fd6"/>
<line x1="300" y1="5" x2="300" y2="295" stroke="#d6453d" stroke-width="5"/>
<line x1="40" y1="15" x2="40" y2="285" stroke="#d6453d" stroke-width="2"/><line x1="560" y1="15" x2="560" y2="285" stroke="#d6453d" stroke-width="2"/>
<path d="M40 128A22 22 0 0 1 40 172Z" fill="#bfe0f7"/><path d="M560 128A22 22 0 0 0 560 172Z" fill="#bfe0f7"/>
<rect x="26" y="139" width="14" height="22" rx="3" fill="none" stroke="#1d2733" stroke-width="2.5"/><rect x="560" y="139" width="14" height="22" rx="3" fill="none" stroke="#1d2733" stroke-width="2.5"/>
<circle cx="300" cy="150" r="40" fill="none" stroke="#2f6fd6" stroke-width="2"/>
<g fill="none" stroke="#d6453d" stroke-width="2"><circle cx="100" cy="80" r="38"/><circle cx="100" cy="220" r="38"/><circle cx="500" cy="80" r="38"/><circle cx="500" cy="220" r="38"/></g>
<g fill="#d6453d"><circle cx="100" cy="80" r="3.5"/><circle cx="100" cy="220" r="3.5"/><circle cx="500" cy="80" r="3.5"/><circle cx="500" cy="220" r="3.5"/><circle cx="240" cy="80" r="3.5"/><circle cx="240" cy="220" r="3.5"/><circle cx="360" cy="80" r="3.5"/><circle cx="360" cy="220" r="3.5"/></g>
<text x="300" y="286" text-anchor="middle" font-size="12" fill="#8a94a2" font-family="Barlow">Wir greifen an →</text>`}};

const Z={T:[200,338],gD1:[100,55],gD2:[300,55]};
const S=(o)=>Object.assign({},Z,o);

const QS1=[
{id:'k1-01',chap:'Defensive Zone',lvl:'U13+',rink:'zone',
 setup:S({D1:[250,230],D2:[150,240],F1:[300,140],F2:[200,150],F3:[120,140],gF1:[310,300],gF2:[250,190],gF3:[130,200],P:[318,306]}),
 intro:[{t:2200,m:{gF1:[348,372],P:[356,378],D1:[322,360],F1:[318,282],gF2:[240,292],F2:[245,215],F3:[160,215],D2:[178,222],gF3:[140,250]}}],
 q:'Der Gegner hat die Scheibe in der Ecke, D1 geht drauf. Wo gehört D2 jetzt hin?',
 o:['Vors Tor an den kurzen Pfosten – Mitte schützen','Auch in die Ecke – zu zweit auf den Puck','Hoch an die blaue Linie, um einen Pass abzufangen','Hinter das eigene Tor'],
 ex:'D1 nimmt Zeit und Raum, F1 unterstützt. D2 steht am kurzen Pfosten und schützt die Mitte, F2 hält die Mitte, F3 sichert den Slot.',
 solve:[{t:1000,m:{D2:[230,322],F2:[270,210],F3:[205,232]},hl:[230,322,22],txt:'D2 am kurzen Pfosten'}]},

{id:'k1-02',chap:'Defensive Zone',lvl:'U13+',rink:'zone',
 setup:S({D1:[330,330],D2:[220,320],F1:[290,180],F2:[270,205],F3:[198,232],gF1:[320,300],gF2:[230,280],gF3:[120,200],P:[300,330]}),
 intro:[{t:1800,m:{P:[352,386],gF1:[338,366],D1:[355,355]},txt:'Freie Scheibe in der Ecke!'}],
 q:'Das Spiel steht, die Scheibe liegt frei in der Ecke. Was macht F1?',
 o:['Unterstützt D1 in der Ecke – wir überladen','Bleibt hoch an der blauen Linie','Fährt schon mal Richtung Angriff','Stellt sich direkt vors Tor'],
 ex:'Bei gestopptem Spiel oder freier Scheibe überladen wir: Wir schaffen Überzahl an der Scheibe. F1 unterstützt in der Ecke.',
 solve:[{t:1000,m:{F1:[325,376]},hl:[343,376,42],txt:'Überladen: 2 gegen 1 an der Scheibe'}]},

{id:'k1-03',chap:'Defensive Zone',lvl:'U13+',rink:'zone',
 setup:S({D1:[240,385],D2:[170,330],F1:[300,250],F2:[220,230],F3:[130,240],gF1:[180,392],gF2:[260,250],gF3:[120,180],P:[205,396]}),
 intro:[{t:1600,m:{D1:[217,393],gF1:[193,393],gF2:[214,262],F1:[285,315],F2:[262,215],F3:[150,236]},txt:'Zweikampf hinter dem Tor'}],
 q:'Die Scheibe ist hinter unserem Tor. Überladen wir hier – also gehen wir zu dritt drauf?',
 o:['Nein – hinter dem eigenen Tor überladen wir nicht, sonst ist der Slot frei','Ja, alle hin und schnell die Scheibe holen','Ja, aber nur die drei Stürmer','Ja, F3 geht als Erster dazu'],
 ex:'Hinter dem eigenen Tor überladen wir nicht. Das Risiko, dass ein Gegner frei im Slot steht, ist zu groß. F1 übernimmt den Gegner im Slot, F3 bleibt zwischen F1 und dem gegnerischen F3.',
 solve:[{t:1000,m:{F1:[222,286],F3:[160,226],D2:[178,325]},hl:[218,274,34],txt:'F1 nimmt den Gegner im Slot'}]},

{id:'k1-04',chap:'Defensive Zone',lvl:'U13+',rink:'zone',
 setup:S({D1:[335,360],F1:[310,330],D2:[240,320],F2:[260,250],F3:[150,230],gF1:[350,375],gF2:[230,290],gF3:[150,180],P:[358,384]}),
 intro:[{t:1500,m:{F3:[170,225],F2:[280,205],gF3:[175,190]},txt:'Wir überladen in der Ecke'}],
 q:'Wir überladen in der Ecke. Wer ist jetzt der „Feuerwehrmann“ und was macht er?',
 o:['F3 – schützt den Slot, dreht den Kopf und ist bereit zu reagieren','F1 – geht als Dritter mit in die Ecke','D2 – fährt hinter das Tor','F2 – fährt hoch zur blauen Linie'],
 ex:'F3 ist der Feuerwehrmann: Er schützt den Slot, dreht ständig den Kopf und schützt das Tor, während wir in der Ecke überladen.',
 solve:[{t:900,m:{F3:[203,232]},hl:[203,232,28],txt:'F3 = Feuerwehrmann'}]},

{id:'k1-05',chap:'Defensive Zone',lvl:'U13+',rink:'zone',
 setup:S({D1:[335,360],F1:[310,320],D2:[230,325],F2:[275,210],F3:[200,235],gF1:[350,375],gF2:[220,300],gF3:[140,200],P:[355,382]}),
 intro:[{t:1300,m:{P:[308,62]},txt:'Pass hoch zum Verteidiger'}],
 q:'Der Puck geht hoch zum gegnerischen Verteidiger. Was machen F2 und F3?',
 o:['Erst Schussbahn und Mitte zu – dann raus zum D','Sofort mit vollem Tempo auf den D rausstürmen','Stehen bleiben und abwarten','Schon Richtung Angriff starten'],
 ex:'Erst Schussbahn und Mitte mit langem Schläger schließen, dann rauslaufen. Dabei auf den Gegner schauen, nicht auf die Scheibe – sonst wirst du ausgespielt. D1, F1 und D2 halten unten die Abwehrseite (Box-out).',
 solve:[{t:700,m:{F2:[282,165,195],F3:[200,178,-20]},txt:'1. Schussbahn und Mitte zu'},{t:700,m:{F2:[296,100,250]},hl:[296,96,24],txt:'2. Dann raus zum D'}]},

{id:'k1-06',chap:'Defensive Zone',lvl:'U13+',rink:'zone',
 setup:S({D1:[320,240],D2:[215,318],F1:[300,195],F2:[262,165],F3:[190,222],gF1:[360,280],gF2:[100,240],gF3:[200,120],P:[368,286]}),
 intro:[{t:1400,m:{gF1:[355,230],P:[363,236],D1:[332,252],F1:[322,212],F2:[285,128],F3:[212,198],D2:[198,304],gF2:[95,256]}}],
 q:'Der Gegner an der Bande will quer durch die Mitte zum freien Mann passen. Was macht F3?',
 o:['Schläger aufs Eis, Mitte zu – keine Pässe durch die Box','Auch zum Puckführenden fahren','Sich vors eigene Tor stellen','Hoch zur blauen Linie fahren'],
 ex:'Keine Pässe durch die Box! F1 unterstützt D1 eng an der Bande, F2 steht näher am gegnerischen D. F3 ist für die Mitte zuständig: Schläger auf dem Eis, Passbahn zu.',
 solve:[{t:800,m:{F3:[246,224,90]},hl:[246,232,26]},{t:450,m:{P:[250,244]},txt:'Pass geblockt'}]},

{id:'k1-07',chap:'Regelkunde',lvl:'Alle',rink:'full',
 setup:{T:[52,150],gT:[548,150],D1:[130,200],F1:[250,120],gF1:[350,200],gD1:[480,110],P:[140,204]},
 intro:[{t:1800,m:{P:[575,72],gD1:[520,96]}}],
 q:'Wir spielen die Scheibe aus der eigenen Hälfte. Sie rutscht unberührt über die gegnerische Torlinie. Was entscheidet der Schiri?',
 o:['Unerlaubter Weitschuss (Icing)','Abseits','Weiterspielen','2 Minuten Strafe für uns'],
 ex:'Icing: Scheibe von hinter der Mittellinie unberührt über die gegnerische Torlinie. Bully in unserem Verteidigungsdrittel. In Unterzahl ist Icing erlaubt.',
 solve:[{t:900,m:{P:[100,80]},hl:[100,80,30],txt:'Pfiff: Bully im eigenen Drittel'}]},

{id:'k1-08',chap:'Aufbau',lvl:'U13+',rink:'zone',
 setup:S({D1:[70,360],D2:[220,320],F1:[110,230],F2:[200,230],F3:[170,280],gF1:[60,388],gF2:[220,270],gF3:[300,200],P:[52,382]}),
 intro:[{t:1200,m:{D1:[55,372],P:[63,378],gF1:[88,388]},txt:'Scheibe gewonnen!'}],
 q:'D1 hat die Scheibe in der Ecke gewonnen. Wer muss jetzt anspielbar sein?',
 o:['F1 und F2 – D2 nur, wenn der D-zu-D-Pass frei ist; F3 unterstützt bei Druck','Nur F1','Niemand – D1 schießt die Scheibe einfach raus','Nur die beiden Verteidiger'],
 ex:'Nach Scheibengewinn sind F1 und F2 anspielbar. D2 ist nur anspielbar, wenn der Weg für den D-zu-D-Pass frei ist und wir das Spiel auf die andere Seite verlagern wollen. F3 unterstützt bei Druck sofort. F2 und F3 sind gemeinsam dafür verantwortlich, dass wir aus der DZ rauskommen.',
 solve:[{t:1100,m:{F1:[30,240],F2:[120,176],D2:[236,386],F3:[110,318]},txt:'F1 und F2 anspielbar'},{t:600,m:{P:'F1'},txt:'Pass zu F1'}]},

{id:'k1-09',chap:'Aufbau',lvl:'U13+',rink:'zone',
 setup:S({D1:[320,385],D2:[180,330],F1:[355,260],F2:[372,178],F3:[200,240],gF1:[280,370],gF2:[300,330],gF3:[236,196],gF4:[160,226],gD2:[352,166],gD1:[150,90],P:[328,390]}),
 intro:[{t:1300,m:{gF1:[308,386],gF2:[322,352],D1:[340,388],P:[348,393],F1:[378,318]},txt:'Druck von zwei Seiten'}],
 q:'D1 wird von zwei Gegnern gejagt, kein Mitspieler steht frei. Was ist eine gute Lösung?',
 o:['Bandenpass hoch zu F2 – F1 unterstützt eng, die Scheibe hat ein Ziel','Blind in die Mitte passen','Die Scheibe in den Slot spielen','Stehen bleiben und warten, bis gepfiffen wird'],
 ex:'Grundsätzlich wollen wir Pässe von Schläger zu Schläger. Dafür braucht D1 enge Unterstützung von F1. Ist kein Pass frei, ist ein Bandenpass zu F2 eine gute Lösung – die Scheibe hat immer ein Ziel, nie blind durch die Mitte.',
 solve:[{t:500,m:{P:[389,345]},txt:'F1 unterstützt eng'},{t:800,m:{P:[383,168],F2:[374,158]},txt:'Bandenpass zu F2'}]},

{id:'k1-10',chap:'Regelkunde',lvl:'Alle',rink:'full',
 setup:{T:[52,150],gT:[548,150],F1:[250,100],F2:[330,180],gD1:[460,120],gD2:[450,205],P:[340,184]},
 intro:[{t:1600,m:{F1:[450,92],F2:[378,180],P:[388,184],gD1:[470,130]}}],
 q:'F1 fährt in die Angriffszone, bevor die Scheibe die blaue Linie überquert hat. Dann kommt der Pass. Was passiert?',
 o:['Abseits – Pfiff','Alles erlaubt, weiterspielen','Icing','2 Minuten Strafe für F1'],
 ex:'Abseits: Die Scheibe muss die blaue Linie komplett überqueren, bevor ein Angreifer mit beiden Schlittschuhen in der Zone ist. Danach gibt es Bully in der neutralen Zone.',
 solve:[{t:600,m:{P:[444,98]},txt:'Pfiff: Abseits'},{t:700,m:{P:[360,80]},hl:[360,80,26],txt:'Bully in der neutralen Zone'}]},

{id:'k1-11',chap:'Bully',lvl:'U13+',rink:'zone',
 setup:S({C:[110,274],gC:[110,246],D1:[55,274],gW1:[55,246],F2:[165,274],F3:[189,276],D2:[178,297],gW2:[165,246],gD1:[55,95],gD2:[172,92],P:[110,260]}),
 intro:[{t:900,m:{P:[106,322],D1:[98,326],C:[110,266]},txt:'Bully gewonnen!'}],
 q:'Bully gewonnen, die Scheibe ist bei D1. Wie spielen wir sauber raus?',
 o:['D1 spielt D2 direkt hinters Tor – D2 macht das Wheel und spielt F3 über den Hashmarks an','D1 spielt quer durch den Slot zu F2','D1 schießt die Scheibe sofort hoch über die blaue Linie','D1 fährt alleine durch die Mitte'],
 ex:'D1 holt die Scheibe inside der Dots und spielt D2 direkt hinters Tor. D2 macht das Wheel hinter dem Tor und spielt F3 über den Hashmarks an. F2 unterstützt, C beobachtet und unterstützt eng, D1 geht zurück zum Tor.',
 solve:[{t:800,m:{D2:[190,388],P:[200,384]},txt:'D1 spielt D2 hinters Tor'},{t:1000,m:{D2:[240,388],P:[249,381],D1:[160,328],C:[112,305],F3:[344,246],F2:[300,150]},txt:'D2 Wheel hinter dem Tor'},{t:600,m:{P:'F3'},hl:[344,246,24],txt:'Pass zu F3 über den Hashmarks'}]},

{id:'k1-12',chap:'Bully',lvl:'U13+',rink:'zone',
 setup:S({C:[110,274],gC:[110,246],D1:[55,274],gW1:[55,246],F2:[165,274],F3:[189,276],D2:[178,297],gW2:[165,246],gD1:[55,95],gD2:[172,92],P:[110,260]}),
 intro:[{t:1000,m:{P:[66,100],gD1:[60,98],gC:[110,254]},txt:'Bully verloren'}],
 q:'Bully verloren, der gegnerische Verteidiger hat die Scheibe. Wohin gehen unsere Außenstürmer?',
 o:['Raus zu den gegnerischen Verteidigern','Alle fünf gehen auf den Puck','Sie bleiben am Bullykreis stehen','Sie fahren vors eigene Tor'],
 ex:'Nach verlorenem Bully finden wir die Struktur Box + 1. Die Außenstürmer sind den gegnerischen D’s zugeordnet, wenn diese die Scheibe bekommen. F3 hält zuerst etwas Abstand, damit die Mitte nicht frei wird. Kommt die Scheibe rüber zum anderen D, geht F3 höher und F2 lässt sich in die Mitte fallen. D1 und D2 stehen zwischen Gegner und Tor und halten sie mit Box-out vom Tor weg.',
 solve:[{t:1000,m:{F2:[74,124],F3:[182,176],C:[118,226],D1:[152,302,-90],D2:[236,300,-90],gW1:[125,250],gW2:[215,246]},txt:'Außenstürmer zu den D’s'},{t:700,m:{gW1:[150,275],gW2:[234,273]},hl:[193,290,58],txt:'Box-out: Gegner kommt nicht vors Tor'},{t:900,m:{P:[180,96],gD1:[62,100],F3:[176,122],F2:[115,188]},hl:0,txt:'D-zu-D: F3 geht höher, F2 lässt sich fallen'}]},

{id:'k1-13',chap:'Regelkunde',lvl:'Alle',rink:'full',
 setup:{T:[52,150],gT:[548,150],F1:[440,90],F2:[350,200],gD1:[470,200],gD2:[480,110],P:[356,204]},
 intro:[{t:1500,m:{P:[522,232],gD1:[508,224]},txt:'Linienrichter hebt den Arm'}],
 q:'F1 war schon in der Zone, als die Scheibe reingespielt wurde. Der Linienrichter hebt den Arm, pfeift aber nicht. Was müssen wir tun?',
 o:['Alle unsere Spieler verlassen die Zone bzw. berühren die blaue Linie – dann wieder angreifen','Sofort zur Scheibe fahren','Nichts – das ist kein Abseits','Stehen bleiben, bis gepfiffen wird'],
 ex:'Verzögertes Abseits: Solange wir die Scheibe nicht berühren, läuft das Spiel weiter. Sind alle unsere Spieler raus oder an der blauen Linie, nimmt der Linienrichter den Arm runter. Berührt einer von uns vorher die Scheibe: Pfiff.',
 solve:[{t:900,m:{F1:[394,100]},hl:[400,100,22],txt:'F1 an der blauen Linie'},{t:900,m:{F1:[480,180]},txt:'Arm runter – weiter geht’s'}]}
];


