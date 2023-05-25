# 30s理解一些常用JS代码片段
::: tip Short code snippets for all your development needs
[30 seconds of code](https://www.30secondsofcode.org/js/p/1)
:::
## promise柯里化
```js
const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  )

const delay = promisify((d, cb) => setTimeout(cb, d))
delay(1000).then(() => console.log('promisify')) // 1s后输出promisify  
```

## deepFlatten 深度平铺数组
```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

deepFlatten([1, [2], [[3], 4], 5]) // [1, 2, 3, 4, 5]
```
## flatten 平铺数组
```js
const flatten = (arr, depth = 1) =>
  depth != 1
    ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.reduce((a, v) => a.concat(v), [])

flatten([1, [2], [[3], 4], 5]) // [1, 2, [3], 4, 5]
flatten([1, [2], [[3], 4], 5], 2) // [1, 2, 3, 4, 5]
```

## distinctValuesOfArray 数组去重
```js
const distinctValuesOfArray = arr => [...new Set(arr)]
// or
const distinctValuesOfArray = arr => Array.from(new Set(arr))

distinctValuesOfArray([1, 1, 2, 3]) // [1, 2, 3]
```

## groupBy 数组分组
```js
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})

groupBy([6.1, 4.2, 6.3], Math.floor) // {4: [4], 6: [6.1, 6.3]}
```

## set操作
- 数组并集
```js
const union = (a, b) => Array.from(new Set([...a, ...b]))
```
- 数组交集
```js
const intersection = (a, b) => {
  const s = new Set(b)
  return a.filter(x => s.has(x))
}
const similarity = (a, b) => a.filter(v => b.includes(v))
```
- 数组差集
```js
const difference = (a, b) => {
  const s = new Set(b)
  return a.filter(x => !s.has(x))
}
```
```js
let a = [1, 2, 3]
let b = [2, 3, 4]
union(a, b) // [1, 2, 3, 4]
intersection(a, b) // [2, 3]
difference(a, b) // [1]
```

## shuffle 随机排序数组
```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

shuffle([7, 4, 18, 2, 3, 6])
```

## scroll2Top 回到顶部
```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

## indexOf 比较简化
利用位运算符 ```~```，对结果取反操作
```js
~-1 // -( -1 + 1 ) = 0
~0 // -( 0 + 1 ) = -1
~1 // -( 1 + 1 ) = -2
```
一般```indexOf```判断值是否存在都是与```-1```做比较，于是可以简化如下判断：
```js
const arr = [1, 2, 3]
// 存在，等效于 > -1
~arr.indexOf(1) // -1
!!~arr.indexOf(1) // true

// 不存在，等效于 === -1
!~arr.indexOf(1)
```

## initializeArrayWithRange 初始化特定范围数组
包含 ```end``` 就加+1
```js
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) })
  .map((v, i) => i * step + start)
```