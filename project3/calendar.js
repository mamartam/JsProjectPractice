
const monthName = document.getElementById('month-name');
const dayName = document.getElementById('day-name');
const dayNamber = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleDateString("en", {
    month: "long"
})

dayName.innerText = date.toLocaleString('en', {
    weekday: "long"
})
dayNamber.innerText = data.getDate();
yearEl.innerText = date.getFullYear();
