const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);



}
const colorContainers = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
    colorContainers.forEach((element) => {
        const newColorCode = randomColor();
        element.style.backgroundColor = "#" + newColorCode;
        element.innerText = "#" + newColorCode;

    })

}


function randomColor() {
    const charSet = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNumber = Math.floor(Math.random() * charSet.length);

        colorCode += charSet.substring(randomNumber, randomNumber + 1);


    }
    return colorCode;
}