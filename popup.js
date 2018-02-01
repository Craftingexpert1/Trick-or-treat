//mdc stuff
var dialog = new mdc.dialog.MDCDialog(document.querySelector('#nameDialog'));
var updateDialog = new mdc.dialog.MDCDialog(document.querySelector('#updateDialog'));
var shopDialog = new mdc.dialog.MDCDialog(document.querySelector('#shop'));
var areYouSure = new mdc.dialog.MDCDialog(document.querySelector('#doureally'));
//var shopTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#shopTabBar'));
//mdc.tabs.MDCTabBar.attachTo(document.querySelector('#shopTabs'));
var shopButton = document.querySelector("#shopButton");
shopButton.addEventListener("click", function () {
    shopDialog.show();
});
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
var log_content = "";
snackbar.show(dataObj);
//regular stuff
//my comment here, and another new comment
var newGame = document.querySelector("#new-game");
newGame.addEventListener("click", function(){
    console.log("game cleared");
    areYouSure.show();
    document.querySelector("#yesido").addEventListener("click", clearGame())
    function clearGame() {
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        candyCanes = 100;
        l = 0;
        frm = 0;
        candyCount = 0;
        ub = "";
        multiplier = 1;
        log_content = "";
        hmcc.innerHTML = candyCanes;
        hmc.innerHTML = candyCount;
        location.reload();
    }
});

