var vitor = {
  nome: "vitor",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};

var jogadores = [vitor];

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function calcularPontosDerrota(jogador) {
  var pontos = jogador.pontos - 3;
  return pontos;
}

function exibir(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += `<tr><td>${jogadores[i].nome}</td><td>${jogadores[i].vitorias}</td><td>${jogadores[i].empates}</td><td>${jogadores[i].derrotas}</td><td>${jogadores[i].pontos}</td><td><button onClick="adicionarVitoria(${i})">Vitória</button></td><td><button onClick="adicionarEmpate(${i})">Empate</button></td><td><button onClick="adicionarDerrota(${i})">Derrota</button></td></tr>`;
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibir(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibir(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  exibir(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontosDerrota(jogador);
  exibir(jogadores);
}

function add() {
  var dados = {
    nome: document.getElementById("input").value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };
  jogadores.push(dados);
  exibir(jogadores);
}

function limpar() {
  jogadores = [];
  exibir(jogadores);
}
