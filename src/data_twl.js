/* ---------- Torwart-Wissen: Lektionen (Inhalt nach DEB-Rahmentrainingskonzeption) ---------- */
RINK.crease={vb:'112 268 176 150',svg:RINK.zone.svg};
const GOALC=[200,350];
const LINE=(a,b,c)=>({areas:[{d:`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`,c:c||'#2f6fd6',op:0}]});
const ROUTE=(pts,c,t,tx,ty)=>({areas:[{d:'M'+pts.map(p=>p.join(' ')).join('L'),c:c||'#f08c00',op:0,sw:2.2,dash:'4 3',t,x:tx,y:ty,pill:true,fs:8}]});
// Zonen rund ums Tor (zone-Ansicht)
const ZONES={areas:[
 {d:'M8 85H392V330L240 350H160L8 330Z',c:'#2f6fd6',op:0.10,dash:'0',t:'weit weg: aufrechter, Zeit zum Reagieren',x:200,y:118,pill:true},
 {d:'M70 330A140 120 0 0 1 330 330L214 350H186Z',c:'#f08c00',op:0.16,dash:'0',t:'mittel',x:200,y:240,pill:true},
 {d:'M135 345A65 55 0 0 1 265 345L214 350H186Z',c:'#e0393e',op:0.22,dash:'0',t:'nah: kompakt',x:200,y:306,pill:true},
 {d:'M8 330L160 350H8Z M392 330L240 350H392Z M8 350H392V400H8Z',c:'#6b7380',op:0.18,dash:'0',t:'Pfosten',x:70,y:372,pill:true},
 {d:'',c:'#6b7380',t:'Pfosten',x:330,y:372,pill:true}]};
const TRAP={areas:[{d:'M162 350L238 350L260 410L140 410Z',c:'#1D9E75',op:0.2,dash:'0',t:'Trapez: erlaubt',x:200,y:385,pill:true},
  {d:'M238 350H392V330A80 80 0 0 1 315 410H260Z M162 350H8V330A80 80 0 0 0 85 410H140Z',c:'#e0393e',op:0.15,dash:'0',t:'verboten',x:335,y:372,pill:true},{d:'',c:'#e0393e',t:'verboten',x:65,y:372,pill:true}]};
const TORRAUM_B={areas:[{d:'M176 470V457A24 15 0 0 1 224 457V470Z',c:'#2f6fd6',dash:'0',t:'Torraum',x:200,y:420,pill:true}]};
// Torwart-Positionen im Torraum
const LP_=[191,342],RP_=[209,342],MI_=[200,326],TL_=[187,325],TR_=[213,325];
const L1P=[230,120],L1B=twBl(L1P);
const mvT=(pts,t,txt)=>pts.map((p,i)=>({t:t||420,m:{T:p},txt:i===0?txt:undefined}));

const TWLES=[
/* 1 */
{id:'tl-01',title:'Grundstellung',sub:'Bereit sein, locker bleiben, je nach Abstand anpassen',q:'Lektion: Grundstellung',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Bereit, bevor der Schuss kommt',setup:TWZ({gD1:L1P,D1:[150,250],D2:[255,240],P:L1B}),
  txt:'Aus der Grundstellung startet jede Abwehr. Nach DEB:\nKnie gebeugt, Gewicht auf den Fußballen, Schlittschuhe leicht auf den Innenkanten. Oberkörper leicht nach vorne, Hände und Schläger vor dem Körper.\nJeder passt sie an seinen Körper an – die Grundsätze bleiben gleich.',
  steps:[{t:900,m:{T:twOn(L1B,18)},hl:[200,333,22],txt:'Grundstellung: bereit'}]},
 {h:'Locker statt verkrampft',setup:TWZ({gD1:L1P,gD2:[110,115],D1:[150,250],D2:[255,240],P:L1B,T:twOn(L1B,18)}),
  txt:'Angespannte Muskeln reagieren langsam, lockere schnell. Hände, Schultern und Nacken bleiben locker.\nIst der Puck weit weg oder in der anderen Zone: kurz durchatmen.',
  merke:'Locker ist schneller als verkrampft.',
  steps:[{t:700,m:{P:'gD2'},txt:'Puck weit weg – locker bleiben'},{t:700,m:{T:twOn(twBl([110,115]),18)}},{t:700,m:{P:twBl(L1P)}},{t:700,m:{T:twOn(L1B,18)}}]},
 {h:'Je näher der Puck, desto kompakter',setup:TWZ({gF1:[210,100],P:twBl([210,100])}),
  txt:'Ist der Puck weit weg, steht der Torwart aufrechter: Er hat Zeit, den Schuss zu sehen. Kommt der Puck näher, wird er tiefer und kompakter – nah vor dem Tor geht nichts mehr durch.\nSpitzer Winkel oder Puck hinter dem Tor: Dann geht er an den Pfosten (siehe Lektion „Spiel am Pfosten“).',
  merke:'Grundstellung nicht zu breit und nicht ohne Grund in den Butterfly – sonst ist er zu früh unten und kommt schlecht zur Seite.',
  steps:[{t:700,m:{},hl:ZONES,txt:'Weit weg'},{t:1300,m:{gF1:[215,205],P:twBl([215,205]),T:twOn(twBl([215,205]),16)},txt:'Mittel'},{t:1300,m:{gF1:[222,285],P:twBl([222,285]),T:twOn(twBl([222,285]),12)},txt:'Nah: kompakt'}]},
 {h:'Früh in Position – dann ruhig',setup:TWZ({gF1:[110,262],gF2:[290,262],D1:[160,215],D2:[245,300],P:twBl([110,262]),T:twOn(twBl([110,262]),16)}),
  txt:'Wer früh seine Position findet, hat einen Zeitvorteil: Der Schütze muss sich nach dem Torwart richten, nicht umgekehrt.\nNach dem Pass also schnell rüber, sauber stoppen – und ruhig stehen, wenn der Schuss kommt.',
  steps:[{t:550,m:{P:'gF2'},lin:true,txt:'Pass'},{t:450,m:{T:twOn(twBl([290,262]),16)},txt:'Rüber und stoppen'},{t:600,m:{},txt:'Ruhig – bereit für den Schuss'},{t:420,m:{P:[212,332]},lin:true,txt:'Gehalten'}]}
 ],
 how:['Knie gebeugt, Gewicht auf den Fußballen','Hände und Schläger vor dem Körper','Hände, Schultern und Nacken locker lassen','Je näher der Puck, desto kompakter','Früh in Position, beim Schuss ruhig stehen'],
 cues:['Gewicht nach vorne','Hände vor den Körper','Locker bleiben'],
 mistakes:[['Gewicht auf den Fersen','Man kommt nicht schnell weg.','Gewicht nach vorne auf die Fußballen.'],['Zu breit stehen','Der Torwart geht zu früh runter und kommt schlecht zur Seite.','Etwas mehr als schulterbreit reicht.'],['Verkrampft','Angespannte Muskeln reagieren langsam.','Hände und Schultern bewusst locker lassen.'],['Beim Schuss noch in Bewegung','Wer sich bewegt, ist nicht bereit.','Früher in Position gehen und vor dem Schuss stoppen.']]},

