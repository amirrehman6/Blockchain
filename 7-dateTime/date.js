
// displaying date
var rightNow = new Date();

document.write(rightNow);
document.write("<br>");

//Printing day from the Date() object
var daysStr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var now = new Date();
var theDay = now.getDay();
var dayName = daysStr[theDay];

document.write(theDay +"'s day - "+ dayName);
