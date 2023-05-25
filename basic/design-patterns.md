# JavaScript设计模式

> 设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。

## 单例模式
规定一个类只有一个实例，并且提供可全局访问点。全局对象是最简单的单例模式：
```js
let obj = {
  name: 'singleton',
  getInstance: function() {}
}
```
但是这种容易污染全局变量，不推荐使用，一般是通过闭包或代理形式实现：

- 闭包，判断实例
```js
let createSingleton = (function() {
  let instance = null
  return function(name) {
    this.name = name
    if (instance) return instance
    return instance = this
  }
})()
```

- 代理，将创建对象的操作和判断实例分开
```js
let createSinleton = (function() {
  let instance = null
  return function(name) {
    this.name = name
    if (instance) return instance
    return instance = new Singleton(name)
  }
})()

let Singleton = function(name) {
  this.name = name
}
```

使用例子：
```js
let getSingleton = function (fn) {
  var result;
  return function () {
    return result || (result = fn.apply(this, arguments)); // 确定this上下文并传递参数
  }
}
let createAlertMessage = function (html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
}
let createSingleAlertMessage = getSingleton(createAlertMessage);
document.getElementById('loginBtn').onclick = function () {
  let alertMessage = createSingleAlertMessage('hello world');
  alertMessage.style.display = 'block';
}
```

## 观察者模式
一个被称作 <base-tag type="success" text="被观察者" /> 的对象，维护一组被称为<base-tag type="warning" text="观察者" />的对象，这些对象依赖于被观察者，被观察者自动将自身的状态的任何变化通知给它们。
当一个被观察者需要将一些变化通知给观察者的时候，它将采用广播的方式。

大概结构像这样：

```text
EventObserver
│ 
├── subscribe: adds new observable events
│ 
├── unsubscribe: removes observable events
|
└── broadcast: executes all events with bound data
```
实现代码：
```js
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}
```
使用例子：
```js
// <input id="input" >
const Observer = new EventObserver();

Observer.subscribe((text) => {
  console.log(text)
});

const input = document.getElementById('input');

input.addEventListener('keyup', () => Observer.broadcast(input.value));
```
![观察者模式 与 发布-订阅模式区别](/img/observer-publish.png)

## 发布-订阅模式
```js
class Observal {
  eventList = {};
  subscribe (key, fn) {
    if (!this.eventList[key]) {
      this.eventList[key] = []
    }
    this.eventList[key].push(fn)
  }
  publish (...args) {
    let key = Array.prototype.shift.call(args)
    let fns = this.eventList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, args)
    }
  }
}
```
使用例子：
```js
const Observer = new Observal();
function funa(d) {console.log('a',d)}
function funb(d) {console.log('b',d)}
function func(d) {console.log('a copy',d)}

Observer.subscribe('a', funa)
Observer.subscribe('a', func)
Observer.subscribe('b', funb)

Observer.publish('a','hello')
```