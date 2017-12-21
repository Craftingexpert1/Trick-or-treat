//mdc stuff
var dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);
const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
const dataObj = {
    message: "This extension uses cookies to save your progress!",
    actionText: 'Got it',
    timeout: 5000,
    actionHandler: function () {
        console.log('Got it!');
    }
};
mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
mdc.ripple.MDCRipple.attachTo(document.querySelector('#totbutton'));

snackbar.show(dataObj);
//regular stuff
//my comment here, and another new comment
var candy = document.getElementById("candy");
var candies = ["Snickers(stop that, will you?)", "Reese's", "Milky Way(the chocolate, not  the galaxy)", "Three Musketeers(the candy though)", "Kit Kat"];
var hmc = document.getElementById("hmc");
var stages = document.getElementById("stages");
var log = document.getElementById("log");
var log_content;
var multiplier = 1;
var lastKeys = [];
var l = 0;
var candyCount = 0;
var ub = "";
var hmc = document.querySelector("#hmc");
var cpsText = document.querySelector("#cps");
var cps = multiplier * l;
cpsText.innerHTML = "Candy Per Second: " + cps;
String.prototype.r = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
var cc = getCookie("cc");
var bu = getCookie("buyUnlocked");
if (bu != "") {
    ub = bu;
    document.querySelector("#computer_button").style.display = bu.length > 0 ? "block" : "none";
    document.querySelector("#car_button").style.display = bu.length > 1 ? "block" : "none";
    document.querySelector("#house_button").style.display = bu.length > 2 ? "block" : "none";
    document.querySelector("#mansion_button").style.display = bu.length > 3 ? "block" : "none";
    document.querySelector("#earth_button").style.display = bu.length > 4 ? "block" : "none";
    document.querySelector("#galaxy_button").style.display = bu.length > 5 ? "block" : "none";
    document.querySelector("#universe_button").style.display = bu.length > 6 ? "block" : "none";
}
if (cc != "") {
    var x = Number(cc);
    candyCount = x;
    if (candyCount < 1000) {
        hmc.innerHTML = "How much candy you have: " + candyCount;
    }
    if (candyCount >= 1000) {
        var y = candyCount / 1000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "K";
    }
    if (candyCount >= 1000000) {
        var y = candyCount / 1000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "M";
    }
    if (candyCount >= 1000000000) {
        var y = candyCount / 1000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "B";
    }
    if (candyCount >= 1000000000000) {
        var y = candyCount / 1000000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "T";
    }
}
var mult_cookie = getCookie("multiplier");
if (mult_cookie != "") {
    var clost = Number(mult_cookie);
    var multiplier_text = document.getElementById("multiplier");
    multiplier.innerHTML = "Multiplier:" + clost;
    multiplier = clost;
}
var log_cookie = getCookie("log");
if (log_cookie != "") {
    var duck = log_cookie;
    log_content = duck;
    log.innerHTML = duck.charAt(0).toUpperCase() + duck.slice(1);
}
var jobcookie = getCookie("job");
if (jobcookie != "") {
    var jl = Number(jobcookie);
    document.querySelector("#jobs").innerHTML = "Jobs: " + jl;
    l = jl;
    for (i = 0; i < l; i++) {
        clickJob();
    }
}
var multiplier_text = document.getElementById("multiplier");
multiplier_text.innerHTML = "Multiplier:" + multiplier;
var cpsText = document.querySelector("#cps");
var cps = multiplier * l;
cpsText.innerHTML = "Candy Per Second: " + cps;
document.getElementById("totbutton").addEventListener("click", tot);
function tot() {
    var candy = document.getElementById("candy");
    candy.innerHTML = "You get: " + candies[Math.floor(Math.random() * 5)];
    candyCount = candyCount + 1 * multiplier;
    if (candyCount < 1000) {
        hmc.innerHTML = "How much candy you have: " + candyCount;
    }
    if (candyCount >= 1000) {
        var y = candyCount / 1000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "K";
    }
    if (candyCount >= 1000000) {
        var y = candyCount / 1000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "M";
    }
    if (candyCount >= 1000000000) {
        var y = candyCount / 1000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "B";
    }
    if (candyCount >= 1000000000000) {
        var y = candyCount / 1000000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "T";
    }
    setCookie("cc", candyCount, 30);
};
document.getElementById("ipod_button").addEventListener("click", candyBuyIpod);
function candyBuyIpod() {
    candyBuy(1000, "iPod");
}
document.getElementById("job_button").addEventListener("click", candyBuyJob);
function candyBuyJob() {
    candyBuy(100, "job");
}
document.getElementById("costumeswitch_button").addEventListener("click", candyBuyCostumeSwitch);
function candyBuyCostumeSwitch() {
    candyBuy(100, "costume switch");
}
document.getElementById("computer_button").addEventListener("click", candyBuyComputer);
function candyBuyComputer() {
    candyBuy(10000, "computer");
}
document.getElementById("car_button").addEventListener("click", candyBuyCar);
function candyBuyCar() {
    candyBuy(50000, "car");
}
document.getElementById("house_button").addEventListener("click", candyBuyHouse);
function candyBuyHouse() {
    candyBuy(100000, "house");
}
document.getElementById("mansion_button").addEventListener("click", candyBuyMansion);
function candyBuyMansion() {
    candyBuy(1000000, "mansion");
}
document.getElementById("earth_button").addEventListener("click", candyBuyEarth);
function candyBuyEarth() {
    candyBuy(1000000000, "earth");
}
document.getElementById("galaxy_button").addEventListener("click", candyBuyGalaxy);
function candyBuyGalaxy() {
    candyBuy(50000000000, "galaxy");
}
document.getElementById("universe_button").addEventListener("click", candyBuyUniverse);
function candyBuyUniverse() {
    candyBuy(10000000000000, "universe");
}
function candyBuy(c, thing) {
    if (candyCount >= c) {
        candyCount = candyCount - c;
        if (candyCount < 1000) {
            hmc.innerHTML = "How much candy you have: " + candyCount;
        }
        if (candyCount >= 1000) {
            var y = candyCount / 1000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = "How much candy you have: " + y + "K";
        }
        if (candyCount >= 1000000) {
            var y = candyCount / 1000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = "How much candy you have: " + y + "M";
        }
        if (candyCount >= 1000000000) {
            var y = candyCount / 1000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = "How much candy you have: " + y + "B";
        }
        if (candyCount >= 1000000000000) {
            var y = candyCount / 1000000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = "How much candy you have: " + y + "T";
        }
        document.getElementById('error').innerHTML = "You got a(n) " + thing + ".";
        setCookie("cc", candyCount, 30);
        if (thing === 'job') {
            clickJob();
            l = l + 1;
            document.getElementById('jobs').innerHTML = "Jobs: " + l;
            setCookie("job", l, 30);
            cps = multiplier * l;
            cpsText.innerHTML = "Candy Per Second: " + cps;
        }
        if (thing === 'costume switch') {
            multiplier = multiplier + 1;
            setCookie("multiplier", multiplier, 30);
            multiplier_text.innerHTML = "Multiplier:" + multiplier;
            cps = multiplier * l;
            cpsText.innerHTML = "Candy Per Second: " + cps;
        }
        if (thing === 'iPod') {
            document.getElementById("computer_button").style.display = "block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(0, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'computer') {
            document.getElementById("car_button").style.display = "block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ",";
            setCookie("log", log_content, 30);
            ub = ub.r(1, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'car') {
            document.getElementById("house_button").style.display = "block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ",";
            setCookie("log", log_content, 30);
            ub = ub.r(2, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'house') {
            document.getElementById("mansion_button").style.display = "block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ",";
            setCookie("log", log_content, 30);
            ub = ub.r(3, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'mansion') {
            document.getElementById("earth_button").style.display = "block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ",";
            setCookie("log", log_content, 30);
            ub = ub.r(4, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'earth') {
            document.getElementById("galaxy_button").style.display = "block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ",";
            setCookie("log", log_content, 30);
            ub = ub.r(5, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'galaxy') {
            document.getElementById("universe_button").style.display = "block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ",";
            setCookie("log", log_content, 30);
            ub = ub.r(6, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'universe') {
            document.querySelector("#game").style.display = "none";
            document.querySelector("#beat_game").style.display = "block";
            candyCount = 0;
            l = 0;
            multiplier = 1;
            log_content = "";
            ub = "";
        }
    }
    else {
        document.getElementById('error').innerHTML = "You do not have enough candy for a(n) " + thing + ". Get some more!";
    }
};

function job() {
    candyCount = candyCount + 1 * multiplier;
    if (candyCount < 1000) {
        hmc.innerHTML = "How much candy you have: " + candyCount;

    }
    if (candyCount >= 1000) {
        var y = candyCount / 1000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "K";
    }
    if (candyCount >= 1000000) {
        var y = candyCount / 1000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "M";
    }
    if (candyCount >= 1000000000) {
        var y = candyCount / 1000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "B";
    }
    if (candyCount >= 1000000000000) {
        var y = candyCount / 1000000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = "How much candy you have: " + y + "T";
    }
    setCookie("cc", candyCount, 30);
}
function clickJob() {
    setInterval(job, 1000);
}

//free gift!
var giftTimer = document.getElementById("gift-timer");
date = new Date().getTime();
var gifts = ["candy", "jobs", "multiplier"];
var giftAvailable = "no";
var gcdd = getCookie("giftCDD");
var ga = getCookie("giftAvailable");
if (gcdd != "" && ga != "") {
    giftAvailable = ga;
    if (ga != "yes") {
        // Set the date we're counting down to
        var countDownDate = gcdd;
        setCookie("giftCDD", countDownDate, 30);
        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            giftTimer.innerHTML = "Free Gift in " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                giftTimer.innerHTML = "Click to collect your Free Gift!";
                giftAvailable = "yes";
                setCookie("giftAvailable", giftAvailable, 30);
            }
        }, 1000);
    } else {
        giftTimer.innerHTML = "Click to collect your Free Gift!";
    }
} else {
    // Set the date we're counting down to
    var countDownDate = date + 20000;
    setCookie("giftCDD", countDownDate, 30);
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        giftTimer.innerHTML = "Free Gift in " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            giftTimer.innerHTML = "Click to collect your Free Gift!";
            giftAvailable = "yes";
            setCookie("giftAvailable", giftAvailable, 30);
        }
    }, 1000);
}
giftTimer.addEventListener("click", function () {
    if (giftAvailable == "yes") {
        giftAvailable = "no";
        var selectedGift = null;
        selectedGift = gifts[Math.floor(Math.random() * gifts.length)];
        if (selectedGift == gifts[0]){
            var given = Math.floor(Math.random() * (candyCount / 1.5));
            candyCount = candyCount + given;
            document.querySelector("#error").innerHTML = "You got " + given + " candies in your Free Gift!";
        } if (selectedGift == gifts[1]){
            var given = Math.floor(Math.random() * (l / 1.5));
            l = l + given;
            document.querySelector("#error").innerHTML = "You got " + given + " jobs in your Free Gift!";
        } if (selectedGift == gifts[2]){
            var given = Math.floor(Math.random() * (multiplier / 1.5));
            multiplier = multiplier + given;
            document.querySelector("#error").innerHTML = "You got +" + given + " multiplier in your Free Gift!";
        }
        setCookie("giftAvailable", giftAvailable, 30);
        date = new Date().getTime();
        // Set the date we're counting down to
        var countDownDate = date + 20000;
        setCookie("giftCDD", countDownDate, 30);
        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();
            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            giftTimer.innerHTML = "Free Gift in " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                giftAvailable = "yes";
                giftTimer.innerHTML = "Click to collect your Free Gift!";
                setCookie("giftAvailable", giftAvailable, 30);
            }
        }, 1000);
    };
});

