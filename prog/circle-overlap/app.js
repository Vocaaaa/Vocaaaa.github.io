const canvas = document.getElementById("canvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

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

function update() {
    window.requestAnimationFrame(update);

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