const container = document.querySelector('#container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

defaultGrid();


function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

function makeColumns(colNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}