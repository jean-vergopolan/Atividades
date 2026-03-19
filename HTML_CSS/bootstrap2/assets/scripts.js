const diarios = document.querySelectorAll('.projetos');
const textoPergaminho = document.getElementById('padrao');

diarios.forEach(diario => {
    diario.addEventListener('mouseenter', () => {
        textoPergaminho.innerText = diario.getAttribute('texto');
    })
});