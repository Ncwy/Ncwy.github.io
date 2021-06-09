function show() {
    var time = new Date();
    document.getElementsByClassName("time")[0].innerHTML = time.toLocaleTimeString();
    //Add  ---  'en-AU', { hour12: true } to switch between formats of 12/24 hours
    var hex = (time.getHours() < 2 ? '0' : '') + Math.round(time.getHours() * 11.1).toString(16).toUpperCase() + "" + (time.getMinutes() < 4 ? '0' : '') + Math.round(time.getMinutes() * 4.33).toString(16).toUpperCase() + "" + (time.getSeconds() < 4 ? '0' : '') + Math.round(time.getSeconds() * 4.33).toString(16).toUpperCase();
    document.getElementsByClassName("color")[0].innerHTML = hex;
    document.body.style.backgroundColor = "#" + hex;
};

setInterval(() => {
    show();
}, 1000);
