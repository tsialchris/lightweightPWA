import {translate} from "../translationUtils.js";
import {setFontSize} from "../../../utils.js";

window.onload = async (event) => {
  await translate();
}

document.querySelector("body").onload = setFontSize();


