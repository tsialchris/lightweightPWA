const constants = {
  DEV_DEBUG: "_epiLog_",
  EPI_DOMAIN: "_epiDomain_",
  FONT_ZOOM: "_fontZoom_",
  APP_LANG: "_appLang_",
  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  FONT_SCALE_MAP: {
    /*body, h4*/
    basic_font: {
      100: {
        "safari": "-webkit-calc(1.6rem + 0.1vmin)",
        "chrome": "-webkit-calc(1.6rem + 0.1vmin)"
      }, //16px
      110: {
        "safari": "-webkit-calc(1.6rem/1.1 + 0.2vmin)",
        "chrome": "-webkit-calc(1.6rem + 0.2vmin)"
      }, //16.5px
      130: {
        "safari": "-webkit-calc(1.6rem/1.3 + 0.4vmin)",
        "chrome": "-webkit-calc(1.6rem + 0.4vmin)"
      }, //17.5px
      150: {
        "safari": "-webkit-calc(1.6rem/1.5 + 0.6vmin)",
        "chrome": "-webkit-calc(1.6rem + 0.6vmin)"
      }, //18px
      175: {
        "safari": "-webkit-calc(1.6rem/1.75 + 0.8vmin)",
        "chrome": "-webkit-calc(1.6rem + 0.8vmin)"
      }, //20px
      200: {
        "safari": "-webkit-calc(1.6rem/2 + 1.1vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.1vmin)"
      }, //22px
      250: {
        "safari": "-webkit-calc(1.6rem/2.5 + 1.5vmin))",
        "chrome": "-webkit-calc(1.6rem + 1.5vmin)"
      }, //24px
      300: {
        "safari": "-webkit-calc(1.6rem/3 + 1.8vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.8vmin)"
      }  //26px
    }, /*H3*/
    m_font: {
      100: {
        "safari": "-webkit-calc(1.6rem + 0.65vmin)",
        "chrome": "-webkit-calc(1.6rem +0.65vmin)"
      }, //18px
      110: {
        "safari": "-webkit-calc(1.6rem/1.1 + 0.7vmin)",
        "chrome": "-webkit-calc(1.6rem + 0.7vmin)"
      }, //18.5px
      130: {
        "safari": "-webkit-calc(1.6rem/1.3 + 0.8vmin)",
        "chrome": "-webkit-calc(1.6rem + 0.8vmin)"
      }, //19px
      150: {
        "safari": "-webkit-calc(1.6rem/1.5 + 1vmin)",
        "chrome": "-webkit-calc(1.6rem + 1vmin)"
      }, //20px
      175: {
        "safari": "-webkit-calc(1.6rem/1.75 + 1.25vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.25vmin)"
      }, //22px
      200: {
        "safari": "-webkit-calc(1.6rem/2 + 1.5vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.5vmin)"
      }, //24px
      250: {
        "safari": "-webkit-calc(1.6rem/2.5 + 1.8vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.8vmin)"
      }, //26px
      300: {
        "safari": "-webkit-calc(1.6rem/3 + 2.1vmin)",
        "chrome": "-webkit-calc(1.6rem + 2.1vmin)"
      } //28px
    },
    l_font: {
      100: {
        "safari": "-webkit-calc(1.6rem + 1.7vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.7vmin)"
      }, //22px
      110: {
        "safari": "-webkit-calc(1.6rem/1.1 + 1.8vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.8vmin)"
      }, //22.5px
      130: {
        "safari": "-webkit-calc(1.6rem/1.3 + 1.9vmin)",
        "chrome": "-webkit-calc(1.6rem + 1.9vmin)"
      }, //23px
      150: {
        "safari": "-webkit-calc(1.6rem/1.5 + 2.1vmin)",
        "chrome": "-webkit-calc(1.6rem + 2.1vmin)"
      }, //24px
      175: {
        "safari": "-webkit-calc(1.6rem/1.75 + 2.4vmin)",
        "chrome": "-webkit-calc(1.6rem + 2.4vmin)"
      }, //27px
      200: {
        "safari": "-webkit-calc(1.6rem/2 + 2.7vmin)",
        "chrome": "-webkit-calc(1.6rem + 2.7vmin)"
      }, //30px
      250: {
        "safari": "-webkit-calc(1.6rem/2.5 + 3.1vmin)",
        "chrome": "-webkit-calc(1.6rem + 3.1vmin)"
      }, //33px
      300: {
        "safari": "-webkit-calc(1.6rem/3 + 3.5vmin)",
        "chrome": "-webkit-calc(1.6rem + 3.5vmin)"
      } //35px
    },
    xl_font: {
      100: {
        "safari": "-webkit-calc(1.6rem + 2.3vmin)",
        "chrome": "-webkit-calc(1.6rem + 2.3vmin)"
      }, //24px
      110: {
        "safari": "-webkit-calc(1.6rem/1.1 + 2.5vmin)",
        "chrome": "-webkit-calc(1.6rem + 2.5vmin)"
      }, //24.5px
      130: {
        "safari": "-webkit-calc(1.6rem/1.3 + 2.7vmin)",
        "chrome": "-webkit-calc(1.6rem + 2.7vmin)"
      }, //25px
      150: {
        "safari": "-webkit-calc(1.6rem/1.5 + 3vmin)",
        "chrome": "-webkit-calc(1.6rem + 3vmin)"
      }, //27px
      175: {
        "safari": "-webkit-calc(1.6rem/1.75 + 3.2vmin)",
        "chrome": "-webkit-calc(1.6rem + 3.2vmin)"
      },//30px
      200: {
        "safari": "-webkit-calc(1.6rem/2 + 3.5vmin)",
        "chrome": "-webkit-calc(1.6rem + 3.5vmin)"
      },//33px
      250: {
        "safari": "-webkit-calc(1.6rem/2.5 + 4vmin)",
        "chrome": "-webkit-calc(1.6rem + 4vmin)"
      },//36px
      300: {
        "safari": "-webkit-calc(1.6rem/3 + 4.5vmin)",
        "chrome": "-webkit-calc(1.6rem + 4.5vmin)"
      },//38px
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
    "unsupported_response": "013",
    "misconfiguration": "099"
  },
  rtlLangCodes: ["ar", "he"]
  //other rtl language codes to be used for later:  "arc", "arz", "ckb", "dv", "fa", "ha", "he", "khw", "ks", "ps", "sd", "ur", "uz_AF", "yi"
}
export default constants;
