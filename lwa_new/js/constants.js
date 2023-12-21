const constants = {
  DEV_DEBUG: "_epiLog_",
  EPI_DOMAIN: "_epiDomain_",
  FONT_ZOOM: "_fontZoom_",
  APP_LANG: "_appLang_",
  monthNames: ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  FONT_SCALE_MAP: {
    /*body, h4*/
    basic_font: {
      100: 1.6, //16px
      125: 1.435, //17.5px
      130: 1.435, // 17.5px
      150: 1.277, //18px
      170: 1.252, //20px
      175: 1.252, //20px
      200: 1.17019, //22px
      250: 0.982, //24px
      300: 0.922 //26px
    },
    /*H3*/
    m_font: {
      100: 1.8, //18px
      125: 1.6 - 0.3, //19px
      130: 1.6 - 0.3, // 19px
      150: 1.6 - 0.348, //20px
      170: 1.6 - 0.4298, //22px
      175: 1.6 - 0.4298, //22px
      200: 1.6 - 0.618, //24px
      250: 1.6 - 0.678, //26px
      300: 1.6 - 0.7 //28px
    },
    l_font: {
      100: 2.2, //22px
      125: 1.6 - 0.435, //23px
      130: 1.6 - 0.435, //23px
      150: 1.6 - 0.618, //24px
      170: 1.6 - 0.4298, //22px
      175: 1.6 - 0.4298, //22px
      200: 1.6 - 0.618, //24px
      250: 1.6 - 0.678, //26px
      300: 1.6 - 0.7 //28px
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
