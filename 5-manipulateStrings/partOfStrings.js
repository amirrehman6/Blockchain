var month = prompt("Enter Month");
var monthAbrv;
if (month.length > 3) {
    monthAbrv = month.slice(0,3);
}
else {
    monthAbrv = month;
}
document.write(monthAbrv);
