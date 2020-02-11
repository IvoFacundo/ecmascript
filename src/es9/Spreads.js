const obj = {
  name: 'Ivo',
  age: '22',
  country: 'AR'
}
let { name, ...all } = obj
console.log(name, all)

const obj1 = {
  name: 'Ivo',
  age: '22'
}
const obj2 = {
  ...obj1,
  country: 'AR'
}
console.log(obj2)
