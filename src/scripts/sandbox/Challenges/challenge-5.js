/*---------------------------------------------------------------------------------
    Challenge Five
----------------------------------------------------------------------------------*/
console.log("%cChallenge 5:", 'color: #FF7433; font-weight: bolder');

/* Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (
    bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules

6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, 
and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)

7. Calculate the average tip for each family

8. Log to the console which family paid the highest tips on average */

var john = {
    values: [124, 48, 268, 180, 42],
    tips: [],
    finalValues: [],
    calcTips: () => john.values.forEach(bill => {
        // let tip, total;
        if (bill < 50) {
            tip = john.tips.push(Math.round(bill * .2));
            total = john.finalValues.push(tip + bill);
        } else if (bill >= 50 && bill <= 200) {
            tip = john.tips.push(Math.round(bill * .15));
            total = john.finalValues.push(tip + bill);
        } else {
            tip = john.tips.push(Math.round(bill * .1));
            total = john.finalValues.push(tip + bill);
        }
    })
};

var mark = {
    values: [77, 375, 110, 45],
    tips: [],
    finalValues: [],
    calcTips: () => mark.values.forEach(bill => {
        // let tip, total;
        if (bill < 100) {
            tip = mark.tips.push(Math.round(bill * .2));
            total = mark.finalValues.push(tip + bill);
        } else if (bill >= 100 && bill <= 300) {
            tip = mark.tips.push(Math.round(bill * .1));
            total = mark.finalValues.push(tip + bill);
        } else {
            tip = mark.tips.push(Math.round(bill * .25));
            total = mark.finalValues.push(tip + bill);
        }
    })
};

john.calcTips();
mark.calcTips();

const markArr = mark.values;
const johnArr = john.values;


function calculateEverything (arr, name, object) {
    const calcMinimum = arr => Math.min(...arr);
    const calcMaximum = arr => Math.max(...arr);
    const calcSum = arr.reduce((sum, element) => sum + element, 0);
    const calcAvg = arr.reduce((sum, element) => sum + element, 0) / markArr.length;

    console.log(name + '\'s' + ' minimum number: ' + calcMinimum(arr));
    console.log(name + '\'s' + ' maximum number: ' + calcMaximum(arr));
    console.log(name + '\'s' + ' sum: ' + calcSum);
    console.log(name + '\'s' + ' average: ' + calcAvg);

    object.average = calcAvg;
    console.log(object);
}

calculateEverything(markArr, 'Mark', mark);
console.log('----------');
calculateEverything(johnArr, 'John', john);

if (mark.average > john.average) {
    console.log('Mark\'s AVG is higher than John\'s');
} else if (mark.average === john.average){
    console.log('It\'s a draw!!');
} else {
    console.log('John\'s AVG is higher than Mike\'s');
}