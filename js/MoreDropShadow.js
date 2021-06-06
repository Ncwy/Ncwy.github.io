
var i = 0;
var boxChange = document.getElementsByClassName("box_shadow");
var textChange = document.getElementsByClassName("text_shadow");

for (var a = 0; a < boxChange.length; a++) {
    boxChange[a].onclick = function () {
        this.style.boxShadow = "0 0 '" + i + 1 + "'px '" + i + 3 + "'px";
        i++;
        console.log(i);
    };
}

for (var b = 0; b < textChange.length; b++) {
    textChange[b].onclick = function () {
        this.style.textShadow = "0 '" + i + 2 + "'px '" + i + 2 + "'px"
        i += 1;
    };
}