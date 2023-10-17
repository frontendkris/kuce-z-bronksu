import k from "../kuce.js";

const _move_speed = 220;
const _super_speed = 520;
const _jump_force = 550;
const _size = 0.45;

export default function Bimkie(){
  const bimkie = add([
    sprite('bimkie', { anim: "idle" }),
    layer('obj'),
    scale(_size),
    origin('center'),
    pos(100, k.height() - 364),
    area(),
    body(),
    "player"
  ]);
  bimkie.scale.x = _size;

  console.log(bimkie.isColliding('floor'))

  bimkie.onUpdate(() => {
    if (bimkie.pos.x > (k.width() * 0.5)) {
      camPos(bimkie.pos.x, k.height() * 0.5)
    } else if (bimkie.pos.x < (k.width() * 0.5)) {

    } else {
      camPos(k.width() * 0.5, k.height() * 0.5)
    }
  });
  
  k.keyPress('down', () => {
    bimkie.play('dig');
  });
  k.keyRelease('down', () => {
    bimkie.play('idle');
  });

  k.keyDown('right', () => {
		bimkie.scale.x = _size;
		bimkie.play('run');
    bimkie.move(vec2(isKeyDown("shift") ? _super_speed : _move_speed, 0));
	});
  k.keyRelease('right', () => {
    bimkie.play('idle');
  });

  k.keyDown('left', () => {
		// bimkie.scale.x = -_size;
		bimkie.play('run');
    bimkie.move(vec2(isKeyDown("shift") ? -_super_speed : -_move_speed, 0));
	});
  k.keyRelease('left', () => {
    bimkie.play('idle');
  });

	k.keyPress('up', () => {
    bimkie.play('run');
    bimkie.jump(_jump_force);
	});
	k.keyRelease('up', () => {
		bimkie.play('idle');
	});
}