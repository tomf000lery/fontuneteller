/* =========================================
   FONTUNE TELLER
   SCRIPT
========================================= */


/* =========================================
   DATA
========================================= */

/*
    PERSONALITY TRAITS

    These are the dimensions used by the
    personality scoring system.

    You can freely add, remove or rename
    traits later, as long as the same trait
    exists in both ANSWER_TRAITS and the
    typeface profiles.
*/

const TRAITS = [
    "geometric",
    "elegant",
    "playful",
    "expressive",
    "structured",
    "experimental",
    "modern",
    "classic",
    "readable",
    "bold",
    "friendly",
    "serious",
    "luxurious",
    "unconventional"
];


/* =========================================
   QUESTIONS
========================================= */

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
            C: "if the last book you read was Harry Potter you have a curse on you. Say: KAKA! Loud to break the curse",
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
        question: "If you were in faced with a tiger you would?",
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


/* =========================================
   ANSWER PERSONALITY WEIGHTS
========================================= */

/*
    Every answer contributes to a personality
    vector.

    Values are intentionally visible and easy
    to edit.

    Higher number = stronger influence.

    The scoring system normalizes the final
    personality vector before comparing it
    against the typeface profiles.
*/

const ANSWER_TRAITS = {

    A: {
        structured: 0.95,
        serious: 0.78,
        readable: 0.86,
        classic: 0.62,
        bold: 0.45,
        geometric: 0.48
    },

    B: {
        elegant: 0.88,
        structured: 0.74,
        modern: 0.68,
        serious: 0.65,
        luxurious: 0.72,
        readable: 0.7
    },

    C: {
        playful: 0.92,
        expressive: 0.86,
        experimental: 0.88,
        unconventional: 0.84,
        friendly: 0.72,
        bold: 0.6
    },

    D: {
        expressive: 0.94,
        unconventional: 0.78,
        bold: 0.84,
        playful: 0.7,
        experimental: 0.7,
        elegant: 0.56
    }

};


/*
    QUESTION-SPECIFIC overrides.

    This gives certain answers a more precise
    personality effect instead of making every
    A/B/C/D response identical.

    Only traits listed here are added on top
    of the base answer profile.
*/

const ANSWER_OVERRIDES = {

    1: {
        A: { reliable: 1 },
        B: { elegant: 0.25, luxurious: 0.25 },
        C: { playful: 0.25, friendly: 0.2 },
        D: { expressive: 0.25 }
    },

    2: {
        A: { serious: 0.2, structured: 0.2 },
        B: { bold: 0.4, expressive: 0.25 },
        C: { friendly: 0.3, unconventional: 0.2 },
        D: { playful: 0.35 }
    },

    3: {
        A: { structured: 0.3, classic: 0.25 },
        B: { modern: 0.25, structured: 0.15 },
        C: { experimental: 0.4, unconventional: 0.3 },
        D: { unconventional: 0.45, expressive: 0.2 }
    },

    4: {
        A: { bold: 0.35 },
        B: { elegant: 0.3, structured: 0.2 },
        C: { expressive: 0.3 },
        D: { classic: 0.4, elegant: 0.2 }
    },

    5: {
        A: { structured: 0.4, readable: 0.2 },
        B: { modern: 0.3, geometric: 0.25 },
        C: { experimental: 0.35, playful: 0.2 },
        D: { elegant: 0.3, luxurious: 0.25 }
    },

    6: {
        A: { structured: 0.25, serious: 0.2 },
        B: { elegant: 0.3, readable: 0.2 },
        C: { expressive: 0.35, unconventional: 0.25 },
        D: { luxurious: 0.35, classic: 0.2 }
    },

    7: {
        A: { classic: 0.35, structured: 0.25 },
        B: { modern: 0.35, readable: 0.15 },
        C: { experimental: 0.45, unconventional: 0.3 },
        D: { expressive: 0.3, playful: 0.2 }
    },

    8: {
        A: { serious: 0.3, structured: 0.3 },
        B: { friendly: 0.3, readable: 0.15 },
        C: { unconventional: 0.35, experimental: 0.25 },
        D: { structured: 0.35, geometric: 0.2 }
    },

    9: {
        A: { readable: 0.55 },
        B: { structured: 0.45, modern: 0.2 },
        C: { expressive: 0.5, unconventional: 0.25 },
        D: { geometric: 0.5, elegant: 0.15 }
    },

    10: {
        A: { expressive: 0.2, unconventional: 0.2 },
        B: { experimental: 0.35, geometric: 0.25 },
        C: { expressive: 0.35, unconventional: 0.4 },
        D: { bold: 0.5, expressive: 0.2 }
    },

    11: {
        A: { serious: 0.4, structured: 0.3 },
        B: { unconventional: 0.35, modern: 0.2 },
        C: { experimental: 0.4, expressive: 0.25 },
        D: { luxurious: 0.35, readable: 0.2 }
    },

    12: {
        A: { structured: 0.5, serious: 0.35 },
        B: { unconventional: 0.4, expressive: 0.2 },
        C: { bold: 0.4, modern: 0.3 },
        D: { unconventional: 0.55, playful: 0.2 }
    },

    13: {
        A: { friendly: 0.45, serious: 0.3 },
        B: { playful: 0.4, friendly: 0.3 },
        C: { geometric: 0.5, structured: 0.2 },
        D: { serious: 0.4, readable: 0.25 }
    },

    14: {
        A: { bold: 0.35, classic: 0.2 },
        B: { classic: 0.4, serious: 0.25 },
        C: { experimental: 0.6, unconventional: 0.45 },
        D: { playful: 0.35, expressive: 0.35 }
    },

    15: {
        A: { structured: 0.45, serious: 0.2 },
        B: { bold: 0.45, structured: 0.2 },
        C: { experimental: 0.55, unconventional: 0.35 },
        D: { playful: 0.45, unconventional: 0.25 }
    },

    16: {
        A: { serious: 0.25, structured: 0.2 },
        B: { friendly: 0.4, elegant: 0.2 },
        C: { playful: 0.45, unconventional: 0.35 },
        D: { experimental: 0.45, unconventional: 0.45 }
    },

    17: {
        A: { unconventional: 0.45, playful: 0.25 },
        B: { expressive: 0.4, friendly: 0.2 },
        C: { experimental: 0.5, unconventional: 0.45 },
        D: { playful: 0.5, unconventional: 0.35 }
    },

    18: {
        A: { readable: 0.5, structured: 0.25 },
        B: { structured: 0.4, geometric: 0.25 },
        C: { experimental: 0.5, unconventional: 0.35 },
        D: { elegant: 0.45, luxurious: 0.25 }
    },

    19: {
        A: { structured: 0.45, serious: 0.25 },
        B: { modern: 0.3, expressive: 0.2 },
        C: { unconventional: 0.4, experimental: 0.3 },
        D: { playful: 0.45, expressive: 0.3 }
    },

    20: {
        A: { friendly: 0.55, playful: 0.3 },
        B: { bold: 0.55, expressive: 0.3 },
        C: { unconventional: 0.6, playful: 0.35 },
        D: { experimental: 0.65, geometric: 0.25 }
    },

    21: {
        A: { classic: 0.45, serious: 0.25, readable: 0.25 },
        B: { structured: 0.4, modern: 0.25 },
        C: { friendly: 0.35, playful: 0.2 },
        D: { expressive: 0.3, elegant: 0.25 }
    }

};


