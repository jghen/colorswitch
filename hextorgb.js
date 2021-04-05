//__HEX_TO_RGB_________________________________________________

var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("gradient");

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length === 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits - convert to hex
    } else if (h.length === 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    // + converts from string back to number
    return `rgb (${+r}, ${+g}, ${+b})`;
}

function changeGradientColor() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    + ")"; 

    /* css.textContent = `Left: ${color1.value} Right: ${color2.value}`; */
    css.textContent = `Left: ${hexToRGB(color1.value)} \u00A0 \u00A0 Right: ${hexToRGB(color2.value)}`;
};

//event listneners for hex to rgb
color1.addEventListener('input', changeGradientColor);
color2.addEventListener('input', changeGradientColor);

