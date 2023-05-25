# this对象
this 对象是在运行时基于函数的执行环境绑定的：在全局函数中， this 等于 window，而当函数被作为某个对象的方法调用时， this 等于那个对象。
## 函数调用、匿名函数
指向全局对象
```js
function test() {
  this.x = 1
  console.log(x)
}
test()
console.log(x)// 1
```
## 对象方法
指向上一级对象
```js
var name = 'global this'
let o = {
  name: 'object this',
  sayName: function() {
    console.log(this.name)
  }
}
o.sayName() // object this
```
## 构造函数
指向实例
```js
function Test() {
  this.x = 3
}
let test = new Test()
console.log(test.x) // 3
```
## call/apply/bind
切换函数执行的上下文环境（context），即 this 绑定的对象。
区别：call、apply绑定立即执行，call参数分别传，apply参数以数组形式传；bind绑定之后并不会立即执行，需要再调用一次
```js
let a = {
  x: 1,
  log: function(y) {
    console.log(this.x, y)
  }
}

let b = {
  x: 11,
  log: function(y) {
    console.log(this.x, y)
  }
}

a.log(2) // 1 2
a.log.call(b, 2) // 11 2
a.log.apply(b, [2]) // 11 2
a.log.bind(b, 2)() // 11 2
```

自定义实现请参考：[手写模拟call、apply、bind](./custom-function.html)

## 箭头函数
1. 函数体内的 ```this```对象，指向的是定义时所在的对象，而不是使用时所在的对象
2. 不可以当作构造函数，原因见第5
3. 不可以使用```arguments```对象，可以使用```rest```参数代替
4. 不可以使用```yield```命令，因此箭头函数不能用作 ```Generator``` 函数
5. 箭头函数根本没有自己的this，导致内部的this就是外层代码块的this