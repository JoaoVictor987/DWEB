const name = prompt("insira nome: ");
let n1 = prompt("insira primeiro número: ");
let n2 = prompt("insira segundo número: ");
let n3 = prompt("insira terceiro número: ");
let n4 = prompt("insira quarto número: ");
n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
let Media = (n1+n2+n3+n4)/4;
Media.toFixed(2);
alert(Media);

