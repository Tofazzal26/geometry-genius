function EllipseCalculate() {
    const input = document.getElementById('EllipseValue');
    const a = commonEllipse('axis');
    const b = commonEllipse('baxis');
    const output = parseFloat(3.14 * a * b).toFixed(2);
    input.innerText = output;
}

function commonEllipse(common) {
    const input = document.getElementById(common)
    const value = input.value;
    return value;
}




