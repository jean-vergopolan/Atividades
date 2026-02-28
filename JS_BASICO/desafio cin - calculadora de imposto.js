//Desafio extra - Desafio da Cin - Calculadora de Impostos
//Autor: Jeanluca Vergopolan

//Preço
let precoProduto = 100.00

//Desconto
let temDesconto = false

if (temDesconto){
let valorDesconto = precoProduto * 0.10
let precoComDesconto = precoProduto - valorDesconto

//Imposto com desconto
let icmsAleatorio = (Math.round(Math.random()* 13) +12) /100
let valorIcms = precoComDesconto * icmsAleatorio;
let precoComDescEIcms = precoComDesconto + valorIcms

//Resultado:
console.log("O valor original do produto é: R$" + precoProduto)
console.log("O valor do desconto foi de: R$" + valorDesconto)
console.log("O valor do produto após o desconto: R$" + precoComDesconto)
console.log("O valor do produto após o desconto e adição do ICMS: R$" + precoComDescEIcms)
}



    else {

    
    //Imposto sem desconto
    let icmsAleatorio = (Math.round(Math.random()* 13) +12) /100
    let valorIcms = precoProduto * icmsAleatorio;
    let precoComIcms = precoProduto + valorIcms


    console.log("O valor original do produto é: R$" + precoProduto)
    console.log("O valor do desconto foi de: R$ 0,00")
    console.log("O valor do produto após a adição do ICMS: R$" + precoComIcms)
        }