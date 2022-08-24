//declaration of variables
var cities = ["islamabad","lahore","karachi","faisalabad","quetta"];
var cityCheck = prompt("enter your city name"); // user input
var inList = 0;                                 // required if match not found

cityCheck = cityCheck.toLowerCase();            //lowering case of input

// fixing Initial Cap Case for display
var firstChar = cityCheck.slice(0,1);
var restChars = cityCheck.slice(1);
firstChar = firstChar.toUpperCase();

var city = firstChar+restChars;

//loop for matching input with dataset
for (var i = 0; i < cities.length; i++) {      // 3x mandatory conditions
    if (cityCheck === cities[i]) {
        document.write(city+" is a large city");
        inList = 1;                             // required if match not found
        break;                                  // stop loop if match is found
    }
}
// message to display if input not found in loop
if (inList !== 1) {
    document.write(city + " is not a large city or may not be even a city")
}