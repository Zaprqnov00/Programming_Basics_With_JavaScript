function projectCreation(input){
    let name = input[0];
    let countProjects = Number(input[1]);
    let timeForAllProjects = 3 * countProjects;

    console.log(`The architect ${name} will need ${timeForAllProjects} hours to complete ${countProjects} project/s.`)
}

projectCreation(["George", 4])