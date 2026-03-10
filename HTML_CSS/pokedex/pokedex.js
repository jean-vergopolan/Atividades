const classes = [

    {
        nome: "guerreiro",
        gif: "./assets/guerreiro.gif",
        descricao: "GUERREIRO: Cavaleiros em missões, lordes conquistadores, campeões reais, infantaria de elite, mercenários rígidos e bandidos reis. Todos esses são guerreiros, talvez a mais diversificada classe de personagens nos mundos de, DUNGEONS & DRAGONS. Como guerreiros, eles compartilham de uma maestria com armas e armaduras sem precedentes, bem como um vasto conhecimento e habilidades em combate. E eles estão bem familiarizados com a morte, seja simplesmente conhecendo-a ou desafiando-a cara a cara.."
    },

    {
        nome: "ladino",
        gif: "./assets/ladino.gif",
        descricao: "LADINO: Ladrões furtivos, assassinos nas sombras, golpistas astutos e especialistas em perícias. Todos esses são ladinos, mestres da oportunidade e da precisão. Como ladinos, eles compartilham de uma capacidade inigualável de encontrar fraquezas nos inimigos e perigos no caminho. Eles dependem da furtividade e do raciocínio rápido em vez da força bruta, sendo capazes de causar danos devastadores em um único golpe certeiro."
    },


    {
        nome: "mago",
        gif: "./assets/mago.gif",
        descricao: "MAGO: Estudiosos do arcano, mestres de grimórios, tecelões da realidade e sábios das torres. Todos esses são magos, definidos pelo estudo rigoroso e pela compreensão das leis da magia. Como magos, eles compartilham da dependência de seus livros de magias para registrar e preparar seus feitiços. Eles buscam o domínio sobre o multiverso, sendo capazes de manipular o tempo, o espaço e os elementos através de fórmulas antigas e rituais complexos."
    },

    {
        nome: "monge",
        gif: "./assets/monge.gif",
        descricao: "MONGE: Mestres marciais, ascetas em busca da perfeição, lutadores sem armas e andarilhos introspectivos. Todos esses são monges, indivíduos que dominam a energia que flui através de seus próprios corpos. Como monges, eles compartilham do uso do Ki, uma energia espiritual que lhes permite realizar feitos físicos incríveis. Eles transformam seus próprios corpos em armas letais, movendo-se com uma velocidade e agilidade que desafia a compreensão comum."
    },

    {
        nome: "paladino",
        gif: "./assets/paladino.gif",
        descricao: "PALADINO: Cavaleiros de ordens sagradas, campeões juramentados, cruzados da justiça e executores da luz. Todos esses são paladinos, unidos por um juramento inquebrável contra as forças do mal. Como paladinos, eles compartilham de um fervor sagrado que manifesta poder divino através de suas armas e orações. Eles são o escudo entre os inocentes e a escuridão, dotados de habilidades para curar e destruir o mal com golpes divinos."
    },

   {
        nome: "patrulheiro",
        gif: "./assets/patrulheiro.gif",
        descricao: "PATRULHEIRO: Caçadores da fronteira, rastreadores implacáveis, batedores da selva e protetores das matas. Todos esses são patrulheiros, especialistas em sobreviver e combater nos locais mais selvagens do mundo. Como patrulheiros, eles compartilham de uma conexão com a vida selvagem e uma maestria em táticas de emboscada. Eles focam seus esforços contra inimigos específicos e utilizam magias da natureza para rastrear presas e proteger as bordas da civilização."
    },

    {
        nome: "barbaro",
        gif: "./assets/barbaro.gif",
        descricao: "BÁRBARO: Guerreiros tribais, nômades totêmicos, herdeiros de linhagens primitivas e protetores de clãs e terras distantes. Todos esses são bárbaros, definidos por sua fúria: uma raiva animal, impetuosa e inesgotável. Como bárbaros, eles compartilham de um vigor primordial que permite que realizem feitos de força e resistência sobre-humanas. Eles não dependem de treinamento militar formal, mas sim de uma ferocidade de um predador encurralado e da turbulência agitada do mar. Para um bárbaro, a fúria é um poder que concede reflexos, resiliência e força incríveis, sendo a fonte vital que os mantém lutando onde outros já teriam caído."
    },

    {
        nome: "bardo",
        gif: "./assets/bardo.gif",
        descricao: "BARDO: Menestréis itinerantes, espiões infiltrados, estudiosos de lendas e artistas da corte. Todos esses são bardos, talvez a classe que melhor personifica a magia das palavras e da música. Como bardos, eles compartilham de uma versatilidade extraordinária, capazes de tecer magia para inspirar aliados, manipular mentes e curar ferimentos. Eles acreditam que o cosmos foi criado através do som e que ecos dessa criação podem ser usados para realizar feitos prodigiosos."
    },

    {
        nome: "bruxo",
        gif: "./assets/bruxo.gif",
        descricao: "BRUXO: Buscadores de segredos proibidos, conjuradores pactuários, servos de patronos enigmáticos e arautos do desconhecido. Todos esses são bruxos, unidos por um pacto feito com uma entidade poderosa e sobrenatural. Como bruxos, eles compartilham de um conhecimento arcano concedido por seus mestres em troca de lealdade ou serviços. Eles utilizam magias raras e invocações místicas, movidos por uma sede de poder que os leva aos limites da moralidade."
    },

    {
        nome: "clerigo",
        gif: "./assets/clerigo.gif",
        descricao: "CLÉRIGO: Curandeiros divinos, agentes de deuses, guerreiros da fé e inquisidores devotos. Todos esses são clérigos, intermediários entre o mundo mortal e os planos distantes dos deuses. Como clérigos, eles compartilham do poder da magia divina, agindo como condutos para a vontade de suas divindades. Eles combinam a proteção de armas e armaduras com a capacidade de abençoar aliados e punir inimigos com a força sagrada de seus domínios."
    },

   {
        nome: "druida",
        gif: "./assets/druida.gif",
        descricao: "DRUIDA: Eremitas da floresta, guardiões da natureza, sábios antigos e transmorfos selvagens. Todos esses são druidas, servos da inteligência elemental da natureza. Como druidas, eles compartilham de uma conexão profunda com o mundo natural, extraindo poder dos elementos e dos animais. Eles são capazes de assumir formas de feras e conjurar as forças da terra e do céu para proteger o equilíbrio do mundo e punir aqueles que o ameaçam."
    },

   {
        nome: "feiticeiro",
        gif: "./assets/feiticeiro.gif",
        descricao: "FEITICEIRO: Portadores de linhagens antigas, manifestações vivas de magia, escolhidos pelo destino e canais de poder caótico. Todos esses são feiticeiros, indivíduos cujo poder mágico nasce com eles. Como feiticeiros, eles compartilham de uma conexão inata com o arcano, não precisando de livros ou mestres para moldar a realidade. Sua magia é uma extensão de sua própria vontade, pulsando em suas veias e aguardando apenas o momento de ser liberada."
    },

]

let AtualIndice = 0;

const imgClasse = document.getElementById('personagem-gif');
const textoDescricao = document.getElementById('textoDescricao');
const anterior = document.getElementById('anterior');
const proxima = document.getElementById('proxima');

function atualizarClasse() {
    const classe = classes[AtualIndice];
    imgClasse.src = classe.gif;
    textoDescricao.innerText = classe.descricao;
}

anterior.addEventListener('click', () => {
    AtualIndice = (AtualIndice - 1 + classes.length) % classes.length; 
    atualizarClasse()})

proxima.addEventListener('click', () => {
    AtualIndice = (AtualIndice + 1 ) % classes.length; 
    atualizarClasse();    
});

const barrapesquisa = document.getElementById('pesquisa')
barrapesquisa.addEventListener('keyup', (evento) => {
    if (evento.key === 'Enter') {
        const pesquisado = barrapesquisa.value.toLowerCase();
        const indiceEncontrado = classes.findIndex(classe => classe.nome.toLowerCase() === pesquisado);
            if (indiceEncontrado !== -1) {
                AtualIndice= indiceEncontrado;
                atualizarClasse()
                barrapesquisa.value = '';
            }
            else {
                alert("Classe não encontrada!");
            }
    }
})