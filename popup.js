//Stop reading this code! Now! Go away! Shoo! Or else!
//mdc stuff
var dialog = new mdc.dialog.MDCDialog(document.querySelector('#nameDialog'));
var updateDialog = new mdc.dialog.MDCDialog(document.querySelector('#updateDialog'));
var shopDialog = new mdc.dialog.MDCDialog(document.querySelector('#shop'));
var moreStuffDialog = new mdc.dialog.MDCDialog(document.querySelector('#moreStuffDialog'));
document.querySelector("#more_stuff").addEventListener("click", function() {
  moreStuffDialog.show();
});
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
    message: "This extension uses yummy cookies to save your progress!:)",
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
newGame.addEventListener("click", function () {
    console.log("game cleared");
    areYouSure.show();
    document.querySelector("#yesido").addEventListener("click", clearGame())
    function clearGame() {
        document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
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
        frm_num = 0;
    }
});

var candy = document.getElementById("candy");
var candies = ["Snickers(stop that, will you?)", "Reese's", "Milky Way(the chocolate, not  the galaxy)", "Three Musketeers(the candy though)", "Kit Kat", "Kisses (the chocolate, duh)", "Smarties!", "M&M's", "Skittles", "Bubble Gum", "Gummy Bears(100% vegetarian)",];
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
var Button = function (id, position) {
    this.id = id;
    this.position = position;
}

var buttons = [
    new Button("#computer_button", 0),
    new Button("#car_button", 1),
    new Button("#house_button", 2),
    new Button("#mansion_button", 3),
    new Button("#earth_button", 4),
    new Button("#galaxy_button", 5),
    new Button("#universe_button", 6)
];

var bu = getCookie("buyUnlocked");
if (bu != "") {
    ub = bu;
    buttons.forEach(v => { document.querySelector(v.id).style.display = bu.length > v.position ? "inline-block" : "none"; });
}

var ccd = getCookie("candyCanes");
if (ccd != "") {
    var x = Number(ccd);
    candyCanes = x;
    hmcc.innerHTML = candyCanes;
}

var beautify = function (number) {

    var range = [
        { start: 3, end: 6, suffix: "K" },
        { start: 6, end: 9, suffix: "M" },
        { start: 9, end: 12, suffix: "B" },
        { start: 12, end: 15, suffix: "T" },
        { start: 15, end: 18, suffix: "q" },
        { start: 18, end: 21, suffix: "Q" },
        { start: 21, end: 24, suffix: "s" },
        { start: 24, end: 27, suffix: "S" },
        { start: 27, end: 30, suffix: "O" },
        { start: 30, end: 33, suffix: "N" },
        { start: 33, end: 36, suffix: "D" }
    ];

    var r = range.filter(v => {
        var a = Math.log10(number);
        return a >= v.start && a < v.end;
    });

    if (r && r.length) {
        var y = number / Math.pow(10, r[0].start);
        y = Math.floor(y * 100) / 100;
        y = y.toFixed(2);
        return y + r[0].suffix;
    }
    else return number;
};

