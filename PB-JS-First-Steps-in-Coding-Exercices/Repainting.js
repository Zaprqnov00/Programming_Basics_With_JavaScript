function repainting(input){
    let needNaylon = Number(input[0]);
    let needPaint = Number(input[1]);
    let thinnerLitres = Number(input[2]);
    let workTime = Number(input[3]);

    let naylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let bagPrice = 0.40;

    let totalNaylonPrice = (needNaylon + 2) * naylonPrice;
    let totalPaintPrice = (needPaint + (needPaint * 10/100)) * paintPrice;
    let totalThinnerPrice = thinnerLitres * thinnerPrice;
    let totalMaterialSum = totalNaylonPrice + totalPaintPrice + totalThinnerPrice + bagPrice;
    let sumForWorkers = (totalMaterialSum * (30/100)) * workTime;
    let totalSumForPainting = totalMaterialSum + sumForWorkers;

    console.log(totalSumForPainting);
}

repainting(["5 ",
"10 ",
"10 ",
"1 "]
)