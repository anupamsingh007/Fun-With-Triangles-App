const inputs = document.querySelectorAll(".angle-input");
const btn = document.querySelector("#is-triangle-btn");
const result = document.querySelector(".output");

function triangleArea(base, height) {
    const area = ((base * height) / 2);
    return area;
}

function isArea() {
    const area = triangleArea(
        Number(inputs[0].value),
        Number(inputs[1].value),
    );

    result.innerText = `Triangle Area = ${area}cm²`;


}

btn.addEventListener("click", isArea);