import arr from './data.js'

function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
console.log(unique(arr))

// 不能去重NaN  arr.indexOf(NaN) => -1 找不到NaN