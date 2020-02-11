// finally()
// se ejecuta al final sin importar si obtuvo una respuesta con exito o un error
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('HelloWorld'), 1000)
      : reject(new Error('Test error'))
  })
}

helloWorld()
  .then(response => console.log(response))
  .catch(err => console.error(err))
  .finally(() => console.log('Finalizado!'))
