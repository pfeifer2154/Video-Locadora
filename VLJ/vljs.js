function converterDuracao(){
//cria referencia aos elementos da pagina
var inTitulo = document.getElementById("inTitulo");
var inDuracao = document.getElementById("inDuracao");
var outTitulo = document.getElementById("outTitulo");
var outResposta = document.getElementById("outResposta");

//obtem conteudos do campo de entrada
var titulo = inTitulo.value;
var duracao = Number(inDuracao.value);

//arredonda para baixo o resultado da divisao
var horas = Math.floor(duracao/60);
//Obtem o resto da divisao entre os numeros
var minutos = duracao%60; 

//altera os conteudos dos paragrafos de resposta
outTitulo.textContent = titulo;
outResposta.textContent = horas + " hora(s) e " + minutos + "minutos(s)";
}

//cria uma referencia ao elemento btconverter (botao)
var btConverter = document.getElementById("btConverter");
//registra um evento associado ao botao, para carregar uma funcao
btConverter.addEventListener("click", converterDuracao);
