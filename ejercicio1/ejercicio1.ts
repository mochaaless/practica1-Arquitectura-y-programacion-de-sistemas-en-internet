//EJERCICIO1

function ordenacion(arr : number [], n : number) {
    if (n <= 1) {
      return;
    }
  
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  
    ordenacion(arr, n - 1);
  }
  
let array = [64, 34, 25, 12, 22, 11, 90];
ordenacion(array, array.length);
  
console.log("Array ordenado: " + array);
  