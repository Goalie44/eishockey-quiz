/* ---------- Torwart-Wissen: Lektionen (Inhalt nach DEB-Rahmentrainingskonzeption) ---------- */
const RING=(r,c,t,ty)=>({d:`M${200-r} 350A${r} ${r} 0 0 1 ${200+r} 350Z`,c,t,x:200,y:ty});
const DIST3={areas:[RING(250,'#2f6fd6','weit weg: aufrecht, reagieren',112),RING(150,'#f08c00','mittel',212),RING(70,'#e0393e','nah: kompakt',300)]};
const LINE=(a,b,c)=>({areas:[{d:`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`,c:c||'#2f6fd6'}]});
const GOALC=[200,350];

const L1P=[230,120],L1B=twBl(L1P);
const TWLES=[
{id:'tl-01',title:'Grundstellung',sub:'Bereit sein, locker bleiben, je nach Abstand anpassen',q:'Lektion: Grundstellung',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Bereit, bevor der Schuss kommt',setup:TWZ({gD1:L1P,D1:[150,250],D2:[255,240],P:L1B}),
  txt:'Aus der Grundstellung startet jede Abwehr. Nach DEB:\nKnie gebeugt, Gewicht auf den Fußballen, Schlittschuhe leicht auf den Innenkanten. Oberkörper leicht nach vorne, Hände und Schläger vor dem Körper.\nJeder passt sie an seinen Körper an – die Grundsätze bleiben gleich.',
  steps:[{t:900,m:{T:twOn(L1B,18)},hl:[200,333,22],txt:'Grundstellung: bereit'}]},
 {h:'Locker statt verkrampft',setup:TWZ({gD1:L1P,gD2:[110,115],D1:[150,250],D2:[255,240],P:L1B,T:twOn(L1B,18)}),
  txt:'Angespannte Muskeln reagieren langsam, lockere schnell. Hände, Schultern und Nacken bleiben locker.\nIst der Puck weit weg oder in der anderen Zone: kurz durchatmen und lockern.',
  steps:[{t:700,m:{P:'gD2'},txt:'Puck weit weg – locker bleiben'},{t:700,m:{T:twOn(twBl([110,115]),18)}},{t:700,m:{P:twBl(L1P)}},{t:700,m:{T:twOn(L1B,18)}}]},
 {h:'Je näher der Puck, desto kompakter',setup:TWZ({gF1:[210,95],D1:[150,250],D2:[260,250],P:twBl([210,95])}),
  txt:'Ist der Puck weit weg, steht der Torwart aufrechter und hat Zeit zu reagieren. Kommt der Puck näher, wird er kompakter und tiefer – ganz nah vor dem Tor gilt: kein Loch, nichts geht durch.\nWichtig: Die Grundstellung nicht zu breit machen und nicht ohne Grund in den Butterfly gehen – sonst ist er zu früh unten und kommt schlecht zur Seite.',
  steps:[{t:600,m:{},hl:DIST3,txt:'Weit weg'},{t:1300,m:{gF1:[215,200],P:twBl([215,200]),T:twOn(twBl([215,200]),16)},txt:'Mittel'},{t:1300,m:{gF1:[225,275],P:twBl([225,275]),T:twOn(twBl([225,275]),12)},txt:'Nah: kompakt'}]},
 {h:'Früh in Position – dann ruhig',setup:TWZ({gF1:[110,262],gF2:[290,262],D1:[160,215],D2:[245,300],P:twBl([110,262]),T:twOn(twBl([110,262]),16)}),
  txt:'Wer früh seine Position findet, hat einen Zeitvorteil: Der Schütze muss sich nach dem Torwart richten, nicht umgekehrt.\nNach dem Pass also schnell rüber, sauber stoppen – und ruhig stehen, wenn der Schuss kommt. Wer sich beim Schuss noch bewegt, ist nicht bereit.',
  steps:[{t:550,m:{P:'gF2'},lin:true,txt:'Pass'},{t:450,m:{T:twOn(twBl([290,262]),16)},txt:'Rüber und stoppen'},{t:600,m:{},txt:'Ruhig – bereit für den Schuss'},{t:420,m:{P:[212,332]},lin:true,txt:'Gehalten'}]}
 ],
 how:['Knie gebeugt, Gewicht auf den Fußballen','Hände und Schläger vor dem Körper','Locker bleiben – vor allem Hände, Schultern, Nacken','Je näher der Puck, desto kompakter','Früh in Position, beim Schuss ruhig stehen'],
 mistakes:[['Gewicht auf den Fersen','Wer hinten steht, kommt nicht schnell weg. Gewicht nach vorne auf die Fußballen.'],['Zu breit stehen','Dann geht der Torwart zu früh runter und kommt schlecht zur Seite. Etwas mehr als schulterbreit reicht.'],['Verkrampft','Hände und Schultern locker lassen – lockere Muskeln sind schneller.'],['Beim Schuss noch in Bewegung','Früher in Position gehen und vor dem Schuss stoppen.']]},

