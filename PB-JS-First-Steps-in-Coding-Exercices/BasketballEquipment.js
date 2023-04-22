function basketballEquipment(input){
    let yearFeeForTraining = Number(input[0]);

    let priceBasketballShoes = yearFeeForTraining - (yearFeeForTraining * 0.4);
    let priceBasketaballEquipment = priceBasketballShoes - (priceBasketballShoes * 0.2);
    let piceBasketaballBall = priceBasketaballEquipment / 4;
    let priceBasketballAccesoaries = piceBasketaballBall / 5;
    let totalSum = priceBasketballShoes + priceBasketaballEquipment + piceBasketaballBall + priceBasketballAccesoaries + yearFeeForTraining;

    console.log(totalSum)
}

basketballEquipment(["365"])