/*
//VARIÁVEIS
● Uma variável pode pertencer a um dos seguintes escopos:
○ Escopo global: o escopo padrão para todos os códigos em
execução no modo de script.
○ Escopo da função: O escopo criado com uma função.
● As variáveis declaradas com let ou const podem pertencer a um
escopo adicional:
○ Escopo do bloco: O escopo criado com um par de chaves (um
bloco).

●TIPOS DE VARIÁVEIS
-var 
Declara uma variável,
opcionalmente, inicializando-a
com um valor.

-let
Declara uma variável local de
escopo do bloco, opcionalmente,
inicializando-a com um valor.
Podem ter seu valor atualizado

-const
Declara uma constante de
escopo de bloco, apenas
de leitura.
Não podem ter seu valor
atualizado

●TIPOS DE VARIÁVEIS
-BOOLEAN Um tipo de dado lógico que pode ter apenas um de dois valores possíveis: verdadeiro ou falso.

-STRING Em qualquer linguagem de programação, uma string é uma sequência de caracteres usados para representar texto.

-NUMBER É um tipo de dado numérico

-INTEGER São números inteiros, ex. 10, 400 ou -5.

-FLOAT Tem pontos e casas decimais, por exemplo 12.5 e 56.7786543.

-NULL O valor null é um literal em JavaScript que representa um valor nulo ou "vazio".

-UNDEFINED Uma variável que não recebeu um valor tem o valor indefinido.

/*Operadores Lógicos
+ Adição 6 + 9
- Subtração 20 - 15
* Multiplicação 3 * 7
/ Divisão 10 / 5
% Resto da divisão 10%2
** Potência/Expoente 4**2*

- Faça um algoritmo que imprima seu nome, sua idade, e seu estado civil,
colocando esse último item como um tipo booleano ( true / false ).
let nome  =  "Havel" ;  //digite seu nome
let idade  =  20 ;  // digita sua idade
let  estadocivil  =  true ;  //utiliza true p/ casado ou namorando e false p/ solteiro
console.log (nome , idade, estadocivil ) ;  //console.log para imprimir as variáveis.
console.log (typeof nome , typeof idade, typeof estadocivil ) ;  //console.log para imprimir os tipos de dados de cada variável

- Faça um algoritmo que leia quatro números informados e que depois mostre
no console a média desses valores.
let n1=2, n2=2, n3=2, n4=2;
let media=(n1+n2+n3+n4)/4;
console.log(media)

- Faça a tabuada do valor 5.
let num=5;
for(i=0; i<11; i++)
console.log(i*num)

- Faça um algoritmo que leia um número e mostre seu antecessor e seu
sucessor.
let num=5;
console.log("O antecessor é", num-1)
console.log("O sucessor é", num+1)

- Faça um algoritmo que leia um valor, e mostre esse valor com 5% de
desconto.
let num=100;
console.log("O valor com 5% de desconto é ", num*0.95)
*/




