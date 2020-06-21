const qBank = [
    {
      question:
      "What is the derivative of Acceleration with respect to time?",
      answers: ["Jerk", "Shift", "Bump", "Slide"],
      correct: "Jerk",
      questionId: "099099"
    },
    {
      question: "How many zeptometres are inside one femtometre?",
      answers: [
        "10",
        "1,000,000,000",
        "1000","1,000,000"
      ],
      correct: "1,000,000",
      questionId: "183452"
    },
    {
      question:
        "Which company did Valve cooperate with in the creation of the Vive?",
      answers: ["HTC", "Oculus", "Google", "Razer"],
      correct: "HTC",
      questionId: "267908"
    },
    {
      "question": "The binary number 101001101 is equivalent to the Decimal number 334 ",
      correct: "False",
      answers: [
        "True","False"
      ],
      questionId: "333247"
    },
    {
      question: "If you could fold a piece of paper in half 50 times, its&#039; thickness will be 3/4th the distance from the Earth to the Sun.",
      
      answers: [
        "False","True"
      ],
      correct:"True",
      questionId: "496293"
    },
    {
      question: "The decimal number 31 in hexadecimal would be what?",
       
      answers: [
        "3D",
        "2E",
        "1B",
        "1F"
      ],
      correct:"1F",
      questionId: "588909"
    },
    {
      question: "Which of these numbers is closest to the total number of possible states for an army standard Enigma Machine?",
      correct: "1.58 x 10^20",
      answers: [
        "1.58 x 10^22",
        "1.58 x  10^18",
        "1.58 x 10^24",
        "1.58 x 10^20"
      ],
      questionId: "648452"
    },
    {
      question: "What is the molecular formula of Glucose?",
      correct: "C6H12O6",
      answers: [
        "C2H4O2",
        "K+",
        "CH4",
        "C6H12O6"
      ],
      questionId: "786649"
    },
    {
      question: "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
      correct: "Haplogroup U",
      answers: [
        "Haplogroup L",
        "Haplogroup T",
        "Haplogroup J",
        "Haplogroup U"
      ],
      questionId: "839754"
    },
    {
      question: "The value of one Calorie is different than the value of one calorie.",
      correct: "True",
      answers: [
        "False","True"
      ],
      questionId: "98390"
    },
    {
      question: "Which of the following is NOT a word used to describe an earthquake?",
      correct: "Drop-slide",
      answers: [
        "Foreshock",
        "Strike-slip",
        "Temblor",
        "Drop-slide"
      ],
      questionId: "1071006"
    },
    {
      question: "Which scientific unit is named after an Italian nobleman?",
      correct: "Volt",
      answers: [
        "Pascal",
        "Ohm",
        "Hertz",
        "Volt"
      ],
      questionId: "1174154"
    },
    {
      question: "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
      correct: "Micronesia",
      answers: [
        "Fiji",
        "Tuvalu",
        "Marshall Islands",
        "Micronesia"
      ],
      questionId: "1226535"
    },
    {
      question: "Which of these names was an actual codename for a cancelled Microsoft project?",
      correct: "Neptune",
      answers: [
        "Enceladus",
        "Pollux",
        "Saturn",
        "Neptune"
      ],
      questionId: "1310938"
    },
    {
      question: "Which of the following is the oldest of these computers by release date?",
      correct: "TRS-80",
      answers: [
        "Commodore 64",
        "ZX Spectrum",
        "Apple 3",
        "TRS-80"
      ],
      questionId: "1436873"
    },
    {
      question: "Which of these is not a key value of Agile software development?",
      correct: "Comprehensive documentation",
      answers: [
        "Individuals and interactions",
        "Customer collaboration",
        "Responding to change",
        "Comprehensive documentation"
      ],
      questionId: "1515110"
    },
     
  ];
  
  export default (n = 1) =>
    Promise.resolve(qBank.sort(() => 0.1 - Math.random()).slice(0, n));
  