{id:'tl-02',title:'Winkel',sub:'Mittig zum Puck – der wichtigste Grundsatz',q:'Lektion: Winkel',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Der Schusswinkel',setup:TWZ({gF1:[300,230],D1:[160,280],D2:[250,180],P:twBl([300,230])}),
  txt:'Vom Puck zu den beiden Pfosten entsteht ein Dreieck – das ist alles, wohin der Schütze treffen kann.\nDer Torwart stellt sich in dieses Dreieck, und zwar genau in die Mitte.',
  steps:[{t:900,m:{},hl:twTri(twBl([300,230]),350,'Schusswinkel'),txt:'Puck → Pfosten = Schusswinkel'},{t:900,m:{T:twOn(twBl([300,230]),16)},txt:'Torwart mittig ins Dreieck'}]},
 {h:'Nase und Bauchnabel zum Puck',setup:TWZ({gF1:[300,230],D1:[160,280],D2:[250,180],P:twBl([300,230])}),
  txt:'DEB-Faustregel: „Nase und Bauchnabel mittig zum Puck.“ Gedacht ist eine Linie vom Puck zur Tormitte – auf dieser Linie steht der Torwart.',
  steps:[{t:900,m:{T:twOn(twBl([300,230]),16)},hl:LINE(twBl([300,230]),GOALC),txt:'Linie Puck – Tormitte'}]},
 {h:'Zum Puck – nicht zum Spieler',setup:TWZ({gF1:[290,250],gF2:[150,230],D1:[180,290],D2:[255,200],P:twBl([150,230]),T:twOn(twBl([150,230]),16)}),
  txt:'Gefährlich wirkt oft der Spieler, der am nächsten am Tor ist. Schießen kann aber nur der mit dem Puck.\nDeshalb richtet sich der Torwart immer nach dem Puck aus – den anderen Spieler behält er im Augenwinkel.',
  steps:[{t:700,m:{},hl:twTri(twBl([150,230])),txt:'Puck links – Torwart links'},{t:600,m:{P:'gF1'},hl:null,txt:'Pass'},{t:600,m:{T:twOn([299,241],16)},hl:twTri([299,241]),txt:'Puck rechts – Torwart rechts'}]},
 {h:'Der Puck wandert – der Torwart wandert mit',setup:TWZ({gF1:[90,250],D1:[160,215],D2:[250,300],P:twBl([90,250]),T:twOn(twBl([90,250]),16)}),
  txt:'Bewegt sich der Puck, korrigiert der Torwart ständig mit – kleine Schritte, immer mittig zum Puck. So muss er beim Schuss nicht mehr suchen.',
  steps:[{t:1000,m:{gF1:[150,170],P:twBl([150,170]),T:twOn(twBl([150,170]),18)},lin:true,txt:'Mitgehen …'},{t:1000,m:{gF1:[250,165],P:twBl([250,165]),T:twOn(twBl([250,165]),18)},lin:true},{t:1000,m:{gF1:[315,245],P:twBl([315,245]),T:twOn(twBl([315,245]),16)},lin:true,txt:'… immer mittig zum Puck'}]}
 ],
 how:['Gedachte Linie vom Puck zur Tormitte – darauf steht der Torwart','Nase und Bauchnabel zeigen zum Puck','Nach dem Puck ausrichten, nicht nach dem Spieler','Bewegt sich der Puck: mit kleinen Schritten nachkorrigieren'],
 mistakes:[['Nach dem Spieler statt nach dem Puck','Schießen kann nur der Spieler mit dem Puck. Immer zum Puck ausrichten.'],['Zu weit zur kurzen oder langen Seite','Dann ist eine Seite offen. Linie Puck – Tormitte prüfen.'],['Nach dem Pass nicht nachkorrigiert','Jeder Pass heißt: neuer Winkel. Sofort mitgehen.']]},

