/* ==========================================
ALLA 21 FRÅGOR
========================================== */

const questions = [

```
{
    question: "Hur tror du att du uppfattas av andra?",
    answers: {
        A: "Pålitlig",
        B: "Sofistikerad",
        C: "Lekfull",
        D: "Expressiv"
    }
},

{
    question: "Vad gör du när du kommer in i ett rum fullt av människor du inte känner?",
    answers: {
        A: "Står klistrad vid väggen",
        B: "Tar initiativ, börjar prata, tar över rummet, lämnar ingen luft kvar åt någon.",
        C: "Hittar någon intressant och går fram till den",
        D: "Ringer sin kompis och frågar vad de gör."
    }
},

{
    question: "Hur reagerar du på regler?",
    answers: {
        A: "Regler finns av en anledning",
        B: "Jag följer dem om de är vettiga",
        C: "Jag tycker om att tänja på dem",
        D: "Jag föredrar att skapa mina egna"
    }
},

{
    question: "Vilket ord beskriver dig bäst?",
    answers: {
        A: "Bold",
        B: "Kernad",
        C: "Uttrycksfull",
        D: "Klassisk"
    }
},

{
    question: "Hur ser ditt skrivbord ut?",
    answers: {
        A: "Organiserat och strukturerat",
        B: "Rent och minimalistiskt",
        C: "Kreativt kaos",
        D: "Snyggt och genomtänkt"
    }
},

{
    question: "Vad är viktigast när du väljer kläder?",
    answers: {
        A: "Funktion",
        B: "Passform",
        C: "Personlighet",
        D: "Stil"
    }
},

{
    question: "Hur hanterar du förändringar?",
    answers: {
        A: "Jag föredrar det välbekanta",
        B: "Jag anpassar mig snabbt",
        C: "Jag älskar förändring",
        D: "Jag accepterar allt det här livet har att visa"
    }
},

{
    question: "Vad gör du när du inte vet vad du ska välja?",
    answers: {
        A: "Tar det säkra valet",
        B: "Frågar någon annan",
        C: "Går på magkänslan",
        D: "Jämför alla alternativ"
    }
},

{
    question: "Vad stör dig mest?",
    answers: {
        A: "Dålig läsbarhet",
        B: "Onödiga detaljer",
        C: "Saknad av personlighet",
        D: "Ogenomtänkt kerning"
    }
},

{
    question: "Om du fick välja en superkraft, vilken skulle du ta?",
    answers: {
        A: "Flyga",
        B: "Kontrollera tid och rum",
        C: "Bemästra Glyphs",
        D: "Spruta eld ifrån händerna"
    }
},

{
    question: "Vad är viktigast för dig?",
    answers: {
        A: "Trygghet",
        B: "Frihet",
        C: "Kreativitet",
        D: "Kvalitet"
    }
},

{
    question: "Hur fattar du beslut?",
    answers: {
        A: "Genom noggrann analys av mina erfarenheter och andra beprövade metoder",
        B: "Känsla",
        C: "Snabbt och fort",
        D: "Jag gör inte sånt"
    }
},

{
    question: "Vilken typ av komplimang uppskattar du mest?",
    answers: {
        A: "Du är någon man kan lita på.",
        B: "Du är så rolig.",
        C: "Du är så bra på kerning.",
        D: "Du är så smart."
    }
},

{
    question: "Om du var en musikgenre skulle du vara?",
    answers: {
        A: "Rock n roll",
        B: "Blues",
        C: "Experimentell och oförutsägbar som du endast hittar på Soundcloud",
        D: "Disco funk"
    }
},

{
    question: "Vad gör du när ett projekt börjar gå åt fel håll?",
    answers: {
        A: "Går tillbaka till planen",
        B: "Tar kontroll",
        C: "Testar en helt ny idé",
        D: "Tar pension"
    }
},

{
    question: "Hur nära är du till bokstäver?",
    answers: {
        A: "Nära nog på och på tryggt avstånd",
        B: "Jag älskar dem",
        C: "Jag gillar vissa av dem",
        D: "51ffr0r är 6ä11tr3"
    }
},

{
    question: "Vilken av dessa dras du mest till?",
    answers: {
        A: "Röd",
        B: "Blå",
        C: "Grön",
        D: "Lila"
    }
},

{
    question: "Vad skulle du aldrig vilja vara?",
    answers: {
        A: "Opålitlig",
        B: "Osynlig",
        C: "En typsnittsdesigner",
        D: "Slarvig"
    }
},

{
    question: "När var sist du gjorde något helt spontant?",
    answers: {
        A: "Aldrig hänt",
        B: "Inte så längesen",
        C: "Någon gång men kan inte minnas när",
        D: "Allt jag gör är spontant"
    }
},

{
    question: "Vilket påstående om dig är mest korrekt?",
    answers: {
        A: "Jag gillar saker som är tidlösa och genomtänkta.",
        B: "Jag vill helst göra saker på mitt eget sätt.",
        C: "Jag dras till det moderna och nytänkande.",
        D: "Jag kan lägga orimligt mycket tid på små detaljer."
    }
},

{
    question: "Vilken miljö trivs du bäst i?",
    answers: {
        A: "Ett bibliotek",
        B: "Ett kontor",
        C: "Hemma",
        D: "Ett café"
    }
}
```

];

