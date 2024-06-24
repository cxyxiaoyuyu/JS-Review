setTimeout((_) => console.log(4)); // 宏任务

new Promise((resolve) => {
  resolve();
  console.log(1); // 这里的回调是立即执行的
}).then((_) => {
  console.log(3); // 微任务
});

console.log(2);
