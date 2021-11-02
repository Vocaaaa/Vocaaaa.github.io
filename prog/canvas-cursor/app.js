const canvas = document.querySelector("#canvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

canvas.addEventListener("mousemove", onMouseMove);

let bigCircleX = 400;
let bigCircleY = 300;
let bigBallRadius = 200;

let ballX = 400;
let ballY = 300;
let ballRadius = 30;

let mouseX = 0;
let mouseY = 0;

update();

function update() { 
    window.requestAnimationFrame(update);

    let dx = mouseX - bigCircleX;
    let dy = mouseY - bigCircleY;
    let distance = Math.sqrt(dx*dx + dy*dy);

    let directionX = dx / distance;
    let directionY = dy / distance;

    ballX = bigCircleX + directionX * Math.min(distance, bigBallRadius-ballRadius);
    ballY = bigCircleY + directionY * Math.min(distance, bigBallRadius-ballRadius);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(bigCircleX, bigCircleY, bigBallRadius, 0, Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);

    ctx.lineWidth = 5;
    ctx.stroke();
};

function onMouseMove(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
};