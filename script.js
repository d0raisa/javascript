const motorista = {
    idade: 18,
    temCNH: true,
    temCarro: false
}

console.log(motorista)

motorista.idade += 1;
motorista.temCNH = false;
motorista.temCarro = true;

console.log(motorista)


// 01- DADOS DE UM PRODUTO
// crie um obejeto chamado produto com as propriedades nome, marca, preço disponivel. Exiba separadamente o nome e o preço do produto
// no console. 
// obejto / laços de repetição / listas / funções. 


const produto = {
nome: "matizador",
marca: "salon line",
preço: 31,
disponivel: true

}
produto.nome
console.log(produto.nome)  



//laço de repetição

// for( let contador = 0; contador <= 67667; contador++ ){
//     console.log(contador)
// }

// 02 - Tabuada
// Receba um número inteiro em uma variável e exiba sua tabuada de multiplicação de 1 a 10.

let numero = 5

for(let contador = 1; contador <= 10; contador++){
console.log(`${contador} x ${numero} = ${contador * numero}`)
}


///-----------------------//------------------------//

let contador = 1;
let numerowhile = 5;


while(contador<= 10){
console.log(contador * numerowhile)
contador++;
}



//------------------//----------------//

// 03- CONTAGEM REGRESSIVA
// Exiba os numeros pares de 20 até 0, em ordem decrescente.

let number = 0
// while = enquanto oque está dentro do () vai aparecer/acontecer tals coisa
while(number > 0){
    console.log(`while ${number}`);
    number -= 2
}

//---------/------------//


let number2 = 0

// do = faça 

do{
console.log(`while ${number2}`)
number2 -= 2

}while(number > 0 );



// ----------atividade nova-----------//

// 04- CONTAGEM REGRESSIVA
// exiba os numeros inteiros de 10 até 1 e, em seguida, a mensagem "Fim da contagem"


let number3 = 10;

do {
    console.log(`while ${number3}`)
    number3--
} while (number3 >= 1)

console.log("Fim da contagem");



// --------listas----------//

const frutas = ["maça", "uva", "banana", "kiwi", "acerola"]

frutas[0]= "Pêra"

console.log(frutas)

console.log(frutas[0]);
console.log(frutas[2]);

console.log(frutas.length); // mostra tudo

frutas.push("manga","mexerica"); //adiciona mais itens

console.log(frutas);

frutas.pop() //tira o ultimo da lista

console.log(frutas)

frutas.sort() // deixa a lista em orde alfabetica
console.log(frutas)


//-----funções---------//

function somar(numero1, numero2){ // você pode criar a função e colocar tudo dentro dela como nos fizemos com as frutas
return numero1 + numero2;
}

const soma = somar(1,1);
console.log(soma)

somar(6,7)

function dividir(numero1, numero2){
console.log(`${numero1} / ${numero2} = ${numero1/numero2}`)
}

dividir(100,2)


//-----------lições---------------//

// 01- adicionando elementos
// Crie uma lista chamada jogos com 3 jogos. adicione mais 2 jogos ao final da lista e exiba o resultado no console 

const jogos = ["LOL", "Minecraft", "genshin impact"]
console.log(jogos)
frutas.push("roblox", "gacha life")
console.log(jogos.length); // mostra o tamanho/quantos tem 

//02- removendo o ultimo da lsita
// Crie uma lista chamada materiais com 5 materiais escolares. Remova o ultimo elemento e exiba a lista atializada. Em seguida, exiba quantos elementos restaram

const lista = ["caderno","borracha","caneta rosa","apontador","estojo"]
console.log(lista)
lista.pop()  
console.log(lista)
console.log(lista.length);

//03- saudação personalizada
// crie uma função chamada saudar que receba o nome de uma 

































// console.log(frutas);

// frutas.pop() //tira o ultimo da lista

// console.log(frutas)

// frutas.sort() // deixa a lista em orde alfabetica
// console.log(frutas)