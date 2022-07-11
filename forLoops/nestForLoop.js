var firstName = ["Syed","Muhammad","Malik","Rana","Chaudhry"];
var lastName = ["Amir","Imran","Asif","Fayyaz","Asad"];
var fullName = [];
for (i = 0; i < firstName.length; i++) {
    for (j = 0; j < lastName.length; j++) {
        fullName.push(firstName[i]+" "+lastName[j]);        //creating full name
        document.write(fullName[fullName.length-1],"<br>"); //printing full name
    }
}

/*

// Printing full name list using for loop
for (i = 0; i < fullName.length;i++) {
    document.write(fullName[i]+"<br>");
}

*/