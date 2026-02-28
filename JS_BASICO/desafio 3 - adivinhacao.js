//Desafio 3 - O jogo da adivinhação
//Autor: Jeanluca Vergopolan

let numero = Math.round(Math.random ()*99) +1
let tentativas = 0
let leitor = require ('readline')

//Interface usuario
console.log ("Eu pensei em um número entre 1 e 100, tente adivinhar!")

let interface = leitor.createInterface({
    input: process.stdin,
    output: process.stdout
})

function jogo (){
    interface.question ("Digite aqui sua tentativa: ", (resposta) => {
        let chute = parseInt(resposta)
    
//Analisando o chute

if (chute > numero) 
{
    console.log ("Chutou muito alto, tente um número menor!")
    tentativas++
    jogo()
}
    else if (chute < numero) 
        {
        console.log ("Chutou muito baixo, tente um número maior!")
        tentativas++
        jogo()
    }

        else
         {
            console.log ("Acertou! Por acaso você leu minha mente?")
            tentativas++
            console.log("Seu número de tentativas foi: " + tentativas)
        
}})}
jogo()