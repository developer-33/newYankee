import Yankeeplayers from "./Yankee.mjs";

const JuanSoto = new Yankeeplayers(
    "Juan Soto",
    22,
    "3B",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    25,
    0,
    0,
    .250,
    .150,
    .211,
    .150

)
const ArronJudge = new Yankeeplayers(
    "Arron Judge",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)
const OswaldoCabrera = new Yankeeplayers(
    "Oswaldo Cabrera",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const GincarloStanton = new Yankeeplayers(
    "Gincarlo Stanton",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const AnthonyRizzo = new Yankeeplayers(
    "Anthony Rizzo",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const AlexVerdugo = new Yankeeplayers(
    "Alex Verdugo",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const AnothonyVolpe = new Yankeeplayers(
    "Anothony Volpe",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const JonBerti = new Yankeeplayers(
    "Jon Berti",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const TrentGrisham = new Yankeeplayers(
    "Trent Grisham",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const JahmaiJones = new Yankeeplayers(
    "Jahmai Jones",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const GleyberTorres = new Yankeeplayers(
    "Gleyber Torres",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const JoseTrevino = new Yankeeplayers(
    "Jose Trevino",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)

const AustinWells = new Yankeeplayers(
    "Austin Wells",
    99,
    "CF",
    7,
    26,
    4,
    9,
    1,
    0,
    2,
    1,
    32,
    47,
    0,
    0,
    .250,
    .150,
    .211,
    .150
)





const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const container6 = document.querySelector(".container6");
const container7 = document.querySelector(".container7");
const container8 = document.querySelector(".container8");
const container9 = document.querySelector(".container9");
const container10 = document.querySelector(".container10");
const container11 = document.querySelector(".container11");
const container12 = document.querySelector(".container12");
const container13 = document.querySelector(".container13");


const juanSotoHTML = JuanSoto.toHTML();
const arronJudgeHTML = ArronJudge.toHTML();
const oswaldoCabreraHTML = OswaldoCabrera.toHTML();
const gincarloStantonHTML = GincarloStanton.toHTML();
const anthonyRizzoHTML = AnthonyRizzo.toHTML();
const alexVerdugoHTML = AlexVerdugo.toHTML();
const anothonyVolpeHTML = AnothonyVolpe.toHTML();
const jonBertiHTML = JonBerti.toHTML();
const trentGrishamHTML = TrentGrisham.toHTML();
const jahmaiJonesHTML = JahmaiJones.toHTML();
const gleyberTorresHTML = GleyberTorres.toHTML();
const joseTrevinoHTML = JoseTrevino.toHTML();
const austinWellsHTML = AustinWells.toHTML();

container.innerHTML += juanSotoHTML;
container2.innerHTML += arronJudgeHTML;
container3.innerHTML += oswaldoCabreraHTML;
container4.innerHTML += gincarloStantonHTML;
container5.innerHTML += anthonyRizzoHTML;
container6.innerHTML += alexVerdugoHTML;
container7.innerHTML += anothonyVolpeHTML;
container8.innerHTML += jonBertiHTML;
container9.innerHTML += trentGrishamHTML;
container10.innerHTML += jahmaiJonesHTML;
container11.innerHTML += gleyberTorresHTML;
container12.innerHTML += joseTrevinoHTML;
container13.innerHTML += austinWellsHTML;