const canvas = document.getElementById("canvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

function drawCircle() {
    let circleX = 60;
    let circleY = 75;
    let circleRadius = 25;
    
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI, true);
    ctx.closePath();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();
};
function drawRect() {
    ctx.beginPath();
    ctx.rect(130, 50, 50, 50);
    ctx.closePath();

    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.stroke();
};
function drawTriangle() {
    ctx.beginPath();
    ctx.moveTo(220, 100);
    ctx.lineTo(245, 50);
    ctx.lineTo(270, 100);
    ctx.lineTo(220, 100);
    ctx.closePath();

    ctx.strokeStyle = "yellow";
    ctx.stroke();
    ctx.closePath();
};

drawCircle();
drawRect();
drawTriangle();