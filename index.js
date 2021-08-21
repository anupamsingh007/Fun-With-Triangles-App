const inputs = document.querySelectorAll(".angle-input");
const btn = document.querySelector("#is-triangle-btn");
const result = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle() {
    const sum = sumOfAngles(
        Number(inputs[0].value),
        Number(inputs[1].value),
        Number(inputs[2].value)
    );
    if (sum === 180) {
        result.innerText = "Yes!, the angles form a triangle 🔺";
    } else {
        result.innerText = "No Triangle is Formed ❌";
    }
}

btn.addEventListener("click", isTriangle);