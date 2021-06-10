
var Rock = document.getElementsByClassName("rock")[0];
var Paper = document.getElementsByClassName("paper")[0];
var Scissors = document.getElementsByClassName("scissors")[0];
var Pictures = document.getElementsByClassName("AI");
var Faith = document.getElementsByClassName("human");
Rock.addEventListener("click", function () {
    Pictures[0].src = "../images/RockPaperScissors/left-fist.png";
    Faith[0].src = "../images/RockPaperScissors/right-fist.png";
    setTimeout(() => {
        document.getElementsByClassName("result")[0].innerHTML = "1";
    }, 50);
    document.getElementsByClassName("AI")[0].style.animationName = "AIshake";
    document.getElementsByClassName("human")[0].style.animationName = "Humanshake";
    setTimeout(() => {
        document.getElementsByClassName("AI")[0].style.animationName = "none";
        document.getElementsByClassName("human")[0].style.animationName = "none";
    }, 1500);
    setTimeout(() => {
        document.getElementsByClassName("result")[0].innerHTML = "2";
    }, 800);
    var Computer = ["hammer", "wrap", "pointy"];
    var index = Math.floor(Math.random(Computer.length) * 3);
    var Pick = Computer[index];
    setTimeout(() => {
        switch (Pick) {
            case "wrap":
                Pictures[0].src = "../images/RockPaperScissors/left-paper.png";
                Faith[0].src = "../images/RockPaperScissors/right-fist.png";
                document.getElementsByClassName("result")[0].innerHTML = "You Lose!";
                break;
            case "hammer":
                Pictures[0].src = "../images/RockPaperScissors/left-fist.png";
                Faith[0].src = "../images/RockPaperScissors/right-fist.png";
                document.getElementsByClassName("result")[0].innerHTML = "It's a tie!";
                break;
            case "pointy":
                Pictures[0].src = "../images/RockPaperScissors/left-scissors.png";
                Faith[0].src = "../images/RockPaperScissors/right-fist.png";
                document.getElementsByClassName("result")[0].innerHTML = "You Win!";
                break;
        }
    }, 1500);

})

Paper.addEventListener("click", function () {
    Pictures[0].src = "../images/RockPaperScissors/left-fist.png";
    Faith[0].src = "../images/RockPaperScissors/right-fist.png";
    setTimeout(() => {
        document.getElementsByClassName("result")[0].innerHTML = "1";
    }, 50);
    document.getElementsByClassName("AI")[0].style.animationName = "AIshake";
    document.getElementsByClassName("human")[0].style.animationName = "Humanshake";
    setTimeout(() => {
        document.getElementsByClassName("AI")[0].style.animationName = "none";
        document.getElementsByClassName("human")[0].style.animationName = "none";
    }, 1500);
    setTimeout(() => {
        document.getElementsByClassName("result")[0].innerHTML = "2";
    }, 800);
    var Computer = ["hammer", "wrap", "pointy"];
    var index = Math.floor(Math.random(Computer.length) * 3);
    var Pick = Computer[index];
    setTimeout(() => {
        switch (Pick) {
            case "wrap":
                Pictures[0].src = "../images/RockPaperScissors/left-paper.png";
                Faith[0].src = "../images/RockPaperScissors/right-paper.png";
                document.getElementsByClassName("result")[0].innerHTML = "It's a tie!";
                break;
            case "hammer":
                Pictures[0].src = "../images/RockPaperScissors/left-fist.png";
                Faith[0].src = "../images/RockPaperScissors/right-paper.png";
                document.getElementsByClassName("result")[0].innerHTML = "You Win!";
                break;
            case "pointy":
                Pictures[0].src = "../images/RockPaperScissors/left-scissors.png";
                Faith[0].src = "../images/RockPaperScissors/right-paper.png";
                document.getElementsByClassName("result")[0].innerHTML = "You Lose!";
                break;
        }
    }, 1500);

})

Scissors.addEventListener("click", function () {
    Pictures[0].src = "../images/RockPaperScissors/left-fist.png";
    Faith[0].src = "../images/RockPaperScissors/right-fist.png";
    setTimeout(() => {
        document.getElementsByClassName("result")[0].innerHTML = "1";
    }, 50);
    document.getElementsByClassName("AI")[0].style.animationName = "AIshake";
    document.getElementsByClassName("human")[0].style.animationName = "Humanshake";
    setTimeout(() => {
        document.getElementsByClassName("AI")[0].style.animationName = "none";
        document.getElementsByClassName("human")[0].style.animationName = "none";
    }, 1500);
    setTimeout(() => {
        document.getElementsByClassName("result")[0].innerHTML = "2";
    }, 800);
    setTimeout(() => {
        var Computer = ["hammer", "wrap", "pointy"];
        var index = Math.floor(Math.random(Computer.length) * 3);
        var Pick = Computer[index];
        // switch (Pick) {
        //     case "wrap":
        //         Pictures[0].src = "../images/RockPaperScissors/left-paper.png";
        //         Faith[0].src = "../images/RockPaperScissors/right-scissors.png";
        //         document.getElementsByClassName("result")[0].innerHTML = "You Win!";
        //         break;
        //     case "hammer":
        //         Pictures[0].src = "../images/RockPaperScissors/left-fist.png";
        //         Faith[0].src = "../images/RockPaperScissors/right-scissors.png";
        //         document.getElementsByClassName("result")[0].innerHTML = "You Lose!";
        //         break;
        //     case "pointy":
        //         Pictures[0].src = "../images/RockPaperScissors/left-scissors.png";
        //         Faith[0].src = "../images/RockPaperScissors/right-scissors.png";
        //         document.getElementsByClassName("result")[0].innerHTML = "It's a tie!";
        //         break;
        if (Pick === "wrap") {
            Pictures[0].src = "../images/RockPaperScissors/left-paper.png";
            Faith[0].src = "../images/RockPaperScissors/right-scissors.png";
            document.getElementsByClassName("result")[0].innerHTML = "You Win!";
        } else if (Pick === "hammer") {
            Pictures[0].src = "../images/RockPaperScissors/left-fist.png";
            Faith[0].src = "../images/RockPaperScissors/right-scissors.png";
            document.getElementsByClassName("result")[0].innerHTML = "You Lose!";
        } else {
            Pictures[0].src = "../images/RockPaperScissors/left-scissors.png";
            Faith[0].src = "../images/RockPaperScissors/right-scissors.png";
            document.getElementsByClassName("result")[0].innerHTML = "It's a tie!";
        }
        // Bug XXXX  Used "=" instead of "+++" in if statement,  which assigned the value "Wrap"to Pick, as a result, if conditional statements stuck at first loop.
    }, 1500);

})

