const resetButton = document.querySelector(".reset-button");
const gridContainer = document.querySelector(".grids");

gridContainer.addEventListener("mouseenter", (e) => {
    // change background  of targetto random colour
});

resetButton.addEventListener("click", () => {
    size = '';
    do {
        size = prompt("Please enter a size for your grid");
    }
    while (size === '');

    children = gridContainer.childNodes;
    for (node of children) {
        gridContainer.removeChild(node);
    }
    let gridSize = getGridSize(size);
    createGrids(Number(size, gridSize));

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
    grid.style.borderColor = "white";
    grid.style.border = "20px";
}

function getGridSize(number = 10, widthDimension = 1000, heightDimension = 1000) {
    return (number / widthDimension).toFixed(0);
}