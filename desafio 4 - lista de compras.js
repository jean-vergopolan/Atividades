//desafio 4 - lista de compras
//autor: Jeanluca Vergopolan

//Chamar a ferramenta de prompt
const prompt = require("prompt-sync")()

//inicio
let listaDeCompras = []
let listando = true
let nome = prompt ("Qual o seu nome? :")
console.log(`
-----------------------------------Olá, ${nome}! É um prazer te conhecer!------------------------------------------
Vamos preparar sua lista de compras! Escolha uma das opções abaixo digitando o número correspondente:`)

while(listando) {
let escolha = prompt (`
1 = Adicionar um produto a lista
2 = Remover um produto da lista
3 = Exibir produtos na lista
4 = sair

Digite: `)

//Respostas para a solicitacao:
if (escolha == 1) {let produto = prompt("Digite o nome do produto: ")
    listaDeCompras.push (produto)
    console.log ("Produto adicionado!")
}
    else if (escolha == 2) {let remover = prompt ("Digite o nome do produto a ser removido: ")
    listaDeCompras = listaDeCompras.filter(item => item !== remover)
    console.log("Produto removido!")
    }
        else if (escolha == 3) {
            if (listaDeCompras.length === 0) {console.log("Sua lista de compras está vazia!")}
            else {console.log(`A sua lista de compras tem os seguintes itens: `)
            listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`)})}
        }
                else if (escolha == 4) {listando = false
                console.log("Tchau, volte sempre!")
                }
                    else {console.log("Esse comando não é válido! :(")
                    }
}