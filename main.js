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
    activateCellColoring();
};

const resetGrid = function() {
    const itemsToRemove = document.querySelectorAll('div.gridRow');
    itemsToRemove.forEach((item) => {
        item.remove();
    });
};

const activateCellColoring = function() {
    const colorCellList = document.querySelectorAll('div.gridCell');
    colorCellList.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', 'background: black');
        });
    });
};