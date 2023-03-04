const createGrid = function(gridSize) {
    resetGrid();
    const gridContainer = document.querySelector('div.gridContainer');
    for (let i = 0; i < gridSize; i++) {
        const newGridRow = document.createElement('div');
        newGridRow.classList.add('gridRow');
        gridContainer.append(newGridRow);
        for (let i = 0; i < gridSize; i++) {
            const newGridCell = document.createElement('div');
            newGridCell.classList.add('gridCell');
            newGridRow.append(newGridCell);
        }
    }
};

const resetGrid = function() {
    const itemsToRemove = document.querySelectorAll('div.gridRow');
    itemsToRemove.forEach((item) => {
        item.remove();
    });
};

const cellBasicColoring = function() {
    const colorCellList = document.querySelectorAll('div.gridCell');
    colorCellList.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', 'background: black');
        });
    });
};

const cellMultiColoring = function() {
    const randomRGB = () => Math.floor(Math.random() * 255);
    const colorCellList = document.querySelectorAll('div.gridCell');
    colorCellList.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `background: rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`);
        });
    });
};

createGrid(16);