/* 2 */
{id:'tl-02',title:'Winkel',sub:'Mittig zum Puck – der wichtigste Grundsatz',q:'Lektion: Winkel',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Der Schusswinkel',setup:TWZ({gF1:[300,230],D1:[160,280],D2:[250,180],P:twBl([300,230])}),
  txt:'Vom Puck zu den beiden Pfosten entsteht ein Dreieck – nur dorthin kann der Schütze treffen.\nDer Torwart stellt sich in dieses Dreieck, und zwar genau in die Mitte.',
  steps:[{t:900,m:{},hl:twTri(twBl([300,230]),350,''),txt:'Puck → Pfosten = Schusswinkel'},{t:900,m:{T:twOn(twBl([300,230]),16)},txt:'Torwart mittig ins Dreieck'}]},
 {h:'Nase und Bauchnabel zum Puck',setup:TWZ({gF1:[300,230],D1:[160,280],D2:[250,180],P:twBl([300,230])}),
  txt:'DEB-Faustregel für junge Torhüter: „Nase und Bauchnabel mittig zum Puck.“\nGedacht ist eine Linie vom Puck zur Tormitte – auf dieser Linie steht der Torwart.',
  merke:'Nase und Bauchnabel mittig zum Puck.',
  steps:[{t:900,m:{T:twOn(twBl([300,230]),16)},hl:LINE(twBl([300,230]),GOALC),txt:'Linie Puck – Tormitte'}]},
 {h:'Zum Puck – nicht zum Spieler',setup:TWZ({gF1:[290,250],gF2:[150,230],D1:[180,290],D2:[255,200],P:twBl([150,230]),T:twOn(twBl([150,230]),16)}),
  txt:'Gefährlich wirkt oft der Spieler, der am nächsten am Tor ist. Schießen kann aber nur der mit dem Puck.\nDeshalb richtet sich der Torwart immer nach dem Puck aus – den anderen behält er im Augenwinkel. Eine Täuschung mit Kopf oder Schultern ändert nichts daran, wo der Puck ist.',
  steps:[{t:700,m:{},hl:twTri(twBl([150,230])),txt:'Puck links – Torwart links'},{t:600,m:{P:'gF1'},hl:null,txt:'Pass'},{t:600,m:{T:twOn([299,241],16)},hl:twTri([299,241]),txt:'Puck rechts – Torwart rechts'}]},
 {h:'Der Puck wandert – der Torwart wandert mit',setup:TWZ({gF1:[90,250],D1:[160,215],D2:[250,300],P:twBl([90,250]),T:twOn(twBl([90,250]),16)}),
  txt:'Bewegt sich der Puck, korrigiert der Torwart ständig mit – kleine Schritte, immer mittig zum Puck. So muss er beim Schuss nicht mehr suchen.',
  steps:[{t:1000,m:{gF1:[150,170],P:twBl([150,170]),T:twOn(twBl([150,170]),18)},lin:true,txt:'Mitgehen …'},{t:1000,m:{gF1:[250,165],P:twBl([250,165]),T:twOn(twBl([250,165]),18)},lin:true},{t:1000,m:{gF1:[315,245],P:twBl([315,245]),T:twOn(twBl([315,245]),16)},lin:true,txt:'… immer mittig zum Puck'}]}
 ],
 how:['Gedachte Linie vom Puck zur Tormitte – darauf steht der Torwart','Nase und Bauchnabel zeigen zum Puck','Nach dem Puck ausrichten, nicht nach dem Spieler','Bewegt sich der Puck: mit kleinen Schritten nachkorrigieren'],
 cues:['Mittig zum Puck','Nur der Puck bewegt mich'],
 mistakes:[['Nach dem Spieler statt nach dem Puck','Schießen kann nur der mit dem Puck.','Immer zum Puck ausrichten.'],['Zu weit zur kurzen oder langen Seite','Eine Seite ist offen.','Linie Puck – Tormitte prüfen.'],['Nach dem Pass nicht nachkorrigiert','Jeder Pass heißt: neuer Winkel.','Sofort mitgehen.']]},

