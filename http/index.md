# http的get和post请求

GET和POST是HTTP请求的两种基本方法

## 区别
::: tip w3cschool
[HTTP 方法：GET 对比 POST](https://www.w3school.com.cn/tags/html_ref_httpmethods.asp)
:::

## 最后

GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。

GET产生一个TCP数据包；POST产生两个TCP数据包。

- 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）

- 而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）

- 在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点

- 并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次