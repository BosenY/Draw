import Draw from './lib/Draw.js'
let flame = document.getElementById('flame')
let draw1 = new Draw()
let draw2 = new Draw({ parent: flame, maxNum: 2 , iconText: "✨"})
let draw3 = new Draw({ maxNum: 10, iconText: "❤️"})
