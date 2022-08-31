'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  
  let array = [];
  let i = 2;

  if(num/num == 1 ){
			array.push(1)  
	}
  
  while(num > 1){
    	while(num % i === 0){
        	num = num / i
          array.push(i)
      }
      i++;
  }
  return array;
  
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let desorden = true;
  while(desorden){
    desorden = false;
    array.map((v,i)=>{
      if(array[i]>array[i+1]){
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            desorden = true;
        }
    })

  }
	return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  array.map((v,i)=>{
    
    let pos = i;//2
    let tmp = array[i];//6
    
     for(pos >= 1; tmp < array[pos-1]; pos--){
       	array[pos] = array[pos-1];
      	array[pos-1] = tmp;
     }
 
  })
 	return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  array.map((v,i)=>{
    
    let min = i ;//0
    let j;
    let tmp;
    //min=1
    for(j=i+1; j<array.length; j++){
      if(array[j] < array[min]){
      	min = j
    		
      }
    }
    tmp = array[i];
    array[i] = array[min];
    array[min] = tmp;
    // return array
 		
  })
 	return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
