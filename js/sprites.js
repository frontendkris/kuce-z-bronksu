import k from "./kuce.js";

const _digging_speed = 20;
const path = 'assets/img/';

export default function Sprites() {

  /**
   * Tła
   */
  k.loadSprite('clouds', `${path}BG1.png`, {
    sliceX: 1,
    sliceY: 1,
    width: 320,
    height: 192,
  });
  k.loadSprite('mountains_back', `${path}BG3.png`, {
    sliceX: 1,
    sliceY: 1,
    width: 320,
    height: 192,
  });
  k.loadSprite('mountains_front', `${path}BGFront.png`, {
    sliceX: 1,
    sliceY: 1,
    width: 320,
    height: 192,
  });
  k.loadSprite('castle', `${path}bg-pixel.png`, {
    sliceX: 1,
    sliceY: 1,
    width: 700,
    height: 393,
  });

  /**
   * Platformy
   */
  k.loadSprite('carbon', `${path}ash.png`, {
    sliceX: 1,
    sliceY: 1,
    width: 32,
    height: 32,
  });
  k.loadSpriteAtlas(`${path}ground.png`, {
    'grass': {
      x: 64 * 5,
      y: 64 * 2.4,
      sliceX: 1,
      sliceY: 1,
      width: 64,
      height: 64,
    },
    'soil': {
      x: 64 * 5,
      y: 64 * 3.4,
      sliceX: 1,
      sliceY: 1,
      width: 64,
      height: 64,
    }
  });
  k.loadSpriteAtlas(`${path}ground_ashes.png`, {
    'ash': {
      x: 64 * 5,
      y: 64 * 2.4,
      sliceX: 1,
      sliceY: 1,
      width: 64,
      height: 64,
    },
  });
  k.loadSpriteAtlas(`${path}village.png`, {
    'rock': {
      x: 64 * 13.5,
      y: 32 * 11,
      sliceX: 1,
      sliceY: 1,
      width: 64,
      height: 32,
    },
    'tree1': {
      x: 64 * 13,
      y: 64 * 7,
      sliceX: 1,
      sliceY: 1,
      width: 64*2.5,
      height: 64*2.5,
    },
    'wall': {
      x: 64 * 12.3,
      y: 64 * 2.3,
      sliceX: 1,
      sliceY: 1,
      width: 64*2.5,
      height: 64,
    },
    'bushes': {
      x: 64 * 7,
      y: 64 * 8.5,
      sliceX: 1,
      sliceY: 1,
      width: 64*1.5,
      height: 64*1,
    },
    'bushes2': {
      x: 64 * 9,
      y: 64 * 8.5,
      sliceX: 1,
      sliceY: 1,
      width: 64*1.5,
      height: 64*1,
    },
    'hay': {
      x: 64 * 3,
      y: 64 * 3.5,
      sliceX: 1,
      sliceY: 1,
      width: 64*1,
      height: 64*1,
    },
  });
  k.loadSprite("fire", `${path}fire.png`, {
    sliceX: 6,
    sliceY: 1,
    width: 45,
    height: 90,
    anims: {
      "burning": {
        from: 0, 
        to: 5, 
        loop: true, 
        pingpong: false, 
        speed: _digging_speed
      }
    }
  });

  /**
   * Postacie
   */
  k.loadSprite("bimkie", `${path}bimkie.png`, {
    sliceX: 3,
    sliceY: 1,
    width: 256,
    height: 256,
    anims: {
      "idle": {
        from: 0,
        to: 0,
      },
      "dig": {
        from: 0,
        to: 2,
        loop: true,
        pingpong: true,
        speed: _digging_speed,
      },
      "run": {
        from: 0, 
        to: 1, 
        loop: true, 
        pingpong: true, 
        speed: _digging_speed
      }
    }
  });

  k.loadSprite("bapple", `${path}bapple.png`, {
    sliceX: 3,
    sliceY: 1,
    width: 256,
    height: 256,
    anims: {
      "idle": {
        from: 0,
        to: 0,
      },
      "dig": {
        from: 0,
        to: 2,
        loop: true,
        pingpong: true,
        speed: _digging_speed,
      }
    }
  });
}