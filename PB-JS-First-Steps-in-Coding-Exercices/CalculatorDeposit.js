function calculatorDeposit(input){
    let depositSum = Number(input[0]);
    let endDate = Number(input[1]);
    let percentForYear = Number(input[2]);

    let lihva = depositSum * (percentForYear / 100);
    let lihvaPerMonth = lihva / 12;
    let totalSum = depositSum + endDate * lihvaPerMonth;
    
    console.log(totalSum)
}

calculatorDeposit(["200 ","3 ","5.7"])