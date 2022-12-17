// Em um arquivo app.js incluído em index.html:
// Implemente uma função "procuraMinMax" que receba como parâmetro um array(numérico)
// e identifique o menor e o maior valor do mesmo.
// Imprima no console estes valores ou "Não é possível encontrar" quando não for possível.
const procuraMinMax = (arr) => {
    if (Array.isArray(arr) && arr.length > 0) {
        const minimo = Math.min(...arr) ? Math.min(...arr) : "Não é possível encontrar";
        const maximo = Math.max(...arr) ? Math.max(...arr) : "Não é possível encontrar";
        console.log(`Mínimo: ${minimo} e Máximo: ${maximo}`);
    } else {
        console.log("Não é possível encontrar");
    }
}


