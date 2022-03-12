// 方式一  利用map 判重 arr2 存结果数组
// import arr from './data.js'
// const arr2 = []
// const map = new Map()

// for(let a of arr){
//     if(!map.has(a)){
//         map.set(a,a)
//         arr2.push(a)
//     }
// }
// console.log(arr2)


// 方式二 map判重 map.keys()
import arr from './data.js'
const map = new Map

for(let a of arr){
    if(!map.has(a)){
        map.set(a,a)
    }
}
console.log(Array.from(map.keys()))