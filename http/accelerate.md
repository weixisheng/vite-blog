# 加速Github访问

## 查询IP地址

访问网站[IPAddress.com](https://www.ipaddress.com/)，查询Github相关网站的ip地址

![ipaddress截图](/img/github1.png)。

在排行榜出现相关链接，这里需要三个CDN解析地址。点击对应链接或者直接查询网址：
1. github.com

![github.com](/img/github2.png)

2. github.global.ssl.fastly.net

![github.com](/img/github3.png)

3. assets-cdn.github.com

![github.com](/img/github4.png)

## 设置host文件
把对应链接和ip地址配置即可。例如：
```bash
...
...
140.82.113.3    github.com
185.199.108.153 assets-cdn.github.com
199.232.69.194  github.global.ssl.fastly.net
...
...
```

