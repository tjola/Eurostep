/**Write a javascript function that iterates from 0 to 100 and console logs the numbers. For every
multiple of 3 it logs “Euro”, for every multiple of 5 it logs “Step” and for every multiple of both 3
and 5 it logs “Eurostep”. */

function printNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Eurostep");
        } else if (i % 3 === 0) {
            console.log("Euro");
        } else if (i % 5 === 0) {
            console.log("Step");
        } else {
            console.log(i);
        }
    }
}

printNumbers();