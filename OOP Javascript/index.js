///////////////////////////////////////////////////////////////////////////////
// FUNCTION CONSTRUCTOR ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let israel = {
//     name        : 'Israel',
//     yearOfBirth : 1989,
//     job         : 'web content dev'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calcAge = () => {
//     //     console.log(2019 - this.yearOfBirth);
//     // };
// };  // No se puede hacer en Arrow Function, pierde la propiedad de ser un constructor de objetos. 

// Person.prototype.calcAge = function () { console.log(2019 - this.yearOfBirth);};
// Person.prototype.lastName = 'Smith';


// israel = new Person('Israel', 1989, 'Web Dev');
// let sebas = new Person('Sebastián', 1992, 'Veterinario');
// let esteban = new Person('Esteban', 1995, 'Administrador');



///////////////////////////////////////////////////////////////////////////////
// INHERITANCE ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// israel.calcAge();
// sebas.calcAge(); // El objeto toma el método calcAge(); del prototipo constructor. 
// esteban.calcAge();

// console.log(israel.lastName);
// console.log(sebas.lastName);
// console.log(esteban.lastName);




///////////////////////////////////////////////////////////////////////////////
// object.create(); METHOD ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let personProto = {
//     calcAge: function () {
//         console.log(2019 - this.yearOfBirth);
//     }
// };
// // Esto no es una Function Constructor, por eso no se usa letra capital al inicio,
// // pero lo que está creando es un objeto que va a actuar como prototype y luego se crea un 
// // objeto basado en ese prototipo.

// let newObject = Object.create(personProto);
// // Lo que hace esto es recibir como parámetro el objeto prototipo que se creó como base
// // para crear el newObject. 

// // Hay otra forma de crear objetos usando object.create(); asignando valores dentro del mismo método.
// let esreal = Object.create(personProto, {
//     name: { value: 'esreal'},
//     yearOfBirth: { value: 1989 },
//     job: { value: 'Web Content Dev' }
// });

// console.log(esreal);
// esreal.calcAge();




///////////////////////////////////////////////////////////////////////////////
// PRIMITIVES VS OBJECTS //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// // Primitives vs Objects
// var a = 12;
// var b = a;
// a = 24;
// console.log(a);
// console.log(b);
// // Las variables almacenan su propia copia de los datos, pero no hacen referencia a nada. (Primitives)

// var obj1 = {
//     name: 'Israel',
//     age: '30'
// };
// var obj2 = obj1;
// obj1.age = 25;
// console.log(obj1.age);
// console.log(obj2.age);
// // obj1 y obj2 son exactamente el mismo objeto. El Uno es la referencia del Dos.

// // Functions
// var age = 30;
// var obj = {
//     name: 'Israel',
//     city: 'San José'
// };

// function change (a, b) {
//     a = 35;
//     b.city = 'Barcelona';
// };

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// // Cuando pasamos un Primitive en una función se crea una copia y el original nunca se va a ver afectado, 
// // en cambio cuando pasamos un objeto, no pasamos el objeto realmente, 
// // en realidad es sólo una referencia del mismo.




///////////////////////////////////////////////////////////////////////////////
// FIRST CLASS FUNCTIONS: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// PASSING FUNCTIONS AS ARGUMENTS /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let years = [1928, 1345, 1987, 1956, 2014];

// function arrayCalc(arr, fn){
//     let arrRes = [];
//     arr.forEach(element => {
//         arrRes.push(fn(element));
//     });
//     return arrRes;
// }

// function calcAge(yearOfBirth) {
//     return 2019 - yearOfBirth;
// }

// function isFullAge(age) {
//     return age >= 18;
// }

// function maxHeartRate(age) {
//     if (age >= 18 && age <= 81) {
//         return Math.round(206.9 - (0.67 * age));
//     } else {
//         return -1;
//     }
// }

// let ages = arrayCalc(years, calcAge);
// let fullAges = arrayCalc(ages, isFullAge);
// let rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// FUNCTIONS RETURNING FUNCTIONS //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// function log(x) {
//     console.log(x);
// }

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) { log(name + ', can you explain what UX design is?'); };
//     } else if (job === 'teacher') {
//             return function(name) { log(name + 'What subject do you teach, ' + name + '?');  };  
//     } else {
//         return function(name) { log('Hello ' + name + ' , what do you do?'); };
//     }
// }

