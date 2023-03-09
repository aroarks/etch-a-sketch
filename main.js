
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
    const rowsToRemove = document.querySelectorAll('div.gridRow');
    rowsToRemove.forEach((row) => {
        row.remove();
    });
};

const colorGrid = function() {
    const colorCellList = document.querySelectorAll('div.gridCell');
    colorCellList.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `background: black`);
        });
    });
};

const colorGridMulti = function() {
    const colorCellList = document.querySelectorAll('div.gridCell');
    colorCellList.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `background: ${randRGB()}`);
        });
    });
};

const randNum = (x) => Math.floor(Math.random() * x);

const randRGB = () => `rgb(${randNum(256)}, ${randNum(256)}, ${randNum(256)})`;

createGrid(16);
