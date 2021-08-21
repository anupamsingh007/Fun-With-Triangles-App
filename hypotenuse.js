const sides = document.querySelectorAll(".side-input");
const btn = document.querySelector('#hypotenuse-button');
const output = document.querySelector('#output');

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;

}


function calculatehypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    output.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;

}

btn.addEventListener('click', calculatehypotenuse)