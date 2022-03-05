// 为什么不能用res.push
// 为什么要加count 
// 值得深思 妙啊！！！
Promise._allSettled = function(promises){
  return new Promise((resolve,reject)=>{
    let len = promises.length
    let count = 0
    const res = [] 

    if(len === 0){
      resolve([]) 
    }

    promises.forEach((promise,i)=>{
      promise.then(result=>{
        res[i]={
          status: 'fulfilled',
          value: result 
        } 
        count++
        if(count === len){
          resolve(res) 
        } 
      }).catch(reason=>{
        res[i]= {
          status: 'rejected',
          value: reason 
        } 
        count++
        if(count === len){
          resolve(res) 
        }
      })      
    })
  })
}
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 3000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 1000);
});

const p4 = new Promise((_, reject) => {
  setTimeout(() => reject("err4"));
});
const p11 = Promise._allSettled([p1, p2, p3]).then(console.log).catch(console.log);

// 2. 有一个Promise失败了
const p12 = Promise._allSettled([ p1, p2, p4 ])
	.then(console.log)
      .catch(console.log) // err4

// 3. 有两个Promise失败了，可以看到最终输出的是err4，第一个失败的返回值
const p13 = Promise._allSettled([ p1, p4, Promise.reject('123')])
	.then(console.log)
      .catch(console.log) // 123

