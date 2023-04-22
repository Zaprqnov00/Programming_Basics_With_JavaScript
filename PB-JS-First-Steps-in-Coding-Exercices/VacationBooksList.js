function vacationBookList(input){
    let pages = Number(input[0]);
    let readPagesPerOneHour = Number(input[1]);
    let leftDaysForReadBook = Number(input[2]);

    let totalTimeForReadBook = pages / readPagesPerOneHour;
    let timeReadPerDay = totalTimeForReadBook / leftDaysForReadBook;

    console.log(timeReadPerDay);
}

vacationBookList(["212 ","20 ","2 "]
)