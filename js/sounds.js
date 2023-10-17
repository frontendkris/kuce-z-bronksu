import k from "./kuce.js";

const path = "assets/sounds/"

export default function Sounds(){
  k.loadSound("bg", path+"bg.mp3");

  k.loadSound("c1", path+"c1.mp3");
  k.loadSound("c2", path+"c2.mp3");
  k.loadSound("c3", path+"c3.mp3");
  k.loadSound("c4", path+"c4.mp3");

  k.loadSound("gz1", path+"gz1.mp3");
  k.loadSound("gz2", path+"gz2.mp3");
  
  k.loadSound("lose1", path+"lose1.mp3");

  k.loadSound("s1", path+"s1.mp3");
  k.loadSound("s2", path+"s2.mp3");
}