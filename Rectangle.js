



function RectangleCalcutaion() {
    const rectValue = document.getElementById('rectangleValue');
    const width = commonValues('width');
    const length = commonValues('length');
    const rectangle = parseFloat(width * length);
    rectValue.innerText = rectangle;
}


function commonValues(input) {
    const inputValue = document.getElementById(input);
    const values = inputValue.value;
    return values;
}

