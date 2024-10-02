const textareaEl = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updatteCounter();
})

updatteCounter();

function updatteCounter() {
    totalCounter.innerText = textareaEl.value.length;
    remainingCounter.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}