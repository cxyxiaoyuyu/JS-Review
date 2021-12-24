function _instanceof(A, B) {
  // 如果是基本类型 直接返回false
  if (typeof A !== 'object' || A === null) return false;
  let _P = A.__proto__
  let P = B.prototype
  while (_P) {
    if (_P === P) {
      return true
    }
    _P = _P.__proto__
  }
  return false
}

console.log(_instanceof([1, 2], Array))
console.log(_instanceof([1, 2], Object))
console.log(_instanceof(123, Number))
console.log(_instanceof(123, String))