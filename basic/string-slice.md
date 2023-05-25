### String的截取
```slice```，```substring```，```substr```三个方法都是基于子字符串创建新字符串，不改变原有字符串。
#### 方法说明
::: tip slice()
提取的新字符串包括beginIndex但**不包括 endIndex**。
:::
```js
str.slice(beginIndex[, endIndex])
```
**参数**  

- beginIndex  

从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 strLength + beginIndex 看待，这里的strLength 是字符串的长度（例如， 如果 beginIndex 是 -3 则看作是：strLength - 3）。  

- endIndex  

可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice() 会一直提取到字符串末尾。如果该参数为负数，则被看作是 strLength + endIndex，这里的 strLength 就是字符串的长度(例如，如果 endIndex 是 -3，则是, strLength - 3)。

::: tip substring()
提取的新字符串包括beginIndex但**不包括 endIndex**。
:::
```js
str.substring(beginIndex[, endIndex])
```
**参数**  
- 如果 beginIndex 等于 endIndex，substring 返回一个空字符串。
- 如果省略 endIndex，substring 提取字符一直到字符串末尾。
- 如果任一参数小于 0 或为 NaN，则被当作 0。
- 如果任一参数大于 str.length，则被当作 str.length。
- 如果 beginIndex 大于 endIndex，则 substring 的执行效果就像两个参数调换了一样。

::: tip substr
提取字符从指定位置开始到指定字符数的字符。
:::
::: warning MDN警告
尽管 String.prototype.substr(…) 没有严格被废弃 (as in "removed from the Web standards"), 但它被认作是遗留的函数并且可以的话应该避免使用。它并非JavaScript核心语言的一部分，未来将可能会被移除掉。如果可以的话，使用 substring() 替代它。
:::
```js
str.substr(start[, length])
```

**参数**

- start 

开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength + (-3)）。
- length
可选。提取的字符数。

**注意**

- 如果 start 为正值，且大于或等于字符串的长度，则 substr 返回一个空字符串。
- 如果 start 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引。如果 start 为负值且 abs(start) 大于字符串的长度，则 substr 使用 0 作为开始提取的索引。注意负的 start 参数不被 Microsoft JScript 所支持。
- 如果 length 为 0 或负值，则 substr 返回一个空字符串。如果忽略 length，则 substr 提取字符，直到字符串末尾。

#### 方法举例
- 参数正数
```js
let str = 'hello world' // length: 11

str.slice(3) // lo world
str.subtring(3) // lo world
str.substr(3) // lo world

str.slice(3, 7) // lo w
str.substring(3, 7) // lo w
str.substr(3, 7) // lo worl
```

- 参数负数
```js
let str = 'hello world' // length: 11

str.slice(-3) // rld
str.subtring(-3) // hello world
str.substr(-3) // rld

str.slice(3, -4) // lo w
str.substring(3, -4) // hel
str.substr(3, -4) // ''
```