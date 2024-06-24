console.log('script start 1');
setTimeout(function() {
  console.log('setTimeout1 5');
  Promise.resolve().then(()=>{console.log('push to microTask 6')})
}, 0);
setTimeout(function() {
  console.log('setTimeout2 7');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1 3');
  setTimeout(()=>{
    console.log('push to macroTask 8')
  })
}).then(function() {
  console.log('promise2 4');
});
console.log('script end 2');
