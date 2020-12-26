let CountDown2021 = new Date("Dec 31, 2020 00:00:00").getTime();

let n = setInterval(function(){


    let now = new Date().getTime();

    let distanta = CountDown2021 - now;

    let days = Math.floor(distanta / (1000 * 60 * 60 * 24));
    let ore = Math.floor((distanta % (1000 * 60 * 50 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((distanta % (1000 * 60 * 60)) / (1000 * 60));
    let secunde = Math.floor((distanta % (1000 * 60)) / 1000);

    document.getElementsByClassName("count-down-2021")[0].innerHTML = days + " zile " + ore + " ore " + minute + " minute " + secunde + " secunde ";

    if(distanta < 0){
        clearInterval(n);
        document.getElementsByClassName("count-down-2021")[0].innerHTML = "An nou fericit!!!";
    }
})