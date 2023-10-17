// game modules
import k from "./kuce.js";
import Ashes from "./scenes/ashes.js";
import Sprites from "./sprites.js";
import Sounds from "./sounds.js";
import Settings from "./settings.js";

Settings();
Sprites(); // load sprites
Sounds(); // load sounds
// load scenes
Ashes();

k.go('ashes');

focus();