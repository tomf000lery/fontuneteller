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

   TEMPORÄRA RESULTAT

   Byt ut dessa mot dina riktiga 16
   typsnitt senare.
========================================= */

const typefaces = [

    {
        name: "Helvetica",
        description: "Du söker klarhet, balans och saker som fungerar. Din energi är rak, självsäker och tidlös."
    },

    {
        name: "Garamond",
        description: "Du bär på en klassisk energi. Du uppskattar detaljer, historia och saker som får åldras med värdighet."
    },

    {
        name: "Futura",
        description: "Du blickar framåt. Geometrisk, rationell och samtidigt lite besatt av att göra saker på ditt eget sätt."
    },

    {
        name: "Bodoni",
        description: "Du vet vad du gillar och du är inte rädd för att visa det. Elegant, dramatisk och med mycket personlighet."
    },

    {
        name: "Comic Sans",
        description: "Du vägrar ta livet — eller typografi — på för stort allvar."
    },

    {
        name: "Times New Roman",
        description: "Du är en överlevare. Du har sett trender komma och gå och står fortfarande kvar."
    },

    {
        name: "Cooper Black",
        description: "Varm, social och omöjlig att ignorera. Du lämnar gärna lite extra plats åt personligheten."
    },

    {
        name: "Arial",
        description: "Du behöver inte komplicera saker. När något fungerar, varför ändra det?"
    },

    {
        name: "Didot",
        description: "Du uppskattar precision, elegans och en perfekt balans mellan dramatik och kontroll."
    },

    {
        name: "Courier",
        description: "Du gillar struktur, system och saker som känns lite mekaniska."
    },

    {
        name: "Impact",
        description: "Du har saker att säga och du tänker inte säga dem tyst."
    },

    {
        name: "Papyrus",
        description: "Du går din egen väg. Ibland vet ingen riktigt varför — inklusive du."
    },

    {
        name: "Baskerville",
        description: "Genomtänkt, intelligent och med en stark känsla för tradition."
    },

    {
        name: "Univers",
        description: "Du uppskattar ordning utan att behöva berätta för någon att du gör det."
    },

    {
        name: "Avenir",
        description: "Du är modern utan att vara besatt av att vara modern."
    },

    {
        name: "Wingdings",
        description: "Ingen förstår dig helt. Och det är precis så du vill ha det."
    }

];


/* =========================================
   VARIABLES
========================================= */

let selectedQuestions = [];

let currentQuestion = 0;

let score = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};


/* =========================================
   DOM
========================================= */

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");

const answerLabel = document.getElementById("answer-label");

const resultFont = document.getElementById("result-font");
const resultDescription = document.getElementById("result-description");

const orbs = document.querySelectorAll(".orb");


/* =========================================
   UTILITY
========================================= */

function shuffle(array) {

    return [...array].sort(() => Math.random() - 0.5);

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    // Reset score

    score = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    currentQuestion = 0;

    // Select 10 random questions

    selectedQuestions = shuffle(questions).slice(0, 10);

    // Show first question

    startScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    quizScreen.classList.add("active");

    showQuestion();

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question = selectedQuestions[currentQuestion];

    questionText.textContent = question.question;

    questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0");

    answerLabel.textContent = "Välj ett tecken";

}


/* =========================================
   ANSWER
========================================= */

function answerQuestion(answer) {

    // Add score

    score[answer]++;

    // Optional visual feedback

    answerLabel.textContent = "Tecknet är registrerat…";

    // Small delay gives the interaction
    // a more ceremonial feeling

    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion >= selectedQuestions.length) {

            showResult();

        } else {

            showQuestion();

        }

    }, 450);

}


/* =========================================
   CALCULATE RESULT
========================================= */

function calculateResult() {

    /*
        Find the answer with the highest score.
    */

    const highestScore = Math.max(
        score.A,
        score.B,
        score.C,
        score.D
    );

    const winners = Object.keys(score)
        .filter(key => score[key] === highestScore);

    /*
        If there is a tie, randomly select
        between the tied answers.
    */

    const winningLetter =
        winners[Math.floor(Math.random() * winners.length)];


    /*
        Convert the A/B/C/D personality
        into one of 16 possible typefaces.

        This is TEMPORARY.

        Later we can make a much more sophisticated
        scoring system.
    */

    const seed =
        score.A * 1 +
        score.B * 2 +
        score.C * 3 +
        score.D * 4;

    const index = seed % typefaces.length;

    return typefaces[index];

}


/* =========================================
   SHOW RESULT
========================================= */

function showResult() {

    const result = calculateResult();

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");

    resultFont.textContent = result.name;

    resultDescription.textContent =
        result.description;

}


/* =========================================
   EVENT LISTENERS
========================================= */

startButton.addEventListener(
    "click",
    startQuiz
);


restartButton.addEventListener(
    "click",
    startQuiz
);


orbs.forEach(orb => {

    orb.addEventListener("click", () => {

        const answer =
            orb.dataset.answer;

        answerQuestion(answer);

    });

});

