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

var bills = [124, 48, 268];
var tips = [];
var finalPaidAmounts = [];

function tipCalculator (bill) {
    if (bill < 50) {
        tip = bill * (20/100);
        console.log(Math.round(tip));
    } else if (bill >= 50 && bill <= 200) {
        tip = bill * (15/100);
        console.log(Math.round(tip));
    } else {
        tip = bill * (10/100);
        console.log(Math.round(tip));
    }
    return + tip;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(tipCalculator(bills[i]));
    finalPaidAmounts.push(tips[i] + bills[i]);
}

console.log('Tips: ' + tips);
console.log('Final paid amounts: ' + finalPaidAmounts);