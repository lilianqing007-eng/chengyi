# 橙益食品官网

上海橙益食品贸易有限公司的中英文双语官网工程。当前版本采用 Next.js 静态导出，中文路径为 `/zh/`，英文路径为 `/en/`。

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:3000/zh/`。

## 构建与检查

```bash
npm run lint
npm test
```

构建产物位于 `out/`，可直接交给静态网站托管服务。

## EdgeOne Pages 预备配置

- 框架预设：Next.js
- 安装命令：`npm install`
- 构建命令：`npm run build`
- 输出目录：`out`
- Node.js：20.9 或更高版本
- 正式域名：`www.shcyfoods.com`

账号、GitHub 授权、项目创建、域名绑定与 DNS 修改尚未执行。建议沿用“开发分支预览、主分支生产”的发布规则，但应在新仓库建立时再次确认分支名称。