// let teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Israel');

// interviewQuestion('designer')('Sebastián');

// function haveJob(answer) {
//     if(answer) {
//         return (name)=>{ log(name + ' has a job.'); };
//     } else {
//         return (name)=> { log(name + ' doesn\'t have a job'); };
//     }
// }

// haveJob(true)('Israel');

// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSIONS) ////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// function game () {
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();
// console.log(score);

// (()=>{
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// ((goodLuck)=>{
//     let score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

// CLOSURES ///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// function retirement(retirementAge) {
//     let a = ' years left until retirement.';
//     return function (yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     };
// }

// let retirementCostaRica = retirement(63);
// let retirementGermany = retirement(65);
// let retirementBrasil = retirement(65);

// retirementCostaRica(1989);
// retirementGermany(1989);
// retirementBrasil(1989);

// retirement(60)(1989);

///// PRACTICE /////
// Convert the following function to a Closure:

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) { console.log(name + ', can you explain what UX design is?'); };
//     } else if (job === 'teacher') {
//             return function(name) { console.log('What subject do you teach, ' + name + '?');  };  
//     } else {
//         return function(name) { console.log('Hello ' + name + ' , what do you do?'); };
//     }
// }
//ANSWER:
// function interviewQuestion(job){
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ' , what do you do?');
//         }
//     };
// };

// interviewQuestion('teacher')('Israel');

// BIND, CALL & APPLY METHODS /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// let israel = {
//     name: 'Israel',
//     age: 30,
//     job: 'web dev',
//     presentation: function (style, timeOfDay) { // No funcionan ()=>{}
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m ' + this.age + ' years old.');
//         } else if (style === 'friendly') {
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         } else {
//             console.warn('Error, no provided data found!');
//         }
//     }
// };

// let emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// israel.presentation('friendly', 'morning');

// // METHOD BORROWING .call(this, arg, arg)
// israel.presentation.call(emily, 'formal', 'afternoon');
// // israel.presentation.apply(emily, ['friendly', 'afternoon']);

// var israelFriendly = israel.presentation.bind(israel, 'friendly');
// var israelFormal = israel.presentation.bind(israel, 'formal');

// var emilyFormal = israel.presentation.bind(emily, 'formal');
// emilyFormal('morning');

// israelFriendly('afternoon');
// // israelFriendly('morning');
// // israelFormal('afternoon');
// // israelFormal('morning');

// let years = [1928, 1345, 1987, 1956, 2014];

// function arrayCalc(arr, fn) {
//     let arrRes = [];
//     arr.forEach(element => {
//         arrRes.push(fn(element));
//     });
//     return arrRes;
// }

// function calcAge(yearOfBirth) {
//     return 2019 - yearOfBirth;
// }

// function isFullAge(limit, age) {
//     return age >= limit;
// }

// var ages = arrayCalc(years, calcAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));



///////////////////////////////////////////////////////////////////////////////
// CHALLENGE - ADVANCED JS ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/* 
1. Builld a function constructor called Question to describe a question [ ]. A question should include:
    a) Question itself [].
    b) The answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.).
    c) Correct answer (I would use a number for this).
2. Create a couple of questions using the constructor.
3. Store them all inside an array.
4. Select one random question and log it on the console, together with the possible answers (each question should have a number).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input he number of the correct answer.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another methor for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private
   and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- EXPERT LEVEL --- 

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result).
9. Be careful: after Task 8, the game literally never ends. So 
*/


// //MY VERSION :V 
// class Question {
//     constructor(question, answers, correctAnswer) {
//         this.question = question;
//         this.answers = answers;
//         this.correctAnswer = correctAnswer;
//     }
// };

// let questions = [
//     new Question('2 + 2?', [8, 3, 5, 4], 3),
//     new Question('3 - 2?', [1, 3, 5, 7], 0),
//     new Question('5 + 5?', [34, 23, 10, 8], 2)
// ];