/*
    "Reliable" is intentionally mapped here
    because it is a useful personality dimension
    without needing to be one of the primary
    typeface traits.
*/

const TRAIT_ALIASES = {
    reliable: {
        structured: 0.8,
        serious: 0.7,
        readable: 0.55
    }
};


/* =========================================
   TYPEFACE PROFILES
========================================= */

const typefaces = [

    {
        name: "Futura",
        className: "font-futura",
        description: "geometric, clean and progressive",

        palette: {
            colors: ["#2848ff", "#7657ff", "#070914"],
            glow: "rgba(68, 83, 255, 0.6)"
        },

        profile: {
            geometric: 0.98,
            elegant: 0.35,
            playful: 0.2,
            expressive: 0.4,
            structured: 0.92,
            experimental: 0.35,
            modern: 0.95,
            classic: 0.2,
            readable: 0.88,
            bold: 0.72,
            friendly: 0.35,
            serious: 0.66,
            luxurious: 0.28,
            unconventional: 0.45
        }
    },

    {
        name: "Raceway",
        className: "font-raceway",
        description: "Serious, sleek and structured",

        palette: {
            colors: ["#8e96ad", "#3d465e", "#090b11"],
            glow: "rgba(125, 140, 173, 0.48)"
        },

        profile: {
            geometric: 0.72,
            elegant: 0.45,
            playful: 0.1,
            expressive: 0.3,
            structured: 0.98,
            experimental: 0.32,
            modern: 0.78,
            classic: 0.3,
            readable: 0.8,
            bold: 0.62,
            friendly: 0.2,
            serious: 0.95,
            luxurious: 0.25,
            unconventional: 0.32
        }
    },

    {
        name: "Playfair Display",
        className: "font-playfair",
        description: "traditional but with a flair",

        palette: {
            colors: ["#b77c9f", "#704c76", "#130a18"],
            glow: "rgba(173, 101, 161, 0.52)"
        },

        profile: {
            geometric: 0.25,
            elegant: 0.88,
            playful: 0.32,
            expressive: 0.68,
            structured: 0.7,
            experimental: 0.25,
            modern: 0.45,
            classic: 0.94,
            readable: 0.82,
            bold: 0.52,
            friendly: 0.42,
            serious: 0.72,
            luxurious: 0.76,
            unconventional: 0.25
        }
    },

    {
        name: "Helvetica",
        className: "font-helvetica",
        description: "The Swiss Army knife of fonts",

        palette: {
            colors: ["#5189cc", "#dceaff", "#111a28"],
            glow: "rgba(70, 139, 219, 0.48)"
        },

        profile: {
            geometric: 0.74,
            elegant: 0.35,
            playful: 0.15,
            expressive: 0.22,
            structured: 0.9,
            experimental: 0.1,
            modern: 0.84,
            classic: 0.65,
            readable: 0.98,
            bold: 0.38,
            friendly: 0.48,
            serious: 0.74,
            luxurious: 0.12,
            unconventional: 0.08
        }
    },

    {
        name: "Gotham",
        className: "font-gotham",
        description: "bold and built for impact",

        palette: {
            colors: ["#b9363f", "#661b25", "#100709"],
            glow: "rgba(194, 53, 66, 0.56)"
        },

        profile: {
            geometric: 0.9,
            elegant: 0.3,
            playful: 0.2,
            expressive: 0.55,
            structured: 0.86,
            experimental: 0.18,
            modern: 0.82,
            classic: 0.38,
            readable: 0.9,
            bold: 0.98,
            friendly: 0.3,
            serious: 0.7,
            luxurious: 0.25,
            unconventional: 0.22
        }
    },

    {
        name: "Montserrat",
        className: "font-montserrat",
        description: "urban, stylish and in their own lane",

        palette: {
            colors: ["#2e9b9f", "#195c66", "#071013"],
            glow: "rgba(40, 166, 171, 0.54)"
        },

        profile: {
            geometric: 0.82,
            elegant: 0.48,
            playful: 0.35,
            expressive: 0.4,
            structured: 0.83,
            experimental: 0.3,
            modern: 0.94,
            classic: 0.3,
            readable: 0.91,
            bold: 0.65,
            friendly: 0.5,
            serious: 0.5,
            luxurious: 0.28,
            unconventional: 0.38
        }
    },

    {
        name: "Didot",
        className: "font-didot",
        description: "“Fashion is my passion”",

        palette: {
            colors: ["#c23f70", "#671c3c", "#12060c"],
            glow: "rgba(205, 52, 110, 0.58)"
        },

        profile: {
            geometric: 0.5,
            elegant: 1,
            playful: 0.25,
            expressive: 0.78,
            structured: 0.68,
            experimental: 0.38,
            modern: 0.7,
            classic: 0.85,
            readable: 0.74,
            bold: 0.65,
            friendly: 0.25,
            serious: 0.55,
            luxurious: 1,
            unconventional: 0.38
        }
    },

    {
        name: "Cooper Black",
        className: "font-cooper",
        description: "charming, playful, friendly, but will bite",

        palette: {
            colors: ["#e56b43", "#b43855", "#260d16"],
            glow: "rgba(232, 91, 61, 0.58)"
        },

        profile: {
            geometric: 0.18,
            elegant: 0.2,
            playful: 0.98,
            expressive: 0.86,
            structured: 0.28,
            experimental: 0.62,
            modern: 0.15,
            classic: 0.62,
            readable: 0.66,
            bold: 0.75,
            friendly: 1,
            serious: 0.12,
            luxurious: 0.15,
            unconventional: 0.72
        }
    },

    {
        name: "Bodoni",
        className: "font-bodoni",
        description: "luxurious, editorial, knows they’re better",

        palette: {
            colors: ["#c58a5c", "#741f2d", "#100507"],
            glow: "rgba(202, 119, 70, 0.55)"
        },

        profile: {
            geometric: 0.58,
            elegant: 1,
            playful: 0.15,
            expressive: 0.76,
            structured: 0.78,
            experimental: 0.34,
            modern: 0.6,
            classic: 0.98,
            readable: 0.74,
            bold: 0.72,
            friendly: 0.15,
            serious: 0.72,
            luxurious: 1,
            unconventional: 0.4
        }
    },

    {
        name: "Comic Sans",
        className: "font-comic",
        description: "fun, embodiment of informality, not invited anywhere",

        palette: {
            colors: ["#6fba64", "#335f30", "#091109"],
            glow: "rgba(95, 185, 90, 0.5)"
        },

        profile: {
            geometric: 0.1,
            elegant: 0.02,
            playful: 1,
            expressive: 0.72,
            structured: 0.12,
            experimental: 0.55,
            modern: 0.08,
            classic: 0.15,
            readable: 0.58,
            bold: 0.35,
            friendly: 0.98,
            serious: 0.02,
            luxurious: 0.01,
            unconventional: 0.88
        }
    },

    {
        name: "Chiller",
        className: "font-chiller",
        description: "alarming presence, likes to party but maybe a bit too much",

        palette: {
            colors: ["#a82c75", "#4e153f", "#0e050d"],
            glow: "rgba(171, 39, 120, 0.58)"
        },

        profile: {
            geometric: 0.02,
            elegant: 0.18,
            playful: 0.64,
            expressive: 0.95,
            structured: 0.02,
            experimental: 0.98,
            modern: 0.2,
            classic: 0.04,
            readable: 0.08,
            bold: 0.82,
            friendly: 0.25,
            serious: 0.04,
            luxurious: 0.08,
            unconventional: 1
        }
    },

    {
        name: "Hobo",
        className: "font-hobo",
        description: "unusual but appreciated, doesn’t have any straight lines",

        palette: {
            colors: ["#a98b47", "#5d4c25", "#0f0e08"],
            glow: "rgba(184, 151, 70, 0.48)"
        },

        profile: {
            geometric: 0.03,
            elegant: 0.3,
            playful: 0.72,
            expressive: 0.7,
            structured: 0.04,
            experimental: 0.82,
            modern: 0.2,
            classic: 0.2,
            readable: 0.28,
            bold: 0.55,
            friendly: 0.7,
            serious: 0.08,
            luxurious: 0.12,
            unconventional: 0.96
        }
    },

    {
        name: "Bubblegum",
        className: "font-bubblegum",
        description: "joyful, not edgy, sometimes cool",

        palette: {
            colors: ["#ed6fae", "#8c2c67", "#190814"],
            glow: "rgba(235, 91, 158, 0.55)"
        },

        profile: {
            geometric: 0.08,
            elegant: 0.12,
            playful: 1,
            expressive: 0.82,
            structured: 0.15,
            experimental: 0.4,
            modern: 0.35,
            classic: 0.15,
            readable: 0.48,
            bold: 0.48,
            friendly: 0.98,
            serious: 0.02,
            luxurious: 0.08,
            unconventional: 0.72
        }
    },

    {
        name: "Arial",
        className: "font-arial",
        description: "clean, modern, high readability",

        palette: {
            colors: ["#7397bd", "#40556f", "#0b0e13"],
            glow: "rgba(99, 140, 184, 0.45)"
        },

        profile: {
            geometric: 0.65,
            elegant: 0.2,
            playful: 0.1,
            expressive: 0.12,
            structured: 0.86,
            experimental: 0.06,
            modern: 0.72,
            classic: 0.54,
            readable: 1,
            bold: 0.25,
            friendly: 0.38,
            serious: 0.65,
            luxurious: 0.04,
            unconventional: 0.04
        }
    }

];


