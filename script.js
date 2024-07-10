const container = document.querySelector('.container');

function createSquares(size){

    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    const box=document.querySelectorAll(".square");

    box.forEach(square => {
    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = getRandomColor();
    });
    });

    //This is basically used for ensuring squares are properly aligned
    container.style.gridTemplateColumns = `repeat(${size}, 30px)`; 
    container.style.gridTemplateRows = `repeat(${size}, 30px)`; 
}


function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

const newGrid=document.querySelector("button");
newGrid.addEventListener('click', function() {
    let size=prompt("Enter grid size(e.g 16x16...)");
    size=parseInt(size);
    if(size>0){
        createSquares(size);
    }
    else{
        alert("Enter valid grid!!")
    }
})



