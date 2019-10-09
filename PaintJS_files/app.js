const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const rangeBtn = document.getElementById('jsRange');
let mode = document.querySelector('.jsMode');

canvas.width = 700;
canvas.height = 550;

ctx.lineWidth = 2.5; 
ctx.strokeStyle = 'black';

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
        ctx.beginPath(); //this is actually no need 
        ctx.moveTo(x, y);
    }else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
}

function handleClickColor(event) {
    const clickColor = event.target.style.backgroundColor;
    ctx.strokeStyle = clickColor;
}

function handleRange(event) {
    const value = event.target.value;
    ctx.lineWidth = value;
}

function changeMode(event) {
    let text = event.target.innerHTML;
    console.log(text);
    if(text === "FILL") {
        text = "PAINT";
        console.log(text);
    }else {
        console.log(text);
        text = "FILL";
    }
    return text;
}

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => {
    color.addEventListener("click", handleClickColor);
})

if(rangeBtn) {
    
    rangeBtn.addEventListener("change", handleRange);
}

if(mode) {
    mode.addEventListener("click", changeMode);
}