/* 3 */
{id:'tl-03',title:'Tiefe',sub:'Wie weit raus? Je nach Angriff',q:'Lektion: Tiefe',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Wie weit raus?',setup:TWZ({gF1:[200,200],D1:[140,260],D2:[260,260],P:twBl([200,200])}),
  txt:'Neben dem Winkel entscheidet die Tiefe: der Abstand des Torwarts zur Torlinie. Der DEB unterscheidet konservativ (näher an der Torlinie), mittel und aggressiv (weiter draußen).\nWeiter draußen sieht der Schütze weniger Tor – aber der Weg zur Seite wird länger. Auch die Körpergröße spielt mit.',
  steps:[{t:800,m:{T:[200,340]},hl:[200,340,14],txt:'Konservativ'},{t:800,m:{T:[200,326]},hl:[200,326,14],txt:'Mittel'},{t:800,m:{T:[200,306]},hl:[200,306,14],txt:'Aggressiv'}]},
 {h:'1 gegen 0 und 1 gegen 1: aggressiver',rink:'big',label:UT,setup:TWB({gF1:[200,150],D1:[190,40],P:[200,163]}),
  txt:'Kommt ein Gegner allein (oder gegen einen Verteidiger), spielt der Torwart aggressiver: Faustregel nach DEB – außerhalb des blauen Torraums. So wird der Winkel klein.\nKommt der Schütze näher, gleitet der Torwart kontrolliert zurück, damit er nicht einfach umkurvt wird.',
  steps:[{t:1300,m:{gF1:[200,290],D1:[195,170],P:[200,303],T:[200,428]},lin:true,hl:TORRAUM_B,txt:'Raus aus dem Torraum'},{t:1100,m:{gF1:[200,350],P:[200,363],T:[200,440]},lin:true,txt:'Mit dem Schützen zurückgleiten'}]},
 {h:'2 gegen 1 und 2 gegen 2: passiver',rink:'big',label:UT,setup:TWB({gF1:[120,170],gF2:[290,180],D1:[205,250],P:[128,181]}),
  txt:'Sind es zwei Angreifer, spielt der Torwart passiver – eher im Torraum. Kommt der Querpass, ist der Weg zum anderen Pfosten kurz.\nDer Verteidiger nimmt den Pass weg, der Torwart nimmt den Schützen.',
  steps:[{t:1300,m:{gF1:[125,300],gF2:[285,315],D1:[205,370],P:[132,312],T:twOn([132,312],13,470)},lin:true,txt:'Im Torraum bleiben'},{t:550,m:{P:'gF2'},txt:'Querpass'},{t:450,m:{T:twOn(twBl([285,315],470),13,470)},txt:'Kurzer Weg – rechtzeitig da'}]},
 {h:'Ist der lange Pfosten besetzt?',setup:TWZ({gF1:[305,265],gF2:[150,322],D1:[250,215],D2:[170,250],P:twBl([305,265])}),
  txt:'Steht ein Gegner am langen Pfosten (Backdoor), spielt der Torwart tiefer – sonst kommt er nach einem Querpass nicht mehr rüber.\nIst der lange Pfosten frei, kann er weiter raus.',
  merke:'Vor dem Schuss kurz checken: Steht jemand am langen Pfosten?',
  steps:[{t:900,m:{T:twOn(twBl([305,265]),12)},hl:[150,322,22],txt:'Backdoor besetzt: tiefer'},{t:1100,m:{gF2:[120,200]},hl:null},{t:800,m:{T:twOn(twBl([305,265]),30)},txt:'Backdoor frei: weiter raus'}]}
 ],
 how:['Tiefe = Abstand zur Torlinie: konservativ, mittel, aggressiv','1 gegen 0 / 1 gegen 1: aggressiver, außerhalb des Torraums','2 gegen 1 / 2 gegen 2: passiver, eher im Torraum','Langer Pfosten besetzt: tiefer – frei: weiter raus'],
 cues:['Einer kommt: raus','Zwei kommen: drin bleiben','Backdoor checken'],
 mistakes:[['Bei 2 gegen 1 zu weit draußen','Nach dem Querpass ist der Weg zu weit.','Bei zwei Angreifern im Torraum bleiben.'],['Bei 1 gegen 0 raus und stehen geblieben','Der Schütze kurvt einfach um den Torwart.','Mit dem Schützen kontrolliert zurückgleiten.'],['Backdoor nicht gesehen','Der Querpass kommt überraschend.','Vor dem Schuss kurz den langen Pfosten checken.']]},

