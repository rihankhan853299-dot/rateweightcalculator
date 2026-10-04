console.log("js running");
const frstinput = document.getElementById("frstinput");
const secinput = document.getElementById("secinput");
const find = document.getElementById("find");
const result = document.getElementById("result");
const find2 = document.getElementById("find2");

find.addEventListener("click", () => {

    const a = Number(frstinput.value);
    const b = Number(secinput.value);
    console.log(a);
    if (a == "" || isNaN(a)) { // or operoter
        // agr a ki value khali h ya a ki value Number(int) mein
        //  nhi h to if ki body k andar ka code chalao.
        alert("Please enter a valid number");
        return;
    }
    const pofone = 1000 / a;
    console.log(pofone);

    const total = pofone * b;
    console.log(total + "g");
    if (total > 1000) {
        result.textContent = total / 1000 + "kg";
    } else {
        result.textContent = Math.floor(total) + "g";
    }
    if (b == a) {
        result.textContent = "1kg";
    }
});

// find the value in rupees

find2.addEventListener("click", () => {
    const a = Number(frstinput.value);
    const b = Number(secinput.value);

    const total = a * b;
    result.textContent = "₹" + total;


})

if (frstinput.value === "" && secinput.value === "") {
    result.textContent = "";
}