/* =========================================
   STATE
========================================= */

const state = {
    selectedQuestions: [],
    currentQuestion: 0,

    personality: createEmptyTraits(),

    isAnswering: false,

    currentResult: null,

    resultRunId: 0,

    currentScreen: "start",

    ambientEnabled: false,

    touchStartX: 0,
    touchStartY: 0
};


/* =========================================
   DOM
========================================= */

const app =
    document.getElementById("app");

const startScreen =
    document.getElementById("start-screen");

const introScreen =
    document.getElementById("intro-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const startArrow =
    document.getElementById("start-arrow");

const beginButton =
    document.getElementById("begin-button");

const restartButton =
    document.getElementById("restart-button");

const questionStage =
    document.querySelector(".question-stage");

const questionText =
    document.getElementById("question-text");

const questionNumber =
    document.getElementById("question-number");

const answerStatus =
    document.getElementById("answer-status");

const progressFill =
    document.getElementById("progress-fill");

const answerCards =
    Array.from(
        document.querySelectorAll(".answer-card")
    );

const resultFont =
    document.getElementById("result-font");

const resultDescription =
    document.getElementById("result-description");

const soundToggle =
    document.getElementById("sound-toggle");

const soundLabel =
    document.getElementById("sound-label");

const particleCanvas =
    document.getElementById("particle-canvas");

const particleContext =
    particleCanvas.getContext("2d");


/* =========================================
   SOUND
========================================= */

const ambientAudio =
    new Audio("ambient.mp3");

ambientAudio.loop = true;
ambientAudio.volume = 0.18;
ambientAudio.preload = "auto";

let audioAvailable = true;

ambientAudio.addEventListener("error", () => {
    audioAvailable = false;

    state.ambientEnabled = false;

    soundToggle.classList.remove("is-on");

    soundToggle.setAttribute(
        "aria-pressed",
        "false"
    );

    soundToggle.setAttribute(
        "aria-label",
        "Ambient sound unavailable"
    );

    soundLabel.textContent = "SOUND OFF";
});


/* =========================================
   HELPERS
========================================= */

function createEmptyTraits() {

    const traits = {};

    TRAITS.forEach(trait => {
        traits[trait] = 0;
    });

    return traits;
}


function clamp(value, min, max) {
    return Math.min(
        Math.max(value, min),
        max
    );
}


function shuffle(array) {

    const result = [...array];

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[randomIndex]
        ] = [
            result[randomIndex],
            result[i]
        ];
    }

    return result;
}


