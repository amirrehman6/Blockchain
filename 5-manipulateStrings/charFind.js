// finding double spaces in text using for loop
var inputText = prompt("enter some text");
for (i = 0; i < inputText.length;i++) {
    if (inputText.slice(i,i+2) === "  ") {      // i+2 is to get two characters
        alert("no double spaces");
    }
}
document.write("you enter: "+inputText);        // print output