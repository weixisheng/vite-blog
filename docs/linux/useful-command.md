# Linux实用命令

## 批量删除多个目录
> 利用 `find` 命令找出符合的目录执行删除

```bash
find . -type d -name "1091*" -exec rm -rf {} +
```

`.`表示在当前目录执行

`-type d`表示只搜索目录

`-name`匹配符合命名格式的目录

`-exec` 执行命令

`rm -rf `递归删除，即目录和目录下的文件

`{} +`追加在 `rm` 命令末尾

## vim替换
```bash
:%s/查找的内容/替换的内容/g
# 示例
# :%s/34172711/34203851/g
```

`g` 表示全局

## git拉取代码
> 利用 `git` 命令切换分支和拉取代码

```bash
#!/bin/bash
# 确保脚本抛出遇到的错误
set -e

packagesDir="src/packages"
branch="feature/collect"

if [ ! -d "$packagesDir" ];then
  mkdir -p $packagesDir
  echo "创建packages组件库目录"
fi

cd $packagesDir
  if test -e .git
    then
      b=$(git symbolic-ref --short -q HEAD)
      if [ $b != $branch ];then
        c=$(git branch|grep "${branch}")
        if [ $c = $branch ];then
          git checkout $branch
        else
          git checkout -b $branch
        fi
        git pull origin $branch
      else
        git pull origin $branch
      fi
      echo '包仓库拉取完毕'
  else
    # rm -rf .git
    git init
    git remote add origin [git address]

    git pull origin master
    b=$(git symbolic-ref --short -q HEAD)
    if [ $b != $branch ];then
      git checkout -b $branch
      git pull origin $branch
    fi
    echo '包仓库初始完毕'
  fi
```

## 自动建分支
```bash
#!/bin/bash
# 确保脚本抛出遇到的错误
set -e

git init

git add .

git commit -m "feat: :tada: 初始化"

git branch test

git branch prod

git checkout -b develop
```