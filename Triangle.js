


function calculateTriangle(){
    const baseInput = document.getElementById('baseInput');
    const heightInput = document.getElementById('heightInput');
    const triangleValue = document.getElementById('triangleValue');
    const baseValues = baseInput.value;
    const heightValues = heightInput.value;
    const base = parseFloat(0.5 * baseValues * heightValues);
    triangleValue.innerText = base;
    baseInput.value = '';
    heightInput.value = '';
}

