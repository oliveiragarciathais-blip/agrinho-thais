function calcularImpacto() {

  // pega os valores digitados pelo usuário
  let combustivel = Number(document.getElementById("combustivel").value);
  let fertilizante = Number(document.getElementById("fertilizante").value);

  // cálculo simples do impacto ambiental (modelo escolar)
  let impacto = (combustivel * 2.5) + (fertilizante * 1.8);

  let mensagem = "";
  let cor = "";

  // define nível de impacto
  if (impacto < 50) {
    mensagem = "🌱 Baixo impacto ambiental! Boa prática sustentável.";
    cor = "#2e7d32";
  } 
  else if (impacto < 120) {
    mensagem = "⚠ Impacto médio. Tente reduzir o uso de recursos.";
    cor = "#f9c74f";
  } 
  else {
    mensagem = "🚨 Alto impacto ambiental! É importante melhorar as práticas.";
    cor = "#c62828";
  }

  // mostra o resultado na tela
  document.getElementById("resultado").innerHTML =
    "Impacto estimado: " + impacto.toFixed(2) + "<br>" + mensagem;

  // cria uma "barra visual" simples (mini gráfico)
  document.getElementById("grafico").innerHTML = `
    <div style="
      width: ${Math.min(impacto, 200)}%;
      height: 20px;
      background: ${cor};
      border-radius: 5px;
      margin-top: 10px;
      transition: 0.5s;
    "></div>
  `;
}