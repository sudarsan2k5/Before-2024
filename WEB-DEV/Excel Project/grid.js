const rows = 100;
const clos = 26;

const addressColCont = document.querySelector('.address-col-cont');
const addressRwoCont = document.querySelector('.adress-row-cont');
const cellCont = document.querySelector('.cell-cont');
const addressBar = document.querySelector('.address-bar');

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
        cell.setAttribute('contenteditable', 'true');
        cell.setAttribute('spellcheck', 'false');

        // Attributes for cell and Storage Identification
        cell.setAttribute('rid', i);
        cell.setAttribute('cid', j);
        
        rowCont.appendChild(cell);
        addListenerForAddressBarDisplay(cell, i, j);
    }
    cellCont.appendChild(rowCont);
}

function addListenerForAddressBarDisplay(cell, i, j){
    cell.addEventListener('click', () => {
        let rowId = i + 1;
        let colId = String.fromCharCode(65 + j);
        addressBar.value = `${colId}${rowId}`;
    });
}


// By Default Click on First Cell
const firstCell = document.querySelector('.cell');
firstCell.click();

