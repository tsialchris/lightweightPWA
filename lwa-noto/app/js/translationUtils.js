import {setTextDirectionForLanguage} from "../../utils.js";
import constants from "../../constants.js";

const supportedLanguageCodes = ["ar", "de", "en", "es", "es-419", "fr", "ko", "nl", "pt", "pt-br", "uk", "zh"];

const langSubtypesMap = {
  "es-ar": "es",
  "es-bo": "es",
  "es-cl": "es",
  "es-co": "es",
  "es-cr": "es",
  "es-do": "es",
  "es-ec": "es",
  "es-sv": "es",
  "es-gt": "es",
  "es-mx": "es",
  "es-ni": "es",
  "es-pa": "es",
  "es-py": "es",
  "es-pe": "es",
  "es-pr": "es",
  "es-uy": "es",
  "es-ve": "es",
  "es-us": "es",
  "es-es": "es",
  "es-419": "es",
  "pt-pt": "pt",
  "de-de": "de",
  "fr-fr": "fr",
  "fr-be": "fr",
  "fr-ca": "fr",
  "nl-nl": "nl",
  "ko-kr": "ko",
  "zh-cn": "zh",
  "zh-hans": "zh",
  "zh-hant": "zh",
  "zh-hk": "zh"
}

function transformToISOStandardLangCode(code) {
  //language codes on phones have "_" instead of "-" and for base languages ends with "_"
  let replaceValue = "-";
  if (code.slice(-1) === "_") {
    replaceValue = "";
  }
  return code.replace("_", replaceValue);
}

async function fetchTranslation(langCode) {
  try {
    const dataModule = await import(`./../translations/${langCode}.js`);
    return dataModule.default
    // You can now use the 'translations' object for localization in your application
  } catch (error) {
    alert(`An error has occurred: ${error.message} on fetching translation for ${langCode} 
    Possible network issue!!! Check your network connection and try again`);
  }
}

let currentAppTranslation;

function setDefaultLanguage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let appLang = urlParams.get("lang") || window.navigator.language.toLowerCase() || localStorage.getItem(constants.APP_LANG);
  appLang = transformToISOStandardLangCode(appLang);
  appLang = langSubtypesMap[appLang.toLowerCase()] || appLang;
  appLang = supportedLanguageCodes.includes(appLang) ? appLang : "en";
  localStorage.setItem(constants.APP_LANG, appLang);
  document.querySelector("body").setAttribute("app-lang", appLang);
  setTextDirectionForLanguage(appLang);
}

export async function translate() {
  setDefaultLanguage();
  let matches = document.querySelectorAll("[translate]");
  currentAppTranslation = await fetchTranslation(localStorage.getItem(constants.APP_LANG));
  matches.forEach((item) => {
    item.innerHTML = currentAppTranslation[item.getAttribute('translate')];
  });
}

export function getTranslation(key) {
  setDefaultLanguage();
  if (!currentAppTranslation) {
    fetchTranslation(localStorage.getItem(constants.APP_LANG)).then(result => {
      currentAppTranslation = result;
      return currentAppTranslation[key];
    });
  } else {
    return currentAppTranslation[key];
  }
}
