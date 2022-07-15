//AGE FINDER

// getting time difference between today and date of birth
var dateOfBirth = new Date("November 15, 1987 12:00:00");
var today = new Date();
var ageMiliSeconds = today.getTime() - dateOfBirth.getTime();

var ageYears = ageMiliSeconds / (1000*60*60*24*365); //finding years
ageYears = ageYears.toFixed(3);

var ageDays = ageYears - Math.floor(ageYears); //separating decimals for days
ageDays = ageDays * 365;

//rounding years and days
ageYears = Math.floor(ageYears);
ageDays = Math.floor(ageDays);


document.write("As of today, age of Amir Rehman is " + ageYears + 
" years and "+ ageDays + " days");

// Output testing
/*
document.write(ageYears + " Years");
document.write("<br>");
document.write(ageDays + " Days");
*/