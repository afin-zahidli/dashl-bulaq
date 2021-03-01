function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (start - end) + end);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);

}

var obj = document.getElementById("value");
animateValue(obj, 1500000, 0, 5000);


var five = document.getElementById("five-number");
animateValue(five, 5, 0, 5000);

var two = document.getElementById("two-number");
animateValue(two, 2, 0, 5000);
