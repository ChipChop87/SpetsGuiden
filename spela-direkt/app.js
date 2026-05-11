const stages = [
  {
    id: "8-10",
    age: "8-10 veckor",
    title: "Flytta hem och landa tryggt",
    calm: "Mycket pip, bitande, sovryck och olyckor inne är vanligt nu.",
    development: [
      "Valpen knyter an till nya hemmet och behöver sömn, rutiner och lugn.",
      "Blåsan är liten. Gå ut efter sömn, lek, mat och när valpen börjar nosa runt.",
      "Munnen används för att undersöka världen. Bitande betyder ofta trötthet, lek eller kliande mun."
    ],
    owner: [
      "Skapa fasta platser för vila, mat och rastning.",
      "Belöna kontakt, namnrespons och att valpen självmant kommer till dig.",
      "Träna 1-3 minuter åt gången. Sluta innan valpen blir övertrött."
    ],
    challenges: [
      "Nattoro: sov nära i början och flytta gradvis om du vill.",
      "Valpbitande: erbjud tuggleksak, pausa leken lugnt och ge mer vila.",
      "Skall på ljud: tacka lugnt, visa att du har koll och hjälp valpen att varva ner."
    ],
    children: [
      "Barn ska sitta på golvet och låta valpen komma till dem.",
      "Låt inte barn bära, jaga eller väcka valpen.",
      "Ha vuxen närvarande. Valpen behöver en barnfri viloplats."
    ],
    care: [
      "Börja med kort kloklippningsträning och mjuk borstning.",
      "Hantera tassar, öron och mun med godis så veterinärbesök blir enklare.",
      "Finsk spets har dubbelpäls; vänj valpen vid borste tidigt."
    ],
    help: [
      "Kontakta veterinär vid upprepade kräkningar, diarré, slöhet, blod, kraftig hosta eller misstänkt förgiftning.",
      "Ring veterinär direkt om valpen sväljer vassa föremål, batterier, snören, större leksaksdelar eller okänd medicin."
    ]
  },
  {
    id: "11-12",
    age: "11-12 veckor",
    title: "Nyfiken men lättstressad",
    calm: "Det är normalt att valpen växlar mellan mod, bus och plötslig osäkerhet.",
    development: [
      "Socialiseringsfönstret är viktigt. Valpen behöver positiva möten med ljud, miljöer, människor och lugna hundar.",
      "Tandkliande och tuggbehov ökar ofta.",
      "Finsk spets kan redan börja reagera snabbt på fåglar, rörelse och ljud."
    ],
    owner: [
      "Gör korta miljöbesök: titta, ät godis och gå hem innan valpen blir överväldigad.",
      "Starta ensamhetsträning i sekunder, inte minuter. Gå ut och kom tillbaka innan oro byggs upp.",
      "Träna inkallning som lek: säg namnet, backa, belöna stort när valpen kommer."
    ],
    challenges: [
      "Äter på saker: valpsäkra hemmet, byt mot tillåtet tugg och beröm bytet.",
      "Skäller på ljud: undvik att skälla tillbaka. Sänk avståndet till störningen och belöna tyst kontakt.",
      "Övertrötthet: många 'problem' försvinner efter sömn."
    ],
    children: [
      "Lär barn att leka med två leksaker: valpen biter i leksaken, inte händer.",
      "Inga spring- och jagalekar inomhus om valpen går upp i varv.",
      "Barn får gärna ge godis för lugnt sittande och kontakt."
    ],
    care: [
      "Fortsätt korta pass med borste, sele, koppel, kloklippning och tandkoll.",
      "Använd mjuka tugg som är anpassade för valpar.",
      "Motion ska vara kort och varierad, inte långa marscher."
    ],
    help: [
      "Sök råd om valpen får panik när den lämnas ensam trots mycket gradvis träning.",
      "Ring veterinär vid svullen buk, ihållande hulkningar, stark smärta eller om något fastnat i mun/svalg."
    ]
  },
  {
    id: "3-4",
    age: "3-4 månader",
    title: "Tänder, rutiner och mer personlighet",
    calm: "Tuggande, tappade tänder och mer självständighet hör ofta till perioden.",
    development: [
      "Mjölktänder börjar bytas. Det kan klia, blöda lite och göra valpen mer bitig.",
      "Valpen orkar mer men behöver fortfarande mycket sömn.",
      "Rasens självständighet kan synas: valpen vill undersöka innan den lyssnar."
    ],
    owner: [
      "Ha lagliga tugg nära till hands och plocka bort skor, sladdar, smådelar och barnleksaker.",
      "Träna byteslek: 'tack', byt mot godis, ge ibland tillbaka saken.",
      "Bygg inkallning i långlina utomhus. Belöna varje spontan kontakt."
    ],
    challenges: [
      "Selektiv hörsel: gör övningar lättare och mer belönande.",
      "Jaktintresse: låt inte valpen öva på att rusa efter fåglar.",
      "Skällande vid fönster: begränsa utsikt ibland och belöna tystnad/kontakt."
    ],
    children: [
      "Barns leksaker ska inte ligga på golvet. Valpen kan inte förstå skillnaden.",
      "Lär barn att stå stilla som ett träd om valpen hoppar eller biter.",
      "Ge valpen paus innan kalas, höga ljud eller livlig lek."
    ],
    care: [
      "Borsta oftare vid pälsbyte och gör pälsvård till en lugn rutin.",
      "Titta i munnen regelbundet så tandbytet följs.",
      "Fortsätt kloklippning ofta hellre än mycket åt gången."
    ],
    help: [
      "Kontakta veterinär om mjölktänder sitter kvar när nya tänder kommer fel, eller vid kraftig smärta.",
      "Sök hjälp av instruktör om bitandet eskalerar med låsning, morr och svår avledning."
    ]
  },
  {
    id: "5-6",
    age: "5-6 månader",
    title: "Unghund börjar vakna",
    calm: "Många valpar blir modigare, snabbare och mer lättdistraherade nu.",
    development: [
      "Kroppen växer och koordinationen kan vara ojämn.",
      "Könsmognad kan börja märkas hos vissa individer.",
      "Finsk spets kan bli tydligare i larm, jaktintresse och självständiga beslut."
    ],
    owner: [
      "Prioritera vardagslydnad: komma, följa med i koppel, släppa, vänta och vila.",
      "Ge nosarbete, sök godis och problemlösning i stället för bara fysisk aktivitet.",
      "Träna lugn på filt när det händer saker runtomkring."
    ],
    challenges: [
      "Drar i koppel: stanna, byt riktning och belöna nära position.",
      "Skäller på människor/hundar: öka avståndet och belöna att hunden tittar på dig.",
      "Börjar vakta hemmet: tacka, kalla bort och ge en annan uppgift."
    ],
    children: [
      "Barn ska inte korrigera hunden. De kan belöna enkla saker under vuxens ledning.",
      "Undvik att hunden får vakta barnens mat, leksaker eller sovplatser.",
      "Håll promenader med barn lugna; inget koppelbus."
    ],
    care: [
      "Fortsätt med tandvård, kloklippning och pälsvård som fasta veckorutiner.",
      "Väg hunden ibland och anpassa mat efter hull, inte bara efter tabell.",
      "Undvik hård hoppträning och långa monotona pass."
    ],
    help: [
      "Ta hjälp tidigt vid rädsla, resursförsvar, stark separationsoro eller aggressiva utfall.",
      "Veterinär behövs vid hälta, smärta, återkommande magproblem eller misstänkt skada."
    ]
  },
  {
    id: "7-9",
    age: "7-9 månader",
    title: "Tonår: känslor före förnuft",
    calm: "Bakslag är vanligt. Hunden har inte glömt allt, den behöver bara enklare uppgifter ett tag.",
    development: [
      "Unghunden kan bli mer känslig för ljud, människor eller miljöer.",
      "Jaktlust och självständighet kan kännas starkare.",
      "Skällighet kan öka när hunden provar sin roll i hem och omgivning."
    ],
    owner: [
      "Sänk kraven i svåra miljöer och förstärk grunderna.",
      "Använd långlina där det finns vilt, fåglar, trafik eller dålig sikt.",
      "Planera återhämtning efter aktiva dagar."
    ],
    challenges: [
      "Skäller mer: kartlägg trigger, minska fri fönsterbevakning och träna 'tack, kom'.",
      "Sticker efter doft eller fågel: förebygg med lina och bättre belöningar nära dig.",
      "Testar gränser: var konsekvent utan hårda tag."
    ],
    children: [
      "Tonårshunden kan vara klumpig. Låt inte små barn leka vilt på golvet med hunden.",
      "Barn ska lämna hunden ifred när den äter, sover eller har tugg.",
      "Skapa tydliga familjeregler som alla vuxna följer."
    ],
    care: [
      "Fällperioder kan kräva tätare borstning.",
      "Kolla klor ofta; aktiva unghundar kan ändå behöva klippas.",
      "Fortsätt träna hantering även om hunden protesterar mer."
    ],
    help: [
      "Sök instruktör om skällande, jakt eller rädsla begränsar vardagen.",
      "Kontakta veterinär vid plötslig beteendeförändring, smärta eller ovanlig trötthet."
    ]
  },
  {
    id: "10-12",
    age: "10-12 månader",
    title: "Nästan vuxen, men inte färdig",
    calm: "Hunden kan se vuxen ut men behöver fortfarande stöd, vila och repetition.",
    development: [
      "Impulskontroll utvecklas långsamt. Det är normalt att hunden klarar saker hemma men inte ute.",
      "Rasens arbetslust behöver meningsfulla uppgifter.",
      "Vissa hundar får en ny osäkerhetsperiod."
    ],
    owner: [
      "Gör träningen mer vardagsnära: gäster, dörr, bil, skog, stad och hundmöten.",
      "Bygg hållbar motion gradvis med varierad terräng.",
      "Fortsätt belöna tyst kontakt och avbruten jaktintention."
    ],
    challenges: [
      "Larmskall vid dörr: träna rutin med plats, godissök eller filt.",
      "Ökar revirmarkering: avbryt lugnt och belöna promenadkontakt.",
      "Trött men speedad: hjälp hunden att varva ner, inte mer aktivitet direkt."
    ],
    children: [
      "Låt barn delta i enkla sökövningar, men vuxen ansvarar för reglerna.",
      "Undvik att barn tar saker ur hundens mun.",
      "Lär barn läsa stopptecken: vänder bort, slickar sig om munnen, gäspar, går undan."
    ],
    care: [
      "Håll päls, klor och tänder som rutin, inte nödlösning.",
      "Se över försäkring, vaccinationer och förebyggande tandvård.",
      "Anpassa foder om hull eller aktivitetsnivå ändras."
    ],
    help: [
      "Ta hjälp om hunden inte kan återhämta sig, sover dåligt eller är konstant på vakt.",
      "Veterinär vid plötslig aptitlöshet, drickande, viktnedgång eller smärta."
    ]
  },
  {
    id: "1-2",
    age: "1-2 år",
    title: "Ung vuxen med stark identitet",
    calm: "Finsk spets mognar ofta mentalt senare än den ser ut att göra.",
    development: [
      "Personligheten blir tydligare: jakt, skall, integritet och egna initiativ.",
      "Hunden klarar mer aktivitet men behöver fortfarande styrd vila.",
      "Relationen stärks genom gemensamt arbete, inte kontroll."
    ],
    owner: [
      "Fortsätt med inkallning, passivitet och följsamhet som livslång träning.",
      "Ge rasnära aktivering: nosarbete, spår, skogspromenader och kontrollerad jaktlig träning om relevant.",
      "Ha tydliga rutiner för gäster, dörr och fönster för att minska onödigt skall."
    ],
    challenges: [
      "Självständighet: belöna egna bra val, inte bara kommandon.",
      "Skall som vana: förebygg situationer där hunden övar länge på att larma.",
      "Jakt: släpp inte lös där du inte kan hantera konsekvenserna."
    ],
    children: [
      "Barn kan ge mat i skål, gömma godis och träna enkla signaler under uppsikt.",
      "Lär respekt för hundens viloplats hela livet.",
      "Var extra noga när barn har kompisar hemma; ljud och spring kan trigga."
    ],
    care: [
      "Borstning, kloklippning, tandvård och hullkontroll är basen.",
      "Öka fysisk aktivitet gradvis och variera underlag.",
      "Planera mental vila efter intensiva dagar."
    ],
    help: [
      "Sök hjälp om vardagen präglas av konflikt, rädsla, jaktproblem eller kraftigt skall.",
      "Veterinär vid återkommande öron-, hud-, mag- eller rörelseproblem."
    ]
  },
  {
    id: "adult",
    age: "Vuxen",
    title: "Trygg vardag och livslång träning",
    calm: "En vuxen finsk spets behöver fortfarande vägledning, arbete och återhämtning.",
    development: [
      "När hunden mognat blir rutiner, relation och miljö avgörande för hur lugn vardagen blir.",
      "Skall och jaktlust finns ofta kvar men kan styras med förebyggande rutiner.",
      "Hunden mår bäst av att få använda nos, kropp och huvud regelbundet."
    ],
    owner: [
      "Behåll vardagsträning: inkallning, koppel, tyst kontakt, hantering och vila.",
      "Ge meningsfull aktivering flera gånger i veckan.",
      "Följ hull, tänder, klor, hud och rörelsemönster."
    ],
    challenges: [
      "För lite stimulans kan ge mer skall, rastlöshet och eget projektletande.",
      "För mycket stress kan ge samma symtom. Balans är viktigare än maximal aktivering.",
      "Vuxna vanor tar tid att ändra. Jobba smått och konsekvent."
    ],
    children: [
      "Fortsätt ha regler även när hunden är snäll: ingen störning vid mat, sömn eller tugg.",
      "Lär barn att kalla på en vuxen om hunden tar något farligt.",
      "Låt hunden få gå undan när hemmet är livligt."
    ],
    care: [
      "Dubbelpälsen ska borstas regelbundet, extra vid fällning.",
      "Tandvård är viktigt hela livet.",
      "Kontakta veterinär vid nya knölar, smärta, stelhet, hosta eller beteendeförändring."
    ],
    help: [
      "Sök professionell hjälp vid aggressivitet, stark rädsla eller separationsproblem.",
      "Ring veterinär hellre en gång för mycket vid misstänkt förgiftning eller främmande föremål."
    ]
  }
];

