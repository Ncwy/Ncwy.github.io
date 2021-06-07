var levelUp = document.getElementsByClassName("ball")[0];
var messageBox = document.getElementsByClassName("message")[0];
var praise = document.getElementsByClassName("congrats")[0];
var levelNumber = document.getElementsByClassName("level")[0];
var replayButton = document.getElementsByClassName("replay")[0];
var i = 0;
// levelUp.onclick = (function () { location.reload(); })();
levelUp.onclick = function () {
    this.style.display = "none";
    messageBox.style.display = "block";
    switch (i) {
        case 0:
            praise.innerHTML = "Nice job!";
            levelNumber.innerHTML = "Next level: 2";
            break;
        case 1:
            praise.innerHTML = "Excellent clickin'!";
            levelNumber.innerHTML = "Next level: 3";
            break;
        case 2:
            praise.innerHTML = "That was awesome!";
            levelNumber.innerHTML = "Next level: 4";
            break;
        case 3:
            praise.innerHTML = "Man you are good!";
            levelNumber.innerHTML = "Next level: 5";
            break;
        case 4:
            praise.innerHTML = "Boom!";
            levelNumber.innerHTML = "Next level: 6";
            break;
        case 5:
            praise.innerHTML = "Pro!";
            levelNumber.innerHTML = "Next level: 7";
            break;
        case 6:
            praise.innerHTML = "Unbelievable!";
            levelNumber.innerHTML = "Next level: 8";
            break;
        case 7:
            praise.innerHTML = "Insanity!";
            levelNumber.innerHTML = "Next level: 9";
            break;
        case 8:
            praise.innerHTML = "You're on fire!";
            levelNumber.innerHTML = "Next level: 10";
            break;
        case 9:
            praise.innerHTML = "That was crazy!";
            levelNumber.innerHTML = "Next level: 11";
            break;
        case 10:
            praise.innerHTML = "You are blowing my mind!";
            levelNumber.innerHTML = "Next level: 12";
            break;
        case 11:
            praise.innerHTML = "WINNER!";
            levelNumber.innerHTML = "Holy cow! You won the whole freakin' thing!";
            replayButton.style.display = "block";
            break;
    }
    i += 1;
    this.style.animationDuration = (12 - i) + 's';
    if (i < 12) {
        messageSwitch = setTimeout('messageBox.style.display = "none"', 2000);
        levelSwitch = setTimeout('levelUp.style.display = "block"', 2000);
    } else {
        return;
    }
}