function newFunction(name, age, country) {
  var name = name || 'Ivo'
  var age = age || 22
  var country = country || 'AR'
  console.log(name, age, country)
}

//es6
function newFunction2(name = 'oscar', age = '22', country = 'AR') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('ivo', 19, 'MX')

let lorem =
  '1. lorem ipsum lorem ipsum lorem ipsum lorem ipsum\n' +
  'lorem ipsum lorem ipsum lorem ipsum'

//es6
let lorem2 = `2. lorem ipsumlorem ipsumlorem ipsum lorem ipsum
lorem ipsum lorem ipsum lorem ipsum lorem ipsum`
console.log(lorem)
console.log(lorem2)

const person = {
  name: 'ivo',
  age: 22,
  country: 'AR'
}
console.log(person.name, person.age)

//es6
let { name, age } = person
console.log(name, age)

//spread operator
let team1 = ['ivo', 'emanuel', 'alex']
let team2 = ['andres', 'esteban', 'mauro']

let education = ['fernando', ...team1, ...team2]
console.log(education)
