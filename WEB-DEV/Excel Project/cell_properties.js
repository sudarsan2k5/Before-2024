// Storage
let sheetDB = [];

for(let i = 0; i < rows; i++){
    let sheetRow = [];
    for(let j = 0; j < clos; j++){
      let cellProp = {
        bold: false,
        italic: false,
        underline: false,
        alignment: 'left',
        fontFamily: 'monospace',
        fontSize: '14',
        fontColor: '#000000', // <<-- this color just for the indication purpose
        BGcolor: '#000000' // <<-- this color just for the indication purpose
        }  
      sheetRow.push(cellProp);
    }
    sheetRow.push(sheetRow);
}

// Selector For Cell Properties
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const underlined = document.querySelector('.underlined');
const fontSize = document.querySelector('.font-size-prop');
const fontFamily = document.querySelector('.font-family-prop');
const fontColor = document.querySelector('.font-color-prop');
const BGcolor = document.querySelector('.BGcolor-prop');
const alignment = document.querySelector('.alignment');
const leftAlign = alignment[0];
const centerAlign = alignment[1];
const rightAlign = alignment[2];

// let addressBar = document.querySelector('.address-bar');

let activeColorProp = "#d1d8e0";
let inactiveColorProp = "#ecf0f1";

//Attach Property ListNers
bold.addEventListener('click', (e) => {
    let address = addressBar.value;
    let[cell, cellProp] = activecell(address);

    //Modification
    cellProp.bold = !cellProp.bold; // data Change
    cell.style.fontWeight = cellProp.bold ? 'bold' : 'normal'; // UI change(1)
    cell.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
});

function activecell(address){
    let[rid, cid] = decodeRidCidFromAddress(address);

    //Access cell and Storage Object
    let cell = document.querySelector(`.cell[ride='${rid}'][cid="${cid}"]`);
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp]
}
function decodeRidCidFromAddress(address){
    // address -> "A1"
    let rid = Number(address.slice(1) - 1); // "1" --> 0
    let cid = Number(address.charCodeAt(0) - 65); // "A" --> 56
    return [rid, cid];
}