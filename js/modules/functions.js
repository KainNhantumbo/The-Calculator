

export async function calcEqLinear () {
    try {
        let a = await document.getElementById('input-a').value;
        let b = await document.getElementById('input-b').value;
        let result = document.getElementById('result');
        let x = 0;

        x = -b / a;
        return result.textContent = `x = ${x}`;
    } catch (err) {
        console.log(err);
    }
}

/* function calcEquQuadratic () {
    const a = 0;
    const b = 0;
    const c = 0;
    const result = 0;
    const x1 = 0;
    const x2 = 0;

    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta >= 0) {
        x1 = (- b + Math.sqrt(delta)) / 2 * a;
        x2 = (- b - Math.sqrt(delta)) / 2 * a;
    } else if (delta === 0) {
        result.textContent = `Delta equals to ${delta}`;
    } else {
        result.textContent = `Dela`
    }
} */