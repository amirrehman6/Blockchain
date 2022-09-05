/*
=====================================================
CONVERTING STRING TO NUMBERS
=====================================================

parseInt(str)      parseFloat(str)      Number(str)

=====================================================

*/

// Important Point 1:
var str = '125';                        // string with number are treated as number for arithmetic operations (- * /) (not +)
console.log(typeof(str));

var num = str - 90;
console.log(num);
console.log(typeof(num));