```javascript
/* =====================================================
   QUESTIONS
===================================================== */

const questions = [

    {
        question: "How do you think others perceive you?",
        answers: {
            A: "Reliable",
            B: "Sophisticated",
            C: "Playful",
            D: "Expressive"
        }
    },

    {
        question: "What do you do when you walk into a room full of people you don’t know?",
        answers: {
            A: "Stick to the wall",
            B: "Take the initiative, start talking, take over the room, assert dominance.",
            C: "Spot someone interesting and go up to them",
            D: "Call your friend and ask what they’re doing."
        }
    },

    {
        question: "How do you react to rules?",
        answers: {
            A: "Rules exist for a reason",
            B: "I follow them if they make sense",
            C: "I like to push the boundaries",
            D: "I prefer to make my own"
        }
    },

    {
        question: "Which word describes you best?",
        answers: {
            A: "Bold",
            B: "Kerned",
            C: "Expressive",
            D: "Classic"
        }
    },

    {
        question: "What does your desk look like?",
        answers: {
            A: "Organized and structured",
            B: "Clean and minimalist",
            C: "Creative chaos",
            D: "Stylish and thoughtfully arranged"
        }
    },

    {
        question: "What matters most when you choose clothes?",
        answers: {
            A: "Function",
            B: "Fit",
            C: "Personality",
            D: "Style"
        }
    },

    {
        question: "How do you deal with change?",
        answers: {
            A: "I prefer for things to remain the same",
            B: "I adapt quickly",
            C: "I love change",
            D: "I embrace everything life has to offer"
        }
    },

    {
        question: "What do you do when you don’t know what to choose?",
        answers: {
            A: "Take the safe option",
            B: "Ask someone else",
            C: "Go with my gut",
            D: "Compare all the options"
        }
    },

    {
        question: "What annoys you the most?",
        answers: {
            A: "Poor readability",
            B: "Unnecessary details",
            C: "Lack of personality",
            D: "Poor kerning"
        }
    },

    {
        question: "If you could choose a superpower, which one would you pick?",
        answers: {
            A: "Flying",
            B: "Controlling time and space",
            C: "Mastering Glyphs",
            D: "Shooting fire from my hands"
        }
    },

    {
        question: "What matters most to you?",
        answers: {
            A: "Security",
            B: "Freedom",
            C: "Creativity",
            D: "Quality"
        }
    },

    {
        question: "How do you make decisions?",
        answers: {
            A: "Through careful analysis of my experiences and other proven methods",
            B: "Gut feeling",
            C: "Quickly and instinctively",
            D: "I don’t do that"
        }
    },

    {
        question: "What type of compliment do you appreciate the most?",
        answers: {
            A: "“You’re someone I can rely on.”",
            B: "“You’re so funny.”",
            C: "“You’re so good at kerning.”",
            D: "“You’re so smart.”"
        }
    },

    {
        question: "If you were a music genre, what would you be?",
        answers: {
            A: "Rock ’n’ roll",
            B: "Blues",
            C: "Experimental and unpredictable, the kind of thing you only find on SoundCloud",
            D: "Disco funk"
        }
    },

    {
        question: "What do you do when a project starts going in the wrong direction?",
        answers: {
            A: "Go back to the plan",
            B: "Take control",
            C: "Try a completely new idea for the plot",
            D: "Retire"
        }
    },

    {
        question: "How close are you to letters?",
        answers: {
            A: "Close enough, but at a safe distance",
            B: "I love them",
            C: "I have friends that are letters",
            D: "L311er5 4r3 1nf3r10r"
        }
    },

    {
        question: "When was the last time you read a book?",
        answers: {
            A: "I’ve never read anything in my life not even this stupid test",
            B: "All day erryday, son!",
            C: "If the last book you read was Harry Potter you have a curse on you. Say: KAKA! Loud to break the curse",
            D: "Purple"
        }
    },

    {
        question: "What would you never want to be?",
        answers: {
            A: "Unreadable",
            B: "Rigid",
            C: "A typeface designer",
            D: "Unrefined"
        }
    },

    {
        question: "When was the last time you did something completely spontaneous?",
        answers: {
            A: "Never happened",
            B: "Not that long ago",
            C: "At some point, but I can’t remember when",
            D: "Everything I do is spontaneous"
        }
    },

    {
        question: "If you were faced with a tiger you would?",
        answers: {
            A: "Pat the tiger.",
            B: "Flykick the tiger",
            C: "Offer it a cigarette",
            D: "Spend an unreasonable amount of time on designing and launching a new font we made together."
        }
    },

    {
        question: "Which environment do you feel most comfortable in?",
        answers: {
            A: "A library",
            B: "An office",
            C: "Home",
            D: "A café"
        }
    }

];


/* =====================================================
   TYPEFACES
===================================================== */

const typefaces = [

    {
        name: "Futura",
        className: "font-futura",
        description: "Geometric, clean and progressive",

        weights: {
            A: 2,
            B: 5,
            C: 5,
            D: 1
        }
    },

    {
        name: "Raceway",
        className: "font-raceway",
        description: "Serious, sleek and structured",

        weights: {
            A: 5,
            B: 4,
            C: 1,
            D: 3
        }
    },

    {
        name: "Playfair Display",
        className: "font-playfair",
        description: "Traditional but with a flair",

        weights: {
            A: 3,
            B: 5,
            C: 1,
            D: 5
        }
    },

    {
        name: "Helvetica",
        className: "font-helvetica",
        description: "The Swiss Army knife of fonts",

        weights: {
            A: 5,
            B: 4,
            C: 2,
            D: 3
        }
    },

    {
        name: "Gotham",
        className: "font-gotham",
        description: "Bold and built for impact",

        weights: {
            A: 2,
            B: 5,
            C: 4,
            D: 5
        }
    },

    {
        name: "Montserrat",
        className: "font-montserrat",
        description: "Urban, stylish and in their own lane",

        weights: {
            A: 2,
            B: 4,
            C: 5,
            D: 4
        }
    },

    {
        name: "Didot",
        className: "font-didot",
        description: "Fashion is my passion",

        weights: {
            A: 1,
            B: 5,
            C: 3,
            D: 5
        }
    },

    {
        name: "Cooper Black",
        className: "font-cooper",
        description: "Charming, playful, friendly, but will bite",

        weights: {
            A: 1,
            B: 3,
            C: 5,
            D: 4
        }
    },

    {
        name: "Bodoni",
        className: "font-bodoni",
        description: "Luxurious, editorial, knows they’re better",

        weights: {
            A: 2,
            B: 5,
            C: 2,
            D: 5
        }
    },

    {
        name: "Comic Sans",
        className: "font-comic",
        description: "Fun, embodiment of informality, not invited anywhere",

        weights: {
            A: 1,
            B: 2,
            C: 5,
            D: 2
        }
    },

    {
        name: "Chiller",
        className: "font-chiller",
        description: "Alarming presence, likes to party but maybe a bit too much",

        weights: {
            A: 1,
            B: 2,
            C: 4,
            D: 5
        }
    },

    {
        name: "Hobo",
        className: "font-hobo",
        description: "Unusual but appreciated, doesn’t have any straight lines",

        weights: {
            A: 1,
            B: 2,
            C: 5,
            D: 4
        }
    },

    {
        name: "Bubblegum",
        className: "font-bubblegum",
        description: "Joyful, not edgy, sometimes cool",

        weights: {
            A: 1,
            B: 2,
            C: 5,
            D: 3
        }
    },

    {
        name: "Arial",
        className: "font-arial",
        description: "Clean, modern, high readability",

        weights: {
            A: 5,
            B: 3,
            C: 2,
            D: 3
        }
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let selectedQuestions = [];
let currentQuestion = 0;

let score = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};

let answeringLocked = false;


/* =====================================================
   DOM
===================================================== */

const app =
    document.querySelector(".typeoscope");

const welcomeScreen =
    document.getElementById("welcome-screen");

const introScreen =
    document.getElementById("intro-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const scrollButton =
    document.getElementById("scroll-button");

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

const answerCards =
    document.querySelectorAll(".answer-card");

const ambientSound =
    document.getElementById("ambient-sound");


/* =====================================================
   SCREEN SWITCHING
===================================================== */

function showScreen(screen) {

    [
        welcomeScreen,
        introScreen,
        quizScreen,
        resultScreen
    ].forEach(currentScreen => {
        currentScreen.classList.remove("active");
    });

    screen.classList.add("active");
}


/* =====================================================
   SHUFFLE
===================================================== */

function shuffle(array) {

    return [...array]
        .sort(() => Math.random() - 0.5);

}


/* =====================================================
   AMBIENT SOUND
===================================================== */

function startAmbientSound() {

    if (!ambientSound) {
        return;
    }

    ambientSound.volume = 0.12;

    ambientSound.play()
        .catch(() => {
            /*
                Browsers block autoplay until
                the user interacts with the page.
            */
        });
}


/* =====================================================
   WELCOME → INTRO
===================================================== */

scrollButton.addEventListener("click", () => {

    showScreen(introScreen);

    startAmbientSound();

});


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz() {

    score = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    currentQuestion = 0;

    answeringLocked = false;

    selectedQuestions =
        shuffle(questions)
            .slice(0, 10);

    app.classList.remove("result-mode");

    showScreen(quizScreen);

    showQuestion();

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    const question =
        selectedQuestions[currentQuestion];

    questionText.textContent =
        question.question;

    questionNumber.textContent =
        String(currentQuestion + 1)
            .padStart(2, "0");

    answerLabel.textContent =
        "Choose a sign";

    answerCards.forEach(card => {

        const answer =
            card.dataset.answer;

        const text =
            card.querySelector(".answer-text");

        text.textContent =
            question.answers[answer];

    });

}


/* =====================================================
   ANSWER QUESTION
===================================================== */

function answerQuestion(answer) {

    if (answeringLocked) {
        return;
    }

    answeringLocked = true;

    score[answer]++;

    answerLabel.textContent =
        "The sign has been registered…";

    const selectedCard =
        document.querySelector(
            `.answer-card[data-answer="${answer}"]`
        );

    selectedCard.style.transform =
        "scale(1.04)";

    setTimeout(() => {

        selectedCard.style.transform = "";

        currentQuestion++;

        answeringLocked = false;

        if (
            currentQuestion >=
            selectedQuestions.length
        ) {

            showResult();

        } else {

            showQuestion();

        }

    }, 500);

}


/* =====================================================
   CALCULATE RESULT
===================================================== */

function calculateResult() {

    const results =
        typefaces.map(font => {

            let total = 0;

            Object.keys(score).forEach(answer => {

                total +=
                    score[answer] *
                    font.weights[answer];

            });

            return {
                font,
                score: total
            };

        });


    const highestScore =
        Math.max(
            ...results.map(
                result => result.score
            )
        );


    const winners =
        results.filter(
            result =>
                result.score === highestScore
        );


    /*
        If two typefaces are tied,
        randomly choose between them.
        This keeps repeated readings
        feeling slightly mysterious.
    */

    const winner =
        winners[
            Math.floor(
                Math.random() *
                winners.length
            )
        ];

    return winner.font;

}


/* =====================================================
   SHOW RESULT
===================================================== */

function showResult() {

    const result =
        calculateResult();


    showScreen(resultScreen);


    app.classList.add("result-mode");


    /*
        Remove all old font classes.
    */

    typefaces.forEach(font => {

        resultFont.classList.remove(
            font.className
        );

    });


    /*
        Apply selected font.
    */

    resultFont.classList.add(
        result.className
    );


    resultFont.textContent =
        result.name;

    resultDescription.textContent =
        result.description;


    /*
        Random ambient colors.
    */

    setRandomMagicColors();

}


/* =====================================================
   RANDOM MAGIC COLORS
===================================================== */

function randomColor() {

    const hue =
        Math.floor(
            Math.random() * 360
        );

    return `hsl(${hue}, 65%, 55%)`;

}


function setRandomMagicColors() {

    const colorA =
        randomColor();

    const colorB =
        randomColor();

    const ambientA =
        document.querySelector(".ambient-a");

    const ambientB =
        document.querySelector(".ambient-b");

    ambientA.style.background =
        colorA;

    ambientB.style.background =
        colorB;

}


/* =====================================================
   RESTART
===================================================== */

restartButton.addEventListener(
    "click",
    () => {

        app.classList.remove(
            "result-mode"
        );

        showScreen(welcomeScreen);

    }
);


/* =====================================================
   ANSWER EVENTS
===================================================== */

answerCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            answerQuestion(
                card.dataset.answer
            );

        }
    );

});


/* =====================================================
   START
===================================================== */

startButton.addEventListener(
    "click",
    startQuiz
);
```

