/*
------------------ ROUNDING ------------------------------------------
======================================================================
Normal          Round up        Round Down      Rounding with decimal

Math.round()    Math.Ceil()     Math.floor()    var.toFixed(2)
======================================================================

----------- RANDOM -----------------
====================================
NORMAL

Math.random()
====================================
*/

// Important Point 1:
var x = Math.round(-1.5);   // always round up if decimal is 0.5 Output = -1
console.log(x);

var y = Math.floor(1.55);
console.log(y);

var z = Math.ceil(1.55);
console.log(z);

var a = 1.555;
a = a.toFixed(2);
console.log(a);

// Important Point 2:
var rand = Math.random();
console.log(rand);          // random between 0.000 to 0.999 (with 16 decimal places)