/* ==========================================
ALLA 14 TYPSNITT
========================================== */

const typefaces = [

```
{
    name: "Futura",
    className: "font-futura",
    description: "geometric, clean and progressive"
},

{
    name: "Raceway",
    className: "font-raceway",
    description: "airy, sleek and structured"
},

{
    name: "Playfair Display",
    className: "font-playfair",
    description: "tradition with a flair"
},

{
    name: "Helvetica",
    className: "font-helvetica",
    description: "The Swiss Army knife of fonts"
},

{
    name: "Gotham",
    className: "font-gotham",
    description: "bold and built for impact"
},

{
    name: "Montserrat",
    className: "font-montserrat",
    description: "urban, stylish and geometric"
},

{
    name: "Didot",
    className: "font-didot",
    description: "high fashion in font form"
},

{
    name: "Cooper Black",
    className: "font-cooper",
    description: "charming, friendly, playful"
},

{
    name: "Bodoni",
    className: "font-bodoni",
    description: "luxurious and editorial"
},

{
    name: "Comic Sans",
    className: "font-comic",
    description: "fun, embodiment of informality"
},

{
    name: "Chiller",
    className: "font-chiller",
    description: "alarming, strong presence"
},

{
    name: "Hobo",
    className: "font-hobo",
    description: "unusual, doesn’t have any straight lines"
},

{
    name: "Bubblegum",
    className: "font-bubblegum",
    description: "joyful and not edgy"
},

{
    name: "Arial",
    className: "font-arial",
    description: "clean, modern, high readability"
}
```

];

/* ==========================================
VARIABLER
========================================== */

let selectedQuestions = [];

let currentQuestion = 0;

let isReading = false;

/* ==========================================
ELEMENT
========================================== */

const startScreen =
document.getElementById(
"start-screen"
);

const quizScreen =
document.getElementById(
"quiz-screen"
);

const resultScreen =
document.getElementById(
"result-screen"
);

const startButton =
document.getElementById(
"start-button"
);

const restartButton =
document.getElementById(
"restart-button"
);

const questionText =
document.getElementById(
"question-text"
);

const questionNumber =
document.getElementById(
"question-number"
);

const resultFont =
document.getElementById(
"result-font"
);

const resultDescription =
document.getElementById(
"result-description"
);

const answerOptions =
document.querySelectorAll(
".answer-option"
);

/* ==========================================
SLUMPA
========================================== */

function shuffle(array) {

```
const shuffled =
    [...array];


for (
    let i = shuffled.length - 1;
    i > 0;
    i--
) {

    const j =
        Math.floor(
            Math.random() *
            (i + 1)
        );


    [
        shuffled[i],
        shuffled[j]
    ] = [
        shuffled[j],
        shuffled[i]
    ];

}


return shuffled;
```

}

/* ==========================================
STARTA LÄSNING
========================================== */

