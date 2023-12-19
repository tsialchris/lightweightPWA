const constants = {
  DEV_DEBUG: "_epiLog_",
  EPI_DOMAIN: "_epiDomain_",
  FONT_ZOOM: "_fontZoom_",
  APP_LANG: "_appLang_",
  monthNames: ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  FONT_SCALE_MAP: {
    //1% = 0.016rem
    basic_font: {
      100: 1.6,
      110: 0.016 * 2.86 + 1,
      115: 0.016 * 2.86 + 1,
      125: 0.016 * 2.86 + 1,
      130: 0.016 * 2.86 + 1,
      150: 0.016 * 39.29 + 1.6,
      170: 0.016 * 48 + 1.6,
      175: 0.016 * 48 + 1.6,
      200: 0.016 * 85.71 + 1.6,
      250: 0.016 * 85.71 + 1.6,
      300: 0.016 * 85.71 + 1.6,
    },
    l_font: {
      100: 1.8,
      110: 0.016 * 0 + 1.8,
      115: 0.016 * 0 + 1.8,
      125: 0.016 * 10.5 + 1.8,
      130: 0.016 * 10.5 + 1.8,
      150: 0.016 * 39.29 + 1.8,
      170: 0.016 * 60.71 + 1.8,
      175: 0.016 * 60.71 + 1.8,
      200: 0.016 * 85.71 + 1.8,
      250: 0.016 * 85.71 + 1.8,
      300: 0.016 * 85.71 + 1.8,
    },
    xl_font: {
      100: 2.5,
      110: 0.016 * 0 + 2.5,
      115: 0.016 * 0 + 2.5,
      125: 0.016 * 7.14 + 2.5,
      130: 0.016 * 7.14 + 2.5,
      150: 0.016 * 39.29 + 2.5,
      170: 0.016 * 52.86 + 2.5,
      175: 0.016 * 52.86 + 2.5,
      200: 0.016 * 78.57 + 2.5,
      250: 0.016 * 78.57 + 2.5,
      300: 0.016 * 78.57 + 2.5,
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
