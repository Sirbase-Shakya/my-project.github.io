function updateCountdown() {
    const now = new Date().getTime();
    const target = new Date("2026-04-03T01:10:00+05:45")
    let distance = target - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((distance / (1000 * 60)) % (60));
    const secs = Math.floor((distance / (1000)) % (60));
    if (days == 1)
        document.getElementById("days").innerHTML = days + "<br>day";
    else
        document.getElementById("days").innerHTML = days + "<br>days";
    if (hours == 1)
        document.getElementById("hours").innerHTML = hours + "<br>hour";
    else
        document.getElementById("hours").innerHTML = hours + "<br>hours";
    if (mins == 1)
        document.getElementById("minutes").innerHTML = mins + "<br>minute";
    else
        document.getElementById("minutes").innerHTML = mins + "<br>minutes";
    if (secs == 1)
        document.getElementById("seconds").innerHTML = secs + "<br>second";
    else
        document.getElementById("seconds").innerHTML = secs + "<br>seconds";
}

let target_interval = setInterval(updateCountdown, 1000);