
        document.addEventListener("DOMContentLoaded", function() {
            const telaEspaco = document.getElementById('tela-espaco');
            const telaCentral = document.getElementById('tela-central');
            const telaComputador = document.getElementById('tela-computador');
            
            const containerUniverso = document.querySelector('.container-universo');
            const nave = document.getElementById('nave');
            const botaoComputador = document.getElementById('botao-computador');
            const botaoVoltar = document.getElementById('botao-voltar');

            const astronauta = document.getElementById('astronauta');
            const portaEsq = document.querySelector('.porta-esq');
            const portaDir = document.querySelector('.porta-dir');

            if(portaEsq && astronauta) {
                portaEsq.addEventListener('mouseenter', () => astronauta.classList.add('indo-esq'));
                portaEsq.addEventListener('mouseleave', () => astronauta.classList.remove('indo-esq'));
            }

            if(portaDir && astronauta) {
                portaDir.addEventListener('mouseenter', () => astronauta.classList.add('indo-dir'));
                portaDir.addEventListener('mouseleave', () => astronauta.classList.remove('indo-dir'));
            }

            if(botaoComputador && astronauta) {
                botaoComputador.addEventListener('mouseenter', () => astronauta.classList.add('indo-comp'));
                botaoComputador.addEventListener('mouseleave', () => astronauta.classList.remove('indo-comp'));
            }

            document.addEventListener('mousemove', (e) => {
                if (telaEspaco && telaEspaco.classList.contains('ativa') && containerUniverso) {
                    const x = (e.clientX / window.innerWidth - 0.5) * 2;
                    const y = (e.clientY / window.innerHeight - 0.5) * 2;
                    containerUniverso.style.backgroundPosition = `calc(50% + ${x * -200}px) calc(50% + ${y * -200}px)`;
                }
            });

            if(nave) {
                nave.addEventListener('click', () => {
                    nave.classList.add('zoom-ativo');
                    setTimeout(() => {
                        telaEspaco.classList.replace('ativa', 'oculta');
                        telaCentral.classList.replace('oculta', 'ativa');
                    }, 1500); 
                });
            }

            if(botaoComputador) {
                botaoComputador.addEventListener('click', () => {
                    telaCentral.classList.replace('ativa', 'oculta');
                    telaComputador.classList.replace('oculta', 'ativa');
                });
            }

            if(botaoVoltar) {
                botaoVoltar.addEventListener('click', () => {
                    telaComputador.classList.replace('ativa', 'oculta');
                    telaCentral.classList.replace('oculta', 'ativa');
                });
            }
        });

        var app = angular.module('diarioNave', []);

        app.controller('PainelController', function($window) {
            var ctrl = this;

            ctrl.niveisHumor = [
                { valor: 1, texto: 'Muito triste', emoji: '😭' },
                { valor: 2, texto: 'Neutro', emoji: '😐' },
                { valor: 3, texto: 'Feliz', emoji: '🙂' },
                { valor: 4, texto: 'Muito feliz', emoji: '🤩' }
            ];

            ctrl.habitosBase = ['Estabilizar direção', 'Musculação', 'Calibrar sensores', 'Alimentação', 'Limpar filtros de O2', 'Monitorar reator', 'Esvaziar o depósito de lixo'];
            ctrl.registros = [];
            ctrl.filtroData = null;
            ctrl.filtroHumor = "";

            try {
                var dadosGuardados = $window.localStorage.getItem('diario_amongus_registos');
                if (dadosGuardados) {
                    ctrl.registros = JSON.parse(dadosGuardados);
                    ctrl.registros.forEach(function(r) { r.data = new Date(r.data); });
                }
            } catch (erro) {
                console.error("Erro ao ler dados antigos.", erro);
                ctrl.registros = [];
            }

            ctrl.resetarFormulario = function() {
                ctrl.novoRegistro = {
                    data: new Date(),
                    humor: null,
                    observacao: "",
                    habitos: ctrl.habitosBase.map(function(nome) { 
                        return { nome: nome, concluido: false }; 
                    })
                };
            };

            ctrl.salvarRegistro = function() {
                var registroParaSalvar = angular.copy(ctrl.novoRegistro);
                ctrl.registros.unshift(registroParaSalvar);
                
                $window.localStorage.setItem('diario_amongus_registos', JSON.stringify(ctrl.registros));

                ctrl.resetarFormulario();
                alert("✔️ Tasks Completed! Registo salvo na base de dados da nave.");
            };

            ctrl.calcularProgresso = function() {
                if (!ctrl.novoRegistro || !ctrl.novoRegistro.habitos) return 0;
                var total = ctrl.novoRegistro.habitos.length;
                var concluidos = ctrl.novoRegistro.habitos.filter(function(h) { return h.concluido; }).length;
                return (concluidos / total) * 100;
            };

            ctrl.getHumorRecente = function() {
                return ctrl.registros.slice(0, 7).map(function(r) { return ctrl.getEmoji(r.humor); });
            };

            ctrl.getEmoji = function(valor) {
                var humorEncontrado = ctrl.niveisHumor.find(function(h) { return h.valor === valor; });
                return humorEncontrado ? humorEncontrado.emoji : '❓';
            };

            ctrl.filtrarRegistros = function(registro) {
                var mostrar = true;
                if (ctrl.filtroData) {
                    var dataRegistro = new Date(registro.data).toDateString();
                    var dataFiltro = new Date(ctrl.filtroData).toDateString();
                    if (dataRegistro !== dataFiltro) mostrar = false;
                }
                if (ctrl.filtroHumor && registro.humor !== parseInt(ctrl.filtroHumor)) {
                    mostrar = false;
                }
                return mostrar;
            };

            ctrl.limparFiltros = function() {
                ctrl.filtroData = null;
                ctrl.filtroHumor = "";
            };

            ctrl.resetarFormulario();
        });