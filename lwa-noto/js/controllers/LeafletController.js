import {
  goToErrorPage, goToPage, isExpired, setTextDirectionForLanguage, enableConsolePersistence, setFontSize
} from "../utils/utils.js";
import constants from "../constants.js";
import LeafletService from "../services/LeafletService.js";
import environment from "../../environment.js";
import {focusModalHeader, renderLeaflet, showExpired, showIncorrectDate} from "../utils/leafletUtils.js"
import {translate} from "../translationUtils.js";

enableConsolePersistence();

window.onload = async (event) => {
  await translate();
}
document.getElementsByTagName("body").onload = setFontSize();

function LeafletController() {

  let getLeaflet = function (lang) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let gtin = urlParams.get("gtin");
    let batch = urlParams.get("batch");
    let expiry = urlParams.get("expiry");
    let lsEpiDomain = environment.enableEpiDomain ? localStorage.getItem(constants.EPI_DOMAIN) : environment.epiDomain;
    lsEpiDomain = lsEpiDomain || environment.epiDomain;
    let timePerCall = environment.timePerCall || 10000;
    let totalWaitTime = environment.totalWaitTime || 60000;
    let gto_TimePerCall = environment.gto_TimePerCall || 3000;
    let gto_TotalWaitTime = environment.gto_TotalWaitTime || 15000;
    let leafletService = new LeafletService(gtin, batch, expiry, lang, lsEpiDomain);

    document.querySelector(".loader-container").setAttribute('style', 'display:block');

    leafletService.getLeafletUsingCache(timePerCall, totalWaitTime, gto_TimePerCall, gto_TotalWaitTime).then((result) => {
      if (result.resultStatus === "xml_found") {
        try {
          showXML(result);
          if (isExpired(expiry)) {
            showExpired();
          }

          /* removed for  MVP1
          if (!getExpiryTime(expiry)) {
            showIncorrectDate();
          }*/
        } catch (e) {
          goToErrorPage(e.errorCode, e)
        }
      }
      if (result.resultStatus === "no_xml_for_lang") {
        showAvailableLanguages(result)
      }
    }).catch(err => {
      goToErrorPage(err.errorCode, err)
    })
  };


  this.getLangLeaflet = function () {
    document.querySelector(".loader-container").setAttribute('style', 'display:block');
    let lang = document.querySelector("input[name='languages']:checked").value
    this.leafletLang = lang;
    getLeaflet(lang);
    setTextDirectionForLanguage(lang, "#leaflet-content");
    setTextDirectionForLanguage(lang, ".modal-body .page-header");

    document.querySelector("#leaflet-lang-select").setAttribute('style', 'display:none !important');
  }

  this.scanAgainHandler = function () {
    goToPage("/scan.html")
  }

  this.goHome = function () {
    goToPage("/index.html")
  }

  this.closeModal = function (modalId) {
    document.querySelector("#" + modalId).setAttribute('style', 'display:none !important');
    if (modalId === "leaflet-lang-select") {
      goToPage("/index.html");
    }
    document.getElementById("settings-modal").style.display = "block";
  }

  let self = this;

  let showXML = function (result) {
    document.getElementById("settings-modal").style.display = "block";
    try {
      renderLeaflet(result);
    } catch (e) {
      goToErrorPage(constants.errorCodes.xml_parse_error, new Error("Unsupported format for XML file."))
    }

  }

  let showAvailableLanguages = function (result) {
    document.getElementById("settings-modal").style.display = "none";
    // document.querySelector(".product-name").innerText = translations[window.currentLanguage]["select_lang_title"];
    // document.querySelector(".product-description").innerText = translations[window.currentLanguage]["select_lang_subtitle"];
    // let langList = `<div class="select-lang-text">${translations[window.currentLanguage]["select_lang_text"]}</div><select class="languages-list">`;
    document.querySelector(".loader-container").setAttribute('style', 'display:none');
    if (result.availableLanguages.length >= 1) {
      let langSelectContainer = document.querySelector("#leaflet-lang-select");
      langSelectContainer.setAttribute('style', 'display:flex !important');
      document.querySelector(".proceed-button.no-leaflet").setAttribute('style', 'display:none');
      //  document.querySelector(".text-section.no-leaflet").setAttribute('style', 'display:none');
      let languagesContainer = document.querySelector(".languages-container");
      /*
        site for flags https://flagpedia.net/download
      */
      result.availableLanguages.forEach((lang, index) => {
        let langRadio = `
         <input type="radio" name="languages" ${index === 0 ? "checked" : ""} value="${lang.value}" id="${lang.value}">
         <div class="language-label">${lang.label} - (${lang.nativeName})</div>
         <div class="language-flag" style="background-image: url(./images/flags/${lang.value}.svg);"></div>
        `;
        let radioFragment = document.createElement('label');
        radioFragment.classList.add("language-item-container");
        radioFragment.setAttribute("role", "radio");
        radioFragment.setAttribute("tabindex", "0");
        radioFragment.innerHTML = langRadio;
        radioFragment.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            radioFragment.querySelector("input").checked = true;
          }
        })
        languagesContainer.appendChild(radioFragment);
      });
      focusModalHeader();
    } else {
      goToErrorPage(constants.errorCodes.no_uploaded_epi, new Error(`Product found but no associated leaflet`));
      /*      document.querySelector(".proceed-button.has-leaflets").setAttribute('style', 'display:none');
            document.querySelector(".text-section.has-leaflets").setAttribute('style', 'display:none');*/
    }
  }

  let addEventListeners = () => {
    document.getElementById("scan-again-button").addEventListener("click", this.scanAgainHandler);
    document.getElementById("modal-scan-again-button").addEventListener("click", this.scanAgainHandler);
    document.getElementById("go-back-button").addEventListener("click", this.goHome);
    document.querySelectorAll(".modal-container.popup-modal .close-modal").forEach(item => {
      item.addEventListener("click", (event) => {
        this.closeModal(event.currentTarget.getAttribute("modal-id"))
      })
    })
    document.getElementById("proceed-button").addEventListener("click", this.getLangLeaflet)

  }
  addEventListeners();
  getLeaflet(localStorage.getItem(constants.APP_LANG) || "en");

}

document.querySelector(".loader-container").setAttribute('style', 'display:block');
const leafletController = new LeafletController();


window.leafletController = leafletController;
