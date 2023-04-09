/*● Como declarar um array?
- let frutas = [“Morango”, "Maçã"];
- let frutas = Array()
- let frutas = [];

Métodos do array
- Para adicionar um item no final. push()
  frutas.push(“Goiaba”);

- Para remover um item no final do array. pop()
  frutas.pop(“Goiaba”);

- Para adicionar um item no começo do array. unshift()
  frutas.unshift(“Goiaba”);

- Para remover um item no começo do array. shift()
  frutas.shift(“Goiaba”);

-Procurar um índice dentro do array. indexOf()
  let index = frutas.indexOf(“Morango”);

- Remover item pela posição. splice(pos, index)
  let n = 1, pos = 2;
  let remover = frutas.splice(pos, n);

- Como copiar um array e suas partes. slice()
  let copia = frutas.slice();
  let copia_indice_zero = frutas.slice()[0];

- Como ver o tamanho do array. length()
  let tamanho = frutas.length();

- Como ver se algo está incluído. includes()
  let existe = frutas.includes(“Morango”);

  MÉTODOS DO ARRAY - Utilizando funções.
- forEach()
  Permite executar uma ação para cada item de um array.

- filter()
  O método cria um novo array filtrando as informações do array selecionado.

- findIndex()
  O método retorna o Index de determinado item, através de uma função.

  ●OBJETO
-O que é um objeto:
  Um objeto é uma entidade independente, com propriedades e tipos.
Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com
propriedades. Uma xícara tem uma cor, uma forma, peso, um material de
composição.
  Um objeto em JavaScript tem propriedades associadas a ele. Uma
propriedade de um objeto pode ser explicada como uma variável que é
ligada ao objeto. Propriedades de objetos são basicamente as mesmas
que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a
objetos.Um objeto em JavaScript tem propriedades associadas a ele. Uma
propriedade de um objeto pode ser explicada como uma variável que é
ligada ao objeto.

Vamos utilizar o seguinte exemplo de um objeto Javascript.

const hero = {
nome: 'Batman',
cidade: 'Gotham'
};

- As “keys” de hero são [‘nome’, ‘cidade’].
- Os “values” são [‘Batman’, ‘Gothan’].
- As “entries” são [[‘nome’,‘Batman’], [‘cidade’, ‘Gothan’]]
Object.keys() retorna as keys. // /> ['nome', 'cidade']
Object.values() retorna os valores. // /> ['Batman', 'Gotham']
Object.entries() retorna as entradas. // /> `[['name', 'Batman'], ['city', 'Gotham']]`

-Sintaxe:
let pessoa = {
nome: 'Heloysa',
idade: 21,
pais: "Brasil"
}
console.log(pessoa)
console.log(pessoa.nome)
---------------------------------
let pessoa = {
nome: "Heloysa",
idade: 21,
linguaguens_de_programacao: ["Python", "C",
"Typescript", “Javascript”],
caracteristicas: {
olhos: "Castanho",
cabelo: "Castanho Escuro"
}
}
console.log(pessoa.linguaguens_de_programacao[1]);
console.log(pessoa.caracteristicas.cabelo);
--------------------------------------------------
let pessoa = {
nome: "Heloysa",
idade: 21,
pais: "Brasil",
caracteristicas : {
olhos: "castanho",
cabelo: "liso"
}
}
console.log(pessoa);
pessoa.nome = 'Kelvin';
pessoa.características.cabelo = 'ondulado'
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.caracteristicas.cabelo)

//nome: 'Heloysa', idade: 21, pais: 'Brasil',
caracteristicas: {...}}

// {nome: 'Kelvin', idade: 21, pais: 'Brasil',
caracteristicas: {...}}
// Kelvin

// Ondulado

-----------------------------------------------------
Exercício Array:

- Faça um array com 3 valores de média, tire a média desses três
valores e guarde em uma variável, no final mostre a variável com a
média.

let media;
let contador=0;
let vetor=[10, 10, 10];
for(let i=0; i<vetor.length; i++){
 contador = contador + vetor[i]
}
media=contador/vetor.length;
console.log(`A media e ${media}`);


Exercício Objeto
- Faça um objeto que contenha um nome de um filme, a nota que
você dá pra ele 0-10, gênero do filme, ao final faça um console
personalizado, mostrando o filme, a nota, e o gênero do filme.

let filmes={
  nome: "vingadores",
  nota: 10,
  gênero: "Ficção científica"
}
console.log(`O nome do file é ${filmes.nome}`)
console.log(`A nota do filme é ${filmes.nota}`)
console.log(`O gênero do filme é ${filmes.gênero}`)


*/
