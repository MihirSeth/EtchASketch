const DEFAULT_SIZE = 16
const DEFAULT_COLOR = 'black'


let currentColor = DEFAULT_COLOR;
let currentMode = 'black';
let currentSize = DEFAULT_SIZE;

let colorPicked;

let isColorMode = false;
// let clickNum = 0;

// const gridItem = document.getElementById("gridItem");
const gridContainer= document.getElementById("gridContainer");

const resetButton = document.getElementById("resetButton");
const rgbMode = document.getElementById("rgbButton");
const colorMode = document.getElementById("colorButton");
const eraserMode = document.getElementById("eraserButton");
const selectedMode = document.getElementById('selectedMode');
const colorPicker = document.getElementById('colorPicker');
// const greyscaleMode = document.getElementById('greyScale');

function buttonFontColorChange(){
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    rgbMode.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

resetButton.addEventListener('click', reset);
rgbMode.addEventListener('click', rainbowMode);
colorMode.addEventListener('click', coloredMode);
eraserMode.addEventListener('click', eraseredMode);
colorPicker.onchange = (e) => pickedColor(e.target.value)
// greyscaleMode.addEventListener('click', greyscale);

let slider = document.getElementById("slider");
let output = document.getElementById("gridSize");


// function greyscale(){
//     currentMode = 'greyscale';
//     selectedMode.innerHTML = 'Selected Mode: Greyscale Mode'

// }

function rainbowMode(){
    // isColorMode = false
    currentMode = 'rainbow';
    selectedMode.innerHTML = 'Selected Mode: RGB Mode'
    
    // colorChange
}

function pickedColor(colorPick){
    // console.log(colorPick)
    isColorMode = true
    colorPicked = colorPick;
    // console.log(colorPicker.style.backgroundColor)
    colorPicker.style.backgroundColor = `${colorPicked}`;

    currentMode = 'color';
    currentColor = colorPicked;
    selectedMode.innerHTML = 'Selected Mode: Color Mode'
    selectedMode.innerHTML = 'Selected Mode: Color Mode'

    colorChange
}


function coloredMode(){
    selectedMode.innerHTML = 'Selected Mode: Color Mode'

    if (isColorMode===true){    
        console.log('coloredMode')
  
        currentMode = 'color';
        currentColor = colorPicked;
        // selectedMode.innerHTML = 'Selected Mode: Color Mode'
        colorChange
    } else if (isColorMode ===false){
        console.log('not')
        currentMode = 'black';
        colorChange
    }
    
}


function eraseredMode(){

    currentMode = 'erase';
    selectedMode.innerHTML = 'Selected Mode: Eraser Mode'

    colorChange
}


function gridMake() {


    for(i = 0; i < (currentSize*currentSize); i++) {

        const gridItem = document.createElement('div')
        gridItem.setAttribute('id',`gridItem${i}`)
        let calcDimensions = 500/currentSize;

        gridItem.style.height = `${calcDimensions}px`;
        gridItem.style.width = `${calcDimensions}px`;
        gridItem.style.backgroundColor = 'white';
        // gridItem.style.border = '1px dashed black';

        // currentMode = currentColor;
        // console.log(currentColor)

        gridItem.addEventListener('mouseover', colorChange);
        gridContainer.appendChild(gridItem);
    }
}


function reset(){
    let size = slider.value;
    for(i = 0; i < (size*size); i++) {
        const getGridItem= document.getElementById(`gridItem${i}`);
        getGridItem.style.backgroundColor = 'white'
    }
    buttonFontColorChange();
}


function colorChange(e){
    // e.target.style.backgroundColor = currentMode;
    if (currentMode==='rainbow'){ 
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode==='color'){ 
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode==='erase'){ 
        e.target.style.backgroundColor = 'white';
    // } else if (currentMode==='greyscale'){
    } else{
        e.target.style.backgroundColor = 'black';
    }
}

slider.onmousemove = () => updateSizeValue(slider.value)

function updateSizeValue (size){
    output.innerHTML = `${size} x ${size}`;

}


slider.onchange = function() {
    output.innerHTML = `${slider.value} x ${slider.value}`;
    currentSize = slider.value;
    gridContainer.innerHTML = ''
    gridMake()
}

window.onload = () => {
    gridMake(DEFAULT_SIZE)
    buttonFontColorChange()
}




