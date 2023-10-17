import k from "./kuce.js";

export default function Settings(){
  onKeyPress("f", (c) => {
    fullscreen(!isFullscreen())
  })
}