const notas = [];
for (let i = 0; i < 3; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
  if (!isNaN(nota)) {
    notas.push(nota);
  } else {
    alert("Por favor, insira uma nota válida.");
    i--;
  }
}

const media = (notas.reduce((total, nota) => total + nota, 0)) / notas.length;

if (media <= 4) {
  alert(`Média: ${media.toFixed(2)} - Reprovado`);
} else if (media < 7) {
  const notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
  if (!isNaN(notaRecuperacao)) {
    const novaMedia = (media + notaRecuperacao) / 2;
    if (novaMedia >= 5) {
      alert(`Média após a recuperação: ${novaMedia.toFixed(2)} - Aprovado`);
    } else {
      alert(`Média após a recuperação: ${novaMedia.toFixed(2)} - Reprovado`);
    }
  } else {
    alert("Por favor, insira uma nota de recuperação válida.");
  }
} else {
  alert(`Média: ${media.toFixed(2)} - Aprovado`);
}