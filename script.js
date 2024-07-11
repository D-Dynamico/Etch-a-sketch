const container = document.querySelector('.container');

function createSquares(size) {
    container.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${600 / size}px`;
        square.style.height = `${600 / size}px`;
        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = getRandomColor();
        });
    });
}

createSquares(16);

function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

const newGrid = document.querySelector('button');
newGrid.addEventListener('click', function() {
    let size = prompt('Enter grid size (e.g., 16 for 16x16)');
    size = parseInt(size);
    if (size > 0) {
        createSquares(size);
    } else {
        alert('Enter a valid grid size!');
    }
});
