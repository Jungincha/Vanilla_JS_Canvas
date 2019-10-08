const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 550;

ctx.strokeStyle = '#000';
ctx.lineWidth = 2.5; 

let painting = false;

function stopPainting(event) {
    painting = false;
}

function startPainting(event) {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        //ctx.beginPath(); this is actually no need 
        ctx.moveTo(x, y);
    }else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
}




if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}