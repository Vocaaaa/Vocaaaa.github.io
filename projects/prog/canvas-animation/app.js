const canvas = document.querySelector("#canvas");

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let x = 0;
let y = 300;

let speedx = 10;
let speedy = 10;

ctx.strokeStyle = "orange";

update();

function update() { 
    window.requestAnimationFrame(update);

    x += speedx;
    y += speedy;

    if(x > canvas.width) {
        speedx = -10;
        ctx.strokeStyle = "red";
    } else if(x < 30) {
        speedx = 10;
        ctx.strokeStyle = "lime";
    }

    if(y > canvas.height) {
        speedy = -10;
        ctx.strokeStyle = "blue";
    } else if(y < 30) {
        speedy = 10;
        ctx.strokeStyle = "yellow";
    }

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);

    ctx.lineWidth = 5;
    ctx.stroke();
};
