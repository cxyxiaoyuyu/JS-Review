function EventHub() {
  const callbacks = {}
  this.on = function (eventName, fn) {
    callbacks[eventName] = callbacks[eventName] || []
    callbacks[eventName].push(fn)
  }
  this.once = function (eventName,fn) {
    // callbacks[eventName] = callbacks[eventName] || []
    // callbacks[eventName].push(fn)
    // fn.once = true

    const _this = this
    function xxx(){
      _this.off(eventName,xxx) 
      fn(...arguments)
    }
    // xxx.fn = fn
    this.on(eventName,xxx)
  }
  this.emit = function (eventName, param) {
    const fnList = callbacks[eventName]
    if (fnList && fnList.length) {
      for (let i = 0; i < fnList.length; i++) {
        const fn = fnList[i]
        fn(param)
        if(fn.once){
          this.off(eventName,fn) 
        }
      }
    }
  }
  this.off = function (eventName,fn) {
    const fnList = callbacks[eventName]
    if(fnList){
      const index = fnList.indexOf(fn)
      if(index > -1){
        fnList.splice(index,1) 
      }
    }
  }
}

const bus = new EventHub()

// bus.on('click', function (name) { console.log('click ' + name) })
// bus.emit('click','catalina')

// const fn = function(){ console.log('该事件将被取消')}
// bus.on('aaa',fn)
// bus.emit('aaa')
// bus.off('aaa',fn)
// bus.emit('aaa')

bus.once('bbb',function(name){console.log('该事件只执行一次'+name)})
bus.emit('bbb','once')
bus.emit('bbb','once')
bus.emit('bbb','once')