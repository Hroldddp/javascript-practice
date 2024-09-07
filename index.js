let amount = 0;
// add transition
function add() {
    document.getElementById("result").innerHTML = `Amount: ${amount + 1}`;
    amount = amount + 1;
}
function add2() {
    document.getElementById("result").innerHTML = `Amount: ${amount + 2}`;
    amount = amount + 2;
}
function remove() {
    amount = amount - 1;
    if (amount > 0) {
        document.getElementById("result").innerHTML = `Amount: ${amount}`;
    }

    else if (amount < 0) {
        amount = 0;
        document.getElementById("result").innerHTML = `Amount: ${amount}`;
    }
}
function reset() {
    amount = 0;
    document.getElementById("result").innerHTML = `Amount: ${amount}`;
}