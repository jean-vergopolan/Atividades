//Desafio 5 - Cadastro de pessoas
//Autor: Jeanluca Vergopolan

const prompt = require("prompt-sync")()

let usuarios = []
let rodando = true

console.log(`Bem vindo ao cadastro de pessoas!
Para selecionar uma das opções abaixo, basta digitar o número respectivo: `)

while (rodando) {
    let escolha = prompt(`
1 - Adicionar novo usuário
2 - Remover usuário
3 - Listar todos os cadastros
4 - Sair
    
Digite sua opção: `)

//adicionar
if (escolha == 1) {
        let nome = prompt("Nome completo: ")
        let idade = prompt("Idade: ")
        let email = prompt("E-mail: ")

        let emailExiste = usuarios.find(pessoa => pessoa.email === email)

        if (emailExiste) {
            console.log("AVISO: Já existe um usuário com esse e-mail!") } 
            else {
            let novaPessoa = {
                nome: nome,
                idade: idade,
                email: email
            }

            usuarios.push(novaPessoa)
            console.log("Usuario cadastrado com sucesso!")
        }
    } 
    
//remover
    else if (escolha == 2) {
        let emailRemover = prompt("Digite o e-mail de quem deseja remover: ")
            usuarios = usuarios.filter(pessoa => pessoa.email !== emailRemover)
            console.log("Usuário removdo!")
}
    
//listar
        else if (escolha == 3) {
            if (usuarios.length === 0) {
                console.log("Nenhum usuario cadastrado ainda!")
            } else {
                console.log("Lista de pessoas cadastradas: ")
                usuarios.forEach((pessoa, index) => {
                    console.log(`${index + 1}. Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, E-mail: ${pessoa.email}`)
                })
            }
        } 
    
            else if (escolha == 4) {
                rodando = false;
                console.log(`Encerrando o sistema. 
Tchau!`)
                 } 
    
                else {
                    console.log("Opção inválida! :/")
                }
            }