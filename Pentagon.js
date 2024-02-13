

function pentagonCalculate() {
    const input = document.getElementById('PentagonValue');
    const p = commonPentagon('p');
    const b = commonPentagon('b')
    const output = parseFloat(0.5 * p * b);
    input.innerText = output;
}

function commonPentagon(common) {
    const input = document.getElementById(common)
    const value = input.value;
    input.value = '';
    return value;
}


