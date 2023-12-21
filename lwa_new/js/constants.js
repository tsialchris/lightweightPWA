const constants = {
  DEV_DEBUG: "_epiLog_",
  EPI_DOMAIN: "_epiDomain_",
  FONT_ZOOM: "_fontZoom_",
  APP_LANG: "_appLang_",
  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
      300: 0.769 //26px
    }, /*H3*/
    m_font: {
      100: 1.8, //18px
      125: 1.555, //19px
      130: 1.555, // 19px
      150: 1.421, //20px
      170: 1.377, //22px
      175: 1.377, //22px
      200: 1.277, //24px
      250: 1.064, //26px
      300: 0.8277 //28px
    },
    l_font: {
      100: 2.2, //22px
      125: 2.29, //23px
      130: 2.29, //23px
      150: 1.89, //24px
      170: 1.887, //27px
      175: 1.887, //27px
      200: 1.596, //30px
      250: 1.351, //33px
      300: 1.035 //35px
    },
    xl_font: {
      100: 2.4, //24px
      125: 2.5, //25px
      130: 2.5, //25px
      150: 2.5, //27px
      170: 2.487,//30px
      175: 2.487,//30px
      200: 2.185,//33px
      250: 1.473,//36px
      300: 1.123,//38px
    }
  }, /*error code value matches with a key in translations. Adding a new code should sync with translations*/
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
