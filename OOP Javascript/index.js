// Function constructor
/*
var israel = {
    name: 'John',
    yearOfBirth: 1989,
    job: 'Web Content Dev'
}

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}
Person.prototype.lasName = 'Umaña';

var israel = new Person('Israel', 1989, 'Web Content Dev');
var isabel = new Person('Isabel', 2005, 'Estudiante');
var sebas  = new Person('Sebastián', 1992, 'Médico Veterinario');

israel.calculateAge();
isabel.calculateAge();
sebas.calculateAge();

console.log(israel.lasName);
console.log(isabel.lasName);
console.log(sebas.lasName);
*/


// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var israel = Object.create(personProto);
israel.name = 'Israel';
israel.yearOfBirth = 1989;
israel.job = 'Web Dev';

var sebas = Object.create(personProto, {
    name: { value: 'Sebastian'},
    yearOfBirth: { value: 1992 },
    job: { value: 'Veterinario' }
});
*/

// Primitives vs Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'Israel',
    age: 29
};
var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 29;
var obj = {
    name: 'Israel',
    city: 'San Jose',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/





/////////////////////////////////////////////////////////////
// Lecture: Passing functions as arguments
/////////////////////////////////////////////////////////////
/*
var years = [1989, 1990, 1991, 1992, 2005];

function arrayCal(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    } 
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHearthRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCal(years, calculateAge);
var fullAges = arrayCal(ages, isFullAge);
var rates = arrayCal(ages, maxHearthRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/





/////////////////////////////////////////////////////////////
// Lecture: Functions Returning Functions
/////////////////////////////////////////////////////////////
/*
function interviewQuestion(job) {
    if (job === 'Designer') {
        return function(name) {
            console.log(name + ', can you explain what UX design is?');
        }
    } else if (job === 'Teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');  
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('Teacher');
var designerQuestion = interviewQuestion('Designer');

teacherQuestion('Israel');
designerQuestion('Andy');
teacherQuestion('José');
designerQuestion('Mario');
teacherQuestion('Johnathan');
designerQuestion('Angela');

interviewQuestion('Teacher')('Maureem');


function doYouHaveMoney(answer) {
    if(answer === 'Yes') {
        return function (name) {
            console.log('Dime ' + name + ', cuánto tienes ahí?');
        } 
    } else {
        return function (name) {
            console.log('Dime ' + name + ', qué se siente estar en la pobreza?');
        }
    }
}

var youHaveMoney = doYouHaveMoney('Yes');
var youDontHaveMoney = doYouHaveMoney('No');

youDontHaveMoney('Israel');
youHaveMoney('Shebillo');

doYouHaveMoney('Yes')('El Papillo');

*/





/////////////////////////////////////////////////////////////
// Lecture: Immediately Invoked Function Expressions (IIFE)
/////////////////////////////////////////////////////////////
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/




/////////////////////////////////////////////////////////////
// Lecture: Closures
/////////////////////////////////////////////////////////////
/*
function retirement (retirementAge) {
    var a = ' years left until retirement';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
        
    }
}

var retirementUS = retirement(66);
var retirementCR = retirement(65);
var retirementPT = retirement(60);

retirementUS(1989);
retirementCR(1989);
retirementPT(1989);

function interviewQuestion (job) {
    var a = ', can you explain what UX design is?';
    var b = 'What subject do you teach, ';
    var c = '?';
    var d = 'Hello ';
    var e = ', what do you do?';

    return function (name) {
        if (job === 'Designer') {
                console.log(name + a);
        } else if (job === 'Teacher') {
                console.log(b + name + c);  
        } else {
                console.log(d + name + e);
        }
    }
}

interviewQuestion('Teacher')('Maureem');

var professional1 = interviewQuestion('Designer');
var professional2 = interviewQuestion('Teacher');
var professional3 = interviewQuestion('Doctor');

professional1('Israel');
professional2('Sebastian');
professional3('Carlos');

*/





/////////////////////////////////////////////////////////////
// Lecture: Bind, Call and Apply
/////////////////////////////////////////////////////////////

// var israel = {
//     name:   'Israel',
//     age:    29,
//     job:    'Web Developer', 
//     presentation: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log(
//                 'Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + 
//                 this.name   + ', I\'m a '   +
//                 this.job    + ' and I\'m '  + 
//                 this.age    + ' years old.'
//             );
//         } else if (style === 'friendly') {
//             console.log(
//                 'Hey! what\'s up? I\'m '    + 
//                 this.name   + ', I\'m a '   +
//                 this.job    + ' and I\'m '  + 
//                 this.age    + ' years old. Have a nice ' +
//                 timeOfDay   + '.'
//             );
//         }
//     }
// };

// var isabel = {
//     name:   'Isabel',
//     age:    15,
//     job:    'Student'
// };

// // israel.presentation('formal', 'morning');

// // CALL
// israel.presentation.call(isabel, 'friendly', 'night!'); // Object.method.call(this, parmeter1, parameter2)

// // APPLY
// // israel.presentation.apply(isabel, ['friendly', 'afternoon']); // this is not going to work

// // BIND
// // .bind(this, 1Parameter) returns a function, 
// var israelFriendly = israel.presentation.bind(israel, 'friendly');
// var isabelFormal = israel.presentation.bind(isabel, 'formal');

// israelFriendly('morning');
// israelFriendly('afternoon');

// isabelFormal('night!');





// var years = [1989, 1990, 1991, 1992, 2005];

// function arrayCal(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     } 
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// var ages = arrayCal(years, calculateAge);
// var fullJapan = arrayCal(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);




/////////////////////////////////////////////////////////////
// CHALLENGE ONE
/////////////////////////////////////////////////////////////

/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
   (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct 
   answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't
   interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/



function Question (question, answer, correctAnswer) {

}