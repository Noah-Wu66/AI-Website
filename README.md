# AI应用集合网站

这是一个展示各种AI应用工具的集合网站，设计风格类似苹果官网，提供了各种AI工具的介绍、特点和使用方法。

## 网站特点

- 现代化UI设计，类似苹果官网的高级感
- 完全响应式布局，适配各种设备尺寸
- 平滑滚动和过渡动画效果
- 分类展示各种AI应用工具
- 提供官方网站链接和使用教程

## 分类内容

- AI对话：DeepSeek、豆包、通义千问等
- AI绘画：Midjourney、Runway等
- AI视频：Pika、可灵、即梦等
- AI语音：Fish Audio、ElevenLabs等
- AI音乐：Suno AI等
- AI数字人：HeyGen、飞影数字人等

## 如何启动项目

由于项目是纯静态网站，可以通过以下方式启动：

### 使用Live Server (推荐)

如果您安装了VSCode，可以安装Live Server扩展，然后右键点击`public/index.html`文件，选择"Open with Live Server"。

### 直接打开文件

您也可以直接在浏览器中打开`public/index.html`文件。

### 使用HTTP服务器

如果您已安装Python，可以在项目根目录运行以下命令：

```bash
# 进入public目录
cd public

# Python 3.x
python -m http.server

# Python 2.x
python -m SimpleHTTPServer
```

然后在浏览器中访问 `http://localhost:8000/`

## 项目结构

```
/
├── public/            # 静态网站根目录
│   ├── assets/        # 静态资源
│   │   ├── css/       # CSS样式
│   │   ├── js/        # JavaScript文件
│   │   └── img/       # 图片资源
│   └── index.html     # 主页
├── app/               # 旧版应用目录(不再使用)
└── README.md          # 项目说明
```

## 技术栈

- HTML5
- CSS3 (使用了现代CSS特性如Grid、Flexbox、CSS变量等)
- JavaScript (原生JS，无框架依赖)

## 后续改进计划

- 添加搜索功能
- 加入更多AI工具
- 实现工具比较功能
- 添加用户评分系统 