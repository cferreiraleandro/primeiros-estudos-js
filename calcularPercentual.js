function calcularPercentual(votos, eleitores) {
    return ((votos * 100) / eleitores);
}
const votosBrancos = 4000;
const votosNulos = 6000;
const votosValidos = 90000;
let eleitores = votosBrancos + votosNulos + votosValidos;
console.log('A porcentagem de votos brancos em relação a todos os eleitores da cidade é: ', calcularPercentual(votosBrancos, eleitores), '%');
console.log('\nA porcentagem de votos nulos em relação a todos os eleitores da cidade é: ', calcularPercentual(votosNulos, eleitores), '%');
console.log('\nA porcentagem de votos válidos em relação a todos os eleitores da cidade é: ', calcularPercentual(votosValidos, eleitores), '%');