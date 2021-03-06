# Plop

[官网](https://plopjs.com/)

## 安装

```shell
$ yarn add plop --dev
```

## polpfile.js

在根目录下，新建 `plopfile.js`，这个文件是 plop 的入口文件。

```js
// plop 入口文件，需要导出一个函数
// 此函数接受一个 plop 对象，用于创建生成器任务

module.exports = (plop) => {
  // 第一个参数为 生成器名称，第二个参数为 生成器配置选项
  plop.setGenerator('component', {
    description: '描述',
    prompts: [
      // 命令行，发出的问题
      {
        type: 'input', // 问题交互方式
        name: 'name', // 问题返回内容的键
        message: 'component name', // 命题描述
        default: 'new-component' // 默认答案
      }
    ],
    actions: [
      // 完成交互后，执行的动作
      {
        type: 'add', // add 添加一个全新文件
        path: 'src/components/{{name}}/index.js', // 可使用插值表示式
        templateFile: 'plop-templates/components.hbs' // 模板文件，其中内容
      }
    ]
  })
}
```

其中，新增文件的操作需要模板文件，因此我们在根目录下，新增 `plop-templates/components.hbs` 模板文件。

```hbs
import React from 'react'

export default () => {
  <div classname="{{name}}"></div>
}
```

执行命令 `yarn plop component ` ，其中 component 是我们在 `polpfile.js` 中，定义的生成器名称。可查看到生成文件。

## 使用流程

- 将 plop 模块作为项目开发依赖安装
- 在项目根目录下创建一个 plopfile.js 文件
- 在  plopfile.js 文件中定义脚手架任务
- 编写用于生成特定类型文件的模板
- 通过 Plop 提供的 CLI 运行脚手架任务