/* 4 */
{id:'tl-04',short:'Bewegung',title:'Shuffle, T-Push, Butterfly-Slide',sub:'Welche Bewegung wann?',q:'Lektion: Bewegung',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Shuffle – für kurze Wege',setup:TWZ({gF1:[175,240],gF2:[240,235],D1:[140,280],D2:[285,280],P:twBl([175,240]),T:twOn(twBl([175,240]),16)}),
  txt:'Beim Shuffle macht der Torwart kleine Seitschritte, die Füße zeigen dabei nach vorne. Er bleibt in der Grundstellung und kann jederzeit abwehren.\nGut für kurze Pässe und kleine Korrekturen.',
  steps:[{t:500,m:{P:'gF2'},lin:true,txt:'Kurzer Pass'},{t:600,m:{T:twOn([249,226],16)},txt:'Shuffle: kleine Seitschritte'}]},
 {h:'T-Push – für weite Wege',setup:TWZ({gF1:P7a,gF2:P7b,D1:[160,215],D2:[245,300],P:B7a,T:twOn(B7a,16)}),
  txt:'Beim T-Push dreht der Torwart die Füße in T-Form: Der vordere Fuß zeigt in die Laufrichtung, der hintere drückt kräftig ab. Am Ziel stoppt er sauber auf der Kufe – mittig zum Puck.\nGut für weite Pässe, zum Beispiel von Bullykreis zu Bullykreis.',
  steps:[{t:550,m:{P:'gF2'},lin:true,txt:'Weiter Pass'},{t:450,m:{T:twOn(B7b,16)},txt:'T-Push: weit und schnell'}]},
 {h:'Butterfly-Slide – für Pässe nah am Tor',setup:TWZ({gF1:[255,345],gF2:[150,300],D1:[230,270],D2:[110,255],P:[245,340],T:[209,341]}),
  txt:'Beim Butterfly-Slide gleitet der Torwart aus dem Butterfly zur Seite – die Schoner bleiben unten. So ist das Eis immer zu.\nGut für Querpässe nah am Tor, wenn keine Zeit zum Aufstehen ist.',
  steps:[{t:500,m:{P:'gF2'},lin:true,txt:'Querpass nah am Tor'},{t:450,m:{T:twOn(twBl([150,300]),10)},txt:'Butterfly-Slide: unten bleiben'}]},
 {h:'Wichtig bei jeder Bewegung',setup:TWZ({gF1:P7a,gF2:P7b,D1:[160,215],D2:[245,300],P:B7a,T:twOn(B7a,16)}),
  txt:'Der Kopf ist zuerst beim Puck – der Körper folgt. Am Ziel sauber stoppen, nicht übers Ziel hinausrutschen.\nDie DEB-Laufmuster üben genau diese Bewegungen, damit sie im Spiel automatisch klappen (nächste Lektion).',
  merke:'Erst der Kopf, dann der Körper.',
  steps:[{t:550,m:{P:'gF2'},lin:true,txt:'Kopf zuerst zum Puck'},{t:450,m:{T:twOn(B7b,16)},txt:'Sauber stoppen – mittig zum Puck'}]}
 ],
 how:['Kurzer Weg: Shuffle','Weiter Weg: T-Push','Pass nah am Tor: Butterfly-Slide','Kopf zuerst zum Puck, dann der Körper','Am Ziel sauber stoppen'],
 cues:['Kurz: Shuffle','Weit: T-Push','Nah: Slide'],
 mistakes:[['Mit Shuffles einem weiten Pass hinterher','Zu langsam – der Schuss kommt vorher.','Bei weiten Wegen den T-Push nehmen.'],['Übers Ziel hinaus','Dann ist die andere Seite offen.','Nach dem T-Push auf der Kufe stoppen, mittig zum Puck.'],['Puck aus den Augen verloren','Man weiß nicht, wohin man muss.','Zuerst dreht der Kopf zum Puck.']]},

/* 5 */
{id:'tl-05',short:'Laufmuster',title:'Die DEB-Laufmuster',sub:'Feste Wege im Torraum – #1 bis #7',q:'Lektion: DEB-Laufmuster',chap:'Lektion',o:[],rink:'crease',
 pages:[
 {h:'Wozu Laufmuster?',setup:{T:LP_},
  txt:'Die Laufmuster des DEB sind feste Wege im Torraum. Sie simulieren Spielsituationen: vom Pfosten raus zum Puck, quer rüber, zurück an den anderen Pfosten.\nWer sie oft übt, macht die Bewegungen im Spiel automatisch richtig. Vorher braucht es ein gutes Fundament aus allgemeinem Schlittschuhlaufen.',
  steps:[{t:800,m:{},hl:{areas:[{d:'M176 350V337A24 15 0 0 1 224 337V350Z',c:'#2f6fd6',op:0.15,dash:'0',t:'Torraum',x:200,y:312,pill:true,fs:8}]},txt:'Start: am Pfosten'}]},
 {h:'#1: T-Push Mitte – T-Push Pfosten',setup:{T:LP_},
  txt:'Vom Pfosten mit einem T-Push nach vorne in die Mitte, kurz stoppen, dann mit einem T-Push an den anderen Pfosten.\nWichtig: an jedem Punkt sauber stoppen, Blick nach vorne.',
  steps:[{t:600,m:{},hl:ROUTE([LP_,MI_,RP_],'#f08c00','#1',200,312)},...mvT([MI_,RP_],520,'T-Push Mitte – T-Push Pfosten')]},
 {h:'#2: X-T-Push',setup:{T:LP_},
  txt:'Diagonal über Kreuz: vom Pfosten schräg nach vorne auf die andere Seite, zurück an den Pfosten, dann die andere Diagonale.\nSo entsteht ein X im Torraum.',
  steps:[{t:600,m:{},hl:ROUTE([LP_,TR_,RP_,TL_,LP_],'#f08c00','#2',200,312)},...mvT([TR_,RP_,TL_,LP_],480,'X-T-Push')]},
 {h:'#3: Mitte – Shuffle raus – T-Push Pfosten',setup:{T:LP_},
  txt:'T-Push in die Mitte, dann mit einem kurzen Shuffle nach außen, zum Schluss mit einem T-Push quer an den Pfosten.',
  steps:[{t:600,m:{},hl:ROUTE([LP_,MI_,[212,318],RP_],'#f08c00','#3',200,306)},...mvT([MI_,[212,318],RP_],520,'Mitte – Shuffle – T-Push')]},
 {h:'#4: Mitte – Butterfly – Backside-Up',setup:{T:LP_},
  txt:'T-Push in die Mitte, runter in den Butterfly, dann rotieren und mit einem T-Push nach hinten oben an den anderen Pfosten (Backside-Up).',
  steps:[{t:600,m:{},hl:ROUTE([LP_,MI_,RP_],'#f08c00','#4',200,312)},{t:520,m:{T:MI_},txt:'T-Push Mitte'},{t:600,m:{},hl:[MI_[0],MI_[1],9],txt:'Butterfly'},{t:520,m:{T:RP_},txt:'Backside-Up zum Pfosten'}]},
 {h:'#5 bis #7: für die Älteren',setup:{T:LP_},
  txt:'Im Aufbautraining (ab U17) kommen dazu:\n#5 Butterfly-Slide – im Butterfly zur Seite gleiten.\n#6 Backside Push – aus dem Butterfly mit Schulterblick rotieren und mit aufgestelltem Bein seitlich zur Scheibe gleiten.\n#7 RVH – die Position am Pfosten (Lektion „Spiel am Pfosten“).\nZiel ist dann: perfekte Technik und Tempo – und eigene, spielnahe Wege entwickeln.',
  steps:[{t:500,m:{},hl:ROUTE([LP_,[200,334],RP_],'#2f6fd6','#5',200,326)},{t:600,m:{T:[200,334]},txt:'#5 Butterfly-Slide'},{t:600,m:{T:RP_}}]}
 ],
 how:['#1: T-Push Mitte – T-Push Pfosten','#2: X-T-Push','#3: Mitte – Shuffle raus – T-Push Pfosten','#4: Mitte – Butterfly – Backside-Up','Ab U17: #5 Butterfly-Slide, #6 Backside Push, #7 RVH'],
 cues:['Sauber stoppen','Blick nach vorne','Erst langsam, dann schnell'],
 mistakes:[['Zu schnell, zu schlampig','Falsch eingeübt läuft es im Spiel falsch.','Erst langsam und sauber, dann schneller.'],['Nicht gestoppt','Man rutscht übers Ziel hinaus.','An jedem Punkt kurz stehen.'],['Blick nach unten','Im Spiel muss der Blick beim Puck sein.','Kopf hoch, Blick nach vorne.']]},

