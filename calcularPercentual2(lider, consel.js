function porcentagemGuilda(lider, conselheiros, membros) {
    let todosMembros = lider + conselheiros + membros;
    let arrecadado = (todosMembros * 20000);
    let banco = 0.6 * arrecadado;
    let totalLider = 0.05 * arrecadado;
    let totalConselheiros = 0.1 * arrecadado;
    let totalMembros = 0.25 * arrecadado;
    let cadaMembro = totalMembros / membros;
    let cadaConselheiro = totalConselheiros / conselheiros;

    return console.log("O valor arrecadado é:", arrecadado, "\nO valor a ser recebido pelo líder é: ", totalLider, "\nO valor total a ser recebido pelos conselheiros é: ", totalConselheiros, "\nO valor a ser recebido por cada conselheiro é: ", cadaConselheiro, "\nO valor armazenado no banco é: ", banco, "\nO valor total a ser recebido pelos membros é: ", totalMembros, "\nO valor a ser recebido por cada membro é: ", cadaMembro)
}
porcentagemGuilda(1, 5, 30);