# 更改git分支名称
> 项目中，可能会有更改分支名称的场景，基本命令是修改本地分支然后推送

## 步骤
```bash
# 重命名旧分支 新分支
git branch -m old_branch new_branch
```

```bash
# 删除远程旧分支
git push --delete origin old_branch
```

```bash
# 推送新分支
git push origin new_branch
```

```bash
# 本地分支关联远程新分支
git branch --set-upstream-to origin/new_branch
```

## 自动化命令
创建一个bash文件，把以上步骤添加进来
```bash
# 修改分支名称
# 确保脚本抛出遇到的错误
set -e
# 重命名旧分支 新分支
git branch -m old_branch new_branch
# 删除远程旧分支
git push --delete origin old_branch
# 推送新分支
git push origin new_branch
# 本地分支关联远程新分支
git branch --set-upstream-to origin/new_branch

cd -
```
如果项目中有package等项目包管理文件，可以加一个npm指令
```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service builds",
    "rename": "bash rename.sh"
  }
}
```
也可以直接运行```bash rename.sh```

## 优化
不在脚本硬编码，根据输入，动态重命名。```read```命令用于从输入读取值，不详细展开Linux命令，具体参考
[Linux read命令](https://www.runoob.com/linux/linux-comm-read.html)

```bash
# 修改分支名称
read -p "输入旧分支名称/新分支名称(空格分隔)：" oldB newB
# 确保脚本抛出遇到的错误
set -e
# 重命名旧分支 新分支
git branch -m $oldB $newB
# 删除远程旧分支
git push --delete origin $oldB
# 推送新分支
git push origin $newB
# 本地分支关联远程新分支
git branch --set-upstream-to origin/$newB

cd -
```
![提交信息](../.vuepress/public/img/rename-branch.png)