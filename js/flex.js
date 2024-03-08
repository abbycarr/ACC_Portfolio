const widthIndicator = document.querySelectorAll(".width-indicator");

const addWidth = (el) => {
  el.textContent = "width: " + el.offsetWidth + "px";
};

const showSizes = () => {
  widthIndicator.forEach((indicator) => addWidth(indicator));
};

window.onload = showSizes;
window.onresize = showSizes;