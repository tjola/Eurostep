/**Write a javascript function that finds the factorial of a number that is passed as a parameter.
The factorial of a number is calculated by multiplying all numbers from the given number and
below.
Example: the factorial of 5 is 5*4*3*2*1 = 120 */

const num = 5;
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(factorial(num));