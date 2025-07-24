// const nome = "Pedro";
// const idade = 19;
// const maiorDeIdade = true;

// Cálculo da média de notas
// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const media = (nota1 + nota2 + nota3) / 3;

// console.log("Média das notas:", media);


// TESTE 1
// Algoritmo para calcular a área de uma parede e a quantidade de tinta necessária
// const altura = 10;
// const largura = 7;
// const area = altura * largura;

// Considerando que 1 litro de tinta cobre 2 metros quadrados
// const tinta = area / 2;

// console.log(`Área da parede:" ${area.toFixed(2)} "metros quadrados`);
// console.log(`Quantidade de tinta necessária: ${tinta.toFixed(2)} litros`);

// TESTE2
// // Dados da parede e do serviço
// const alturaParede = 2.5;
// const larguraParede = 5; 
// const valorPorMetroQuadrado = 50; 

// // Cálculo da área da parede
// const areaParede = alturaParede * larguraParede;

// // Cálculo do valor total do serviço
// const valorTotal = areaParede * valorPorMetroQuadrado;

// // Exibição dos resultados
// console.log(`Área da parede: ${areaParede.toFixed(2)} m²`);
// console.log(`Valor total do serviço: R$ ${valorTotal.toFixed(2)}`);

// TESTE3
// const altura = 2.5;   
// const largura = 5;    
// const rendimentoTinta = 2; 
// const desperdicio = 0.3;    
// const valorLitroTinta = 30;
// const valorPintorPorM2 = 50; 

// const areaParede = altura * largura;
// const litrosNecessarios = (areaParede / rendimentoTinta) * ( 1 + desperdicio);
// const valorTinta = litrosNecessarios * valorLitroTinta;
// const valorServicoPintor = areaParede * valorPintorPorM2;
// const valorTotal = valorTinta + valorServicoPintor;

// console.log(`
// === ORÇAMENTO DÁ PINTURA ===
// Área da parede: ${areaParede.toFixed(2)} m²
// Litros de tinta (com 30% de desperdício): ${litrosNecessarios.toFixed(2)} litros
// ---------------------------------
// Valor da tinta: R$ ${valorTinta.toFixed(2)}
// Valor do pintor: R$ ${valorServicoPintor.toFixed(2)}
// ---------------------------------
// TOTAL: R$ ${valorTotal.toFixed(2)}
// `);