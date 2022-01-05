// grade converter (from numbers to letters)

let gradeEntry1 = parseInt(prompt("Enter Math grade"));
let gradeEntry2 = parseInt(prompt("Enter Chemstry grade"));
let gradeEntry3 = parseInt(prompt("Enter Physics grade"));
let average

function averageGrade() {
    average = (gradeEntry1 + gradeEntry2 + gradeEntry3)/3;
    return average;
}

averageGrade()


function gradeConverter(average){
    if (average >= 90 && average <=100){
        average = "A";
    }
    else if (average >= 80 && average <90)
        avarage = "B";
    else if (average >= 70 && average <80)
        average = "C";
    else if (average >= 60 && average <70)
        average = "D";
    else if (average <60 && average >=0)
        average = "F";
    else if (average>100 || average<0)
        average = "Invalid grade";

    return average;
    }


    document.write(gradeConverter(average))
    