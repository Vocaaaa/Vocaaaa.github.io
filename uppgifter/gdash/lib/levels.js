const levels = [];
let levelIndex = 0;

export function createLevel(createCallback) {
  levels.push(createCallback);
}

export function startLevel(index) {
  levelIndex = index;
  levels[levelIndex]();
}

export function nextLevel() {
  levelIndex++;
  levels[levelIndex]();
}