import { algFunc } from "./funcs.js";

const txtArea = document.getElementById("usrInpt");

const btnStrt = document.getElementById("strt");

btnStrt.onclick = function () {
  algFunc(txtArea.value);
  return false;
};
