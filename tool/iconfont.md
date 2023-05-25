# ttf文件转base64

由于小程序一些原因，无法使用本地字体文件，故需要转化。且最新阿里巴巴矢量图标库不支持base64转化，需要手动处理。

## 文件处理

在字体目标网站下载相关字体图标文件，例如[阿里巴巴矢量图标库](https://www.iconfont.cn/home/index)。

在线转化ttf格式文件为base64，[https://transfonter.org/](https://transfonter.org/)

![iconfont 转化地址](/img/iconfont.png)

勾选```family support```和```base64 encode```即可，其他格式根据情况勾选。

然后可以选择download，里面包含源文件、```stylesheet.css```和演示页面，一般情况下复制```stylesheet.css```里面的声明数据到项目。

## 项目应用

复制前面的```stylesheet.css```到项目实际文件例如```font.wxss```，

```css
@font-face {
    font-family: 'iconfont';
    src: url('data:font/ttf;charset=utf-8;base64,xxx') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
```

然后把在图标库下载的图标```font class```添加进去。

```csharp
.iconfont {
  font-family: "iconfont" !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-hongbao:before {
  content: "\e70a";
}
```

