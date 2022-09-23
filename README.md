# Vue 3 + Vite 测试项目

## Scss

### 安装开发环境依赖
### 配置vite.config.js，plugins里面的pluginOptions属性

## Stylelint

### 安装开发环境依赖
### 新建.stylelint.js文件，写入对应的规则
### vscode安装stylelint拓展插件
### vscode配置setting.json文件，添加stylelint.validate属性规则
### 更多stylelint规则：[http://stylelint.cn/user-guide/rules/](http://stylelint.cn/user-guide/rules/)

## Prettier

### 安装开发环境依赖
### 新建.prettier.js文件，写入对应的规则
### .eslintrc.js文件增加针对prettier的配置
### vscode安装prettier拓展插件
### vscode配置文件新增规则

## GetImageUrl(常用的Vite引入图片3种方法)

### 1.图片在assets前面加上/src
### 2.new URL()
### 3.import

## UnpluginAutoImport

### 安装开发环境依赖
### vite.config.js配置AutoImport方法
### 详情可参考：[https://github.com/antfu/unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

## ElementPlusUI

### 全局引入
### 按需导入&自动导入(unplugin-auto-import)
### 官网：[https://element-plus.gitee.io/zh-CN](https://element-plus.gitee.io/zh-CN/)

## ComponentMitt

### 安装依赖
### 使用mitt库实现兄弟组件通信
### A、B组件引入mitt库，
### A组件派发事件emitter.emit(event,data)
### B组件监听事件emitter.on(event,(data)=>{})
### 详情可参考：[https://github.com/developit/mitt](https://github.com/developit/mitt)

## Mixin

### 引入mixin工具函数，解构需要用到的方法

## Vue-router

### 安装依赖
### 新增路由配置文件，如router/index.js
### main.js添加.use(router)使得应用支持路由
### 官网：[https://router.vuejs.org/zh/index.html](https://router.vuejs.org/zh/index.html)

## Pinia

### 安装依赖
### 创建一个 pinia（根存储）并将其传递给应用程序：
```
import { createPinia } from 'pinia'
app.use(createPinia())
```
### 新增全局存储管理文件，如store/index.js
### 官网：[https://pinia.web3doc.top](https://pinia.web3doc.top/)