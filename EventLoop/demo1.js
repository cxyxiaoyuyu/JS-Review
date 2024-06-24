async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end"); // 这里是一个微任务
}
async function async2() {
  console.log("async2");
}
console.log("script start");
async1();
console.log("script end");
