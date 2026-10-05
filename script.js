/* =========================================================
   QUESTIONS
========================================================= */

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
            D: "Call your friend and ask what they’re doing. Then exit party and go meet them."
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
            A: "I promise I don't have OCD",
            B: "Like the ones you find in a prisoncell",
            C: "The desk is like a battlefield",
            D: "Me bed is me desk is me kitchen is me whole house"
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
            D: "I embrace everything life has to offer, there would be no ups if there were no downs anyways"
        }
    },

    {
        question: "What do you do when you don’t know what to choose?",
        answers: {
            A: "Ask a salesman for help then end up getting seven other things and an insurance",
            B: "Call mom",
            C: "Go with my gut",
            D: "Look up the trends, compare all the options fifty times then choose none"
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
            C: "Good kerning",
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
            B: "Blues:(",
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
            C: "I used to be an adventurer like you..",
            D: "Everything I do is spontaneous"
        }
    },

    {
        question: "If you were in faced with a tiger you would?",
        answers: {
            A: "Pat the tiger.",
            B: "Flykick the tiger",
            C: "Offer it a cigarette",
            D: "Spend an unreasonable amount of time on designing and launching a new font you made together."
        }
    },

    {
        question: "Which environment do you feel most comfortable in?",
        answers: {
            A: "A library",
            B: "A café",
            C: "Train stations",
            D: "Underground"
        }
    }

];


/* =========================================================
   TYPEFACES
========================================================= */

