setTimeout(_ => console.log(4))

new Promise(resolve => {
  resolve()
  console.log(1)
}).then(_ => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log('before timeout')
  }).then(_ => {
    console.log('push to microTask')
    Promise.resolve().then(_ => {
      console.log('also before timeout')
    })
  })
})

console.log(2)