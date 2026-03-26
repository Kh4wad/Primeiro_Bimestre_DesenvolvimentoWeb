const funcao = function nomeFuncao(){
    console.log("Execucao a funcao")
}

funcao();

function soma(valor1,valor2){
return valor1 + valor2;
}

() => console("Teste funcao anonima");


const funcaoConsoleLog = (val1,val2) => {
  if(val1 == undefined || val2 == undefined){
    return 0;
  }
    return val1 + val2
}

function calculo(funcao1, funcao2){
return funcao1() + funcao2()
}
console.log(funcaoConsoleLog(1,3));
console.log(soma(3,4))
console.log((5,4) + (5,7))