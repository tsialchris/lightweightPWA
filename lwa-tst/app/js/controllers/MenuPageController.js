import {goToPage, setFontSize, updateFontZoom} from "../../../utils.js"
import {getTranslation, translate} from "../translationUtils.js";
import environment from "../../../environment.js";
import constants from "../../../constants.js";


function MenuPageController() {

  this.goHome = function () {
    goToPage("/main.html")
  }

  document.querySelector(".close-modal").addEventListener("click", this.goHome);

  document.getElementById("go-home-button").addEventListener("click", this.goHome)
}


const menuPageController = new MenuPageController();

window.onload = async (event) => {
  await translate();
  document.querySelector("#settings-modal").classList.remove("hiddenElement");
  document.querySelector(".loader-container").setAttribute('style', 'display:none');
  setFontSize();
}

window.menuPageController = menuPageController;