{id:'tl-03',title:'Tiefe',sub:'Wie weit raus? Je nach Angriff',q:'Lektion: Tiefe',chap:'Lektion',o:[],rink:'zone',
 pages:[
 {h:'Wie weit raus?',setup:TWZ({gF1:[200,200],D1:[140,260],D2:[260,260],P:twBl([200,200])}),
  txt:'Neben dem Winkel entscheidet die Tiefe: der Abstand des Torwarts zur Torlinie. Der DEB unterscheidet konservativ (näher an der Torlinie), mittel und aggressiv (weiter draußen).\nWeiter draußen sieht der Schütze weniger Tor – aber der Weg zur Seite wird länger. Auch die Körpergröße spielt mit.',
  steps:[{t:800,m:{T:[200,340]},hl:[200,340,14],txt:'Konservativ'},{t:800,m:{T:[200,326]},hl:[200,326,14],txt:'Mittel'},{t:800,m:{T:[200,306]},hl:[200,306,14],txt:'Aggressiv'}]},
 {h:'1 gegen 0 und 1 gegen 1: aggressiver',rink:'big',label:UT,setup:TWB({gF1:[200,150],D1:[190,40],P:[200,163]}),
  txt:'Kommt ein Gegner allein (oder gegen einen Verteidiger), spielt der Torwart aggressiver: Faustregel nach DEB – außerhalb des blauen Torraums. So wird der Winkel klein.\nKommt der Schütze näher, gleitet der Torwart kontrolliert zurück, damit er nicht einfach umkurvt wird.',
  steps:[{t:1300,m:{gF1:[200,290],D1:[195,170],P:[200,303],T:[200,428]},lin:true,hl:{areas:[{d:'M176 470V457A24 15 0 0 1 224 457V470Z',c:'#2f6fd6',t:'Torraum',x:200,y:494}]},txt:'Raus aus dem Torraum'},{t:1100,m:{gF1:[200,350],P:[200,363],T:[200,440]},lin:true,txt:'Mit dem Schützen zurückgleiten'}]},
 {h:'2 gegen 1 und 2 gegen 2: passiver',rink:'big',label:UT,setup:TWB({gF1:[120,170],gF2:[290,180],D1:[205,250],P:[128,181]}),
  txt:'Sind es zwei Angreifer, spielt der Torwart passiver – eher im Torraum. Kommt der Querpass, ist der Weg zum anderen Pfosten kurz.\nDer Verteidiger nimmt den Pass weg, der Torwart nimmt den Schützen.',
  steps:[{t:1300,m:{gF1:[125,300],gF2:[285,315],D1:[205,370],P:[132,312],T:twOn([132,312],13,470)},lin:true,txt:'Im Torraum bleiben'},{t:550,m:{P:'gF2'},txt:'Querpass'},{t:450,m:{T:twOn(twBl([285,315],470),13,470)},txt:'Kurzer Weg – rechtzeitig da'}]},
 {h:'Ist der lange Pfosten besetzt?',setup:TWZ({gF1:[305,265],gF2:[150,322],D1:[250,215],D2:[170,250],P:twBl([305,265])}),
  txt:'Steht ein Gegner am langen Pfosten (Backdoor), spielt der Torwart tiefer – sonst kommt er nach einem Querpass nicht mehr rüber.\nIst der lange Pfosten frei, kann er weiter raus.',
  steps:[{t:900,m:{T:twOn(twBl([305,265]),12)},hl:[150,322,22],txt:'Backdoor besetzt: tiefer'},{t:1100,m:{gF2:[120,200]},hl:null},{t:800,m:{T:twOn(twBl([305,265]),30)},txt:'Backdoor frei: weiter raus'}]}
 ],
 how:['Tiefe = Abstand zur Torlinie: konservativ, mittel, aggressiv','1 gegen 0 / 1 gegen 1: aggressiver, außerhalb des Torraums','2 gegen 1 / 2 gegen 2: passiver, eher im Torraum','Langer Pfosten besetzt: tiefer – frei: weiter raus'],
 mistakes:[['Bei 2 gegen 1 zu weit draußen','Nach dem Querpass ist der Weg zu weit. Bei zwei Angreifern im Torraum bleiben.'],['Bei 1 gegen 0 zu weit raus und stehen geblieben','Der Schütze kurvt einfach um den Torwart. Mit dem Schützen zurückgleiten.'],['Backdoor nicht gesehen','Vor dem Schuss kurz checken: Steht jemand am langen Pfosten?']]},

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
  txt:'Der Kopf ist zuerst beim Puck – der Körper folgt. Am Ziel sauber stoppen, nicht übers Ziel hinausrutschen.\nDie Laufmuster des DEB üben genau diese Bewegungen, damit sie im Spiel automatisch klappen.',
  steps:[{t:550,m:{P:'gF2'},lin:true,txt:'Kopf zuerst zum Puck'},{t:450,m:{T:twOn(B7b,16)},txt:'Sauber stoppen – mittig zum Puck'}]}
 ],
 how:['Kurzer Weg: Shuffle','Weiter Weg: T-Push','Pass nah am Tor: Butterfly-Slide','Kopf zuerst zum Puck, dann der Körper','Am Ziel sauber stoppen'],
 mistakes:[['Mit Shuffles einem weiten Pass hinterher','Zu langsam – bei weiten Wegen den T-Push nehmen.'],['Übers Ziel hinaus','Nach dem T-Push auf der Kufe stoppen, mittig zum Puck.'],['Puck aus den Augen verloren','Zuerst dreht der Kopf zum Puck, dann bewegt sich der Körper.']]}
];
