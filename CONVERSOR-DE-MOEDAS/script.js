function converter() {
  const text = {
    dolar: document.getElementById("res-dolar"),
    euro: document.getElementById("res-euro"),
  };
  const valores = {
    v1: parseFloat(document.getElementById("valor1").value),
  };
  const valorDolar = valores.v1 * 5;
  const valorEuro = valores.v1 * 5.55;
  text.dolar.innerHTML = `O valor atual de: $R${valores.v1} em dolar é: US$${valorDolar}`;
  text.euro.innerHTML = `O valor atual de: $R${valores.v1} em euro é: US$${valorEuro}`;
}
