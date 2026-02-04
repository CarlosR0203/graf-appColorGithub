const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const redBox = document.getElementById("redBox");
const greenBox = document.getElementById("greenBox");
const blueBox = document.getElementById("blueBox");

const colorBoxFinal = document.getElementById("colorBoxFinal");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

const colorPicker = document.getElementById("colorPicker");

function updateAll(r, g, b) {
    // sliders y números
    red.value = redNum.value = r;
    green.value = greenNum.value = g;
    blue.value = blueNum.value = b;

    // cajas individuales
    redBox.style.backgroundColor = `rgb(${r},0,0)`;
    greenBox.style.backgroundColor = `rgb(0,${g},0)`;
    blueBox.style.backgroundColor = `rgb(0,0,${b})`;

    // color final
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBoxFinal.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    const hex = "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");

    hexValue.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}

function fromSliders() {
    updateAll(red.value, green.value, blue.value);
}

function fromInputs() {
    updateAll(redNum.value, greenNum.value, blueNum.value);
}

function fromColorPicker() {
    const hex = colorPicker.value;
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    updateAll(r, g, b);
}

red.addEventListener("input", fromSliders);
green.addEventListener("input", fromSliders);
blue.addEventListener("input", fromSliders);

redNum.addEventListener("input", fromInputs);
greenNum.addEventListener("input", fromInputs);
blueNum.addEventListener("input", fromInputs);

colorPicker.addEventListener("input", fromColorPicker);