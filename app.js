const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const rangeBtn = document.getElementById('jsRange');
const modeBtn = document.querySelector('.jsMode');
const save = document.querySelector('.jsSave');
const clear = document.querySelector('.jsClear');
let filling = false; // when it is paiting mode

const INITIAL_COLOR = 'black';

canvas.width = 700;
canvas.height = 550;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 2.5; 
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
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
    ctx.fillStyle = clickColor;
}

function handleRange(event) {
    const value = event.target.value;
    ctx.lineWidth = value;
}

function changeMode(event) {
    let text = event.target.innerHTML;
    if(filling === false) {
        modeBtn.innerText = "PAINT";
        filling = true;
    }else if(filling === true) {
        modeBtn.innerText = "FILL";
        filling = false;
    }
}

function handleCanvasClick() {
    if(filling) {

        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSave() {
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = "PaintJS[🎨]";
    link.click();
}

function handleClear() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}

Array.from(colors).forEach(color => {
    color.addEventListener("click", handleClickColor);
})

if(rangeBtn) {
    
    rangeBtn.addEventListener("change", handleRange);
}

if(modeBtn) {
    modeBtn.addEventListener("click", changeMode);
}

if(save) {
    save.addEventListener('click', handleSave);
}

if(clear) {
    clear.addEventListener('click', handleClear);
    
}