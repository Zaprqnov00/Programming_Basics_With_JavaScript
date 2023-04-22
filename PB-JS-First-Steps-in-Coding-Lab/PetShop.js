function petShop(input){
    let foodsForDog = 2.50;
    let foodsForCat = 4;

    let countFoodPerDogs = Number(input[0]);
    let countFoodPerCats = Number(input[1]);

    let totalSum = (foodsForDog * countFoodPerDogs) + (foodsForCat * countFoodPerCats);

    console.log(`${totalSum} lv.`)
}

petShop(["5", "4"])