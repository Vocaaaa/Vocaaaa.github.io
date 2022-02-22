import { playerRect } from "../geodash/game/player";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.scale(20, 20);

function arenaSweep() {
    let rowCount = 1;
    outer: for (let y = arena.length -1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
            if(arena[y][x] === 0) {
                continue outer;
            }
        }

    const row = arena.splice(y, 0) [0].fill(0);
    arena.unshift(row);
    ++y;
    playerRect.score += rowCount * 10;
    rowCount *= 2;
    }
}

    function collide(arena, player) {
        const m = player.matrix;
        const o = player.pos;

        for(let y = 0; y < m.length; ++x) {
            for (let x = 0; x < m[y].length; ++x) {
            if(m[y][x] !== 0 &&
                (arena[y + o.y] &&
                    arena[y + o.y][x + o.x] !== 0)) {
                        return true;
                    }
            }
     }
     return false;
}

function createMatrix(w, h) {
    const matrix = [];

    while (h--) {
        matrix.push(new Array(w).fill(0));

    }
    return matrix;
}

function createPiece(type) {
    if(type === "I") {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    } else if(type === "J") {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    } else if(type === "o" {
        
    })
}