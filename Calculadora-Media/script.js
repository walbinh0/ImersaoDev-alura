const res = document.getElementById("res");

function calcular(i) {
  const n1 = document.getElementById("nota1").value;
  const n2 = document.getElementById("nota2").value;
  const n3 = document.getElementById("nota3").value;
  const n4 = document.getElementById("nota4").value;
  const s = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4);
  const m = s / 4;
  const mFixada = m.toFixed();

  if (mFixada >= 6) {
    res.innerHTML = `Você foi aprovado com a nota media de: ${m}`;
  } else if (mFixada <= 5) {
    res.innerHTML = `Você foi Reprovado com a nota media de: ${m}`;
  } else {
    res.innerHTML = `Insira todas as notas`;
  }
}
