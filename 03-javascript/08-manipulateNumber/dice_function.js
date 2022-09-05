function dice() {
    var rand = Math.random();               // random between 0.000 to 0.999 (with 16 decimal places)
    rand *= 6;
    rand += 1;
    rand = Math.floor(rand);
    console.log(rand);
    return;
}

dice();