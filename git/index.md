# Git命令
## 新建仓库
```bash
# 在当前目录新建git仓库
git init

# 新建目录并初始化为git仓库
git init [project-name]

# 克隆远程仓库
git clone [git-url]
```

## 配置
```bash
git config --global user.name "xx"
git config --global user.email "xx"
# autocrlf
# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true
# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input
# 提交检出均不转换
git config --global core.autocrlf false

# safecrlf
# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true
# 提交包含混合换行符的文件时警告
git config --global core.safecrlf warn
# 允许提交包含混合换行符的文件
git config --global core.safecrlf false
```

## SSH配置

```bash
# 生成公钥和秘钥
# 一般目录文件在C:\Users\Administrator\.ssh
ssh-keygen -t rsa
# 重置密码
# ssh-keygen -p [-P old_passphrase] [-N new_passphrase] [-f keyfile]
ssh-keygen -p -P test1234 -N '' -f ~/.ssh/id_rsa
```

## 添加文件

```bash
# 添加个别文件
git add [file1] [file2]
# 添加目录
git add [dir]
# 添加所有文件
git add .
```

## 代码提交
```bash
git commit -m "msg"
# 提交个别文件
git commit [file1] [file2] -m "msg"
# 提交工作区自上次commit之后的变化直接到仓库区
git commit -a
# 提交时显示所有diff信息
git commit -v
# 使用新提交替代上一次提交，如果代码没变化则改写commit msg
git commit --amend -m "msg"
```

## 分支
```bash
# 列出所有本地分支
git branch
# 列出所有远程分支
git branch -r
# 列出所有本地和远程分支
git branch -a
# 新建分支，并留在当前分支
git branch [branch-name]
# 新建分支，并切换到新分支
git branch -b [branch-name]
# 新建分支，并跟踪远程分支
git branch --track [branch-name] [remote-branch]
# 切换分支，并更新工作区
git checkout [branch-name]
# 合并branch-name分支到当前分支
git merge [branch-name]
# 选择一个commit合并到当前分支
git cherry-pick [commit]
# 删除分支
git branch -d [branch-name]
# 强制删除本地分支
git branch -D [branch-name]
# 删除远程分支
git push origin --delete [branch-name]
```

## 标签
```bash
# 列出所有tag
git tag
# 新建一个tag在当前commit
git tag [tag]
# 新建一个tag在指定commit
git tag [tag] [commit]
# 删除本地tag
git tag -d [tag]
# 删除远程tag
git push origin :refs/tags/[tagName]
# 查看tag信息
git show [tag]
# 提交指定tag
git push [remote] [tag]
# 提交所有tag
git push [remote] --tags
# 新建一个分支，指向某个tag
git checkout -b [branch] [tag]
```

## 远程同步
```bash
# 下载远程仓库的所有变动
git fetch [remote]
# 拉取变化，并与本地分支合并
git pull [remote] [branch]
# 推送本地分支到远程仓库
git push [remote] [branch]
# 强制推送，即使有冲突
git push [remote] [branch] --force
# 推送所有分支到远程仓库
git push [remote] --all
```

## 撤销
```bash
# 恢复暂存区指定文件到工作区
git checkout [file]
# 恢复暂存区所有文件到工作区
git checkout .
# 恢复指定commit的指定文件到暂存区和工作区
git checkout [commit] [file]
# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
git reset [file]
# 重置暂存区与工作区，与上一次commit保持一致
git reset --hard
# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
git reset [commit]
# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
git reset --hard [commit]
# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
git reset --keep [commit]
# 暂时将未提交的变化移除，稍后再移入
git stash
git stash pop
```

## 工作流
```bash
# 初始化分支
git flow init

# feature
# 创建feature/[branch]分支
git flow feature start [branch]
# 分支被合并develop并删除，切换到develop
git flow feature finish [branch]

# release
# 创建release/1.0.0分支，使用版本号命名
git flow release start 1.0.0
# 分支被合并到develop和master，release提交会标记版本，然后删除分支并切换到develop
git flow release finish 1.0.0

# hotfix
# 基于master创建hotfix/bug-2270分支
git flow hotfix start bug-2270
# 分支被合并到develop和master，也会被标记，然后删除分支并切换到develop
git flow hotfix finish bug-2270
```