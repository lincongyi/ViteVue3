<template>
  <h1>PRETTIER PAGE</h1>
  <h3>1.安装依赖（开发环境使用即可）：</h3>
  <p>npm i prettier eslint-plugin-prettier eslint-config-prettier -D</p>
  <h3>2.新建.prettier.js文件：</h3>
  <p>复制如下代码写入js文件</p>
  <pre>
    <code>
      module.exports = {
        printWidth: 100,
        bracketSpacing: true,
        semi: false,
        singleQuote: true,
        arrowParens: "avoid",
        trailingComma: "none"
      }
    </code>
  </pre>
  <h3>3..eslintrc.js文件增加针对prettier的配置：</h3>
  <pre>
    <code>
      'extends': [
        ...
        '@vue/prettier',
      ],
    </code>
  </pre>
  <h3>4.vscode安装prettier拓展插件</h3>
  <h3>5.vscode配置文件新增规则：</h3>
  <pre>
    <code>
      "editor.formatOnType": true,
      "editor.formatOnSave": true,
    </code>
  </pre>
</template>
<script setup></script>
