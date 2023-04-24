function areaOfFigures(input){
    let figureName = input[0];

    if(figureName == "square"){
        let length = Number(input[1]);
        let squareArea = length * length;
        console.log(squareArea)
    }else if(figureName == "rectangle"){
        let lengthA = Number(input[1]);
        let lengthB = Number(input[2]);
        let squareRectangle = lengthA * lengthB;
        console.log(squareRectangle)
    }else if(figureName == "circle"){
        let radius = Number(input[1]);
        let squareCircle = Math.PI * (radius * radius);
        console.log(squareCircle);
    }else if(figureName == "triangle"){
        let length = Number(input[1]);
        let height = Number(input[2]);
        let squareTriangle = length * height / 2;
        console.log(squareTriangle);
    }else{
        console.log("Wrong figure! Try again...")
    }
}

areaOfFigures(["asd", "4.5", "20"])