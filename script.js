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
D: "Mono-spaced"
}
},

{
question: "What do you do when you walk into a room full of people you don’t know?",
answers: {
A: "Stick to the wall, keep safe distance",
B: "Take the initiative, start talking, say "what are those?" to a person if they try to interruot, take over the room, assert dominance.",
C: "Leave immediately",
D: "Go up to people one by one and introduce myself as a typeface designer and ask them if they need fonts."
}
},

{
question: "How do you react to rules?",
answers: {
A: "Rules exist for a reason, must be followed. If it's the law it has to be right, right?",
B: "I follow them if they make sense",
C: "I like to push the boundaries heuhue 🤪",
D: "I do warraiwant"
}
},

{
question: "Which word describes you best?",
answers: {
A: "Bold",
B: "Kerned",
C: "Expressive",
D: "Modular"
}
},

{
question: "What does your desk look like?",
answers: {
A: "I promise I don't have OCD",
B: "computer. dead plant. yeah, and 5 000 000 coffestains",
C: "The desk is like a battlefield, but I swear I have it under control",
D: "I've never owned a desk"
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
A: "I prefer for things to remain the same always and forever pls",
B: "I adapt quickly",
C: "I love change hakuna matata",
D: "I withdraw back into my turtle shell"
}
},

{
question: "What do you do when you don’t know what to choose?",
answers: {
A: "Take the safest option",
B: "Call mom",
C: "Go with my gut",
D: "Look up recesions, compare all the options fifty times then choose nothing and go home"
}
},

{
question: "What annoys you the most?",
answers: {
A: "Poor readability",
B: "Unnecessary details",
C: "Lack of personality",
D: "Bad kerning"
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
C: "Purpose",
D: "Good kerning"
}
},

