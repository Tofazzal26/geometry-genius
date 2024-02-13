

function parallelogramCaltutale() {
    const parallelog = document.getElementById('parallelogramValue');
    const base = commonParallelogram('pBase');
    const height = commonParallelogram('pHeight');
    const output = parseFloat(base * height);
    parallelog.innerText = output;
}



function commonParallelogram(common) {
    const inputValue = document.getElementById(common);
    const value = inputValue.value;
    return value;
}
