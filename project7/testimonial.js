const testimonials = [
    {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely satisfied with Apple's laptop. The product is reliable and exceeded all my expectations. I highly recommend it to anyone looking for a top-quality device."
    },
    {
        name: "Alexandr Davidson",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am extremely satisfied with Apple's tables. They are not only stylish but also incredibly efficient, making my work much easier. I highly recommend Apple for anyone looking for top-quality furniture."
    },
    {
        name: "Oliver Stevens",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Apple's tables are truly efficient, offering a perfect blend of style and functionality. I am thrilled with the quality and design of their products. I highly recommend Apple for anyone looking for top-notch furniture."
    },

]

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userName = document.querySelector(".userName");

let idx = 0;
updateTestimonials();
function updateTestimonials() {
    const { name, photoUrl, text } = testimonials[idx];
    imageEl.src = photoUrl;
    textEl.innerText = text;
    userName.innerText = name;
    idx++;
    if (idx === testimonials.length) {

        idx = 0;
    }
    setTimeout(() => {
        updateTestimonials();

    }, 10000)


}