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

var LRUCache = function(capacity) {
    this.array = []
    this.capacity = capacity
}
LRUCache.prototype.get = function(key) {
    var index = this.array.findIndex( value=> value.key === key ) 
    if(index > -1){
        var value = this.array[index].value
        this.array.push(this.array[index])
        this.array.splice(index,1)
        return value
    }else{
        return -1
    }
}
LRUCache.prototype.put = function(key, value) {
    var index = this.array.findIndex( value=> value.key === key ) 
    if(index > -1){
        this.array.splice(index,1)
    }else{
        if(this.array.length === this.capacity){
            this.array.shift()
        }
    }
    this.array.push({key,value})
}