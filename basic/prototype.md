# 继承
ECMAScript实现继承主要是依靠原型链来实现的。

每个构造函数（F）都有一个原型对象（F.prototype），原型对象都包含一个指向构造函数的指针（```F.prototype.constructor == F```），而实例都包含一个指向原型对象的内部指针（```f.__proto__ == F.prototype```或者```F.[[Prototype]] == F.prototype```）。
```js
typeof Function.prototype === 'function'
function Foo() {}
typeof Foo.prototype === 'object'
```
## 原型链继承
实现的本质是重写原型对象，代之以一个新类型的实例。
```js{11}
function Sup() {
  this.sup = 'super'
}
Sup.prototype.log = function() {
  console.log(this.sup)
}

function Sub() {
  this.sub = 'sub'
}
Sub.prototype = new Sup()
let s = new Sub()
s.log() // 'super'
```
原型链的问题：
1. 引用类型值的原型属性会被所有实例共享
2. 创建子类型的实例时，不能向超类型的构造函数中传递参数
## 借用构造函数
也叫做伪造对象或经典继承。
在子类型构造函数的内部调用超类型构造函数。
```js{6}
function Sup(n) {
  this.sup = [1, 2, 3, 4]
  n && this.sup.push(n)
}
function Sub(n) {
  Sup.call(this, n)
}
let a = new Sub()
a.sup // [1, 2, 3, 4]
let s = new Sub(5)
s.sup // [1, 2, 3, 4, 5]
```
借用构造函数解决了原型链存在的问题，但有自身的问题：
1. 函数无法复用
## 组合继承
> <BaseTag type="success" text="推荐" size="mini" />原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。

参考创建对象模式例子：[组合原型模式和构造函数模式](./object.html#组合原型模式和构造函数模式)
```js{13,17}
function Program(name) {
  this.name = name
  this.attrs = ['directives', 'mixins']
}
Program.prototype = {
  constructor: Program,
  sayHello: function () {
    console.log('hello', this.name)
  }
}
function Vue(name, desc) {
  // 继承属性
  Program.call(this, name) // 第2次调用Program
  this.desc = desc
}
// 继承方法
Vue.prototype = new Program() // 第1次调用Program
Vue.prototype.constructor = Vue
Vue.prototype.printDesc = function() {
  console.log(this.desc)
}
let v = new Vue('Vue', '构建用户界面的渐进式框架')
let r = new Vue('React', '用于构建用户界面的js库')

v.attrs.push('template')
v.attrs // ['directives', 'mixins', 'template']
r.attrs // ['directives', 'mixins']
v.attrs == r.attrs // false
v.sayHello == r.sayHello // true
```
## 原型式继承
借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型，本质上是对传入的对象指执行了一次浅复制。
```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```
ES5通过```object.create()```规范化了原型式继承
## 寄生式继承
寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数，该
函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象。
```js
function createPro(o) {
  var clone = object(o)
  clone.sayHello = function() {
    console.log('hello')
  }
  return clone
}
```
## 寄生组合式继承
> <BaseTag type="success" text="引用类型最理想的继承方式" size="mini" />组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数：一次是在创建子类型原型的时候，另一次是
在子类型构造函数内部。
```js
Program.call(this, name) // 第2次调用Program

Vue.prototype = new Program() // 第1次调用Program
```
第1次调用```Program```时，``` Vue.prototype```会得到两个属性 ```name``` 和  ```attrs```，它们都是```Program```的实例属性，现在位于```Vue```的原型中；  
当调用```Vue```构造函数时，第2次调用```Program```，这次是在新对象上创建了实例属性 ```name``` 和  ```attrs```，屏蔽了第一次调用的原型中的同名属性。
::: tip 寄生组合式继承
即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
:::
基本模式实现代码：
```js
function inheritPrototype(sub, sup) {
  var pro = object(sup.prototype) // 创建对象,超类型原型副本
  pro.constructor = sub // 弥补改写原型丢失的constructor属性
  sub.prototype = pro //赋值给子类型
}
```
重构组合继承
```js{15}
function Program(name) {
  this.name = name
  this.attrs = ['directives', 'mixins']
}
Program.prototype = {
  constructor: Program,
  sayHello: function () {
    console.log('hello', this.name)
  }
}
function Vue(name, desc) {
  Program.call(this, name)
  this.desc = desc
}
inheritPrototype(Vue, Program)
Vue.prototype.printDesc = function() {
  console.log(this.desc)
}
```