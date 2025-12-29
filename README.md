# 音响网站

基于 Nuxt 4 + Vue 3 构建的专业音响设备展示网站。

## 技术栈

- **Nuxt 4** - Vue 框架
- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全
- **Nuxt UI** - UI 组件库
- **Tailwind CSS** - 实用优先的 CSS 框架

## 项目结构

```
Audio/
├── assets/          # 静态资源（CSS、图片等）
├── components/       # 可复用组件
├── layouts/         # 布局文件
├── pages/           # 页面路由
├── app.vue          # 根组件
├── nuxt.config.ts   # Nuxt 配置文件
└── package.json     # 项目依赖
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 生成静态站点

```bash
npm run generate
```

## 功能特性

- ✅ 响应式设计
- ✅ 现代化 UI 界面
- ✅ TypeScript 支持
- ✅ 自动路由生成
- ✅ 组件自动导入
- ✅ SEO 优化

## 开发指南

### 添加新页面

在 `pages/` 目录下创建 `.vue` 文件，Nuxt 会自动生成路由。

### 创建组件

在 `components/` 目录下创建组件，可以在任何地方直接使用，无需手动导入。

### 修改布局

编辑 `layouts/default.vue` 来修改默认布局。

## 许可证

MIT
