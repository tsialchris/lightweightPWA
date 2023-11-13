const constants = {
  DEV_DEBUG: "_epiLog_",
  EPI_DOMAIN: "_epiDomain_",
  APP_LANG: "_appLang_",
  monthNames: ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],

  /*error code value matches with a key in translations. Adding a new code should sync with translations*/
  errorCodes: {
    "gtin_not_created": "001",
    "gtin_wrong_length": "002",
    "gtin_wrong_digit": "003",
    "gto_timeout": "004",
    "xml_parse_error": "005",
    "xsl_parse_error": "006",
    "leaflet_timeout": "007",
    "url_redirect_error": "008",
    "gtin_wrong_chars": "009",
    "unknown_error": "010",
    "no_uploaded_epi": "011",
    "get_dsu_timeout": "012",
    "misconfiguration": "099"
  },
  rtlLangCodes: ["ar", "he"],
  //other rtl language codes to be used for later:  "arc", "arz", "ckb", "dv", "fa", "ha", "he", "khw", "ks", "ps", "sd", "ur", "uz_AF", "yi"

  fontScaleMap: {
    basic_font: {100: "5mm", 130: "6mm", 150: "7mm", 175: "8mm", 200: "9mm", 250: "11mm", 300: "14mm"},
    l_font: {100: "7mm", 130: "7.5mm", 150: "8mm", 175: "9mm", 200: "10mm", 250: "12mm", 300: "15mm"},
    xl_font: {100: "9mm", 130: "9.5mm", 150: "10mm", 175: "11mm", 200: "12mm", 250: "14mm", 300: "17mm"},
  }

}
export default constants;
