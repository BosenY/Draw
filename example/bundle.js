import Draw from '../src/index.js'

const flame = window.document.getElementById('flame')
const draw1 = new Draw()
const draw2 = new Draw({ parent: flame, maxNum: 2, iconText: '✨' })
const draw3 = new Draw({ maxNum: 10, iconText: '❤️' })
