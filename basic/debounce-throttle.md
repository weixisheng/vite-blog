## 防抖 debounce
### 介绍
事件触发一段时间后才会调用，频繁触发只会在最后一次执行。一般使用在搜索联想
### 实现
```js
/**
 * @desc 函数防抖
 * @param {Function} callback 回调函数
 * @param {Number} wait 延迟毫秒数
 * @param {Boolean} immediate 立即执行
 * 
 * @return {Function}
 */
const debounce = (callback, wait = 300, immediate = false) => {
  let timer
  return function () {
    let ctx = this
    let args = arguments

    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) {
        callback.apply(ctx, args)
      }
    } else {
      timer = setTimeout(() => {
        callback.apply(ctx, args)
      }, wait)
    }
  }
}
```
## 节流 throttle
### 介绍
连续触发事件，但在一段时间内只触发一次。一般使用在resize、touchmove，无限加载等。

防止表单提交按钮被多次触发，我们应该选择使用节流而不是防抖方案，秒杀抢购等业务场景。
### 实现
```js
/**
 * @desc 函数节流 时间戳版本
 * @param callback 函数
 * @param wait 延迟执行毫秒数
 */
const throttle = (callback, wait) => {
  let prev = Date.now()
  return function () {
    let context = this
    let args = arguments
    let now = Date.now()

    if (now - prev >= wait) {
      callback.apply(context, args)
      prev = now
    }
  }
}
```

```js
/**
 * @desc 函数节流 定时器版本
 * @param callback 函数
 * @param wait 延迟执行毫秒数
 */
const throttle = (callback, wait) => {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        callback.apply(context, args)
        timer = null
      }, wait)
    }
  }
}
```

```js
/**
 * @desc 函数节流 结合
 * @param {Function} callback 回调函数
 * @param {Number} wait 延迟毫秒数
 * @param {Boolean} immediate 是否立即执行
 */
const throttle = (callback, wait, immediate = false) => {
  let flag = true
    let timer = null
    let context = this
    if (immediate) {
      return function () {
        let args = arguments
        if (flag) {
          callback.apply(context, args)
          flag = false
          timer = setTimeout(() => {
            flag = true
          }, wait)
        }
      }
    }
    return function () {
      let args = arguments
      if (flag) {
        flag = false
        timer = setTimeout(() => {
          callback.apply(context, args)
          flag = true
        }, wait)
      }
    }
}
```