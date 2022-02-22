const canvas = document.getElementById("canvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext("2d");

const minutes1 = document.getElementById("minutes");
const seconds1 = document.getElementById("seconds");
const milliSeconds1 = document.getElementById("milliseconds");

let minutes = 00;
let seconds = 00;
let milliSeconds = 00;
let interval;

const startTimer = () => {
    interval = setInterval(startTime, 10);
};

function startTime() {
    milliSeconds++;
    if(milliSeconds < 9) {
        milliSeconds1.innerHTML = `${milliSeconds}`;
    } else if(milliSeconds > 99) {
        milliSeconds = 0;
        milliSeconds1.innerHTML = "00";
        seconds++;
    } else {
        milliSeconds1.innerHTML = milliSeconds;
    } else {
        seconds1.innerHTML = seconds;
    }
}

canvas.width = 800;
canvas.height = 600;

const mouse = {
    x: 0,
    y: 0,
    isDown: false,
    previousIsDown: false
};

const balls = [];

for(let i = 0; i  <12; i++) {
    balls.push({
        x: randomFloat(20, canvas.width - 40),
        y: randomFloat(20, canvas.height - 40),
        velocityX: randomFloat(-4, 4),
        velocityY: randomFloat(-4, 4),
        radius: 20,
        color: "red",
        fill: false
    });
};

canvas.addEventListener("click", startTimer);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);

gameLoop();

function gameLoop() {
    requestAnimationFrame(gameLoop);

    update();
    draw();
};

function onMouseMove(e) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
};

function onMouseDown() {
    mouse.isDown = true;
};

function onMouseUp() {
    mouse.isDown = false;
};

function update() {
    for(let i = balls.length - 1; i >= 0; i--) {
        balls[i].x += balls[i].velocityX;
        balls[i].y += balls[i].velocityY;

        if(balls[i].y < balls[i].radius) {
            balls[i].y = balls[i].radius;
            balls[i].velocityY *= -1;
        } else if(balls[i].y > canvas.height - balls[i].radius) {
            balls[i].y = canvas.height - balls[i].radius;
            balls[i].velocityY *= -1;
        }

        if(balls[i].x < balls[i].radius) {
            balls[i].x = balls[i].radius;
            balls[i].velocityX *= -1;
        } else if(balls[i].x > canvas.width - balls[i].radius) {
            balls[i].x = canvas.width - balls[i].radius;
            balls[i].velocityX *= -1;
        }
        balls[i].fill = isPointInCircle(mouse, balls[i]);

        if(mouse.isDown && mouse.previousIsDown && balls[i].fill) {
            balls.splice(i, 1);
        };
    };

    mouse.previousIsDown = mouse.isDown;
};

function draw() { 
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < balls.length; i++) {
        drawCircle(balls[i]);
    };
};

function randomFloat(min, max) {
    return min + (max - min) * Math.random();
};

function drawCircle(circle) {
    context.beginPath();
    context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    context.strokeStyle = circle.color;
    context.closePath();
    context.stroke();

    if(circle.fill) {
        context.fillStyle = circle.color;
        context.fill();
    }
};

function isPointInCircle(point, circle) {
    const dx = point.x -circle.x;
    const dy = point.y - circle.y;
    const distance = Math.sqrt(dx*dx + dy*dy);
    return distance <= circle.radius;
};
