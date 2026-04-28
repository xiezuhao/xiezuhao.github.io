# 机器人智能调研网站

这是可直接部署到 GitHub Pages 的完整静态网站。

## 文件结构

```text
index.html
README.md
.nojekyll
```

## 上传方法

请把这 3 个文件直接上传到 GitHub 仓库根目录，不要再套一层文件夹。

正确结构：

```text
你的仓库/
├── index.html
├── README.md
└── .nojekyll
```

错误结构：

```text
你的仓库/
└── robot_intelligence_complete_final/
    ├── index.html
    ├── README.md
    └── .nojekyll
```

## GitHub Pages 设置

1. 打开仓库 `Settings`
2. 进入 `Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main`
5. Folder 选择 `/root`
6. 点击保存
7. 等待 1-3 分钟部署完成

## 说明

- 本网站为纯静态页面，不需要后端。
- 机器人配图为内置 SVG，不需要额外图片。
- 图表使用 Chart.js CDN，需要联网显示。
