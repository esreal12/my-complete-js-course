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





/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
console.log("%cThe Ternary Operator and Switch Statements:", 'color: #FF7433; font-weight: bolder');

var firstName = 'Maureem';
var age       = 58;

// Ternary Operator
age >=18 ? console.log(firstName + ' drinks wine.') : console.log(firstName + ' drinks juice.');
// (statement) ? (do) : (do)
// ? = If condition is true. : = Else.

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statement
var job = 'Tamborilero';

switch (job) {
    case 'Teacher': 
    case 'Instructor':
    case 'Tamborilero':
        console.log(firstName + ' teaches kids how to understand life.');
        break;
    case 'Driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'Designer':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a girl.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young woman.');
        break;
    default:
        console.log(firstName + ' is a wonder woman.');
        break;
}