function delay(milliseconds) {

    return new Promise(resolve => {
        window.setTimeout(
            resolve,
            milliseconds
        );
    });
}


/* =========================================
   NAVIGATION
========================================= */

function setScreen(
    screenName,
    direction = "forward"
) {

    const screens = {
        start: startScreen,
        intro: introScreen,
        quiz: quizScreen,
        result: resultScreen
    };

    const targetScreen =
        screens[screenName];

    if (!targetScreen) {
        return;
    }

    Object.entries(screens).forEach(
        ([name, screen]) => {

            if (name === screenName) {

                screen.classList.remove(
                    "leaving"
                );

                screen.classList.add(
                    "active"
                );

            } else {

                screen.classList.remove(
                    "active"
                );

                if (
                    name === state.currentScreen
                ) {

                    screen.classList.add(
                        "leaving"
                    );

                    window.setTimeout(() => {

                        screen.classList.remove(
                            "leaving"
                        );

                    }, 950);
                }
            }
        }
    );

    state.currentScreen =
        screenName;

    if (direction === "back") {

        targetScreen.style.transform =
            "translate3d(0, -20px, 0) scale(0.99)";

        window.requestAnimationFrame(() => {
            targetScreen.style.transform = "";
        });

    } else {

        targetScreen.style.transform =
            "translate3d(0, 20px, 0) scale(0.99)";

        window.requestAnimationFrame(() => {
            targetScreen.style.transform = "";
        });
    }
}


function goToIntro() {

    if (
        state.currentScreen !== "start"
    ) {
        return;
    }

    setScreen(
        "intro",
        "forward"
    );
}


function goToStart() {

    if (
        state.currentScreen === "start"
    ) {
        return;
    }

    resetQuizState();

    resetAtmosphere();

    setScreen(
        "start",
        "back"
    );

    window.scrollTo(0, 0);

    startScreen.scrollTop = 0;
    introScreen.scrollTop = 0;
    quizScreen.scrollTop = 0;
    resultScreen.scrollTop = 0;
}


/* =========================================
   QUIZ
========================================= */

