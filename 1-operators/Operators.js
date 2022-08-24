/*
====================================
Arithmetic Operators   (8x)+(1x)
====================================

1. 4x - Familiar Operators      +   -   /   *
2. 2x - UnFamiliar Operators    **  %
3. 2x - Incremental Operators   ++  --
4. 1x - Precedence Operator     ()

====================================
*/

// Important Point 1:
var num = 1;
var newNum = num++;      // assign existing value to newNum first and then increment num afterwards

console.log(num,newNum);

// Important Point 2:
var num = 1;
var newNum = --num;      // decrease value of num first and then assign it newNum afterwards

console.log(num,newNum);

// Important Point 3:
console.log(4 + 4);
console.log("hello " + 4 + 4);   //In concatenation with strings, numbers are automatically converted to strings

// Important Point 4:
console.log(4 + 4);
console.log("4" + "4");   //JavaScript do not perform math operations on strings even if it is number
/*
====================================
Comparison Operators    (9x)
====================================

1. 2x - Equality Operators        ===   ==
2. 2x - Not Equality Operators    !==   !=
3. 2x - Greater Than Operators    >=    >
4. 2x - Less Than Operators       <     <
5. 1x - Ternary Operator          ?

====================================
*/

// Important Point 5:
var passMarks = 50;
var mathMarks = 45;
var englMarks = 60;

//                    condition    ?    true  :  false    
console.log(mathMarks >= passMarks ? "Passed" : "Failed");   // For single if else, use Ternary Operator
console.log(englMarks >= passMarks ? "Passed" : "Failed");

// Important Point 6:
if (5 === 5) {      // JavaScript has three equal operator ===
    console.log(false);
}

/*
====================================
Logical Operators   (3x)
====================================

1. 2x - And / Or Operators        &&   ||
2. 1x - Not Operator              !

====================================
*/

//Important Point 7:
    // Used in multiple conditions (e.g. in If Else)


// Important Point 8:

    // Prenthesis can be used in multiple conditions for precedence

/*
====================================
Assignment Operators   (7x)
====================================

1. 1x - Equal Operator              =
2. 6x - assigment with arithmetic   +=  %=  etc

====================================
*/

//Important Point 9: