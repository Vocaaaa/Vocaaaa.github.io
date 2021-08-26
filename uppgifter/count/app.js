const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

setInterval(update, 100);
function update() {
    

const now = new Date();
const endOfYear = new Date((now.getFullYear() + 1) + "-01-01 00:00:00");

const msToEndOfYear = endOfYear.getTime() - now.getTime();
const days = Math.floor(msToEndOfYear / 86400000);
const hours = Math.floor(msToEndOfYear / 3600000) % 24;
const minutes = Math.floor(msToEndOfYear / 60000) % 60;
const seconds = Math.floor(msToEndOfYear / 1000) % 60;

daysElement.textContent = days + " days";
hoursElement.textContent = hours + " hours";
minutesElement.textContent = minutes + " minutes";
secondsElement.textContent = seconds + " seconds";
}