'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arrNum = num.split('').reverse();
  let sumaNum = 0;
  for(let i in arrNum){
      sumaNum = sumaNum + arrNum[i] * Math.pow(2,i);
  }
  return sumaNum;
 
}

function DecimalABinario(num) {
  // tu codigo aca
  let numBinario = [];
  while(num > 0){
    numBinario.push(num % 2);
    num = Math.trunc(num / 2);
  }
  return numBinario.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}