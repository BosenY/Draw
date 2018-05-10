class Draw {
  /**
   *
   * @author boseny 2018/05/08
   * @param {object} options.parent 根节点
   * @param {number} options.maxNum 屏幕中最大飘落数量
   * @param {string} options.iconText 飘落个体innerHtml
   * @param {string} options.color 飘落个体颜色
   * @example
   * new Draw()
   * new Draw({ parent: flame, maxNum: 2 , iconText: "✨"})
   * new Draw({ maxNum: 10, iconText: "❤️"})
   */
  constructor({ parent, maxNum, iconText, color } = {}) {
    this.maxNum = maxNum || 30 //最大数量
    this.iconText = iconText || '✽'
    this.color = color || '#fff'
    this.count = 0 //数量
    this.parent = parent

    if (!this.parent) {
      this.parent = document.createElement('div')
      this.parent.id = `draw-wrap${Draw._id}`
      Draw._id++
      document.body.appendChild(this.parent)
    }
    if (this.isDom(this.parent)) {
      if (typeof this.maxNum !== 'number') {
        throw TypeError('maxNum必须是一个正整数')
      }
      this.init(this.parent)
    } else {
      throw TypeError('请传入正确的根节点')
    }
  }
  init(parent) {
    setInterval(() => {
      if (this.count < this.maxNum) {
        this.count++
        var odiv = document.createElement('div') //创建div
        odiv.innerHTML = this.iconText //div的内容
        odiv.style.position = 'absolute' //div的绝对定位
        parent.appendChild(odiv) //把创建好的div放进flame中
        this.draw(odiv)
      }
    }, 1000)
  }
  isDom(obj) {
    if (typeof HTMLElement === 'object') {
      return obj instanceof HTMLElement
    } else {
      return (
        obj &&
        typeof obj === 'object' &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === 'string'
      )
    }
  }
  draw(ele) {
    let startPosLeft = Math.ceil(
      Math.random() * document.documentElement.clientWidth
    )
    let rate = Number.parseInt(Math.random() * 3) + 1
    let range =
      startPosLeft > document.documentElement.clientWidth - startPosLeft
        ? document.documentElement.clientWidth - startPosLeft
        : startPosLeft
    range = Number.parseInt(Math.random() * range)
    let flag = this.random50()
    this.setStyle(ele, startPosLeft)
    let speed = 0
    let speedx = 0
    let timerx
    let timer = setInterval(() => {
      if (speed < document.documentElement.clientHeight) {
        ele.style.top = speed + 'px'
        speed += rate
      } else {
        ele.parentNode.removeChild(ele)
        this.count--
        clearInterval(timer)
        clearInterval(timerx)
        return
      }
    }, 40)
    timerx = setInterval(() => {
      if (speed < document.documentElement.clientHeight) {
        ele.style.left = startPosLeft + speedx + 'px'
        if (speedx < range && flag) {
          speedx += 1
        } else {
          flag = false
        }
        if (speedx > -1 * range && !flag) {
          speedx -= 1
        } else {
          flag = true
        }
      } else {
      }
    }, 150)
  }
  setStyle(ele, startPosLeft) {
    ele.style.opacity = (Math.ceil(Math.random() * 3) + 7) / 10
    ele.style.left = startPosLeft + 'px'
    ele.style.color = this.color
    ele.style.fontSize = 12 + Math.ceil(Math.random() * 14) + 'px'
    ele.style.transform = `rotate(${Number.parseInt(Math.random() * 360)}deg)`
  }
  stop() {
    this.maxNum = 0
  }
  random50() {
    return Number.parseInt(Math.random() * 10) > 5 ? true : false
  }
}
Draw._id = 0
export default Draw
