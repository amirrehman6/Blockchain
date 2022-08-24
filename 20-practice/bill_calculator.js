//obtain input from user
var userInput = prompt("enter units consumed", 0);
userInput = parseInt(userInput);

// call function
document.write(billCalc(userInput));

//function
function billCalc(unitsConsumed) {

  var slab1_$ = 0;
  var slab2_$ = 0;
  var slab3_$ = 0;
  var billAmount;

  var slab1_rate = 7;
  var slab2_rate = 10;
  var slab3_rate = 13;

  var slab1_UnitsLimit = 100;
  var slab2_UnitsLimit = 200;
  var slab3_UnitsLimit = 300;

  if (unitsConsumed <= slab1_UnitsLimit) {
    slab1_$ = unitsConsumed * slab1_rate;
    billAmount = slab1_$;
  } else if (unitsConsumed <= slab2_UnitsLimit) {
    slab1_$ = slab1_UnitsLimit * slab1_rate;
    slab2_$ = (unitsConsumed - slab1_UnitsLimit) * slab2_rate;
    billAmount = slab1_$ + slab2_$;
  } else {
    slab1_$ = slab1_UnitsLimit * slab1_rate;
    slab2_$ = (slab2_UnitsLimit - slab1_UnitsLimit) * slab2_rate;
    slab3_$ = (unitsConsumed - slab2_UnitsLimit) * slab3_rate;
    billAmount = slab1_$ + slab2_$ + slab3_$;
  }

  // printing output
  document.write("Total bill is Rs. ", billAmount);
  document.write("<br><br>", "Breakup is as follows:");
  document.write("<br>", "Units upto 100: Rs. ", slab1_$);
  document.write("<br>", "Units upto 200: Rs. ", slab2_$);
  document.write("<br>", "Units above 300: Rs. ", slab3_$);

  // var billData = [billAmount,slab1_$,slab2_$,slab3_$];
  // return billData;
  return "";
}