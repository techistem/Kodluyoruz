let nameElement = document.getElementById("name");
let hrsElement = document.getElementById("hrs");
let minElement = document.getElementById("min");
let secElement = document.getElementById("sec");
let dayElement = document.getElementById("day");

let newName = prompt("Write Your Name");
nameElement.innerHTML = `Welcome, ${newName}`;

function showTime() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentTime = new Date();

    hrsElement.innerHTML = currentTime.getHours();
    minElement.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    secElement.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
    dayElement.innerHTML = weekday[currentTime.getDay()];
}

// Update time once per second
setInterval(showTime, 1000);

// Update once as the page loads
showTime();
