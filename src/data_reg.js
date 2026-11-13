const TRAP_OK={areas:[{d:'M162 350L238 350L260 410L140 410Z',c:'#1D9E75',t:'Trapez: erlaubt',x:200,y:398},
  {d:'M238 350H392V330A80 80 0 0 1 315 410H260Z',c:'#e0393e',t:'verboten',x:330,y:380},
  {d:'M162 350H8V330A80 80 0 0 0 85 410H140Z',c:'#e0393e',t:'verboten',x:70,y:380}]};
const CREASE={areas:[{d:'M176 350V337A24 15 0 0 1 224 337V350Z',c:'#e0393e'}]};
const CREASE_OK={areas:[{d:'M176 350V337A24 15 0 0 1 224 337V350Z',c:'#1D9E75'}]};
const OVER_RED={areas:[{d:'M300 7H525A68 68 0 0 1 593 75V225A68 68 0 0 1 525 293H300Z',c:'#e0393e',t:'hier nicht eingreifen',x:446,y:30}]};
const OWNZONE={areas:[{d:'M200 7H75A68 68 0 0 0 7 75V225A68 68 0 0 0 75 293H200Z',c:'#1D9E75',t:'eigenes Drittel: erlaubt',x:120,y:28}]};
const RDOTS={areas:[{d:'M462 80a38 38 0 1 0 76 0a38 38 0 1 0 -76 0 M462 220a38 38 0 1 0 76 0a38 38 0 1 0 -76 0',c:'#1D9E75',t:'wir wählen',x:500,y:150}]};
const FULL0={T:[52,150],gT:[548,150]};
const SF=o=>Object.assign({},FULL0,o);

