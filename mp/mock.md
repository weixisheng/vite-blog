:::tip 小程序API Mock
生成随机数据，拦截 Ajax 请求。
详细的Mock文档语法参考：[Mock](https://github.com/nuysoft/Mock/wiki)
::: 
### 使用方法
- 启用  

在小程序调试器页面，选择Mock选项面板，启用Mock
![启用mock](/img/mock-1.png)
- 建立规则 

点击+号新建规则，配置相关信息即可。如果正确的话，就会在规则下面展示实际的mock数据，错误的时候，会提示模板解析错误。
![新建规则](/img/mock-2.png)

### 测试请求
- 编写请求方法
```js
wx.request({
  url: 'https://www.example.com/api/User/GetVip',
  success(res) {
    console.log(res)
  }
})
```
- mock请求结果

![mock请求](/img/mock-3.png)