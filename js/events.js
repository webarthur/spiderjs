Input(spider.data, {
  // arrow left
  37: {
    press: {
      always: {
        flip: -1
      },
      default: {
        moveX: -10,
        aniSet: 'walk',
      },
      crouched: {
        moveX: -5,
        aniSet: 'crouched'
      },
      climb: {
        moveX: -5,
        aniSet: 'climbing'
      },
      climbing: {
        moveX: -5,
        aniSet: 'climbing'
      }
    },
    release: {
      always: {
        moveX: 0
      },
      default: {
        aniSet: 'default'
      },
      crouched: {
        aniSet: 'down'
      },
      climb: { aniSet: 'climb' },
      climbing: { aniSet: 'climb' }
    }
  },

  // arrow right
  39: {
    press: {
      always: {
        flip: 1
      },
      default: {
        moveX: 10,
        aniSet: 'walk',
      },
      crouched: {
        moveX: 5,
        aniSet: 'crouched'
      },
      climb: {
        moveX: 5,
        aniSet: 'climbing'
      },
      climbing: {
        moveX: 5,
        aniSet: 'climbing'
      }
    },
    release: {
      always: {
        moveX: 0
      },
      default: {
        aniSet: 'default'
      },
      crouched: {
        aniSet: 'down'
      },
      climb: { aniSet: 'climb' },
      climbing: { aniSet: 'climb' }
    }
  },

  // arrow up
  38: {
    press: {
      default: {
        aniSet: 'lookup'
      },
      climb: {
        aniSet: 'climbing',
        stance: 'climbing',
        moveY: -5
      },
      climbing: {
        aniSet: 'climbing',
        stance: 'climbing',
        moveY: -5
      }
    },
    release: {
      always: {
        moveY: 0
      },
      default: {
        aniSet: 'default'
      },
      climbing: {
        aniSet: 'climb'
      }
    }
  },

  // arrow down
  40: {
    press: {
      default: {
        moveY: 5,
        aniSet: 'down',
        stance: 'crouched'
      },
      climb: {
        aniSet: 'climbing',
        stance: 'climbing',
        moveY: 5
      },
      climbing: {
        aniSet: 'climbing',
        stance: 'climbing',
        moveY: 5
      }
    },
    release: {
      always: {
        moveY: 0,
      },
      crouched: {
        aniSet: 'default',
        stance: 'default'
      },
      climbing: {
        aniSet: 'climb',
        // stance: 'default'
      },
      climb: {
        aniSet: 'climb',
        // stance: 'default'
      }
    }
  },

  // jump
  32: {
    press: {
      default: {
        g: -20,
        soil: false,
        jump: 1,
        stance: 'jumping',
        aniSet: 'jump'
      }
    }
  },

  // hold
  17: {
    press: {
      jumping: {
        gravity: false,
        aniSet: 'climb',
        stance: 'climb'
      }
    },
    release: {
      default: {
        gravity: true,
        stance: 'default',
        aniSet: 'default'
      }
    }
  }
})
