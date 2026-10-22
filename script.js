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

for( let contador = 0; contador <= 67667; contador++ ){
    console.log(contador)
}

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


let NUMERO1 = 