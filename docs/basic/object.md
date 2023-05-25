# 创建对象
## 工厂模式
以函数来封装特定接口实现创建对象。可以多次调用返回一些属性的对象，但是无法识别对象类型。
```js
function createProgram(name, desc) {
  let obj = {}
  obj.name = name
  obj.desc = desc
  obj.sayHello = function() {
    console.log('hello', this.name)
  }
  return obj
}

let v = createProgram('Vue', '构建用户界面的渐进式框架')
```

## 构造函数模式
```js
function Program(name, desc) {
  this.name = name
  this.desc = desc
  this.sayHello = function() {
    console.log('hello', this.name)
  }
}

let v = new Program('Vue', '构建用户界面的渐进式框架')
```
要创建Program的实例，需要使用new操作符，可以参考[自定义实现new](./custom-new)

实例的constructor属性指向构造函数，即
```js
v.constructor = Program
```
此外，创建的对象既是Object的实例，也是Program的实例，通过instanceof判断
```js
v instanceof Object // true
v instanceof Program // true
```
上文说到构造函数需要使用new操作符创建实例，如果用作普通函数，属性和方法会被添加到全局作用域中；也可以改变函数作用域到其他对象
```js
Program('React', '用于构建用户界面的js库')
window.name // React

let o = {}
Program.call(o, 'React', '用于构建用户界面的js库')
o.sayHello() // hello React
```
## 原型模式
每个函数都有一个prototype指针，指向对象，这个对象包含所有实例共享的属性和方法。
```js
function Program() {}
Program.prototype.name = 'Vue'
Program.prototype.desc = '构建用户界面的渐进式框架'
Program.prototype.sayHello = function() {
  console.log('hello', this.name)
}
let v = new Program()
let v1 = new Program()
v.sayHello == v1.sayHello // true
```
使用构造函数创建的对象具有相同的属性和方法，本质是原型链查找过程，即实例有值，就返回值 ，否则继续搜索原型。
```Object.getPrototypeOf()```可以返回实例的原型，即
```js
Object.getPrototypeOf(v) // Program.prototype
```
简单的原型语法可以通过一个对象字面量重写原型对象：
```js{3}
function Program() {}
Program.prototype = {
  constructor: Program,
  name: 'Vue',
  desc: '构建用户界面的渐进式框架',
  sayHello: function() {
    console.log('hello', this.name)
  }
}
```
注意，每创建一个函数，就会同时创建它的 ```prototype``` 对象，这个对象也会自动获得 ```constructor``` 属性。而我们在这里使用的语法，本质上完全重写了默认的 ```prototype``` 对象，因此 ```constructor``` 属性也就变成了新对象的 ```constructor``` 属性（指向 Object 构造函数），不再指向 ```Program``` 函数，所以需要手动赋值 ```constructor``` 属性为 ```Program``` ，确保该属性能访问到合适的值。

此外```constructor``` 属性的```[[Enumerable]]```特性被设置为 true，可以通过```Object.defineProperty()```改写
```js
Object.defineProperty(Program.prototype, "constructor", {
  enumerable: false,
  value: Program
})
```
## 组合原型模式和构造函数模式
> <BaseTag type="success" text="推荐" size="mini" /> 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。支持向构造函数传递参数。
```js
function Program(name, desc) {
  this.name = name
  this.desc = desc
  this.attrs = ['directives', 'mixins']
}
Program.prototype = {
  constructor: Program,
  sayHello: function () {
    console.log('hello', this.name)
  }
}

let v = new Program('Vue', '构建用户界面的渐进式框架')
let r = new Program('React', '用于构建用户界面的js库')

v.attrs.push('template')
v.attrs == r.attrs // false
```
## 动态原型模式
通过在构造函数中初始化原型，动态原型模式可以把独立的构造函数和原型封装起来。
```js
function Program(name, desc) {
  this.name = name
  this.desc = desc
  if (typeof this.sayHello !== 'function') {
    Program.prototype.sayHello = function () {
      console.log('hello', this.name)
    }
  }
}
```
只需要判断一个属性即可，代码在初次调用会执行，然后原型已经初始化。
## 寄生构造函数模式
```js
function Program(name, desc) {
  let obj = {}
  obj.name = name
  obj.desc = desc
  obj.sayHello = function() {
    console.log('hello', this.name)
  }
  return obj
}
```
除了使用new操作符来初始化实例，基本和工厂模式创建的对象一致。

返回的对象与构造函数或者与构造函数的原型属性之间没有关系，构造函数返回的对象与在构造函数外部创建的对象没有什么不同
## 稳妥构造函数模式
稳妥对象指的是没有公共属性，而且其方法也不引用 this 的对象。  
稳妥构造函数遵循与寄生构造函数类似的模式，但有两点不同：一是新创建对象的实例方法不引用 this；二是不使用 new 操作符调用构造函数。
```js{6}
function Program(name, desc) {
  let obj = {}
  obj.sayHello = function() {
    console.log('hello', name)
  }
  return obj
}

let v = new Program('Vue', '构建用户界面的渐进式框架')
v.sayHello()
```
上述代码变量v保存的是一个稳妥对象，除了调用```sayHello```方法，没有别的方式可以访问数据成员。