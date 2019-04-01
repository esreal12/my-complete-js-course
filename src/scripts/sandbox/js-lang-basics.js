import './js-lang-basics-header';


/***********************************************************************************
    Variables and Data Types
************************************************************************************/
// console.log("%cVariables and Data Types:", 'color: #FF7433; font-weight: bolder');

// var firstName   = 'Israel';
// var lastName    = 'Umaña Sedó';
// var age         = 29;
// var fullAge     = true;
// var job         = 'Web Content Developer';
// var isMarried   = false;  

// console.log('  %cNumber:', 'font-weight: bolder', 'Floating point numbers, for decimals and integers.');
// console.log('  %cString:', 'font-weight: bolder', 'Sequence of characters, used for text.');
// console.log('  %cBoolean:', 'font-weight: bolder', 'Logical data type that can only be true.');
// console.log('  %cUndefined:', 'font-weight: bolder', 'Data type of a variable that does not have a value yet');
// console.log('  %cNull:', 'font-weight: bolder', 'Also means \'Non-existent.\'');

// console.log(firstName, lastName, age, fullAge, job);
// console.log('');




/***********************************************************************************
    Variable Mutation and Type Coercion
************************************************************************************/
// console.log("%cVariable Mutation and Type Coercion:", 'color: #FF7433; font-weight: bolder');

// var firstName   = 'Israel';
// // var lastName    = 'Umaña Sedó';
// var age         = 29;
// // var fullAge     = true;
// var job         = 'Web Content Developer';
// var isMarried   = false;  

// // Type Coercion
// console.log('%cType coercion:', 'color: #FC9869'); 
// console.log(firstName + ' ' + age);
// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Am I married? ' + isMarried);

// // Variable Mutation
// console.log('%cVariable Mutation:', 'color: #FC9869');
// age =   'Twenty nine';
// job =   'Driver';
// alert(firstName + ' is a ' + age + ' years old ' + job + '. Am I married? ' + isMarried);
// var haveCar = prompt('Do you have a car?');
// console.log(firstName + ' has a car?: ' + haveCar);





/***********************************************************************************
    Basic Operations
************************************************************************************/
// console.log("%cBasic Operations:", 'color: #FF7433; font-weight: bolder');

// var d, now, yearOfBirth, ageSebas, ageIsabel, name;

// d           = new Date();
// now         = d.getFullYear();
// yearOfBirth = now - 29;
// ageSebas    = 26;
// ageIsabel   = 15;
// name        = 'Nombre';

// console.log(yearOfBirth); // 1990

// // Math Operators
// console.log(now + 2); // 2021
// console.log(now * 2); // 4038
// console.log(now / 2); // 1009.5
// console.log(now - 2); // 2017
// console.log(now % 2); // 1

// // Logical Operators
// var sebasOlder = ageSebas > ageIsabel;
// console.log(sebasOlder); // True

// // TypeOf Operator
// console.log(typeof sebasOlder); // Boolean
// console.log(typeof ageSebas);   // Number
// console.log(typeof name);       // String
// console.log(typeof 5%4);        // NaN
// console.log(typeof no);         // Undefined






/***********************************************************************************
    Operator Precedence
************************************************************************************/
// console.log("%cOperator Precedence:", 'color: #FF7433; font-weight: bolder');

// var d = new Date();
// var now = d.getFullYear();

// var yearIsabel  = 2004;
// var yearIsrael  = 1989;
// var yearSebas   = 1992;
// var fullAge     = 18;

// // Multiple Operators
// var isFullAge = now - yearIsabel >= fullAge;
// console.log(now, isFullAge);

// if (!isFullAge) {
//     console.log('Is not full age.');
// } else {
//     console.log('Is full age.');
// }

// // Grouping 
// var ageIsrael   = now - yearIsrael;
// var ageSebas    = now - yearSebas;
// var average     = (ageIsrael + ageSebas) / 2;

// console.log(average);

// // Multiple Assignments
// var x, y;
// x = y = (3 + 3) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// // x = x * 2;
// x *= 2;
// console.log(x);
// // x = x + 1;
// // x += 1;
// x++;
// console.log(x);

// console.log('More info: ', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence');





/*---------------------------------------------------------------------------------
    Challenge One
----------------------------------------------------------------------------------*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

// // Solution
// var markHeight, markMass, johnHeight, johnMass, BMIJohn, BMIMark, isBMIHigher;

// markHeight  = 1.76;
// markMass    = 78;
// johnHeight  = 1.80;
// johnMass    = 80;

// BMIMark = markMass / (markHeight * markHeight);
// BMIJohn = johnMass / (johnHeight * johnHeight);

// isBMIHigher = BMIMark >= BMIJohn;

// console.log('Is Mark\'s BMI higher than John\'s? ' + isBMIHigher);

// ///////////////////////////////////////////////////////////////////////

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s' + isBMIHigher);
// } else {
//     console.log('John\'s BMI higher than Mark\'s? ' + isBMIHigher);
// }




/***********************************************************************************
    If / Else Statements
************************************************************************************/
// console.log("%cIf / Else Statements:", 'color: #FF7433; font-weight: bolder');

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single!');
// }