{
question: "How do you make decisions?",
answers: {
A: "Through careful analysis of my experiences and other proven methods",
B: "Gut feeling, yeehaw!",
C: "I open up a portal to the other side to ask the spirits from other dimensions for guidance",
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
question: "If you were one of these music genres, which one would you be?",
answers: {
A: "Rock ’n’ roll yeeeee",
B: "The blues:(",
C: "Rap but I call it rhytm and poetry so u kno Im soulful like dat skrrrt",
D: "I only listen to ancient mongolian throat singing"
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
D: "L3113r5 4r3 1nf3r10r"
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
question: "If you were faced with a tiger you would?",
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
A: "A maze",
B: "Central train station in foreign country",
C: "the waiting room at a hospital",
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
image: "areal.png",
description: 'With the latest fashion, ”technologia!”, high readability'
},

{
name: "Galapagos",
image: "galapagos.png",
description: "futuristic, communicates only in pop-cultural references, modular"
},

{
name: "Maxi",
image: "maxi.png",
description: "warm, witty and heavily-engineered"
},

{
name: "Stefan",
image: "stefan.png",
description: "you made it out of elementary school physically but not mentally"
},

{
name: "Bingo",
image: "bingo.png",
description: "rough on the outside and soft on the inside"
},

{
name: "Gramercy",
image: "gramercy.png",
description: "whimsical, elegantly sashays through life, comes with uppercase swashes"
},

{
name: "Limpet Granite",
image: "limpet-granite.png",
description: "irregular, rugged, is a cowboy"
},

{
name: "Ticker",
image: "ticker.png",
description: "”do it for the plot”, questions EVERYTHING, works all the time"
},

{
name: "Joseleen",
image: "joseleen.png",
description: "will go chasing cars with you, usual answer to everything is shrugging, picks flowers for you"
},

{
name: "Jungka",
image: "jungka.png",
description: "fined tuned, contemporary, immaculate vibes yo"
},

{
name: "Pirelli",
image: "pirelli.png",
description: "speaks through eye contact, mono-lined, has sleeping problems"
},

{
name: "Publisher",
image: "publisher.png",
description: "can write 60 words per minute, boasts about it, can (and will) recite the whole business-card scene from American Psycho from start to finish."
},

{
name: "Amdal",
image: "amdal.png",
description: "bold, expressive, capable of surviving several occupations"
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

const resultFontImage =
document.getElementById("result-font-image");

const resultDescription =
document.getElementById("result-description");

/* =========================================================
MAGICAL AUDIO
========================================================= */

let audioContext = null;
let ambientMasterGain = null;
let ambientVoices = [];
let audioStarted = false;

function startAmbientAudio() {


if (audioStarted) {
    return;
}

const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext;

if (!AudioContext) {
    return;
}

try {

    audioContext =
        new AudioContext();

    ambientMasterGain =
        audioContext.createGain();

    ambientMasterGain.gain.value =
        0.025;

    ambientMasterGain.connect(
        audioContext.destination
    );

    const voices = [
        {
            frequency: 110,
            type: "sine",
            volume: 0.35,
            lfo: 0.035
        },
        {
            frequency: 164.81,
            type: "sine",
            volume: 0.18,
            lfo: 0.045
        },
        {
            frequency: 220,
            type: "triangle",
            volume: 0.09,
            lfo: 0.025
        },
        {
            frequency: 329.63,
            type: "sine",
            volume: 0.035,
            lfo: 0.06
        }
    ];

    voices.forEach(
        voice => {

            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();

            const lfo =
                audioContext.createOscillator();

            const lfoGain =
                audioContext.createGain();

            oscillator.type =
                voice.type;

            oscillator.frequency.value =
                voice.frequency;

            gain.gain.value =
                voice.volume;

            lfo.type =
                "sine";

            lfo.frequency.value =
                voice.lfo;

            lfoGain.gain.value =
                voice.volume * 0.35;

            lfo.connect(
                lfoGain
            );

            lfoGain.connect(
                gain.gain
            );

            oscillator.connect(
                gain
            );

            gain.connect(
                ambientMasterGain
            );

            oscillator.start();
            lfo.start();

            ambientVoices.push({
                oscillator,
                gain,
                lfo
            });

        }
    );

    audioStarted = true;

} catch (error) {

    console.warn(
        "Ambient audio could not start:",
        error
    );

}


}

/* =========================================================
MAGICAL GLITTER SFX
========================================================= */

function playAnswerSound() {


if (!audioContext) {
    return;
}

const now =
    audioContext.currentTime;

const sparkleNotes = [
    783.99,
    1046.50,
    1318.51,
    1567.98
];

sparkleNotes.forEach(
    (frequency, index) => {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type =
            index % 2 === 0
                ? "sine"
                : "triangle";

        oscillator.frequency.setValueAtTime(
            frequency,
            now
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            frequency * 1.35,
            now + 0.35
        );

        const start =
            now + index * 0.045;

        const duration =
            0.65 + index * 0.08;

        gain.gain.setValueAtTime(
            0.0001,
            start
        );

        gain.gain.exponentialRampToValueAtTime(
            0.055,
            start + 0.012
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            start + duration
        );

        oscillator.connect(
            gain
        );

        gain.connect(
            audioContext.destination
        );

        oscillator.start(start);

        oscillator.stop(
            start + duration
        );

    }
);


}

/* =========================================================
RESULT GLITTER SFX
========================================================= */

function playResultSound() {


if (!audioContext) {
    return;
}

const now =
    audioContext.currentTime;

const notes = [
    523.25,
    659.25,
    783.99,
    1046.50,
    1318.51,
    1567.98
];

notes.forEach(
    (frequency, index) => {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();

        oscillator.type =
            index < 4
                ? "sine"
                : "triangle";

        oscillator.frequency.value =
            frequency;

        const start =
            now + index * 0.14;

        const duration =
            1.4 + index * 0.08;

        gain.gain.setValueAtTime(
            0.0001,
            start
        );

        gain.gain.exponentialRampToValueAtTime(
            0.045,
            start + 0.025
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            start + duration
        );

        oscillator.connect(
            gain
        );

        gain.connect(
            audioContext.destination
        );

        oscillator.start(start);

        oscillator.stop(
            start + duration
        );

    }
);


}

/* =========================================================
SCREEN MANAGEMENT
========================================================= */

function showScreen(screen) {


if (!screen) {
    return;
}

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
START → INTRO
CLICK ARROW
========================================================= */

function goToIntro() {


startAmbientAudio();

if (
    audioContext &&
    audioContext.state === "suspended"
) {
    audioContext
        .resume()
        .catch(() => {});
}

showScreen(introScreen);


}

if (scrollButton) {


scrollButton.addEventListener(
    "click",
    goToIntro
);


}

/* =========================================================
START → INTRO
MOUSE / TRACKPAD SCROLL
========================================================= */

let startScrollLocked = false;

if (startScreen) {


startScreen.addEventListener(
    "wheel",
    event => {

        if (
            !startScreen.classList.contains("active") ||
            startScrollLocked
        ) {
            return;
        }

        if (event.deltaY > 15) {

            startScrollLocked = true;

            goToIntro();

            setTimeout(
                () => {
                    startScrollLocked = false;
                },
                700
            );
        }

    },
    {
        passive: true
    }
);


}

/* =========================================================
START → INTRO
TOUCH / SWIPE
========================================================= */

let touchStartY = 0;
let touchStartX = 0;

if (startScreen) {


startScreen.addEventListener(
    "touchstart",
    event => {

        if (
            !startScreen.classList.contains("active")
        ) {
            return;
        }

        const touch =
            event.changedTouches[0];

        touchStartY =
            touch.clientY;

        touchStartX =
            touch.clientX;

    },
    {
        passive: true
    }
);


startScreen.addEventListener(
    "touchend",
    event => {

        if (
            !startScreen.classList.contains("active")
        ) {
            return;
        }

        const touch =
            event.changedTouches[0];

        const deltaY =
            touch.clientY - touchStartY;

        const deltaX =
            touch.clientX - touchStartX;

        if (
            Math.abs(deltaY) > 45 &&
            Math.abs(deltaY) > Math.abs(deltaX) &&
            deltaY < 0
        ) {

            goToIntro();

        }

    },
    {
        passive: true
    }
);


}

/* =========================================================
START QUIZ
========================================================= */

function startQuiz() {


startAmbientAudio();

if (
    audioContext &&
    audioContext.state === "suspended"
) {
    audioContext
        .resume()
        .catch(() => {});
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

if (beginButton) {


beginButton.addEventListener(
    "click",
    startQuiz
);


}

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

        option.type =
            "button";

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


/* FONT PNG */

resultFontImage.src =
    result.image;

resultFontImage.alt =
    result.name;


/* DESCRIPTION */

resultDescription.textContent =
    result.description;


/* Restart animations */

resultFontImage.style.animation =
    "none";

resultDescription.style.animation =
    "none";

void resultFontImage.offsetWidth;


resultFontImage.style.animation =
    "resultReveal 2s ease forwards, magicalWobble 6s ease-in-out 2s infinite";

resultDescription.style.animation =
    "fadeIn 1.5s ease 0.8s forwards, magicalWobble 6s ease-in-out 2.3s infinite";


}

/* =========================================================
RESTART
========================================================= */

if (restartButton) {


restartButton.addEventListener(
    "click",
    () => {

        showScreen(startScreen);

    }
);


}

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

/* =========================================================
SAFETY CHECK
========================================================= */

console.log(
"Fontune Teller loaded successfully."
);
