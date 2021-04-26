import { createPlatform, drawPlatforms } from "./lib/platforms.js";
import { drawPlayer, updatePlayer, playerRect } from "./lib/player.js";
import { createSpike, drawSpikes } from "./lib/spikes.js";

const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 450;

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

const camera = {
  x: 0,
  y: 0
};

// Skapa spelets level
// createPlatform(x, y, width, height);

createPlatform(40 * 15, canvas.height - 40 * 1, 40 * 8, 40 * 1);

createSpike(40 * 20, canvas.height - 40 * 1);

/*
createPlatform(40 * 15, canvas.height - 40 * 1, 40 * 1, 40 * 1);
createPlatform(40 * 19, canvas.height - 40 * 2, 40 * 1, 40 * 2);
createPlatform(40 * 23, canvas.height - 40 * 3, 40 * 1, 40 * 3);
createPlatform(40 * 27, canvas.height - 40 * 3, 40 * 5, 40 * 3);
createPlatform(40 * 38, canvas.height - 40 * 2, 40 * 5, 40 * 2);
createPlatform(40 * 42, canvas.height - 40 * 3, 40 * 1, 40 * 1);
createPlatform(40 * 47, canvas.height - 40 * 3, 40 * 1, 40 * 1);
createPlatform(40 * 52, canvas.height - 40 * 3, 40 * 4, 40 * 3);
createPlatform(40 * 55, canvas.height - 40 * 4, 40 * 1, 40 * 1);
createPlatform(40 * 63, canvas.height - 40 * 2, 40 * 2, 40 * 2);
createPlatform(40 * 69, canvas.height - 40 * 2, 40 * 1, 40 * 2);
createPlatform(40 * 74, canvas.height - 40 * 2, 40 * 1, 40 * 2);
createPlatform(40 * 79, canvas.height - 40 * 2, 40 * 1, 40 * 2);
createPlatform(40 * 84, canvas.height - 40 * 3, 40 * 2, 40 * 3);
createPlatform(40 * 87, canvas.height - 40 * 4, 40 * 2, 40 * 4);
createPlatform(40 * 90, canvas.height - 40 * 5, 40 * 2, 40 * 5);
*/


requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  //
  // Uppdatera alla game objects.
  //

  updatePlayer();
  
  camera.x = Math.max(0, playerRect.x - canvas.width/4);

  //
  // Rit ut alla game objects
  //

  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatforms(context, camera);
  drawSpikes(context, camera);
  drawPlayer(context, camera);
}