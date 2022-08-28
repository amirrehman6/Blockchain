
// displaying date
var rightNow = new Date();

document.write(rightNow);
document.write("<br>");

//printing day from the Date() object
var daysStr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var now = new Date();
var theDay = now.getDay();
var dayName = daysStr[theDay];

document.write(theDay +"'s day - "+ dayName);

document.write("<br>");

//printing other date methods
document.write(now.getMonth() + "<br>");
document.write(now.getDate() + "<br>");
document.write(now.getFullYear() + "<br>");
document.write(now.getHours() + "<br>");
document.write(now.getMinutes() + "<br>");
document.write(now.getSeconds() + "<br>");
document.write(now.getMilliseconds() + "<br>");
document.write(now.getTime() + "<br>");