function startQuiz() {

    resetQuizState();

    /*
        Exactly 10 unique questions
        are selected from the 21.
    */

    state.selectedQuestions =
        shuffle(questions).slice(0, 10);

    state.currentQuestion = 0;

    setScreen(
        "quiz",
        "forward"
    );

    resetQuestionCards();

    renderQuestion();

    startAmbientSound();

    window.scrollTo(0, 0);
}


function resetQuizState() {

    state.selectedQuestions = [];

    state.currentQuestion = 0;

    state.personality =
        createEmptyTraits();

    state.isAnswering = false;

    state.currentResult = null;

    state.resultRunId++;

    answerStatus.textContent =
        "Choose your sign";

    answerStatus.classList.remove(
        "is-selected"
    );

    questionStage.classList.remove(
        "is-changing"
    );

    resultScreen.className =
        "screen result-screen";

    resetQuestionCards();
}


function renderQuestion() {

    const question =
        state.selectedQuestions[
            state.currentQuestion
        ];

    if (!question) {
        return;
    }

    const number =
        state.currentQuestion + 1;

    questionStage.classList.add(
        "is-changing"
    );

    window.setTimeout(() => {

        questionText.textContent =
            question.question;

        questionNumber.textContent =
            String(number).padStart(2, "0");

        progressFill.style.width =
            `${(number / 10) * 100}%`;

        answerStatus.textContent =
            "Choose your sign";

        answerStatus.classList.remove(
            "is-selected"
        );

        answerCards.forEach(card => {

            const answer =
                card.dataset.answer;

            const answerText =
                card.querySelector(
                    ".answer-text"
                );

            answerText.textContent =
                question.answers[answer];

            card.setAttribute(
                "aria-label",
                `Answer ${answer}: ${question.answers[answer]}`
            );
        });

        resetQuestionCards();

        questionStage.classList.remove(
            "is-changing"
        );

    }, 230);
}


function resetQuestionCards() {

    answerCards.forEach(card => {

        card.disabled = false;

        card.classList.remove(
            "is-selected",
            "is-dimmed"
        );

        card.setAttribute(
            "aria-disabled",
            "false"
        );
    });
}


async function answerQuestion(answer) {

    if (state.isAnswering) {
        return;
    }

    if (
        state.currentQuestion >=
        state.selectedQuestions.length
    ) {
        return;
    }

    state.isAnswering = true;

    const selectedCard =
        answerCards.find(
            card =>
                card.dataset.answer === answer
        );

    if (!selectedCard) {
        state.isAnswering = false;
        return;
    }

    answerCards.forEach(card => {

        card.disabled = true;

        card.setAttribute(
            "aria-disabled",
            "true"
        );

        if (card === selectedCard) {

            card.classList.add(
                "is-selected"
            );

        } else {

            card.classList.add(
                "is-dimmed"
            );
        }
    });

    answerStatus.textContent =
        "The sign is recorded…";

    answerStatus.classList.add(
        "is-selected"
    );

    addAnswerToPersonality(
        state.currentQuestion,
        answer
    );

    await delay(
        prefersReducedMotion()
            ? 100
            : 620
    );

    state.currentQuestion++;

    if (
        state.currentQuestion >=
        state.selectedQuestions.length
    ) {

        showResult();

        return;
    }

    state.isAnswering = false;

    renderQuestion();
}


/* =========================================
   SCORING
========================================= */

function addTraitValue(
    target,
    trait,
    value
) {

    if (
        Object.prototype.hasOwnProperty.call(
            target,
            trait
        )
    ) {

        target[trait] += value;

        return;
    }

    /*
        Trait aliases make it possible to use
        more natural answer descriptions such
        as "reliable" without adding a new
        dimension to every typeface.
    */

    const alias =
        TRAIT_ALIASES[trait];

    if (!alias) {
        return;
    }

    Object.entries(alias).forEach(
        ([mappedTrait, multiplier]) => {

            if (
                Object.prototype.hasOwnProperty.call(
                    target,
                    mappedTrait
                )
            ) {

                target[mappedTrait] +=
                    value * multiplier;
            }
        }
    );
}


function addAnswerToPersonality(
    questionIndex,
    answer
) {

    const baseTraits =
        ANSWER_TRAITS[answer] || {};

    Object.entries(baseTraits).forEach(
        ([trait, value]) => {

            addTraitValue(
                state.personality,
                trait,
                value
            );
        }
    );


    const questionNumber =
        questionIndex + 1;

    const overrides =
        ANSWER_OVERRIDES[
            questionNumber
        ]?.[answer] || {};

    Object.entries(overrides).forEach(
        ([trait, value]) => {

            addTraitValue(
                state.personality,
                trait,
                value
            );
        }
    );
}


function normalizePersonality(
    personality
) {

    const normalized =
        createEmptyTraits();

    const maxValue =
        Math.max(
            ...Object.values(personality),
            1
        );

    TRAITS.forEach(trait => {

        normalized[trait] =
            personality[trait] /
            maxValue;
    });

    return normalized;
}


function calculateSimilarity(
    userProfile,
    typefaceProfile
) {

    /*
        Weighted similarity.

        The user vector and typeface vector
        are compared trait-by-trait.

        A score of 1 means extremely similar.
        A score of 0 means extremely different.
    */

    let totalDifference = 0;

    let totalWeight = 0;

    TRAITS.forEach(trait => {

        const userValue =
            userProfile[trait] ?? 0;

        const fontValue =
            typefaceProfile[trait] ?? 0;

        /*
            More distinctive traits receive
            slightly more influence.
        */

        const weight =
            1 + fontValue;

        totalDifference +=
            Math.abs(
                userValue - fontValue
            ) * weight;

        totalWeight += weight;
    });

    if (totalWeight === 0) {
        return 0;
    }

    return clamp(
        1 -
        (
            totalDifference /
            totalWeight
        ),
        0,
        1
    );
}


