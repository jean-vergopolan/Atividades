const usuarios = [
    new Aluno("Jeanluca", "jeanluca.vergopolan@alpar.com.br", "123", "Grifinória - 1º Ano"),
    new Professor("Severus Snape", "snape@hogwarts.com", "123", "Poções e Defesa Contra as Artes das Trevas")
];

usuarios.forEach(u => console.log(u.exibirPerfil()));

function logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const erro = document.getElementById('erro');

    const encontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (encontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(encontrado));
        window.location.href = 'perfil.html';
    } else {
        erro.innerText = "E-mail ou senha incorretos!";
    }
}

if (window.location.pathname.includes('perfil.html')) {
    const dados = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    if (dados) {
        let user;
        if (dados.turma) {
            user = new Aluno(dados.nome, dados.email, dados.senha, dados.turma);
        } else {
            user = new Professor(dados.nome, dados.email, dados.senha, dados.materias);
        }
        
        document.getElementById('conteudo-perfil').innerHTML = user.exibirPerfil();
    } else {
        window.location.href = 'index.html';
    }
}