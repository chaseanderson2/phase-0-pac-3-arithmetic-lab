function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b)   {
    return a / b;
}

function increment(n)   {
    n++;
    return n;
}

function decrement(n)   {
    n--;
    return n;
}

function makeInt(string)    {
    var parsedInt = parseInt(string, 10);
    return parsedInt;
}

function preserveDecimal(string)    {
    var parsedFloat = parseFloat(string);
    return parsedFloat;
}