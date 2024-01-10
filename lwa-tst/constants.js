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
        "safari": "calc(1.6rem + 0.1vmin)",
        "chrome": "calc(1.6rem + 0.1vmin)"
      }, //16px
      110: {
        "safari": "calc(1.7rem/1.1 + 0.1vmin)",
        "chrome": "calc(1.7rem + 0.1vmin)"
      }, //16.5px
      130: {
        "safari": "calc(1.8rem/1.3 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //17.5px
      150: {
        "safari": "calc(2rem/1.5 + 0.1vmin)",
        "chrome": "calc(2rem + 0.1vmin)"
      }, //18px
      175: {
        "safari": "calc(2.2rem/1.75 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //20px
      200: {
        "safari": "calc(2.4rem/2 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      }, //22px
      250: {
        "safari": "calc(2.6rem/2.5 + 0.1vmin))",
        "chrome": "calc(2.6rem + 0.1vmin)"
      }, //24px
      300: {
        "safari": "calc(2.8rem/3 + 0.1vmin)",
        "chrome": "calc(2.8rem + 0.1vmin)"
      }  //26px
    }, /*H3*/
    m_font: {
      100: {
        "safari": "calc(1.8rem + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //18px
      110: {
        "safari": "calc(1.8rem/1.1 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //18.5px
      130: {
        "safari": "calc(1.8rem/1.3 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //19px
      150: {
        "safari": "calc(1.8rem/1.5 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //20px
      175: {
        "safari": "calc(1.8rem/1.75 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //22px
      200: {
        "safari": "calc(1.8rem/2 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //24px
      250: {
        "safari": "calc(1.8rem/2.5 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      }, //26px
      300: {
        "safari": "calc(1.8rem/3 + 0.1vmin)",
        "chrome": "calc(1.8rem + 0.1vmin)"
      } //28px
    },
    l_font: {
      100: {
        "safari": "calc(2.2rem + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //22px
      110: {
        "safari": "calc(2.2rem/1.1 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //22.5px
      130: {
        "safari": "calc(2.2rem/1.3 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //23px
      150: {
        "safari": "calc(2.2rem/1.5 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //24px
      175: {
        "safari": "calc(2.2rem/1.75 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //27px
      200: {
        "safari": "calc(2.2rem/2 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //30px
      250: {
        "safari": "calc(2.2rem/2.5 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      }, //33px
      300: {
        "safari": "calc(2.2rem/3 + 0.1vmin)",
        "chrome": "calc(2.2rem + 0.1vmin)"
      } //35px
    },
    xl_font: {
      100: {
        "safari": "calc(2.4rem + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      }, //24px
      110: {
        "safari": "calc(2.4rem/1.1 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      }, //24.5px
      130: {
        "safari": "calc(2.4rem/1.3 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      }, //25px
      150: {
        "safari": "calc(2.4rem/1.5 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      }, //27px
      175: {
        "safari": "calc(2.4rem/1.75 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      },//30px
      200: {
        "safari": "calc(2.4rem/2 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      },//33px
      250: {
        "safari": "calc(2.4rem/2.5 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
      },//36px
      300: {
        "safari": "calc(2.4rem/3 + 0.1vmin)",
        "chrome": "calc(2.4rem + 0.1vmin)"
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
