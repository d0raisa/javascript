//console.log("") mostra uma informaçãõ na tela "12"
console.log("Olá, mundo!");
console.log("estou morrendo de sono mds quero minha casa");
console.log(6 + "7");

console.log(typeof "Ola, mundo"); //string
console.log(typeof 13);//number
console.log(typeof 10.5);//nunber
console.log(typeof true);//boolean
console.log(typeof false);//boolean

//variavel
// const não pode ter o valor alterado durante o programa

const nome = "isadora";
console.log(nome);

//let pode ter o seu valor alterado durante o prograama

let idade = 17;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + " anos");

idade = 18;
console.log(idade);


console.log(`Olá ${nome}, que tem ${idade} anos.`);

// nome e peso = atividade 1

let nome1 = "Joyce"
console.log(nome)

let peso = 59
console.log(peso)

console.log("Olá " + nome1 + ",você esta pesando    " + peso)



nome1 = "Joana"
console.log(nome)

peso = 63
console.log(peso)


console.log(`E a ${nome1} ,esta pesando ${peso}`)



// metodo string
const texto = "JavaScrIpt"

console.log(texto.length) // mostra quantidade de letras tem no texto


console.log(texto.toUpperCase()) //usamos quando vamos converter TODO o texto/palavra para letra maiuscula 


console.log(texto.toLowerCase()) // usamos quando  vamos alterar TODO o  texto minusculo


const nome_completo = "Isadora Heloísa Nogueira Diogo"
console.log(nome_completo.includes("Diogo")) // true (aparece quando algo que esta escrito é verdadeiro e está no texto)

console.log(10 > 5) //true
console.log(10 < 5) // aparece (false) quando é falso né dããã🤦‍♀️
console.log(10 >= 10) // true 
console.log(10 <= 5) //false
console.log("10" == 10) // Converte os tipos antes de comparar (compara apenas o valor) 
console.log("10" === 10) // false Não converte os tipos (compara o valor(numero) e o tipo(texto)).
console.log(10 !== 5) // true 
// > maior / < menor 

const idadePessoa = 17
console.log(idadePessoa >= 18) // false  pessoa vota (não entendi a explicação )🤦‍♀️🤦‍♀️🤦‍♀️
console.log(idadePessoa >= 16) // true  tirar a carta (não entendi a explicação )🤦‍♀️🤦‍♀️🤦‍♀️

//atividade 2 //

console.log(nome_completo == "Izadora Heloísa Nogueira Diogo") // false (por causa do z)
console.log(nome_completo == "Isadora Heloísa Nogueira Diogo") // verdadeiro porque é meu nome escrito corretamente


//atividade/lguma coisa 😼😼// 


// 1  coletamos a idade da pessoa 
let pesssoaIdade = 19;
// 2  verificar se a idade é maior ou igual a 18
if (pesssoaIdade >= 18) {
    // 3  se maior ou igual a 18 então ela é maior de idade
console.log("Já Pode Ser Preso HAHAHAHAHAHA 🚓🚓🚓")
}
else{
    // 4  senão, então ela é manor de idade
    console.log("Não vai para balada!🤣🤣🤣")

}
// tradução: if = se (dentro do parentese é sempre uma "pergunta" de sim ou não) se a resposta que esta dentro do parentese for sim, ele executa oque esta dentro do paragrafo. Mas se a resposta for não, ele não mostra.//


//atividade2/lguma coisa 😼// 

//coletamos a idade da pessoa
let idadeVotacao = 16;
//verificar se a idade é maior que 70
if(idadeVotacao > 70){
    console.log("Você não é obrigado a votar 👌💕!")
}else if(idadeVotacao >= 18){
    //senão, se a idade for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente😤😤")
} else if(idadeVotacao >= 16){
    //senão, se a idade da pessoa for maior ou igual a 16
    console.log("Você não é obrigatorio a votar, mas caso queira pode 😼✌️!")
} else{
    // senão for nenhuma das alternativas anteriores 
    console.log("Você NÃO PODE votar!🤬🤬🤬")
} 

 

//ATIVIDADE 1 ≡(▔﹏▔)≡


// 01 — Aprovação escolar
// Receba a média final de um aluno. Se a média for maior ou igual a 7, informe "Aprovado". Caso contrário, informe "Reprovado".

let mediaFinal = 7;
if(mediaFinal >= 7){
    console.log("APROVADO!👌")
}else if(mediaFinal < 7){
    console.log("REPROVADO!")
}


// 02 — Comparação de dois números
// Receba dois números e informe qual deles é o maior. Se os dois forem iguais, informe que houve empate 
let numero1 = 12;
let numero2 = 12;

if (numero1 > numero2){
    console.log("o maior numero é o primeiro")

} else if (numero2 > numero1){
    console.log ("o maior numero é o segundo")
} else {
    console.log ("numeros iguais")
}







