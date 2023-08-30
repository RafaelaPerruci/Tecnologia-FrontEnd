const genero = [];
const alturas = [];
const alt_homens = [];

for (let c = 0; c < 3; c++) {
    const sexo = prompt("Digite o seu gênero [m/h]: ").toLowerCase();
    const altura = parseFloat(prompt("Digite a sua altura: "));
    genero.push(sexo);
    alturas.push(altura);
}

let qtd_mulheres = 0;
let qtd_homens = 0;

for (let i = 0; i < genero.length; i++) {
    if (genero[i] === "m") {
        qtd_mulheres++;
    } else if (genero[i] === "h") {
        qtd_homens++;
        alt_homens.push(alturas[i]);
    }
}

console.log(`Maior altura do grupo: ${Math.max(...alturas).toFixed(2)} cm`);
console.log(`Menor altura do grupo: ${Math.min(...alturas).toFixed(2)} cm`);
console.log(`A quantidade de mulheres é ${qtd_mulheres}`);
console.log(`A média da altura dos homens é ${(alt_homens.reduce((acc, curr) => acc + curr, 0) / qtd_homens).toFixed(2)}`);