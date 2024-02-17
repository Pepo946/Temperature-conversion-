let textbox = document.getElementById("textbox");
let tofarhreneit = document.getElementById("tofarhreneit");
let tocelsius = document.getElementById("tocelsius");
let result = document.getElementById("result");
let temp;

function convert() {
    if (tofarhreneit.checked) {
        temp = parseFloat(textbox.value);
        temp = (temp * 9/5) + 32;
        result.textContent = temp.toFixed(1) + "F";
    } else if (tocelsius.checked) {
        temp = parseFloat(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "C";
    } else {
        result.textContent = "Select a Unit";
    }
}
