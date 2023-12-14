const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = './images/piedra_navideña.png';

const bounceSound = new Audio('./sounds/sound.mp3');

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 5;
let dy = -5;
let imageWidth = 50;
let imageHeight = 50;

function drawImage() {
    ctx.drawImage(image, x, y, imageWidth, imageHeight);
}

function playBounceSound() {
    bounceSound.currentTime = 0;
    bounceSound.play();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImage();

    x += dx;
    y += dy;

    if (x + dx > canvas.width - imageWidth / 2 || x + dx < 0) {
        dx = -dx;
        playBounceSound();
    }

    if (y + dy > canvas.height - imageHeight / 2 || y + dy < 0) {
        dy = -dy;
        playBounceSound();
    }
}

let interval;
document.getElementById("startButton").addEventListener("click", function () {
    interval = setInterval(draw, 10);
});

document.getElementById("stopButton").addEventListener("click", function () {
    clearInterval(interval);
});

document.getElementById("xSpeedInput").addEventListener("input", function () {
    dx = parseInt(this.value);
});

document.getElementById("ySpeedInput").addEventListener("input", function () {
    dy = parseInt(this.value);
});