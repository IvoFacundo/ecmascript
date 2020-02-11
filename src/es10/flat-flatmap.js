// aplanador de arreglos
let array = [1, 2, 3, [1, 2, 3, [1, 4, 3]]]
console.log(array.flat(2))

// aplanador y mapeador de arreglos
let array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(item => [[item, item * 2]]))