function calculateResult() {

    const normalizedPersonality =
        normalizePersonality(
            state.personality
        );

    const scoredFonts =
        typefaces.map(typeface => {

            const similarity =
                calculateSimilarity(
                    normalizedPersonality,
                    typeface.profile
                );

            return {
                typeface,
                similarity
            };
        });

    /*
        Sort only for internal selection.

        A tiny deterministic tie-breaker
        based on the profile itself prevents
        equal scores from depending on
        browser sort implementation details.
    */

    scoredFonts.sort((a, b) => {

        if (
            Math.abs(
                b.similarity -
                a.similarity
            ) > 0.000001
        ) {

            return (
                b.similarity -
                a.similarity
            );
        }

        return (
            a.typeface.name.localeCompare(
                b.typeface.name
            )
        );
    });

    return scoredFonts[0].typeface;
}


/* =========================================
   RESULT
========================================= */

function showResult() {

    state.isAnswering = true;

    const result =
        calculateResult();

    state.currentResult =
        result;

    setScreen(
        "result",
        "forward"
    );

    applyResult(result);

    startResultReveal();
}


function clearFontClasses() {

    typefaces.forEach(typeface => {

        resultFont.classList.remove(
            typeface.className
        );
    });
}


function applyResult(result) {

    clearFontClasses();

    resultFont.classList.add(
        result.className
    );

    resultFont.textContent =
        result.name;

    resultDescription.textContent =
        result.description;

    /*
        Reset all possible result atmosphere
        classes before applying the new one.
    */

    typefaces.forEach(typeface => {

        app.classList.remove(
            `result-${getResultClassName(typeface)}`
        );
    });

    const resultClass =
        getResultClassName(result);

    app.classList.add(
        `result-${resultClass}`
    );

    applyResultPalette(
        result.palette
    );
}


function getResultClassName(typeface) {

    return typeface.className
        .replace("font-", "");
}


function applyResultPalette(
    palette
) {

    if (!palette) {
        return;
    }

    const variation =
        createPaletteVariation(
            palette.colors
        );

    app.style.setProperty(
        "--result-glow",
        palette.glow
    );

    app.style.setProperty(
        "--result-color-a",
        variation[0]
    );

    app.style.setProperty(
        "--result-color-b",
        variation[1]
    );

    app.style.setProperty(
        "--result-color-c",
        variation[2]
    );

    /*
        A smooth overlay is created through
        CSS variables rather than replacing
        the entire background immediately.
    */

    app.style.background = `
        radial-gradient(
            circle at 50% 46%,
            ${hexToRgba(variation[0], 0.17)},
            transparent 45%
        ),
        radial-gradient(
            circle at 70% 25%,
            ${hexToRgba(variation[1], 0.08)},
            transparent 32%
        ),
        linear-gradient(
            135deg,
            ${variation[2]},
            ${darkenHex(variation[1], 0.62)},
            #09070d
        )
    `;
}


function createPaletteVariation(colors) {

    return colors.map(color => {

        const variation =
            (Math.random() - 0.5) * 14;

        return adjustHex(
            color,
            variation
        );
    });
}


function hexToRgba(
    hex,
    alpha
) {

    const clean =
        hex.replace("#", "");

    if (clean.length !== 6) {
        return `rgba(255,255,255,${alpha})`;
    }

    const r =
        parseInt(
            clean.substring(0, 2),
            16
        );

    const g =
        parseInt(
            clean.substring(2, 4),
            16
        );

    const b =
        parseInt(
            clean.substring(4, 6),
            16
        );

    return `rgba(${r},${g},${b},${alpha})`;
}


function adjustHex(
    hex,
    amount
) {

    const clean =
        hex.replace("#", "");

    if (clean.length !== 6) {
        return hex;
    }

    const r =
        clamp(
            parseInt(
                clean.substring(0, 2),
                16
            ) + amount,
            0,
            255
        );

    const g =
        clamp(
            parseInt(
                clean.substring(2, 4),
                16
            ) + amount,
            0,
            255
        );

    const b =
        clamp(
            parseInt(
                clean.substring(4, 6),
                16
            ) + amount,
            0,
            255
        );

    return (
        "#" +
        [r, g, b]
            .map(value =>
                Math.round(value)
                    .toString(16)
                    .padStart(2, "0")
            )
            .join("")
    );
}


function darkenHex(
    hex,
    factor
) {

    const clean =
        hex.replace("#", "");

    if (clean.length !== 6) {
        return hex;
    }

    const r =
        Math.round(
            parseInt(
                clean.substring(0, 2),
                16
            ) * factor
        );

    const g =
        Math.round(
            parseInt(
                clean.substring(2, 4),
                16
            ) * factor
        );

    const b =
        Math.round(
            parseInt(
                clean.substring(4, 6),
                16
            ) * factor
        );

    return (
        "#" +
        [r, g, b]
            .map(value =>
                clamp(value, 0, 255)
                    .toString(16)
                    .padStart(2, "0")
            )
            .join("")
    );
}


/* =========================================
   RESULT REVEAL
========================================= */

