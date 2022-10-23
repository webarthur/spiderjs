var gcounter = 1
var Game = new Vue({

  el: '#stage',

  data: {
    stage: {
      w: 1200,
      h: 700
    },
    p1: {
      x: 100,
      y: 200,
      w: 40,
      h: 52,
      g: 1,
      gacc: .35,
      flip: 1,
      jump: 0,
      moveX: 0,
      moveY: 0,
      img: 'walk',
      gravity: true,
      stance: 'default',
      aniCounter: 0,
      aniSet: 'default',
      animation: {
        // default: 'default',
        default: ['walk'],
        lookup: ['lookup'],
        jump: ['jump'],
        down: ['down'],
        crouched: ['crouched', 'crouched2', 'crouched3'],
        climb: ['climb'],
        walk: ['walka', 'walk', 'walkb', 'walk'],
        climbing: ['climba', 'climb', 'climbb', 'climb']
      }
    },
    platforms: [
      { x: 400, y: 600, w: 70, h: 70 },
      { x: 700, y: 600, w: 70, h: 50 },
      { x: 700, y: 470, w: 70, h: 50 },
      { x: 700, y: 340, w: 70, h: 50 },
      { x: 700, y: 140, w: 70, h: 50 },
      { x: 1050, y: 300, w: 70, h: 50 },
      { x: 100, y: 650, w: 300, h: 20 },
      { x: 300, y: 260, w: 300, h: 60 },
    ]
  },

  mounted () {
    window.spider = {
      data: this.p1,
      // set (prop, val) {
      //   if (typeof prop === 'object')
      //     Object.keys(prop)
      //       .forEach(k => spider.data[k] = prop[k])
      //   else
      //     spider.data[prop] = val
      // }
    }
    setInterval(this.aniTimer, 75)
  },

  methods: {

    aniTimer () {
      if (this.p1.aniCounter >= this.p1.animation[this.p1.aniSet].length) {
        this.p1.aniCounter = 0
      }
      this.p1.img = this.p1.animation[this.p1.aniSet][this.p1.aniCounter]
      this.p1.aniCounter += 1
    },

    isInRangeX (p, x, w) {
      if ((p.x + p.w) >= x && p.x <= (x + w)) {
        return true
      }
      return false
    },

    // coords: function (range = {}) {
    // },

    move (x, y) {
      var r = { x: true, y: true }
      var p = this.p1

      // check stage top
      // if (p.y + y < 0) {
      //   r.y = false
      // }
      // check stage bottom
      if ((p.y + y - 10) >= this.stage.h) {
        r.y = false
        p.x = 100
        p.y = 200
      }
      // check platforms
      else {
        for (platform of this.platforms) {
          if (this.isInRangeX(p, platform.x, platform.w)) {
            if (p.y + p.h + y >= platform.y && (p.y + p.h) <= platform.y) {
              r.y = false
              p.y = platform.y - p.h
              p.soil = true
              if (p.jump) {
                p.jump = 0
                p.stance = 'default'
                p.aniSet = 'default'
              }
            }
          }
        }
      }

      // move in y
      if (r.y)
        p.y += y

      console.log(y)

      var testx = p.x + x + p.w
      if (testx > this.stage.w)
        r.x = false
      else
        p.x += x

      // var testy = p.y + y + p.h
      // if (testy > this.stage.h)
      //   r.y = false
      // else
      //   p.y += y

      return r
    },

    clock () {
      // mootion

      // if (this.p1.gravity) {
        if (Game.move(Game.p1.moveX, Game.p1.moveY + Game.p1.g).y && this.p1.gravity) {
          Game.p1.g += Game.p1.gacc * gcounter
          gcounter += 1
        }
        else {
          Game.p1.g = 0
          gcounter = 0
        }
      // }
      // else {
      //   Game.p1.g = 0
      //   gcounter = 1
      // }

      setTimeout(this.clock, 30)
    }

  }
})

Game.clock()