var candy = document.getElementById("candy");
var candies = ["Snickers(stop that, will you?)", "Reese's", "Milky Way(the chocolate, not  the galaxy)", "Three Musketeers(the candy though)", "Kit Kat"];
var hmc = document.getElementById("hmc");
var stages = document.getElementById("stages");
var log = document.getElementById("log");
var frm = document.getElementById("farmers");
var log_content;
var multiplier = 1;
var lastKeys = [];
var l = 0;
var frm_num = 0;
var candyCount = 0;
var ub = "";
var hmc = document.querySelector("#hmc");
var hmcc = document.querySelector("#hmcc");
var candyCanes = 100;
hmcc.innerHTML = candyCanes;
var cpsText = document.querySelector("#cps");
var cps = multiplier * l;
cpsText.innerHTML = "Candy Per Second: " + cps;
String.prototype.r = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
var bu = getCookie("buyUnlocked");
if (bu != "") {
    ub = bu;
    document.querySelector("#computer_button").style.display = bu.length > 0 ? "inline-block" : "none";
    document.querySelector("#car_button").style.display = bu.length > 1 ? "inline-block" : "none";
    document.querySelector("#house_button").style.display = bu.length > 2 ? "inline-block" : "none";
    document.querySelector("#mansion_button").style.display = bu.length > 3 ? "inline-block" : "none";
    document.querySelector("#earth_button").style.display = bu.length > 4 ? "inline-block" : "none";
    document.querySelector("#galaxy_button").style.display = bu.length > 5 ? "inline-block" : "none";
    document.querySelector("#universe_button").style.display = bu.length > 6 ? "inline-block" : "none";
}
var ccd = getCookie("candyCanes");
if (ccd != "") {
    var x = Number(ccd);
    candyCanes = x;
    hmcc.innerHTML = candyCanes;
}
var cc = getCookie("cc");
if (cc != "") {
    var x = Number(cc);
    candyCount = x;
    if (candyCount < 1000) {
        hmc.innerHTML = candyCount;
    }
    if (candyCount >= 1000) {
        var y = candyCount / 1000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "K";
    }
    if (candyCount >= 1000000) {
        var y = candyCount / 1000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "M";
    }
    if (candyCount >= 1000000000) {
        var y = candyCount / 1000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "B";
    }
    if (candyCount >= 1000000000000) {
        var y = candyCount / 1000000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "T";
    }
}
var mult_cookie = getCookie("multiplier");
if (mult_cookie != "") {
    var clost = Number(mult_cookie);
    var multiplier_text = document.getElementById("multiplier");
    multiplier.innerHTML = "Multiplier: " + clost;
    multiplier = clost;
}
var log_cookie = getCookie("log");
if (log_cookie != "") {
    log_content = log_cookie;
    log.innerHTML = log_content;
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
var frmcookie = getCookie("farmer");
if (frmcookie != "") {
    var elite = Number(frmcookie);
    frm.innerHTML = "Farmers: " + elite;
    frm_num = elite;
    for (i = 0; i < frm_num; i++) {
        clickFarmer();
    }
}
var multiplier_text = document.getElementById("multiplier");
multiplier_text.innerHTML = "Multiplier: " + multiplier;
var cpsText = document.querySelector("#cps");
var cps = multiplier * l;
cpsText.innerHTML = "Candy Per Second: " + cps;
document.getElementById("totbutton").addEventListener("click", tot);
function tot() {
    var candy = document.getElementById("candy");
    candy.innerHTML = "You get: " + candies[Math.floor(Math.random() * 5)];
    candyCount = candyCount + 1 * multiplier;
    var candyCaneChance = Math.floor(Math.random() * 1000)
    if (candyCaneChance === 15) {
        candyCanes = candyCanes + 1;
        hmcc.innerHTML = candyCanes;
        setCookie("candyCanes", candyCanes, 30)
    }
    if (candyCount < 1000) {
        hmc.innerHTML = candyCount;
    }
    if (candyCount >= 1000) {
        var y = candyCount / 1000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "K";
    }
    if (candyCount >= 1000000) {
        var y = candyCount / 1000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "M";
    }
    if (candyCount >= 1000000000) {
        var y = candyCount / 1000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "B";
    }
    if (candyCount >= 1000000000000) {
        var y = candyCount / 1000000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "T";
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
            hmc.innerHTML = candyCount;
        }
        if (candyCount >= 1000) {
            var y = candyCount / 1000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = y + "K";
        }
        if (candyCount >= 1000000) {
            var y = candyCount / 1000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = y + "M";
        }
        if (candyCount >= 1000000000) {
            var y = candyCount / 1000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = y + "B";
        }
        if (candyCount >= 1000000000000) {
            var y = candyCount / 1000000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            hmc.innerHTML = y + "T";
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
            multiplier_text.innerHTML = "Multiplier: " + multiplier;
            cps = multiplier * l;
            cpsText.innerHTML = "Candy Per Second: " + cps;
        }
        if (thing === 'iPod') {
            document.getElementById("computer_button").style.display = "inline-block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(0, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'computer') {
            document.getElementById("car_button").style.display = "inline-block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(1, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'car') {
            document.getElementById("house_button").style.display = "inline-block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(2, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'house') {
            document.getElementById("mansion_button").style.display = "inline-block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(3, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'mansion') {
            document.getElementById("earth_button").style.display = "inline-block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(4, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'earth') {
            document.getElementById("galaxy_button").style.display = "inline-block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(5, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'galaxy') {
            document.getElementById("universe_button").style.display = "inline-block";
            log.innerHTML = log.innerHTML + thing + ", ";
            log_content = log_content + thing + ", ";
            setCookie("log", log_content, 30);
            ub = ub.r(6, "Y");
            setCookie("buyUnlocked", ub, 30);
        }
        if (thing === 'universe') {
            document.querySelector("#game").style.display = "none";
            document.querySelector("#beat_game").style.display = "inline-block";
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
document.querySelector("#farmer_button").addEventListener("click", function () { candyCaneBuy(5, "farmer"); });
function candyCaneBuy(cost, item) {
    if (candyCanes >= cost) {
        candyCanes = candyCanes - cost;
        document.getElementById('error').innerHTML = "You got " + item + ".";
        hmcc.innerHTML = candyCanes;
        setCookie("candyCanes", candyCanes, 30);
        candyCount = (item === "1K candies" ? candyCount + 1000 : (item === "1M candies" ? candyCount + 1000000 : (item === "1B candies" ? candyCount + 1000000000 : candyCount)));
        var kmbt = null;
        if (candyCount < 1000) {
            kmbt = candyCount;
        }
        if (candyCount >= 1000) {
            var y = candyCount / 1000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "K";
        }
        if (candyCount >= 1000000) {
            var y = candyCount / 1000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "M";
        }
        if (candyCount >= 1000000000) {
            var y = candyCount / 1000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "B";
        }
        if (candyCount >= 1000000000000) {
            var y = candyCount / 1000000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "T";
        }
        if (item === "farmer") {
            clickFarmer();
            frm_num = frm_num + 1
            frm.innerHTML = "Farmers:" + frm_num;
            setCookie("farmer", frm_num, 30)
            
        }
        hmc.innerHTML = kmbt;
        setCookie("cc", candyCount, 30);
    }
    else {
        document.getElementById('error').innerHTML = "You do not have enough pumkins for " + item + ". Get some more!";
    }
};
document.querySelector("#onek_button").addEventListener("click", function () { candyCaneBuy(1, "1K candies"); });
document.querySelector("#onem_button").addEventListener("click", function () { candyCaneBuy(10, "1M candies"); });
document.querySelector("#oneb_button").addEventListener("click", function () { candyCaneBuy(100, "1B candies"); });
function job() {
    candyCount = candyCount + 1 * multiplier;
    if (candyCount < 1000) {
        hmc.innerHTML = candyCount;

    }
    if (candyCount >= 1000) {
        var y = candyCount / 1000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "K";
    }
    if (candyCount >= 1000000) {
        var y = candyCount / 1000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "M";
    }
    if (candyCount >= 1000000000) {
        var y = candyCount / 1000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "B";
    }
    if (candyCount >= 1000000000000) {
        var y = candyCount / 1000000000000;
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        hmc.innerHTML = y + "T";
    }
    setCookie("cc", candyCount, 30);
}
function clickJob() {
    setInterval(job, 1000);
}
function farmer() {
    candyCanes = candyCanes + 1;
    hmcc.innerHTML = candyCanes;
    setCookie("candyCanes", candyCanes, 30);
}
function clickFarmer() {
    setInterval(farmer, 60000)
}

//free gift!
var giftTimer = document.getElementById("gift-timer");
var date = new Date().getTime();
var gifts = [" candies ", " jobs ", " multiplier "];
var candyCaneGift = [true, false]
var giftAvailable = "no";
var gcdd = getCookie("giftCDD");
var ga = getCookie("giftAvailable");
if (gcdd != "") {
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

            // Display the result in the element with class="demo"
            if (distance < 60000 && distance > 0) {
                giftTimer.innerHTML = "<span class='big-gift-text'>Next Free Gift in </span><br>" + seconds + "s "
            } else if (distance < 0) {
                clearInterval(x);
                giftTimer.innerHTML = "Click to collect your Free Gift!";
                giftAvailable = "yes";
                setCookie("giftAvailable", giftAvailable, 30);
            } else {
                giftTimer.innerHTML = "<span class='big-gift-text'>Next Free Gift in </span><br>" + hours + "h "
                    + minutes + "m ";
            }
        }, 1000);
    } else {
        giftTimer.innerHTML = "Click to collect your Free Gift!";
        giftTimer.style.cursor = "pointer";
    }
} else {
    // Set the date we're counting down to
    var countDownDate = date + 3600000;
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

        // Display the result in the element with class="demo"
        if (distance < 60000) {
            giftTimer.innerHTML = "<span class='big-gift-text'>Next Free Gift in </span><br>" + seconds + "s "
        } else if (distance < 0) {
            clearInterval(x);
            giftTimer.innerHTML = "Click to collect your Free Gift!";
            giftAvailable = "yes";
            setCookie("giftAvailable", giftAvailable, 30);
        } else {
            giftTimer.innerHTML = "<span class='big-gift-text'>Next Free Gift in </span><br>" + hours + "h "
                + minutes + "m ";
        }
    }, 1000);
}
giftTimer.addEventListener("click", function () {
    if (giftAvailable == "yes") {
        giftAvailable = "no";
        var selectedGift = null;
        selectedGift = gifts[Math.floor(Math.random() * gifts.length)];
        var candyCaneYesNo = null;
        candyCaneYesNo = candyCaneGift[Math.floor(Math.random() * candyCaneGift.length)];
        if (selectedGift == gifts[0]) {
            var given = Math.floor(Math.random() * (candyCount / 1.5)) + 20;
            candyCount = candyCount + given;
            document.querySelector("#error").innerHTML = "You got " + kmbt + " candies in your Free Gift!";
            hmc.innerHTML = candyCount;
        } if (selectedGift == gifts[1]) {
            var given = Math.floor(Math.random() * (l / 1.5)) + 20;
            l = l + given;
            document.getElementById('jobs').innerHTML = "Jobs: " + l;
            cps = multiplier * l;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            setCookie("job", l, 30);
            document.querySelector("#error").innerHTML = "You got " + kmbt + " jobs in your Free Gift!";
        } if (selectedGift == gifts[2]) {
            var given = Math.floor(Math.random() * (multiplier / 1.5)) + 20;
            multiplier = multiplier + given;
            setCookie("multiplier", multiplier, 30);
            cps = multiplier * l;
            multiplier_text.innerHTML = "Multiplier: " + multiplier;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            document.querySelector("#error").innerHTML = "You got " + kmbt + " multiplier in your Free Gift!";
        }
        var kmbt = null;
        if (given < 1000) {
            kmbt = given;
        }
        if (given >= 1000) {
            var y = given / 1000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "K";
        }
        if (given >= 1000000) {
            var y = given / 1000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "M";
        }
        if (given >= 1000000000) {
            var y = given / 1000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "B";
        }
        if (given >= 1000000000000) {
            var y = given / 1000000000000;
            y = Math.floor(y * 100) / 100;
            y = y.toFixed(2);
            kmbt = y + "T";
        }
        //wait a minute; 
        //if (your name is matthew or nathan) {
        //stop reading this code and mind your own business;
        //};
        if (selectedGift == gifts[0]) {
            var given = Math.floor(Math.random() * (candyCount / 1.5)) + 20;
            candyCount = candyCount + given;
            document.querySelector("#error").innerHTML = "You got " + kmbt + " candies in your Free Gift!";
            setCookie("cc", candyCount, 30);
        } if (selectedGift == gifts[1]) {
            var given = Math.floor(Math.random() * (l / 1.5)) + 20;
            l = l + given;
            document.getElementById('jobs').innerHTML = "Jobs: " + l;
            cps = multiplier * l;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            setCookie("job", l, 30);
            document.querySelector("#error").innerHTML = "You got " + kmbt + " jobs in your Free Gift!";
            setCookie("job", l, 30);
        } if (selectedGift == gifts[2]) {
            var given = Math.floor(Math.random() * (multiplier / 1.5)) + 20;
            multiplier = multiplier + given;
            setCookie("multiplier", multiplier, 30);
            cps = multiplier * l;
            multiplier_text.innerHTML = "Multiplier: " + multiplier;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            document.querySelector("#error").innerHTML = "You got " + kmbt + " multiplier in your Free Gift!";
            setCookie("multiplier", multiplier, 30);
        }
        if (candyCaneYesNo === true) {
            var givenCandyCanes = Math.floor(Math.random() * 3) + 1;
            document.querySelector("#error").innerHTML = "You got " + givenCandyCanes + " pumpkins and " + kmbt + selectedGift + "in your Free Gift!";
            candyCanes = candyCanes + givenCandyCanes;
            hmcc.innerHTML = candyCanes;
            setCookie("candyCanes", candyCanes, 30);
        }
        setCookie("giftAvailable", giftAvailable, 30);

        // Set the date we're counting down to

        var countDownDate = date + 3600000;
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

            // Display the result in the element with class="demo"
            if (distance < 60000) {
                giftTimer.innerHTML = "<span class='big-gift-text'>Next Free Gift in </span><br>" + seconds + "s "
            } else if (distance < 0) {
                clearInterval(x);
                giftTimer.innerHTML = "Click to collect your Free Gift!";
                giftAvailable = "yes";
                setCookie("giftAvailable", giftAvailable, 30);
            } else {
                giftTimer.innerHTML = "<span class='big-gift-text'>Next Free Gift in </span><br>" + hours + "h "
                    + minutes + "m ";
            }
        }, 1000);
    };
});

