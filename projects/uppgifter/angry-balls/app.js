//
// Imports
//

import '../vendor/planck.min.js';


//
// Globala variabler
// 

const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 500;
const context = canvas.getContext('2d');

let previousElapsedTime = 0;

let mouseX = 0;
let mouseY = 0;
const mouseDrag = {
  obj: null,
  startX: 0,
  startY: 0
};

const physicsScale = 80; // <-- Antal pixlar per meter
const world = planck.World(planck.Vec2(0, 10));
world.on('post-solve', onCollision);

const floor = {
  color: 'white',
  width: 2000,
  height: 100,
  body: createBox(1000 / physicsScale, canvas.height / physicsScale, 2000 / physicsScale, 100 / physicsScale)
};
floor.body.setStatic();

const ball = {
  color: 'red',
  radius: 25,
  body: createBall(200 / physicsScale, (canvas.height - 200) / physicsScale, 25 / physicsScale)
};
ball.body.setKinematic();
ball.body.setLinearDamping(0.25);
ball.body.setAngularDamping(10);

const levelObjects = [];
for(let i = 0; i < 6; i++) {
  let box = {
    color: 'gray',
    width: 40,
    height: 40,
    body: createBox(
      500 / physicsScale,
      (canvas.height - floor.height/2 - 20 - 40 * i) / physicsScale,
      40 / physicsScale,
      40 / physicsScale
    )
  };
  levelObjects.push(box);
  
  box = {
    color: 'gray',
    width: 40,
    height: 40,
    body: createBox(
      700 / physicsScale,
      (canvas.height - floor.height/2 - 20 - 40 * i) / physicsScale,
      40 / physicsScale,
      40 / physicsScale
    )
  };
  levelObjects.push(box);
}

const pigs = [];

pigs.push({
  alive: true,
  color: 'lime',
  radius: 40,
  body: createBall(500 / physicsScale, 2, 40 / physicsScale, 0.1)
});
pigs[0].body.setAngularDamping(10);

pigs.push({
  alive: true,
  color: 'lime',
  radius: 40,
  body: createBall(700 / physicsScale, 2, 40 / physicsScale, 0.1)
});
pigs[1].body.setAngularDamping(10);


//
// Events
//

canvas.addEventListener('pointerdown', onPointerDown);
canvas.addEventListener('pointerup', onPointerUp);
canvas.addEventListener('pointermove', onPointerMove);


//
// Starta game loopen
// 

requestAnimationFrame(gameLoop);


//
// Funktioner
// 

function gameLoop(elapsedTime) {
  requestAnimationFrame(gameLoop);

  const deltaTime = Math.min(0.1, (elapsedTime - previousElapsedTime) / 1000);
  previousElapsedTime = elapsedTime;

  update(deltaTime);
  render();
}


function update(deltaTime) {
  world.step(deltaTime, 12, 4);

  for(let i = pigs.length - 1; i >= 0; i--) {
    if(!pigs[i].alive) {
      world.destroyBody(pigs[i].body);
      pigs.splice(i, 1);
    }
  }
}


function render() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  if(mouseDrag.obj) {
    context.beginPath();
    context.arc(mouseDrag.startX, mouseDrag.startY, 5, 0, Math.PI*2);
    context.fillStyle = 'white';
    context.fill();
    
    context.beginPath();
    context.moveTo(mouseDrag.startX, mouseDrag.startY);
    context.lineTo(mouseX, mouseY);
    context.strokeStyle = 'white';
    context.lineWidth = 2;
    context.stroke();
  }

  let x, y; // <-- används för att spara positionen för physics bodies

  x = floor.body.getPosition().x * physicsScale;
  y = floor.body.getPosition().y * physicsScale;
  drawBox(x, y, floor.width, floor.height, floor.body.getAngle(), floor.color);

  x = ball.body.getPosition().x * physicsScale;
  y = ball.body.getPosition().y * physicsScale;
  drawCircle(x, y, ball.radius, ball.color);

  for(let i = 0; i < levelObjects.length; i++) {
    x = levelObjects[i].body.getPosition().x * physicsScale;
    y = levelObjects[i].body.getPosition().y * physicsScale;
    drawBox(x, y, levelObjects[i].width, levelObjects[i].height, levelObjects[i].body.getAngle(), levelObjects[i].color);
  }

  for(let i = 0; i < pigs.length; i++) {
    x = pigs[i].body.getPosition().x * physicsScale;
    y = pigs[i].body.getPosition().y * physicsScale;
    drawCircle(x, y, pigs[i].radius, pigs[i].color);
  }
}


function onPointerDown(e) {
  if(!mouseDrag.obj) {
    const x = ball.body.getPosition().x * physicsScale;
    const y = ball.body.getPosition().y * physicsScale;

    if(getDistance(mouseX, mouseY, x, y) < ball.radius) {
      ball.body.setKinematic();
      ball.body.setLinearVelocity(planck.Vec2(0, 0));
      mouseDrag.obj = ball;
      mouseDrag.startX = x;
      mouseDrag.startY = y;
    }
  }
}


function onPointerUp(e) {
  if(mouseDrag.obj) {
    const dx = mouseDrag.startX - mouseX;
    const dy = mouseDrag.startY - mouseY;
    mouseDrag.obj.body.setDynamic();
    mouseDrag.obj.body.setLinearVelocity(planck.Vec2(
      dx / physicsScale * 8,
      dy / physicsScale * 8
    ));
    mouseDrag.obj = null;
  }
}


function onPointerMove(e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;

  if(mouseDrag.obj) {
    mouseDrag.obj.body.setPosition(planck.Vec2(
      mouseX / physicsScale,
      mouseY / physicsScale
    ));
  }
}


function drawCircle(x, y, radius, color) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}


function drawBox(x, y, width, height, rotation, color) {
  context.save();
  context.translate(x, y);
  context.rotate(rotation);
  context.fillStyle = color;
  context.fillRect(-width/2, -height/2, width, height);
  context.restore();
}


function getDistance(x1, y1, x2, y2) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  return Math.sqrt(dx*dx + dy*dy);
}


function createBall(x, y, radius, density = 1) {
  const body = world.createBody({ type: 'dynamic', position: planck.Vec2(x, y) });
  body.createFixture(
    planck.Circle(radius),
    {
      density,
      restitution: 0.25,
      friction: 0.5
    }
  );
  return body;
}


function createBox(x, y, width, height) {
  const body = world.createBody({ type: 'dynamic', position: planck.Vec2(x, y) });
  body.createFixture(
    planck.Box(width/2, height/2),
    {
      density: 1,
      restitution: 0.25,
      friction: 0.5
    }
  );
  return body;
}


function onCollision(contact) {
  const bodyA = contact.getFixtureA().getBody();
  const bodyB = contact.getFixtureB().getBody();
  
  let pig;
  for(let i = 0; i < pigs.length; i++) {
    if(pigs[i].body == bodyA || pigs[i].body == bodyB) {
      pig = pigs[i];
      break;
    }
  }

  if(pig) {
    const impulse = contact.getManifold().points[0].normalImpulse / pig.body.getMass();
    if(impulse > 5) {
      pig.alive = false;
    }
  }
}