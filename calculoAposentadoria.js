function possoAposentar(idade, tempoTrabalhado) {
    if (idade >= 65 || tempoTrabalhado >= 30 || idade >= 60 && tempoTrabalhado >= 25 && tempoTrabalhado < 30) {
        console.log('Requer aposentadoria.');
    }
    else console.log('Não requer');
}
possoAposentar(30, 10);