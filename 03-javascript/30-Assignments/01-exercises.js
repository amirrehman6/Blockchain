/*
=======================
 1st Class
 Exercise 2.1 - Page 68
=======================
*/

let str1 = 'Amir';
let str2 = "Rehman";
let val1 = undefined;
let val2 = null;
let myNum = 786;

console.log(str1, str2, val1, val2, myNum);

/*
=======================
 1st Class
 Exercise 2.2 - Page 69
=======================
*/

var firstName = 'Amir';
var age = 34;
var jsKnow = true;

if (jsKnow = true) {
    console.log('Hello, My name is '+ firstName + ', I am ' + age + ' years old and I can code JS');
}

/*
=======================
 1st Class
 Exercise 2.3 - Page 76
=======================
*/

var a = prompt("We are calculating hypotenuse of right-angled triangle.\n\n Enter base value");
var b = prompt("Enter altitude value");

var c = Math.sqrt((a*a) + (b*b));
console.log(c.toFixed(2));

/*
=======================
 1st Class
 Exercise 2.4 - Page 78
=======================
*/

var a = 1;
var b = 2; 
var c = 3;

a = a + b;
a = a / c;
c = c % b;

console.log(a, b, c);
