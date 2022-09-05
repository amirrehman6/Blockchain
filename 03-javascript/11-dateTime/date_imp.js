// Important Point 1:
var rightNow = new Date();          // Date is an object
console.log(typeof(rightNow));


// Important Point 2:
var myDay = rightNow.getDay();         // 0 = sunday    upto    6 = saturday
console.log(myDay);


// Important Point 3:
var time = rightNow.getTime();          // time elasped since 1 Jan 1970 (in milli seconds)
console.log(typeof(time));


// Important Point 4:
// 9x elements extraction


// Important Point 5:
var dob = new Date("November 15, 1987 12:00:00");   // format for passing date


// Important Point 6:
var dateSetter = new Date();
dateSetter.setMonth(14);            // add 15 months from current start of current year