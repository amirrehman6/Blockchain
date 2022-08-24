/*
// creating alert in browser
alert("Amir Rehman")';
*/

/*
//declaring variable and assigning value separately
var firstName;
firstName = "amir";
alert(firstName);
*/

/*
//declaring variable and assigning value in single line
var lastName = 'rehman';
alert(lastName);
*/

/*
//declaring variable and assigning value containing ' in text
var message = "It's Alright";
alert(message);
*/

/*
// user input and displaying in alert

var fullName = prompt("Whats your name");
alert("hello! " + fullName);
*/

/*
document.write(4+4);
*/

/*
var age = prompt("whats your age!");
if (age >=18) {
    document.write("You can enter as your age is " + age + " years old");
} else {
    document.write("no entry allowed");
}
*/

// declaration of array and assignment
var cities = [];
cities = ["islamabad","lahore","karachi"];
document.write(cities);
document.write("<br>");

//printing only specific value of array
document.write(cities[0]);
document.write("<br>");

//deleting last value in array
cities.pop();
document.write(cities);
document.write("<br>");

//adding value(s) at the end of array
cities.push("quetta","jehlum");
document.write(cities);
document.write("<br>");

//deleting first value in array
cities.shift();
document.write(cities);
document.write("<br>");

//adding first value(s) in array
cities.unshift("tokyo","barcelona");
document.write(cities);
document.write("<br>");

//adding anywhere, while removing items
cities.splice(3,1,"islamabad","gujrat");
document.write(cities);
document.write("<br>");