/* 6 */
{id:'tl-06',short:'Pfosten',title:'Spiel am Pfosten',sub:'Stehend, RVH und Overlap',q:'Lektion: Spiel am Pfosten',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Stehend am Pfosten',setup:TWZ({gF1:[120,385],gF2:[215,265],D1:[160,280],D2:[255,290],P:[148,393]}),
  txt:'Ist der Puck in der Ecke, geht der Torwart an den Pfosten auf der Puckseite. Athletische Grundposition, der Schlittschuh direkt am Pfosten – kein Loch zwischen Kufe und Pfosten.\nMit dem Schläger deckt er die Passwege vor das Tor ab.',
  merke:'Kein Loch am Pfosten.',
  steps:[{t:700,m:{T:[192,342]},hl:[186,350,11],txt:'Schlittschuh an den Pfosten'}]},
 {h:'RVH – Puck an der Torlinie',setup:TWZ({gF1:[290,375],gF2:[225,265],D1:[255,295],D2:[160,280],P:[270,370]}),
  txt:'Bei spitzem Winkel oder Puck hinter dem Tor: RVH (Reverse Vertical Horizontal). Das pfostennahe Bein liegt flach auf dem Eis am Pfosten, das andere ist aufgestellt und drückt über die Kufe ins Eis. Der Oberkörper lehnt am Pfosten.\nDer Schoner auf dem Eis schließt unten alles zu – auch gegen den Bauerntrick.',
  steps:[{t:700,m:{T:[210,343]},hl:[214,350,11],txt:'RVH: Pfosten zu'},{t:1000,m:{gF1:[245,382],P:'gF1'},hl:null,txt:'Gegner sucht Lücke …'},{t:600,m:{},txt:'… unten ist zu'}]},
 {h:'Raus aus der RVH',setup:TWZ({gF1:[290,375],gF2:[225,265],D1:[255,295],D2:[160,280],P:[270,370],T:[210,343]}),
  txt:'Kommt der Pass vor das Tor, drückt sich der Torwart mit dem aufgestellten Bein vom Pfosten ab und ist schnell mittig zum Puck.',
  steps:[{t:550,m:{P:'gF2'},txt:'Pass in den Slot'},{t:450,m:{T:twOn(twBl([225,265]),12)},txt:'Abdrücken – mittig zum Puck'}]},
 {h:'Overlap – Gegner zieht zur Torlinie',setup:TWZ({gF1:[330,235],D2:[300,215],gF2:[175,270],D1:[160,300],P:twBl([330,235])}),
  txt:'Zieht ein Gegner außen von oben Richtung Torlinie, spielt der Torwart Overlap: Er überdeckt bewusst den Pfosten, der untere Schlittschuh steht auf oder hinter der Torlinie, das Gewicht ist gleich verteilt.\nSo kann er auf den Schuss und auf den Pass in die Mitte reagieren.',
  steps:[{t:1500,m:{gF1:[292,338],D2:[305,290],P:[262,346]},lin:true,txt:'Gegner zieht zur Torlinie'},{t:700,m:{T:[215,346]},hl:[214,350,12],txt:'Overlap: Pfosten überdeckt'}]}
 ],
 how:['Puck in der Ecke: stehend an den Pfosten, kein Loch','Spitzer Winkel / hinter dem Tor: RVH','Pass vor das Tor: vom Pfosten abdrücken, mittig zum Puck','Gegner zieht außen zur Torlinie: Overlap'],
 cues:['Pfosten zu','Kein Loch','Abdrücken zum Puck'],
 mistakes:[['Lücke am Pfosten','Der Puck rutscht zwischen Kufe und Pfosten durch.','Schlittschuh direkt an den Pfosten.'],['Zu lange am Pfosten kleben','Nach dem Pass vor das Tor ist es zu spät.','Pass gesehen – sofort raus zum Puck.'],['RVH bei Schüssen von weit draußen','Oben ist zu viel offen.','RVH nur bei spitzem Winkel und Puck nah am Tor.']]},

