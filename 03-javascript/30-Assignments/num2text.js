/*

PROBLEM DEFINITION:

Take number as input and convert the number to text
========================================================


LOGIC BUIDING:

Example number 1,214,067,891

1 = 10th [0] --> one + billion              >   1
2 = 9th [0] --> two  + hundred              >   3
1 = 8th [1] --> fourteen                    >   2
4 = 7th [2] --> <no> + million              >   1
0 = 6th [3] --> <no>
6 = 5th [4] --> fifty
7 = 4th [5] --> six + thousand
8 = 3th [6] --> seven + hundred
9 = 2th [7] --> eighty
1 = 1th [8] --> nine


// 1st digit is always one - nine + hundred (ignore zero) (ignore last value)
// 2nd digit is always i) twenty - ninety ii) ten - ninteen
// 3rd digit is always one - nine (ignore zero)

// group of three 
// 1st = n/a
// 2nd = thousand
// 3rd = million
// 4th = billion
*/

//============= PROGRAM CODE =================== 

// VARIABLES DECLARATION & INITIALIZATION
var numString = '0000007891';
var textString = "";

var numArray = [];              // for char separation
var numLoc = [];                // for char position in the number
var numLocInGroup = [];         // to identify position in group of 3 numbers
var numGroup = [];              // to identify position of the group

// TEXT VALUES OF NUMBERS
let text_1 = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'};
let text_2 = {1:'eleven',2:'twelve',3:'thirteen',4:'fourteen',5:'fifteen',6:'sixteen',7:'seventeen',8:'eighteen',9:'ninteen'};
let text_3 = {1:'ten',2:'twenty',3:'thirty',4:'forty',5:'fifty',6:'sixty',7:'seventy',8:'eighty',9:'ninety'};
let text_4 = {1:'',2:'thousand',3:'million',4:'billion',5:'trillion',6:'quadrillion',7:'quintillion',8:'sextillion',9:'Septillion'};

// STORING NUMBER CHARACTERS AND RELATED PARAMETERS 
for (let i = 0; i < numString.length; i++) {
    
    numArray[i] = numString[i];             // number broken into array
    numLoc[i] = (numString.length - i );    // to find position of digit
    numLocInGroup[i] = numLoc[i] % 3;       // to find four vs (forty or fourteen)
    numGroup[i] = numLoc[i] / 3;            // to find million billion etc   
    numGroup[i] = Math.ceil(numGroup[i]);

    // console.log(numArray[i], numLoc[i], numLocInGroup[i],numGroup[i]);
     
    // obtaining text against each number excluding zero
    if (!(numArray[i] === '0')) {
        
        if (numLocInGroup[i] !== 2) {                       // for 1st and 3rd char in group of 3
            if (numLocInGroup[i] === 1 && numArray[i-1] === '1') {
                // Dont print unit digit if 10th number is 1 i.e. eleven, tweleve
            } else {
                textString += text_1[numArray[i]] + " ";    
            }    
        } else if (numArray[i] === '1') {                    // for 2nd char in group of 3
            textString += text_2[numString[i+1]] + " "      
        } else {                                            // for 2nd char in group of 3
            textString += text_3[numArray[i]] + " ";        
        }
        if (numLocInGroup[i] === 1) {
            textString += text_4[numGroup[i]] + " ";
        } else if(numLocInGroup[i] === 0) {
                textString += "hundred ";
        }
    }    
}

textString += "only"
console.log(numString);
console.log(textString);