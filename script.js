const display = document.getElementById("display")
const Buttons = document.querySelectorAll(".btn")
const clearBtn = document.getElementById("clear")
const equalBtn = document.getElementById("equal")

Buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value = display.value + button.textContent
    })
})
clearBtn.addEventListener("click", () => {
    display.value = ""
})
// equalBtn.addEventListener("click", () => {
//     display.value = eval(display.value);
// })
equalBtn.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});