async function startResultReveal() {

    const runId =
        ++state.resultRunId;

    resultScreen.className =
        "screen result-screen active";

    /*
        Stage 1:
        background and heading.
    */

    await delay(
        prefersReducedMotion()
            ? 50
            : 250
    );

    if (runId !== state.resultRunId) {
        return;
    }

    resultScreen.classList.add(
        "reveal-stage-1"
    );

    /*
        Stage 2:
        crystal ball appears.
    */

    await delay(
        prefersReducedMotion()
            ? 50
            : 900
    );

    if (runId !== state.resultRunId) {
        return;
    }

    resultScreen.classList.add(
        "reveal-stage-2"
    );

    /*
        Stage 3:
        glow and particles.
    */

    await delay(
        prefersReducedMotion()
            ? 50
            : 850
    );

    if (runId !== state.resultRunId) {
        return;
    }

    resultScreen.classList.add(
        "reveal-stage-3"
    );

    particleSystem.setIntensity(
        prefersReducedMotion()
            ? 0.5
            : 1.55
    );

    /*
        Stage 4:
        small "type revealed" text.
    */

    await delay(
        prefersReducedMotion()
            ? 50
            : 700
    );

    if (runId !== state.resultRunId) {
        return;
    }

    resultScreen.classList.add(
        "reveal-stage-4"
    );

    /*
        Stage 5:
        font materializes.
    */

    await delay(
        prefersReducedMotion()
            ? 50
            : 850
    );

    if (runId !== state.resultRunId) {
        return;
    }

    resultScreen.classList.add(
        "reveal-stage-5"
    );

    /*
        Stage 6:
        description and restart button.
    */

    await delay(
        prefersReducedMotion()
            ? 50
            : 1150
    );

    if (runId !== state.resultRunId) {
        return;
    }

    resultScreen.classList.add(
        "reveal-stage-6"
    );

    state.isAnswering = false;
}


/* =========================================
   RESET ATMOSPHERE
========================================= */

function resetAtmosphere() {

    typefaces.forEach(typeface => {

        app.classList.remove(
            `result-${getResultClassName(typeface)}`
        );
    });

    app.style.removeProperty(
        "background"
    );

    app.style.removeProperty(
        "--result-glow"
    );

    app.style.removeProperty(
        "--result-color-a"
    );

    app.style.removeProperty(
        "--result-color-b"
    );

    particleSystem.setIntensity(1);
}


/* =========================================
   PARTICLE SYSTEM
========================================= */

const particleSystem = {

    particles: [],

    width: 0,

    height: 0,

    intensity: 1,

    lastTime: 0,

    initialize() {

        this.resize();

        window.addEventListener(
            "resize",
            () => this.resize(),
            { passive: true }
        );

        this.createParticles();

        window.requestAnimationFrame(
            time => this.animate(time)
        );
    },


    resize() {

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );

        this.width =
            window.innerWidth;

        this.height =
            window.innerHeight;

        particleCanvas.width =
            this.width * dpr;

        particleCanvas.height =
            this.height * dpr;

        particleCanvas.style.width =
            `${this.width}px`;

        particleCanvas.style.height =
            `${this.height}px`;

        particleContext.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );
    },


    createParticles() {

        const count =
            Math.min(
                110,
                Math.max(
                    48,
                    Math.floor(
                        window.innerWidth / 11
                    )
                )
            );

        this.particles =
            Array.from(
                { length: count },
                () => this.createParticle()
            );
    },


    createParticle() {

        return {
            x:
                Math.random() *
                window.innerWidth,

            y:
                Math.random() *
                window.innerHeight,

            radius:
                Math.random() *
                1.25 +
                0.2,

            alpha:
                Math.random() *
                0.5 +
                0.08,

            speedX:
                (Math.random() - 0.5) *
                0.08,

            speedY:
                -(Math.random() *
                0.08 +
                0.012),

            twinkle:
                Math.random() *
                Math.PI *
                2,

            twinkleSpeed:
                Math.random() *
                0.012 +
                0.002
        };
    },


    setIntensity(value) {

        this.intensity = value;
    },


    animate(time) {

        const delta =
            Math.min(
                time - this.lastTime,
                50
            );

        this.lastTime = time;

        particleContext.clearRect(
            0,
            0,
            this.width,
            this.height
        );

        const reduced =
            prefersReducedMotion();

        const speedMultiplier =
            reduced
                ? 0.25
                : this.intensity;

        this.particles.forEach(
            particle => {

                particle.x +=
                    particle.speedX *
                    delta *
                    speedMultiplier;

                particle.y +=
                    particle.speedY *
                    delta *
                    speedMultiplier;

                particle.twinkle +=
                    particle.twinkleSpeed *
                    delta *
                    speedMultiplier;

                if (
                    particle.y < -10
                ) {
                    particle.y =
                        this.height + 10;

                    particle.x =
                        Math.random() *
                        this.width;
                }

                if (
                    particle.x < -10
                ) {
                    particle.x =
                        this.width + 10;
                }

                if (
                    particle.x >
                    this.width + 10
                ) {
                    particle.x = -10;
                }

                const pulse =
                    (
                        Math.sin(
                            particle.twinkle
                        ) + 1
                    ) / 2;

                const alpha =
                    particle.alpha *
                    (
                        0.5 +
                        pulse * 0.7
                    ) *
                    this.intensity;

                particleContext.beginPath();

                particleContext.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2
                );

                particleContext.fillStyle =
                    `rgba(232, 217, 188, ${clamp(
                        alpha,
                        0,
                        0.9
                    )})`;

                particleContext.shadowBlur =
                    this.intensity > 1.2
                        ? 8
                        : 4;

                particleContext.shadowColor =
                    "rgba(185, 143, 235, 0.65)";

                particleContext.fill();
            }
        );

        particleContext.shadowBlur = 0;

        window.requestAnimationFrame(
            nextTime =>
                this.animate(nextTime)
        );
    }
};

