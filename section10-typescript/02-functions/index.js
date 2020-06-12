"use strict";
function sum(a, b) {
    return a + b;
}
function mathOperation(callback, a, b) {
    return callback(a, b);
}
const result = mathOperation((a, b) => a + b, 5, 5);
console.log(result);