const QSR=[
{id:'r-01',chap:'Torwart',lvl:'U13+',rink:'zone',
 setup:SD({D1:[300,100],F1:[120,105],gF1:[340,215],P:[330,392]}),intro:I0,
 q:'Die Scheibe liegt hinter unserem Tor in der Ecke – außerhalb des Trapezes. Darf unser Torwart sie dort spielen?',
 o:['Nein – hinter der Torlinie nur im Trapez, sonst gibt es 2 Minuten','Ja – hinter dem eigenen Tor darf er die Scheibe überall spielen','Ja – aber nur mit dem Schlittschuh, nicht mit dem Schläger','Nur dann, wenn gerade kein Gegner in der Nähe der Scheibe ist'],
 ex:'Hinter der Torlinie darf der Torwart die Scheibe nur im Trapez spielen – entscheidend ist, wo die Scheibe liegt. Sonst gibt es 2 Minuten wegen Spielverzögerung. Vor der Torlinie darf er sie in der eigenen Hälfte überall spielen.',
 solve:[{t:1200,m:{},hl:TRAP_OK,txt:'Nur im Trapez erlaubt'},{t:1600,m:{D1:[322,382],P:'D1',gF1:[330,330],F1:[150,300]},txt:'D1 kommt zurück und holt die Scheibe'}]},

{id:'r-02',chap:'Torwart',lvl:'U13+',rink:'full',
 setup:SF({D1:[200,90],gF1:[440,160],P:[335,150]}),intro:[{t:1200,m:{T:[250,150]}}],
 q:'Die Scheibe liegt knapp hinter der Mittellinie. Darf unser Torwart dort hinfahren und sie spielen?',
 o:['Nein – hinter der roten Mittellinie darf er nicht ins Spiel eingreifen','Ja – der Torwart darf auf dem ganzen Eis mitspielen','Ja – aber nur, wenn er dabei keinen Schläger benutzt','Nur in der letzten Spielminute, wenn es knapp steht'],
 ex:'Greift der Torwart jenseits der roten Mittellinie ins Spiel ein (Scheibe spielen oder Gegner checken), bekommt er 2 Minuten. Er bleibt in seiner Hälfte.',
 solve:[{t:2000,m:{},hl:OVER_RED,txt:'Jenseits der Mittellinie: verboten'},{t:1400,m:{T:[52,150],D1:[325,140],P:'D1'},txt:'Torwart zurück – D1 übernimmt'},{t:1500,m:{}}]},

{id:'r-03',chap:'Torwart',lvl:'U13+',rink:'zone',
 setup:SD({gF1:[245,240],D2:[160,305],P:[252,248]}),intro:[{t:700,m:{T:[205,306]},txt:'Torwart kommt raus und verkürzt den Winkel'}],
 q:'Der Torwart kommt aus dem Torraum, verkürzt den Winkel und fängt den Schuss. Darf er die Scheibe festhalten?',
 o:['Ja – nach einer Parade oder bei Druck darf er sie festhalten, auch außerhalb des Torraums','Nein – außerhalb des Torraums darf der Torwart die Scheibe nie festhalten','Ja – und er darf sie danach so lange in der Hand behalten, wie er möchte','Nein – er muss die Scheibe immer sofort mit dem Schläger weiterspielen'],
 ex:'Kommt der Torwart aus dem Torraum, um den Winkel zu verkürzen, und hält die Scheibe nach der Parade fest, ist das erlaubt. 2 Minuten gibt es, wenn er aus dem Torraum stürzt und sich auf die Scheibe wirft, statt sie zu spielen, wenn er sie ohne Druck länger als 3 Sekunden in der Hand hält oder sie absichtlich festhält, nur um das Spiel zu unterbrechen. Schießt der Gegner die Scheibe von hinter der Mittellinie ins Drittel und der Torwart hält sie fest, darf sein Team vor dem Bully nicht wechseln. Wirft der Torwart die Scheibe nach vorne Richtung gegnerisches Tor, gibt es 2 Minuten – bekommt aber der Gegner die Scheibe, läuft das Spiel weiter; schießt er ein Tor, zählt es und die Strafe entfällt.',
 solve:[{t:600,m:{P:[205,300]},txt:'Parade außerhalb des Torraums'},{t:600,m:{gF1:[228,282]},txt:'Festhalten: erlaubt'}]},

{id:'r-04',chap:'Strafen',lvl:'U13+',rink:'full',
 setup:SF({F1:[300,150],gF1:[330,165],P:[312,156]}),intro:I0,
 q:'Wie lange dauert eine große Strafe?',
 o:['5 Minuten','2 Minuten','10 Minuten','Bis zum Spielende'],
 ex:'Die wichtigsten Strafen: kleine Strafe 2 Minuten, doppelte kleine 2+2, große Strafe 5 Minuten (dazu Spieldauer-Disziplinarstrafe), Disziplinarstrafe 10 Minuten, Spieldauer-Disziplinarstrafe und Matchstrafe (Spieler muss raus). Dazu gibt es Bankstrafe und Penaltyschuss.',
 solve:[{t:1100,m:{gF1:[300,285]},txt:'Große Strafe: 5 Minuten'}]},

{id:'r-05',chap:'Strafen',lvl:'U13+',rink:'zone',label:OZ,
 setup:SO({D1:[200,100],D2:[320,110],F1:[70,240],F3:[330,240],F2:[200,318],gD1:[150,290],gD2:[250,290],gF1:[150,185],gF2:[250,185],P:[208,106]}),intro:I0,
 q:'Wir spielen in Überzahl, weil der Gegner eine kleine Strafe hat – und schießen ein Tor. Was passiert?',
 o:['Die kleine Strafe ist vorbei, der Spieler darf zurück aufs Eis','Die Strafe läuft trotzdem bis zum Ende weiter','Die Strafe beginnt nach dem Bully wieder von vorne','Der Gegner bekommt automatisch noch 2 Minuten'],
 ex:'Fällt in Überzahl ein Tor, endet eine kleine Strafe sofort. Bei einer großen Strafe (5 Minuten) läuft die Strafe dagegen weiter.',
 solve:[{t:600,m:{P:'F3'},txt:'Pass'},{t:500,m:{P:[205,346]},txt:'Tor! Kleine Strafe vorbei'}]},

{id:'r-06',chap:'Strafen',lvl:'U13+',rink:'full',
 setup:SF({F1:[300,140],F2:[360,200],D1:[240,100],gF1:[330,160]}),intro:I0,
 q:'Ein Spieler bekommt eine 10-Minuten-Disziplinarstrafe. Muss sein Team jetzt in Unterzahl spielen?',
 o:['Nein – der Spieler sitzt 10 Minuten, das Team darf ihn ersetzen','Ja – das Team spielt 10 Minuten lang mit einem Spieler weniger','Ja – aber nur für die ersten 2 der 10 Minuten in Unterzahl','Nein – der Spieler darf sofort wieder zurück auf das Eis'],
 ex:'Die Disziplinarstrafe (10 Minuten) trifft nur den Spieler: Er sitzt 10 Minuten auf der Strafbank, sein Team darf aber sofort einen anderen Spieler aufs Eis schicken.',
 solve:[{t:1000,m:{F1:[300,285]},txt:'F1 sitzt 10 Minuten …'},{t:1000,m:{F2:[330,150]},txt:'… das Team bleibt vollzählig'}]},

{id:'r-07',chap:'Bully',lvl:'U13+',rink:'full',
 setup:SF({F1:[430,110],F2:[400,220],gD1:[480,150],gF1:[300,200],P:[488,156]}),intro:[{t:1400,m:{P:[22,95]}}],
 q:'Der Gegner schießt die Scheibe aus seiner Hälfte über unsere Torlinie – Icing. Wer darf aussuchen, an welchem Bullypunkt es weitergeht?',
 o:['Wir – das Team, das nicht Icing gemacht hat, wählt den Bullypunkt','Der Gegner – das Team, das Icing gemacht hat, darf wählen','Der Schiedsrichter entscheidet das immer ganz alleine','Der Kapitän des Teams, das zuletzt ein Tor geschossen hat'],
 ex:'Nach einem Icing ist Bully im Drittel des Teams, das Icing gemacht hat – und das angreifende Team darf wählen, an welchem der beiden Bullypunkte. Genauso darf das Team, das ein Powerplay bekommt, den Bullypunkt zum Start des Powerplays wählen.',
 solve:[{t:900,m:{P:[500,80]},hl:RDOTS,txt:'Wir wählen: oben oder unten'}]},

{id:'r-08',chap:'Icing & Abseits',lvl:'U13+',rink:'full',
 setup:SF({D1:[130,200],F1:[250,120],F2:[220,230],gF1:[350,200],gD1:[480,110],P:[140,204]}),intro:[{t:1600,m:{P:[575,72],gD1:[520,96]}}],
 q:'Wir machen Icing. Darf unsere Reihe auf dem Eis vor dem Bully wechseln?',
 o:['Nein – nach eigenem Icing darf das Team nicht wechseln','Ja – nach einer Unterbrechung darf man immer wechseln','Ja – aber nur der Torwart darf ausgetauscht werden','Nur, wenn der Trainer vorher eine Auszeit nimmt'],
 ex:'Das Team, das Icing gemacht hat, darf vor dem folgenden Bully nicht wechseln – die müde Reihe bleibt drauf. Und: Das Bully ist im eigenen Drittel. In Unterzahl ist Icing erlaubt.',
 solve:[{t:900,m:{P:[100,80]},hl:[100,80,30],txt:'Bully bei uns – kein Wechsel!'}]},

{id:'r-09',chap:'Icing & Abseits',lvl:'U13+',rink:'full',
 setup:SF({F1:[450,90],F2:[350,200],gD1:[480,200],gD2:[500,110],P:[356,204]}),intro:[{t:1300,m:{P:[470,240],gD1:[500,230]},txt:'Verzögertes Abseits: Arm oben'}],
 q:'Verzögertes Abseits ist angezeigt. F1 spielt die Scheibe trotzdem absichtlich, damit unterbrochen wird. Wo ist das Bully?',
 o:['Im Verteidigungsdrittel des Teams, das das Abseits verursacht hat','In der neutralen Zone, direkt vor der blauen Linie des Gegners','Am Mittelpunkt des Spielfelds, wie nach einem Tor','Genau dort, wo die Scheibe gerade gespielt wurde'],
 ex:'Das ist absichtliches Abseits. Dann gibt es Bully im Verteidigungsdrittel des Teams, das es verursacht hat – also bei uns hinten. Beim normalen Abseits ist das Bully in der neutralen Zone.',
 solve:[{t:700,m:{F1:[465,235]},txt:'Absichtlich gespielt – Pfiff'},{t:900,m:{P:[100,220]},hl:[100,220,30],txt:'Bully in unserem Drittel'}]},

{id:'r-10',chap:'Torraum',lvl:'U13+',rink:'zone',label:OZ,
 setup:SO({gT:[194,342],F2:[214,333],D1:[300,100],F1:[340,260],gD1:[250,300],gD2:[150,300],P:[308,106]}),intro:I0,
 q:'Ein Angreifer steht im Torraum und behindert den Torwart – die Scheibe geht rein. Zählt das Tor?',
 o:['Nein – das Tor zählt nicht, Bully in der neutralen Zone','Ja – Tor ist Tor, egal wo der Angreifer gestanden hat','Ja – aber der Angreifer bekommt zusätzlich 2 Minuten','Nein – und es gibt einen Penaltyschuss für den Gegner'],
 ex:'Behindert ein Angreifer im Torraum den Torwart, zählt ein Tor nicht. Das Bully ist dann in der neutralen Zone. Wichtig: Wird der Angreifer von einem Verteidiger in den Torraum geschubst, ist das kein Torraumabseits.',
 solve:[{t:550,m:{P:[206,346]},hl:CREASE,txt:'Angreifer im Torraum'},{t:900,m:{P:[110,58]},hl:[110,58,22],txt:'Kein Tor – Bully in der neutralen Zone'}]},

{id:'r-11',chap:'Torraum',lvl:'U13+',rink:'zone',label:OZ,
 setup:SO({gT:[194,342],F2:[232,298],D1:[300,100],F1:[340,260],gD1:[248,282],gD2:[150,300],P:[308,106]}),intro:[{t:900,m:{F2:[214,333],gD1:[230,316]},txt:'Verteidiger schubst F2 in den Torraum'}],
 q:'Der Verteidiger hat unseren Stürmer in den Torraum geschubst – jetzt fällt ein Tor. Zählt es?',
 o:['Ja – wer hineingeschubst wird, macht kein Torraumabseits','Nein – ein Angreifer im Torraum ist immer verboten','Nein – es gibt Bully in der neutralen Zone','Ja – aber nur, wenn der Torwart nicht berührt wurde'],
 ex:'Wird ein Angreifer von einem Gegner in den Torraum gestoßen, ist das kein Torraumabseits – das Tor zählt.',
 solve:[{t:550,m:{P:[206,346]},txt:'Tor zählt!'}]},

{id:'r-12',chap:'Wechsel',lvl:'U13+',rink:'full',
 setup:SF({F1:[350,160],F2:[380,90],gF1:[340,140],gF2:[400,210],P:[360,220]}),intro:I0,
 q:'Nach einer Unterbrechung hebt der Schiedsrichter den Arm. Was bedeutet das?',
 o:['Die Gastmannschaft darf nicht mehr wechseln – jetzt hat das Heimteam 5 Sekunden','Gleich gibt es eine Strafe gegen das Team, das zuletzt am Puck war','Ab jetzt dürfen beide Mannschaften so lange wechseln, wie sie wollen','Das Drittel ist zu Ende und beide Teams fahren in die Kabine'],
 ex:'Bei einer Unterbrechung wechselt zuerst das Gastteam (5 Sekunden). Dann hebt der Schiri den Arm – jetzt darf nur noch das Heimteam wechseln (5 Sekunden). Senkt er den Arm, darf keiner mehr wechseln. Im laufenden Spiel darf man jederzeit fliegend wechseln. Hebt der Schiri im laufenden Spiel den Arm, zeigt er eine verzögerte Strafe an.',
 solve:[{t:900,m:{F1:[350,10]},txt:'Gastteam wechselt (5 Sek.)'},{t:900,m:{gF1:[330,10]},txt:'Arm hoch: jetzt Heimteam (5 Sek.)'},{t:500,m:{},txt:'Arm runter: kein Wechsel mehr'}]},

{id:'r-13',chap:'Strafen',lvl:'U13+',rink:'full',
 setup:SF({F1:[420,150],F2:[380,230],D1:[300,100],F4:[200,-30],gD1:[440,170],gF1:[470,230],P:[430,156]}),intro:[{t:700,m:{gD1:[425,160]},txt:'Foul! Schiri hebt den Arm'}],
 q:'Der Schiedsrichter zeigt eine Strafe gegen den Gegner an, pfeift aber noch nicht. Warum fährt unser Torwart vom Eis?',
 o:['Für einen zusätzlichen Feldspieler – gepfiffen wird erst, wenn der Gegner die Scheibe hat','Weil er bei dem Foul verletzt wurde und behandelt werden muss','Weil er für das Foul seines Teams ebenfalls eine Strafe bekommt','Weil das Drittel gleich zu Ende ist und er sich ausruhen darf'],
 ex:'Verzögerte Strafe: Der Schiri pfeift erst, wenn das Team, das bestraft wird, die Scheibe kontrolliert. Bis dahin kann unser Team den Torwart gegen einen sechsten Feldspieler tauschen – ein Gegentor ist kaum möglich, weil der Gegner die Scheibe ja nicht spielen darf, ohne dass abgepfiffen wird.',
 solve:[{t:1200,m:{T:[160,10],F4:[200,90]},txt:'Torwart raus – 6. Feldspieler rein'},{t:700,m:{P:'gF1'},txt:'Gegner hat die Scheibe – Pfiff'}]},

{id:'r-14',chap:'Strafen',lvl:'U13+',rink:'full',
 setup:SF({F1:[330,150],gD1:[300,165],gD2:[300,60],P:[340,154]}),intro:[{t:900,m:{F1:[420,150],P:[430,154],gD1:[400,160]},txt:'Alleingang – Foul von hinten!'}],
 q:'Wann gibt es einen Penaltyschuss?',
 o:['Wenn ein Spieler beim Alleingang aufs Tor von hinten gefoult wird','Bei jeder Strafe, die in der letzten Spielminute gepfiffen wird','Wenn der Torwart die Scheibe zu lange im Torraum festhält','Immer dann, wenn eine Mannschaft zweimal Icing gemacht hat'],
 ex:'Penaltyschuss gibt es z. B., wenn ein Spieler beim Alleingang (nur noch der Torwart vor sich) von hinten gefoult wird, wenn ein Feldspieler im eigenen Torraum auf die Scheibe fällt oder sie mit der Hand aufnimmt, wenn ein Schläger auf Scheibe oder Puckführenden geworfen wird oder beim Alleingang das Tor absichtlich verschoben wird.',
 solve:[{t:700,m:{F1:[300,150],P:[300,150],gD1:[300,60],gD2:[260,60]},txt:'Penaltyschuss!'},{t:1200,m:{F1:[520,150],P:'F1'}},{t:400,m:{P:[566,146]},txt:'Tor!'}]},

{id:'r-15',chap:'Tore',lvl:'U13+',rink:'zone',label:OZ,
 setup:SO({gT:[194,342],D1:[300,100],F2:[214,318],F1:[340,260],gD1:[245,300],gD2:[150,300],P:[308,106]}),intro:I0,
 q:'Welches dieser Tore zählt?',
 o:['Puck prallt ohne Kickbewegung vom Schlittschuh ins Tor','Puck wird mit einer Kickbewegung ins Tor geschossen','Puck wird mit dem Schläger über Torlatten-Höhe abgefälscht','Puck wird vom Angreifer mit der Hand ins Tor gelenkt'],
 ex:'Ein Tor zählt nicht, wenn die Scheibe mit einer deutlichen Kickbewegung, mit der Hand (oder einem anderen Körperteil) ins Tor gelenkt oder mit dem Schläger über Höhe der Torlatte berührt wird. Prallt sie dagegen ohne Kickbewegung vom Schlittschuh ins Tor, zählt es.',
 solve:[{t:500,m:{P:[212,330]},txt:'Schuss prallt vom Schlittschuh …'},{t:300,m:{P:[205,346]},txt:'… ohne Kickbewegung: Tor zählt!'}]},

{id:'r-16',chap:'Handpass & hoher Stock',lvl:'U13+',rink:'full',
 setup:SF({D1:[120,160],F1:[170,90],gF1:[230,180],P:[128,150]}),intro:I0,
 q:'Wo ist ein Pass mit der Hand zum Mitspieler erlaubt?',
 o:['Nur im eigenen Verteidigungsdrittel','Überall auf dem gesamten Eis','Nirgends – die Hand ist immer verboten','Nur in der Angriffszone vor dem Tor'],
 ex:'Ein Handpass ist nur im eigenen Drittel erlaubt, sonst gibt es Pfiff und Bully. Eine Scheibe aus der Luft fangen ist erlaubt, man muss sie aber sofort aufs Eis legen. Wer die Hand schließt und damit fährt oder die Scheibe vom Eis aufnimmt, bekommt 2 Minuten.',
 solve:[{t:600,m:{},hl:OWNZONE,txt:'Im eigenen Drittel: erlaubt'},{t:500,m:{P:[178,96]},txt:'Handpass zu F1'}]},

{id:'r-17',chap:'Handpass & hoher Stock',lvl:'U13+',rink:'full',
 setup:SF({F1:[330,120],F2:[400,180],gD1:[450,140],P:[320,100]}),intro:[{t:600,m:{P:[340,112]},txt:'Scheibe in der Luft …'}],
 q:'F1 spielt die Scheibe mit dem Schläger über Schulterhöhe, F2 nimmt sie an. Was passiert?',
 o:['Pfiff – Bully an der Stelle, die dem Team keinen Vorteil bringt','Weiterspielen – hoher Stock ist nur beim Torschuss verboten','2 Minuten Strafe für F1 wegen hohem Stock','Penaltyschuss für das gegnerische Team'],
 ex:'Wer die Scheibe mit dem Schläger über Schulterhöhe spielt und sein Team kommt danach an die Scheibe, bekommt einen Pfiff. Das Bully ist dort, wo das Team keinen Vorteil hat. Trifft der hohe Stock einen Gegner, gibt es eine Strafe.',
 solve:[{t:600,m:{P:[392,176]},txt:'F2 nimmt an – Pfiff'},{t:800,m:{P:[360,80]},hl:[360,80,26],txt:'Bully – ohne Vorteil'}]},

{id:'r-18',chap:'Ausrüstung',lvl:'U13+',rink:'zone',
 setup:SD({F1:[250,250],F2:[300,180],D2:[180,310],gF1:[290,240],P:[285,260]}),intro:[{t:500,m:{},txt:'Knack – Schläger gebrochen!'}],
 q:'Dein Schläger bricht im Spiel. Was musst du tun?',
 o:['Den kaputten Schläger sofort fallen lassen','Mit dem kaputten Schläger bis zur Unterbrechung weiterspielen','Den Schiedsrichter um eine kurze Pause bitten','Den kaputten Schläger mit auf die Bank nehmen'],
 ex:'Ein gebrochener Schläger muss sofort fallen gelassen werden – wer damit weiterspielt, bekommt 2 Minuten. Ohne Schläger darfst du weiterspielen, dir einen neuen von der Bank holen oder dir einen von einem Mitspieler reichen lassen (nicht zuwerfen!). Ausnahme: Der Torwart darf mit gebrochenem Schläger bis zur nächsten Unterbrechung weiterspielen.',
 solve:[{t:500,m:{},txt:'Sofort fallen lassen!'}]},

{id:'r-19',chap:'Ausrüstung',lvl:'U13+',rink:'full',
 setup:SF({F1:[320,170],F2:[380,90],F4:[340,-30],gF1:[350,190],P:[330,176]}),intro:[{t:500,m:{},txt:'F1 verliert den Helm'}],
 q:'Ein Feldspieler verliert im Spiel seinen Helm. Was muss er tun?',
 o:['Sofort das Eis verlassen','Einfach ohne Helm weiterspielen','Helm in der Hand weiterspielen','Bis zur nächsten Unterbrechung warten'],
 ex:'Verliert ein Feldspieler im Spiel den Helm, muss er sofort das Eis verlassen. Ist beim Visier etwas gebrochen, gilt das Gleiche. Verliert der Torwart Helm oder Maske, wird das Spiel unterbrochen.',
 solve:[{t:1000,m:{F1:[320,10],F4:[340,150]},txt:'Raus – ein anderer kommt rein'}]},

{id:'r-20',chap:'Ausrüstung',lvl:'U13+',rink:'zone',
 setup:SD({F1:[250,250],F2:[300,180],D1:[200,290]}),intro:I0,
 q:'Welche Schutzausrüstung ist für uns im Nachwuchs Pflicht?',
 o:['Halsschutz und Gitter oder Vollvisier – Torhüter zusätzlich Lexan','Nur ein Helm – Gitter und Halsschutz sind freiwillig','Ab 14 Jahren reicht ein Halbvisier ohne Halsschutz','Halsschutz brauchen nur Torhüter, Feldspieler nicht'],
 ex:'Halsschutz ist Pflicht, für Torhüter zusätzlich ein Lexan-Schutz. Unter 18 Jahren ist Gitter oder Vollvisier Pflicht.',
 solve:[{t:500,m:{},txt:'Halsschutz + Gitter/Vollvisier'}]},

{id:'r-21',chap:'Spielverzögerung',lvl:'U13+',rink:'zone',
 setup:SD({D1:[330,330],gF1:[300,300],D2:[200,320],P:[338,336]}),intro:I0,
 q:'Wofür gibt es 2 Minuten wegen Spielverzögerung?',
 o:['Puck aus dem eigenen Drittel direkt über das Glas ins Aus schießen','Puck über die Bande direkt in die eigene Spielerbank schießen','Ein Icing machen, während das eigene Team in Unterzahl spielt','Ein Abseits, weil ein Stürmer zu früh in die Zone gefahren ist'],
 ex:'2 Minuten Spielverzögerung gibt es u. a., wenn man die Scheibe aus dem eigenen Drittel direkt (ohne Ablenkung) ins Aus schießt, das Tor absichtlich verschiebt, die Scheibe absichtlich einfriert, wenn der Torwart sie außerhalb des Trapezes spielt oder wenn man während des Spiels seine Ausrüstung richtet.',
 solve:[{t:700,m:{P:[412,210]},txt:'Direkt ins Aus: 2 Minuten'}]}
];
