/*
●Template String
São strings que permitem expressões
embutidas.
○ Template strings são envolvidas por
(acentos graves) (` `) em vez de
aspas simples ou duplas. Template
strings podem possuir placeholders.
Estes são indicados por um cifrão
seguido de chaves (${expression})
-Exemplo de template string:
let nome = “Kelvin”
console.log(`Seu nome
é ${nome}`);

●Estruturas de Controle
Operador Nome Exemplo
== Igualdade 5 == 5 ou 5 == ”5”
!= Diferença/Não-igualdade 30 != 0
!== Diferença estrita/Não-igualdade estrita (não é o mesmo?) 'Chris' !== 'Ch' + 'ris'
=== Igualdade estrita (é estritamente o mesmo?) 5 === 2 + 4
< Menor que 10 < 6
> Maior que 10 > 20
<= Menor ou igual que 10 <= 20
>= Maior ou igual que 20 >= 10
&& E 3 && 4 < 5
|| Ou 5 || 7 < 6

●IF...ELSE
-Exemplo 1:

if (condição) {
código
} else {
código
}

-Exemplo 2:

if (condição) {
código
} else if (condição) {
código
}

-Exemplo 3:

if (condição) {
código
if (condição) {
código

} } else {
código
}

●SWITCH ... CASE:

-Exemplo 1:

let variável = valor;
switch (variável) {
case:
instrução
break;
case:
instrução
break;
default:
instrução
}

-Exemplo 2:

let podio = 1;
switch (podio) {
case 1:
console.log(`Você ficou em ${podio} lugar`);
break;
case 2:
console.log(`Você ficou em ${podio} lugar`);
break;
case 3:
console.log(`Você ficou em ${podio} lugar`);
break;
default:
console.log(`Não subiu no pódio`);
}

●EXERCÍCIOS SWITCH...CASE:
1 - Faça um código com switch/case, e
para cada caso, diga se o usuário tem
permissão comum, gerente, diretor.
let cargo=gerente;
switch(cargo){
    case 'gerente':
        console.log("Gerente")
        break;
    case 'comum':
        console.log("Comum")
        break;
    case 'diretor':
        console.log("Diretor")    
}

2 - Faça uma calculadora que realize as
operações de soma, subtração, adição, e
divisão.

Utilize o switch/case para fazer que os
usuários escolha a opção individual de
cada operação
let operacao = 4;
let n1 = 10, n2 = 5;
switch (operacao) {
    case 1:
        console.log(n1 + n2)
        break;
    case 2:
        console.log(n1 - n2)
        break;
    case 3:
        console.log(n1 * n2)
        break;
    case 4:
        console.log(n1 / n2)
        break;
    default:
        console.log("Operador inválido")
        break;
}  

●EXERCÍCIOS IF...ELSE:
1 - Escreva um programa para ler 2 valores (considere que
não serão informados valores iguais) e escrever o maior deles.
let n1=2;
let n2=3;
if (n1>n2){
    console.log(`O maior número é o ${n1}`)
}else{
    console.log(`O maior número é o ${n2}`)
}

2 - Escreva um programa para ler o ano de nascimento de
uma pessoa e escrever uma mensagem que diga se ela poderá ou
não votar este ano (não é necessário considerar o mês em que
ela nasceu).
let anodenascimento=2002;
let anoatual=2023;
if(anoatual - anodenascimento >= 18){
    console.log("Pode votar")
}else{
    console.log("Não pode votar")
}

3 - Escreva um programa que verifique avalidade de uma senha
fornecida pelo usuário. A senha válida é o número 1234.
- Devem ser impressas as seguintes mensagens:
- ACESSO PERMITIDO caso a senha seja válida.
- ACESSO NEGADO caso a senha não seja válida.
let senha=1234;
if(senha != 1234){
    console.log("Acesso negado!")
}else{
    console.log("Acesso permitido")
}

4 - Calcule o Índice de massa corporal
kg / (altura * altura)
- Mostre o índice na tela.
- E diga ao usuário o que o índice dele corresponde.
MENOR QUE 18.5 = MAGREZA
ENTRE 18.5 E 24.9 = NORMAL
ENTRE 25.0 E 29.9 = SOBREPESO
ENTRE 30.0 E 39.9 = OBESIDADE
MAIOR QUE 40.0 = OBESIDADE GRAVE
let peso = 72;
let altura = 1.86;
let indice = peso / (altura * altura);
if (indice < 18.5) {
    console.log("Magreza")
}
if (indice >= 18.5 && indice <= 24.9) {
    console.log("Normal")
}
if (indice >= 25.0 && indice <= 29.9) {
    console.log("Sobrepeso")
}
if (indice >= 30.0 && indice <= 29.9) {
    console.log("Obesidade")
}
if (indice > 40) {
    console.log("Obesidade grave")
}

5 - Escreva um programa para ler 3 valores inteiros
(considere que não serão lidos valores iguais) e escrevê-los
em ordem crescente.
let n1 = 3, n2 = 2, n3 = 1;

if (n1 > n2 && n2 > n3) {
    console.log(n1, n2, n3)
}
if (n1 > n3 && n3 > n2) {
    console.log(n1, n3, n2)
}
if (n2 > n1 && n1 > n3) {
    console.log(n2, n1, n3)
}
if (n2 > n3 && n3 > n1) {
    console.log(n2, n3, n1)
}
if (n3 > n1 && n1 > n2) {
    console.log(n3, n1, n2)
}
if (n3 > n2 && n2 > n1) {
    console.log(n3, n2, n1)
}
*/