

function rhombusCalculator() {
    const output = document.getElementById('RhombusValue');
    const d1 = commonRhombus('d1');
    const d2 = commonRhombus('d2');
    const input = parseFloat(0.5 * d1 * d2);
    output.innerText = input;
}

function commonRhombus(common) {
    const rhombus = document.getElementById(common);
    const value = rhombus.value;
    rhombus.value = '';
    return value;
}




