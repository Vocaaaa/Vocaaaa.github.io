export function moveCollideX(xDistance, pawn, collisionObjects, collisionCallback) {
  pawn.x += xDistance;
  for(let k = 0; k < collisionObjects.length; k++) {
    for(let i = 0; i < collisionObjects[k].length; i++) {
      const other = collisionObjects[k][i];

      if(rectOverlaps(pawn, other)) {
        
        if(collisionCallback) {
          if(collisionCallback(pawn, other) === false) {
            continue;
          }
        }

        const collisionOffset = pawn.x + pawn.width / 2 < other.x + other.width / 2
          ? pawn.x + pawn.width - other.x
          : pawn.x - (other.x + other.width)
        pawn.x -= collisionOffset;
      }
    }
  }
}

export function moveCollideY(yDistance, pawn, collisionObjects, collisionCallback) {
  pawn.y += yDistance;
  for(let k = 0; k < collisionObjects.length; k++) {
    for(let i = 0; i < collisionObjects[k].length; i++) {
      const other = collisionObjects[k][i];
      
      if(rectOverlaps(pawn, other)) {

        if(collisionCallback) {
          if(collisionCallback(pawn, other) === false) {
            continue;
          }
        }

        const collisionOffset = pawn.y + pawn.height / 2 < other.y + other.height / 2
          ? pawn.y + pawn.height - other.y
          : pawn.y - (other.y + other.height)
        pawn.y -= collisionOffset;
      }
    }
  }
}

function rectOverlaps(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}