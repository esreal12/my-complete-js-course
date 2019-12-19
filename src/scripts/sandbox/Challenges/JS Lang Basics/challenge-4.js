/*---------------------------------------------------------------------------------
    Challenge Four
----------------------------------------------------------------------------------*/
console.log("%cChallenge 4:", 'color: #FF7433; font-weight: bolder');
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and 
also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the 
respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

var mark, john;

mark = {
    firstName: 'Mark',
    secondName: 'Ruffalo',
    mass: 52,
    height: 1.35,
    calcBMI: () => {
        this.BMI = Math.round(this.mass / (this.height * this.height));
        return this.BMI;
    }
};

john = {
    firstName: 'John',
    secondName: 'Scofield',
    mass: 78,
    height: 1.69,
    calcBMI: () => {
        this.BMI = Math.round(this.mass / (this.height * this.height));
        return;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
    console.log(mark.firstName + ' ' + mark.secondName + ' has the highest BMI.');
} else if (mark.BMI < john.BMI) { 
    console.log(john.firstName + ' ' + john.secondName + ' has the highest BMI.');
} else {
    console.log('It\'s a draw');
}