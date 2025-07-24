const nome = "Pedro";
const idade = 20;
const email = "jajajaja@gmail.com"
const senha = "123456pP"
const sexo = "masculino"


if (idade >= 18) { 
    console.log("pode comprar bebida") 
}else{
    console.log("não pode comprar bebida")
}

if(idade >= 18 && sexo == "masculino"){
    console.log("Alistamento obrigatório")
}

/*
  Operadores Lógicos em JavaScript:

  && (E Lógico / AND): Retorna true apenas se AMBAS as condições forem verdadeiras.
     Exemplo: (idade >= 18 && temCNH) -> Verdadeiro se a pessoa tiver 18 anos ou mais E tiver CNH.

  || (OU Lógico / OR): Retorna true se PELO MENOS UMA das condições for verdadeira.
     Exemplo: (temIngresso || ehVIP) -> Verdadeiro se a pessoa tiver ingresso OU se for VIP.

  ! (NÃO Lógico / NOT): Inverte o valor booleano de uma condição. Transforma true em false e false em true.
     Exemplo: !temDividas -> Verdadeiro se a pessoa NÃO tiver dívidas.

  Operadores de Comparação (correções):

  != (Diferente de): Verifica se os valores são diferentes (com conversão de tipo).
     Exemplo: (x != 10) -> Verdadeiro se x não for igual a 10.

  !== (Diferente de e de tipo): Verifica se os valores e tipos são diferentes.
     Exemplo: (x !== "10") -> Verdadeiro se x não for igual a "10" ou não for string.

  = (Atribuição): Atribui um valor a uma variável.
     Exemplo: x = 10 -> Atribui o valor 10 à variável x.

  == (Igual a): Verifica se os valores são iguais (com conversão de tipo).
     Exemplo: (x == 10) -> Verdadeiro se x for igual a 10, mesmo que seja string "10".

  === (Igual a e mesmo tipo): Verifica se os valores e tipos são iguais.
     Exemplo: (x === 10) -> Verdadeiro se x for exatamente o número 10.
*/

