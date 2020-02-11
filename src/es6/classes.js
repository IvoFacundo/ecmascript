class Calculator {
  constructor() {
    this.a = 0
    this.b = 0
  }
  plus(a, b) {
    this.a = a
    this.b = b
    return this.a + this.b
  }
}

const suma = new Calculator()
console.log(`la suma es: ${suma.plus(2, 2)}`)
