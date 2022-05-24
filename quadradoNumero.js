function quadradoNumeros(numeros, potencia) {
    quadrado = numeros.map((item) => {
    Math.pow(item, potencia)
    })
    return quadrado
}

console.log(quadradoNumeros([2], 2))

