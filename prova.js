//1 
let populacaoA = 80000;
let taxaCrescimentoA = 0.03;

let populacaoB = 200000;
let taxaCrescimentoB = 0.015;

let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}

alert(`Levará ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`); 

//2 
let numerosPares = 0;
let numerosImpares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));

  if (numero % 2 === 0) {
    numerosPares++;
  } else {
    numerosImpares++;
  }
}

alert(`Quantidade de números pares: ${numerosPares}`);
alert(`Quantidade de números ímpares: ${numerosImpares}`);  

//3 
const n = parseInt(prompt("Quantos números você deseja inserir?"));

var umArray = [];

for(i=0; i < n; i++) {
    const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  umArray.push(numero);

} 

umArray.sort((a, b) => a - b);  

const menorValor = umArray[0];
const maiorValor = umArray[umArray.length - 1];

alert(`Menor valor: ${menorValor}`);
alert(`Maior valor: ${maiorValor}`);
alert(`A soma do menor valor com o maior valor é ${menorValor + maiorValor}`) 

//4 
const anoContratacao = parseInt(prompt("Digite o ano de contratação do funcionário (ex: 1995):"));
const salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));


let salario = salarioInicial;


let percentualAumento = 1.5;


for (let ano = anoContratacao + 1; ano <= 2023; ano++) {

  const aumento = (salario * percentualAumento) / 100;

  salario += aumento;

  percentualAumento *= 2;
}

console.log(`O salário atual do funcionário em 2023 é de R$ ${salario.toFixed(2)}`); 

//5
function calcularAreaEPerimetroDoCirculo(raio) {
    const pi = Math.PI;

    const area = pi * Math.pow(raio, 2);
  
    const perimetro = 2 * pi * raio;
  
    return {
      area: area,
      perimetro: perimetro,
    };
  }
  
const raio = parseFloat(prompt("Digite o raio do círculo:"));
const resultadoValor = calcularAreaEPerimetroDoCirculo(raio);
  
console.log(`Área do círculo: ${resultado.area.toFixed(2)}`);
console.log(`Perímetro (circunferência) do círculo: ${resultadoValor.perimetro.toFixed(2)}`); 

//6
function calcularMontante(capitalInicial, taxaDeJuros, tempoEmMeses) {
    taxaDeJuros /= 100;
  
    const montante = capitalInicial * Math.pow(1 + taxaDeJuros, tempoEmMeses);
  
    return montante.toFixed(2);
  }
  
  const capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
  const taxaDeJuros = parseFloat(prompt("Digite a taxa de juros mensal (em percentual):"));
  const tempoEmMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));
  
  const resultado = calcularMontante(capitalInicial, taxaDeJuros, tempoEmMeses);
  
alert(`O montante após ${tempoEmMeses} meses de investimento é de R$ ${resultado}`); 

//7
function imprimirAlunosAprovados(alunos) {
    for (const aluno of alunos) {
      const notas = aluno.notas;
      const nome = aluno.nome;
      const curso = aluno.curso;
  
      const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
  

      if (media >= 7) {
        console.log(`Nome: ${nome}`);
        console.log(`Média Aritmética: ${media.toFixed(2)}`);
        console.log(`Curso: ${curso}`);
        console.log("------------------");
      }
    }
  }
  
  const alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
  ];
  

  imprimirAlunosAprovados(alunos);