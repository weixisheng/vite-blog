# 前端基础概念

## 闭包

> 闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式就是在一个函数中返回一个函数。

函数柯里化就是闭包的应用。简单实现如下代码所示：
```js
function curry(fn){
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  };
}
```
在另一个函数内部定义的函数会将包含函数（即外部函数）的活动对象添加到它的作用域链中。
例子中，在curry函数内部定义的匿名函数的作用域中，实际上会包含外部函数curry的活动对象，匿名函数被销毁，curry的活动对象才会被销毁。

```js
function add(num1, num2) {
  return num1 + num2
}

var curriedAdd = curry(add, 1)
console.log(curriedAdd(2)) // 3
// var curriedAdd = curry(add, 1, 2)
// console.log(curriedAdd()) // 3
```

## 原型链

> 每个对象都可以有一个原型 `__proto__` ，这个原型还可以有它自己的原型，以此类推，形成一个原型链。查找特定属性的时候，我们先去这个对象里去找，如果没有的话就去它的原型对象里面去，如果还是没有的话再去向原型对象的原型对象里去寻找...，这个操作被委托在整个原型链上，这个就是我们说的原型链了。

![原型链示例图](/img/prototype-1.png)

## CORS
> `Cross-Origin Resource Sharing` , 跨域资源共享

## CSRF攻击
> `Cross Site Request Forgery` , 跨站请求伪造

## XSS攻击
> `Cross Site Scripting` , 跨站脚本攻击