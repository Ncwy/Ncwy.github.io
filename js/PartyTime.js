const date = new Date();
const Today = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-0" + date.getDate();
const Birthmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Party() {
    var Birthdate = document.getElementById('name').value;
    var Timing = document.getElementById('fly').value;
    if (Birthdate == "") {
        document.getElementById('slogan').innerHTML = "No Birthday? No Parties for You!";
        console.log(typeof (Timing));
    } else if (Birthdate == Today) {
        document.getElementById('slogan').innerHTML = "Today's your birthday?! PARTY TIME!";
        document.getElementById('age').style.display = "block";
        document.getElementById('future').style.display = "block";
        var result = document.getElementsByClassName('calculate');
        result[0].innerHTML = "Your Birthday is today!";
        result[1].innerHTML = "You're " + (date.getFullYear() - Birthdate.slice(0, 4)) + " years old";
        if (Timing == "") {
            var T = new Date(Birthdate);
        }
        else {
            var T = new Date(Birthdate);
            T.setHours(parseInt(Timing.slice(0, 2)));
            T.setMinutes(parseInt(Timing.substr(3, 4)));
        }
        result[2].innerHTML = "Your're " + Math.floor((date.getTime() - T.getTime()) / 60000) + " minutes old";
        var datt = Birthdate.split("-");
        const afterDay = new Date(datt[0], parseInt(datt[1]) - 1, datt[2]);
        var tenK = new Date(afterDay.getTime() + 86400000 * 10000);
        var twentyK = new Date(afterDay.getTime() + 86400000 * 20000);
        var fiveHundredKHour = new Date(afterDay.getTime() + 3600000 * 500000);
        var oneMillionMin = new Date(afterDay.getTime() + 60000 * 1000000);
        var tenMillionMin = new Date(afterDay.getTime() + 60000 * 10000000);
        var FiftyMillionMin = new Date(afterDay.getTime() + 60000 * 5000000);
        var oneBillionSec = new Date(afterDay.getTime() + 1000 * 1000000000);
        result[3].innerHTML = "Your 10,000th day is " + tenK.toDateString();
        result[4].innerHTML = "Your 20,000th day is " + twentyK.toDateString();
        result[5].innerHTML = "Your 500,000th hour is " + fiveHundredKHour.toDateString();
        result[6].innerHTML = "Your one millionth minute is " + oneMillionMin.toDateString();
        result[7].innerHTML = "Your ten millionth minute is " + tenMillionMin.toDateString();
        result[8].innerHTML = "Your fifty millionth minute is " + FiftyMillionMin.toDateString();
        result[9].innerHTML = "Your one billionth second is " + oneBillionSec.toDateString();
    }
    else {
        document.getElementById('slogan').innerHTML = "No Birthday? No Parties for You!";
        document.getElementById('age').style.display = "block";
        document.getElementById('future').style.display = "block";
        var result = document.getElementsByClassName('calculate');
        result[0].innerHTML = "Your Birthday is " + Birthmonth[Birthdate.slice(6, 7) - 1] + "  " + Birthdate.substr(Birthdate.length - 2);
        result[1].innerHTML = "You're " + (date.getFullYear() - Birthdate.slice(0, 4)) + " years old";

        if (Timing == "") {
            var T = new Date(Birthdate);
        }
        else {
            var T = new Date(Birthdate);
            T.setHours(parseInt(Timing.slice(0, 2)));
            T.setMinutes(parseInt(Timing.substr(3, 4)));
        }


        result[2].innerHTML = "Your're " + Math.floor((date.getTime() - T.getTime()) / 60000) + " minutes old";
        var datt = Birthdate.split("-");
        const afterDay = new Date(datt[0], parseInt(datt[1]) - 1, datt[2]);
        var tenK = new Date(afterDay.getTime() + 86400000 * 10000);
        var twentyK = new Date(afterDay.getTime() + 86400000 * 20000);
        var fiveHundredKHour = new Date(afterDay.getTime() + 3600000 * 500000);
        var oneMillionMin = new Date(afterDay.getTime() + 60000 * 1000000);
        var tenMillionMin = new Date(afterDay.getTime() + 60000 * 10000000);
        var FiftyMillionMin = new Date(afterDay.getTime() + 60000 * 5000000);
        var oneBillionSec = new Date(afterDay.getTime() + 1000 * 1000000000);
        result[3].innerHTML = "Your 10,000th day is " + tenK.toDateString();
        result[4].innerHTML = "Your 20,000th day is " + twentyK.toDateString();
        result[5].innerHTML = "Your 500,000th hour is " + fiveHundredKHour.toDateString();
        result[6].innerHTML = "Your one millionth minute is " + oneMillionMin.toDateString();
        result[7].innerHTML = "Your ten millionth minute is " + tenMillionMin.toDateString();
        result[8].innerHTML = "Your fifty millionth minute is " + FiftyMillionMin.toDateString();
        result[9].innerHTML = "Your one billionth second is " + oneBillionSec.toDateString();
    }

}

