let countdowndate = new Date("Jan 1, 2024 00:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance =  now - countdowndate;
    console.log(distance)

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}, 1000)