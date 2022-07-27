
function billTot(mercTot) {
    mercTot = Number(mercTot);
    var orderTot;
    if (mercTot >= 100) {
        orderTot = mercTot;
    } else if (mercTot <= 50) {
        orderTot = mercTot + 5;
    } else {
        orderTot = mercTot + 5 + (0.03 * (mercTot - 50));
    }
    return orderTot;
}
var lmercTot = prompt("enter cart value");
document.write("your bill is "+ billTot(lmercTot));