/* 7 */
{id:'tl-07',short:'Abpraller',title:'Abpraller und Recovery',sub:'Puck kontrollieren – und wenn nicht: sofort weiter',q:'Lektion: Abpraller',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Fanghand: festhalten',setup:TWZ({gF1:[180,240],gF2:[235,300],D1:[160,300],D2:[265,255],P:twBl([180,240]),T:twOn(twBl([180,240]),16)}),
  txt:'Die Fanghand ist das vielseitigste Werkzeug. Sie kann den Puck festhalten – dann gibt es Bully, und kein Gegner kann nachschießen.\nFanghand nach oben, Fangkorb zum Puck, Blick auf den Puck.',
  steps:[{t:450,m:{P:'T'},lin:true,txt:'Fangen – festhalten'},{t:800,m:{gF2:[245,290]},txt:'Kein Nachschuss möglich'}]},
 {h:'Stockhand und Schläger: in die Ecke',setup:TWZ({gF1:[295,250],gF2:[190,275],D1:[245,295],D2:[150,290],P:twBl([295,250]),T:twOn(twBl([295,250]),16)}),
  txt:'Mit der Stockhand wird nicht gefangen, sondern gelenkt – in die Ecke, weg vom Slot. Die Bewegung kommt aus einer kleinen Drehung im Handgelenk.\nFlache Schüsse nimmt der Schläger: in die Ecke lenken oder hoch ins Netz über der Bande.',
  steps:[{t:400,m:{P:[212,324]},lin:true,txt:'Schuss'},{t:700,m:{P:[352,378]},hl:{areas:[{d:'M186 350 L120 262 L120 222 L280 222 L280 262 L214 350 Z',c:'#e0393e',op:0.12,dash:'0',t:'Slot – hier nicht hin',x:200,y:240,pill:true}]},txt:'Weg vom Slot – in die Ecke'}]},
 {h:'Abpraller? Sofort weiter (Recovery)',setup:TWZ({gF1:[215,255],gF2:[290,300],D1:[160,280],D2:[255,220],P:twBl([215,255]),T:twOn(twBl([215,255]),16)}),
  txt:'Null Abpraller schafft keiner. Deshalb: Den Puck bis zum Körper verfolgen – und danach weiter. Springt er weg, kommt der Torwart sofort wieder mittig zum Puck, stehend oder mit Butterfly-Slide.\nSchnell, aber nicht hektisch: Wer hektisch wird, verliert die Stabilität.',
  merke:'Augen bleiben am Puck – auch nach der Abwehr.',
  steps:[{t:450,m:{P:[203,326]},lin:true,txt:'Abgewehrt'},{t:450,m:{P:[268,318]},lin:true,txt:'Abpraller'},{t:400,m:{P:'gF2'}},{t:500,m:{T:twOn(twBl([290,300]),12)},txt:'Recovery: mittig zum Puck'}]},
 {h:'Freier Puck: wegräumen – nie aufgeben',setup:TWZ({gF1:[310,215],D1:[160,280],D2:[255,180],P:[222,312],T:[203,336]}),
  txt:'Liegt der Puck frei vor dem Torraum, räumt der Torwart ihn mit dem Schläger weg (aktiver Schläger) – bevor der Gegner da ist.\nDEB-Grundsatz: den Puck nie aufgeben, auch wenn man schon liegt.',
  merke:'Aus dem Torraum stürzen und sich auf den Puck werfen, statt ihn zu spielen = 2 Minuten.',
  steps:[{t:900,m:{gF1:[270,262]},txt:'Puck frei – Gegner kommt'},{t:450,m:{T:[212,330],P:[365,385]},txt:'Aktiver Schläger: weg damit'}]}
 ],
 how:['Fanghand: festhalten, wenn ein Gegner nachschießen kann','Stockhand und Schläger: in die Ecke lenken','Abpraller: Augen am Puck, sofort wieder mittig','Freier Puck: wegräumen, nie aufgeben'],
 cues:['Festhalten oder Ecke','Augen am Puck','Nie aufgeben'],
 mistakes:[['Puck nach vorne in den Slot abprallen lassen','Der Gegner schießt direkt nach.','Festhalten oder in die Ecke lenken.'],['Nach der Abwehr Puck aus den Augen','Man weiß nicht, wohin man muss.','Puck weiter verfolgen, dann Recovery.'],['Hektisch aufspringen','Man verliert die Stabilität.','Schnell, aber kontrolliert zurück in Position.']]},

