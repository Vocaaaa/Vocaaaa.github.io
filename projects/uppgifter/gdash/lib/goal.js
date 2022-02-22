export const goalRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  type: "goal"
};

export function createGoal(x, y, width, height) {
  goalRect.x = x;
  goalRect.y = y;
  goalRect.width = width;
  goalRect.height = height;
}

/**
 * @param {CanvasRenderingContext2D} context
 */
export function drawGoal(context, camera) {
  context.fillStyle = 'orange';
  context.fillRect(
    goalRect.x - camera.x,
    goalRect.y - camera.y,
    goalRect.width,
    goalRect.height
  );
}