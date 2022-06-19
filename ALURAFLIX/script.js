function add() {
  const filmes = document.getElementById("lista");
  const link = document.getElementById("input").value;

  filmes.innerHTML =
    filmes.innerHTML +
    "<li>" +
    "<h1>" +
    "" +
    "</h1>" +
    '<img src="' +
    link +
    '">' +
    "</li>";
}

function limpar() {
  document.getElementById("input").value = "";
}