// function selectRandomQuestion() {
//     let randomNum = Math.round(Math.random() * questions.length);
//     let answers = questions[randomNum].answers;
//     let correctAnswer = questions[randomNum].correctAnswer;
//     let correctAnswers = 0;
//     let wrongAnswers = 0;
//     let letterRelation = {
//         a: 'a. ' + answers[0],
//         b: 'b. ' + answers[1],
//         c: 'c. ' + answers[2],
//         d: 'd. ' + answers[3]
//     };

//         console.log('Question: ' + questions[randomNum].question);
//         console.log(letterRelation.a);
//         console.log(letterRelation.b);
//         console.log(letterRelation.c);
//         console.log(letterRelation.d);
//         console.log('----------------');
        
//         let userAnswer = prompt('Please select the correct answer (just type the letter). Or type exit to quit');
//         let answerTxt;
        
//         // Asigna el valor de la letra según el input del user.
//         if (userAnswer === 'a') {
//             userAnswer = 0;
//         } else if (userAnswer === 'b') {
//             userAnswer = 1;
//         } else if (userAnswer === 'c') {
//             userAnswer = 2;
//         } else if (userAnswer === 'd') {
//             userAnswer = 3;
//         }
    
//         function matchAnswer(correctAnswer) {
//             if (correctAnswer === 0) {
//                 return letterRelation.a;
//             } else if (correctAnswer === 1) {
//                 return letterRelation.b;
//             } else if (correctAnswer === 2) {
//                 return letterRelation.c;
//             } else if (correctAnswer === 3) {
//                 return letterRelation.d;
//             }
//         };
        
//         let message = matchAnswer(correctAnswer);
    
//         if (userAnswer === 'exit' || ''){
//              stop();   
//         } else if (userAnswer === correctAnswer) {
//             console.log('Correct! The answer is: ' + message);
//             correctAnswers =+ 1;
//             console.log('Correct answers: ' + correctAnswers);
//             console.log('Wrong answers: ' + wrongAnswers);
//             console.log('//////////////////////////////////');
//         } else {
//             console.log('Wrong! The correct answer is: ' + message);
//             wrongAnswers =+ 1;
//             console.log('Correct answers: ' + correctAnswers);
//             console.log('Wrong answers: ' + wrongAnswers);
//             console.log('//////////////////////////////////');
//         }
// };

// function stop(){
//     return 1;
// }

// selectRandomQuestion();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JONAS ANSWER://

// (function ( ) {
//     function Question (question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     };
    
//     Question.prototype.displayQuestion = function ( ) {
//         console.log( this.question );
    
//         for (let i = 0; i < this.answers.length; i++) {
//             console.log( i + ': ' + this.answers[ i ] );
//         }
//     };
    
//     let q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
//     let q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
//     let q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious']);
    
//     let questions = [q1, q2, q3];
    
//     let n = Math.round(Math.random() * questions.length);
//     questions[n].displayQuestion();
    
//     let answer = parseInt(prompt('Please select the correct answer (just type the letter). Or type exit to quit'));
    
//     Question.prototype.checkAnswers = function(ans) {
//         if ( ans === this.correct) {
//             console.log('Correct Answer!!!');
//         } else {
//             console.log('Wrong answer, try again.');
//         }
//     };
    
//     questions[n].checkAnswers(answer);
// })();

//  SECOND PART 

(function ( ) {
    function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function ( ) {
        console.log( this.question );
    
        for (let i = 0; i < this.answers.length; i++) {
            console.log( i + ': ' + this.answers[ i ] );
        }
    };

    Question.prototype.checkAnswers = function(ans) {
        if ( ans === this.correct) {
            console.log('Correct Answer!!!');
        } else {
            console.log('Wrong answer, try again.');
        }
    };
    
    let q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    let q2 = new Question('What\'s the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    let q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious']);
    let questions = [q1, q2, q3];

    function score () {
        let sc = 0;
        return function(correct){
            if (correct) {
                sc++;
            }
            return score;
        };
    }// Quedé en la función Score (Closure) Tengo que entender bien bien la razón de esto. 

    
    function nextQuestion () {
        let n = Math.round(Math.random() * questions.length);        
        questions[n].displayQuestion();
        let answer = prompt('Please select the correct answer (just type the letter). Or type exit to quit');
        
        if (answer !== 'exit') {
            questions[n].checkAnswers(parseInt(answer));
            nextQuestion();
        };
    };

    nextQuestion();
    
})();