function startReading() {

```
currentQuestion = 0;

isReading = false;


/*
   Välj 10 av de 21 frågorna
   slumpmässigt.
*/

selectedQuestions =
    shuffle(
        questions
    ).slice(
        0,
        10
    );


startScreen.classList.remove(
    "active"
);


resultScreen.classList.remove(
    "active"
);


quizScreen.classList.add(
    "active"
);


showQuestion();
```

}

/* ==========================================
VISA FRÅGA
========================================== */

function showQuestion() {

```
const question =
    selectedQuestions[
        currentQuestion
    ];


if (!question) {
    return;
}


/*
   Uppdatera räknaren
   01 → 02 → 03 osv.
*/

questionNumber.textContent =
    String(
        currentQuestion + 1
    ).padStart(
        2,
        "0"
    );


/*
   Visa frågan
*/

questionText.textContent =
    question.question;


/*
   Fyll svarsalternativen
*/

answerOptions.forEach(
    option => {

        const answer =
            option.dataset.answer;


        const answerText =
            option.querySelector(
                ".answer-text"
            );


        answerText.textContent =
            question.answers[
                answer
            ];


        option.classList.remove(
            "selected"
        );


        option.disabled =
            false;

    }
);
```

}

/* ==========================================
VÄLJ SVAR
========================================== */

function selectAnswer(option) {

```
/*
   Förhindra dubbelklick
*/

if (isReading) {
    return;
}


isReading = true;


/*
   Visa vilket svar
   användaren klickade på.
*/

option.classList.add(
    "selected"
);


/*
   Stäng av alla svar
   medan nästa fråga laddas.
*/

answerOptions.forEach(
    otherOption => {

        otherOption.disabled =
            true;

    }
);


/*
   Kort paus så att
   orb-animationen syns.
*/

setTimeout(
    () => {

        currentQuestion++;


        /*
           Efter fråga 10
           går vi till resultatet.
        */

        if (
            currentQuestion >=
            selectedQuestions.length
        ) {

            showRandomResult();

            return;
        }


        /*
           Annars nästa fråga.
        */

        isReading = false;

        showQuestion();

    },
    700
);
```

}

/* ==========================================
VISA SLUMPMÄSSIGT RESULTAT
========================================== */

function showRandomResult() {

```
/*
   Resultatet är helt oberoende
   av vilka svar användaren valt.
*/

const result =
    typefaces[
        Math.floor(
            Math.random() *
            typefaces.length
        )
    ];


/*
   Ta bort tidigare typsnittsklasser.
*/

typefaces.forEach(
    font => {

        resultFont.classList.remove(
            font.className
        );

    }
);


/*
   Lägg till det nya typsnittet.
*/

resultFont.classList.add(
    result.className
);


/*
   Visa typsnittsnamnet.
*/

resultFont.textContent =
    result.name;


/*
   Visa beskrivningen.
*/

resultDescription.textContent =
    result.description;


/*
   Byt sida.
*/

quizScreen.classList.remove(
    "active"
);


resultScreen.classList.add(
    "active"
);


isReading = false;
```

}

/* ==========================================
TILLBAKA TILL START
========================================== */

function returnToStart() {

```
/*
   Dölj frågorna.
*/

quizScreen.classList.remove(
    "active"
);


/*
   Dölj resultatet.
*/

resultScreen.classList.remove(
    "active"
);


/*
   Visa startsidan.
*/

startScreen.classList.add(
    "active"
);


/*
   Nollställ quizet.
*/

currentQuestion = 0;

selectedQuestions = [];

isReading = false;
```

}

/* ==========================================
KNAPPAR
========================================== */

startButton.addEventListener(
"click",
startReading
);

restartButton.addEventListener(
"click",
returnToStart
);

/* ==========================================
SVARS-KNAPPAR
========================================== */

answerOptions.forEach(
option => {

```
    option.addEventListener(
        "click",
        function() {

            selectAnswer(
                this
            );

        }
    );

}
```

);

/* ==========================================
INITIALT LÄGE
========================================== */

startScreen.classList.add(
"active"
);

quizScreen.classList.remove(
"active"
);

resultScreen.classList.remove(
"active"
);

