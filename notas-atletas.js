// Projeto: Notas dos Atletas
// Autor: Daniel Silva Rodrigues
// Descrição: Calcula a média das notas dos atletas, desconsiderando a maior e a menor nota.

// Dados de entrada
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// Processamento e saída
for (let i = 0; i < atletas.length; i++) {
  let atleta = atletas[i];
  let notas = atleta.notas;

  // Ordena as notas do menor para o maior
  let notasOrdenadas = notas.sort((a, b) => a - b);

  // Remove a menor e a maior nota
  let notasComputadas = notasOrdenadas.slice(1, 4);

  // Calcula a média das três notas do meio
  let soma = 0;
  notasComputadas.forEach(function (nota) {
    soma += nota;
  });
  let media = soma / notasComputadas.length;

  // Exibe o resultado
  console.log(`Atleta: ${atleta.nome}`);
  console.log(`Notas Obtidas: ${notas.join(",")}`);
  console.log(`Média Válida: ${media}`);
  console.log(""); // linha em branco entre os atletas
}