// var isMarried = true;

// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single!');
// }





/***********************************************************************************
    Boolean Logic
************************************************************************************/
// console.log("%cBoolean Logic:", 'color: #FF7433; font-weight: bolder');

// var firstName = 'Andrea';
// var age       = 20;

// if (age < 13) {
//     console.log(firstName + ' is a girl.');
// } else if (age >= 13 && age < 20) { // Between 13 and 20
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young woman.');
// } else {
//     console.log(firstName + ' is a woman.');
// }





/***********************************************************************************
    The Ternary Operator and Switch Statements
************************************************************************************/
// console.log("%cThe Ternary Operator and Switch Statements:", 'color: #FF7433; font-weight: bolder');

// var firstName = 'Maureem';
// var age       = 58;

// // Ternary Operator
// age >=18 ? console.log(firstName + ' drinks wine.') : console.log(firstName + ' drinks juice.');
// // (statement) ? (do) : (do)
// // ? = If condition is true. : = Else.

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // Switch Statement
// var job = 'Tamborilero';

// switch (job) {
//     case 'Teacher': 
//     case 'Instructor':
//     case 'Tamborilero':
//         console.log(firstName + ' teaches kids how to understand life.');
//         break;
//     case 'Driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'Designer':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a girl.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young woman.');
//         break;
//     default:
//         console.log(firstName + ' is a wonder woman.');
//         break;
// }





/***********************************************************************************
    Truthy and Falsy values and equality operators
************************************************************************************/
// console.log("%cTruthy and Falsy values and equality operators:", 'color: #FF7433; font-weight: bolder');

// console.log('%cFalsy values:', 'font-weight: bolder', 'values considered false when evaluated in an if/else statement condition.');
// console.log('%c> Undefined, Null, 0, \'\', Nan', 'color:#228455;');

// console.log('%cTruthy values:', 'font-weight: bolder', 'Not falsy values.');

// var height;

// // height = 0; // Qué pasa cuando la variable es definida como 0?
// height = 23; // Cuando se define una variable y se evalua == con '23', type coercion hace que se 
// // pueda leer la variable sin importar el dataType.

// if (height || height === 0) { // Se agrega esta solución height === 0. 
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is not defined');
// }

// // Equality Operators
// if (height == '23') { // 
//     console.log('The == operator does type coercion!');

// }





/*---------------------------------------------------------------------------------
    Challenge Two
----------------------------------------------------------------------------------*/
/* 
John and Mike both play basketball in different teams. In the latest 3 games, John's 
team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to 
   the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account 
   there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. 
   Like before, log the average winner to the console. HINT: you will need the && operator 
   to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
   GOOD LUCK 😀
*/

// var johnTeamAvg = (89 + 120 + 103) / 3;
// var mikeTeamAvg = (116 + 94 + 123) / 3;
// var maryTeamAvg = (97 + 134 + 105) / 3;

// console.log(johnTeamAvg, mikeTeamAvg, maryTeamAvg);

// console.log("%cIf Statement:", 'color: #FF7433; font-weight: bolder');
// if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {               // John has highest average
//     console.log('John\'s Team has the highest average score ' + johnTeamAvg);
// } else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {        // Mike has the highest average
//     console.log('Mike\'s Team has the highest average score ' + mikeTeamAvg);
// } else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {        // Mary has the highest average 
//     console.log('Mary\'s Team has the highest average score ' + maryTeamAvg);
// } else if (johnTeamAvg == mikeTeamAvg && johnTeamAvg == maryTeamAvg) {      // All teams have same average
//     console.log('All teams have the same average score');
// } else if (johnTeamAvg == mikeTeamAvg && johnTeamAvg > maryTeamAvg) {       // John and Mike have the highest average
//     console.log('John\'s and Mike\'s Teams have the highest average score');
// } else if (mikeTeamAvg == maryTeamAvg && mikeTeamAvg > johnTeamAvg) {       // Mike and Mary have the highest average
//     console.log('Mike\'s and Mary\'s Teams have the highest average score');
// } else {
//     console.log('John\'s and Mary\'s Teams have the highest average score');// John and Mary have the highest average
// }

// console.log("%cSwitch Statement:", 'color: #FF7433; font-weight: bolder');
// switch (true) {
//     case johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg:            // John has highest average
//         console.log('John\'s Team has the highest average score');
//         break;
//     case mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg:            // Mike has the highest average
//         console.log('Mike\'s Team has the highest average score');
//         break;
//     case maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg:            // Mary has the highest average 
//         console.log('Mary\'s Team has the highest average score');
//         break;
//     case johnTeamAvg == mikeTeamAvg && johnTeamAvg == maryTeamAvg:          // All teams have same average
//         console.log('All teams have the same average score');
//         break;
//     case johnTeamAvg == mikeTeamAvg && johnTeamAvg == maryTeamAvg:          // John and Mike have the highest average
//         console.log('Mary\'s Team has the highest average score');
//         break;
//     case mikeTeamAvg == maryTeamAvg && mikeTeamAvg > johnTeamAvg:           // Mike and Mary have the highest average
//         console.log('Mike\'s and Mary\'s Teams have the highest average score');
//         break;
//     default:                                                                // John and Mary have the highest average
//         console.log('John\'s and Mary\'s Teams have the highest average score');
//         break;
// }





