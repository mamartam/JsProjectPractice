const container = document.querySelector(".container");

const careers = ['developer', 'learner', 'freelancer'];
let careerIndex = 0;
let characterIndex = 0;
function updateText() {
    characterIndex++;
    container.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    setTimeout(updateText, 400);
    if (careerIndex === careers.length) {
        careerIndex = 0;
    }

}
updateText();
