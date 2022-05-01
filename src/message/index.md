---
title: Message 全局提示
nav:
  title: 组件
  path: /components
group:
  title: 组件
  order: 1
---

# Message 全局提示

## 概述

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

### 代码示例

<code src="./demo/basic.tsx" title='普通提示' desc='最基本的提示，默认在3秒后消失。'></code>

<code src="./demo/types.tsx" title='提示类型' desc='不同的提示状态：成功、警告、错误。'></code>

<code src="./demo/load.tsx" title='加载中' desc='Loading 的状态，并异步在某个时机移除。'></code>

<code src="./demo/duration.tsx" title='自定义时长' desc='指定 `duration` 后可以自定义时长。'></code>

<code src="./demo/close.tsx" title='可关闭' desc='指定 `closable` 为 true 后可以手动关闭提示。'></code>

<code src="./demo/render.tsx" title='自定义内容' desc='指定 `render` 为 ReactNode 后可以作为自定义内容。'></code>

### API

通过直接调用以下方法来使用组件：

- `Message.info(config)`
- `Message.success(config)`
- `Message.warning(config)`
- `Message.error(config)`
- `Message.loading(config)`

参数 config 为对象，具体说明如下：

|   属性   |                    说明                     |   类型    | 默认值 |
| :------: | :-----------------------------------------: | :-------: | :----: |
| content  |                  提示内容                   |  String   |   -    |
|   icon   |                 自定义图标                  |  String   |   -    |
|   key    |             当前提示的唯一标志              |  String   |   -    |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 |  Number   |   3    |
| closable |              是否显示关闭按钮               |  Boolean  | false  |
|  render  |               自定义提示内容                | ReactNode |   -    |
| onClick  |        点击 message 时触发的回调函数        | Function  |   -    |
| onClose  |            关闭时触发的回调函数             | Function  |   -    |
