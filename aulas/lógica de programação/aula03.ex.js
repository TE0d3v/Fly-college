// crie uma função qu ereceba a largura e a altura de uma parede e retorne a sua area
// 

// function calcularArea(largura, altura) {
//     const area = largura * altura;
//     console.log(`A área da parede é ${area} metros quadrados.`)
// }

// calcularArea(10, 5)

// function valorAluguel(dias, categoria) {
//     let valorDiaria = 0

//     if (categoria === "premium") {
//         valorDiaria = 170

//     }
//     if (categoria === "regular") {
//         valorDiaria = 100
//     }
//     if (categoria === "economico") {
//         valorDiaria = 80  
//     }
//     if (valorDiaria === 0) {
//         console.log("Categoria inválida")
//         return
//     }

//     const valorTotal = dias * valorDiaria
//     console.log(`O valor total do aluguel do carro é ${valorTotal}`)
// }

// valorAluguel(10, "premium")
// valorAluguel(10, "regular")
// valorAluguel(10, "economico")
// valorAluguel(10, "executivo")

// crie uma função que receba a altura e a largura de uma parede e calcula a area da parede e retorne o preço do serviço
// sabendo que o preço do metro quadrado e 80
// se a area for maior que 20 m2 o preço do serviço é 100 se a area for maior que 30 m2 o preço é 120

// function calcArea(altura, largura) {
//     let precoServico = 0
//     let precoMetro = 80

//     const area = altura * largura

//     if (area >= 20) {
//         precoMetro = 100
//         precoServico = area * precoMetro
 
//     }
//     if (area > 30) {
//         precoMetro = 120
//         precoServico = area * precoMetro

//     }

//     console.log(`O valor total do serviço é ${precoServico}`)
// }

// calcArea(10, 10);

// Crie uma função que receba a altura e largura de uma parede,
// calcule a area da parede
// e retorne o preço do serviço
// com base na lista de pintores, retorne o pintor mais barato e o melhor pintor
const pintores = [
    {
        nome: "João",
        preco: 100,
        desperdicio: 30, //%
        avaliacao: 4.3
    },
    {
        nome: "Breno",
        preco: 150,
        desperdicio: 10, //%
        avaliacao: 4.8
    },
    {
        nome: "Pedro",
        preco: 200,
        desperdicio: 40, //%
        avaliacao: 5
    }
]

function calcBest (altura, largura){
    const area = altura * largura;

    const pintor = pintores.find((pintores) => pintores.preco)
    console.log(pintor)


}

calcBest(10, 10)