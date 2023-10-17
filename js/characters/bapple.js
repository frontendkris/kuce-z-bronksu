import k from "../kuce.js";

const _move_speed = 220;
const _jump_force = 550;
const _size = 0.35;

export default function Bapple(){
  const bapple = add([
    sprite('bapple', { anim: "idle" }),
    layer('npc'),
    scale(_size),
    pos(500, k.height() - 200),
    origin('center'),
    area(),
    body(),
    "friend",
  ]);
  // bapple.scale.x = -1

  setInterval(() => {
    bapple.play('dig');
    wait(1, () => {
      bapple.play('idle');
    })
  }, 5000);
}