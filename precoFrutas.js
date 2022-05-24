function precoFrutas(kgMorango, kgMaca) {
    let valorTotal;
    let precoMorango = 2.5
    let precoMaca = 1.8
    if (kgMorango > 5) {
        precoMorango = 2.2;
    }
    if (kgMaca > 5) {
        precoMaca = 1.5;
    }
    valorTotal = (precoMorango * kgMorango) + (precoMaca * kgMaca);
    if (kgMorango + kgMaca > 8 || valorTotal > 25) {
        valorTotal = valorTotal * 0.9;
    }
    return valorTotal;
}
console.log('O valor total de sua compra é: ', precoFrutas(5, 5));