// 该技术要解决什么问题-why
// 回调地狱

// 该技术是怎么解决的-how
// 该技术有什么有点-props
// 该技术有什么缺点-cors
// 如何解决这些缺点-more

function A(callback) {
  console.log("A");
  callback();
}

function B(callback) {
  console.log("B");
  callback();
}

function C(callback) {
  console.log("C");
  callback();
}

// function AA(){
//   console.log('A')
//   console.log('AA')
//   BB()
// }
// function BB(){
//   console.log('B')
//   console.log('BB')
//   CC()
// }
// function CC(){
//   console.log('C')
//   console.log('CC')
// }

// function fn(A){
//   console.log('start')
//   A(()=>{
//     console.log('AA')
//     B(()=>{
//       console.log('BB')
//       C(()=>{
//         console.log('CC')
//       })
//     })
//   })
// }

// fn(A)
// fn(AA)

function fn() {
  var promise = new Promise((resolve, reject) => {
    resolve();
  });
  return promise;
}
// 把 回调函数放进then 里了
fn()
  .then(() => {
    console.log('A')
    console.log("AA");
  })
  .then(()=>{
    console.log('C')
    console.log('BB')
  })
  .then(()=>{
    console.log('C')
    console.log('CC')
  });
