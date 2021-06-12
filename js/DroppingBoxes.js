var Choice = document.getElementsByClassName("box");
for (i = 0; i < 37; i++) {
    Choice[i].onmouseover = function () {
        var Magic = ["extend", "spin", "shrink", "climb", "swing"];
        var Lottery = Math.floor(Math.random() * Magic.length);
        var Showtime = Magic[Lottery];
        var Left = Math.ceil(Math.random() * 256 - 1);
        var Middle = Math.ceil(Math.random() * 256 - 1);
        var Right = Math.ceil(Math.random() * 256 - 1);
        this.style.backgroundColor = "rgb(" + Left + ", " + Middle + ", " + Right + ")";
        this.style.animationName = Showtime;
        this.style.animationDuration = "5s";
        setTimeout(() => {
            this.style.animationName = "none";
        }, 5000);



    }
}