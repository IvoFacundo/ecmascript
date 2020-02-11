const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve('Hello World!'), 1000)
      : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  try {
    const response = await helloWorld()
    console.log(`Fulfilled: ${response}`)
  } catch (err) {
    console.log(`${err}`)
  }
}

helloAsync()
