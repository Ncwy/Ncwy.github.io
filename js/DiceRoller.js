document.getElementsByClassName("click-me")[0].onclick = function DiceRolling() {
    document.getElementsByClassName("point")[0].style.display = "none";
    var points = Math.ceil(Math.random() * 11 + 1);
    var i;
    var leftDie = document.getElementsByClassName("pipleft");
    var rightDie = document.getElementsByClassName("pipright");
    for (i = 0; i < leftDie.length; i++) {
        leftDie[i].style.display = "none";
        rightDie[i].style.display = "none";
    }
    document.getElementsByClassName("point")[0].innerHTML = points;
    document.getElementsByClassName("greeting")[0].style.display = "none";
    document.getElementsByClassName("shake")[0].style.display = "block";
    document.getElementsByClassName("shake")[0].style.animationDuration = "1s";
    setTimeout(() => {
        document.getElementsByClassName("shake")[0].style.animationDuration = "0";
        document.getElementsByClassName("shake")[0].style.display = "none";
        document.getElementsByClassName("point")[0].style.display = "block";
    }, 1000);
    var arr = [0, 1];
    var index = Math.floor(Math.random(arr.length) * 2);
    var a = arr[index];
    var b = 1 - a;
    setTimeout(() => {
        switch (points) {
            case 2:
                var i;
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("pip--center")[i].style.display = "block";
                };
                break;
            case 3:
                document.getElementsByClassName("pip--center")[a].style.display = "block";
                document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                break;
            case 4:
                var twoOptions = [0, 1];
                var order = Math.floor(Math.random(twoOptions.length) * 2);
                var c = twoOptions[order];
                switch (c) {
                    case 0:
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--center")[b].style.display = "block";
                        break;

                    case 1:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        break;
                }
                break;
            case 5:
                var twoOptions = [0, 1];
                var order = Math.floor(Math.random(twoOptions.length) * 2);
                var c = twoOptions[order];
                switch (c) {
                    case 0:
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        break;
                    case 1:
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        break;
                }
                break;
            case 6:
                var threeOptions = [0, 1, 2];
                var order = Math.floor(Math.random(threeOptions.length) * 3);
                var c = threeOptions[order];
                switch (c) {
                    case 0:
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--center")[b].style.display = "block";
                        break;
                    case 1:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        break;
                    case 2:
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--center")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        break;
                }
                break;
            case 7:
                var threeOptions = [0, 1, 2];
                var order = Math.floor(Math.random(threeOptions.length) * 3);
                var c = threeOptions[order];
                switch (c) {
                    case 0:
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--right")[b].style.display = "block";
                        document.getElementsByClassName("pip--left")[b].style.display = "block";
                        break;
                    case 1:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--center")[b].style.display = "block";
                        break;
                    case 2:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--center")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        break;
                }
                break;

            case 8:
                var threeOptions = [0, 1, 2];
                var order = Math.floor(Math.random(threeOptions.length) * 3);
                var c = threeOptions[order];
                switch (c) {
                    case 0:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--right")[b].style.display = "block";
                        document.getElementsByClassName("pip--left")[b].style.display = "block";
                        break;
                    case 1:
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";;
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--center")[b].style.display = "block";
                        break;
                    case 2:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        break;
                }
                break;

            case 9:
                var twoOptions = [0, 1];
                var order = Math.floor(Math.random(twoOptions.length) * 2);
                var c = twoOptions[order];
                switch (c) {
                    case 0:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--right")[b].style.display = "block";
                        document.getElementsByClassName("pip--left")[b].style.display = "block";
                        break;

                    case 1:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        break;
                }
                break;

            case 10:
                var twoOptions = [0, 1];
                var order = Math.floor(Math.random(twoOptions.length) * 2);
                var c = twoOptions[order];
                switch (c) {
                    case 0:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--right")[b].style.display = "block";
                        document.getElementsByClassName("pip--left")[b].style.display = "block";
                        break;

                    case 1:
                        document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                        document.getElementsByClassName("pip--center")[a].style.display = "block";
                        document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                        document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                        document.getElementsByClassName("pip--center")[b].style.display = "block";
                        break;
                }
                break;

            case 11:
                document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                document.getElementsByClassName("pip--center")[a].style.display = "block";
                document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                document.getElementsByClassName("pip--right")[b].style.display = "block";
                document.getElementsByClassName("pip--left")[b].style.display = "block";
                break;

            case 12:
                document.getElementsByClassName("pip--bottom-left")[a].style.display = "block";
                document.getElementsByClassName("pip--top-right")[a].style.display = "block";
                document.getElementsByClassName("pip--bottom-right")[a].style.display = "block";
                document.getElementsByClassName("pip--top-left")[a].style.display = "block";
                document.getElementsByClassName("pip--right")[a].style.display = "block";
                document.getElementsByClassName("pip--left")[a].style.display = "block";
                document.getElementsByClassName("pip--bottom-left")[b].style.display = "block";
                document.getElementsByClassName("pip--top-right")[b].style.display = "block";
                document.getElementsByClassName("pip--bottom-right")[b].style.display = "block";
                document.getElementsByClassName("pip--top-left")[b].style.display = "block";
                document.getElementsByClassName("pip--right")[b].style.display = "block";
                document.getElementsByClassName("pip--left")[b].style.display = "block";
                break;


        };
    }, 1000);

}
