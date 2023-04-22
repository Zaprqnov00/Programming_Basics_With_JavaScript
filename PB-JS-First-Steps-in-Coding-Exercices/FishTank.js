function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let squareArea = length * width * height;
    let squareAreaInLitres = squareArea * 0.001;
    let noFreeSpace = percent / 100;
    let needLitres = squareAreaInLitres * (1 - noFreeSpace);

    console.log(needLitres)
}

fishTank(["85 ","75 ","47 ","17 "])