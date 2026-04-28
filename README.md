# 机器人智能调研网站

这是一个可直接部署到 GitHub Pages 的静态网站项目。

## 文件结构

```text
robot_intelligence_github_static/
├── index.html
├── README.md
└── .nojekyll
```

## GitHub Pages 部署方法

1. 新建一个 GitHub 仓库，例如：`robot-intelligence-website`
2. 上传本文件夹中的所有文件，确保 `index.html` 在仓库根目录
3. 进入仓库 Settings
4. 点击 Pages
5. Source 选择 `Deploy from a branch`
6. Branch 选择 `main`，目录选择 `/root`
7. 保存后等待 1-3 分钟
8. 访问 GitHub Pages 自动生成的网址

## 注意

- 本网站是纯静态页面，不需要后端。
- 图表使用 Chart.js CDN，需要联网加载。
- 配图为内置 SVG，不需要额外上传图片。
