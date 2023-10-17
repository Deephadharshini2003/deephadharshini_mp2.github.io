// const personalityButton = document.getElementById('start-personality-button');
// const interestButton = document.getElementById('start-interest-button');
// const nextButton = document.getElementById('next-button');
// const questionElement = document.getElementById('question');
// const optionsElement = document.getElementById('options');
// const resultElement = document.getElementById('result');

// let currentQuestion = 0;
// let totalScore = 0;
// let currentQuestions = [];

// const questions = {
//     personality: [
//         {
//             question: "What is your approach to solving problems?",
//             options: ["Logical and Analytical", "Creative and Intuitive", "Collaborative and Social", "Careful and Systematic"],
//             scores: [4, 3, 2, 1]
//         },
//         {
//             question: "How do you handle stressful situations?",
//             options: ["Stay Calm and Rationalize", "Find Creative Solutions", "Talk to Friends or Colleagues", "Follow a Well-Planned Approach"],
//             scores: [4, 3, 2, 1]
//         },
//         {
//             question: "What type of work environment do you prefer?",
//             options: ["Structured and Organized", "Dynamic and Innovative", "Supportive and Friendly", "Steady and Predictable"],
//             scores: [4, 3, 2, 1]
//         }
//     ],
//     interest: [
//         {
//             question: "What kind of activities do you enjoy in your free time?",
//             options: ["Reading and Learning", "Art and Creativity", "Socializing and Networking", "Outdoor Activities"],
//             scores: [4, 3, 2, 1]
//         },
//         {
//             question: "Which of the following topics are you most interested in?",
//             options: ["Technology and Science", "Arts and Literature", "Social Sciences and Humanities", "Nature and Environment"],
//             scores: [4, 3, 2, 1]
//         },
//         {
//             question: "What hobbies or activities make you lose track of time?",
//             options: ["Programming or Building Things", "Drawing or Writing", "Volunteering or Helping Others", "Hiking or Gardening"],
//             scores: [4, 3, 2, 1]
//         }
//     ]
// };

// function startQuiz(questionType) {
//     currentQuestions = questions[questionType];
//     personalityButton.classList.add('hide');
//     interestButton.classList.add('hide');
//     nextButton.classList.remove('hide');
//     currentQuestion = 0;
//     totalScore = 0;
//     showQuestion();
// }

// function showQuestion() {
//     const question = currentQuestions[currentQuestion];
//     questionElement.innerText = question.question;
//     optionsElement.innerHTML = '';
//     question.options.forEach((option, index) => {
//         const button = document.createElement('button');
//         button.innerText = option;
//         button.classList.add('option-button');
//         button.addEventListener('click', () => selectOption(index));
//         optionsElement.appendChild(button);
//     });
// }

// function selectOption(optionIndex) {
//     totalScore += currentQuestions[currentQuestion].scores[optionIndex];
//     currentQuestion++;
//     if (currentQuestion < currentQuestions.length) {
//         showQuestion();
//     } else {
//         showResult();
//     }
// }

// function showResult() {
//     questionElement.innerText = '';
//     optionsElement.innerHTML = '';
//     nextButton.classList.add('hide');
//     resultElement.innerText = getResultMessage(totalScore);
// }

// function getResultMessage(score) {
//     let specialization = '';
//     let colleges = '';

//     if (score >= 10) {
//         specialization = 'Science or Engineering';
//         colleges = 'Specialized colleges such as MIT, Stanford, or Caltech.';
//     } else if (score >= 7) {
//         specialization = 'Arts or Literature';
//         colleges = 'Specialized colleges such as Harvard, Oxford, or Yale.';
//     } else if (score >= 4) {
//         specialization = 'Social Sciences or Education';
//         colleges = 'Specialized colleges such as Cambridge, Berkeley, or London School of Economics.';
//     } else {
//         specialization = 'Computer Science or Information Technology';
//         colleges = 'Specialized colleges such as Carnegie Mellon, MIT, or University of California, Berkeley.';
//     }

