let gridSize = 16;


const gridItem = document.getElementById("gridItem");
const cloneGridItem = gridItem.cloneNode(true);
const gridContainer= document.getElementById("gridContainer");

for(i = 0; i < (gridSize*gridSize-1); i++) {
    let gridItem = document.getElementById("gridItem");
    let cloneGridItem = gridItem.cloneNode(true);
    let gridContainer= document.getElementById("gridContainer");
    gridContainer.appendChild(cloneGridItem);
}


function colorChange(e){
    // gridItem.setAttribute("style", "background-color:blue;")
    gridItem.style.backgroundColor = 'blue';

    // console.log('hello')
}

gridItem.addEventListener('mouseover', colorChange);