# Draw

一个用js实现的飘落的效果，可以飘落各种文字（✨、❤️、❉等等）

可以放在自己的博客当中使用。

## use

CDN
```html
<script src="https://unpkg.com/draw-something/dist/draw.min.js"></script>
```
NPM
```js
//install
npm i draw-something

//use
import Draw from 'draw-something'
new Draw()
```
## options
new(options)

| Option name | Type | Description |
| --- | --- | --- |
| parent | Dom object | a parent dom object 默认在body上创建 |
| maxNum | number | max num of the screen 默认30个 |
| iconText | string | 飘落的个体 默认 ❉ |
| color | string | 飘落个体的颜色 默认 #fff |
| end() | function | stop draw |


```javascript
import Draw from './lib/Draw.js'
let flame = document.getElementById('flame')
let draw1 = new Draw()
let draw2 = new Draw({ parent: flame, maxNum: 2 , iconText: "✨"})
let draw3 = new Draw({ maxNum: 10, iconText: "❤️"})
draw3.end()
```