import { goalRect } from "./goal.js";
import { getKey, keyCodes } from "./input.js";
import { moveCollideX, moveCollideY } from "./physics.js";
import { platforms } from './platforms.js';
import { spikes } from "./spikes.js";

const gravity = 1;
const jumpStrength = -12.4;
const speed = 7.2;

let color = 'lime';

export const playerRect = {
  x: -100,
  y: 760,
  width: 40,
  height: 40
};

let vy = 0;
let grounded = false;

const collideWithObjects = [ platforms, spikes, goalRect ];

export function updatePlayer() {

  if(grounded && getKey(keyCodes.arrowUp)) {
    vy = jumpStrength;
    grounded = false;
  }

  vy += gravity;

  // Denna kod gör det möjligt att styra playern som i ett platformer spel.
  let vx = speed;
  vx += getKey(keyCodes.arrowLeft) ? -5 : 0;
  vx += getKey(keyCodes.arrowRight) ? 5 : 0; 

  // Denna rad gör så att playern rör sig mot höger.
  //let vx = speed;

  moveCollideX(vx, playerRect, collideWithObjects, onCollideX);
  moveCollideY(vy, playerRect, collideWithObjects, onCollideY);

  if(playerRect.y > 450 - playerRect.height) {
    playerRect.y = 450 - playerRect.height;
    vy = 0;
    grounded = true;
  }
}

/**
 * @param {CanvasRenderingContext2D} context 
 */
export function drawPlayer(context, camera) {
  context.fillStyle = color;
  context.fillRect(playerRect.x - camera.x, playerRect.y - camera.y, playerRect.width, playerRect.height);
}

function onCollideX(pawn, collisionObject) {
if(collisionObject.type === "goal") {
  console.log("Du vann!");
  return false;
}

  playerRect.x = -100;
  playerRect.y = 760;

  return false;
}

function onCollideY(pawn, collisionObject) {
  if(collisionObject.type === "goal") {
    console.log("Du vann!");
    return false;
}
  if(collisionObject.type === 'spike') {
    playerRect.x = -100;
    playerRect.y = 760;
    return false;
  }

  if(vy >= 0) {
    grounded = true;
  }
  vy = 0;

  collisionObject.color = 'yellow';

  return true;
}
