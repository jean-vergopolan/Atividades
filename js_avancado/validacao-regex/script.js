const formulario = document.getElementById('formularioValidacao');
const inputNome = document.getElementById('campoNome');
const inputEmail = document.getElementById('campoEmail');
const inputCpf = document.getElementById('campoCpf');


const spanNome = document.getElementById('erroNome');
const spanEmail = document.getElementById('erroEmail');
const spanCpf = document.getElementById('erroCpf');

const regexNome = /^[a-zA-ZÀ-ÿ\s]+$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    let formularioValido = true;

    if (regexNome.test(inputNome.value)) {
        inputNome.className = 'borda-verde';
        spanNome.textContent = 'Válido';
        spanNome.className = 'mensagem texto-verde';
    } else {
        inputNome.className = 'borda-vermelha';
        spanNome.textContent = 'Inválido';
        spanNome.className =  'mensagem texto-vermelho';
        formularioValido = false;
    }

    if (regexEmail.test(inputEmail.value)) {
        inputEmail.className = 'borda-verde';
        spanEmail.textContent = 'Válido';
        spanEmail.className = 'mensagem texto-verde';
    } else  {
        inputEmail.className = 'borda-vermelha';
        spanEmail.textContent = 'Inválido';
        spanEmail.className = 'mensagem texto-vermelho';
        formularioValido = false;
    }

    if (regexCpf.test(inputCpf.value)) {
        inputCpf.className = 'borda-verde';
        spanCpf.textContent= 'Válido';
        spanCpf.className = 'mensagem texto-verde';
    }   else {
        inputCpf.className = 'borda-vermelha';
        spanCpf.textContent = 'Inválido';
        spanCpf.className = 'mensagem texto-vermelho';
        formularioValido = false;
    }

    if (formularioValido) {
        alert('Todos os dados estão corretos!');
}
});