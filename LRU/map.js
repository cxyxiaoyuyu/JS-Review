// 应用 => LRU缓存机制  Least Recently Used  最近很少使用
// * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// * 写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。
// * 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
// LRUCache cache = new LRUCache( 2 );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1); // 返回 1
// cache.put(3, 3); // 该操作会使得密钥 2 作废
// cache.get(2); // 返回 -1 (未找到)
// cache.put(4, 4); // 该操作会使得密钥 1 作废
// cache.get(1); // 返回 -1 (未找到)
// cache.get(3); // 返回 3
// cache.get(4); // 返回 4

function LRUCache(capacity) {
  this.map = new Map();
  this.capacity = capacity;
}

LRUCache.prototype.get = function () {
  let value = this.map.get(key);
  if (value) {
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  } else {
    return -1;
  }
};

LRUCache.prototype.push = function () {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);  // 删除最前面的那个
  }
};
