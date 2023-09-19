let soma = 0;

const quantidadeDeNumeros = prompt("Quantos números você deseja somar?");

const quantidade = parseInt(quantidadeDeNumeros);

if (isNaN(quantidade)) {
  alert("Por favor, insira um número válido.");
} else {
  for (let i = 0; i < quantidade; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    
    if (!isNaN(numero)) {
      soma += numero;
    } else {
      alert("Por favor, insira um número válido.");
      i--;
    }
  }

  alert(`A soma dos números é: ${soma}`);
}