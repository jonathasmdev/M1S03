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

// No documento js faça uma arrow function para retornar uma mensagem(string) de "Olá, Mundo!".
// Armazene esta arrow function em uma constante(const) de nome mensagemOla.
// Chame a função mensagemOla e exiba o retorno desta função no console.
// Ajuste a função mensagemOla para que receba um parâmetro nome e retorne a mensagem "Olá, [nome]!".

const mensagemOla = (nome) => `Olá, ${nome}!`;

// Em app.js desenvolva uma função que receba dois arrays
// e realize a concatenação entre eles utilizando o operador Spread.
// Apresente o resultado no console.log(novoArray).

const concatenaArrays = (arr1, arr2) => {
    const novoArray = [...arr1, ...arr2];
    console.log(novoArray);
}

// Para exercitarmos spread com objetos:
// Escreva uma função de nome mesclaObjetos,
// que aceita dois objetos como parâmetro
// e retorna um novo objeto que contem todos os pares chave - valor do primeiro e do segundo objetos.

const mesclaObjetos = (obj1, obj2) => ({ ...obj1, ...obj2 });