// 03 — Verificação de senha
// Receba uma senha (sennai321) e verifique se ela é igual a senai123. Se for igual, exiba "Acesso autorizado". Caso contrário, exiba "Senha incorreta"

let senhaSENAI = "senai123"
if(senhaSENAI == "senai123"){
    console.log("Acesso autorizado")
}else if(senhaSENAI = sennai321){
    console.log("Senha incorreta")
}




// 04 — Classificação de temperatura
// Receba uma temperatura em graus Celsius e classifique-a:

// Abaixo de 18 °C: "Frio".
// De 18 °C até 27 °C: "Agradável".
// Acima de 27 °C: "Quente".,

 let Graus = 30
 if ( Graus < 18) {
    console.log("frio")}
else if (Graus<= 27){
    console.log("agradavel")
} else if(Graus > 27) {
    console.log("quente")
}



// 05 — Classificação de nota
// Receba uma nota de 0 a 10 e apresente:

// A partir de 9: "Excelente".
// A partir de 7 e abaixo de 9: "Bom".
// A partir de 5 e abaixo de 7: "Regular".
// Abaixo de 5: "Insuficiente".

let notas =  10
if( notas >= 9){console.log("exelente")}
else if(notas >= 7){ console.log("Bom")}
else if (notas < 5){console.log("insuficiente")}


// 06 — Dia da semana
// Receba um número inteiro de 1 a 7 e exiba o dia da semana correspondente. Considere 1 como domingo e 7 como sábado. Para qualquer outro número, exiba "Dia inválido"


const data = 7

if (data ==1){
    console.log("segunda")
    
}else if(data==2){
    console.log("terça")
}else if(data==3){
    console.log("quarta")
}else if(data==4){
    console.log("quinta")
}else if(data==5){
    console.log("sexta")
}else if(data==6){
    console.log("sábado")
}else if(data==7){
    console.log("domingo")
}

// ------------------------------

let idadeDigigir = 19;
let temCNH = true;
let temCarro = false;

if(idadeDigigir >= 18 && temCNH == true && temCarro == true ){
    console.log("Você pode dirigir!!! 😼✌️")
} else{
    console.log("Você não pode digirir !!! 🤣")
}


// -------------------------------

let ehProfessor = false;
let ehAluno = false;

if(ehProfessor == true || ehAluno == true){
console.log("Você tem direito a meia-entrada")
}else{
    console.log("Você não tem direito a meia-entrada")

}

// && = e 
//  || = ou

// ----------------atividae nova--------------- //


// 01 — Número dentro do intervalo
// Receba um número e informe se ele está entre 10 e 50, inclusive. Caso contrário, informe que está fora do intervalo.


let NUMERO3 = 67

if (NUMERO3 > 10 && NUMERO3 < 50) {
    console.log("O número está entre 10 e 50.");
} else {
    console.log("O número está fora do intervalo.");
}



// 02 — Elegibilidade para estágio
// Uma oportunidade de estágio é destinada a candidatos com idade entre 16 e 24 anos, inclusive. Receba a idade e informe se o candidato atende ao requisito.



let canditato1 = 23;

if(canditato1 >16  && canditato1 < 24){
console.log("Você vai ser chamado")
}else{
    console.log("Você não vai ser chamado")
}


// 03 — Frete grátis
// Uma loja oferece frete grátis para clientes que realizam compras de R$ 200 ou mais ou que são assinantes. Receba o valor da compra e uma variável booleana indicando se o cliente é assinante. Informe se ele tem direito ao frete grátis.



let valorCompra = 250;
let assinante = false;

if (valorCompra >= 200 || assinante) {
    console.log("Tem direito ao frete grátis.");
} else {
    console.log("Não tem direito ao frete grátis.");
}




// 04 — Dia de descanso
// Receba o nome de um dia da semana. Se for sábado ou domingo, exiba "Fim de semana". Caso contrário, exiba "Dia útil"

let week= "quarta-feira"
 
if(week == "sabado" || week == "domingo"){
    console.log("fim de semana")
} else{
    console.log("dia ultil")
}


// 05 — Promoção especial

// Uma loja aplica 15% de desconto se o cliente:
// Realizar uma compra de R$ 150 ou mais e for assinante; ou
// Possuir um cupom promocional válido, independentemente de ser assinante.
// Receba o valor da compra e duas variáveis booleanas (assinante e cupom válido). Informe se o desconto será aplicado e apresente o total final.



// 05 — Promoção especial

let valorCompra1 = 200;
let assinante2 = true;
let cupomValido = false;
let valorFINAL = valorCompra1 * 0.85

if (valorCompra >= 150 && assinante2 == true  || cupomValido == true){
    console.log(`o desconto foi aplicado e o valor final ${valorFINAL}`)

}else {
    console.log(`o desconto não foi aplicado e o valor que você pagara sera ${valorCompra1}`)
}
