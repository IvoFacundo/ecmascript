const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Ok!!')
    } else {
      reject('Ups!!')
    }
  })
}

helloPromise()
  .then(response => console.log(`Success: ${response}`))
  .catch(err => console.log(`Error: ${err}`))
