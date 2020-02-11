let name = 'ivo'
let age = 22

const obj = { name: name, age: age }
//es6
const obj2 = { name, age }
console.log(obj2)

// arrow functions
const names = [
  { name: 'Ivo', age: 22 },
  { name: 'Facundo', age: 30 },
  { name: 'Facundo', age: 55 },
  { name: 'Facundo', age: 25 }
]

// let listOfNames = names.map(item => {
//   return item.name
// })

let listOfNames = names.map(item => item.name)
console.log(listOfNames)

let filteredPeople = names.filter(item => {
  return item.age <= 25
})
console.log(filteredPeople)