const warnings = [
  {
    title: "Farligt att äta",
    critical: true,
    text: "Choklad, kakao, lök, vitlök, vindruvor/russin, xylitol, alkohol, läkemedel, nikotin, råttgift och vissa växter kan vara farligt. Ring veterinär om du misstänker att hunden fått i sig något giftigt."
  },
  {
    title: "Svalt föremål",
    critical: true,
    text: "Kontakta veterinär direkt vid batterier, magneter, snören, nålar, fiskekrokar, glas, vassa ben, större plast-/leksaksdelar eller om hunden kräks, hulkar, får ont eller blir slö."
  },
  {
    title: "Straffa inte bort skall",
    critical: false,
    text: "Finsk spets är avlad för att skälla. Hårda korrigeringar kan öka stress och osäkerhet. Träna i stället avstånd, kontakt, lugn rutin och vad hunden ska göra efter att den larmat."
  },
  {
    title: "Tvinga inte barnkontakt",
    critical: false,
    text: "Barn och hund ska alltid övervakas. Låt hunden gå undan. Barn ska inte klättra på, väcka, jaga, krama hårt eller ta saker ur munnen på hunden."
  },
  {
    title: "Fri lös hund för tidigt",
    critical: false,
    text: "Jaktlust kan vakna snabbt. Använd långlina tills inkallning fungerar även vid fåglar, dofter och rörelse."
  },
  {
    title: "Övertrött valp",
    critical: false,
    text: "Mer bitande, skällande och rus kan betyda att valpen behöver sova. Lägg in vila innan du ökar aktivitet eller krav."
  }
];

