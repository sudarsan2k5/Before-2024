const rows = 100;
const clos = 26;

const addressColCont = document.querySelector('.address-col-cont');
const addressRwoCont = document.querySelector('.adress-row-cont');
const cellCont = document.querySelector('.cell-cont');

for(let i = 0; i < rows; i++){
    const addressCol = document.createElement('div');
    addressCol.setAttribute('class', 'adress-col');
    addressCol.innerText = i + 1;
    addressColCont.appendChild(addressCol);
}
for(let i = 0; i < clos; i++){
    const addressRow = document.createElement('div');
    addressRow.setAttribute('class', 'adress-row');
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRwoCont.appendChild(addressRow);
}
for(let i = 0; i < rows; i++){
    const rowCont = document.createElement('div');
    rowCont.setAttribute('class', 'row-cont');
    for(let j = 0; j < clos; j++){
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        rowCont.appendChild(cell);
    }
    cellCont.appendChild(rowCont);
}