console.log("js running");
const frstinput = document.getElementById("frstinput");
const secinput = document.getElementById("secinput");
const find = document.getElementById("find");
const result = document.getElementById("result");
const find2 = document.getElementById("find2");

const resultLabel = document.getElementById("result-label");
const secondLabel = document.getElementById("second-label");
const secondPrefix = document.getElementById("second-prefix");

let activeInput = frstinput;

// Mobile keyboard ko open hone se rokna
[frstinput, secinput].forEach((input) => {

    input.setAttribute("readonly", true);

    input.addEventListener("focus", () => {
        input.blur();
    });

    input.addEventListener("click", () => {
        activeInput = input;
    });

});

let currentMode = "weight";

frstinput.addEventListener("focus", () => {
    activeInput = frstinput;
});

secinput.addEventListener("focus", () => {
    activeInput = secinput;
});

// Calculator keypad functionality

document.querySelectorAll("[data-key]").forEach((button) => {

    button.addEventListener("click", () => {

        const key = button.dataset.key;

        if (key === "clear") {
            activeInput.value = "";
        } else if (key === "backspace") {
            activeInput.value = activeInput.value.slice(0, -1);
        } else if (key === ".") {
            if (!activeInput.value.includes(".")) {
                activeInput.value += ".";
            }
        } else {
            activeInput.value += key;
        }

        result.textContent = "—";
        resultLabel.textContent = "Ready to calculate";
    });

});

function updateMode(mode) {

    currentMode = mode;

    if (mode === "weight") {
        secondLabel.textContent = "Amount in Rupees";
        secondPrefix.textContent = "₹";
        secinput.placeholder = "Enter amount";
    } else {
        secondLabel.textContent = "Weight in Kilograms";
        secondPrefix.textContent = "kg";
        secinput.placeholder = "Enter weight";
    }
}

function getValidNumbers() {

    const a = Number(frstinput.value);
    const b = Number(secinput.value);

    if (
        frstinput.value.trim() === "" ||
        secinput.value.trim() === "" ||
        !Number.isFinite(a) ||
        !Number.isFinite(b) ||
        a <= 0 ||
        b <= 0
    ) {
        alert("Please enter valid numbers greater than zero");
        return null;
    }

    return { a, b };
}

find.addEventListener("click", () => {

    updateMode("weight");

    const values = getValidNumbers();

    if (!values) {
        return;
    }

    const a = values.a;
    const b = values.b;

    console.log(a);

    const pofone = 1000 / a;

    console.log(pofone);

    const total = pofone * b;

    console.log(total + "g");

    if (total > 1000) {
        result.textContent =
            (total / 1000).toLocaleString("en-IN", {
                maximumFractionDigits: 3
            }) + " kg";
    } else {
        result.textContent =
            Math.floor(total) + " g";
    }

    if (b == a) {
        result.textContent = "1 kg";
    }

    resultLabel.textContent = "Calculated weight";
});

// find the value in rupees

find2.addEventListener("click", () => {

    updateMode("rupees");

    const values = getValidNumbers();

    if (!values) {
        return;
    }

    const a = values.a;
    const b = values.b;

    const total = a * b;

    result.textContent = "₹" + total.toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });

    resultLabel.textContent = "Total amount";
});

if (frstinput.value === "" && secinput.value === "") {
    result.textContent = "—";
}
