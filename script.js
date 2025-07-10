const resetButton = document.querySelector(".reset-button");
const gridContainer = document.querySelector(".grids");

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target !== gridContainer) {//correct event delegation
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        e.target.style.backgroundColor = randomColor;
    } // Change background color
});

resetButton.addEventListener("click", () => {
    size = '';
    do {
        size = prompt("Please enter a size for your grid");
    }
    while (size === '' || size >= 60);
    gridContainer.innerHTML = '';//here it's safe, ur not prompting for any input , getting nodes list and removing doesnt work


    size = Number(size);
    let gridSize = getGridSize(size);
    createGrids(size, gridSize);

});

function createGrids(n, gridSize) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            gridContainer.append(createGrid(gridSize));
        }
    }
}

function createGrid(size) {
    let grid = document.createElement("div");
    grid.style.width = `${size}px`;
    grid.style.height = `${size}px`;
    grid.style.backgroundColor = "white";
    grid.style.boxSizing = "border-box"; // Include border in size calculation
    return grid;
}

function getGridSize(number = 10, widthDimension = 750, heightDimension = 750) {
    const width = widthDimension || gridContainer.offsetWidth;
    const height = heightDimension || gridContainer.offsetHeight;
    return width / number;
}