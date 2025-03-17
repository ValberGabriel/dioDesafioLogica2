function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;

  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}

const nomeJogador = "Valber";
const vitorias = 101;
const derrotas = 0;

const resultado = calcularNivel(vitorias, derrotas);

console.log(
  `O Herói ${nomeJogador} tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`
);
