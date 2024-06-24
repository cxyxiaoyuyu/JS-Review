// Timer
setTimeout(() => {
  console.log("Timer phase 7");
  process.nextTick(() => {
    console.log("Timer phase - nextTick 8");
  });
  Promise.resolve().then(() => {
    console.log("Timer phase - promise 9");
  });
});

// Check
setImmediate(() => {
  console.log("Check phase 4");
  process.nextTick(() => {
    console.log("Check phase - nextTick 5");
  });
  Promise.resolve().then(() => {
    console.log("Check phase - promise 6");
  });
});

// 主线程任务
console.log("执行js 1");
process.nextTick(() => {
  console.log("nextTick 3");
});
Promise.resolve().then(() => {
  console.log("promise 2");
});
