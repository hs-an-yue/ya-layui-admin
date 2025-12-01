# <div align="center">Ya-Admin简介</div>
#### <div align="center"> 基于前端框架Layui2.13开发的一套极简后台管理模板 </div>
<div align="center">
	<a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/Layui-%3E=2.13.0-blue"></a>
    <a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/Ya Layui Admin-v1.1-blue"></a>
	<a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/Author-%E5%A4%9C%E6%B3%8A1990-orange"></a>
    <a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/LICENSE-MIT-blue"></a>
</div>

---

> 在线预览地址: http://106.14.27.178/   由于没有域名,有些品牌系统浏览器不支持
---
> 模板文档使用地址

```agsl
https://hs-an-yue.github.io/  博客中的Ya-Admin使用文档文章
```

> 模板的两个主题

```
master分支: 纯白色+绿色

dark分支: 暗色+蓝色
```

> 日志更新

```
2025-11-24: Ya-Admin v1.0 版本 模板核心框架完成
2025-11-25: Ya-Admin v1.1 版本 模板案例页面完成
2025-11-29: Ya-Admin v1.2 版本 提供dark主题模板(dark分支)
2025-11-30: Ya-Admin完成，文档地址: https://hs-an-yue.github.io/ 下的Ya-Admin使用文档
2025-12-01: Ya-Admin v1.3 版本 dark分支新增 login-dark.html登录页
```

---
### 一、概述
> 1. Ya-Admin由来

作者记性不好，长时间不进行开发前端就会忘记Vue2/3以及Vue相关生态链，每次在进行前端开发都很痛苦，所以搞了基于 `LayUI` 的模板，只需要了解<strong>HTML/CSS/JS</strong>就可以开发，简单方便。


> 2. 学习成本对比

```
HTML/CSS/JS[基础知识](学习成本低) -...-> Layui(学习成本低) -...->  Ya-Layui-Admin(学习成本低)

HTML/CSS/JS[高级功能](学习成本高) -...-> Vue+Vue不同版本的生态(学习成本高) -...-> ElementUI(与脚手架配合学习成本高) -...-> 基于ElementUI的管理模板(学习成本自己体会)

类似于Vue的学习路线太长，不适合我这样前端不专业的后端开发人员。
```

#### 2. 模板介绍
Ya-Admin 是一款基于 [Layui 2.13+](https://layui.dev) 开发的极简后台管理模板。

#### 3.特点
```
轻量易用: 基于 Layui 构建，无需复杂的构建工具即可快速上手。
简单单页: 提供多个常用页面模板（如登录、仪表盘、用户管理、日志等）。
组件丰富: 集成 Layui 提供的丰富 UI 组件，支持表单、表格、图表、弹窗等功能。
```

---

### 二、安装与使用

#### 1. 开发要求
- 了解 HTML/CSS/JS 基础知识
- 支持主流浏览器（Chrome、Firefox、Edge、Safari）

#### 2. 获取项目
你可以通过以下方式获取项目代码：

```bash
https://github.com/hs-an-yue/ya-layui-admin.git
或者
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

> 4.1 开发环境

```
1. 将项目下载到本地
2. 使用开发工具(HBuilder、VsCode等)导入
3. 运行 index.html页面或者login.html页面
``` 

> 4.2 正式环境
```
使用nginx或者Apache服务器运行(略)
```
---

### 三、页面功能概览

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

### 四、贡献与交流
```
QQ群: 948233848
作者: 夜泊
邮箱: hd1611756908@163.com
开源协议: MIT License
```
---

### 五、许可证

本项目遵循 [MIT License](https://opensource.org/licenses/MIT)，你可以自由使用、修改和分发本项目代码，但必须保留原始版权信息。

---

### 六、致谢

感谢 [Layui](https://layui.dev) 和 [echarts](https://echarts.apache.org/zh/index.html) 提供了优秀的 UI 框架支持