particleSystem.initialize();


/* =========================================
   SOUND FUNCTIONS
========================================= */

async function startAmbientSound() {

    if (
        !audioAvailable ||
        !ambientAudio
    ) {
        return;
    }

    try {

        await ambientAudio.play();

        state.ambientEnabled = true;

        updateSoundButton();

    } catch (error) {

        /*
            Browsers can reject playback even
            after interaction depending on their
            current audio policy.

            The site continues normally.
        */

        state.ambientEnabled = false;

        updateSoundButton();
    }
}


function stopAmbientSound() {

    if (!ambientAudio) {
        return;
    }

    ambientAudio.pause();

    /*
        Keep the current playback position so
        turning sound back on feels natural.
    */

    state.ambientEnabled = false;

    updateSoundButton();
}


async function toggleAmbientSound() {

    if (!audioAvailable) {
        return;
    }

    if (state.ambientEnabled) {

        stopAmbientSound();

        return;
    }

    try {

        await ambientAudio.play();

        state.ambientEnabled = true;

    } catch (error) {

        state.ambientEnabled = false;
    }

    updateSoundButton();
}


function updateSoundButton() {

    const enabled =
        state.ambientEnabled;

    soundToggle.classList.toggle(
        "is-on",
        enabled
    );

    soundToggle.setAttribute(
        "aria-pressed",
        String(enabled)
    );

    soundToggle.setAttribute(
        "aria-label",
        enabled
            ? "Turn ambient sound off"
            : "Turn ambient sound on"
    );

    soundLabel.textContent =
        enabled
            ? "SOUND ON"
            : "SOUND OFF";
}


/* =========================================
   TOUCH / SWIPE
========================================= */

function handleTouchStart(event) {

    const touch =
        event.changedTouches[0];

    state.touchStartX =
        touch.clientX;

    state.touchStartY =
        touch.clientY;
}


function handleTouchEnd(event) {

    const touch =
        event.changedTouches[0];

    const deltaX =
        touch.clientX -
        state.touchStartX;

    const deltaY =
        touch.clientY -
        state.touchStartY;

    const minimumSwipe =
        55;

    if (
        Math.abs(deltaY) <
        minimumSwipe
    ) {
        return;
    }

    if (
        Math.abs(deltaY) <
        Math.abs(deltaX)
    ) {
        return;
    }

    if (
        state.currentScreen === "start" &&
        deltaY < 0
    ) {

        goToIntro();

        return;
    }

    if (
        state.currentScreen === "intro" &&
        deltaY > 0
    ) {

        goToStart();
    }
}


/* =========================================
   KEYBOARD NAVIGATION
========================================= */

function handleKeyboard(event) {

    if (
        event.key === "ArrowDown" ||
        event.key === "PageDown"
    ) {

        if (
            state.currentScreen === "start"
        ) {

            event.preventDefault();

            goToIntro();

            return;
        }
    }


    if (
        event.key === "ArrowUp" ||
        event.key === "PageUp"
    ) {

        if (
            state.currentScreen === "intro"
        ) {

            event.preventDefault();

            goToStart();

            return;
        }
    }


    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        if (
            state.currentScreen === "start"
        ) {

            event.preventDefault();

            goToIntro();

            return;
        }
    }


    if (
        event.key === "Escape"
    ) {

        if (
            state.currentScreen === "intro"
        ) {

            goToStart();
        }
    }
}


/* =========================================
   MOUSE WHEEL NAVIGATION
========================================= */

let wheelLock = false;

function handleWheel(event) {

    if (wheelLock) {
        return;
    }

    if (
        state.currentScreen === "start" &&
        event.deltaY > 25
    ) {

        wheelLock = true;

        goToIntro();

        window.setTimeout(() => {
            wheelLock = false;
        }, 900);

        return;
    }

    if (
        state.currentScreen === "intro" &&
        event.deltaY < -25
    ) {

        wheelLock = true;

        goToStart();

        window.setTimeout(() => {
            wheelLock = false;
        }, 900);
    }
}


/* =========================================
   REDUCED MOTION
========================================= */

function prefersReducedMotion() {

    return window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
}


/* =========================================
   EVENTS
========================================= */

startArrow.addEventListener(
    "click",
    goToIntro
);

beginButton.addEventListener(
    "click",
    startQuiz
);

restartButton.addEventListener(
    "click",
    goToStart
);

soundToggle.addEventListener(
    "click",
    toggleAmbientSound
);


answerCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const answer =
                card.dataset.answer;

            answerQuestion(answer);
        }
    );
});


document.addEventListener(
    "keydown",
    handleKeyboard
);

document.addEventListener(
    "touchstart",
    handleTouchStart,
    { passive: true }
);

document.addEventListener(
    "touchend",
    handleTouchEnd,
    { passive: true }
);

document.addEventListener(
    "wheel",
    handleWheel,
    { passive: true }
);


/* =========================================
   INITIAL STATE
========================================= */

resetQuizState();

resetAtmosphere();

setScreen(
    "start",
    "forward"
);

updateSoundButton();
