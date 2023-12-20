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

    /*body, h4*/
    basic_font: {
      100: 1.6, //16px
      110: 1.0458, //16.55px
      115: 1.0458, //16.55px
      125: 1.435, //17.5px
      130: 1.435, // 17.5px
      150: 1.277, //18px
      170: 1.252, //20px
      175: 1.252, //20px
      200: 1.17019, //22px
      250: 1.14, //24px
      300: 1.12, //26px
    },
    /*H3*/
    m_font: {
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
    l_font: {
      100: 2.2,
      110: 0.016 * 0 + 2.2,
      115: 0.016 * 0 + 2.2,
      125: 0.016 * 10.5 + 2.2,
      130: 0.016 * 10.5 + 2.2,
      150: 0.016 * 39.29 + 2.2,
      170: 0.016 * 60.71 + 2.2,
      175: 0.016 * 60.71 + 2.2,
      200: 0.016 * 85.71 + 2.2,
      250: 0.016 * 85.71 + 2.2,
      300: 0.016 * 85.71 + 2.2,
    },
    xl_font: {
      100: 2.4,
      110: 0.016 * 0 + 2.4,
      115: 0.016 * 0 + 2.4,
      125: 0.016 * 7.14 + 2.4,
      130: 0.016 * 7.14 + 2.4,
      150: 0.016 * 39.29 + 2.4,
      170: 0.016 * 52.86 + 2.4,
      175: 0.016 * 52.86 + 2.4,
      200: 0.016 * 78.57 + 2.4,
      250: 0.016 * 78.57 + 2.4,
      300: 0.016 * 78.57 + 2.4,
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
