/* ******************************************************
---------------- CONVERT NUMBER TO TEXT -----------------
/*******************************************************/

// INPUT & OUTPUT VARIABLES DECLARATION & INITIALIZATION

let numString = '12345678912';
let textString = "";

numString = parseInt(numString).toString();

// FUNCTION DECLARATION

function num2text(numString: string) {
    
    // VARIABLES FOR MANIPULATION
    let numArray = [];              // for char separation
    let numLoc = [];                // for char position in the number
    let numLocInGroup = [];         // to identify position in group of 3 numbers
    let numGroup = [];              // to identify position of the group

    // TEXT VALUES OF NUMBERS
    const text_1: any = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'};
    const text_2: any = {0:'ten',1:'eleven',2:'twelve',3:'thirteen',4:'fourteen',5:'fifteen',6:'sixteen',7:'seventeen',8:'eighteen',9:'ninteen'};
    const text_3: any = {1:'ten',2:'twenty',3:'thirty',4:'forty',5:'fifty',6:'sixty',7:'seventy',8:'eighty',9:'ninety'};
    const text_4: any = {1:'',2:'thousand',3:'million',4:'billion',5:'trillion',6:'quadrillion',7:'quintillion',8:'sextillion',9:'Septillion'};

    // CONERSION OF NUMBERS TO TEXT
    for (let i = 0; i < numString.length; i++) {

        // storing number characters and related parameters
        numArray[i] = numString[i];             // number broken into array
        numLoc[i] = (numString.length - i );    // to find position of digit
        numLocInGroup[i] = numLoc[i] % 3;       // to find four vs (forty or fourteen)
        numGroup[i] = numLoc[i] / 3;            // to find million billion etc   
        numGroup[i] = Math.ceil(numGroup[i]);
        
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
        }
        
        // obtaining text against million etc and hundreds
        if (!(numArray[i-2] === '0' && numArray[i-1] === '0' && numArray[i] === '0')) {
            if (numLocInGroup[i] === 1) {
                    textString += text_4[numGroup[i]] + " ";    // for unit digit attach million billion etc
            } else if(numLocInGroup[i] === 0 && numArray[i] !== '0') {
                    textString += "hundred ";                   // to place hundred on 100th digit
            }
        }
    }

    // FINALIZING STRING
    textString = textString.slice(0,-1);
    textString += "only"
}

// CALLING THE FUNCTION
num2text(numString);

// FUNCTION OUTPUT
console.log(numString);
console.log(textString);