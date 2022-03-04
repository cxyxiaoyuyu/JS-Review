let n = 0;
function _setInterval(callback, interval) {
  const res = { target: "" };
  function fn() {
    res.target = setTimeout(()=>{
      res.target = setTimeout(fn, interval);
      callback();      // 写在下面 方便清除定时器
    },interval)
  }
  fn()
  return res;
}

function _clearInterval(timer) {
  clearTimeout(timer.target);
}

const timer = _setInterval(function () {
  n++;
  console.log(n);

  if (n == 3) {
    _clearInterval(timer);
  }
}, 1000);
