# Ya-Layui-Admin 简介

### 项目概述

Ya-Layui-Admin 是一个基于 [Layui 2.13+](https://layui.dev) 开发的极简风格后台管理模板，旨在帮助后端开发者和前端开发者快速构建现代化的后台管理系统。该模板特别适合对前端技术栈（HTML/CSS/JS）掌握较少但仍需快速搭建管理界面的开发人员。

#### 主要特点：
- **轻量易用**：基于 Layui 构建，无需复杂的构建工具即可快速上手。
- **响应式布局**：适配不同屏幕尺寸，提升用户体验。
- **模块化结构**：提供多个常用页面模板（如登录、仪表盘、用户管理、日志等）。
- **丰富的组件**：集成 Layui 提供的丰富 UI 组件，支持表单、表格、图表、弹窗等功能。

---

### 安装与使用

#### 1. 环境要求
- 基本 HTML/CSS/JS 知识
- 支持主流浏览器（Chrome、Firefox、Edge、Safari）

#### 2. 获取项目
你可以通过以下方式获取项目代码：

```bash
git clone https://gitee.com/ukoko/ya-layui-admin.git
```

#### 3. 目录结构说明

```
ya-layui-admin/
├── css/                # 自定义 CSS 样式
├── data/               # 模拟数据文件（JSON）
├── img/                # 项目图片资源
├── js/                 # JavaScript 脚本
├── layui/              # Layui 核心库（CSS 和 JS）
├── views/              # 各个功能页面模板
├── index.html          # 后台主页
├── login.html          # 登录页面
└── README.md           # 项目说明文档
```

#### 4. 运行项目

直接打开 `index.html` 即可查看后台模板的主界面，无需额外的构建步骤。你可以根据需求修改 HTML 文件、CSS 样式或 JavaScript 脚本以适配你的业务场景。

---

### 页面功能概览

| 页面名称        | 功能描述                              |
|----------------|---------------------------------------|
| `index.html`   | 后台管理主页，展示菜单、面包屑导航等基础布局 |
| `login.html`   | 登录页面，包含用户名、密码、验证码等表单组件 |
| `dashboard.html` | 仪表盘页面，展示统计信息和图表           |
| `user.html`    | 用户管理页面，支持用户列表展示和搜索功能     |
| `role.html`    | 角色管理页面，支持角色信息展示             |
| `organization.html` | 组织架构页面，展示树形结构数据             |
| `app-log.html` | 应用日志页面，展示日志信息                 |
| `user-log.html`| 用户日志页面，展示用户操作记录               |
| `workbench.html`| 工作台页面，展示常用功能模块和进度条         |

---

### 技术栈

- **Layui**：轻量级模块化前端 UI 框架
- **HTML5 / CSS3 / JavaScript**：基础前端技术
- **JSON**：用于模拟数据源（`data/*.json`）

---

### 贡献与交流

- **QQ 群**：948233848
- **开源协议**：MIT License
- **作者**：夜泊 (ukoko)

---

### 许可证

本项目遵循 [MIT License](https://opensource.org/licenses/MIT)，你可以自由使用、修改和分发本项目代码，但必须保留原始版权信息。

---

### 致谢

感谢 [Layui](https://layui.dev) 提供了优秀的 UI 框架支持，也感谢所有为本项目提供反馈和建议的开发者朋友们。