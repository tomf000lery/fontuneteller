javascript
/* =========================================
   QUESTIONS
========================================= */

const questions = [

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

];



/* =========================================
   TYPEFACES
========================================= */

const typefaces = [

    {
        name: "Futura",
        className: "font-futura",
        description: "Geometric, clean and progressive"
    },

    {
        name: "Raceway",
        className: "font-raceway",
        description: "Airy, sleek and structured"
    },

    {
        name: "Playfair Display",
        className: "font-playfair",
        description: "Tradition with a flair"
    },

    {
        name: "Helvetica",
        className: "font-helvetica",
        description: "The Swiss Army knife of fonts"
    },

    {
        name: "Gotham",
        className: "font-gotham",
        description: "Bold and built for impact"
    },

    {
        name: "Montserrat",
        className: "font-montserrat",
        description: "Urban, stylish and geometric"
    },

    {
        name: "Didot",
        className: "font-didot",
        description: "High fashion in font form"
    },

    {
        name: "Cooper Black",
        className: "font-cooper",
        description: "Charming, friendly, playful"
    },

    {
        name: "Bodoni",
        className: "font-bodoni",
        description: "Luxurious and editorial"
    },

    {
        name: "Comic Sans",
        className: "font-comic",
        description: "Fun, embodiment of informality"
    },

    {
        name: "Chiller",
        className: "font-chiller",
        description: "Alarming, strong presence"
    },

    {
        name: "Hobo",
        className: "font-hobo",
        description: "Unusual, doesn’t have any straight lines"
    },

    {
        name: "Bubblegum",
        className: "font-bubblegum",
        description: "Joyful and not edgy"
    },

    {
        name: "Arial",
        className: "font-arial",
        description: "Clean, modern, high readability"
    }

];



/* =========================================
   VARIABLES
========================================= */

let selectedQuestions = [];
let currentQuestion = 0;
let isReading = false;



/* =========================================
   DOM ELEMENTS
========================================= */

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const startButton =
    document.getElementById("start-button");

const restartButton =
    document.getElementById("restart-button");

const questionText =
    document.getElementById("question-text");

const questionNumber =
    document.getElementById("question-number");

const answerLabel =
    document.getElementById("answer-label");

const resultFont =
    document.getElementById("result-font");

const resultDescription =
    document.getElementById("result-description");

const answerOptions =
    document.querySelectorAll(".answer-option");



/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {

    const shuffled = [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
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
}



/* =========================================
   START NEW READING
========================================= */

function startReading() {

    console.log("Starting new reading");


    /*
        Reset quiz
    */

    currentQuestion = 0;
    isReading = false;


    /*
        Pick 10 RANDOM questions
        from the 21 total questions.
    */

    selectedQuestions =
        shuffle(questions).slice(0, 10);


    /*
        Hide result / show quiz
    */

    startScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    quizScreen.classList.add("active");


    /*
        Display question #1
    */

    showQuestion();
}



/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question =
        selectedQuestions[currentQuestion];


    if (!question) {
        return;
    }


    /*
        Question number
    */

    questionNumber.textContent =
        String(
            currentQuestion + 1
        ).padStart(2, "0");


    /*
        Question text
    */

    questionText.textContent =
        question.question;


    /*
        Reset status
    */

    answerLabel.textContent =
        "Välj ett tecken";

    answerLabel.classList.remove(
        "reading"
    );


    /*
        Fill the four answers
    */

    answerOptions.forEach(option => {

        const answer =
            option.dataset.answer;

        const answerText =
            option.querySelector(
                ".answer-text"
            );

        answerText.textContent =
            question.answers[answer];


        option.classList.remove(
            "selected"
        );

        option.disabled = false;

    });

}



/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(
    option
) {

    /*
        Prevent double clicking
    */

    if (isReading) {
        return;
    }


    isReading = true;


    /*
        Visual selection
    */

    option.classList.add(
        "selected"
    );


    answerOptions.forEach(
        otherOption => {

            otherOption.disabled = true;

        }
    );


    answerLabel.textContent =
        "Tecknet är registrerat…";

    answerLabel.classList.add(
        "reading"
    );


    /*
        Small mystical pause before
        moving to the next question.
    */

    setTimeout(() => {

        currentQuestion++;


        /*
            If we've answered all 10:
            go to result.
        */

        if (
            currentQuestion >=
            selectedQuestions.length
        ) {

            showRandomResult();

        }

        /*
            Otherwise:
            show next question.
        */

        else {

            isReading = false;

            showQuestion();

        }

    }, 700);

}



/* =========================================
   RANDOM RESULT
========================================= */

function showRandomResult() {

    /*
        Pick ONE random typeface
        from all available typefaces.
    */

    const result =
        typefaces[
            Math.floor(
                Math.random() *
                typefaces.length
            )
        ];


    console.log(
        "Your typeface is:",
        result.name
    );


    /*
        Remove all previous font classes
    */

    typefaces.forEach(font => {

        resultFont.classList.remove(
            font.className
        );

    });


    /*
        Add the selected font
    */

    resultFont.classList.add(
        result.className
    );


    /*
        Insert result
    */

    resultFont.textContent =
        result.name;


    resultDescription.textContent =
        result.description;


    /*
        Switch screen
    */

    quizScreen.classList.remove(
        "active"
    );

    resultScreen.classList.add(
        "active"
    );


    isReading = false;

}



/* =========================================
   RETURN TO START SCREEN
========================================= */

function returnToStart() {

    console.log(
        "Returning to start screen"
    );


    /*
        Hide everything
    */

    quizScreen.classList.remove(
        "active"
    );

    resultScreen.classList.remove(
        "active"
    );


    /*
        Show main screen
    */

    startScreen.classList.add(
        "active"
    );


    /*
        Reset
    */

    currentQuestion = 0;

    selectedQuestions = [];

    isReading = false;

}



/* =========================================
   EVENT LISTENERS
========================================= */


/*
    STARTA LÄSNINGEN
*/

startButton.addEventListener(
    "click",
    startReading
);


/*
    ANSWERS
*/

answerOptions.forEach(option => {

    option.addEventListener(
        "click",
        function() {

            selectAnswer(this);

        }
    );

});


/*
    GÖR EN NY LÄSNING

    This goes ALL THE WAY BACK
    to the main/start screen.
*/

restartButton.addEventListener(
    "click",
    returnToStart
);



/* =========================================
   INITIAL STATE
========================================= */

startScreen.classList.add("active");

quizScreen.classList.remove("active");

resultScreen.classList.remove("active");


console.log(
    "Font Fortune is ready."
);
