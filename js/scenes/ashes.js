import Bapple from "../characters/bapple.js";
import Bimkie from "../characters/bimkie.js";
import k from "../kuce.js";

export default function Ashes() {
  k.scene('ashes', () => {
    /**
     * Warstwy gry
     */
    k.layers(['3plan', '2plan', 'npc', 'obj', 'over', 'ui']);

    /**
     * tło sceny
     */
    k.add([
      sprite('clouds'),
      layer('3plan'),
      origin("top"),
      pos(k.width() * 0.5, k.height() * -0.3),
      scale(4),
      fixed(),
    ]);
    k.add([
      sprite('mountains_back'),
      layer('3plan'),
      origin("top"),
      pos(k.width() * 0.5, k.height() * -0.2),
      scale(4),
      fixed(),
    ]);
    // k.add([
    //   sprite('castle'),
    //   layer('3plan'),
    //   origin("top"),
    //   pos(k.width() * 0.9, k.height() - 580),
    //   scale(2),
    // ]);

    /**
     * Bohaterowie sceny
     */
    Bimkie();
    Bapple();

    /**
     * Komentarze bimkie guy'a
     */
    k.play("bg", { volume: 0.3, loop: true });
    const maxComment = 4;
    let lastComment = 4;
    setInterval(() => {
      if (lastComment < maxComment) {
        lastComment++;
      } else {
        lastComment = 1;
      }
      k.play(`c${lastComment}`, {
        volume: 1.5
      });
    }, 15000);

    /**
     * Ustawienia poziomów
     */
    const levelCfg = {
      width: 64,
      height: 64,
      '~': () => [sprite("ash"), layer('obj'), 'floor', scale(1), area(), solid()],
      '=': () => [sprite("grass"), layer('obj'), 'floor', scale(1), area(), solid()],
      "x": () => [rect(64, 64), pos(-64, 0), color([0, 0, 0, 0]), area(), solid()],
      "s": () => [sprite("soil"), layer('obj'), 'floor', scale(1), area(), solid()],
      "r": () => [sprite("rock"), layer('obj'), 'barrier', scale(1), origin('bot'), area({ width: 47, height: 27 }), body()],
      "w": () => [sprite('wall'), layer('2plan'), origin("top"), scale(1.6), area()],
      "b": () => [sprite('bushes'), layer('over'), origin("center"), scale(2), area({ width: 90, height: 40 })],
      "B": () => [sprite('bushes2'), layer('over'), origin("center"), scale(2), area({ width: 90, height: 40 })],
      "h": () => [sprite('hay'), layer('obj'), origin("bot"), scale(2), area({ width: 40, height: 35 }), body()],
      "f": () => [sprite('fire'), layer('2plan'), origin("center"), scale(2), area({ width: 20, height: 70 })],
    }

    const lvl_1 = [
      "x                                                                                                                             x",
      "x                                                                                                                             x",
      "x                  f                                                                                                          x",
      "x                                                                                                                             x",
      "x                                                                                                                             x",
      "x      ww                                                                                                                     x",
      "x   wwwwwww                                                                                                                   x",
      "xw  bwwwww B  ww   b wwww       h                                                                                             x",
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~================================================================================================xx",
    ];

    k.addLevel(lvl_1, levelCfg);

    /**
    * podróżne elementy
    */
    k.add([sprite('castle'), layer('3plan'), origin("bot"), pos(400, 530), scale(1), area()]);
    // k.add([sprite('wall'), layer('2plan'), origin("bot"), pos(350, 550), scale(2), area()]);
    k.add([sprite('tree1'), layer('2plan'), origin("bot"), pos(rand(lvl_1[0].length * 64), 530), scale(4), area()]);
    k.add([sprite('tree1'), layer('2plan'), origin("bot"), pos(rand(lvl_1[0].length * 64), 530), scale(4), area()]);
    k.add([sprite('tree1'), layer('2plan'), origin("bot"), pos(rand(lvl_1[0].length * 64), 530), scale(3.5), area()]);
    k.add([sprite('tree1'), layer('2plan'), origin("bot"), pos(rand(lvl_1[0].length * 64), 530), scale(4.1), area()]);
    k.add([sprite('tree1'), layer('2plan'), origin("bot"), pos(rand(lvl_1[0].length * 64), 530), scale(3.7), area()]);
    k.add([sprite("rock"), layer('obj'), 'barrier', scale(1), pos(rand(vec2(5000, 510))), origin('bot'), area({ width: 47, height: 27 }), body()]);

  });
}