/***********************************************************************************
    Functions
************************************************************************************/
// console.log("%cFunctions:", 'color: #FF7433; font-weight: bolder');

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageIsrael = calculateAge(1989);
// var ageSebastian = calculateAge(1992);
// var ageIsabel = calculateAge(2003); 

// console.log(ageIsrael, ageSebastian, ageIsabel);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1989, 'Israel');
// yearsUntilRetirement(1992, 'Sebastián');
// yearsUntilRetirement(2003, 'Isabel');





/***********************************************************************************
Functions Statements and Expressions
************************************************************************************/
// console.log("%cFunctions Statements and Expressions:", 'color: #FF7433; font-weight: bolder');

// Function Declaration
// function whatDoYouDo (job, firstName) {

// }


// Function Expression
// var whatDoYouDo = function (job, firstName) {
//     switch(job) {
//         case 'Teacher':
//             return firstName + ' teaches kids how to code.'; // The return the value, and finishes inmediately the function, 
//         case 'Driver':                                      // the break is not necesary here.
//             return firstName + ' drives a Uber in Costa Rica.';    
//         case 'Designer':
//             return firstName + ' designs amazing websites.';
//         default:
//             return firstName + ' does something else.';
//     }
// };

// console.log(whatDoYouDo('Designer', 'Israel'));
// console.log(whatDoYouDo('Driver', 'Sebastián'));
// console.log(whatDoYouDo('Teacher', 'Isabel'));

// console.log("%cJs expressions are pieces of code that always produce a value or a result.", 'color: #FC9869; font-weight: bolder');
// console.log("%cJs Statements don't produce any immediate value.", 'color: #FC9869; font-weight: bolder');





/***********************************************************************************
    Arrays
************************************************************************************/
// console.log("%cArrays:", 'color: #FF7433; font-weight: bolder');

// // Initialize New Array
// var names = ['Isabel', 'Sebastián', 'Israel'];
// var years = new Array(2004, 1992, 1989);

// console.log(names[0]);
// console.log(names.length);

// // Mutate Array Data
// names[1] = 'Esreal';
// console.log(names);

// names[names.length] = 'Jacob';
// console.log(names);

// // Different Data Types
// var esreal = ['Esreal', 'Umaña', 1989, 'Painter', true];

// // Add elements
// esreal.push('orange'); // .push(); Inserta elementos al final del array
// esreal.unshift('Mr.'); // .unshift(); Inserta elementos al inicio del array
// console.log(esreal);

// // Remove elements
// esreal.pop(); // Elimina el último elemento del array
// console.log(esreal);

// esreal.shift(); // Elimina el primer elemento del array
// console.log(esreal);

// console.log(esreal.indexOf(1989)); // IndexOf indica la posición en la que se encuentra un elemento del array  
// console.log(esreal.indexOf(78)); // Va a dar como resultado -1 porque el elemento no existe en el array

// var isPainter = esreal.indexOf('Painter') === -1 ? 'Esreal is NOT a Painter' : 'Esreal IS a Painter';
// console.log(isPainter);





/*---------------------------------------------------------------------------------
    Challenge Three
----------------------------------------------------------------------------------*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of 
the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:

1) Containing all three tips (one for each bill)

2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

//  function tip calculator
// function tipCalculator(bill) {
   
//     var percentage;
    
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill > 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     };

//     return percentage * bill;
// }

// var bills = [124, 48, 268];

// var tips = [Math.round(tipCalculator(bills[0])),
//             Math.round(tipCalculator(bills[1])),
//             Math.round(tipCalculator(bills[2]))];

// var finalAmounts = [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]];

// console.log('All the Tips: ' + tips + ' / ' + 'Final amounts: ' + finalAmounts);





/***********************************************************************************
    Objects and Properties
************************************************************************************/
// console.log("%cObjects and Properties:", 'color: #FF7433; font-weight: bolder');

// var israel = {
//     name: 'Israel',
//     lastName: 'Umaña Sedó',
//     birthYear: 1989,
//     familyMembers: ['Maureem', 'Mima', 'Sebastián', 'Gabriel', 'Isabel'],
//     job: 'Web Content Developer', 
//     isMarried: false
// };

// console.log(israel.familyMembers); // Dot notation

// console.log(israel['lastName']); // Key Name notation 

// var x = 'birthYear';
// console.log(israel[x]);


// israel.job = 'Designer';
// israel['isMarried'] = true;
// console.log(israel);

// var shebillo = new Object();
// shebillo.firstName = 'Sebastián';
// shebillo.birthYear = 1992;
// shebillo['lastName'] = 'Umaña Sedó';
// console.log(shebillo); 





/***********************************************************************************
    Objects and Methods
************************************************************************************/
console.log("%cObjects and Methods:", 'color: #FF7433; font-weight: bolder');
