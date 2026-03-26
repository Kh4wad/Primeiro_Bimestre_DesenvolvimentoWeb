const valorConta = 100;
const porcentualGorjeta = 15;

let valorGorjeta = 0;
let valorTotalApagar = 0;

valorGorjeta = (valorConta * (porcentualGorjeta / 100));
valorTotalApagar = valorConta + valorGorjeta;

console.log(
"Valor da Conta:","R$"+ valorConta.toFixed(2).replace(",",".")+",\n",
"Gorjeta ("+porcentualGorjeta+"%):","R$"+ porcentualGorjeta.toFixed(2).replace(",",".")+",\n",
"Total a pagar:","R$"+valorTotalApagar.toFixed(2).replace(",",".")
);
