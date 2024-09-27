const imageContainer = document.querySelector('.image-container');

const btn = document.querySelector('.btnRandom');
btn.addEventListener('click', () => {
    imgNumber = 10;
    // console.log("Clicked");
    addNewImages();
})

function addNewImages() {
    for (let i = 0; i < imgNumber; i++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)};`;
        imageContainer.appendChild(newImg);
    }
}