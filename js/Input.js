var events = {
  press: 'keydown',
  release: 'keyup',
}

var Input = function (player, keys) {
  var pressing = []
  // for (let key of Object.keys(setup)) {
  //   for (let e of Object.keys(setup[key])) {
  //     for (let stance of Object.keys(setup[key][e])) {
  //       document.addEventListener(events[e], function (event) {
  //         // event.preventDefault()
  //         event.stopPropagation()
  //
  //         if (stance === player.stance) {
  //           spider.data.moveX = 10
  //           spider.data.aniSet = 'walk'
  //           spider.data.flip = 1
  //         }
  //         else if (setup[key][e].default) {
  //           console.log(3)
  //           Object.assign(player.stance, setup[key][e].default)
  //         }
  //       }, false)
  //     }
  //   }
  // }

  document.addEventListener('keydown', function (e) {
    var keyCode = e.keyCode

    if (!pressing.includes(keyCode))
      pressing.push(keyCode)
    else
      return

    if (keys[keyCode] && keys[keyCode].press) {
      var setup = keys[keyCode].press
      if (setup[player.stance]) {
        Object.assign(spider.data, setup[player.stance])
      }
      else if (setup.default) {
        Object.assign(spider.data, setup.default)

      }
      if (setup.always) {
        Object.assign(spider.data, setup.always)
      }
    }
  })

  document.addEventListener('keyup', function (e) {
    var keyCode = e.keyCode

    pressing.splice(pressing.indexOf(keyCode), 1)

    if (keys[keyCode] && keys[keyCode].release) {
      var setup = keys[keyCode].release
      if (setup[player.stance]) {
        Object.assign(spider.data, setup[player.stance])
      }
      else if (setup.default) {
        Object.assign(spider.data, setup.default)
      }
      if (setup.always) {
        Object.assign(spider.data, setup.always)
      }
    }
  })
}
