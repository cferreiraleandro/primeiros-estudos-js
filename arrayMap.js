let jogadores = [
    {
        nome: 'simim',
        idade: 23,
        lane: 'suporte',
    },
    {
        nome: 'leo',
        idade: 25,
        lane: 'jungler',
    },
    {
        nome: 'pablo',
        idade: 20,
        lane: 'jungler'
    }
];

function nomesJogador(jogadores) {
    jogadores.map((item) => {
        return console.log(item.nome)
    })
}

function lanesJogador(jogadores) {
    jogadores.map((item) => {
        return console.log(item.lane)
    })
}

function idadesJogador(jogadores) {
    jogadores.map((item) => {
        return console.log(item.idade)
    })
}

function adicionarJogador(jogadorNovo) {
    jogadores.push(jogadorNovo)
}

const novoJogador1 = { nome: 'samuel', idade: 25, lane: 'autofill' };
const novoJogador2 = { nome: 'igor', idade: 25, lane: 'autofill' };

adicionarJogador(novoJogador1);
adicionarJogador(novoJogador2);
console.log(jogadores);
nomesJogador(jogadores);
lanesJogador(jogadores);
idadesJogador(jogadores);