/* 8 */
{id:'tl-08',short:'Sicht',title:'Sicht und Abfälschungen',sub:'Wer den Puck sieht, hält ihn',q:'Lektion: Sicht und Abfälschungen',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Puck sehen hat Vorrang',setup:TWZ({gD1:[245,110],D1:[150,290],D2:[250,300],P:twBl([245,110])}),
  txt:'Der Puck wird vom Schläger des Schützen bis zum eigenen Körper ununterbrochen mit den Augen verfolgt. Der Kopf folgt dem Puck, die Nase zeigt zum Puck.',
  steps:[{t:700,m:{T:twOn(twBl([245,110]),16)},hl:LINE(twBl([245,110]),twOn(twBl([245,110]),16)),txt:'Puck im Blick'},{t:450,m:{P:twOn(twBl([245,110]),24)},lin:true,txt:'Bis zum Körper verfolgen'}]},
 {h:'Gegner vor dem Tor (Screen)',setup:TWZ({gD1:[245,110],gF1:[203,305],D2:[250,300],D1:[150,290],P:twBl([245,110])}),
  txt:'Steht ein Gegner vor dem Torwart, sucht er eine Sichtlinie: zuerst über den Gegner hinweg, bei Schüssen von außen meist auf der kurzen Seite vorbei.\nNach DEB hat die Sichtlinie oberste Priorität.',
  merke:'Erst oben suchen, dann kurze Seite.',
  steps:[{t:800,m:{T:[214,334]},hl:LINE(twBl([245,110]),[214,334]),txt:'Vorbeischauen – Puck sehen'},{t:450,m:{P:[214,326]},lin:true,txt:'Gesehen und gehalten'}]},
 {h:'Abfälschung: neuer Ausgangspunkt',setup:TWZ({gD1:[300,105],gF1:[245,275],D2:[300,300],D1:[150,280],P:twBl([300,105])}),
  txt:'Hält ein Gegner vor dem Tor den Schläger rein, zählt der Punkt, an dem der Puck die Richtung ändert – also der Schläger, der ihn zuletzt berührt. Dorthin richtet der Torwart seinen Körper aus.',
  steps:[{t:500,m:{T:twOn(twBl([300,105]),16)}},{t:500,m:{P:'gF1'},lin:true,txt:'Abgefälscht'},{t:450,m:{T:twOn(twBl([245,275]),14)},txt:'Ausrichten auf den Abfälscher'}]},
 {h:'Körper hinter den Puck (Center Shift)',setup:TWZ({gF1:[260,240],D1:[160,280],D2:[300,300],P:twBl([260,240]),T:twOn(twBl([260,240]),16)}),
  txt:'Im richtigen Moment verlagert der Torwart seine Körpermitte zum Puck – mit einem kleinen Shuffle oder Butterfly-Slide. So ist mehr Körper hinter dem Puck, und ein Abpraller landet näher am Körper.',
  steps:[{t:400,m:{P:[216,322]},lin:true,txt:'Schuss'},{t:350,m:{T:[213,330]},txt:'Körpermitte zum Puck'}]}
 ],
 how:['Puck vom Schläger bis zum Körper verfolgen','Screen: erst oben, dann auf der kurzen Seite vorbeischauen','Abfälschung: zum Schläger ausrichten, der den Puck zuletzt berührt','Körpermitte zum Puck verlagern'],
 cues:['Puck bis zum Körper','Erst oben, dann kurz','Wer den Puck sieht, hält ihn'],
 mistakes:[['Auf den Gegner vor dem Tor schauen','Den Puck sieht man so nicht.','Aktiv eine Sichtlinie suchen.'],['Weiter zum Schützen ausgerichtet','Der abgefälschte Puck kommt aus einer anderen Richtung.','Zum Abfälscher ausrichten.'],['Kopf dreht vor dem Puck weg','Der Puck geht in die Lücke.','Kopf bleibt beim Puck, bis er am Körper ist.']]},

/* 9 */
{id:'tl-09',short:'Spiel lesen',title:'Spiel lesen',sub:'Erkennen, was der Gegner vorhat',q:'Lektion: Spiel lesen',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Kommt der Schuss?',setup:TWZ({gF1:[240,240],D1:[175,270],D2:[290,280],P:[225,265],T:twOn([225,265],16)}),
  txt:'Typische Zeichen: Das Puckmischen hört auf, die Beine stoppen, der Kopf geht hoch, der Schläger geht nach hinten, das Schlägerblatt zeigt zum Tor, der Oberkörper geht nach vorne.\nWer das früh liest, ist rechtzeitig bereit.',
  steps:[{t:350,m:{P:[255,265]}},{t:350,m:{P:[225,268]}},{t:350,m:{P:[255,262]}},{t:500,m:{P:twBl([240,240])},txt:'Kopf hoch, ausholen – Schuss kommt'},{t:400,m:{P:[205,325]},lin:true,txt:'Bereit – gehalten'}]},
 {h:'Hinter dem Tor: eng oder Bande?',setup:TWZ({gF1:[268,375],D1:[160,270],D2:[250,280],gF2:[300,260],P:[244,391],T:[209,341]}),
  txt:'DEB-Faustregel: Fährt ein Gegner hinter dem Tor eng um den Torrahmen, will er meist selbst abschließen (Bauerntrick) – Pfosten zu.\nFährt er weiter weg an der Bande entlang, sucht er eher einen Pass vor das Tor.',
  steps:[{t:1200,m:{gF1:[160,368],P:'gF1',T:[191,342]},txt:'Eng ums Tor = Abschluss'},{t:400,m:{},hl:[186,350,11],txt:'Pfosten zu!'}]},
 {h:'Wo ist die größte Gefahr?',setup:TWZ({gF1:[300,250],gF2:[145,320],gF3:[200,230],D1:[260,280],D2:[200,300],P:twBl([300,250]),T:twOn(twBl([300,250]),16)}),
  txt:'Der Torwart behält das ganze Eis im Blick – auch aus dem Augenwinkel. Welcher Gegner ist frei? Wer kann direkt schießen? Wer steht nah am Tor?\nDie gefährlichste Anspielstation erkennt er früh und sagt sie seinen Mitspielern.',
  merke:'Was du siehst, sagst du deinen Leuten.',
  steps:[{t:700,m:{},hl:[145,320,22],txt:'Frei am langen Pfosten!'},{t:800,m:{D2:[160,315]},txt:'„Backdoor!“ – D2 übernimmt'}]},
 {h:'Puck um die Bande (Rim)',setup:TWZ({gD1:[60,95],D1:[140,190],gF1:[95,150],gF2:[260,180],P:twBl([60,95])}),
  txt:'Wird der Puck um die Bande gespielt, erkennt der Torwart das früh: Wie viel Druck machen die Gegner? Kann er den Puck stoppen und für seinen Verteidiger liegen lassen?\nDann schnell und eindeutig handeln.',
  steps:[{t:500,m:{P:RIMPTS[0]},lin:true,txt:'Rim!'},...boardPath(RIMPTS.slice(1,6).concat([[160,401]]),0.55),{t:500,m:{T:[178,388],P:'T',D1:[120,380],gF1:[110,300]},txt:'Früh erkannt – gestoppt'}]}
 ],
 how:['Schussanzeichen lesen: Kopf hoch, Ausholen, Beine stoppen','Hinter dem Tor: eng = Abschluss, Bande = Pass','Gefährlichsten Gegner erkennen und den Mitspielern sagen','Rims früh erkennen und eindeutig handeln'],
 cues:['Lesen, nicht raten','Eng ums Tor: Pfosten zu','Sag es laut'],
 mistakes:[['Nur auf den Puck, nie aufs Spiel','Der freie Gegner kommt überraschend.','Mit dem Augenwinkel das ganze Eis checken.'],['Still sein','Die Mitspieler sehen nicht, was hinter ihnen passiert.','Kurz und laut ansagen: „Backdoor!“, „Frei!“.'],['Zu spät reagieren','Der Schütze hat schon abgezogen.','Schussanzeichen früh lesen.']]},

