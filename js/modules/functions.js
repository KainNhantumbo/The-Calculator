const errorHandler = (result) => {
    switch (result) {
        case undefined:
            result = '';
            break;
        case Infinity:
            result = '&infin;';
            break;
        case -Infinity:
            result = '- &infin;';
            break;
        case +Infinity:
            result = '+ &infin;';
            break;
        case NaN:
            result = 'Digite números válidos';
        default:
            result;
        break;
    }
    
    return result;
}

export async function calcEqLinear () {
    try {
        let a = await document.getElementById('input-a').value;
        let b = await document.getElementById('input-b').value;
        let result = document.getElementById('result');

        if (a && b !== '') {
            const x = -b / a;
            const resolved = errorHandler(x);
            return result.innerHTML = `x = ${resolved}`;
        }
    } catch (err) {
        return console.log(err);
    }
}

export async function calcEqQuadratica () {
    try {
        let a = await document.getElementById('input-a2').value;
        let b = await document.getElementById('input-b2').value;
        let c = await document.getElementById('input-c2').value;
        let result = document.getElementById('result-2');
        console.log('swdefsdf')

        if (a && b && c !== '') {
            console.log(a, b, c)
            const delta = Math.pow(b, 2) - 4 * a * c;

            if (delta < 0) {
                return result.innerHTML = `Não existem raizes reais para esta equação: ${a}x^2 + ${b}x + ${c} = 0
                <br>&bigtriangleup; = ${delta}
                `;
            }
            else if (delta == 0) {
                return result.innerHTML = `Existem raizes iguais. <br>Solução: ${delta}`;
            } 
            else if (delta >= 0) {
                const x1 = (- b + Math.sqrt(delta)) / 2 * a;
                const x2 = (- b - Math.sqrt(delta)) / 2 * a;
                const resolveX1 = errorHandler(x1);
                const resolveX2 = errorHandler(x2);

                return result.innerHTML = `
                Existem duas raizes reais diferentes. <br>
                Solução: Raíz 1: ${resolveX1}<br>Raíz 2: ${resolveX2}
                `;
            }
        }
        
    } catch (err) {
        return console.log(err);
    }
}