//     return `Based on your combined score, you might consider a career in ${specialization}. ${colleges}`;
// }

// personalityButton.addEventListener('click', () => startQuiz('personality'));
// interestButton.addEventListener('click', () => startQuiz('interest'));


const personalityButton = document.getElementById('start-personality-button');
const interestButton = document.getElementById('start-interest-button');
const nextButton = document.getElementById('next-button');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let totalScore = 0;
let currentQuestions = [];

const questions = {
    personality: [
        {
                        question: "What aspect of science or engineering interests you the most",
                        options: ["physics", "litreature", "biology", "Technology"],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "Are you interested in psychology and understanding the human mind and emotions?",
                        options: ["Yes, I'm very interested in psychology!", "it's interesting", "not my preference", "Not at all"],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "Do you enjoy exploring different art forms, such as painting, sculpture, music, or theater?",
                        options: ["Absolutely, I love artistic expressions!", " It's interesting", " It's not my preference", " Not at all"],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "Do you find programming languages intriguing and enjoy coding?",
                        options: ["physics", "litreature", "biology", "Technology"],
                        scores: [4, 3, 2, 1]
                    },

    ],
    interest: [
        {
                        question: "When faced with a problem, how do you prefer to approach it?",
                        options: ["Analyze the problem logically and find a systematic solution.", " Think creatively and consider innovative approaches.", " Collaborate with others and seek different perspectives.", " Plan carefully, breaking the problem into smaller steps."],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "How do you express your emotions and thoughts?",
                        options: ["Through writing, analyzing emotions and ideas in depth.", "Arts and LiteratureThrough creative arts, painting, music, or other artistic form", "Through discussions, sharing experiences, and connecting with others emotionally.", " Through storytelling, combining imagination and real-life experiences."],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "How do you approach understanding people's behavior and motivations?",
                        options: ["Analyze patterns and psychological theories to understand behavior.", "Appreciate artistic expressions and creative ways people express themselves.", " Empathize with their experiences and connect emotionally.", "Study societal structures and how education impacts communities"],
                        scores: [4, 3, 2, 1]
                    },
                    {
                        question: "How do you approach learning new technologies or programming languages?",
                        options: ["Building efficient systems, optimizing algorithms, and solving computational challenges",
                         " Creating interactive and visually appealing digital experiences.", 
                         " Collaborating on projects with diverse teams, learning from others' expertise.", 
                         " Designing user-friendly interfaces and improving user experiences."],
                        scores: [4, 3, 2, 1]
                    }
    ]
};

function startQuiz(questionType) {
    currentQuestions = questions[questionType];
    personalityButton.classList.add('hide');
    interestButton.classList.add('hide');
    nextButton.classList.remove('hide');
    currentQuestion = 0;
    totalScore = 0;
    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestion];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(optionIndex) {
    totalScore += currentQuestions[currentQuestion].scores[optionIndex];
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.innerText = '';
    optionsElement.innerHTML = '';
    nextButton.classList.add('hide');
    resultElement.innerText = getResultMessage(totalScore);
}

function getResultMessage(score) {
    let specialization = '';
    //     let colleges = '';
    
        if (score >= 10) {
            specialization = 'Science or Engineering';
            colleges = 'Specialized colleges such as MIT, Stanford, or Caltech.';
        } else if (score >= 7) {
            specialization = 'Arts or Literature';
            colleges = 'Specialized colleges such as Harvard, Oxford, or Yale.';
        } else if (score >= 4) {
            specialization = 'Social Sciences or Education';
            colleges = 'Specialized colleges such as Cambridge, Berkeley, or London School of Economics.';
        } else {
            specialization = 'Computer Science or Information Technology';
            colleges = 'Specialized colleges such as Carnegie Mellon, MIT, or University of California, Berkeley.';
        }
    
        return `Based on your combined score, you might consider a career in ${specialization}. ${colleges}`;
    
}

personalityButton.addEventListener('click', () => startQuiz('personality'));
interestButton.addEventListener('click', () => startQuiz('interest'));
