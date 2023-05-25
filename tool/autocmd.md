# 自动cmd

利用cmd命令，自动打开多个cmd命令窗口，执行一些服务等。

保存文件为 ```.bat```格式，双击运行即可打开多个窗口
## 基本命令

```bash
::@echo off
start cmd /k "cd/d G:\path&&npm run serve"
```

## 说明

- ```echo```

```bash
# 打开/关闭echo，不加参数则显示当前echo设置
echo [on|off]

# 不显示所有命令的回显，类似命令前面的G:\path
@echo off
```
- ```start```

```bash
# 新开一个窗口并运行某程序或命令,max|min可选，最大化或最小化
start xx [max|min]
```

- ```/k```

表示cmd命令执行完毕不关闭窗口，关闭的话用 ```/c```

- ```cd/d```

后面加路径，表示运行到该目录下

- 其他

执行多条命令，用```&&```分割

注释命令使用 ```::```
