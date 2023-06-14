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

setInterval(changeBackground, 2000)
