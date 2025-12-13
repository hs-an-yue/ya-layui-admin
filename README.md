# <div align="center">Ya-Admin简介</div>
#### <div align="center"> 基于前端框架Layui2.13开发的一套极简后台管理模板 </div>
<div align="center">
	<a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/Layui-%3E=2.13.0-blue"></a>
    <a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/Ya Layui Admin-v1.1-blue"></a>
	<a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/Author-%E5%A4%9C%E6%B3%8A1990-orange"></a>
    <a href="https://gitee.com/ukoko/ya-layui-admin"><img alt="abc" src="https://img.shields.io/badge/LICENSE-MIT-blue"></a>
</div>

---

## 一、在线预览
### 第1节 预览地址和在线文档地址
```angular2html
http://106.14.27.178/

当前预览地址已关联后端 用户名/密码: admin/admin
数据每半个小时重置一次

后端在线API地址: http://106.14.27.178:8080/doc.html  方便大家练习前端模板
```
### 第2节 本地部署地址
```
代码地址: https://gitee.com/ukoko/yue-an-mini-plus

前后端放在了一个项目中
后端: Yue-An-mini-Plus
前端: Yue-An-mini-Plus项目中的ya-layui-admin是前端项目

部署方式
后端部署: SpringBoot工程，不赘述
前端部署: 
    1. 开发工具采用Visual Studio Code(vscode)方便解决跨域问题
    2. 开发步骤
        2.1 将前端项目导入到vscode开发工具中
        2.2 下载Live Server插件作为HTTP服务器
        2.3 跨域解决方式: 博客 https://hs-an-yue.github.io/ 中的《Live Server代理实现》
```

## 二、Ya-Admin模板介绍文档

```angular17html
https://hs-an-yue.github.io/  博客中的Ya-Admin使用文档文章
```

## 三、Ya-Admin图片预览

<table>
<tr>
<td style="width: 50%;">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB97a4a8911909a5daa66b5f5757dd1d7f?method=download&shareKey=4cb21645ec3198c49130970735e4c619" alt="abc">    
</td>
<td style="width: 50%;">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB4ef87394d68abac32ae02446af7180aa?method=download&shareKey=ae5239b8328867ca9f281c3871ca7242" alt="abc">
</td>
</tr>
<tr>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEBee218855629f06fe87516cbcd5d074c9?method=download&shareKey=503537b4fa44510931ffbcb0ce62f752" alt="abc">
</td>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEBf4313bca72a394801efe3a732df88364?method=download&shareKey=fb9dfa24ec628a13b9722e75f79577b4" alt="abc">
</td>
</tr>
<tr>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB3f7d87bb5f6ba6507a5843c9107fb32f?method=download&shareKey=1a1c48d19a9f2931fbcccf982ee0d6c1" alt="abc">
</td>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB14cba3b0b15c6cb4686b2e421db0e062?method=download&shareKey=8c080d0d10e018f9a6fd8e8d5836ddac" alt="abc">
</td>
</tr>
<tr>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB3f1a032925e496f096a73ce7500e569b?method=download&shareKey=9447f17d20c497d4034e889eb0529156" alt="abc">
</td>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB65dd56be37a9a96c7c72a87c541b5844?method=download&shareKey=975958c7a746a937ec626411d1e1b122" alt="abc">
</td>
</tr>
<tr>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB3fc831eb4e7f383e2bcca0ded3c56d9e?method=download&shareKey=025b23e6a244a0f05e9361dc699583d8" alt="abc">
</td>
<td style="width: 50%">
<img src="https://share.note.youdao.com/yws/api/personal/file/WEBa9024da154208311b1bf1ad2387214dc?method=download&shareKey=3a67ed9de7fc11042fda0be1e0a83d0f" alt="abc">
</td>
</tr>
<tr>
<td>
<img src="https://share.note.youdao.com/yws/api/personal/file/WEB1e529b2cf5f6c09b634dbfb56f2b730d?method=download&shareKey=b3a59d9f2188deffad96fb4aac3a071c" alt="abc">
</td>
</tr>
</table>

## 四、项目目录介绍

```
ya-layui-admin/
├── css/                # 自定义 CSS 样式
├── data/               # 模拟数据文件（JSON）
├── img/                # 项目图片资源
├── js/                 # JavaScript 脚本
├── layui/              # Layui 核心库（CSS 和 JS）
├── views/              # 各个功能页面模板
├── index.html          # 首页
├── login.html          # 登录页面
└── README.md           # 项目说明文档
```
## 五、许可证
本项目遵循 [MIT License](https://opensource.org/licenses/MIT)，你可以自由使用、修改和分发本项目代码，但必须保留原始版权信息。
## 六、致谢
感谢 [Layui](https://layui.dev)、[Echarts](https://echarts.apache.org/zh/index.html)、[xm-select](https://xm-select.com/file/xm-select/v1.2.4/#/component/install)等框架支持