var cc = getCookie("cc");
if (cc != "") {
    candyCount = Number(cc);
    hmc.innerHTML = beautify(candyCount);
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
}
var frmcookie = getCookie("farmer");
if (frmcookie != "") {
    var elite = Number(frmcookie);
    frm.innerHTML = "Farmers: " + elite;
    frm_num = elite;
}
var multiplier_text = document.getElementById("multiplier");
multiplier_text.innerHTML = "Multiplier: " + multiplier;
var cpsText = document.querySelector("#cps");
var cps = multiplier * l;
cpsText.innerHTML = "Candy Per Second: " + cps;
document.getElementById("totbutton").addEventListener("click", tot);
function tot() {
    var candy = document.getElementById("candy");
    candy.innerHTML = "You get: " + candies[Math.floor(Math.random() * 11)];
    candyCount = candyCount + 1 * multiplier;
    var candyCaneChance = Math.floor(Math.random() * 1000);
    if (candyCaneChance === 20) {
        candyCanes = candyCanes + frm_num;
        hmcc.innerHTML = candyCanes;
        setCookie("candyCanes", candyCanes, 30);
        candy.innerHTML = candy.innerHTML + "AND a LEGENDARY Heart Treat!!";
        const dataObj = {
            message: "candy.innerHTML + 'AND a LEGENDARY Heart Treat!!'",
            actionText: 'Yay',
            timeout: 5000,
            actionHandler: function () {
                console.log('Yay!');
            }
        };
    }

    hmc.innerHTML = beautify(candyCount);
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
        hmc.innerHTML = beautify(candyCount);

        document.getElementById('error').innerHTML = "You got a(n) " + thing + ".";
        setCookie("cc", candyCount, 30);
        if (thing === 'job') {
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
document.querySelector("#farmer_button").addEventListener("click", function () { candyCaneBuy(5, "a farmer"); });
function candyCaneBuy(cost, item) {
    if (candyCanes >= cost) {
        candyCanes = candyCanes - cost;
        document.getElementById('error').innerHTML = "You got " + item + "!";
        hmcc.innerHTML = candyCanes;
        setCookie("candyCanes", candyCanes, 30);
        candyCount = (item === "1K Candies"
            ? candyCount + 1000 : (item === "1M Candies"
                ? candyCount + 1000000 : (item === "1B Candies"
                    ? candyCount + 1000000000 : candyCount)));
        var kmbt = null;
        hmc.innerHTML = beautify(candyCount);
        if (item === "a farmer") {
            clickFarmer();
            frm_num = frm_num + 1;
            frm.innerHTML = "Farmers: " + frm_num;
            setCookie("farmer", frm_num, 30);
        }
        if (item === "a Lucky Penny Boost") {
            multiplier = multiplier * 2
            multiplier_text.innerHTML = "Multiplier: " + multiplier;
            setCookie("multiplier", multiplier, 30)
        }
        if (item === "a Promotion") {
            l = l * 2;
            document.getElementById("jobs").innerHTML = "Jobs: " + l;
            setCookie("job", l, 30)
        }
        if (item === "an Ultimate Candy Corn Boost") {
            candyCount = candyCount * 2;
            hmc.innerHTML = candyCount;
        }
        setCookie("cc", candyCount, 30);
    }
    else {
        document.getElementById('error').innerHTML = "You do not have enough Pumpkins for " + item + ". Get some more!";
    }
};
document.querySelector("#onek_button").addEventListener("click", function () { candyCaneBuy(1, "1K Candies"); });
document.querySelector("#onem_button").addEventListener("click", function () { candyCaneBuy(10, "1M Candies"); });
document.querySelector("#oneb_button").addEventListener("click", function () { candyCaneBuy(100, "1B Candies"); });
document.querySelector("#lp_button").addEventListener("click", function () { candyCaneBuy(1250, "a Lucky Penny Boost"); });
document.querySelector("#prmt_button").addEventListener("click", function () { candyCaneBuy(2500, "a Promotion"); });
document.querySelector("#uccb_button").addEventListener("click", function () { candyCaneBuy(5000, "an Ultimate Candy Corn Boost"); });
function job() {
    candyCount += l * multiplier;
    hmc.innerHTML = beautify( candyCount);
    setCookie("cc", candyCount, 30);
}

setInterval(job, 1000);

function farmer() {
    candyCanes = candyCanes + frm_num;
    hmcc.innerHTML = candyCanes;
    setCookie("candyCanes", candyCanes, 30);
}
function clickFarmer() {
    frm_num += 1;
}

setInterval(farmer, 100000);

//free gift!
var giftTimer = document.getElementById("gift-timer");
var date = new Date().getTime();
var gifts = [" candies ", " jobs ", " multiplier "];
var candyCaneGift = [true, false];
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
            document.querySelector("#error").innerHTML = "You got " + beautify(given) + " Candies in your Free Gift!";
            hmc.innerHTML = candyCount;
        } if (selectedGift == gifts[1]) {
            var given = Math.floor(Math.random() * (l / 1.5)) + 20;
            l = l + given;
            document.getElementById('jobs').innerHTML = "Jobs: " + l;
            cps = multiplier * l;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            setCookie("job", l, 30);
            document.querySelector("#error").innerHTML = "You got " + beautify(given) + " jobs in your Free Gift!";
        } if (selectedGift == gifts[2]) {
            var given = Math.floor(Math.random() * (multiplier / 1.5)) + 20;
            multiplier = multiplier + given;
            setCookie("multiplier", multiplier, 30);
            cps = multiplier * l;
            multiplier_text.innerHTML = "Multiplier: " + multiplier;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            document.querySelector("#error").innerHTML = "You got " + beautify(given) + " multiplier in your Free Gift!";
        }
        var kmbt = null;



        //Hi, if your redaing this good job! Now stop!

            hmc.innerHTML = beautify( candyCount);
        //wait a minute; 
        //if (your name is matthew or nathan) {
        //stop reading this code and mind your own business;
        //};
        if (selectedGift == gifts[0]) {
            var given = Math.floor(Math.random() * (candyCount / 1.5)) + 20;
            candyCount = candyCount + given;
            document.querySelector("#error").innerHTML = "You got " + beautify(given) + " Candies in your Free Gift!";
            setCookie("cc", candyCount, 30);
        } if (selectedGift == gifts[1]) {
            var given = Math.floor(Math.random() * (l / 1.5)) + 20;
            l = l + given;
            document.getElementById('jobs').innerHTML = "Jobs: " + l;
            cps = multiplier * l;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            setCookie("job", l, 30);
            document.querySelector("#error").innerHTML = "You got " + beautify(given) + " jobs in your Free Gift!";
            setCookie("job", l, 30);
        } if (selectedGift == gifts[2]) {
            var given = Math.floor(Math.random() * (multiplier / 1.5)) + 20;
            multiplier = multiplier + given;
            setCookie("multiplier", multiplier, 30);
            cps = multiplier * l;
            multiplier_text.innerHTML = "Multiplier: " + multiplier;
            cpsText.innerHTML = "Candy Per Second: " + cps;
            document.querySelector("#error").innerHTML = "You got " + beautify(given) + " multiplier in your Free Gift!";
            setCookie("multiplier", multiplier, 30);
        }
        if (candyCaneYesNo === true) {
            var givenCandyCanes = Math.floor(Math.random() * 3) + 1;
            document.querySelector("#error").innerHTML = "You got " + givenCandyCanes + " Pumpkins and " + beautify(given) + selectedGift + "in your Free Gift!";
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
    multiplier: function () {
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
            guest = "Guest " + Math.floor((Math.random() * 9999) + 100);
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
        console.log("Newest update!");
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
};

window.onclose = cls;
