

// Important Point 1:
var mnths = [];                 // empty array
console.log(typeof(mnths));     // Array datatype is 'Object'


// Important Point 2:
var mixedArray = [8,"string", true];    // Array datatype is 'Object' and can have multiple datatypes in one array


// Important Point 3:
mnths[0,5,11] = "January","May",'November';     // you can leave gaps in arrays
console.log(mnths[5]);
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
Remove Element      pop()       shift()     splice()
Add Element         push()      unshift()   splice()
=============================================================
*/

var days = [];

days.push("Monday","Thursday","Wednesday");         //  add three elements at the end of array 
console.log(days);

days.splice(1,1);                                   //  start from 2nd element remove 1x element
console.log(days);

days.splice(1,0,"Tuesday");                         //  start from 2nd element remove 0 element and add 1x element
console.log(days);

days.push("Thursday","Friday","Saturday","Sunday","Monday");    // add 5x elements at the end of array
console.log(days);

days.pop();                                         //  remove 1x element at the end of array
console.log(days);

days.unshift("day");                                //  add element at the start of the array
console.log(days);

days.shift("day");                                  //  remove element at the start of the array
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