//code for cheat code

var secret = "go1";
document.addEventListener("keydown", function (event) {
    if (lastKeys.length < 3) {
        lastKeys.push(event.key);

    } else {
        lastKeys.shift();
        lastKeys.push(event.key);
    }

    if (lastKeys.join('') === secret) {
        console.log("secret entered");
        multiplier = multiplier * 10;
        multiplier_text.innerHTML = "Multiplier:" + multiplier;
        setCookie("multiplier", multiplier, 30);
    }
})


document.body.onload = function () {
    checkCookie();
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        document.getElementById("welcome").innerHTML = "Welcome back " + user;
        document.getElementById("name-side").innerHTML = "Name: " + user;
    } else {
        dialog.show()
        document.querySelector(".mdc-dialog__footer__button--accept").addEventListener("click", function () {
            user = document.querySelector("#name").value;
            guest = "Guest " + Math.floor((Math.random() * 1197381793814) + 1010);
            if (user != "" && user != null) {
                setCookie("username", user, 30);
                document.getElementById("welcome").innerHTML = "Welcome " + user;
                document.getElementById("name-side").innerHTML = "Name: " + user;
            } else {
                setCookie("username", guest, 30);
                document.getElementById("welcome").innerHTML = "Welcome " + guest;
                document.getElementById("name-side").innerHTML = "Name: " + guest;
            }
        });
    }
}

var cls = function () {
    setCookie("buyUnlocked", ub, 30);
    setCookie("cc", candyCount, 30);
    setCookie("job", l, 30);
    setCookie("multiplier", multiplier, 30);
    setCookie("log", log_content, 30);
    setCookie("giftCDD", countDownDate, 30);
    setCookie("giftAvailable", giftAvailable, 30)
};

window.onclose = cls;