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

// Crie uma função que receba como parâmetro uma quantidade indefinida de variáveis inteiras(números inteiros).
// A função deve retornar a soma de todos os parâmetros(...).
// Após executada a função, o resultado deve ser exibido no console.

const somaTudo = (...inteiros) => inteiros.reduce((acumulador, elemento) => acumulador + elemento, 0);

// Um palindrome(palíndromo), segundo o dicionário Houaiss,
// "diz-se de frase ou palavra que se pode ler, indiferentemente,
// da esquerda para direita ou vice - versa", como por exemplo: osso, Ana, radar.
// Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.
// Implemente uma função em JavaScript que receba uma string como parâmetro
// e retorne se determinada palavra é um palindromo ou não.

const ehPalindromo = (palavra) => [...palavra].reverse().join('') === palavra;


// Faça uma função que receba este objeto por parâmetro, desestruture - 
// o no começo da função(utilizando destruct) criando três variáveis(nome, idade, profissao).
// Faça ainda com que a função retorne uma string com a seguinte mensagem:
// "Esta é Ada, tem 36 anos e é matemática."
// Concatene as variáveis criadas com destruct para formar a mensagem.
// Chame a função passando o objeto por parâmetro e exiba o retorno no console.
// Extra: Faça o destruct acontecer diretamente na linha de declaração dos parâmetros da função.Por fim faça com uma arrow function.
const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
};

const desestruturaObjeto = ({ nome, idade, profissao }) => `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;

// Escreva uma função arrow e armazene -
// a em uma variável de nome uneDobraRetorna,
// que aceita um array de números e qualquer outra quantidade de números como parâmetro.
// A função deve retornar um novo vetor
// que começa com o vetor inicial concatenado com os outros parâmetros extra dobrados de valor.

const uneDobraRetorna = (arr, ...resto) => [...arr, ...resto.map((elemento) => elemento * 2)];
