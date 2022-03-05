import * as chai from 'chai'
const assert = chai.assert
// import {assert} from 'chai'
import Promise2 from './Promise'
import * as sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

describe("promise", () => {
  it("是一个类", () => {
    assert.isFunction(Promise2)
    assert.isObject(Promise2.prototype)
  })
  it("必须接受一个函数", () => {
    assert.throw(() => {
      //@ts-ignore
      new Promise2()
    })
  })
  it('接收的函数立即执行', () => {
    const fn = sinon.fake()
    const promise = new Promise2(fn)
    assert(fn.called)
  })
  it('函数有两个函数resolve,reject', () => {
    const promise = new Promise2((resolve: any, reject: any) => {
      assert.isFunction(resolve)
      assert.isFunction(reject)
    })
  })
  it("返回的实例有then方法", () => {
    const promise = new Promise2(() => { })
    assert.isFunction(promise.then)
  })
  it("then(success)中的success 会在resolve被调用的时候执行", (done) => {
    const success = sinon.fake()
    const promise = new Promise2((resolve: Function, reject: Function) => {
      assert.isFalse(success.called)
      resolve()
      setTimeout(() => {
        assert(success.called)
        done()
      })
    })
    promise.then(success, () => { })
  })
  it("then(null,fail)中的fail 会在reject被调用的时候执行", (done) => {
    const fail = sinon.fake()
    const promise = new Promise2((resolve: Function, reject: Function) => {
      assert.isFalse(fail.called)
      reject()
      setTimeout(() => {
        assert(fail.called)
        done()
      })
    })
    promise.then(null, fail)
  })
  it("then(x,y) x y 不是函数也不报错", () => {
    const promise = new Promise2((resolve: Function) => {
      resolve()
    })
    promise.then(false, null)
  })
  it("then(x,y) x 和 success 的参数一致", (done) => {
    const success = sinon.fake()
    const promise = new Promise2((resolve: Function, reject: Function) => {
      assert.isFalse(success.called)
      resolve(123)
      setTimeout(() => {
        assert(success.called)
        assert(success.calledWith(123))
        done()
      })
    })
    promise.then(success, () => { })
  })
  it("then(x,y) y 和 fail 的参数一致", (done) => {
    const fail = sinon.fake()
    const promise = new Promise2((resolve: Function, reject: Function) => {
      assert.isFalse(fail.called)
      reject(123)
      setTimeout(() => {
        assert(fail.called)
        assert(fail.calledWith(123))
        done()
      })
    })
    promise.then(null, fail)
  })
  it("succeed 只调用一次", (done) => {
    const succeed = sinon.fake()
    const promise = new Promise2((resolve: Function) => {
      resolve()
      resolve()
      setTimeout(() => {
        assert(succeed.calledOnce)
        done()
      })
    })
    promise.then(succeed, null)
  })
  it("在自己代码执行完之前 不得调用succeed", (done) => {
    const succeed = sinon.fake()
    const promise = new Promise2((resolve: Function) => {
      resolve()
      console.log(1)
    })
    promise.then(succeed, null)
    assert.isFalse(succeed.called)
    setTimeout(() => {
      assert(succeed.called)
      done()
    })
  })
  it("succeed 的 this 是undefined", () => {
    const promise = new Promise2((resolve: Function) => {
      resolve()
    })
    promise.then(function () {  // 这里不能用箭头函数测试
      // @ts-ignore
      assert(this === undefined)
    })
  })
  it("then 可以在同一个promise中多次调用 并且按顺序执行", (done) => {
    const callback1 = sinon.fake()
    const callback2 = sinon.fake()
    const callback3 = sinon.fake()
    const promise = new Promise2((resolve: Function) => {
      resolve()
    })
    promise.then(callback1)
    promise.then(callback2)
    promise.then(callback3)
    setTimeout(() => {
      assert(callback1.called)
      assert(callback2.called)
      assert(callback3.called)
      done()
    })
  })
  it("then 的返回值是一个promise", () => {
    const promise = new Promise2((resolve: Function) => {
      resolve()
    })
    const promise2 = promise.then(()=>{})
    //@ts-ignore
    assert(promise2 instanceof Promise2)
  })
  it("上一个success 的返回值传给下一个success的参数",()=>{

  })
})