function radiansToDegrees(input){
    let radian = Number(input[0])
    let PI = Math.PI;
    let degrees = radian * 180/PI;
    
    console.log(degrees)
}

radiansToDegrees(["6.2832"])