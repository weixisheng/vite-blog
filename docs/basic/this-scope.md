## 经典Foo.getName

```javascript {32}
// 1.
function Foo () {
  getName = function () {
    console.log(1)
  }
  return this
}
// 2.
Foo.getName = function() {
  console.log(2)
}
// 3.
Foo.prototype.getName = function () {
  console.log(3)
}
// 4.
var getName = function () {
  console.log(4)
}
// 5.
function getName () {
  console.log(5)
}

// 函数Foo的静态方法
Foo.getName() // 2

// function getName函数声明提升，后面var getName覆盖，getName是4
getName() // 4

// return this是window，方法1中的getName覆盖全局4的getName
Foo().getName() // 1

getName() // 1

// new无参优先级比成员访问.低，所以先调用Foo.getName()
new Foo.getName() // 2

// new有参优先级跟成员访问.一样，从左到右：(new Foo()).getName()，所以调用Foo的实例，执行原型上的getName
new Foo().getName() // 3

// new ((new Foo()).getName())
new new Foo().getName() // 3
```

## 连续赋值

```js
let a = {n : 1} // a第一次被赋值，是一个引用类型值
let b = a // b被赋值为a,因此b就是对象{n: 1}

a.x = a = {n: 2}
/*
. 和 = 同时出现，会先执行 . 运算符，即a.x的a还是之前的那个a，先给a.x赋值，再给a赋值
1. a.x = {n: 2}，a => {n: 1, x: {n: 2}}
2. a = {n: 2} a => {n: 2}, b => {n: 1, x: {n: 2}}
*/

console.log(a.x) // undefined
console.log(b.x) // {n: 2}
```