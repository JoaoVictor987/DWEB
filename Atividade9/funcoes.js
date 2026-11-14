// ---------- As 5 funções ----------

// 1) Recebe 3 números e retorna o maior
function maiorDeTres(a, b, c) {
  var maior = a;
  if (b > maior) maior = b;
  if (c > maior) maior = c;
  return maior;
}

// 2) Recebe 3 números e retorna em ordem crescente
function ordemCrescente(a, b, c) {
  var temp;
  if (a > b) { temp = a; a = b; b = temp; }
  if (b > c) { temp = b; b = c; c = temp; }
  if (a > b) { temp = a; a = b; b = temp; }
  return [a, b, c];
}

// 3) Recebe string e retorna se é palíndromo
function ehPalindromo(texto) {
  // ignora maiúsculas, espaços e pontuação
  var limpo = texto.toLowerCase().replace(/[^a-z0-9à-ú]/g, '');
  var invertido = limpo.split('').reverse().join('');
  return limpo === invertido;
}

// 4) Recebe 2 palavras: erro se vazias/indefinidas, subconjunto se uma está dentro da outra
function verificarSubconjunto(p1, p2) {
  if (p1 === undefined || p2 === undefined || p1 === null || p2 === null ||
      p1.trim() === '' || p2.trim() === '') {
    return 'Erro: uma ou as duas palavras estão vazias ou indefinidas.';
  }
  if (p1.includes(p2) || p2.includes(p1)) {
    return 'Subconjunto: uma das palavras está contida na outra.';
  }
  return 'Nenhuma das palavras é subconjunto da outra.';
}

// 5) Recebe uma data (dd/mm/aaaa) e devolve o dia da semana
function diaDaSemana(dataTexto) {
  var partes = dataTexto.split('/');
  var data = new Date(partes[2], partes[1] - 1, partes[0]);
  if (isNaN(data.getTime())) {
    return 'Data inválida.';
  }
  var dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
              'quinta-feira', 'sexta-feira', 'sábado'];
  return dias[data.getDay()];
}

// ---------- Funções chamadas pelos botões ----------

function botao1() {
  var a = parseFloat(prompt('Primeiro número:'));
  var b = parseFloat(prompt('Segundo número:'));
  var c = parseFloat(prompt('Terceiro número:'));
  alert('O maior é: ' + maiorDeTres(a, b, c));
}

function botao2() {
  var a = parseFloat(prompt('Primeiro número:'));
  var b = parseFloat(prompt('Segundo número:'));
  var c = parseFloat(prompt('Terceiro número:'));
  alert('Em ordem crescente: ' + ordemCrescente(a, b, c).join(', '));
}

function botao3() {
  var texto = prompt('Digite uma palavra ou frase:');
  if (ehPalindromo(texto)) {
    alert('É palíndromo!');
  } else {
    alert('Não é palíndromo.');
  }
}

function botao4() {
  var p1 = prompt('Primeira palavra:');
  var p2 = prompt('Segunda palavra:');
  alert(verificarSubconjunto(p1, p2));
}

function botao5() {
  var data = prompt('Digite uma data (dd/mm/aaaa):');
  alert('Dia da semana: ' + diaDaSemana(data));
}
