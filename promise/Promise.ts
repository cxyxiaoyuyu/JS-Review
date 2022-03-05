class Promise2 {
  // succeed: any = null
  // fail: any = null
  callbacks: Array<Array<any>> = []
  state = 'pending'

  resolve(result: any) {
    if (this.state !== 'pending') return
    this.state = 'fulfilled'
    setTimeout(() => {
      this.callbacks.forEach((handle: Array<Array<any>>) => {
        if (typeof handle[0] === 'function') {
          (handle[0] as Function).call(undefined, result)
        }
      })
    })
  }
  reject(reason: any) {
    if (this.state !== 'pending') return
    this.state = 'rejected'
    setTimeout(() => {
      this.callbacks.forEach((handle: Array<Array<any>>) => {
        if (typeof handle[1] === 'function') {
          (handle[1] as Function).call(undefined, reason)
        }
      })
    })
  }
  constructor(fn: any) {
    if (typeof fn !== 'function') {
      throw new Error('只接受函数')
    }
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  then(succeed: any, fail?: any) {
    const handle: Array<any> = []
    if (typeof succeed === 'function') {
      handle[0] = succeed
    }
    if (typeof fail === 'function') {
      handle[1] = fail
    }
    handle[2] = new Promise2(() => { })
    this.callbacks.push(handle)

    return new Promise2(() => { })
  }
  resolveWith(x: any) {
    if (x instanceof Promise2) {
      x.then(
        (result: any) => {
          this.resolve(result)
        }, // setTimeout(()=>{})
        (reason: any) => {
          this.reject(reason)
        }
      )
    }else{
      this.resolve(x) 
    }
  }
}

export default Promise2