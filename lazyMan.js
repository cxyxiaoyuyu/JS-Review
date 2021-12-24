
// LazyMan('Hank');
// 输出:
// Hi! This is Hank!

// LazyMan('Hank').sleep(3).eat('dinner')
// 输出:
// Hi! This is Hank!
// //等待3秒..
// Wake up after 3
// Eat dinner~

// LazyMan('Hank').eat('dinner').eat('supper')
// 输出:
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan('Hank').sleepFirst(2).eat('dinner').sleep(3).eat('supper')
// 输出:
// //等待2秒..
// Wake up after 2
// Hi This is Hank!
// Eat dinner~
// //等待3秒..
// Wake up after 2
// Eat supper~

function LazyMan(name) {
  const array = []
  const next = () => {
    const fn = array.shift()
    fn && fn()
  }
  array.push(
    function () {
      console.log('Hi This is' + name + '!')
      next()
    }
  )
  setTimeout(next)  
  const obj = {
    eat(content) {
      array.push(
        function () {
          console.log('Eat ' + content + '~')
          next()
        }
      )
      return obj
    },
    sleep(time) {
      array.push(
        function () {
          setTimeout(() => {
            console.log('Wake up after ' + time)
            next()
          }, time * 1000)
        }
      )
      return obj
    },
    sleepFirst(time) {
      array.unshift(
        function () {
          setTimeout(() => {
            console.log('Wake up after ' + time)
            next()
          }, time * 1000)

        }
      )
      return obj
    }
  }
  return obj
}

// LazyMan('Hank')
// LazyMan('Hank').sleep(3).eat('dinner')
// LazyMan('Hank').eat('dinner').eat('supper')
LazyMan('Hank').sleepFirst(2).eat('dinner').sleep(3).eat('supper')
