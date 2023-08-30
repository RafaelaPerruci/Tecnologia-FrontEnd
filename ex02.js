console.log("Vamos calcular uma media ponderada das suas 3 notas.") 

let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));

let media = ((nota1 * 2) + (nota2 * 3) +(nota3 * 5)) / 10

console.log(`A sua média é ${parseFloat(media)}`) 
//convertendo a string do prompt em ponto flutuante