const quesJSON = [
  {
    correctAnswer: 'alt',
    options: ['title', 'alt', 'aria-label', 'placeholder'],
    question: 'In HTML, which attribute is used to provide alternate text for an image if the image cannot be displayed?',
  },
  {
    correctAnswer: 'z-index',
    options: ['order', 'z-index', 'stacking', 'position-order'],
    question: 'In CSS, which property controls the stacking order of positioned',
  },

  {
    correctAnswer: 'object',
    options: ['null', 'object', 'undefined', 'boolean'],
    question: 'In JavaScript, what is the result of typeof null?',
  },
  {
    correctAnswer: '<link rel="stylesheet" href="styles.css">',
    options: [
      '<style src="styles.css">',
      '<css href="styles.css">',
      '<link rel="stylesheet" href="styles.css">',
      '<script href="styles.css"></script>',
    ],
    question: 'What is the correct way to link an external CSS file in HTML?',
  },
  {
    correctAnswer: '<article>',
    options: ['<section>', '<div>', '<article>', '<span>'],
    question: 'Which HTML element is semantic and typically used for self-contained content like a blog post or news item?',
  },
  {
    correctAnswer: 'let count = 0;',
    options: [
      'var count = 0;',
      'let count = 0;',
      'const count;',
      'variable count = 0',
    ],
    question: 'Which statement correctly creates a block-scoped variable in JavaScript?',
  },
  {
    correctAnswer: 'div > p',
    options: ['div P', 'div > p', 'div + p', 'div ~ p'],
    question: 'Which CSS selector targets all <p> elements that are direct children of a <div>?',
  },
  {
    correctAnswer: 'document.querySelector()',
    options: [
      'document.getElementById()',
      'document.getElementsByClassName()',
      'document.querySelector()',
      'document.querySelectorAll()',
    ],
    question: 'In the DOM, which method selects the first element that matches a CSS selector?',
  },
  {
    correctAnswer: 'inline',
    options: ['block', 'inline', 'inline-block', 'flex'],
    question: 'What is the initial (default) value of the CSS display property for a <span>?',
  },

  {
    correctAnswer: 'A new array with the results of calling a function on every element',
    options: [
      'A new array with the results of calling a function on every element',
      'The first element that matches a condition',
      'The first element that matches a condition',
      'A number representing the length of the array',
    ],
    question: 'What does the Array.prototype.map() method return?',
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

//Accessing all the elements:
const questionEl = document.getElementById ('question');
const optionEl = document.getElementById ('options');
const scoreEl = document.getElementById ('score');
const nextEl = document.getElementById ('next');

showQuestion ();

function showQuestion () {
  // Destructuring the object
  const {correctAnswer, options, question} = quesJSON[currentQuestion];

  //Setting question text content
  questionEl.textContent = question;

  const shuffledOptions = shuffleOptions (options);

  //Populating the Options div with the buttons.
  shuffledOptions.forEach (opt => {
    const btn = document.createElement ('button');
    btn.textContent = opt;
    optionEl.appendChild (btn);

    // Event handling on the button:
    btn.addEventListener ('click', () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion ();
    });
  });
}

function nextQuestion () {
  currentQuestion++;
  optionEl.textContent = '';
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = 'Quiz Completed!!';
    nextEl.remove ();
  } else {
    showQuestion ();
  }
}

//Shuffling the Options
function shuffleOptions (options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor (Math.random () * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
