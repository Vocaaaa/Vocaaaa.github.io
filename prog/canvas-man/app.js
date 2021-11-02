const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Starta draw loopen
requestAnimationFrame(draw);

// Variabler för att hålla koll på pupillernas koordinater
let x = 240;
let y = 350;

let x2 = 0;

function draw() {

  // Räkna ut var pupillerna skall vara, exempel:
  x += 1;

  // Här ska du ha kod för att rita ut din smilegubbe.  

ctx.beginPath();

    ctx.lineWidth = 10;

    // hövo 
    ctx.arc(350, 350, 250, 0, Math.PI * 2, true);

    // mun
    ctx.moveTo(390, 472);
    ctx.arc(350, 450, 50, 0.5, 0.85 * Math.PI, false);

    // Öra 1
    ctx.moveTo(90, 300);
    ctx.arc(90, 350, 50, 5, 0.38 * Math.PI, true);

    // Öra 2
    ctx.moveTo(600, 300);
    ctx.arc(595, 350, 50, 4.65, 2.5 * Math.PI, false);
    
    // öga 1
     ctx.moveTo(500, 340);
     ctx.arc(460, 340, 45, 0, Math.PI * 2, true);

    // öga 2
    ctx.moveTo(280, 340);
    ctx.arc(240, 340, 45, 0, Math.PI * 2, true);
    
    ctx.stroke();

        // Pupill vänster
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2, false);
        ctx.fillStyle = "black";
        ctx.fill();
        
        // Pupill höger
        ctx.beginPath();
        ctx.arc(460, 350, 15, 0, Math.PI * 2, false);
        ctx.fillStyle = "black";
        ctx.fill();

    // vit box vänster
    ctx.fillStyle = "white";
    ctx.fillRect(90, 305, 20, 40);

    // vit box höger
    ctx.fillStyle = "white";
    ctx.fillRect(585, 306, 20, 40);
    
    // svart box höger
    ctx.fillStyle = "black";
    ctx.fillRect(595, 345, 20, 10);
    
    // svart box vänster
    ctx.fillStyle = "black";
    ctx.fillRect(85, 345, 20, 10);



  // Exempel hur du ritar ut pupillerna:
  // (observera att x och y variablerna används i arc funktionen)
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();

  // Vänta på datorskärmens nästa refresh och kalla på funktionen draw.
  // Detta gör så att funktionen draw körs med samma fps som skärmens refresh rate.
  requestAnimationFrame(draw);
}

