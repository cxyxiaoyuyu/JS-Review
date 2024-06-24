// 输入框输入，请求后台接口，第一个接口返回的信息可能比较慢，到第二次调用后信息已经返回了，
// 前一条数据才出来，如何避免页面被第一个接口返回的信息覆盖？

const promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('answer 1') 
  },3000)
})
const promise2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('answer 2') 
  },1000)
})

let answer = '' 
const result = []

promise1.then((res)=>{
  // answer =  res
  result.push({id: 1, res})
}).then(()=>{
  console.log(answer,1)
})

promise2.then((res)=>{
  // answer = res
  result.push({id: 2, res})
  console.log(answer,2)
})
