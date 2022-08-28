/*

//simple 'for loop'
var cities = ["islamabad","lahore","karachi","faisalabad","quetta"];
for (var i = 0; i <= 4; i++) {
    document.write(cities[i],"<br>");
}

*/

//'for loop' with 'if' statement
var cities = ["islamabad","lahore","karachi","faisalabad","quetta"];
var cityCheck = prompt("enter your city name");
var inList = 0;                                 // required if match not found
for (var i = 0; i < cities.length; i++) {      // 3x mandatory conditions
    if (cityCheck === cities[i]) {
        document.write(cities[i]+" is a large city");
        inList = 1;                             // required if match not found
        break;                                  // stop loop if match is found
    }
}
// message to display if input not found in loop
if (inList !== 1) {
    document.write(cityCheck + " is not a large city or may not be even a city")
}