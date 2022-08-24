

// Important Point 1:
var mnths = [];                 // empty array
console.log(typeof(mnths));     // Array datatype is 'Object'


// Important Point 2:
var mixedArray = [8,"string", true];    // Array datatype is 'Object' and can have multiple datatypes in one array


// Important Point 3:
mnths[0,5,11] = "January","May",'November';     // you can leave gaps in arrays
console.log(mnths[1]);
console.log(mnths[11]);




/*
=========================
Concepts
=========================
*/


/*

1. ADDING AND REMOVING ELEMENTS

=============================================================
                    At End      At Start    Anywhere
=============================================================
Remove Element      pop()       unshift()   splice()
Add Element         push()      shift()     splice()
=============================================================
*/

var days = [];

days.push("Monday","Thursday","Wednesday");
console.log(days);

days.splice(1,1);
console.log(days);

days.splice(1,0,"Tuesday");
console.log(days);

days.push("Thursday","Friday","Saturday","Sunday","Monday");
console.log(days);

days.pop();
console.log(days);

days.unshift("day");
console.log(days);

days.shift("day");
console.log(days);

/*

1. EXTRACTING ELEMENTS

=============================================================
slice();
=============================================================
*/

var weekDays = days.slice(0,5);
console.log(weekDays);

var weekEnds = days.slice(5);
console.log(weekEnds);