/*
//FUNÇÃO ASSÍNCRONA E AWAIT

- Função assíncrona
A função assíncrona no JavaScript é uma função que permite que outras
partes do código sejam executadas, enquanto outra operação está em
andamento.
Funções assíncronas são aquelas que acessam ou buscam algum tipo de
recurso em um dispositivo externo, como por exemplo um banco de
dados, nesse tipo de função precisamos que o nosso código espere que a
resposta esteja disponível antes de executar a ação seguinte.

- Função Assíncrona != Função Síncrona
A principal diferença entre uma função síncrona e uma função
assíncrona é a forma como elas lidam com a execução de tarefas que
podem levar algum tempo para serem concluídas.
Uma função síncrona é executada de forma sequencial, uma linha de
código após a outra, e o controle não é devolvido para a próxima linha de
código até que a linha atual seja concluída. Isso significa que se uma
função síncrona executar uma tarefa que leva muito tempo, a execução
do programa inteiro ficará presa até que essa tarefa seja concluída.
A função assíncrona é executada de forma não sequencial.
● FUNÇÃO SÍNCRONA

function Soma(x,y){
return x + y;
}
console.log(Soma(2,4)); // 6

- O exemplo acima é de uma função síncrona, ou seja,
que as etapas estão sendo executadas
sequencialmente.

● Sintaxe - Função Assíncrona

- Declaração com a palavra chave “async”, antes da função,
ela é usada para marcar que aquela função é assíncrona.
- Palavra chave “await” para esperar que a operação
assíncrona seja concluída, para seguir para o próximo
passo do código. O “await” só pode ser usado dentro de
uma função “async”.

async function NomeDaFuncao(){
await acao;
}

● Função assíncrona

- O exemplo a seguir é de
uma função assíncrona,
nesse tipo de função
precisamos que o nosso
código espere que a
resposta esteja disponível
antes de executar a ação
seguinte.

function calcula(a, b) {
return (a + b);
}

async function display() {
console.log("INICIO");
const result = await calcula(2, 3);
console.log(result);
console.log("FIM")
}

display()

●PROMISE
- Uma promise é um
objeto JavaScript,
que representa um
valor que pode estar
disponível agora, no
futuro, ou nunca.

- Exemplo de função assíncrona com promise:
function PrimeiraFuncao(){
return new Promise((resolve)/>{
setTimeout(()/>{
console.log('Espera');
resolve();
}, 2000)
})
}
async function SegundaFuncao(){
console.log('Inicio');
await PrimeiraFuncao();
console.log('FIM')
}
SegundaFuncao();
----------------------------------------------------------------------------------------------------------------------------
● Função assíncrona com requisição de API
- Uma API é uma interface que faz conexão com aplicativos ou serviços para realizar determinada tarefa
ou obter informações.

async function getUser(userId) {
let response = await fetch(`https://api.com/api/user/${userId}`);
let userData = await response.json();
return userData.name; //vai estar retornando o nome
}
getUser(1);



*/