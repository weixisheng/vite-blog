- 在项目根目录找到 project.config.json 文件，新增 cloudfunctionRoot 字段，指定本地已存在的目录作为云函数的本地根目录
```json
    "cloudfunctionRoot": "./functions/"
```
之后，在app.json配置cloud
```json
   "cloud": true
```
 ![云开发入口.png](/img/4905023-9ce8bcdb991fa15d.png)
 创建环境确定。
- 本地创建```functions```目录，右键新建Node.js云函数，输入函数名即可创建一个云函数模板。
![创建云函数模板.png](/img/4905023-4873080afa00b614.png)
![云函数模板.png](/img/4905023-515e5400ac081f3e.png)
云函数的传入参数有两个，一个是 ```event ```对象，一个是 ```context ```对象。```event ```指的是触发云函数的事件，当小程序端调用云函数时，```event ```就是小程序端调用云函数时传入的参数，外加后端自动注入的小程序用户的 ```openid ```和小程序的 ```appid```。```context``` 对象包含了此处调用的调用信息和运行状态，可以用它来了解服务运行的情况。
- 配置 config.json
```json
{
  "permissions": {
    "openapi": [
      "ocr.idcard"
    ]
  }
}
```
- 编写函数(index.js)
```js
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  try {
    const result = await cloud.openapi.ocr.idcard({
        type: 'photo',
        imgUrl: event.imgUrl // 参数
      })
    console.log(result)
    return result
  } catch (err) {
    console.log(err)
    return err
  }
}
```
- 安装依赖。
云函数中有使用到 npm 模块，在函数目录下根据```package.json```安装依赖运行
```bash
npm i 
```
- 本地调试
支持断点、网络查看，可以调用本地实例。具体参考：[微信开放文档|云函数本地调试功能](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/local-debug.html)

![本地调试菜单.png](/img/4905023-eedf3fe4fa9cad28.png)
![开启调试.png](/img/4905023-2b153d7c8ed26155.png)
- 测试页面
```js
// 先初始化，不然报错
wx.cloud.init()

wx.cloud.callFunction({
    // 云函数名称
    name: 'idcard',
    // 传给云函数的参数
    data: {
        imgUrl: encodeURIComponent(imgUrl)
    }
})
    .then(res => {
        console.log(res.result)
    })
    .catch(console.error)
```
- 部署
本地测试通过之后，可以创建并部署
![部署.png](/img/4905023-498b17ce952a0d49.png)

