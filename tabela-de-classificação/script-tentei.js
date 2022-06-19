function res(n) {
  const nomeJogador = document.getElementById("input").value;
  return (dados = {
    res: document.getElementById("tabelaJogadores"),
    nome: n,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  });
}

var jogadores = [];

function add() {
  const nomeJogador = document.getElementById("input").value;
  res();
  dados.res.innerHTML = `${dados.res.innerHTML}<tr><td>${
    res(nomeJogador).nome
  }</td><td>${dados.vitorias}</td><td>${dados.empates}</td><td>${
    dados.derrotas
  }</td><td>${
    dados.pontos
  }</td><td><button onClick="adicionarVitoria()">Vitória</button></td><td><button onClick="adicionarEmpate()">Empate</button></td><td><button onClick="adicionarDerrota()">Derrota</button></td></tr>`;
}

function adicionarVitoria(i) {
  var vitoria = i.vitorias;
  console.log(vitoria);
}

function limpar() {
  document.getElementById("input").value = "";
}

/* function exibir(jogadores) {
  var elemento = ''
  for(var i = 0; i < jogadores.lenght; i++) {
    elemento += '<tr><td>' + jogadores[i].nome + '</td>'
    elemento += <td></td>
    elemento += <td></td>
    elemento += <td></td>
    elemento += <td></td>
 elemento += <td><button onClick="adicionarVitoria()">Vitória</button></td>
 elemento += <td><button onClick="adicionarEmpate()">Empate</button></td>
 elemento += <td><button onClick="adicionarDerrota()">Derrota</button></td>
 elemento += </tr>
  }
} */

/* elemento += `<tr><td>${jogadores[i].nome}</td><td>${jogadores[i].vitorias}</td><td>${jogadores[i].empates}</td><td>${jogadores[i].derrotas}</td><td>${jogadores[i].pontos}</td><td><button onClick="adicionarVitoria()">Vitória</button></td><td><button onClick="adicionarEmpate()">Empate</button></td><td><button onClick="adicionarDerrota()">Derrota</button></td></tr>`; */
