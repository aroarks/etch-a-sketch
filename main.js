const createGrid = function(gridSize) {
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