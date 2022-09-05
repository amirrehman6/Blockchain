// var dob = new Date("November 15, 1987 12:00:00");
findAge("November 15, 1987");

function findAge(dob) {
    dob = new Date(dob);
    var rightNow = new Date();
    var ageMilliSeconds = rightNow - dob;           // in milliseconds
    
    var ageYears = ageMilliSeconds / (1000 * 60 * 60 * 24 * 365)   // converting to days (seconds * mins * hrs * days * years)

    var ageDays = ageYears - Math.floor(ageYears);
    ageDays = ageDays * 365;

    ageYears = Math.floor(ageYears);
    ageDays = Math.floor(ageDays);

    console.log("Your age is " + ageYears + " years and " + ageDays + " days!");
}