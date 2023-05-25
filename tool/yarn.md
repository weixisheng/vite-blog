# yarn命令

## 初始化
```bash
yarn init
```

## 依赖

### 安装

安装项目全部依赖

```bash
yarn
# or
yarn install
```

### 添加

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

**将依赖项添加到不同依赖项类别中**

分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies` 类别中：

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

### 升级

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 移除

```bash
yarn remove [package]
```