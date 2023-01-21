let eventDate = new Date("Sep 04, 2024 22:05:00").getTime();

let countdown = setInterval(function() {

let now = new Date().getTime();
let timeLeft = eventDate - now;
let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
days = (days < 10) ? "0" + days : days;
hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;
  
document.getElementById("days").innerHTML = days ;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if (timeLeft < 0) {
		clearInterval(countdown);
		document.getElementById("days").innerHTML = "00";
		document.getElementById("hours").innerHTML = "00";
		document.getElementById("minutes").innerHTML ="00" ;
		document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
