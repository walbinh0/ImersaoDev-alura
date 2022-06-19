const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const resultado = document.getElementById("res");
var t = 1;

function script() {
  const numero = parseInt(document.getElementById("numero").value);
  const vazio = parseInt(document.getElementById("numero").value.length);
  if (numero === numeroSecreto) {
    resultado.innerHTML = `Boa, Esse é o Número  🏆,  Você precisou adivinhar ${t} vezes para acertar`;
  } else if (numero >= 11 || numero < 0 || vazio === 0) {
    resultado.innerHTML = "Informe um Número entra 1 e 10 🔢";
  } else {
    t++;
    if (numero > numeroSecreto) {
      resultado.innerHTML = "O numero secreto é um pouco menor 😆";
    } else {
      resultado.innerHTML = "O numero secreto é um pouco maior 😅";
    }
  }
}

function chutar() {
  if (t < 4) {
    script();
  } else {
    resultado.innerHTML = "Acabou Suas chances";
  }
}

function resetar() {
  window.location.reload();
}
