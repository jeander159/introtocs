'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let arrayLeft = [];
  let arrayRight = [];
  let arrayEqual = [];
 	let pivot = array[Math.floor(Math.random()*(array.length))];

  for(let i = 0; i < array.length; i++){
    if(array[i] > pivot){
      	arrayRight.push(array[i])
    }else if(array[i] < pivot){
      	arrayLeft.push(array[i])
    }else{
      	arrayEqual.push(array[i])
    }
  }

	return quickSort(arrayLeft).concat(arrayEqual).concat(quickSort(arrayRight))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length<2) return array;
  	let arrayLeft = array.slice(0,array.length/2)
  	let arrayRigth = array.slice(array.length/2)
    return merge(mergeSort(arrayLeft),mergeSort(arrayRigth))

}
function merge(left, right){
  let arrayAux = [];
  let k = 0;
  let x = 0;
  let y = 0;
	
  while(x < left.length && y < right.length){
    if(left[x] < right[y]){
      	arrayAux.push(left[x])
		  	x++
    }else{
      	arrayAux.push(right[y])
      	y++
    }
  }
  return arrayAux.concat(left.slice(x)).concat(right.slice(y))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
