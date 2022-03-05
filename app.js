const container = document.querySelector('.container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
console.log(rows);

function defaultGrid() {
    if (rows.length > 0 || cells.length > 0) {
        alert("You already have a grid. If you want one new, reset this one");
    } else {
        let cellNum = prompt("Enter how many cells do you want in the square grid");
        if (cellNum > 100) {
            cellNum = prompt("The square cannot have more than 100 cells per side, enter a number between 1 and 100");
        };
        makeRows(cellNum);
        makeColumns(cellNum);
        for (i = 0; i < cells.length; i++){
            cells[i].addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = randomBgColor();
            });
        };
    };
};

function resetGrid() {
    for (i = (rows.length - 1); i >= 0; i--) {
        container.removeChild(rows[i]);
    }
}

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
        row.style.display = "flex";
        row.style.flexGrow = 1;
    }
}

function makeColumns(colNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colNum; j++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell';
        };
    };
};

function randomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
};