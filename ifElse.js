// Estudo de estrutura condicional if/else.
// A ideia é recusar input que não seja A, P ou H.

function mediaProva(nota1 = 0, nota2 = 0, nota3 = 0, codigo = 0) {
    let mediaArit = (nota1 + nota2 + nota3) / 3;
    let mediaPond = (5 * nota1 + 3 * nota2 + 2 * nota3) / 10;
    let mediaHarm = (3 / (1 / nota1 + 1 / nota2 + 1 / nota3));
    if (codigo == 'A') {
        return mediaArit;
    }
    if (codigo == 'P') {
        return mediaPond;
    }
    if (codigo == 'H') {
        return mediaHarm;
    }
    else return ("Código inválido.")
}
console.log(mediaProva(10, 20, 30, 'DSAD'));