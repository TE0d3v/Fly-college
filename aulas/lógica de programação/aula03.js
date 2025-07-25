// const idade = 20;
// const nome = "Pedro";
// const cidade = "São Paulo";

// const profile = { //    variável do tipó objeto
// //  chave: valor 
//     nome: "Pedro", //propriedades
//     idade: 20,
//     cidade: "São Paulo",
// }

// console.log(profile.nome);  

// const listaDeCompras = ["arroz", "feijão", "macarrão"];

// console.log(listaDeCompras);

// listaDeCompras.push("refrigerante");

// console.log(listaDeCompras);

// listaDeCompras.pop();

// console.table(listaDeCompras);

// // uma string é uma lista de caracteres dentro da sua ide 

// listaDeCompras.splice(0, 1);

// console.log(listaDeCompras)

// const filme = {
//     nome: "batman",
//     ano: 2022,
//     genero: "ação",
//     elenco: [
//         {
//             nome: "anne hataway",
//             personage: "batman"
//         },
//         {
//             nome: "cristian bale",
//             personage: "robin"
//         }
//     ]
// }

// console.log(filme.elenco[1].nome);

// const profile = {
//     nome: "Pedro",
//     idade: 19,
//     nascimento: "27/07/2005",
//     pets: [
//         {
//             nome: "tica",
//             tipo: "gato",
//             idade: 10
//         },
//         {
//             nome: "brito",
//             tipo: "gato",
//             idade: 7
//         }
//     ]
// }

// console.log(profile.pets[1].nome)
// console.log(profile.pets[1].idade)


// const carros = [
//     {
//         nome: "Tracker",
//         diaria: 170,
//         categoria: "Premium"
//     },
//     {
//         nome: "Yaris",
//         diaria: 100,
//         categoria: "Regular"
//     },
//     {c
//         nome: "Hb20",
//         diaria: 80,
//         categoria: "Economico"
//     }
// ]


// const nomeCarro = "Hb20";
// const dias = 7;
// const carroSelecionado = carros.find((carros) => carros.nome === nomeCarro);

// // crie um algoritmo que receba o nome do carro e pelos dias alugados o valor total gasto pelo aluguel do carro

// const valorTotal = carroSelecionado.diaria * dias;

// console.log(valorTotal)

function calcularMedia(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;

    if (media >= 7) {
        console.log(`Aprovado com média ${media.toFixed(1)}`)
        return
    }
    console.log(`Reprovado com média ${media.toFixed(1)}`)


}

calcularMedia(10, 9, 5);