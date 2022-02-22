let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let keys = [];

canvas.width = 800;
canvas.height = 600;

class Box {
    constructor(x, y, w, h, color){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.color = color
    }
    draw = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h, this.color)
    }
};

player1 = new Box(10, 550, 50, 50, 'blue');

setInterval(gameLoop, 1);

window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode]
});

function gameLoop(){
    player1.draw();
    move();
    checkWalls();
};

function move(){
    if(keys[87]) {
        
    }
    if(keys[68]) {
        
    }
    if(keys[65]) {
        
    }
};

function checkWalls(){

};