setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

process.nextTick(()=>{
  console.log('nextTick')
})