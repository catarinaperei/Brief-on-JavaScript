function greet() {
    var greeting;
    var time = new Date().getHours()

    if (time <= 11) {
        greeting = "Good morning!";
    }
    else if (time <= 17) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good evening!"
    }
    document.getElementById("p1").innerHTML = "the current time is" + time + "the greeting is" + greeting
}