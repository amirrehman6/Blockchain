
var blockPin  = "    |    ";
var slab_1    = "    ▄    ";
var slab_2    = "   ▄▄▄   ";
var slab_3    = "  ▄▄▄▄▄  ";
var blockBase = "=========";

var block_1 = [];
var block_2 = [];
var block_3 = [];

var blockDisplay = [];

block_1 = [blockPin, slab_1, slab_2, slab_3];
block_2 = [blockPin, blockPin, blockPin, blockPin];
block_3 = [blockPin, blockPin, blockPin, blockPin];

blockDisplay =  block_1[0] + "\t" + block_2[0] + "\t" + block_3[0] + "\n" +
                block_1[1] + "\t" + block_2[1] + "\t" + block_3[1] + "\n" +
                block_1[2] + "\t" + block_2[2] + "\t" + block_3[2] + "\n" +
                block_1[3] + "\t" + block_2[3] + "\t" + block_3[3] + "\n" +
                blockBase  + "\t" + blockBase  + "\t" + blockBase  + "\n" +
                "----1----"+ "\t" + "----2----"+ "\t" + "----3----"+ "\n";
console.log(blockDisplay);

    while (!(   block_2[0] === "    |    " &&
                block_2[1] === "    ▄    " &&
                block_2[2] === "   ▄▄▄   " &&
                block_2[3] === "  ▄▄▄▄▄  "
                )) {
    
    var mvFrom = parseInt(prompt("Move From:"));
    var mvTo =   parseInt(prompt("Move To:"));
    var mvFromIndex;
    var mvToIndex;

    if (mvFrom === 1 && mvTo === 2) {
        // determine index of both blocks for movement
        mvFromIndex = block_1.lastIndexOf(blockPin)+1;
        mvToIndex = block_2.lastIndexOf(blockPin);

        // perform the move
        block_2[mvToIndex] = block_1[mvFromIndex];
        block_1[mvFromIndex] = blockPin;
    }
    if (mvFrom === 2 && mvTo === 1) {
        // determine index of both blocks for movement
        mvFromIndex = block_2.lastIndexOf(blockPin)+1;
        mvToIndex = block_1.lastIndexOf(blockPin);

        // perform the move
        block_1[mvToIndex] = block_2[mvFromIndex];
        block_2[mvFromIndex] = blockPin;        
    }
    if (mvFrom === 1 && mvTo === 3) {
        // determine index of both blocks for movement
        mvFromIndex = block_1.lastIndexOf(blockPin)+1;
        mvToIndex = block_3.lastIndexOf(blockPin);

        // perform the move
        block_3[mvToIndex] = block_1[mvFromIndex];
        block_1[mvFromIndex] = blockPin;
    }
    if (mvFrom === 3 && mvTo === 1) {
        // determine index of both blocks for movement
        mvFromIndex = block_3.lastIndexOf(blockPin)+1;
        mvToIndex = block_1.lastIndexOf(blockPin);

        // perform the move
        block_1[mvToIndex] = block_3[mvFromIndex];
        block_3[mvFromIndex] = blockPin;
    }
    if (mvFrom === 3 && mvTo === 2) {
        // determine index of both blocks for movement
        mvFromIndex = block_3.lastIndexOf(blockPin)+1;
        mvToIndex = block_2.lastIndexOf(blockPin);

        // perform the move
        block_2[mvToIndex] = block_3[mvFromIndex];
        block_3[mvFromIndex] = blockPin;
    }
    if (mvFrom === 2 && mvTo === 3) {
        // determine index of both blocks for movement
        mvFromIndex = block_2.lastIndexOf(blockPin)+1;
        mvToIndex = block_3.lastIndexOf(blockPin);

        // perform the move
        block_3[mvToIndex] = block_2[mvFromIndex];
        block_2[mvFromIndex] = blockPin;
    }
    
//    passed = block_2 === blockWinner ? 1 : 0;
//    console.log(block_2 === blockWinner ? 1 : 0 );

    console.log(mvFromIndex);
    console.log(mvToIndex);
    console.log(block_2);

    // Update the display
    blockDisplay =  block_1[0] + "\t" + block_2[0] + "\t" + block_3[0] + "\n" +
                    block_1[1] + "\t" + block_2[1] + "\t" + block_3[1] + "\n" +
                    block_1[2] + "\t" + block_2[2] + "\t" + block_3[2] + "\n" +
                    block_1[3] + "\t" + block_2[3] + "\t" + block_3[3] + "\n" +
                    blockBase  + "\t" + blockBase  + "\t" + blockBase  + "\n" +
                    "----1----"+ "\t" + "----2----"+ "\t" + "----3----"+ "\n";
    console.log(blockDisplay);
}

console.log("Hurray! You did it");