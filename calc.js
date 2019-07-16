// node calc.js 1 2 = 3
// [node] [filename] [operand] [arg1] [arg2] = [output]
var calc = process.argv[2];
var num1 = process.argv[3];
var num2 = process.argv[4];

var pnum1 = parseFloat(num1);
var pnum2 = parseFloat(num2);

// if (num1 === num2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

var output;

if (calc == 'add') {
    output = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2} = ${output}`);
} else if (calc == 'minus') {
    output = pnum1 - pnum2;
    console.log(`${num1} - ${num2} = ${output}`);
} else if (calc == 'divide' || calc == '/') {
    output = pnum1 / pnum2;
    console.log(`${num1} / ${num2} = ${output}`);
} else if (calc == 'multiply' || calc == '*') { // * doesnt work! LOL WHY
    output = pnum1 * pnum2;
    console.log(`${num1} * ${num2} = ${output}`);
} else if (calc == '') {

}

console.log(typeof num1, num2);
console.log(typeof pnum1, pnum2);

