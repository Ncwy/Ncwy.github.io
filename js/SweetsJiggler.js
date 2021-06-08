var animation = ["spin", "grow", "hop", "hooray", "shake"];
var numb = Math.floor((Math.random() * animation.length));
var trigger = document.getElementsByClassName("sweets_box");
for (i = 0; i < trigger.length; i++) {
    trigger[i].onclick = function () {
        this.style.animationName = animation[numb];
        setTimeout(() => {
            this.style.animationName = "none";
        }, 1000);
        numb = Math.floor((Math.random() * animation.length));
    };
}