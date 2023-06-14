const main = document.querySelector('.main')
const images = ["url('https://png.pngtree.com/background/20230525/original/pngtree-baseball-player-flame-neon-light-effect-sports-advertising-background-picture-image_2730158.jpg')","url('https://www.shutterstock.com/shutterstock/photos/1664834935/display_1500/stock-vector-baseball-player-baseball-cap-hitter-swinging-with-bat-abstract-isolated-vector-silhouette-iink-1664834935.jpg')", "url('https://www.shutterstock.com/image-illustration/abstract-silhouette-baseball-player-on-260nw-2274434479.jpg')","url('https://png.pngtree.com/background/20230413/original/pngtree-sports-background-baseball-player-picture-image_2422153.jpg')"]
console.log(main)
let index = 0;

function changeBackground() {
    if (index == 4){
        index = 0;
    }
    main.style.backgroundImage = images[index];
    index++
}

var day = parseInt(document.getElementById('day').innerText);
var hour = parseInt(document.getElementById('hour').innerText);
var minutes = parseInt(document.getElementById('minutes').innerText);
var seconds = parseInt(document.getElementById('seconds').innerText);
var timeout = null;

start();

function start(){

    if(seconds === -1){
        seconds = 59;
        minutes -= 1;
    }

    if (minutes === -1){
        minutes = 59;
        hour -= 1;
    }

    if (hour === -1){
        hour = 23;
        day -= 1;
    }

    if (day === -1){
        clearTimeout(timeout);
        alert("het gio");
        return false;
    }

    document.getElementById('day').innerText = day.toString();
    document.getElementById('hour').innerText = hour.toString();
    document.getElementById('minutes').innerText = minutes.toString();
    document.getElementById('seconds').innerText = seconds.toString();    

    timeout = setTimeout(() => {
        seconds--;
        start();
    }, 1000);
}


setInterval(changeBackground, 2000)
