// // 题目1 
// async function async1(){
//    console.log('async1 start');
//     await async2();
//     console.log('async1 end')
// }
// async function async2(){
//     console.log('async2')
// }
// console.log('script start');
// async1();
// console.log('script end')

// 题目2 我不是很理解
Promise.resolve().then(()=>{
  console.log(0)
  return Promise.resolve(4)
}).then(res => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1)
}).then(()=>{
  console.log(2)
}).then(()=>{
  console.log(3)
}).then(()=>{
  console.log(5)
}).then(()=>{
  console.log(6)
})

// 题目3 
// setTimeout(_ => console.log(4))  // 宏任务

// new Promise(resolve => {
//   resolve()
//   console.log(1)  // 这里的回调是立即执行的
// }).then(_ => {
//   console.log(3)  // 微任务
// })

// console.log(2)   

// 题目4
// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
//   Promise.resolve().then(_ => {
//     console.log('before timeout')
//   }).then(_ => {
//     console.log('push to microTask')
//     Promise.resolve().then(_ => {
//       console.log('also before timeout')
//     })
//   })
// })

// console.log(2)

// 题目5  这题容易错哦
// console.log('script start');
// setTimeout(function() {
//   console.log('setTimeout1');
//   Promise.resolve().then(()=>{console.log('push to microTask')})
// }, 0);
// setTimeout(function() {
//   console.log('setTimeout2');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
//   setTimeout(()=>{
//     console.log('push to macroTask')
//   })
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');



// 题目6  与题目1 有相似之处
// console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end') 
// }
// async1()

// setTimeout(function() {
//   console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function() {
//     console.log('promise1')
//   })
//   .then(function() {
//     console.log('promise2')
//   })

// console.log('script end')

