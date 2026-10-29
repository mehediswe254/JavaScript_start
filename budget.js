
const userName = "Mehedi";
const income =5000;

// Multiple expense
let rent =1200;
let groceries = 600;
let transport = 200;
let entertainment =300;

//calculate the expenses
let totalExpenses = rent + groceries + transport + entertainment;


// tax deduction ( 10 of income )
let tax = income * 0.10;

// Net income after the tax
let netIncome = income - tax;

// calculate remaining balance
let balance = netIncome - totalExpenses;

// saving (20% of remaining balance )
let savings = balance * 0.20;


console.log('Personal Budget Tracker App ');
console.log('User: ' + userName);
console.log(' Total Income : $' + income);
console.log('Total Expenses: $' + totalExpenses);
console.log('Tax Deduction (10%): $'+ tax);
console.log('Net Income After Tax: $' + netIncome);
console.log('Remaining Balance: $' + balance);
console.log('Savings (20% of balance): $' + savings);
