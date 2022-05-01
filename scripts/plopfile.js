const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('src', {
    description: '创建一个新组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称'
      },
      { type: 'input', name: 'CN', message: '请输入组件中文名称' },
      { type: 'input', name: 'description', message: '请输入组件描述' }
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/index.tsx'),
        templateFile: path.resolve(__dirname, '../templates/comp.hbs')
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/index.scss'),
        templateFile: path.resolve(__dirname, '../templates/style.hbs')
      },
      {
        type: 'append',
        path: path.resolve(__dirname, '../src/styles/index.scss'),
        pattern: '/* PLOP_INJECT_EXPORT */',
        templateFile: path.resolve(__dirname, '../templates/styles.hbs')
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/{{kebabCase name}}/index.md'),
        templateFile: path.resolve(__dirname, '../templates/doc.hbs')
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/{{kebabCase name}}/demo/basic.tsx'
        ),
        templateFile: path.resolve(__dirname, '../templates/demo.hbs')
      },
      {
        type: 'append',
        path: path.resolve(__dirname, '../src/index.ts'),
        pattern: '/* PLOP_INJECT_EXPORT */',
        templateFile: path.resolve(__dirname, '../templates/export.hbs')
      }
    ]
  });
};
