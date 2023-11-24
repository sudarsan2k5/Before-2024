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
    sheetDB.push(sheetRow);
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
let activecellColorProp = '#d1d8e0';
let inactiveColorProp = '#ecf0f1';

bold.addEventListener('click', () => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);
  
  //Modification
  cellProp.bold = !cellProp.bold; // Data Change
  cell.style.fontWeight = cellProp.bold ? 'bold' : 'normal'; // UI change
  bold.style.backgroundColor = cellProp.bold ? activecellColorProp : inactiveColorProp
});
italic.addEventListener('click', () => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);
  
  //Modification
  cellProp.italic = !cellProp.italic; // Data Change
  cell.style.fontStyle = cellProp.italic ? 'italic' : 'normal'; // UI change
  italic.style.backgroundColor = cellProp.italic ? activecellColorProp : inactiveColorProp
});
underlined.addEventListener('click', () => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);
  
  //Modification
  cellProp.underlined = !cellProp.underlined; // Data Change
  cell.style.textDecoration = cellProp.underlined ? 'underline' : 'none'; // UI change
  underlined.style.backgroundColor = cellProp.underlined ? activecellColorProp : inactiveColorProp
});
fontSize.addEventListener('change', (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);

  cellProp.fontSize = fontSize.value;
  cell.style.fontSize = cellProp.fontSize + 'px'; // Data Change
  fontSize.value = cellProp.value;
});
fontFamily.addEventListener('change', (e) => {
  let address = addressBar.value;
  let [cell, cellProp] = activecell(address);

  cellProp.fontFamily = fontFamily.value;
  cell.style.fontFamily = cellProp.fontFamily; // Data Change
  fontFamily.value = cellProp.fontFamily;
});



function activecell(address){
  let [rid, cid] = decodeRIDCIDfromAddress(address);
  // Access Cell and Obj
  let cell = document.querySelector(`.cell[rid='${rid}'][cid='${cid}']`);
  
  // Check if the cell exists
  if (cell) {
    let cellProp = sheetDB[rid][cid];
    return [cell, cellProp];
  } else {
    console.error(`Cell not found at rid=${rid}, cid=${cid}`);
    return [null, null];
  }
}

function decodeRIDCIDfromAddress(address){
  //address --> "A1"
  let rid = Number(address.slice(1) - 1);
  let cid = Number(address.charCodeAt(0)) - 65;
  return [rid, cid];
}