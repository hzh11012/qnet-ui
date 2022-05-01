---
title: Icon 图标
nav:
  title: 组件
  path: /components
group:
  title: 基础
  order: 0
order: 3
---

# Icon 图标

## 概述

Qnet UI 的图标使用开源项目 <a href="https://ionicons.com/" target="_blank">
<i class="qnet-icon qnet-icon-logo-ionic" style="font-size: 14px; margin-right: 2px"></i>
ionicons</a> 4.6.3 版本。

### 如何使用

使用 `<Icon />` 组件，指定图标对应的 `type` 属性，示例代码：

```tsx | pure
<Icon type="logo-ionic" />
```

渲染后为：

```tsx | pure
<i class="qnet-icon qnet-icon-logo-ionic"></i>
```

### API

|  属性   |         说明          |  类型  | 默认值 |
| :-----: | :-------------------: | :----: | :----: |
|  type   |      图标的名称       | String |   -    |
|  size   | 图标的大小，单位是 px | Number |   -    |
|  color  |      图标的颜色       | String |   -    |
| onClick |       点击事件        | Event  |   -    |

### 所有图标

<code src="./demo/basic.tsx" inline></code>