//code for cheat code
//But this is bad!
/*var secret = "go1";
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
        multiplier_text.innerHTML = "Multiplier: " + multiplier;
        setCookie("multiplier", multiplier, 30);
    }
})*/
//This so nobody will know!

var cheat = {
    multiplier:function() {
        multiplier = multiplier * 10;
        multiplier_text.innerHTML = "Multiplier: " + multiplier;
        setCookie("multiplier", multiplier, 30);
    }
}


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
        document.getElementById("welcome").innerHTML = "Welcome " + user;
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
    var update = getCookie("update");
    if (update != "") {
        console.log("Yippee! Newest update!");
    } else {
        updateDialog.show();
        document.querySelector(".acceptUpdate").addEventListener("click", function () {
            console.log("Woo hoo! Got the update");
            setCookie("update", true, 30);
        });
    }
}

var tabs = new mdc.tabs.MDCTabBar(document.querySelector("#shopTabs"));
var panels = document.querySelector(".js-panels");
tabs.preventDefaultOnClick = true;
function updatePanel(index) {
    var activePanel = panels.querySelector(".js-panel.is-active");
    if (activePanel) {
        activePanel.classList.remove("is-active");
    }
    var newActivePanel = panels.querySelector(
        ".js-panel:nth-child(" + (index + 1) + ")"
    );
    if (newActivePanel) {
        newActivePanel.classList.add("is-active");
    }
}
tabs.listen("MDCTabBar:change", function (t) {
    var tabs = t.detail;
    var nthChildIndex = tabs.activeTabIndex;
    updatePanel(nthChildIndex);
});


var cls = function () {
    setCookie("buyUnlocked", ub, 30);
    setCookie("cc", candyCount, 30);
    setCookie("job", l, 30);
    setCookie("multiplier", multiplier, 30);
    setCookie("log", log_content, 30);
    setCookie("giftCDD", countDownDate, 30);
    setCookie("giftAvailable", giftAvailable, 30);
    setCookie("candyCanes", candyCanes, 30);
    setCookie("update", true, 30);
    setCookie("farmers", frm_num, 30);
    var ducks = candyCanes
};

window.onclose = cls;
