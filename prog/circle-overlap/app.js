const canvas = document.getElementById("canvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let x = 0;
let y = 300;

let speedx = 10;
let speedy = 10;

let redCircleSpeedX = 8;
let redCircleSpeedY = 8;

let greenCircleSpeedX = 6;
let greenCircleSpeedY = 6;

let mouseX, mouseY;

const blueCircle = {
    x: 150,
    y: 300,
    radius: 80,
    color: "blue",
    fill: false
};
const redCircle = {
    x: 400,
    y: 300,
    radius: 80,
    color: "red",
    fill: false
};
const greenCircle = {
    x: 650,
    y: 300,
    radius: 80,
    color: "green",
    fill: false
};

canvas.addEventListener("mousemove", onCanvasMouseMove);

update();

function update(circle) {
    window.requestAnimationFrame(update);

    blueCircle.x += speedx;
    blueCircle.y += speedy;

    redCircle.x += redCircleSpeedX;
    redCircle.y += redCircleSpeedY;

    greenCircle.x += greenCircleSpeedX;
    greenCircle.y += greenCircleSpeedY;

    if(blueCircle.x > canvas.width - 80) {
        speedx = -10;
    } else if(blueCircle.x < 80) {
        speedx = 10;
    }

    if(blueCircle.y > canvas.height - 80) {
        speedy = -10;
    } else if(blueCircle.y < 80) {
        speedy = 10;
    }

    if(redCircle.x > canvas.width - 80) {
        redCircleSpeedX = -8;
    } else if(redCircle.x < 80) {
        redCircleSpeedX = 8;
    }

    if(redCircle.y > canvas.height - 80) {
        redCircleSpeedY = -8;
    } else if(redCircle.y < 80) {
        redCircleSpeedY = 8;
    }

    if(greenCircle.x > canvas.width - 80) {
        greenCircleSpeedX = -8;
    } else if(greenCircle.x < 80) {
        greenCircleSpeedX = 8;
    }

    if(greenCircle.y > canvas.height - 80) {
        greenCircleSpeedY = -8;
    } else if(greenCircle.y < 80) {
        greenCircleSpeedY = 8;
    }

    blueCircle.fill = isPointInCircle(mouseX, mouseY, blueCircle.x, blueCircle.y, blueCircle.radius);
    redCircle.fill = isPointInCircle(mouseX, mouseY, redCircle.x, redCircle.y, redCircle.radius);
    greenCircle.fill = isPointInCircle(mouseX, mouseY, greenCircle.x, greenCircle.y, greenCircle.radius);

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle(blueCircle);
    drawCircle(redCircle);
    drawCircle(greenCircle);
};

function drawCircle(circle) {
context.beginPath();
context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);

context.strokeStyle = circle.color;
context.lineWidth = 2;
context.stroke();

if(circle.fill) {
    context.fillStyle = circle.color;
    context.fill();
}
};

function onCanvasMouseMove(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

function isPointInCircle(pointX, pointY, circleX, circleY, circleRadius) {
    const dx = pointX - circleX;
    const dy = pointY - circleY;
    return Math.sqrt(dx*dx + dy*dy) <= circleRadius;
}