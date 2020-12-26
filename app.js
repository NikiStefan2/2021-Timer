let CountDown2021 = new Date("Jan 1, 2021 00:00:00").getTime();

let n = setInterval(function () {


    let now = new Date().getTime();

    let distanta = CountDown2021 - now;

    let days = Math.floor(distanta / (1000 * 60 * 60 * 24));
    let ore = Math.floor((distanta % (1000 * 60 * 50 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((distanta % (1000 * 60 * 60)) / (1000 * 60));
    let secunde = Math.floor((distanta % (1000 * 60)) / 1000);

    //document.getElementsByClassName("count-down-2021")[0].innerHTML = days + " zile " + ore + " ore " + minute + " minute " + secunde + " secunde ";
    document.getElementsByClassName("count-down-2021-days")[0].innerHTML = days + " zile ";
    document.getElementsByClassName("count-down-2021-hours")[0].innerHTML = ore + " ore ";
    document.getElementsByClassName("count-down-2021-minutes")[0].innerHTML = minute + " minute ";
    document.getElementsByClassName("count-down-2021-seconds")[0].innerHTML = secunde + " secunde ";
    if (distanta < 0) {
        clearInterval(n);
        document.getElementsByClassName("count-down-2021")[0].innerHTML = "An nou fericit!!!";
    }
}, 1000);