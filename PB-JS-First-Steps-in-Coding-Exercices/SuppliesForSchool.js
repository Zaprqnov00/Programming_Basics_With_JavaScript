function suppliesForSchool(input){
    let countPacketPens = Number(input[0]);
    let countPacketMarkers = Number(input[1]);
    let litresWc = Number(input[2]);
    let discount = Number(input[3]);

    let pricePacketPens = 5.80;
    let pricePacketMarkers = 7.20;
    let priceWcPerLitres = 1.20;

    let totalPricePens = countPacketPens * pricePacketPens;
    let totalPriceMarkers = countPacketMarkers * pricePacketMarkers;
    let totalPriceWc = litresWc * priceWcPerLitres;
    let totalSumAllProducts = totalPriceMarkers + totalPricePens + totalPriceWc;
    let totalSumWWithDiscount = totalSumAllProducts - (totalSumAllProducts * discount / 100);

    console.log(totalSumWWithDiscount)
}

suppliesForSchool([
"2 ",
"3 ",
"4 ",
"25 "]
)