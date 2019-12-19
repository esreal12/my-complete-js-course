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

// Version Dec 7th, 2019.

var versionSelector = prompt('Which version do you want to check (1 or 2)?:');

if (versionSelector = 1) {

    // Solution
    var markHeight, markMass, johnHeight, johnMass, BMIJohn, BMIMark, isBMIHigher;

    markHeight  = 1.76;
    markMass    = 78;
    johnHeight  = 1.80;
    johnMass    = 80;

    BMIMark = markMass / (markHeight * markHeight);
    console.log(BMIMark);
    
    BMIJohn = johnMass / (johnHeight * johnHeight);
    console.log(BMIJohn);

    isBMIHigher = BMIMark > BMIJohn;

    console.log('Is Mark\'s BMI higher than John\'s? ' + isBMIHigher);

} else {

    var markMass, markHeight, johnMass, johnHeight, isHigher;

    markMass = 75;
    markHeight = 1.73;
    johnMass = 85;
    johnHeight = 1.80;
    
    markBMI = markMass / (markHeight * markHeight);
    console.log('Mark\'s BMI is: ' + markBMI);
    
    johnBMI = johnMass / (johnHeight * johnHeight);
    console.log('John\'s BMI is: ' + johnBMI);
    
    if (markBMI > johnBMI) {
        isHigher = true;
    } else {
        isHigher = false;
    }

    // La forma resumida de sustituir ese if else block es almacenando el resultado en una variable directamente
    // como en el ejemplo 1. 
    
    console.log('Is Mark\'s BMI higher than John\'s?: ' + isHigher);

}