
//__RGB_TO_HEX_________________________________________________

//get rgb from input
let redInput = document.querySelector('.red');
let greenInput = document.querySelector('.green');
let blueInput = document.querySelector('.blue');
let hexInput = document.querySelector('#hex');
let button = document.querySelector('button');
let colorInput = document.querySelector('#color');

colorInput.textContent = 'Click Me!';

// convert a 3 digit rgb to 2 digit hex
const convertRgbValue = (rgb) => {
  let hex = Number(rgb).toString(16);
  hex.length < 2 ? hex = '0' + hex: hex;
  return hex;
}

//convert all rgb values (red, green, blue) to hex
const rgbToHex = (redRgb, greenRgb, blueRgb) => {
  r = convertRgbValue(redRgb);
  g = convertRgbValue(greenRgb);
  b = convertRgbValue(blueRgb);
  return "#" + r + g + b;
}

//return calculated hex to hex input field
const returnHexToInput = () => {
    hexInput.value = rgbToHex(redInput.value, greenInput.value, blueInput.value);
    colorInput.value = hexInput.value;
  }

//put the new color input value into r, g, b inputs

const convertRedHexToRgb = (h) => {
  let r = 0;
  h.length === 4 ? r = '0x' + h[1] + h[1] :
  h.length === 7 ? r = '0x' + h[1] + h[2] :
  r = 0;
  return +r; //convert to number
}
const convertGreenHexToRgb = (h) => {
  let g = 0;
  h.length === 4 ? g = '0x' + h[3] + h[3] :
  h.length === 7 ? g = '0x' + h[3] + h[4] :
  g = 0;
  return +g; //convert to number
}
const convertBlueHexToRgb = (h) => {
  let b = 0;
  h.length === 4 ? b = '0x' + h[5] + h[5] :
  h.length === 7 ? b = '0x' + h[5] + h[6] :
  b = 0;
  return +b; //convert to number
}

const colorInputToRgbInputs = () => {
  redInput.value = convertRedHexToRgb(colorInput.value);
  greenInput.value = convertGreenHexToRgb(colorInput.value);
  blueInput.value = convertBlueHexToRgb(colorInput.value);
  returnHexToInput();
} 

//event listeners for rgb to hex
button.addEventListener('click', returnHexToInput)
redInput.addEventListener('change', returnHexToInput);
greenInput.addEventListener('change', returnHexToInput);
blueInput.addEventListener('change', returnHexToInput);

//event listnener for color input
colorInput.addEventListener('input', colorInputToRgbInputs);

