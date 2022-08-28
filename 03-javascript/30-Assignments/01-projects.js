/*
=======================
 1st Class
 Project 2.1 - Page 84
 KM Converter
=======================
*/

var _km = prompt('enter distance in KMs');
var _miles = _km / 1.60934;

console.log("The distance of " + _km + " kms is equal to " + _miles.toFixed(4) + " miles");

/*
=======================
 1st Class
 Project 2.2 - Page 84
 BMI Calculator
=======================
*/

var weight = prompt('enter weight in lbs');
var height = prompt('enter height in inches');
var bmi;

weight /= 2.2046;
height *= 2.54;
bmi = weight / ((height/100)*(height/100));

console.log('weight(kg): '+ weight.toFixed(2) + '\nheight(cm): ' + height.toFixed(0) + '\nBMI: ' + bmi.toFixed(3));