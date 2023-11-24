const constants = {
  DEV_DEBUG: "_epiLog_",
  EPI_DOMAIN: "_epiDomain_",
  FONT_ZOOM: "_fontZoom_",
  APP_LANG: "_appLang_",
  monthNames: ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  FONT_SCALE_MAP: {
    //1% = 0.014rem
    basic_font: {
      100: "1.4rem",
      110: 0.014 * 2.86 + 1.4 + "rem",
      115: 0.014 * 2.86 + 1.4 + "rem",
      125: 0.014 * 22.14 + 1.4 + "rem",
      130: 0.014 * 22.14 + 1.4 + "rem",
      150: 0.014 * 39.29 + 1.4 + "rem",
      170: 0.014 * 48 + 1.4 + "rem",
      175: 0.014 * 48 + 1.4 + "rem",
      200: 0.014 * 85.71 + 1.4 + "rem",
      250: 0.014 * 85.71 + 1.4 + "rem",
      300: 0.014 * 85.71 + 1.4 + "rem",
    },
    l_font: {
      100: "1.8rem",
      110: 0.014 * 0 + 1.8 + "rem",
      115: 0.014 * 0 + 1.8 + "rem",
      125: 0.014 * 10.5 + 1.8 + "rem",
      130: 0.014 * 10.5 + 1.8 + "rem",
      150: 0.014 * 39.29 + 1.8 + "rem",
      170: 0.014 * 60.71 + 1.8 + "rem",
      175: 0.014 * 60.71 + 1.8 + "rem",
      200: 0.014 * 85.71 + 1.8 + "rem",
      250: 0.014 * 85.71 + 1.8 + "rem",
      300: 0.014 * 85.71 + 1.8 + "rem",
    },
    xl_font: {
      100: "2.5rem",
      110: 0.014 * 0 + 2.5 + "rem",
      115: 0.014 * 0 + 2.5 + "rem",
      125: 0.014 * 7.14 + 2.5 + "rem",
      130: 0.014 * 7.14 + 2.5 + "rem",
      150: 0.014 * 39.29 + 2.5 + "rem",
      170: 0.014 * 52.86 + 2.5 + "rem",
      175: 0.014 * 52.86 + 2.5 + "rem",
      200: 0.014 * 78.57 + 2.5 + "rem",
      250: 0.014 * 78.57 + 2.5 + "rem",
      300: 0.014 * 78.57 + 2.5 + "rem",
    }
  },
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
  rtlLangCodes: ["ar", "he"]
  //other rtl language codes to be used for later:  "arc", "arz", "ckb", "dv", "fa", "ha", "he", "khw", "ks", "ps", "sd", "ur", "uz_AF", "yi"
}
export default constants;
