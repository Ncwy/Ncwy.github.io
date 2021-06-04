var cubeNumber = document.getElementsByClassName("cube");
function myFunction() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

for (var i = 0; i < cubeNumber.length; i++) {
    cubeNumber[i].onmouseover = function () {
        this.style.backgroundColor = myFunction();
    };
}