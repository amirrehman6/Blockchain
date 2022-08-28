// variables for blocks and their elements

var block_pin  = "    |    ";
var slab_1     = "    ▄    ";
var slab_2     = "   ▄▄▄   ";
var slab_3     = "  ▄▄▄▄▄  ";
var block_base = "♦♦♦♦♦♦♦♦♦";

var block_1 = [block_pin, slab_1, slab_2, slab_3, block_base];
var block_2 = [block_pin, block_pin, block_pin, block_pin, block_base];
var block_3 = [block_pin, block_pin, block_pin, block_pin, block_base];
var b_display;

var mvFrom;
var mvTo;
var blockFrom;
var blockTo;
var mvFromIndex;
var mvToIndex;

blockDisplay(); // run at the start

// main execution code

while (!(
        block_2[0] === "    |    " &&
        block_2[1] === "    ▄    " &&
        block_2[2] === "   ▄▄▄   " &&
        block_2[3] === "  ▄▄▄▄▄  " &&
        block_2[4] === "♦♦♦♦♦♦♦♦♦"
        )) {
  
  var mvFrom = parseInt(prompt("Move From:"));
  var mvTo = parseInt(prompt("Move To:"));
  var blockFrom = "block_" + mvFrom;
  var blockTo = "block_" + mvTo;
  var mvFromIndex = eval(blockFrom).lastIndexOf(block_pin) + 1;
  var mvToIndex = eval(blockTo).lastIndexOf(block_pin);

  if (
    eval(blockFrom)[mvFromIndex].trim().length <=
    eval(blockTo)[mvToIndex + 1].trim().length
  ) {
    moveSlab(mvFrom, mvTo);
  }
}

// Game Won
console.log("hurray! you did it");


function moveSlab(mvFrom, mvTo) {
  // check if mvFromBlock has any moveable piece
  if (mvFromIndex !== 4) {
    
    // execute the move
    eval(blockTo)[mvToIndex] = eval(blockFrom)[mvFromIndex];
    eval(blockFrom)[mvFromIndex] = block_pin;

    // update the screen
    blockDisplay(); 
  }
}

function blockDisplay() {
  b_display =   block_1[0] + "\t" + block_2[0] + "\t" + block_3[0] + "\n" +
                block_1[1] + "\t" + block_2[1] + "\t" + block_3[1] + "\n" + 
                block_1[2] + "\t" + block_2[2] + "\t" + block_3[2] + "\n" +
                block_1[3] + "\t" + block_2[3] + "\t" + block_3[3] + "\n" +
                block_base + "\t" + block_base + "\t" + block_base + "\n" +
                "♦♦  1  ♦♦" +"\t" + "♦♦  2  ♦♦"+ "\t" + "♦♦  3  ♦♦"+ "\n";
  
console.log(b_display);
}
