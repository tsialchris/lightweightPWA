import {getTranslation, translate} from "../translationUtils.js";
import {setFontSize} from "../utils/utils";

document.getElementsByTagName("body").onload = async (event) => {
  await translate();
  setFontSize();
}

