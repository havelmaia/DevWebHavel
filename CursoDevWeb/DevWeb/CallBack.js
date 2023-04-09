/*
//CALLBACK

- O que é uma CallBack?
Callback é uma função que é passada como argumento para outra
função, e é executada após a conclusão de uma operação assíncrona, ou
evento específico.

- Qual sua utilidade?
São extremamente utilizadas para lidar com tarefas assíncronas, como requisições de 
rede, animações ou qualquer outra operação que pode demorar para ser concluída.


CALLBACK - Callback Síncrona != Assíncrona
- A callback síncrona ela vai retornar um resultado direto, que não
depende de outro processo ou serviço.
- A callback assíncrona é útil quando dependemos de um resultado para
executar outra função, como esperar uma requisição ser concluída.

Exemplo de CallBack síncrona:

function principal(argumento){
console.log(`O resultado é de ${argumento}`);
}
function callback(a,b,callback){
let op = a + b;
callback(op);
}
callback(5,6,principal);
Exemplo Callback Síncrona:



*/ 