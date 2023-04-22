function delivery(input){
    let countChickenMenu = Number(input[0]);
    let countFishMenu = Number(input[1]);
    let countVegetarianMenu = Number(input[2]);

    let priceChickenMenu = 10.35;
    let priceFishMenu = 12.40;
    let priceVegeterianMenu = 8.15;
    let priceDelivery = 2.50;

    let totalPriceChickenMenu = countChickenMenu * priceChickenMenu;
    let totalPriceFishMenu = countFishMenu * priceFishMenu;
    let totalPriceVegeterianMenu = countVegetarianMenu * priceVegeterianMenu;

    let totalPriceAllMenus = totalPriceChickenMenu + totalPriceFishMenu + totalPriceVegeterianMenu;

    let priceCake = totalPriceAllMenus * 20/100;
    
    let finishSum = totalPriceAllMenus + priceCake + priceDelivery;
    console.log(finishSum)
}

delivery(["9 ","2 ","6 "])