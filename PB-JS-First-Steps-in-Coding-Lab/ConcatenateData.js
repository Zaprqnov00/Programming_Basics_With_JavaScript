function concatenateDate(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let towwn = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${towwn}.`)
}

concatenateDate(["Teodor", "Zaprqnov", 22, "Plovdiv"])