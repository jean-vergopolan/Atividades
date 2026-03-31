class CentralDeLuzes {
    constructor() {
        if (CentralDeLuzes.instancia) {
            return CentralDeLuzes.instancia;
        }
        CentralDeLuzes.instancia = this;
    }

    static getInstance() {
        if (!CentralDeLuzes.instancia) {
            CentralDeLuzes.instancia = new CentralDeLuzes();
        }
        return CentralDeLuzes.instancia;
    }

    ligar(comodo) {
        const elementoComodo = document.getElementById(comodo);
        if (elementoComodo) {
            elementoComodo.classList.add('luz-ligada');
                this.atualizarTela(`Tochas do ${comodo} acesas`);
        }
    }

    desligar(comodo) {
        const elementoComodo = document.getElementById(comodo);
            if (elementoComodo) {
            elementoComodo.classList.remove('luz-ligada');
            this.atualizarTela(`Tochas do ${comodo} apagadas`);
        }
    }

    atualizarTela(mensagem) {
        document.getElementById('mensagem-status').innerText = mensagem;
    }
}

const central = CentralDeLuzes.getInstance();

const botoes = document.querySelectorAll('button[data-comodo]');

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        const comodoSelecionado = this.getAttribute('data-comodo');
        const elementoComodo = document.getElementById(comodoSelecionado);

         if (elementoComodo.classList.contains('luz-ligada')) {
            central.desligar(comodoSelecionado);
        } else {
            central.ligar(comodoSelecionado);
        }
    });
});