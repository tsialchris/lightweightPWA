import {
  goToErrorPage, goToPage, isExpired, setTextDirectionForLanguage, enableConsolePersistence
} from "../utils/utils.js";

enableConsolePersistence();

import {translate} from "../translationUtils.js";

document.getElementsByTagName("body").onload = await translate();

import XMLDisplayService from "../services/XMLDisplayService/XMLDisplayService.js";
import constants from "../constants.js";
import LeafletService from "../services/LeafletService.js";
import environment from "../../environment.js";


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

  this.handleLeafletAccordion = function () {
    let accordionItems = document.querySelectorAll("div.leaflet-accordion-item");
    accordionItems.forEach((accItem, index) => {
      accItem.addEventListener("click", (evt) => {
        accItem.classList.toggle("active");
        if (accItem.classList.contains("active")) {
          accItem.setAttribute('aria-expanded', "true");
        } else {
          accItem.setAttribute('aria-expanded', "false");
        }
        accItem.querySelector(".leaflet-accordion-item-content").addEventListener("click", (event) => {
          event.stopImmediatePropagation();
          event.stopPropagation();
        })
      })
      accItem.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          accItem.classList.toggle("active");
          if (accItem.classList.contains("active")) {
            accItem.setAttribute('aria-expanded', "true");
          } else {
            accItem.setAttribute('aria-expanded', "false");
          }
        }
        accItem.querySelector(".leaflet-accordion-item-content").addEventListener("keydown", (event) => {
          event.stopImmediatePropagation();
          event.stopPropagation();
        })
      })
    })
  }
  let focusModalHeader = function () {
    document.querySelectorAll(".modal-header").forEach(element => {
      if (element.offsetParent) {
        document.querySelector(".modal-header").focus();
      }
    })

  }

  this.getLangLeaflet = function () {
    document.querySelector(".loader-container").setAttribute('style', 'display:block');
    let lang = document.querySelector("input[name='languages']:checked").value
    this.leafletLang = lang;
    getLeaflet(lang);
    setTextDirectionForLanguage(lang);
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

  let showExpired = function () {
    document.getElementById("settings-modal").style.display = "none";
    document.querySelector(".loader-container").setAttribute('style', 'display:none');
    document.querySelector("#expired-modal").setAttribute('style', 'display:flex !important');
    focusModalHeader();
  }

  let showIncorrectDate = function () {
    document.querySelector("#incorrect-date-modal").setAttribute('style', 'display:flex !important');
    focusModalHeader();
  }


  let self = this;

  let showXML = function (result) {
    document.getElementById("settings-modal").style.display = "block";
    document.querySelector(".product-name").innerText = result.productData.name;
    document.querySelector(".product-description").innerText = result.productData.description;
    /* document.querySelector(".leaflet-title-icon").classList.remove("hiddenElement");*/
    let xmlService = new XMLDisplayService("#leaflet-content");
    let resultDocument = xmlService.getHTMLFromXML(result.xmlContent);
    let leafletImages = resultDocument.querySelectorAll("img");
    for (let image of leafletImages) {
      let imageSrc = image.getAttribute("src");
      let dataUrlRegex = new RegExp(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i);
      if (!!imageSrc.match(dataUrlRegex) || imageSrc.startsWith("data:")) {
        //we don't alter already embedded images
        continue;
      }
      image.setAttribute("src", result.leafletImages[imageSrc]);
    }
    let sectionsElements = resultDocument.querySelectorAll(".leaflet-accordion-item");
    let htmlContent = "";
    sectionsElements.forEach(section => {
      htmlContent = htmlContent + section.outerHTML;
    })

    if (!htmlContent) {
      goToErrorPage(constants.errorCodes.xml_parse_error, new Error("Unsupported format for XML file."))
    }

    document.querySelector("#leaflet-content").innerHTML = htmlContent;
    let leafletLinks = document.querySelectorAll(".leaflet-link");
    xmlService.activateLeafletInnerLinks(leafletLinks);
    self.handleLeafletAccordion();
    document.querySelector(".loader-container").setAttribute('style', 'display:none');
    focusModalHeader();
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
         <div class="language-flag" style="background-image: url(./images/flags/${lang.value}.svg);"></div>
         <div class="language-label">${lang.label} - (${lang.nativeName})</div>
         <input type="radio" name="languages" ${index === 0 ? "checked" : ""} value="${lang.value}" id="${lang.value}">
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
