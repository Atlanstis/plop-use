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
