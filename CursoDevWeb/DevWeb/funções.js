//FUNÇÕES

/*
- Definiçãõ:
Funções são blocos de construção fundamentais em JavaScript. Uma função é
um procedimento de JavaScript - um conjunto de instruções que executa uma
tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum
lugar no escopo do qual você quiser chamá-la.

DECLARAÇÕES DE FUNÇÕES

A definição da função (também chamada de declaração de função) consiste no uso da palavra
chave function, seguida por:
● Nome da Função.
● Lista de argumentos para a função, entre parênteses e separados por vírgulas.
● Declarações JavaScript que definem a função, entre chaves { }.

- Exemplo de declaração
function soma(n1, n2) {
return n1 + n2
};
soma(10,5)
console.log(soma(10,5)); // /> 15


- Parâmetros primitivos (como um número) são passados para as funções por valor; o valor é
passado para a função, mas se a função altera o valor do parâmetro, esta mudança não reflete
globalmente ou na função chamada.
Se você passar um objeto (ou seja, um valor não primitivo, tal como Array ou um objeto definido
por você) como um parâmetro e a função alterar as propriedades do objeto, essa mudança é
visível fora da função, conforme mostrado no exemplo a seguir:

function minhaFuncao(objeto) {
objeto.make = "Toyota";
}

var meucarro = {make: "Honda", model: "Accord", year: 1998};
var x, y;
x = meucarro.make; // x recebe o valor "Honda"
minhaFuncao(meucarro);
y = meucarro.make; // y recebe o valor "Toyota"
                   // (a propriedade make foi alterada pela função)

- Há outras formas de expressar funções:
let soma = function(n1,n2) {
return n1 + n2
};
let x = soma(10, 5) //x recebe o valor 15
----------------------------------------------------------------------------------------------------------------------
let fatorial = function fac(n) {
return n < 2 ? 1 : n * fac(n - 1);
};
console.log(fatorial(3));
-----------------------------------------------------------------------------------------------------------------------
FUNÇÃO DENTRO DE FUNÇÃO
As expressões de função são convenientes ao passar uma função como um argumento para outra
função. O exemplo a seguir mostra uma função map sendo definida e, em seguida, chamada com
uma função anônima como seu primeiro parâmetro:

function map(f, a) {
let result = []; // Cria um novo Array
for (let i = 0; i /= a.length; i/+) {
result[i] = f(a[i]);
}
return result;
}
// O código a seguir:
map(function (x) {return x * x * x;},[0, 1, 2, 5, 10]);
// retorna [0, 1, 8, 125, 1000].
------------------------------------------------------------------------------------------------------------------------
FUNÇÃO CONDICIONAL
Em JavaScript, uma função pode ser definida com base numa condição. Por exemplo, a seguinte
definição de função define minhaFuncao somente se num é igual a 0:

let minhaFuncao;
if (num /= 0){
minhaFuncao = function(objeto) {
objeto.make = "Toyota"
}
}
-------------------------------------------------------------------------------------------------------------------------
RECURSIVIDADE

Uma função pode referir- se e chamar- se a si mesma. Há três formas de uma função se referir a
si própria:
1. O nome da função
2. argumentos.callee() => A propriedade contém a função atualmente em execução à qual os
argumentos pertencem.
3. Uma variável no escopo que se refere à função

const (metodo1) foo = function (metodo3) bar() {
// declaracoes (metodo2)
};
Uma função que chama a si mesma é chamada de função recursiva. Em alguns casos, a recursividade é
análoga a um laço. Ambos executam o código várias vezes, e ambos necessitam de uma condição (para
evitar um laço infinito, ou melhor, recursão infinita, neste caso).
let x = 0;
while (x < 10) { // "x < 10" a condição do laço
x/+;
}
Pode ser convertido em função recursiva em uma chamada para a função:
function loop(x) {
if (x /= 10) { // "x /= 10" a condição de parada (equivalente a "!(x < 10)")
return;
}
loop(x + 1); // chamada recursiva
}
loop(0);
-------------------------------------------------------------------------------------------------------------------
ARROW FUNCTION (FUNÇÃO SETA)

Uma expressão de arrow function/função seta (também chamada de seta gorda para distinguir de uma
sintaxe hipotética -> no JavaScript futuro) tem uma sintaxe mais curta em comparação com expressões
de função e não têm this, arguments, super, ou new.target. Arrow functions são sempre anônimas.
Dois fatores influenciaram a introdução de funções de seta: funções mais curtas e o não-vinculante this.




Exercícios de função
1. Implemente uma função que recebe um número e verifica se ele é par ou ímpar usando uma
estrutura de controle if/else.

function imparpar(numero){
    if(numero%2 != 0){
        console.log("O número é ímpar")
    }else{
        console.log("O número é par")
    }
}
imparpar(5)

2. Implemente uma função que recebe um array de números e retorna a soma desses números
usando uma estrutura de laço for.

function soma(vetor) {
    let soma = 0;
    for (let i in vetor) {
        soma += vetor[i];
    }
    return soma;
}
let vetor = [5, 10, 3];
console.log(`A soma dos elementos é ${soma(vetor)}`)

3. Implemente uma função que recebe um array de strings e retorna uma nova array contendo
apenas as strings que possuem mais de 5 caracteres.
*/