const typefaces = [

    {
        name: "Areal",
        className: "font-areal",
        description: 'With the latest fashion, ”technologia!”, high readability'
    },

    {
        name: "Galapagos",
        className: "font-galapagos",
        description: "Futuristic, has read all Tolkien books, modular"
    },

    {
        name: "Maxi",
        className: "font-maxi",
        description: "Warm, witty and heavily-engineered"
    },

    {
        name: "Stefan",
        className: "font-stefan",
        description: "You made it out of elementary school physically but not mentally"
    },

    {
        name: "Bingo",
        className: "font-bingo",
        description: "Rough on the outside and soft on the inside"
    },

    {
        name: "Gramercy",
        className: "font-gramercy",
        description: "Whimsical, elegantly sashays through life, comes with uppercase swashes"
    },

    {
        name: "Limpet Granite",
        className: "font-limpet-granite",
        description: "Irregular, rugged, is a cowboy"
    },

    {
        name: "Ticker",
        className: "font-ticker",
        description: "”Do it for the plot”, questions EVERYTHING, works all the time"
    },

    {
        name: "Joseleen",
        className: "font-joseleen",
        description: "Will go chasing cars with you, usual answer to everything is shrugging, picks flowers for you"
    },

    {
        name: "Jungka",
        className: "font-jungka",
        description: "Fined tuned, contemporary, immaculate vibes yo"
    },

    {
        name: "Pirelli",
        className: "font-pirelli",
        description: "Speaks through eye contact, mono-lined, often thinks or says that everything was better when they were a kid."
    },

    {
        name: "Publisher",
        className: "font-publisher",
        description: "Can write 60 words per minute, boasts about it, can (and will) recite the whole business-card scene from American Psycho from start to finish."
    },

    {
        name: "Amdal",
        className: "font-amdal",
        description: "Bold, expressive, capable of surviving several occupations"
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let selectedQuestions = [];

let currentQuestion = 0;

let score = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};

let answerLocked = false;


/* =========================================================
   DOM
========================================================= */

const startScreen =
    document.getElementById("start-screen");

const introScreen =
    document.getElementById("intro-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const scrollButton =
    document.getElementById("scroll-button");

const beginButton =
    document.getElementById("begin-button");

const restartButton =
    document.getElementById("restart-button");

const questionText =
    document.getElementById("question-text");

const questionNumber =
    document.getElementById("question-number");

const answerLabel =
    document.getElementById("answer-label");

const answersContainer =
    document.getElementById("answers");

const resultFont =
    document.getElementById("result-font");

const resultDescription =
    document.getElementById("result-description");


/* =========================================================
   MAGICAL AUDIO
========================================================= */

let audioContext = null;

let ambientGain = null;
let ambientOscillator = null;
let ambientLfo = null;

let audioStarted = false;


function startAmbientAudio() {

    if (audioStarted) {
        return;
    }

    audioStarted = true;

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    audioContext =
        new AudioContext();

    ambientGain =
        audioContext.createGain();

    ambientGain.gain.value =
        0.035;

    ambientGain.connect(
        audioContext.destination
    );

    ambientOscillator =
        audioContext.createOscillator();

    ambientOscillator.type =
        "sine";

    ambientOscillator.frequency.value =
        110;

    ambientOscillator.connect(
        ambientGain
    );

    ambientLfo =
        audioContext.createOscillator();

    const lfoGain =
        audioContext.createGain();

    ambientLfo.type =
        "sine";

    ambientLfo.frequency.value =
        0.045;

    lfoGain.gain.value =
        0.018;

    ambientLfo.connect(
        lfoGain
    );

    lfoGain.connect(
        ambientGain.gain
    );

    ambientOscillator.start();
    ambientLfo.start();
}


/* =========================================================
   ANSWER CLICK SFX
========================================================= */

function playAnswerSound() {

    if (!audioContext) {
        return;
    }

    const now =
        audioContext.currentTime;

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type =
        "sine";

    oscillator.frequency.setValueAtTime(
        420,
        now
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        820,
        now + 0.18
    );

    gain.gain.setValueAtTime(
        0.0001,
        now
    );

    gain.gain.exponentialRampToValueAtTime(
        0.14,
        now + 0.015
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.5
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start(now);

    oscillator.stop(
        now + 0.5
    );
}


/* =========================================================
   RESULT SFX
========================================================= */

function playResultSound() {

    if (!audioContext) {
        return;
    }

    const now =
        audioContext.currentTime;

    const notes = [
        261.63,
        329.63,
        523.25
    ];

    notes.forEach(
        (frequency, index) => {

            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();

            oscillator.type =
                index === 2
                    ? "triangle"
                    : "sine";

            oscillator.frequency.value =
                frequency;

            const start =
                now + index * 0.12;

            gain.gain.setValueAtTime(
                0.0001,
                start
            );

            gain.gain.exponentialRampToValueAtTime(
                0.13,
                start + 0.03
            );

            gain.gain.exponentialRampToValueAtTime(
                0.0001,
                start + 1.8
            );

            oscillator.connect(gain);

            gain.connect(
                audioContext.destination
            );

            oscillator.start(start);

            oscillator.stop(
                start + 1.8
            );

        }
    );
}


/* =========================================================
   SCREEN MANAGEMENT
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {
            item.classList.remove("active");
        });

    screen.classList.add("active");
}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffle(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];
    }

    return copy;
}


/* =========================================================
   START SCREEN → INTRO
========================================================= */

scrollButton.addEventListener(
    "click",
    () => {

        startAmbientAudio();

        showScreen(introScreen);

    }
);


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz() {

    startAmbientAudio();

    if (
        audioContext &&
        audioContext.state === "suspended"
    ) {
        audioContext.resume();
    }

    score = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    currentQuestion = 0;

    answerLocked = false;

    selectedQuestions =
        shuffle(questions)
            .slice(0, 10);

    showScreen(quizScreen);

    showQuestion();
}


/* =========================================================
   BEGIN READING
========================================================= */

beginButton.addEventListener(
    "click",
    startQuiz
);


/* =========================================================
   SHOW QUESTION
========================================================= */

function showQuestion() {

    const question =
        selectedQuestions[currentQuestion];

    if (!question) {
        showResult();
        return;
    }

    answerLocked = false;

    questionNumber.textContent =
        String(currentQuestion + 1)
            .padStart(2, "0");

    questionText.textContent =
        question.question;

    answerLabel.textContent =
        "Choose your axis";

    answersContainer.innerHTML = "";

    Object.entries(
        question.answers
    ).forEach(
        ([letter, text]) => {

            const option =
                document.createElement("button");

            option.type = "button";

            option.className =
                "answer-option";


            /* ORB */

            const orb =
                document.createElement("span");

            orb.className =
                "answer-orb";

            if (letter === "A") {
                orb.classList.add("orb-red");
            }

            if (letter === "B") {
                orb.classList.add("orb-blue");
            }

            if (letter === "C") {
                orb.classList.add("orb-gold");
            }

            if (letter === "D") {
                orb.classList.add("orb-green");
            }


            /* COPY */

            const copy =
                document.createElement("span");

            copy.className =
                "answer-copy";


            const letterElement =
                document.createElement("span");

            letterElement.className =
                "answer-letter";

            letterElement.textContent =
                letter;


            const textElement =
                document.createElement("span");

            textElement.className =
                "answer-text";

            textElement.textContent =
                text;


            copy.appendChild(
                letterElement
            );

            copy.appendChild(
                textElement
            );


            option.appendChild(
                orb
            );

            option.appendChild(
                copy
            );


            option.addEventListener(
                "click",
                () => {

                    answerQuestion(letter);

                }
            );


            answersContainer.appendChild(
                option
            );

        }
    );
}


/* =========================================================
   ANSWER QUESTION
========================================================= */

function answerQuestion(answer) {

    if (answerLocked) {
        return;
    }

    answerLocked = true;

    score[answer]++;

    playAnswerSound();

    answerLabel.textContent =
        "The typenteties have heard your answer";

    setTimeout(
        () => {

            currentQuestion++;

            if (
                currentQuestion >=
                selectedQuestions.length
            ) {

                showResult();

            } else {

                showQuestion();

            }

        },
        400
    );
}


/* =========================================================
   CALCULATE RESULT
========================================================= */

function calculateResult() {

    const total =
        score.A * 1 +
        score.B * 2 +
        score.C * 3 +
        score.D * 4;

    const index =
        total % typefaces.length;

    return typefaces[index];
}


/* =========================================================
   SHOW RESULT
========================================================= */

function showResult() {

    const result =
        calculateResult();

    showScreen(resultScreen);

    playResultSound();

    typefaces.forEach(
        font => {

            resultFont.classList.remove(
                font.className
            );

        }
    );

    resultFont.classList.add(
        result.className
    );

    resultFont.textContent =
        result.name;

    resultDescription.textContent =
        result.description;

    resultFont.style.animation = "none";
    resultDescription.style.animation = "none";

    void resultFont.offsetWidth;

    resultFont.style.animation =
        "resultReveal 2s ease forwards";

    resultDescription.style.animation =
        "fadeIn 1.5s ease 0.8s forwards";
}


/* =========================================================
   RESTART
========================================================= */

restartButton.addEventListener(
    "click",
    () => {

        showScreen(startScreen);

    }
);


/* =========================================================
   RESULT ANIMATION
========================================================= */

const resultStyle =
    document.createElement("style");

resultStyle.textContent = `

    @keyframes resultReveal {

        0% {
            opacity: 0;

            transform:
                scale(0.35)
                rotate(-8deg);

            filter:
                blur(18px)
                brightness(2);

            text-shadow:
                0 0 80px
                rgba(255,255,255,1);
        }

        45% {
            opacity: 1;

            transform:
                scale(1.15)
                rotate(3deg);

            filter:
                blur(0)
                brightness(1.6);

            text-shadow:
                0 0 50px
                rgba(220,150,255,0.9);
        }

        75% {
            transform:
                scale(0.96)
                rotate(-1deg);
        }

        100% {
            opacity: 1;

            transform:
                scale(1)
                rotate(0);

            filter:
                blur(0)
                brightness(1);

            text-shadow:
                0 0 30px
                rgba(230,180,255,0.35);
        }
    }

    #result-description {
        opacity: 0;
    }

`;

document.head.appendChild(
    resultStyle
);

