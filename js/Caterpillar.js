var Choice = document.getElementsByClassName('circle');
var Speed = Math.random() * 20000 + 100;
function Changing() {
    var Left = Math.ceil(Math.random() * 256 - 1);
    var Middle = Math.ceil(Math.random() * 256 - 1);
    var Right = Math.ceil(Math.random() * 256 - 1);
    for (i = 0; i < 12; i++) {
        Choice[i].style.backgroundColor = "rgb(" + Left + ", " + Middle + ", " + Right + ")";
        var Left = Math.ceil(Math.random() * 256 - 1);
        var Middle = Math.ceil(Math.random() * 256 - 1);
        var Right = Math.ceil(Math.random() * 256 - 1);
    }
    var Diameter = Math.ceil(Math.random() * 3);
    for (i = 0; i < 12; i++) {
        Choice[i].style.height = Diameter + "em";
        Choice[i].style.width = Diameter + "em";
        var Diameter = Math.ceil(Math.random() * 3);
        Choice[i].style.opacity = "0.5";
        Choice[i].style.animationDuration = Speed + 's';
    }
}
window.onload = Changing();
console.log(Speed);
document.addEventListener('mousemove', function (e) {
    let X = e.clientX;
    let Y = e.clientY;
    for (i = 0; i < 12; i++) {
        Choice[i].style.top = Y + "px";
        Choice[i].style.left = X + "px";
    }
    for (i = 0; i < 12; i++) {
        Choice[i].animate({ top: [Y + 'px'], left: [X + 'px'] }, {
            duration: Speed,
            easing: 'ease',
            fill: "forwards",
        });
        var Speed = Math.random() * 20000 + 100;
    }
})