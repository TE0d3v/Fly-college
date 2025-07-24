// // crie um algoritmo que calcule a média de 3 notas e informe se o aluno foi aprovado ou reprovado

// const nota1 = 10;
// const nota2 = 9;
// const nota3 = 8;

// const media = (nota1 + nota2 + nota3) / 3;

// const resultado = media >= 7 ? "Aprovado" : "Reprovado";
// // ternário: se media for >= a 7 (?) exibir aprovado  se não (:) Reprovado

// console.log(`
//     Notas: ${nota1}, ${nota2}, ${nota3}
//     Média: ${media.toFixed(2)}
//     Resultado: ${resultado}`)

// calcula a area de uma parede a quantidade de baldes de tinta necessários o valor total da pintura
// sabendo que o pintor cobra 45 reais por M2
// a tinta cusca 100 e pinta 3M2

// se a area for maior que 100M2 o pinto cobra uma taxa de 20% do valor total


// ===============================================
// CÁLCULO DE PINTURA DE PAREDE
// ===============================================

// ---- INFORMAÇÕES DA ÁREA ----
const altura = 2;
const largura = 4;
const area = altura * largura;

// ---- INFORMAÇÕES DA TINTA ----
const rendimento = 3;           // m² por balde
const valorBalde = 100;         // preço por balde
const baldes = (area / rendimento);
const valorTinta = baldes * valorBalde;

// ---- INFORMAÇÕES DO PINTOR ----
const precoPintor = 45;         // preço por m²
let valorPintura = precoPintor * area;

const valorTotal = valorPintura + valorTinta;
// Taxa adicional para áreas maiores que 10m²
if (area > 10) {
    console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         📐 ORÇAMENTO DE PINTURA         
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Área da parede: ${area}m²
   Baldes necessários: ${baldes.toFixed(2)}
   
   Valor da tinta: R$ ${valorTinta.toFixed(2)}
   Valor da pintura: R$ ${valorPintura.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   💰 VALOR TOTAL: R$ ${valorTotal * 1.2.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
} else {
    console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
         📐 ORÇAMENTO DE PINTURA         
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Área da parede: ${area}m²
   Baldes necessários: ${baldes.toFixed(2)}
   
   Valor da tinta: R$ ${valorTinta.toFixed(2)}
   Valor da pintura: R$ ${valorPintura.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   💰 VALOR TOTAL: R$ ${valorTotal.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
}
