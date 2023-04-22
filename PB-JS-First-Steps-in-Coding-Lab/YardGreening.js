function yardGreening(input){
    let allMeetersGreeening = Number(input[0])
    let pricePerMeters = 7.61;
    let percentDiscount = 18 / 100;

    let totalPriceForAllGreeningSquare = allMeetersGreeening * pricePerMeters;
    let discountTotalSum = percentDiscount * totalPriceForAllGreeningSquare;
    let totalSum = totalPriceForAllGreeningSquare - discountTotalSum;

    console.log(`The final price is: ${totalSum} lv.`)
    console.log(`The discount is: ${discountTotalSum} lv.`)
}

yardGreening(["150"])