console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const filterFunction = (data) => {
    return data.filter(transaction => {
        // TODO
        //  'credit_card_company' is 'VISA'
        //  'transaction_date' is 2015 or later
        //   price is 50 or above
        const yearTwentyFifteen = new Date(2015, 01);
        return transaction.credit_card_company == 'VISA' &&
            transaction.price >= 50 &&
            new Date(transaction.transaction_date) >= yearTwentyFifteen
    });
}

console.log(filterFunction(transactions));


// Assignment 2:
const aboveAverageFunction = (data) => {
    let sum = 0
    data.forEach(transaction => {
        sum += parseFloat(transaction.price);
    });
    let average = sum/data.length;
    console.log(average)

    return data.map(transaction => {
        if (transaction.price > average){
            transaction.isPriceAboveAverage= true;
            return transaction;
        } else {
            transaction.isPriceAboveAverage = false;
            return transaction;
        }
    })
}

console.log(aboveAverageFunction(transactions));