const ageList = document.querySelector("#ageList");
const stageCard = document.querySelector("#stageCard");
const warningGrid = document.querySelector("#warningGrid");
const tabs = document.querySelectorAll(".tab");
const screens = {
  timeline: document.querySelector("#timelineScreen"),
  breed: document.querySelector("#breedScreen"),
  warnings: document.querySelector("#warningsScreen")
};

function list(title, items) {
  return `<section class="stage-section"><h3>${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
}

function renderStage(stage) {
  stageCard.innerHTML = `
    <div class="stage-top">
      <div>
        <p class="eyebrow">${stage.age}</p>
        <h2>${stage.title}</h2>
      </div>
      <div class="calm-note">${stage.calm}</div>
    </div>
    <div class="section-grid">
      ${list("Vad händer nu?", stage.development)}
      ${list("Som ägare: gör så här", stage.owner)}
      <section class="stage-section challenge"><h3>Utmaningar att vara beredd på</h3><ul>${stage.challenges.map((item) => `<li>${item}</li>`).join("")}</ul></section>
      <section class="stage-section children"><h3>Om det finns barn hemma</h3><ul>${stage.children.map((item) => `<li>${item}</li>`).join("")}</ul></section>
      ${list("Skötsel just nu", stage.care)}
      ${list("När du ska söka hjälp", stage.help)}
    </div>
  `;
}

function renderAges() {
  ageList.innerHTML = "";
  stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.className = `age-button${index === 0 ? " active" : ""}`;
    button.innerHTML = `<strong>${stage.age}</strong><span>${stage.title}</span>`;
    button.addEventListener("click", () => {
      document.querySelectorAll(".age-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderStage(stage);
    });
    ageList.appendChild(button);
  });
  renderStage(stages[0]);
}

function renderWarnings() {
  warningGrid.innerHTML = warnings.map((warning) => `
    <article class="warning-card${warning.critical ? " critical" : ""}">
      <h3>${warning.title}</h3>
      <p>${warning.text}</p>
    </article>
  `).join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    Object.values(screens).forEach((screen) => screen.classList.add("hidden"));
    screens[tab.dataset.tab].classList.remove("hidden");
  });
});

renderAges();
renderWarnings();
