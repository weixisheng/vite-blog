# 为什么0.1+0.2!= 0.3？
## 首先从一个结果认知
```js
0.1 + 0.2 === 0.3 // false
```
虽然在正常的数学逻辑中，0.1+0.2是等于0.3，但是在遵循```IEEE 754规范的语言```中都不会如此。
实际在运行中，浮点数的相加并不精确：
```js
0.1 + 0.2 = 0.30000000000000004
```

参考[IEEE 754浮点数标准详解](http://c.biancheng.net/view/314.html)

## 解决
通常是设置一个误差范围，```Number.EPSILON```等于<img src="/img/number1.png" style="vertical-align:bottom">，这个值非常小，只要如下判断成立即可：

```js
(0.1 + 0.2) - 0.3 < Number.EPSILON
```

在一些不兼容 ```Number.EPSILON``` 机型，可以手写一个polyfill：

```js
Number.EPSILON = (function() {   //解决兼容性问题
  return Number.EPSILON ? Number.EPSILON : Math.pow(2, -52)
})()

function numberEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON
}

numberEqual(0.1 + 0.2, 0.3) // true
```

## 拓展
- 保留两位小数
```js
function round(a) {
  // 如果一个数有多位小数，返回最多两位小数
  // 但是本来就没有小数，那就返回该数
  return Math.round(a * 100) / 100
}

round(0.212) // 0.21

round(11) // 11
```