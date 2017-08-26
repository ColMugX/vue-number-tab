# vue-number-tab

[![NPM](https://nodei.co/npm/vue-number-tab.png)](https://nodei.co/npm/vue-number-tab/)

> 适用于选座位等数字或者类型选择的组件，这是一个从`Bandix`独立出来的组件。

![screenshots](/screenshots/1.gif)

## 安装 Install

> npm install -S vue-number-tab

## 下载 Download

1. `git clone theme/Nlvi https://github.com/ColMugX/hexo-theme-Nlvi.git`

2.  `Download ZIP`

3.  `Open in Desktop`

## 使用 Usage

你可以在`main.js`中直接配置

```js
import numberTab from 'vue-number-tab'

Vue.use(numberTab)
```

或者在你希望用到的地方
```js
import { numberTab } from 'vue-number-tab'   // 按照按需引入来…

// components: { numberTab }

// 或者第二种：
Vue.component(numberTab.name, numberTab)  // 或者换成你喜欢的名字

```

如果直接使用的话
```vue
<number-tab></number-tab>
```
默认是选择数字，从`1`到`4`，颜色是`#444751`,

## 配置 Options

### Api

| 参数       | 说明               | 类型              | 可选值         | 默认值     |
| -------- | ---------------- | --------------- | ----------- | ------- |
| total    | 数字的总数，或者通过数组传入数据 | [Number, Array] | -           | 4       |
| value    | 组件默认选择数据         | [Number]        | -           | 1       |
| bgColor  | 选择区块颜色           | String          | -           | #444751 |
| disabled | 禁用该组件            | Boolean         | true, false | false   |

### Event

| 参数        | 说明       | 返回值              |
| --------- | -------- | ---------------- |
| on-change | 获取当前选择数据 | [Number, String] |