/* 10 */
{id:'tl-10',short:'Mitspielen',title:'Mitspielen',sub:'Pucks stoppen, passen, kommunizieren',q:'Lektion: Mitspielen',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Wo darf der Torwart spielen?',setup:TWZ({D1:[300,100],F1:[120,105],gF1:[340,215],P:[200,395]}),
  txt:'Hinter der Torlinie darf der Torwart den Puck nur im Trapez spielen – entscheidend ist, wo der Puck liegt. Sonst gibt es 2 Minuten.\nVor der Torlinie darf er in der eigenen Hälfte überall mitspielen, aber nie hinter der Mittellinie.',
  steps:[{t:900,m:{},hl:TRAP,txt:'Hinter dem Tor: nur im Trapez'}]},
 {h:'Eingeschossene Pucks stoppen',setup:TWZ({gD1:[60,95],D1:[140,190],gF1:[95,150],gF2:[260,180],P:twBl([60,95])}),
  txt:'Schnell raus aus dem Tor, Puck mit Vorhand oder Rückhand unter Kontrolle bringen. An der Bande den Schläger geschlossen halten, damit nichts durchrutscht.\nDanach den Puck für den Verteidiger liegen lassen oder direkt passen.',
  steps:[{t:500,m:{P:RIMPTS[0]},lin:true,txt:'Puck kommt'},...boardPath(RIMPTS.slice(1,6).concat([[160,401]]),0.55),{t:500,m:{T:[178,388],P:'T'},txt:'Raus und stoppen'}]},
 {h:'Schulterblick und Bescheid sagen',setup:TWZ({D1:[140,190],gF1:[95,150],gF2:[260,180],T:[178,388],P:[187,379]}),
  txt:'Bevor der Torwart den Puck weiterspielt: Schulterblick. Wo sind die Gegner, wo sind die eigenen Leute?\nUnd er sagt es laut, zum Beispiel „Zeit!“, wenn der Verteidiger Platz hat, oder „Druck!“, wenn ein Gegner kommt.',
  merke:'Erst schauen, dann spielen.',
  steps:[{t:900,m:{D1:[120,380],gF1:[110,300]},txt:'Schulterblick – „Druck!“'},{t:600,m:{P:'D1'},txt:'Pass auf den Schläger'},{t:700,m:{T:[200,338]},txt:'Zurück ins Tor'}]},
 {h:'Passen – sicher vor schön',setup:TWZ({D1:[120,380],D2:[290,300],gF1:[150,300],T:[200,382],P:[208,374]}),
  txt:'Pässe gehen präzise auf das Schlägerblatt des Mitspielers. Der Torwartschläger steht steiler – deshalb wird der Puck näher am Körper geführt.\nUnter Druck lieber hoch über die Bande oder sicher aus dem Drittel als ein riskanter Pass vors eigene Tor.',
  steps:[{t:700,m:{},hl:{areas:[{d:'M186 350 L120 262 L120 222 L280 222 L280 262 L214 350 Z',c:'#e0393e',op:0.12,dash:'0',t:'Kein Pass vors eigene Tor',x:200,y:240,pill:true}]},txt:'Nicht durch die Mitte'},{t:600,m:{P:'D2'},hl:null,txt:'Sicher auf den freien Verteidiger'}]}
 ],
 how:['Hinter der Torlinie nur im Trapez spielen','Eingeschossene Pucks: schnell raus, Schläger geschlossen','Vor dem Pass: Schulterblick','Laut ansagen: „Zeit!“ oder „Druck!“','Sicher vor schön – kein Pass vors eigene Tor'],
 cues:['Erst schauen, dann spielen','Sag es laut','Sicher vor schön'],
 mistakes:[['Puck außerhalb des Trapezes gespielt','2 Minuten wegen Spielverzögerung.','Hinter der Torlinie nur im Trapez.'],['Ohne Schulterblick gepasst','Der Gegner fängt den Pass ab.','Erst schauen, dann spielen.'],['Pass quer vors eigene Tor','Ein abgefangener Pass ist sofort eine Torchance.','Zur Seite spielen oder hoch über die Bande.']]}
];
