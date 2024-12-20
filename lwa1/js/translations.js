import {setTextDirectionForLanguage} from "./utils/utils.js";
import constants from "./constants.js";

export const translations = {
  "en": {
    "app_version": "App version: ",
    "welcome": "Welcome to PharmaLedger",
    "scan_explain": "Find the DataMatrix Barcode on your medicine to scan and view information.",
    "scan_button": "Scan DataMatrix",
    "cancel": "Cancel",
    "change_camera": "Change camera",
    "scan_again": "Scan Again",
    "product_not_found_title": "Not Recognized",
    "product_not_loaded_title": "Product information not available.",
    "error_subtitle": "Unverified Product",
    "product_not_found": "This product cannot be found.",
    "product_not_loaded": "Unfortunately, no product information has been loaded.",
    "system_busy": "System is busy, please try again later.",
    "err_code": "Error code",
    "leaflet_expired_title": "Expired",
    "leaflet_expired_message": "<p> <b>This product has been identified as expired.</b> </p> ",
    "leaflet_incorrect_date_title": "Incorrect date",
    "leaflet_incorrect_date_subtitle": "Scanned date is incorrect",
    "leaflet_incorrect_date_message": "<b> This product's date is incorrect</b>.",
    "select_lang_title": "Language Unavailable",
    "scan_error_title": "Scan Error",
    "camera_error_message": "Something went wrong and the selected camera cannot be accessed properly. Please check your device camera settings or try to change camera from the menu.",
    "leaflet_lang_select_message": "The leaflet is not available in your preferred language. You can choose from the available language list.",
    "lang_proceed": "Proceed",
    "go_home": "Go Back Home",
    "onboarding_welcome": "Almost There! <br> Please read and agree to the terms and conditions.",
    "disagree": "Disagree",
    "agree": "Agree",
    "disagree_extra_text": "The \"PharmaLedger\" app will not work until you agree to the terms and conditions. Please read the terms and conditions.",
    "fwd_privacy": "Privacy Policy",
    "fwd_terms": "Terms and Conditions",
    "fwd_help": "Help",
    "fwd_about": "About",
    "privacy_modal_title": "Privacy Policy",
    "privacy_modal_subtitle": "Our Privacy and Security Principles",
    "privacy_content": "<h2>Privacy Notice</h2> <p>This privacy notice is applicable to the use of the PharmaLedger Association Electronic Product Information product. </p> <h2>Contacts</h2><p><b>a) Identity and contacts of the controller or joint controllers</b></p><p>The controller for your data is the PharmaLedger Association.</p> <p><b>b) Contacts of the data protection officer</b></p><p>The Data Protection Office of PharmaLedger Association is contactable at <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><h2>What Personal Data We Use</h2><p>We collect only the technical data required to deliver your electronic leaflet. This includes your IP address and technical identifiers of the device and browser you use to access our application.</p> <p><em>In detail, we collect the following data elements:</em></p><ul><li><p><em>Mobile Device Access.</em> We may request access or permission to certain features from your mobile device, including your mobile device's camera, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</p></li><li><p><em>Mobile Device Data.</em> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</p></li></ul><h2>Why We Collect Your Personal Data</h2><p><b>Purposes </b></p><p>We collect your technical data for the purpose of providing you with an electronic product leaflet for your medication. </p><p>As such, we may rely on the following legal bases to process your personal information:</p><ul><li><p><b>Performance of a Contract.</b> We may process your personal information when we believe it is necessary to fulfill contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</p></li><li><p><b>Legal Obligations.</b> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to fulfill our obligations under healthcare regulation and public health legislation.</p></li></ul><h2>With Whom We Share Your Personal Data</h2><p>Member Companies and Third-Party Service Providers.</p><p>We share your data with third-party vendors, service providers, contractors, or agents ('third parties') who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:</p><ul><li><p>Drug Manufacturers (Member Companies)</p></li><li><p>Technical Service Providers</p></li></ul><h2>How Long We Store Your Personal Data</h2><p>The PharmaLedger Association only stores your technical data for as long as necessary to process your leaflet request for up to 30 days. </p><p>Your medicine manufacturer will also store your data for a defined period of time as determined by their data retention policies, for more information on this retention please get in touch with your drug manufacturer.</p><h2>If You Don’t Provide Us Your Personal Data</h2><p>If you choose not to provide your technical data to us we will be unable to fulfill your leaflet request.</p><h2>Your Rights</h2><p>If you have any requests related to your personal data under the GDPR, such as a request to access or delete your data, you may contact us at <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>We will process such requests within 30 days.</p><h2>Withdrawal of Consent</h2><p>If you have any requests related to your personal data under the GDPR, such as a request to access or delete your data, you may contact us at <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>We will process such requests within 30 days.</p><h2>Automated Decision-Making</h2><p>We do not utilize any automated decision-making in our provisioning of this service to you.</p><h2>International Transfer of Personal Data</h2><p>Where your drug manufacturer requires us to transfer your data outside of the European Union we utilize Standard Contractual Clauses to protect your data.</p><h2>How to Complain</h2><p>If you have any requests related to your personal data under the GDPR, such as a request to access or delete your data, you may contact us at <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>We will process such requests within 30 days. Additionally you may contact your local supervisory authority if you feel that your rights are not being met.</p>",
    "terms_modal_title": "Terms and Conditions",
    "terms_modal_subtitle": "The terms and conditions that apply when using the PharmaLedger Application.",
    "terms_content": "<h2>Terms and Conditions for the PharmaLedger Association's Electronic Product Information Website and Application </h2><p>By accessing or using the PharmaLedger Association's Electronic Product Information website and application (the \"Services\"), you agree to be bound by these terms and conditions (the \"Terms\"). You may not access or use the Services if you do not agree to these Terms. The Services are operated by the PharmaLedger Association (the \"Association\") and are intended for use by individuals seeking information about their medication. A multiparty network delivers the Services, and your drug manufacturer supplies the product information displayed through the Services. The Association acts as the data controller for this information. </p><h2>Use of the Services </h2><p>You agree to use the Services only for lawful purposes, and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Services by any third party. Such restriction or inhibition includes, without limitation, conduct that is unlawful, or which may harass or cause distress or inconvenience to any person, and the transmission of obscene or offensive content or disruption of the normal flow of dialogue within the Services. </p><h2>Intellectual Property </h2><p>The content of the Services, including, but not limited to, text, graphics, images, and software, is the property of the Association or its licensors and member companies and is protected by copyright and other intellectual property laws. You may not use any content from the Services for any commercial purpose without the express written consent of the Association. </p><h2>Liability</h2><p>The Association makes no representations or warranties of any kind, express or implied, as to the operation of the Services or the information, content, materials, or products included in the Services. The Association will not be liable for any damages of any kind arising from the use of the Services, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages. </p><h2>Governing Law </h2><p>These Terms and your use of the Services will be governed by and construed in accordance with the laws of Switzerland and any disputes will be resolved in the courts of Basel, Switzerland. </p><h2>Changes to the Terms </h2><p>The Association reserves the right to change these Terms at any time, and you are responsible for checking these Terms periodically for any changes. Your continued use of the Services after any changes to the Terms have been made will constitute your acceptance of the revised Terms.</p><p><br></p>",
    "about_modal_subtitle": "About",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Help",
    "help_modal_subtitle": "FAQs",
    "help_content": "<div><p><b><h2>What is EPI?</h2></b></p>" +
      "<p>" +
      "    <b>EPI</b> is an abbreviation for <b>electronic product information.</b> It is an electronic version of the paper" +
      "    Product Information leaflet you typically find inside a pharmaceutical product package. In some cases, the" +
      "    <b>EPI</b> may have replaced the paper leaflet." +
      "</p>" +
      "<p>" +
      "    <b><h2>What is PharmaLedger?</h2></b>" +
      "</p>" +
      "<p>The PharmaLedger Association (PLA) is a not-for-profit association based in Switzerland with the purpose to enable" +
      "    and foster a Digital Trust Ecosystem in healthcare through a standardized and trusted open-source platform. PLA" +
      "    promotes collaboration and accelerates innovation and adoption to achieve mutual benefits in the healthcare and life" +
      "    science domains for patients and other stakeholders. PLA was formed in 2022 to continue the work of the PharmaLedger" +
      "    project, a 3-year project funded by the European Commission and the pharmaceutical industry aimed at proving the" +
      "    value of blockchain solutions. Further information is available at <a href=\"https://pharmaledger.org/\">https://pharmaledger.org/</a>." +
      "</p>" +
      "<p><b><h2>What is the DataMatrix?</h2></b></p>" +
      "<p>It's a type of barcode on your product package. It is a black and white square box barcode and will look similar to" +
      "    this:<br>" +
      "    <img src=\"./images/barcode_example.png\" alt='DataMatrix barcode example'>" +
      "</p>" +
      "<p>" +
      "    <b><h2>How to use the App?</h2></b>" +
      "</p>" +
      "<p>" +
      "    Follow the instructions on the landing page of the <b>App...</b> it shows a picture of where to find the" +
      "    <b>DataMatrix</b> on your" +
      "    Product Package. Once you have found the <b>DataMatrix</b>, click the button 'Scan <b>DataMatrix</b>'. Allow the" +
      "    application to" +
      "    use the camera so the <b>DataMatrix</b> can be scanned. Use the camera to focus on the <b>DataMatrix</b>. Once the" +
      "    pack is scanned" +
      "    successfully, the <b>EPI</b> will be displayed. You can click the '+' button to get more details." +
      "</p><p><b><h2>Why does my DataMatrix scan not give a result?</h2></b></p><p>" +
      "    There are several reasons why the <b>DataMatrix</b> on your package may not give an EPI. One of the reasons could be" +
      "    the" +
      "    focus for the camera. Please try to scan the code in a well lit place and code clearly visible on the screen. If you" +
      "    are struggling to keep your hand steady, you could try using a table to support your hands." +
      "</p></div>"
  },
  "de": {
    "app_version": "Version:",
    "welcome": "Willkommen bei PharmaLedger",
    "scan_explain": "Suchen und scannen Sie den DataMatrix Barcode auf Ihrem Arzneimittel, um die Packungsbeilage anzuzeigen.",
    "scan_button": "DataMatrix Scannen",
    "cancel": "Abbrechen",
    "change_camera": "Kamera wechseln",
    "scan_again": "Erneut Scannen",
    "product_not_found_title": "Nicht erkannt",
    "product_not_loaded_title": "Produktinformationen nicht gefunden.",
    "error_subtitle": "",
    "product_not_found": "Dieses Produkt wurde nicht gefunden.",
    "product_not_loaded": "Es wurden leider keine Produktinformationen zu diesem Arzneimittel zur Verfügung gestellt.",
    "system_busy": "Das System ist beschäftigt, bitte versuchen Sie es später noch einmal.",
    "err_code": "Fehler",
    "leaflet_expired_title": "Abgelaufen",
    "leaflet_expired_message": "<p> <b>Das Verfallsdatum dieses Arzneimittels ist überschritten.</b> </p> ",
    "leaflet_incorrect_date_title": "",
    "leaflet_incorrect_date_subtitle": "",
    "leaflet_incorrect_date_message": "<b> </b>.",
    "select_lang_title": "Sprache nicht verfügbar",
    "scan_error_title": "Scan Fehler",
    "camera_error_message": "Auf die ausgewählte Kamera konnte nicht zugegriffen werden. Bitte überprüfen Sie die Kameraeinstellungen auf Ihrem Gerät oder versuchen Sie, die Kamera im Menü zu wechseln.",
    "leaflet_lang_select_message": "Die aktuelle Packungsbeilage ist in Ihrer Sprache nicht verfügbar. Sie können eine der verfügbaren Sprachen aus der Liste auswählen:",
    "lang_proceed": "Fortfahren",
    "go_home": "Zurück zum Startbildschirm",
    "onboarding_welcome": "Fast geschafft! Bitte lesen und akzeptieren Sie die Nutzerbedingungen.",
    "disagree": "Ablehnen",
    "agree": "Akzeptieren",
    "disagree_extra_text": "Die \"PharmaLedger\" App kann nur verwendet werden, wenn Sie den Geschäftsbedingungen zustimmen.",
    "fwd_privacy": "Datenschutzerklärung",
    "fwd_terms": "Allgemeine Geschäftsbedingungen ",
    "fwd_help": "Hilfe",
    "fwd_about": "Über",
    "privacy_modal_title": "Datenschutzerklärung",
    "privacy_modal_subtitle": "Unsere Datenschutz- und Sicherheitsgrundsätze",
    "privacy_content": "<h2>Privacy Notice</h2><p>Dieser Datenschutzhinweis gilt für die Nutzung des Produkts PharmaLedger Association Electronic Product Information. </p><h2>Kontaktdaten</h2><p>a) Identität und Kontaktdaten des für die Verarbeitung Verantwortlichen bzw. Der gemeinsam für die Verarbeitung Verantwortlichen Für die Verarbeitung Ihrer Daten ist die PharmaLedger Association verantwortlich. </p> <p>b) Kontaktdaten des Datenschutzbeauftragten Das Datenschutzbüro der PharmaLedger Association ist erreichbar unter <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><h2>Welche persönlichen Daten wir verwenden</h2><p>Wir erheben nur die technischen Daten, die für die Zustellung Ihres elektronischen Prospekts erforderlich sind. Dazu gehören Ihre IP-Adresse und die technischen Kennungen des Geräts und des Browsers, die Sie für den Zugriff auf unsere Anwendung verwenden. </p> <p>Im Einzelnen erfassen wir die folgenden Elemente Ihrer Daten.</p> <ul><li><p><em>Zugriff auf mobile Geräte.</em> Wir dürfen Sie um Zugriff oder Erlaubnis für bestimmte Funktionen Ihres Mobilgeräts bitten, einschließlich der Kamera Ihres Mobilgeräts und anderer Funktionen. Wenn Sie unseren Zugriff oder unsere Berechtigungen ändern möchten, können Sie dies in den Einstellungen Ihres Geräts tun. </p></li></ul><ul><li><p><em>Daten über mobile Geräte.</em> Wir erfassen automatisch Geräteinformationen (wie z.B. die ID, das Modell und den Hersteller Ihres mobilen Geräts), das Betriebssystem, Versionsinformationen und Systemkonfigurationsinformationen, Geräte- und Anwendungs-Identifikationsnummern, Browsertyp und -version, das Hardwaremodell, den Internet-Service-Provider und/oder Mobilfunkanbieter sowie die Internetprotokoll-(IP-)Adresse (oder den Proxy-Server). Wenn Sie unsere Anwendung(en) nutzen, können wir auch Informationen über das mit Ihrem Mobilgerät verbundene Telefonnetz, das Betriebssystem oder die Plattform Ihres Mobilgeräts, die Art des von Ihnen verwendeten Mobilgeräts, die eindeutige Geräte-ID Ihres Mobilgeräts und Informationen über die von Ihnen aufgerufenen Funktionen unserer Anwendung(en) erfassen. </p></li></ul><h2>Warum wir Ihre persönlichen Daten sammeln</h2><p><b>Verwendungszwecke</b></p><p>Wir erheben Ihre technischen Daten, um Ihnen eine elektronische Packungsbeilage für Ihr Medikament zukommen zu lassen. </p><p>In diesem Sinne stützen wir uns auf die folgenden Rechtsgrundlagen, um Ihre persönlichen Daten zu verarbeiten: </p> <ul><li><p><b>Erfüllung eines Vertrags.</b> Wir sind berechtigt, Ihre personenbezogenen Daten zu verarbeiten, wenn wir der Meinung sind, dass dies notwendig ist, um vertragliche Verpflichtungen Ihnen gegenüber zu erfüllen, einschließlich der Bereitstellung unserer Dienstleistungen oder auf Ihren Wunsch hin, bevor wir einen Vertrag mit Ihnen abschließen. </p></li></ul><ul><li><p><b>Gesetzliche Verpflichtungen.</b> Wir dürfen Ihre Daten verarbeiten, wenn wir der Meinung sind, dass dies zur Erfüllung unserer gesetzlichen Verpflichtungen notwendig ist, wie z.B. zur Erfüllung unserer Verpflichtungen im Rahmen der Gesundheitsvorschriften und der Gesetze zum öffentlichen Gesundheitswesen.</p></li></ul><h2>Mit wem wir Ihre persönlichen Daten teilen</h2><p>Mitgliedsunternehmen und Drittanbieter von Dienstleistungen. </p><p>Wir teilen Ihre Daten mit Drittanbietern, Dienstleistern, Auftragnehmern oder Vertretern (\"Dritte\"), die Dienstleistungen für uns oder in unserem Namen erbringen und für diese Arbeit Zugang zu diesen Informationen benötigen. Wir haben Verträge mit unseren Drittparteien abgeschlossen, die dazu dienen, Ihre persönlichen Daten zu schützen. Das bedeutet, dass diese Dritten nichts mit Ihren persönlichen Daten tun können, es sei denn, wir haben sie dazu angewiesen. Außerdem werden diese Dritten Ihre persönlichen Daten nicht an andere Organisationen als uns weitergeben. Sie verpflichten sich außerdem, die Daten, die sie in unserem Auftrag speichern, zu schützen und sie für den von uns vorgegebenen Zeitraum aufzubewahren. Die Kategorien von Dritten, an die wir persönliche Daten weitergeben können, sind wie folgt: </p> <ul><li><p>Medikamentenhersteller (Mitgliedsunternehmen) </p></li></ul><ul><li><p>Anbieter von technischen Dienstleistungen </p></li></ul><h2>Wie lange wir Ihre persönlichen Daten speichern</h2><p>Die PharmaLedger Association speichert Ihre technischen Daten nur so lange, wie es für die Bearbeitung Ihrer Prospektanforderung erforderlich ist, d.h. bis zu 30 Tage. Ihr Arzneimittelhersteller speichert Ihre Daten ebenfalls für einen bestimmten Zeitraum, der in seinen Richtlinien zur Datenaufbewahrung festgelegt ist. Für weitere Informationen zu dieser Aufbewahrung setzen Sie sich bitte mit Ihrem Arzneimittelhersteller in Verbindung. </p><h2>Wenn Sie uns Ihre persönlichen Daten nicht zur Verfügung stellen</h2><p>Wenn Sie uns Ihre technischen Daten nicht zur Verfügung stellen, können wir Ihre Anfrage nach Broschüren nicht erfüllen. </p><h2>Ihre Rechte</h2><p>Wenn Sie im Rahmen der Datenschutz-Grundverordnung (\"DSGVO\") eine Anfrage bezüglich Ihrer persönlichen Daten haben, z.B. eine Anfrage auf Zugang oder Löschung Ihrer Daten, können Sie uns unter <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Wir bearbeiten solche Anfragen innerhalb von 30 Tagen.</p><h2>Widerruf der Einwilligung</h2><p>Wenn Sie im Rahmen der Datenschutz-Grundverordnung (\"DSGVO\") eine Anfrage bezüglich Ihrer persönlichen Daten haben, z.B. eine Anfrage auf Zugang oder Löschung Ihrer Daten, können Sie uns unter <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Wir bearbeiten solche Anfragen innerhalb von 30 Tagen.</p><h2>Automatisierte Entscheidungsfindung</h2><p>Wir verwenden keine automatisierte Entscheidungsfindung bei der Bereitstellung dieses Dienstes für Sie. </p><h2>Internationale Übermittlung von personenbezogenen Daten</h2><p>Wenn Ihr Arzneimittelhersteller es erforderlich macht, dass wir Ihre Daten außerhalb der Europäischen Union übermitteln, verwenden wir Standardvertragsklauseln, um Ihre Daten zu schützen. </p><h2>Beschwerdeverfahren</h2><p>Wenn Sie eine Anfrage bezüglich Ihrer persönlichen Daten im Rahmen der GDPR haben, wie z.B. eine Anfrage zum Zugriff oder zur Löschung Ihrer Daten, können Sie uns wie folgt kontaktieren <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Wir bearbeiten solche Anfragen innerhalb von 30 Tagen. Außerdem können Sie sich an Ihre örtliche Aufsichtsbehörde wenden, wenn Sie der Meinung sind, dass Ihre Rechte nicht eingehalten werden.</p>",
    "terms_modal_title": "Allgemeine Geschäftsbedingungen ",
    "terms_modal_subtitle": "Allgemeine Geschäftsbedingungen für die Benutzung der “PharmaLedger” App.",
    "terms_content": "<h2>Allgemeine Geschäftsbedingungen für die Website und Anwendung der PharmaLedger Association für elektronische Produktinformationen</h2><p>Durch den Zugriff auf die Website und die Anwendung der PharmaLedger Association für elektronische Produktinformationen (die \"Dienste\") erklären Sie sich mit diesen Bedingungen einverstanden (die \"Bedingungen\"). Sie sind nicht berechtigt, auf die Dienste zuzugreifen oder diese zu nutzen, wenn Sie diesen Bedingungen nicht zustimmen. Die Dienste werden von der PharmaLedger Association (die \"Association\") betrieben und sind für die Nutzung durch Personen bestimmt, die Informationen über ihre Medikamente suchen. Die Dienste werden von einem Mehrparteiennetzwerk bereitgestellt, und Ihr Arzneimittelhersteller liefert die Produktinformationen, die im Rahmen der Dienste angezeigt werden. Die Association fungiert als Datenverantwortlicher für diese Informationen.</p><h2>Nutzung der Dienste</h2><p>Sie verpflichten sich, die Dienste nur für rechtmäßige Zwecke und in einer Weise zu nutzen, die die Rechte Dritter nicht verletzt oder die Nutzung der Dienste durch Dritte einschränkt bzw. behindert. Eine solche Einschränkung oder Behinderung umfasst unter anderem ein Verhalten, das rechtswidrig ist oder eine Person belästigt oder in Bedrängnis bringt oder Unannehmlichkeiten verursacht, sowie die Übertragung obszöner oder beleidigender Inhalte oder die Beeinträchtigung des normalen Dialogflusses innerhalb der Dienste.</p><h2>Geistiges Eigentum</h2><p>Der Inhalt der Dienste, einschließlich, aber nicht beschränkt auf Texte, Grafiken, Bilder und Software, ist das Eigentum der Association oder ihrer Lizenzgeber und Mitgliedsunternehmen und ist durch das Urheberrecht und andere Gesetze zum Schutz des geistigen Eigentums geschützt. Ohne die ausdrückliche schriftliche Zustimmung der Association dürfen Sie keine Inhalte der Dienste für kommerzielle Zwecke nutzen.</p><h2>Haftung</h2><p>Die Association gibt keinerlei ausdrückliche oder stillschweigende Zusicherungen oder Garantien in Bezug auf den Betrieb der Dienste oder die in den Diensten enthaltenen Informationen, Inhalte, Materialien oder Produkte. Die Association haftet nicht für Schäden jeglicher Art, die aus der Nutzung der Dienste entstehen, einschließlich, aber nicht beschränkt auf direkte, indirekte, zufällige, strafende und Folgeschäden.</p><h2>Geltendes Recht</h2><p>Diese Bedingungen und Ihre Nutzung der Dienste unterliegen den Gesetzen der Schweiz und werden in Übereinstimmung mit diesen ausgelegt. Alle Streitigkeiten werden vor den Gerichten in Basel in der Schweiz, entschieden.</p><h2>Änderungen der Bedingungen</h2><p>Die Association behält sich das Recht vor, diese Bedingungen jederzeit zu ändern, und Sie sind dafür verantwortlich, diese Bedingungen regelmäßig auf Änderungen zu überprüfen. Wenn Sie die Dienste nach einer Änderung der Bedingungen weiterhin nutzen, erklären Sie sich mit den geänderten Bedingungen einverstanden.</p>",
    "about_modal_subtitle": "Über",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Hilfe",
    "help_modal_subtitle": "Häufig gestellte Fragen",
    "help_content": "<div><p><b><h2>Was ist EPI?</h2></b></p>" +
      "<p><b>EPI</b> steht für <b>Elektronische Produkt-Information</b>. Es ist die elektronische Version des Beipackzettels, welchen Sie in der Arzneimittelpackung vorfinden." +
      "</p>" +
      "<p><b><h2>Was ist PharmaLedger?</h2></b>" +
      "</p>" +
      "<p>Die PharmaLedger Association (PLA) ist eine gemeinnützige Vereinigung mit Sitz in der Schweiz. Ihr Ziel ist es, durch die Bereitstellung einer Open-Source-Plattform eine vertrauenswürdige digitale Umgebung im Gesundheitswesen zu schaffen. PLA fördert die Zusammenarbeit und beschleunigt Innovation und Transformation, um im Gesundheits- und Life-Science-Bereich gemeinsame Vorteile für Patienten und andere Interessengruppen zu erzielen. PLA wurde 2022 gegründet, um die Arbeit des PharmaLedger-Projekts fortzusetzen, welches drei Jahre lang von der Europäischen Kommission und der pharmazeutischen Industrie finanziert wurde, um den Wert von Blockchain-Technologie zu belegen. Weitere Informationen sind verfügbar unter: <a href=\"https://pharmaledger.org/\">https://pharmaledger.org</a>." +
      "</p>" +
      "<p><b>Was ist ein DataMatrix Barcode?</b></p>" +
      "<p>Es ist ein schwarz-weisses Symbol auf Ihrer Produktverpackung, welches ungefähr so aussieht:<br>" +
      "    <img src=\"./images/barcode_example.png\" alt='Beispiel für Datamatrix-Barcode'>" +
      "</p>" +
      "<p>" +
      "    <b><h2>Wie verwende ich die App?</h2></b>" +
      "</p>" +
      "<p>Befolgen Sie die Anweisungen auf der Einstiegsseite der <b>App…</b> sie zeigt ein Bild von dem <b>DataMatrix Barcode</b> auf Ihrer Verpackung. Wenn Sie den <b>DataMatrix Barcode</b> gefunden haben, klicken Sie auf die Schaltfläche „DataMatrix scannen“. Erlauben Sie der App, die Kamera zu verwenden, damit der DataMatrix Barcode gescannt werden kann. Fokussieren Sie die Kamera auf den DataMatrix Barcode. Sobald der Barcode erfolgreich gescannt wurde, wird Ihr elektronischer Beipackzettel angezeigt. Sie können auf die Schaltfläche „+“ klicken, um weitere Details zu erhalten." +
      "</p><p><b><h2>Warum kann mein DataMatrix Barcode nicht erfolgreich gescannt werden?</h2></b></p><p>" +
      "Es gibt mehrere mögliche Gründe, warum nach dem Scan des <b>DataMatrix</b> Barcodes kein elektronischer Beipackzettel angezeigt wird. Ein möglicher Grund ist, dass der Barcode für die Kamera unleserlich oder unscharf ist. Bitte versuchen Sie, den Barcode an einem gut beleuchteten Ort zu scannen. Vermeiden Sie, das Bild vom Barcode zu verwackeln, indem Sie Ihre Hand z.B. auf einem Tisch abstützen." +
      "</p></div>"
  },
  "fr": {
    "app_version": "Version de l’application:",
    "welcome": "Bienvenue dans Pharmaledger",
    "scan_explain": "Trouvez le DataMatrix sur votre médicament pour le scanner et afficher les informations le concernant.",
    "scan_button": "Scanner DataMatrix",
    "cancel": "Annuler",
    "change_camera": "Changer d’appareil photo",
    "scan_again": "Rescanner",
    "product_not_found_title": "Non reconnu",
    "product_not_loaded_title": "Information sur le produit indisponible",
    "error_subtitle": "",
    "product_not_found": "Ce produit est introuvable",
    "product_not_loaded": "Malheureusement, aucune information sur le produit n’a été chargée.",
    "system_busy": "Le système est occupé, veuillez réessayer plus tard.",
    "err_code": "Code d’erreur",
    "leaflet_expired_title": "Perimé",
    "leaflet_expired_message": "<p> <b>Ce médicament a été identifié comme périmé.</b> </p> ",
    "leaflet_incorrect_date_title": "",
    "leaflet_incorrect_date_subtitle": "",
    "leaflet_incorrect_date_message": "<b> </b>.",
    "select_lang_title": "Langue indisponible",
    "scan_error_title": "Erreur de Scan",
    "camera_error_message": "Une erreur s’est produite. L’accès à la caméra sélectionnée ne fonctionne pas correctement. Veuillez vérifier les paramètres de l’appareil photo ou essayez de changer d’appareil photo à partir du menu.",
    "leaflet_lang_select_message": "Nous sommes désolés, mais la notice n’est actuellement pas disponible dans votre langue. Vous pouvez choisir parmi la liste des langues disponibles.",
    "lang_proceed": "Continuer",
    "go_home": "Retour à la page d'accueil ",
    "onboarding_welcome": "Nous y sommes presque ! Veuillez lire et accepter les termes et conditions.",
    "disagree": "Refuser",
    "agree": "Accepter",
    "disagree_extra_text": "\"PharmaLedger\" ne fonctionnera pas tant que vous n'aurez pas accepté les termes et conditions. Veuillez lire les termes et conditions.",
    "fwd_privacy": "Politique de confidentialité",
    "fwd_terms": "Termes et conditions",
    "fwd_help": "Aide",
    "fwd_about": "À propos",
    "privacy_modal_title": "Politique de confidentialité",
    "privacy_modal_subtitle": "Nos principes de confidentialité et de sécurité",
    "privacy_content": "<h2>Privacy Notice</h2><p>Cet avis de confidentialité s’applique à l’utilisation du produit d’Information Électronique sur les Produits de la PharmaLedger Association.</p><h2>Contacts</h2><p><b>a) Identité et coordonnées du responsable ou des co-responsables du traitement</b></p><p>Le responsable du traitement de vos données est l’association PharmaLedger.</p><p><b>b) Contacts du délégué à la protection des données</b></p><p>Le bureau de protection des données de PharmaLedger Association est joignable à <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><h2>Quelles données personnelles nous utilisons</h2><p>Nous collectons uniquement les données techniques nécessaires à la livraison de votre dépliant électronique. Cela inclut votre adresse IP et les identifiants techniques de l’appareil et du navigateur que vous utilisez pour accéder à notre application.</p><p>En détail, nous collectons les éléments de données suivants:</p><ul><li><p><em>Accès aux appareils mobiles</em>. Nous pouvons demander l’accès ou l’autorisation à certaines fonctionnalités de votre appareil mobile, y compris l’appareil photo de votre appareil mobile et d’autres fonctionnalités. Si vous souhaitez modifier notre accès ou nos autorisations, vous pouvez le faire dans les paramètres de votre appareil.</p></li><li><p><em>Données des appareils mobiles</em>. Nous recueillons automatiquement des informations sur l’appareil (telles que l’ID, le modèle et le fabricant de votre appareil mobile), le système d’exploitation, les informations de version et les informations de configuration du système, les numéros d’identification de l’appareil et de l’application, le type et la version du navigateur, le modèle de matériel du fournisseur de services Internet et/ou de l’opérateur mobile et l’adresse IP (Internet Protocol) (ou le serveur proxy). Si vous utilisez nos applications, nous pouvons également collecter des informations sur le réseau téléphonique associé à votre appareil mobile, le système d’exploitation ou la plate-forme de votre appareil mobile, le type d’appareil mobile que vous utilisez, l’identifiant unique de votre appareil mobile et des informations sur les fonctionnalités de nos applications auxquelles vous avez accédé.</p></li></ul><h2>Pourquoi nous collectons vos données personnelles</h2><p><b>Objectifs</b></p><p>Nous collectons vos données techniques dans le but de vous fournir une notice électronique de produit pour votre médicament.</p><p>A ce titre, nous pouvons nous appuyer sur les bases légales suivantes pour traiter vos informations personnelles:</p><ul><li><p><b>Exécution d’un contrat</b>. Nous pouvons traiter vos informations personnelles lorsque nous pensons que cela est nécessaire pour remplir des obligations contractuelles envers vous, y compris la fourniture de nos Services ou à votre demande avant de conclure un contrat avec vous.</p></li><li><p><b>Obligations légales</b>. Nous pouvons traiter vos informations lorsque nous pensons que cela est nécessaire pour nous conformer à nos obligations légales, par exemple pour remplir nos obligations en vertu de la réglementation sur les soins de santé et de la législation sur la santé publique.</p></li></ul><h2>Avec qui nous partageons vos données personnelles</h2><p>Sociétés membres et fournisseurs de services tiers.</p><p>Nous partageons vos données avec des fournisseurs tiers, des prestataires de services, des sous-traitants ou des agents (« tiers ») qui fournissent des services pour nous ou en notre nom et qui ont besoin d’accéder à ces informations pour effectuer ce travail. Nous avons des contrats en place avec nos tiers, qui sont conçus pour aider à protéger vos informations personnelles. Cela implique qu’ils ne peuvent rien faire avec vos informations personnelles à moins que nous ne leur ayons demandé de le faire. Ils ne partageront pas non plus vos informations personnelles avec une organisation autre que nous. Ils s’engagent également à protéger les données qu’ils détiennent en notre nom et à les conserver pendant la durée que nous leur demandons. Les catégories de tiers avec lesquels nous pouvons partager des informations personnelles sont les suivantes:</p><ul><li><p>Fabricants de médicaments (sociétés membres)</p></li><li><p>Prestataires de services techniques</p></li></ul><h2>Combien de temps conservons-nous vos données personnelles</h2><p>PharmaLedger Association ne garde vos données techniques que le temps nécessaire pour traiter votre demande de notice jusqu’à 30 jours.</p><p>Votre fabricant de médicaments gardera également vos données pendant une période définie, déterminée par leurs politiques de conservation des données. Pour plus d’informations, veuillez contacter votre fabricant de médicaments.</p><h2>Si vous ne nous fournissez pas vos données personnelles</h2><p>Si vous choisissez de ne pas nous fournir vos données techniques, nous ne pourrons pas répondre à votre demande.</p><h2>Vos droits</h2><p>Si vous avez des demandes liées à vos données personnelles dans le cadre du RGPD, telles qu’une demande d’accès ou de suppression de vos données, vous pouvez nous contacter à <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Nous traiterons ces demandes dans les 30 jours.</p><h2>Retrait du consentement</h2><p>Si vous avez des demandes liées à vos données personnelles dans le cadre du RGPD, telles qu’une demande d’accès ou de suppression de vos données, vous pouvez nous contacter à <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Nous traiterons ces demandes dans les 30 jours.</p><h2>Prise de décision automatisée</h2><p>Nous n’utilisons aucune prise de décision automatisée pour vous fournir ce service.</p><h2>Transfert international de données personnelles</h2><p>Lorsque votre fabricant de médicaments nous demande de transférer vos données en dehors de l’Union européenne, nous utilisons des clauses contractuelles types pour protéger vos données.</p><h2>Comment faire une réclamation</h2><p>Si vous avez des demandes liées à vos données personnelles dans le cadre du RGPD, telles qu’une demande d’accès ou de suppression de vos données, vous pouvez nous contacter à <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Nous traiterons ces demandes dans les 30 jours. De plus, vous pouvez contacter votre autorité de contrôle locale si vous estimez que vos droits ne sont pas respectés.</p>",
    "terms_modal_title": "Termes et Conditions",
    "terms_modal_subtitle": "Les termes et conditions qui s'appliquent lors de l'utilisation de l'application PharmaLedger",
    "terms_content": "<h2>Termes et Conditions du Site Internet et de l’Application de Produit Electronique d’Information de l’Association PharmaLedger</h2><p>En accédant ou en utilisant le site internet ou l’application de Produit Electronique d’Information de l’Association PharmaLedger (les « Services »), vous acceptez d’être lié par ces termes et conditions (les « Termes »). Vous ne pouvez pas accéder ou utiliser les Services si vous n’acceptez pas ces Termes. Les Services sont opérés par l’Association PharmaLedger (l’’Association ») et sont prévus pour être utilisés par des individus cherchant des informations au sujet de leur médicament. Un réseau multi-parties livre les Services, et votre fabricant de dogue fournit les informations produit affichées par les Services. L’Association agit comme contrôleur de données pour ces informations.</p><h2>Utilisation des Services</h2><p>Vous acceptez d’utiliser les Services seulement dans un but légal, et d’une manière qui n’enfreint pas aux droits de, ni ne restreint ou contraint l’utilisation et l’appréciation des Services par tout tiers. De telles restrictions ou contrainte comprennent, sans limitation, une conduite qui est illégale, ou qui puisse harceler ou causer de la détresse ou une gêne à toute personne, et la transmission de contenu obscène ou offensif ou la perturbation du flux normal de dialogue au sein des Services.</p><h2>Propriété Intellectuelle</h2><p>Le contenu des Services, incluant mais non limités au texte, aux graphismes, aux images, et au logiciel, est la propriété de l’Association ou de ses concédants et sociétés membre et est protégé par les droits d’auteur et autres lois sur la propriété intellectuelle. Vous ne pouvez pas utiliser le contenu des Services dans un but commercial sans le consentement formel par écrit de l’Association.</p><h2>Responsabilité</h2><p>L’Association ne fait aucune représentation ou garantie de quelque type qu’il soit, formelle ou sous-entendue, concernant son opération des Services ou des informations, contenus, matériaux, ou produits inclus dans les Services. L’Association ne sera pas responsable pour les dommages quels qu’ils soient faisant suite à l’utilisation des Services, comprenant mais non limité aux dommages directs, indirects, incidentels, punitifs ou conséquentiels.</p><h2>Loi Gouvernante</h2><p>Ces Termes et votre utilisation des Services seront gouvernés par et interprétés conformément aux lois de Suisse et toute réclamation sera résolue dans les Tribunaux de Bâle, Suisse.</p><h2>Modifications des Termes</h2><p>L’Association se réserve le droit de modifier ces Termes à tout moment, et vous êtes responsable de vérifier ces Termes périodiquement pour tout changement. Votre utilisation continue des Services après toute modification des Termes constituera votre acceptation des Termes révisés.</p>",
    "about_modal_subtitle": "À propos",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Aide",
    "help_modal_subtitle": "QFP",
    "help_content": "<div><p><b><h2>Qu’est-ce que EPI?</h2></b></p>" +
      "<p>" +
      "    <b>EPI</b>  est une abréviation <b>d’Information électronique sur le Produit.</b> Il s'agit d'une version électronique de l’information sur le produit en papier que vous trouverez généralement à l'intérieur de l’emballage d’un produit pharmaceutique. Dans certains cas, <b>l’EPI</b> peut avoir remplacé la notice papier." +
      "</p>" +
      "<p>" +
      "    <b><h2>Qu'est-ce que PharmaLedger?</h2></b>" +
      "</p>" +
      "<p>L'Association PharmaLedger (PLA) est une association à but non lucratif basée en Suisse, dont l'objectif est de permettre et de favoriser un écosystème Numérique de Confiance dans le domaine des soins de santé par le biais d'une plateforme open-source standardisée et fiable. PLA encourage la collaboration et accélère l'innovation et l'adoption pour obtenir des avantages mutuels dans les domaines de la santé et des sciences de la vie pour les patients et les autres parties prenantes. PLA a été créé en 2022 pour poursuivre le travail du projet PharmaLedger, un projet de 3 ans financé par la Commission Européenne et l'industrie pharmaceutique visant à prouver la valeur des solutions blockchain. De plus amples informations sont disponibles sur le site <a href=\"https://pharmaledger.org/\">https://pharmaledger.org/</a>." +
      "</p>" +
      "<p><b><h2>Qu'est-ce que le DataMatrix?</h2></b></p>" +
      "<p>Il s’agit d’un type de barre-code figurant sur l’emballage de votre produit. C’est un code-barre noir et blanc de forme carrée qui ressemble à ceci:<br>" +
      "    <img src=\"./images/barcode_example.png\" alt='exemple de code à barres DataMatrix'>" +
      "</p>" +
      "<p>" +
      "    <b><h2>Comment utiliser l'application?</h2></b>" +
      "</p>" +
      "<p>" +
      "    Suivez les instructions sur la page d’accueil de <b>l’application…</b> Elle montre une image où trouver le" +
      "    <b>DataMatrix</b> sur l’emballage de votre produit. Une fois que vous avez trouvé le <b>DataMatrix</b>, cliquez sur le bouton «Scanner <b>DataMatrix</b>». Autorisez à l'application d'utiliser l'appareil photo afin que le <b>DataMatrix</b> puisse être scannée. Utilisez l'appareil photo pour faire la mise au point sur le <b>DataMatrix</b>. Une fois le paquet scanné avec succès, <b>l'EPI</b> s'affiche.  Vous pouvez cliquer sur le bouton '+' pour obtenir plus de détails." +
      "</p><p><b><h2>Pourquoi mon scan de DataMatrix ne donne-t-il pas de résultat?</h2></b></p><p>" +
      "    Il y a plusieurs raisons pour lesquelles le <b>DataMatrix</b>  peut ne pas donner d’EPI. L’une de ces raisons peut être la mise au point de l’appareil photo. Essayer de scanner le code dans un endroit bien éclairé et le code doit être clairement visible à l’écran. Si vous avez du mal à garder votre main stable, vous pouvez vous servir d’une table pour la soutenir." +
      "</p></div>"
  },
  "nl": {
    "app_version": "App versie",
    "welcome": "Welkom bij PharmaLedger",
    "scan_explain": "Zoek de DataMatrix code op uw geneesmiddel om informatie te scannen en te bekijken.",
    "scan_button": "DataMatrix code scannen",
    "cancel": "Annuleren",
    "change_camera": "Camera wijzigen",
    "scan_again": "Scan opnieuw",
    "product_not_found_title": "Onherkenbaar",
    "product_not_loaded_title": "Product informatie niet beschikbaar",
    "error_subtitle": "",
    "product_not_found": "Product niet gevonden",
    "product_not_loaded": "Helaas, er is geen productinformatie beschikbaar.",
    "system_busy": "Systeem is bezet, probeer het later nog eens.",
    "err_code": "Foutmelding",
    "leaflet_expired_title": "Vervallen",
    "leaflet_expired_message": "<p> <b>Dit product is geïdentificeerd als vervallen (over datum).</b> </p> ",
    "leaflet_incorrect_date_title": "",
    "leaflet_incorrect_date_subtitle": "",
    "leaflet_incorrect_date_message": "<b> </b>.",
    "select_lang_title": "Taal niet beschikbaar",
    "scan_error_title": "Fout in Scannen",
    "camera_error_message": "Er is iets fout gegaan en de geselecteerde camera kan niet juist worden geopend. Controleer de camera instellingen van uw toestel of probeer de camera in het menu aan te passen.",
    "leaflet_lang_select_message": "Sorry, maar er is geen bijsluiter voor de door jouw gekozen taal. Je hebt de keuze voor andere beschikbare talen in de lijst.",
    "lang_proceed": "Ga verder",
    "go_home": "Ga terug naar Home",
    "onboarding_welcome": "Je bent er bijna! Lees en geef je akkoord met de algemene voorwaarden.",
    "disagree": "Niet akkoord",
    "agree": "Akkoord",
    "disagree_extra_text": "De \"PharmaLedger\" App zal niet werken zonder je akkoord met de algemene voorwaarden. Lees de algemene voorwaarden.",
    "fwd_privacy": "Privacybeleid",
    "fwd_terms": "Algemene voorwaarden",
    "fwd_help": "Help",
    "fwd_about": "Over",
    "privacy_modal_title": "Privacybeleid",
    "privacy_modal_subtitle": "Ons Privacy- en veiligheidsbeleid",
    "privacy_content": "<h2>Privacy Notice</h2><p>Deze privacyverklaring is van toepassing op het gebruik van het product PharmaLedger Association Electronic Product Information.</p><h2>Contactpersonen</h2><p><b>a) Identiteit en contacten van de verantwoordelijke voor de verwerking of gezamenlijke verantwoordelijken</b></p><p>De verantwoordelijke voor de verwerking van uw gegevens is de PharmaLedger Association.</p><p><b>b) Contacten van de functionaris voor gegevensbescherming</b></p><p>De gegevensbeschermingsdienst van PharmaLedger Association is bereikbaar op <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><h2>Welke persoonlijke gegevens we gebruiken</h2><p>Wij verzamelen alleen de technische gegevens die nodig zijn om uw elektronische folder te bezorgen. Dit omvat uw IP-adres en technische identificatiegegevens van het apparaat en de browser die u gebruikt om toegang te krijgen tot onze applicatie.</p><p><em>In detail verzamelen wij de volgende gegevens:</em></p><ul><li><p><em>Toegang tot mobiele apparaten.</em> Wij kunnen toegang of toestemming vragen voor bepaalde functies van uw mobiele apparaat, waaronder de camera van uw mobiele apparaat en andere functies. Als u onze toegang of toestemming wilt wijzigen, kunt u dit doen in de instellingen van uw apparaat.</p></li></ul><ul><li><p><em>Mobiele apparaatgegevens.</em> Wij verzamelen automatisch apparaatgegevens (zoals uw mobiele apparaat ID, model en fabrikant), besturingssysteem, versiegegevens, systeemconfiguratiegegevens, apparaat- en applicatieidentificatienummers, browsertype en -versie, hardwaremodel Internet service provider, en/of mobiele provider, en Internet Protocol (IP) adres (of proxy server). Als u onze applicatie(s) gebruikt, kunnen wij ook informatie verzamelen over het telefoonnetwerk dat aan uw mobiele apparaat is gekoppeld, het besturingssysteem of platform van uw mobiele apparaat, het type mobiel apparaat dat u gebruikt, de unieke apparaat-ID van uw mobiele apparaat en informatie over de functies van onze applicatie(s) die u hebt geopend.</p></li></ul><h2>Waarom wij uw persoonsgegevens verzamelen</h2><p><b>Doeleinden</b></p><p>Wij verzamelen uw technische gegevens om u een elektronische productbijsluiter voor uw medicatie te verstrekken.</p><p>Als zodanig kunnen wij ons beroepen op de volgende rechtsgronden om uw persoonsgegevens te verwerken:</p><ul><li><p><b>Uitvoering van een contract.</b> Wij kunnen uw persoonsgegevens verwerken wanneer wij van mening zijn dat dit noodzakelijk is om contractuele verplichtingen jegens u na te komen, waaronder het leveren van onze Diensten of op uw verzoek voorafgaand aan het aangaan van een contract met u.</p></li></ul><ul><li><p><b>Wettelijke verplichtingen.</b> Wij kunnen uw gegevens verwerken wanneer wij van mening zijn dat dit noodzakelijk is om te voldoen aan onze wettelijke verplichtingen, zoals het nakomen van onze verplichtingen in het kader van regelgeving op het gebied van gezondheidszorg en wetgeving inzake volksgezondheid.</p></li></ul><h2>Met wie wij uw persoonlijke gegevens delen</h2><p>Ledenbedrijven en derden-dienstverleners.</p><p>Wij delen uw gegevens met derden verkopers, dienstverleners, aannemers of agenten (\"derden\") die diensten voor ons of namens ons uitvoeren en toegang tot dergelijke informatie nodig hebben om dat werk te doen. Wij hebben contracten afgesloten met onze derden, die bedoeld zijn om uw persoonsgegevens te helpen beschermen. Dit betekent dat zij niets met uw persoonsgegevens kunnen doen, tenzij wij hen daartoe opdracht hebben gegeven. Zij zullen uw persoonsgegevens ook niet delen met andere organisaties dan wij. Zij verbinden zich er ook toe de gegevens die zij namens ons bewaren te beschermen en te bewaren gedurende de periode die wij hen opdragen. De categorieën van derden waarmee wij persoonsgegevens kunnen delen zijn de volgende:</p><ul><li><p>Fabrikanten van geneesmiddelen (lidbedrijven)</p></li></ul><ul><li><p>Technische dienstverleners</p></li></ul><h2>Hoe lang we uw persoonlijke gegevens bewaren</h2><p>De PharmaLedger Association bewaart uw technische gegevens alleen zo lang als nodig is om uw bijsluiter aanvraag te verwerken tot 30 dagen.</p><p>Uw geneesmiddelenfabrikant bewaart uw gegevens ook gedurende een bepaalde periode zoals bepaald door hun beleid inzake gegevensbewaring, neem voor meer informatie over deze bewaring contact op met uw geneesmiddelenfabrikant.</p><h2>Als u ons uw persoonlijke gegevens niet verstrekt</h2><p>Als u ervoor kiest ons uw technische gegevens niet te verstrekken, kunnen wij niet aan uw folderverzoek voldoen.</p><h2>Uw rechten</h2><p>Als u verzoeken hebt met betrekking tot uw persoonlijke gegevens onder de GDPR, zoals een verzoek om toegang tot of verwijdering van uw gegevens, kunt u contact met ons opnemen via <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Wij zullen dergelijke verzoeken binnen 30 dagen behandelen.</p><h2>Intrekking van toestemming</h2><p>Als u verzoeken hebt met betrekking tot uw persoonlijke gegevens onder de GDPR, zoals een verzoek om toegang tot of verwijdering van uw gegevens, kunt u contact met ons opnemen via&nbsp;<a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Wij zullen dergelijke verzoeken binnen 30 dagen behandelen.</p><h2>Geautomatiseerde besluitvorming</h2><p>Wij maken geen gebruik van geautomatiseerde besluitvorming bij het verlenen van deze dienst aan u.</p><h2>Internationale overdracht van persoonsgegevens</h2><p>Wanneer uw geneesmiddelenfabrikant vereist dat wij uw gegevens buiten de Europese Unie overdragen, maken wij gebruik van standaardcontractbepalingen om uw gegevens te beschermen.</p><h2>Hoe een klacht in te dienen</h2><p>Als u verzoeken hebt met betrekking tot uw persoonsgegevens onder de GDPR, zoals een verzoek om toegang tot of verwijdering van uw gegevens, kunt u contact met ons opnemen via <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Wij zullen dergelijke verzoeken binnen 30 dagen behandelen. Daarnaast kunt u contact opnemen met uw lokale toezichthoudende autoriteit als u vindt dat uw rechten niet worden voldaan.</p>",
    "terms_modal_title": "Algemene voorwaarden",
    "terms_modal_subtitle": "De voorwaarden die van toepassing zijn bij het gebruik van de PharmaLedger Applicatie",
    "terms_content": "<h2>Gebruiksvoorwaarden voor de Pharmaledger Association’s Elektronische Product Informatie Website en Applicatie</h2><p>Door de PharmaLedger Association’s Elektronische Product Informatie website en applicatie (de “Diensten”) te bezoeken en te gebruiken, stemt u ermee in om gebonden te zijn aan deze gebruiksvoorwaarden (de “Voorwaarden”). U mag de Diensten niet bezoeken of gebruiken als u niet met deze Voorwaarden instemt. De Diensten worden beheerd door de PharmaLedger Association (de “Associatie”) en zijn bedoeld voor gebruik door individuen die op zoek zijn naar informatie over hun medicatie. Een meerpartijennetwerk levert de Diensten, en uw medicatiefabrikant voorziet de productinformatie getoond op de Diensten. De Associatie treedt op als de gegevensbeheerder van deze informatie.</p><h2>Gebruik van de Diensten</h2><p>U stemt ermee in om de Diensten enkel te gebruiken voor wettelijke doeleinden, en op een manier die geen inbreuk doet op de rechten van, of het gebruik en genot van de Diensten door enige andere derde partij beperkt of belemmert. Zulke beperking of belemmering omvat, zonder limitatie, gedrag dat onwettelijk is of dat intimiderend kan zijn of leed of ongemak kan veroorzaken aan enig welke persoon, alsook de transmissie van obscene of beledigende inhoud of storing van het normale verloop van dialoog binnen de Diensten.</p><h2>Intellectuele Eigendom</h2><p>De inhoud van de Diensten, inclusief, maar niet beperkt tot, tekst, afbeeldingen en software, is het eigendom van de Associatie of haar licentieverstrekkers en deelnemende bedrijven en is beschermd door het auteursrecht en andere wetten in verband met intellectueel eigendom. U mag geen enkele inhoud van de Diensten gebruiken voor commerciële doeleinden zonder de expliciete geschreven toestemming van de Associatie.</p><h2>Aansprakelijkheid</h2><p>De Associatie biedt geen representaties of garanties van welke aard dan ook, expliciet of geïmpliceerd, voor de werking van de Diensten of de informatie, inhoud, materialen of producten die in de Diensten omvat zijn. De Associatie zal niet aansprakelijk zijn voor schade van welke aard dan ook die resulteren uit het gebruik van de Diensten, inclusief, maar niet beperkt tot, rechtstreekse, onrechtstreekse, incidentele, punitieve en voortvloeiende schade.</p><h2>Geldend Recht</h2><p>Deze Voorwaarden en uw gebruik van de Diensten vallen onder en zullen geïnterpreteerd worden door de wetten van Zwitserland en enige disputen zullen opgelost worden in de rechtbanken van Bazel, Zwitserland.</p><h2>Aanpassingen van de Voorwaarden</h2><p>De Associatie behoudt zich het recht voor om deze Voorwaarden op ieder moment aan te passen, en u bent verantwoordelijk voor het periodisch nakijken van deze Voorwaarden op enige aanpassingen. Uw doorgaand gebruik van de Diensten nadat de Voorwaarden aangepast werden zal betekenen dat u de herziene Voorwaarden aanvaardt.</p>",
    "about_modal_subtitle": "Over",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Help",
    "help_modal_subtitle": "FAQ’s",
    "help_content": "<div><p><b><h2>Wat is EPI?</h2></b></p>" +
      "<p>" +
      "<b>EPI</b> is een afkorting voor <b>Elektronische Product Informatie</b>. Het is een elektronische versie van de papieren productinformatiefolder of bijsluiter die u meestal in een farmaceutische product verpakking vindt. In sommige gevallen kan het <b>EPI</b> de papieren bijsluiter vervangen." +
      "</p>" +
      "<p>" +
      "    <b><h2>Wat is PharmaLedger?</h2></b>" +
      "</p>" +
      "<p>De PharmaLedger Association (PLA)is een vereniging zonder winstoogmerk, gevestigd in Zwitserland, met als doel een digitaal vertrouwd ecosysteem in de gezondheidszorg mogelijk te maken en te bevorderen via een gestandaardiseerd en vertrouwd open-source platform. PLA bevordert de samenwerking en versnelt de innovatie en adoptie om wederzijdse voordelen te halen in de gezondheidszorg voor patiënten en andere belanghebbenden. PLA werd in 2022 opgericht om het werk van het PharmaLedger-project voort te zetten, wat een 3-jarig project was gefinancierd door de Europese Commissie en de farmaceutische industrie om de voordelen van blockchain oplossingen aan te tonen. Meer informatie is beschikbaar op <a href=\"https://pharmaledger.org/\">https://pharmaledger.org/</a>." +
      "</p>" +
      "<p><b><h2>Wat is een DataMatrix?</h2></b></p>" +
      "<p>Het is een soort streepjescode op uw productverpakking. Het is een zwart-wit vierkant met streepjes in en ziet er ongeveer zo uit:<br>" +
      "    <img src=\"./images/barcode_example.png\" alt='voorbeeld van een DataMatrix-barcode'>" +
      "</p>" +
      "<p>" +
      "    <b><h2>Hoe gebruik je de App?</h2></b>" +
      "</p>" +
      "<p>" +
      "Volg de instructies op de landingspagina van de <b>App…</b> het toont een afbeelding van waar u de <b>DataMatrix</b> op uw productpakket kunt vinden. Zodra u de <b>DataMatrix</b> hebt gevonden, klikt u op de knop “Scan <b>DataMatrix</b>”. Laat de applicatie de camera gebruiken zodat de <b>DataMatrix</b> kan worden gescand. Gebruik de camera om scherp te stellen op de <b>DataMatrix</b>. Zodra het product met succes is gescand, wordt de <b>EPI</b> weergegeven. U kunt op de knop ‘+’ klikken voor meer informatie." +
      "</p><p><b><h2>Waarom geeft mijn DataMatrix scan geen resultaat?</h2></b></p><p>" +
      "Er zijn verschillende redenen waarom de <b>DataMatrix</b> op uw verpakking mogelijk geen EPI geeft.Eén van de redenen zou de focus van de camera kunnen zijn. Probeer de code op een goed verlichte plaats te scannen en zorg ervoor dat dat de code duidelijk zichtbaar is op het scherm. Als u moeite heeft om uw hand stabiel te houden, kunt u proberen een tafel te gebruiken om uw handen te ondersteunen." +
      "</p></div>"
  },
  "ar": {
    "app_version": "إصدار التطبيق:",
    "welcome": "مرحبا بك في فارما ليدجر",
    "scan_explain": "ابحث عن باركود داتا ماتركس الموجود على دوائك لمسحه وعرض المعلومات الخاصة بالدواء. ",
    "scan_button": "امسح الداتا ماتركس",
    "cancel": "الغاء",
    "change_camera": "بدل الكاميرا",
    "scan_again": "امسح مرة أخرىً",
    "product_not_found_title": "لم يتم التعرف عليه",
    "product_not_loaded_title": "معلومات المنتج غير متوفرة.",
    "error_subtitle": "منتج غير موثوق",
    "product_not_found": "لا يمكن العثور على هذا المنتج.",
    "product_not_loaded": "للأسف، لم يتم تحميل أي معلومات عن المنتج.",
    "system_busy": "النظام مشغول، يرجى إعادة المحاولة لاحقا.",
    "err_code": "خطأ بالكود",
    "leaflet_expired_title": "منتهي الصلاحية",
    "leaflet_expired_message": "<p> <b>تم تحديد هذا المنتج على أنه منتهي الصلاحية. </b> </p> ",
    "leaflet_incorrect_date_title": "تاريخ خاطئ",
    "leaflet_incorrect_date_subtitle": "تاريخ المسح غير صحيح",
    "leaflet_incorrect_date_message": "<b> تاريخ هذا المنتج غير صحيح</b>.",
    "select_lang_title": "اللغة غير متوفرة",
    "scan_error_title": "خطأ في المسح",
    "camera_error_message": "حدث خطأ ولا يمكن الوصول إلى الكاميرا المحددة بشكل صحيح. يرجى التحقق من إعدادات كاميرا جهازك أو محاولة تغيير الكاميرا من القائمة. ",
    "leaflet_lang_select_message": "النشرة غير متوفرة بلغتك المفضلة. يمكنك اختيار لغة من قائمة اللغات المتاحة.",
    "lang_proceed": "تابع",
    "go_home": "العودة إلى الصفحة الرئيسية",
    "onboarding_welcome": "تقريبا وصلت! يرجى قراءة الأحكام والشروط والموافقة عليها.",
    "disagree": "غير موافق ",
    "agree": "موافق",
    "disagree_extra_text": "لن يعمل تطبيق فارما ليدجر حتى توافق على الأحكام والشروط. لذا يرجى قراءة الأحكام والشروط.",
    "fwd_privacy": "سياسة الخصوصية",
    "fwd_terms": "الأحكام والشروط",
    "fwd_help": "التعليمات",
    "fwd_about": "عن",
    "privacy_modal_title": "سياسة الخصوصية",
    "privacy_modal_subtitle": "مبادئ الخصوصية والأمان الخاصة بنا",
    "privacy_content": "<h2>إشعار الخصوصية</h2> <p> ينطبق إشعار الخصوصية هذا على استخدام منتج PharmaLedger Association Electronic Product.</p> <h2>جهات الاتصال</h2><p><b>a) الهوية وجهات الاتصال الخاصة بالمراقب أو بالمراقبين المشتركين</b></p><p> ومراقب بياناتك هو PharmaLedger Association. </p> <p><b>b) جهات اتصال مسؤول حماية البيانات</b></p><p> يمكن التواصل مع مكتب حماية البيانات التابع لمنظمة PharmaLedger Association عبر البريد الإليكتروني <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a> </p><h2>ما هي البيانات الشخصية التي نستخدمها؟</h2><p> نحن نجمع فقط البيانات الفنية المطلوبة لتسليم المنشور الإلكتروني الخاص بك. وتتضمن تلك البيانات عنوان بروتوكول الإنترنت (IP) والمعرفات الفنية للجهاز والمتصفح اللذين تستخدمهما للوصول إلى تطبيقنا. </p> <p><em>وتفصيلًا نحن نجمع عناصر البيانات التالية </em> </p> <ul> <li> <p> <em> الوصول إلى الجهاز المحمول. </em> قد نطلب السماح بالوصول أو الإذن بالوصول إلى بعض ميزات جهازك المحمول بما في ذلك كاميرا جهازك المحمول وميزات أخرى. إذا كنت ترغب في تغيير إمكانية وصولنا أو أذوناتنا، فيمكنك تغيير ذلك في إعدادات جهازك. </p> </li> <li> <p> <em> بيانات الجهاز المحمول. </em> إننا نجمع معلومات الجهاز تلقائيًا (مثل معرّف جهازك المحمول والطراز والشركة المصنعة) ونظام التشغيل ومعلومات الإصدار ومعلومات تكوين النظام وأرقام تعريف الجهاز والتطبيق ونوع المتصفح وإصداره ومزود خدمة الإنترنت و / أو شركة الجوال لطراز الجهاز وعنوان بروتوكول الإنترنت (IP) (أو الخادم الوكيل). إذا كنت تستخدم تطبيقنا (تطبيقاتنا) فقد نقوم أيضًا بجمع معلومات عن شبكة الهاتف المرتبطة بجهازك المحمول ونظام تشغيل جهازك المحمول أو منصة تشغيله، ونوع الجهاز المحمول الذي تستخدمه، ورقم التعريف الفريد الخاص بجهازك المحمول، والمعلومات حول ميزات تطبيقنا (تطبيقاتنا) التي قمت بالوصول إليها. </p> </li> </ul> <h2> لماذا نجمع بياناتك الشخصية </h2> <p> <b> الأغراض </b> </p> <p> نجمع بياناتك الفنية بغرض تزويدك بنشرة إلكترونية عن المنتج لدوائك. </p> <p> وعليه فقد نعتمد على الأسس القانونية التالية لمعالجة معلوماتك الشخصية: </p> <ul> <li> <p> <b> أداء العقد. </b> نحن قد نعالج معلوماتك الشخصية عندما نعتقد أنه من الضروري الوفاء بالالتزامات التعاقدية تجاهك، بما في ذلك تقديم خدماتنا أو بناءً على طلبك قبل إبرام عقد معك. </p> </li> <li> <p> <b> ب الالتزامات القانونية. </b> قد نعالج معلوماتك عندما نعتقد أن معالجتها ضرورية للامتثال لالتزاماتنا القانونية، مثل الوفاء بالتزاماتنا بموجب لوائح الرعاية الصحية وتشريعات الصحة العامة. </p> </li> </ul> <h2> مع من نشارك بياناتك الشخصية </h2> <p> الشركات الأعضاء ومقدمي الخدمات الخارجيين. </p> <p> نشارك بياناتك مع البائعين الخارجيين أو مقدمي الخدمات أو المقاولين أو الوكلاء (\"أطراف ثالثة\") الذين يؤدون خدمات لنا أو نيابة عنا ويطلبون الوصول إلى هذه المعلومات للقيام بهذا العمل. لدينا عقود سارية مع أطراف أخرى وهي مصممة للمساعدة في حماية معلوماتك الشخصية. وهذا يعني أنه لا يمكنهم فعل أي شيء بمعلوماتك الشخصية ما لم نطلب منهم القيام بذلك كما أنهم لن يشاركوا معلوماتك الشخصية مع أي منظمة غيرنا. وهم ملتزمون أيضًا بحماية البيانات التي يحتفظون بها نيابة عنا والاحتفاظ بها للفترة التي نطلبها. فئات الجهات الخارجية التي قد نشارك المعلومات الشخصية معها هي كما يلي: </p> <ul> <li> <p> الشركات المصنعة للأدوية (الشركات الأعضاء) </p> </li> <li> <p> مقدمو الخدمة الفنية </p> </li> </ul> <h2> المدة التي نحتفظ بها ببياناتك الشخصية </h2> <p> تقوم منظمة PharmaLedger Association بتخزين بياناتك الفنية فقط طوال الوقت الذي نحتاجة لمعالجة طلب المنشور الخاص بك وقد تصل المدة إلى 30 يومًا. </p> <p> ستحتفظ الشركة المصنعة للأدوية أيضًا بياناتك لفترة زمنية محددة وفقًا لما تحدده سياسات الاحتفاظ بالبيانات الخاصة بها، لمزيد من المعلومات حول هذا الاحتفاظ بالمعلومات، يرجى الاتصال بالشركة المصنعة للأدوية. </p> <h2 > إذا لم تقدم لنا بياناتك الشخصية </h2> <p> إذا اخترت عدم تقديم بياناتك الفنية إلينا، فلن نتمكن من تلبية طلب المنشور الخاص بك. </p> <h2> حقوقك </h2> <p> إذا كان لديك أي طلبات تتعلق ببياناتك الشخصية بموجب اللائحة العامة لحماية البيانات، مثل طلب الوصول إلى بياناتك أو حذفها، فيمكنك التواصل معنا عبر البريد الإليكتروني: <a href = \"mailto: dpo@pharmaledger.org \" > dpo@pharmaledger.org </a> </p> <p> وسننظر في هذه الطلبات في غضون 30 يومًا </p> <h2> سحب الموافقة </h2> <p> إذا كان لديك أي طلبات تتعلق ببياناتك الشخصية بموجب اللائحة العامة لحماية البيانات ، مثل طلب الوصول إلى بياناتك أو حذفها ، فيمكنك التواصل معنا عبر البريد الإليكتروني <a href=\"mailto:dpo@pharmaledger.org\"> dpo@pharmaledger.org </a>. </p> <p> وسننظر في هذا الطلبات في غضون 30 يومًا </p> <h2> اتخاذ القرار بصورة آلية </h2> <p> نحن لا نستخدم أية وسائل آلية لاتخاذ القرارات أثناء تقديمنا لهذه الخدمة لك. </p> <h2> النقل الدولي البيانات الشخصية </h2> <p> عندما تطلب منا الشركة المصنعة للأدوية نقل بياناتك خارج الاتحاد الأوروبي، فإننا نستخدم البنود التعاقدية القياسية لحماية بياناتك</p> <h2> كيفية تقديم الشكوى </h2> <p> إذا كان لديك أي طلبات تتعلق ببياناتك الشخصية بموجب اللائحة العامة لحماية البيانات، مثل طلبات الوصول إلى بياناتك أو حذفها، فيمكنك التواصل معنا عبر البريد الإليكتروني: <a href = \"mailto: dpo@pharmaledger.org \"> dpo@pharmaledger.org </a>. </p> <p> وسننظر في هذه الطلبات في غضون 30 يومًا. وبالإضافة إلى ذلك يمكنك التواصل مع السلطة الإشرافية المحلية إذا شعرت أنك لم تحصل على حقوقك كما يجب. </p>",
    "terms_modal_title": "الأحكام والشروط",
    "terms_modal_subtitle": "الشروط والأحكام التي تطبق عند استخدام تطبيق فارما ليدجر.",
    "terms_content": " <h2> الشروط والأحكام الخاصة بموقع وتطبيق PharmaLedger Association's Electronic Product Information </h2> <p> من خلال الوصول إلى أو استخدام الموقع الإليكتروني أو تطبيق PharmaLedger Association's Electronic Product Information (\"الخدمات\") ، فإنك توافق على الالتزام بهذه الشروط والأحكام (\"الشروط\"). لا يجوز لك الوصول إلى الخدمات أو استخدامها إذا كنت لا توافق على هذه الشروط. تشغل هذه الخدمات منظمة PharmaLedger Association (\"المنظمة\") وهي مخصصة للاستخدام من قبل الأفراد الذين يبحثون عن معلومات عن أدويتهم. وتقدم هذه الخدمات شبكة متعددة الأطراف، وتقوم الشركة المصنعة للأدوية بتوفير معلومات المنتج المعروضة من خلال الخدمات. تعمل المنظمة كمراقب للبيانات لهذه المعلومات. </p> <h2> استخدام الخدمات </h2> <p> أنت توافق على استخدام الخدمات للأغراض المشروعة فقط وبطريقة لا تنتهك حقوق أي طرف ثالث أو تقيد أو تمنع استخدامه للخدمات والتمتع بها. يتضمن هذا التقييد أو المنع على سبيل المثال لا الحصر السلوك غير القانوني أو الذي قد يضايق أو يسبب ضائقة أو إزعاجًا لأي شخص، ونقل محتوى فاحش أو مسيء أو تعطيل التدفق الطبيعي للحوار داخل الخدمات. </p><h2> الملكية الفكرية </h2><p> يعد محتوى الخدمات بما فيه-على سبيل المثال لا الحصر- النصوص والرسومات والصور والبرامج ملكًا للمنظمة أو الجهات المرخصة والشركات الأعضاء فيها ومحمي بموجب حقوق النشر وقوانين الملكية الفكرية الأخرى. لا يجوز لك استخدام أي محتوى من الخدمات لأي غرض تجاري دون موافقة خطية صريحة من المنظمة. </p> <h2> المسؤولية </h2> <p> لا تقدم المؤسسة أي تعهدات أو ضمانات من أي نوع- سواء صريحة أو ضمنية- فيما يتعلق بتشغيل الخدمات أو المعلومات أو المحتوى أو المواد أو المنتجات المدرجة في الخدمات. لن تكون المؤسسة مسؤولة عن أي أضرار من أي نوع تنشأ عن استخدام الخدمات، بما في ذلك على سبيل المثال لا الحصر الأضرار المباشرة وغير المباشرة والعرضية والعقابية والتبعية. </p> <h2> القانون الحاكم </h2> <p> ستخضع هذه الشروط واستخدامك للخدمات وتفسر وفقًا لقوانين سويسرا وسيتم حل أي نزاعات في محاكم بازل بسويسرا. </p> <h2> التغييرات على الشروط </h2> <p> تحتفظ المنظمة بالحق في تغيير هذه الشروط في أي وقت، وأنت مسؤول عن التحقق من هذه الشروط بشكل دوري بحثًا عن أي تغييرات. استمرار استخدامك للخدمات بعد إجراء أي تغييرات على الشروط سيفهم على أنها موافقة منك على الشروط المعدلة. </p><p><br></p>",
    "about_modal_subtitle": "عن التطبيق",
    "about_modal_title": "فارما ليدجر",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://Pharmaledger.org\"></iframe>",
    "help_modal_title": "التعليمات",
    "help_modal_subtitle": "الأسئلة الشائعة",
    "help_content": "<div><h2>ما هوEPI ؟ </h2>" +
      "<p>" +
      "<b>EPI</b>هو اختصار ل<b>معلومات المنتج الإلكترونية</b>. إنها نسخة إلكترونية من نشرة معلومات المنتج الورقية التي تجدها عادةً داخل عبوة المنتج الصيدلاني. في بعض الحالات، قد تحل نسخة <b>EPI</b> محل النشرة الورقية." +
      "</p>" +
      "<h2>ما هو فارما ليدجر؟</h2>" +
      "<p>جمعية فارما ليدجر (PLA) هي جمعية غير هادفة للربح مقرها سويسرا، تهدف إلى تمكين وتعزيز الثقة الرقمية للنظام البيئي في مجال الرعاية الصحية من خلال منصة مفتوحة المصدر موحدة وموثوقة. تعزز PLA التعاون وتسريع الابتكار وتبني الأفكار لتحقيق فوائد متبادلة في مجالات الرعاية الصحية والعلوم الحياتية للمرضى والأشخاص ذات العلاقة. تم تشكيل PLA في عام 2022 لمواصلة عمل مشروع فارما ليدجر، وهو مشروع مدته 3 سنوات تموله المفوضية الأوروبية والصناعات الدوائية، ويهدف إلى إظهار أهمية حلول بلوكتشين وقيمتها. المزيد من المعلومات متوفرة عبر الموقع at <a href=\"https://pharmaledger.org/\">https://pharmaledger.org</a>." +
      "</p>" +
      "<h2>ما هي داتا ماتركس؟</h2>" +
      "<p>إنه نوع من أنواع الباركود يوجد على عبوة منتجك الدوائي. فهو باركود على شكل صندوق مربع أبيض وأسود اللون وسيبدو مشابهًا لهذا: <br>" +
      "    <img src=\"./images/barcode_example.png\">" +
      "</p>" +
      "<h2>كيفية استخدام التطبيق؟</h2>" +
      "<p>" +
      "اتبع التعليمات الموجودة على صفحة الهبوط الخاصة بالتطبيق ... حيث يتم عرض صورة لكيفية العثور على الداتا ماتركس الموجود على عبوة منتجك.  بمجرد العثور على الداتا ماتركس، انقر فوق الزر \"امسح داتا ماتركس\".  ثم اسمح للتطبيق باستخدام الكاميرا حتى يمكن مسح الداتا ماتركس.  استخدم الكاميرا لزيادة التركيز على الداتا ماتركس. فبمجرد مسح العبوة بنجاح، سيتم عرض <b>EPI</b>. يمكنك النقر فوق الزر \"+\" للحصول على مزيد من التفاصيل." +
      "</p><h2>لماذا لا يعطي مسح الداتا ماتركس أي نتيجة؟</h2><p>" +
      "هناك عدة أسباب لعدم ظهور EPI بعد مسح الداتا ماتركس الموجود على عبوة منتجك. قد يكون أحد الأسباب هو عدم تركيز الكاميرا جيدا. يرجى محاولة مسح الكود في مكان جيد الإضاءة بحيث يكون ظاهر بوضوح على الشاشة.  إذا كنت تجد صعوبة في الحفاظ على يدك ثابتة، فيمكنك تجربة استخدام طاولة لجعلها ثابتة.</p></div>"
  },
  "ko": {
    "app_version": "앱 버전:",
    "welcome": "PharmaLedger에 오신 것을 환영합니다",
    "scan_explain": "의약품의 데이터 매트릭스 바코드(DataMatrix Barcode)를 스캔하여 자세한 정보를 확인할 수 있습니다.",
    "scan_button": "데이터 매트릭스 스캔하기",
    "cancel": "취소",
    "change_camera": "카메라를 바꾸세요",
    "scan_again": "다시 스캔하기",
    "product_not_found_title": "인식되지 않음.",
    "product_not_loaded_title": "제품 정보를 볼 수 없습니다.",
    "error_subtitle": "인증되지 않은 제품",
    "product_not_found": "이 제품을 찾을 수 없습니다.",
    "product_not_loaded": "죄송합니다. 제품 정보가 입력되지 않았습니다.",
    "system_busy": "시스템이 사용 중입니다. 나중에 다시 시도하십시오.",
    "err_code": "코드 오류",
    "leaflet_expired_title": "만료됨",
    "leaflet_expired_message": "<p> <b>이 제품의 유효기간이 만료된 것으로 확인되었습니다.</b> </p> ",
    "leaflet_incorrect_date_title": "잘못된 날짜",
    "leaflet_incorrect_date_subtitle": "스캔한 날짜가 잘못되었습니다",
    "leaflet_incorrect_date_message": "<b>이 제품의 날짜가 잘못되었습니다</b>.",
    "select_lang_title": "언어를 사용할 수 없습니다",
    "scan_error_title": "스캔 오류",
    "camera_error_message": "오류가 발생하여 선택한 카메라에 제대로 액세스할 수 없습니다. 장치의 카메라 설정을 확인하거나 메뉴에서 카메라를 변경해 보세요.",
    "leaflet_lang_select_message": "본설명서는 사용자 선호 언어가 제공되지 않습니다. 사용 가능한 언어 목록 중에서 언어를 선택해주세요.",
    "lang_proceed": "진행",
    "go_home": "돌아가기",
    "onboarding_welcome": "거의 다 끝났어요!<br>약관을 읽고 동의해 주세요.",
    "disagree": "동의하지 않음",
    "agree": "동의함",
    "disagree_extra_text": "사용자가 약관에 동의할 때까지 \"PharmaLedger\" 앱은 작동하지 않습니다. 이용약관을 확인해주세요.",
    "fwd_privacy": "개인 정보 보호 정책",
    "fwd_terms": "약관",
    "fwd_help": "도움",
    "fwd_about": "소개",
    "privacy_modal_title": "개인 정보 보호 정책",
    "privacy_modal_subtitle": "개인 정보 보호 및 보안 원칙",
    "privacy_content": "<h2>개인 정보 보호 정책</h2> <p>본 개인 정보 보호 정책은 PharmaLedger Association 전자 제품 및 제품 정보의 사용에 적용됩니다. </p><h2>연락처</h2><p><b>a) 관리자 또는 공동 관리자의 신원 및 연락처</b></p><p>데이터의 관리자는 PharmaLedger Association입니다.</p> <p><b>b) 데이터 보호 책임자의 연락처</b></p><p>PharmaLedger Association의 데이터 보호 책임 사무소는 다음 주소로 연락할 수 있습니다 <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><h2>우리가 수집하는 개인 데이터</h2><p>당사는 귀하의 전자 설명서를 제공하는 데 필요한 기술 데이터만 수집합니다. 여기에는 애플리케이션을 액세스하는 데 사용하는 장치 및 브라우저의 IP 주소와 기술 식별자가 포함됩니다.</p> <p><em>세부적으로 다음 데이터 요소를 수집합니다</em></p><ul><li><p><em>모바일 장치 액세스.</em> 모바일 장치의 카메라 및 기타 기능을 포함하여 모바일 장치에서 특정 기능에 대한 액세스 또는 권한을 요청할 수 있습니다. 액세스 또는 사용 권한을 변경하려면 장치 설정에서 변경할 수 있습니다.</p></li><li><p><em>모바일 장치 데이터.</em> 당사는 자동으로 장치 정보(예: 모바일 장치 ID, 모델 및 제조업체), 운영 체제, 버전 정보 및 시스템 구성 정보, 장치 및 애플리케이션 식별 번호, 브라우저 유형 및 버전, 하드웨어 모델 인터넷 서비스 공급자 및/또는 이동 통신사, 및 IP(인터넷 프로토콜) 주소(또는 프록시 서버). 애플리케이션을 사용하는 경우 모바일 장치와 연결된 전화 네트워크, 모바일 장치의 운영 체제 또는 플랫폼, 사용하는 모바일 장치 유형, 모바일 장치의 고유 장치 ID 및 액세스한 애플리케이션의 기능에 대한 정보도 수집할 수 있습니다.</p></li></ul><h2>개인 데이터를 수집하는 이유</h2><p><b>이유</b></p><p>당사는 귀하의 의약품에 대한 전자 설명서를 제공할 목적으로 귀하의 기술 데이터를 수집합니다. </p><p>따라서, 당사는 귀하의 개인 정보를 처리하기 위해 다음과 같은 법적 근거에 의존할 수 있습니다:</p><ul><li><p><b>계약의 이행.</b> 당사는 서비스 제공을 포함하여 귀하에게 계약상 의무를 이행할 필요가 있다고 판단될 때 또는 귀하와 계약을 체결하기 전에 귀하의 요청에 따라 귀하의 개인 정보를 처리할 수 있습니다.</p></li><li><p><b>법적 의무.</b> 당사는 의료 규정 및 공중 보건 법률에 따른 의무를 이행하는 것과 같은 당사의 법적 의무 준수를 위해 필요하다고 판단되는 경우 귀하의 정보를 사용할 수 있습니다.</p></li></ul><h2>귀하의 개인 데이터를 공유하는 대상</h2><p>회원사 및 제3자 서비스 제공업체.</p><p>당사를 위해 또는 당사를 대신하여 서비스를 수행하고 해당 작업을 수행하기 위해 해당 정보에 액세스해야 하는 제3자 벤더, 서비스 제공자, 계약자 또는 대리인('제3자')과 귀하의 데이터를 공유합니다. 당사는 귀하의 개인 정보를 보호하도록 설계된 제3자와 계약을 체결했습니다. 이것은 당사가 지시하지 않는 한 귀하의 개인 정보로 아무것도 할 수 없다는 것을 의미합니다. 그리고 사용자의 개인 정보를 당사를 제외한 어떤 조직과도 공유하지 않습니다. 또한 당사를 대신하여 보유하고 있는 데이터를 보호하고 우리가 지시한 기간 동안 보관할 것을 약속합니다. 당사가 개인 정보를 공유할 수 있는 제3자의 범주는 다음과 같습니다:</p><ul><li><p>제약회사 (회원사)</p></li><li><p>기술 서비스 제공업체</p></li></ul><h2>귀하의 개인 데이터를 저장하는 기간</h2><p>PharmaLedger Association 은 최대 30일 동안 귀하의설명서 요청을 처리하는 데 필요한 기간 동안만 귀하의 기술 데이터를 저장합니다. </p><p>귀하의 의약품 제조업체 또한 데이터 보존 정책에 따라 정의된 기간 동안 귀하의 데이터를 저장하며, 이 보존에 대한 자세한 내용은 귀하의 의약품 제조업체에 문의하십시오.</p><h2>개인정보를 제공하지 않는 경우</h2><p>기술 데이터를 제공하지 않기로 선택하면설명서 요청을 이행할 수 없습니다.</p><h2>귀하의 권리</h2><p>데이터 액세스 또는 삭제 요청과 같이 GDPR에 따른 개인 데이터와 관련된 요청이 있는 경우, 다음 주소로 문의할 수 있습니다 <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>이러한 요청은 30일 이내에 처리됩니다.</p><h2>동의 철회</h2><p>데이터 액세스 또는 삭제 요청과 같이 GDPR에 따른 개인 데이터와 관련된 요청이 있는 경우, 다음 주소로 문의할 수 있습니다 <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>이러한 요청은 30일 이내에 처리됩니다.</p><h2>자동 의사결정</h2><p>당사는 귀하에게 이 서비스를 제공할 때 자동화된 의사 결정을 사용하지 않습니다.</p><h2>개인 데이터의 국제 전송</h2><p>귀하의 의약품 제조업체가 귀하의 데이터를 유럽 연합 외부로 전송하도록 요구하는 경우 당사는 귀하의 데이터를 보호하기 위해 표준 계약 조항을 활용합니다.</p><h2>불만사항 제기</h2><p>데이터 액세스 또는 삭제 요청과 같이 GDPR에 따른 개인 데이터와 관련된 요청이 있는 경우, 다음 주소로 문의할 수 있습니다 <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>이러한 요청은 30일 이내에 처리됩니다. 또한 귀하의 권리가 충족되지 않는다고 생각되는 경우 해당 지역 감독 기관에 문의할 수 있습니다.</p>",
    "terms_modal_title": "약관",
    "terms_modal_subtitle": "PharmaLedger 애플리케이션을 사용할 때 적용되는 이용 약관.",
    "terms_content": "<h2>PharmaLedger Association의 전자 제품 정보 웹사이트 및 애플리케이션에 대한 이용 약관 </h2><p>PharmaLedger Association의 전자 제품 정보 웹사이트 및 애플리케이션(\"서비스\")에 액세스하거나 사용함으로써 귀하는 본 약관(\"약관\")에 동의합니다. 본 약관에 동의하지 않는 경우 본 서비스에 액세스하거나 서비스를 사용할 수 없습니다. 본 서비스는 PharmaLedger Association(\"협회\")에 의해 운영되며 자신의 의약품에 대한 정보를 찾는 개인이 사용할 수 있도록 고안되었습니다. 다자간 네트워크가 서비스를 제공하고 의약품 제조업체는 서비스를 통해 표시되는 제품 정보를 제공합니다. 협회는 이 정보에 대한 데이터 관리자 역할을 합니다. </p><h2>서비스 사용 </h2><p>귀하는 본 서비스를 합법적인 목적으로만 사용하는 것에 동의하며, 제3자의 권리를 침해하거나 제3자에 의한 서비스의 사용 및 향유를 제한 또는 금지하지 않습니다. 이러한 제한 또는 금지에는 불법적이거나 누구에게나 괴롭힘을 가하거나 고통을 주거나 불편을 줄 수 있는 행위, 외설적이거나 모욕적인 내용의 전송 또는 서비스 내의 정상적인 대화 흐름의 중단이 포함됩니다. </p><h2>지적 재산권 </h2><p>텍스트, 그래픽, 이미지 및 소프트웨어를 포함하되 이에 국한되지 않는 서비스의 콘텐츠는 협회 또는 라이선스 제공자 및 회원사의 재산이며 저작권 및 기타 지적 재산권법에 의해 보호됩니다. 귀하는 협회의 명시적인 서면 동의 없이 상업적 목적으로 서비스의 콘텐츠를 사용할 수 없습니다. </p><h2>책임</h2><p>협회는 서비스 운영 또는 서비스에 포함된 정보, 콘텐츠, 자료 또는 제품에 대해 명시적이든 묵시적이든 어떠한 종류의 진술이나 보증도 하지 않습니다. 협회는 서비스 이용으로 인해 발생하는 직접적, 간접적, 우발적, 징벌적, 결과적 손해를 포함하되 이에 국한되지 않는 어떠한 종류의 손해에 대해서도 책임을 지지 않습니다. </p><h2>준거법 </h2><p>본 약관 및 귀하의 서비스 사용은 스위스 법률에 따라 규율되고 해석되며 모든 분쟁은 스위스 바젤 법원에서 해결됩니다. </p><h2>약관 변경 </h2><p>협회는 언제든지 본 약관을 변경할 수 있는 권리를 보유하며 귀하는 본 약관의 변경 사항을 정기적으로 확인할 책임이 있습니다. 약관이 변경된 후에도 서비스를 계속 사용하면 개정된 약관에 동의하는 것으로 간주됩니다.</p><p><br></p>",
    "about_modal_subtitle": "소개",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "도움",
    "help_modal_subtitle": "자주 묻는 질문",
    "help_content": "<div><p><b><h2>EPI는 무엇인가요?</h2></b></p><p><b>EPI</b>는electronic product information (전자 제품 정보)의 약어입니다. 이것은 일반적으로 의약품 패키지에서 찾을 수 있는 종이로 된 제품설명서의 전자 버전입니다. 경우에 따라 <b>EPI</b>가 종이 설명서를 대체했을 수 있습니다.</p><p><b><h2>PharmaLedger는 무엇인가요?</h2></b></p><p>PLA(PharmaLedger Association)는 표준화되고 신뢰할 수 있는 오픈 소스 플랫폼을 통해 의료 분야의 디지털 신뢰 생태계를 활성화하고 육성하기 위한 목적으로 스위스에 기반을 둔 비영리 단체입니다. PLA는 협업을 촉진하고 혁신과 채택을 가속화하여, 환자 및 기타 이해 관계자를 위한 의료 및 생명 과학 분야에서 상호 이익을 달성합니다. PLA는 블록체인 솔루션의 가치를 입증하기 위해 유럽연합 집행위원회와 제약업계가 자금을 지원하는 3년 프로젝트인 PharmaLedger 프로젝트 작업을 지속하기 위해 2022년에 설립되었습니다. 자세한 내용은 <a href='https://pharmaledger.org/'>Home - PharmaLedger Association</a> 에서 확인할 수 있습니다.</p><p><b><h2>DataMatrix는 무엇인가요?</h2></b></p><p>제품 패키지에 있는 바코드입니다.  이 바코드는 검은색과 흰색 사각형 상자 바코드이며 다음과 유사합니다:<br><img src=\"./images/barcode_example.png\" alt='DataMatrix 바코드 예'></p><p><b><h2>앱을 어떻게 사용합니까?</h2></b></p><p>앱의 랜딩 페이지에 있는 지침을 따릅니다. 여기에는 제품 패키지에서 <b>데이터 매트릭스</b>를 찾을 수 있는 위치를 나타내는 그림이 표시됩니다. <b>데이터 매트릭스</b>를 찾았으면 '<b>데이터 매트릭스</b> 스캔하기' 버튼을 클릭합니다. 응용 프로그램이 카메라를 사용하여 <b>데이터 매트릭스</b>를 스캔할 수 있도록 하십시오. 카메라를 사용하여 <b>데이터 매트릭스</b>에 초점을 맞춥니다. 팩이 성공적으로 스캔되면 <b>EPI</b>가 표시됩니다. '+' 버튼을 클릭하면 자세한 정보를 볼 수 있습니다.</p><p><b><h2>왜 데이터 매트릭스가 결과를 제공하지 않는 것입니까?</h2></b></p><p>패키지의 <b>DataMatrix</b>가 <b>EPI</b>를 제공하지 않는 것에는 몇 가지 이유가 있습니다. 그 중 하나는 카메라의 초점 때문일 수 있습니다. 화면에 잘 보이는 곳에서 코드를 스캔하고 코드가 잘 보이도록 하십시오.  만약 안정적으로 스캔하기가 어려울 경우에는 테이블을 사용해 손을 지탱해보세요.</p></div>"
  },
  "zh": {
    "app_version": "应用程序版本: ",
    "welcome": "欢迎来到 PharmaLedger",
    "scan_explain": "找到药品上的DataMatrix条形码，扫描并查看信息",
    "scan_button": "扫描DataMatrix",
    "cancel": "取消",
    "change_camera": "改变相机",
    "scan_again": "再次扫描",
    "product_not_found_title": "未被识别",
    "product_not_loaded_title": "产品信息不可用",
    "error_subtitle": "未验证的产品",
    "product_not_found": "此产品无法找到",
    "product_not_loaded": "很遗憾，没有加载产品信息",
    "system_busy": "系统繁忙，请稍后再试。",
    "err_code": "错误代码",
    "leaflet_expired_title": "过期",
    "leaflet_expired_message": "<p> <b>该产品已被认定为过期.</b> </p> ",
    "leaflet_incorrect_date_title": "日期不正确",
    "leaflet_incorrect_date_subtitle": "扫描的日期不正确",
    "leaflet_incorrect_date_message": "<b> 此产品的日期不正确</b>.",
    "select_lang_title": "语言不可用",
    "scan_error_title": "扫描错误",
    "camera_error_message": "出了点问题，所选摄像头无法正常访问。请检查你的设备相机设置或尝试从菜单中改变相机。",
    "leaflet_lang_select_message": "传单没有您喜欢的语言版本。你可以从可用的语言列表中选择",
    "lang_proceed": "继续",
    "go_home": "返回首页",
    "onboarding_welcome": "快到了! <br> 请阅读并同意有关条款和条件",
    "disagree": "不同意",
    "agree": "同意",
    "disagree_extra_text": "PharmaLedger\"应用程序在您同意条款和条件之前将无法使用。请阅读条款和条件。",
    "fwd_privacy": "隐私政策",
    "fwd_terms": "条款和条件",
    "fwd_help": "帮助",
    "fwd_about": "关于",
    "privacy_modal_title": "隐私政策",
    "privacy_modal_subtitle": "我们的隐私和安全原则",
    "privacy_content": "<h2> 我们的隐私和安全原则 隐私声明</h2> <p>本隐私声明适用于 PharmaLedger 协会电子产品信息产品的使用。</p> <h2>联系方式</h2><p><b>a) 控制器或联合控制器的身份和联系方式</b></p><p>您的数据的控制器是 PharmaLedger 协会。</p> <p><b>b) 数据保护官的联系方式</b></p><p>PharmaLedger 协会的数据保护官可通过<a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>进行联系。</p><h2>我们使用哪些个人数据</h2><p>我们仅收集提供您电子说明书所需的技术数据。这包括您的 IP 地址以及您用于访问我们的应用程序的设备和浏览器的技术标识符。</p> <p><em>具体而言，我们收集以下数据元素</em></p><ul><li><p><em>移动设备访问。</em>我们可能会请求从您的移动设备访问或权限，包括您的移动设备相机和其他功能。如果您希望更改我们的访问或权限，您可以在设备设置中进行操作。</p></li><li><p><em>移动设备数据。</em>我们会自动收集设备信息（例如您的移动设备 ID、型号和制造商）、操作系统、版本信息和系统配置信息、设备和应用程序识别号码、浏览器类型和版本、硬件模型、互联网服务提供商和/或移动运营商以及互联网协议（IP）地址（或代理服务器）。如果您正在使用我们的应用程序，我们还可能收集与您的移动设备相关联的电话网络信息、您的移动设备操作系统或平台、您使用的移动设备类型、您的移动设备唯一设备 ID 以及您访问的我们的应用程序的功能的信息。</p></li></ul><h2>我们为什么收集您的个人数据</h2><p><b>目的</b></p><p>我们收集您的技术数据，以便为您的药品提供电子产品说明书。</p><p>因此，我们可能依赖以下法律依据处理您的个人信息:</p><ul><li><p><b>合同履行。</b>我们可能会在认为必要的情况下处理您的个人信息，包括提供我们的服务或在与您签订合同之前根据您的请求处理您的信息。法律义务。我们可能会处理您的信息，因为我们认为这是必要的，以遵守我们的法律义务，例如履行我们在医疗保健法规和公共卫生立法下的义务。与谁分享您的个人数据。我们与第三方供应商、服务提供商、承包商或代理商（\"第三方\"）共享您的数据，他们为我们或代表我们执行服务，并需要访问此类信息才能完成工作。我们与第三方签订了合同，旨在帮助保护您的个人信息。这意味着，除非我们已指示他们这样做，否则他们不能处理您的个人信息。他们也不会与我们之外的任何组织共享您的个人信息。他们还承诺保护我们持有的数据，并按照我们的指示保留数据。我们可能与以下第三方类别共享个人信息:药品制造商（成员公司）技术服务提供商我们仅在必要的时间内存储您的技术数据，以处理您的传单请求，最多可存储30天。如果您选择不向我们提供技术数据，则我们将无法满足您的传单请求。如果您对GDPR下的个人数据有任何请求，例如请求访问或删除您的数据，则可以通过邮件dpo@pharmaledger.org与我们联系。我们将在30天内处理此类请求。我们在为您提供此服务时不使用任何自动化决策。 </p><h2>个人数据的国际传输</h2><p>如果您的药品制造商要求我们将您的数据转移到欧盟以外的地区，我们会使用标准合同条款来保护您的数据。</p><h2>如何投诉</h2><p>如果您有任何关于GDPR的个人数据请求，例如请求访问或删除您的数据，您可以通过<a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>联系我们。</p><p>我们将在30天内处理此类请求。此外，如果您认为您的权利没有得到保障，您也可以联系您所在地区的监管机构。</p>",
    "terms_modal_title": "条款和条件",
    "terms_modal_subtitle": "使用 PharmaLedger 应用程序时适用的条款和条件",
    "terms_content": "<p>PharmaLedger协会电子产品信息网站和应用的条款和条件</p><p>通过访问或使用PharmaLedger协会的电子产品信息网站和应用程序（以下简称\"服务\"），即表示您同意受这些条款和条件（以下简称\"条款\"）的约束。如果您不同意这些条款，则不能访问或使用本服务。该服务由PharmaLedger协会（以下简称\"协会\"）运营，并旨在供有关其药物的信息的个人使用。多方网络提供服务，并且药品制造商通过服务提供产品信息。协会是此信息的数据控制器。</p><h2>使用服务</h2><p>您同意仅出于合法目的使用本服务，不会侵犯任何第三方的权利或限制或阻止第三方对本服务的使用和享受。此类限制或阻止包括但不限于非法行为，或可能骚扰或给任何人带来烦恼或不便的行为，以及传输淫秽或攻击性内容或干扰服务内对话的正常流程。</p><h2>知识产权</h2><p>服务的内容，包括但不限于文本，图形，图像和软件，是协会或其许可人和成员公司的财产，受版权和其他知识产权法律的保护。未经协会明确书面同意，您不得将服务中的任何内容用于任何商业用途。</p><h2>责任</h2><p>协会不作任何明示或暗示的保证，不保证服务的运作或服务中包含的信息，内容，材料或产品的准确性或适用性。协会对因使用服务而产生的任何损害，包括但不限于直接，间接，偶然，惩罚性和后果性损害，概不负责。</p><h2>管辖法律</h2><p>这些条款以及您使用本服务将受瑞士法律管辖并解释，并且任何争议将在瑞士巴塞尔的法院解决。</p><h2>条款更改</h2><p>协会保留随时更改这些条款的权利，您负责定期检查这些条款是否有变更。任何更改后您继续使用服务将表示您接受修改后的条款。</p><p><br></p>",
    "about_modal_subtitle": "关于",
    "about_modal_title": "Pharmaledger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "帮助",
    "help_modal_subtitle": "常见问题解答",
    "help_content": "<div><p><b>EPI是什么？</b></p><p><b>EPI</b>是电子产品说明书的缩写。它是药品包装内通常包含的纸质说明书的电子版。在某些情况下，<b>EPI</b>可能已经取代了纸质说明书。</p><p><b>PharmaLedger是什么？</b></p><p>PharmaLedger协会（PLA）是一个位于瑞士的非盈利性协会，旨在通过标准化和可信的开源平台，在医疗保健领域实现数字信任生态系统的建立和发展。PLA促进协作，加速创新和采用，为患者和其他利益相关者在医疗保健和生命科学领域实现共同利益。PLA成立于2022年，旨在继续PharmaLedger项目的工作，该项目是由欧洲委员会和制药行业资助的为期3年的项目，旨在证明区块链解决方案的价值。更多信息可在 https://pharmaledger.org/ 获得。</p><p><b>DataMatrix是什么？</b></p><p>它是产品包装上的一种条形码。它是一个黑白方块形的条形码，看起来类似于这个:<br> <img src=\"./images/barcode_example.png\" alt='DataMatrix 条形码示例'></p><p><b>如何使用应用程序？</b></p><p>按照<b>应用程序</b>的首页面上的说明……它会显示在您的产品包装上找到<b>DataMatrix</b>的图片。一旦您找到了<b>DataMatrix</b>，点击\"扫描<b>DataMatrix</b>\"按钮。允许应用程序使用相机扫描<b>DataMatrix</b>。使用相机对焦于<b>DataMatrix</b>上。扫描包装成功后，将显示<b>EPI</b>。您可以点击\"详情\"按钮以获取更多详细信息。</p><p><b>为什么我的DataMatrix扫描没有结果？</b></p><p>您的包装上的<b>DataMatrix</b>可能无法提供<b>EPI</b>的原因有很多。其中一个原因可能是相机的对焦。请在光线充足的地方尝试扫描代码，并使代码在屏幕上清晰可见。如果您难以保持手稳定，可以尝试使用桌子来支撑双手。</p></div>"
  },
  "es": {
    "app_version": "Versión de app: ",
    "welcome": "Bienvenido a PharmaLedger",
    "scan_explain": "Encuentre el código de Barras DataMatrix en su medicamento para escanear y ver información.",
    "scan_button": "Escanear DataMatrix",
    "cancel": "Cancelar",
    "change_camera": "Cambiar cámara",
    "scan_again": "Escanear nuevamente",
    "product_not_found_title": "No reconocido",
    "product_not_loaded_title": "Información del producto no disponible.",
    "error_subtitle": "Producto no verificado",
    "product_not_found": "Este producto no se puede encontrar.",
    "product_not_loaded": "Lamentablemente, no se ha cargado ninguna información del producto.",
    "system_busy": "Sobrecarga del sistema. Por favor, vuelva a intentarlo más tarde.",
    "err_code": "Código de error",
    "leaflet_expired_title": "Caducado",
    "leaflet_expired_message": "<p> <b>Este producto ha sido identificado como caducado.</b> </p> ",
    "leaflet_incorrect_date_title": "Fecha incorrecta",
    "leaflet_incorrect_date_subtitle": "La fecha escaneada es incorrecta",
    "leaflet_incorrect_date_message": "<b> La fecha de este producto es incorrecta</b>.",
    "select_lang_title": "Idioma no disponible",
    "scan_error_title": "Error de escaneo",
    "camera_error_message": "Algo salió mal y no se tiene un correcto acceso a la cámara seleccionada. Compruebe la configuración de la cámara de su dispositivo o intente cambiar la cámara desde el menú.",
    "leaflet_lang_select_message": "La información del medicamento no está disponible en su idioma. Puede elegir otro idioma disponible de la lista.",
    "lang_proceed": "Continuar",
    "go_home": "Volver al Inicio",
    "onboarding_welcome": "¡Ya casi está! <br>Por favor, lea y acepte los términos y condiciones.",
    "disagree": "En desacuerdo",
    "agree": "De acuerdo",
    "disagree_extra_text": "La aplicación \"PharmaLedger\" no funcionará hasta que acepte los términos y condiciones. Por favor, lea los términos y condiciones.",
    "fwd_privacy": "Política de privacidad",
    "fwd_terms": "Términos y condiciones",
    "fwd_help": "Ayuda",
    "fwd_about": "Acerca de",
    "privacy_modal_title": "Política de Privacidad",
    "privacy_modal_subtitle": "Nuestros principios de privacidad y seguridad",
    "privacy_content": "<h2>Aviso de Privacidad</h2> <p>Este aviso de privacidad es aplicable al uso de información electrónica de los productos de la Asociación PharmaLedger.</p><h2>Contactos</h2><p><b>a) Identidad y contactos del controlador o controladores conjuntos</b></p><p>El controlador de sus datos es la Asociación PharmaLedger.</p><p><b>b) Contactos del oficial de protección de datos</b></p><p>Se puede contactar con la Oficina de Protección de Datos de la Asociación PharmaLedger en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><h2>Qué datos personales utilizamos</h2><p>Recopilamos solo los datos técnicos necesarios para entregar su prospecto electrónico. Esto incluye su dirección IP e identificadores técnicos del dispositivo y navegador que utiliza para tener acceso a nuestra aplicación.</p> <p><em>En concreto, recopilamos los siguientes elementos de datos</em></p><ul><li><p><em>Acceso Dispositivos Móviles</em> Podemos solicitar acceso o permiso a ciertas funciones desde su dispositivo móvil, incluida la cámara de su dispositivo móvil, y otras funciones. Si desea cambiar nuestro acceso o permisos, puede hacerlo en la configuración de su dispositivo.</p></li><li><p><em> Información de Dispositivo Móvil.</em> Recopilamos automáticamente información del dispositivo (como la ID de su dispositivo móvil, modelo y fabricante), sistema operativo, información de versión e información de configuración del sistema, números de identificación del dispositivo y la aplicación, tipo y versión del navegador, modelo de hardware, proveedor de servicios de Internet y/u operador de telefonía móvil, y dirección de Protocolo de Internet (IP) (o servidor proxy). Si está utilizando nuestra(s) aplicación(es), también podemos recopilar información sobre la red telefónica asociada con su dispositivo móvil, el sistema operativo o la plataforma de su dispositivo móvil, el tipo de dispositivo móvil que utiliza, la ID única de su dispositivo móvil e información sobre las características de nuestra(s) aplicación(es) a las que tuvo acceso.</p></li></ul><h2>Por qué recopilamos sus datos personales</h2><p><b>Propósitos</b></p><p>Recopilamos sus datos técnicos con el fin de proporcionarle un folleto electrónico de su medicamento.</p><p>Como tal, podemos confiar en las siguientes bases legales para procesar su información personal:</p><ul><li><p><b>Ejecución de un Contrato.</b> Podemos procesar su información personal cuando creamos que es necesario para cumplir con las obligaciones contractuales con usted, incluida la prestación de nuestros Servicios o a petición de usted antes de realizar un contrato con usted.</p></li><li><p><b>Obligaciones Legales.</b> Podemos procesar su información cuando creamos que es necesario para el cumplimiento de nuestras obligaciones legales, como para cumplir con nuestras obligaciones en virtud de la regulación sanitaria y la legislación de salud pública.</p></li></ul><h2>Con quién compartimos sus datos personales</h2><p> Empresas miembros y proveedores de servicios externos.</p><p>Compartimos sus datos con proveedores externos, proveedores de servicios, contratistas o agentes (\"terceros\") que realizan servicios para nosotros o en nuestro nombre y requieren acceso a dicha información para realizar ese trabajo. Tenemos contratos vigentes con nuestros terceros, que están diseñados para ayudar a salvaguardar su información personal. Esto significa que no pueden hacer nada con su información personal a menos que les hayamos indicado que lo hagan. Tampoco compartirán su información personal con ninguna organización aparte de nosotros. También se comprometen a proteger los datos que tienen en nuestro nombre y a conservarlos durante el período que les indiquemos. Las categorías de terceros con los que podemos compartir información personal son las siguientes:</p><ul><li><p> Fabricantes de medicamentos (Empresas Miembro)</p></li><li><p> Proveedores de Servicios Técnicos</p></li></ul><h2>Cuánto tiempo almacenamos sus datos personales</h2><p>La Asociación PharmaLedger solo almacena sus datos técnicos durante el tiempo que sea necesario para procesar su solicitud de información del producto durante un máximo de 30 días. </p><p>Su fabricante de medicamentos también almacenará sus datos durante un período de tiempo definido según lo determinado por sus políticas de retención de datos. Para obtener más información sobre esta retención, comuníquese con el fabricante de su medicamento.</p><h2>Si no nos proporciona sus datos personales</h2><p>Si decide no proporcionarnos sus datos técnicos, no podremos cumplir con su solicitud de información del producto.</p><h2>Sus derechos</h2><p>Si tiene alguna solicitud relacionada con sus datos personales en virtud del GDPR, como una solicitud para tener acceso o eliminar sus datos, puede contactarnos en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Procesaremos dichas solicitudes en un plazo de 30 días.</p><h2>Retiro de consentimiento</h2><p>Si tiene alguna solicitud relacionada con sus datos personales en virtud del GDPR, como una solicitud para tener acceso o eliminar sus datos, puede contactarnos en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Procesaremos dichas solicitudes en un plazo de 30 días.</p><h2>Toma de decisiones automatizada</h2><p>No utilizamos ninguna toma de decisiones automatizada en nuestro suministro de este servicio a usted.</p><h2>Transferencia Internacional de Datos Personales</h2><p>Cuando el fabricante de su medicamento nos exige que transfiramos sus datos fuera de la Unión Europea, utilizamos cláusulas contractuales estándar para proteger sus datos.</p><h2>Cómo quejarse</h2><p>Si tiene alguna solicitud relacionada con sus datos personales en virtud del GDPR, como una solicitud para tener acceso o eliminar sus datos, puede contactarnos en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org </a>.</p><p>Procesaremos dichas solicitudes en un plazo de 30 días. Además, puede ponerse en contacto con su autoridad de supervisión local si considera que no se están cumpliendo sus derechos.</p>",
    "terms_modal_title": "Términos y condiciones",
    "terms_modal_subtitle": "Los términos y condiciones que aplican al usar la Aplicación PharmaLedger.",
    "terms_content": "<h2>Términos y Condiciones para el sitio web y la aplicación de información electrónica de productos de la Asociación PharmaLedger </h2><p>Al entrar o utilizar el sitio web y la aplicación de información electrónica de productos de la Asociación PharmaLedger (los \"Servicios\"), usted acepta estar sujeto a estos términos y condiciones (los \"Términos\"). No puede tener acceso ni utilizar los Servicios si no está de acuerdo con estos Términos. Los Servicios son realizados por la Asociación PharmaLedger (la \"Asociación\") y están destinados a ser utilizados por personas que buscan información sobre su medicamento. Una red multiparte ofrece los Servicios, y el fabricante de su medicamento suministra la información del producto que se muestra a través de los Servicios. La Asociación actúa como controlador de datos para esta información. </p><h2> Uso de los Servicios </h2><p>Usted acepta utilizar los Servicios solo para fines legales y de una manera que no infrinja los derechos de, o restrinja o inhiba el uso y disfrute de los Servicios por parte de terceros. Dicha restricción o inhibición incluye, sin limitarse a, conductas que son ilegales, o que pueden acosar o causar angustia o inconvenientes a cualquier persona, y la transmisión de contenido obsceno u ofensivo o la interrupción del flujo normal de diálogo dentro de los Servicios. </p><h2>Propiedad intelectual </h2><p>El contenido de los Servicios, incluidos, entre otros, texto, gráficos, imágenes y software, es propiedad de la Asociación o sus licenciantes y compañías miembros y está protegido por derechos de autor y otras leyes de propiedad intelectual. No puede utilizar ningún contenido de los Servicios para ningún propósito comercial sin el consentimiento expreso por escrito de la Asociación. </p><h2>Responsabilidad</h2><p>La Asociación no hace ninguna representación o garantía de ningún tipo, expresa o implícita, en cuanto al funcionamiento de los Servicios o la información, contenido, materiales o productos incluidos en los Servicios. La Asociación no será responsable de ningún daño de ningún tipo que surja del uso de los Servicios, incluidos, entre otros, daños directos, indirectos, fortuitos, punitivos y consecuentes. </p><h2>Legislación Aplicable </h2> <p>Estos Términos y el uso de los Servicios se regirán e interpretarán de acuerdo con las leyes de Suiza y cualquier disputa se resolverá en los tribunales de Basilea, Suiza. </p><h2>Cambios en los Términos </h2><p>La Asociación se reserva el derecho de cambiar estos Términos en cualquier momento, y usted es responsable de verificar estos Términos periódicamente para detectar cualquier cambio. Su uso continuado de los Servicios después de que se hayan realizado cambios en los Términos constituirá su aceptación de los Términos revisados.</p><p><br></p>",
    "about_modal_subtitle": "Acerca de",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Ayuda",
    "help_modal_subtitle": "Preguntas frecuentes",
    "help_content": "<div><p><b><h2>¿Qué es EPI?</h2></b></p>" +
      "<p><b>EPI</b> es la abreviatura de <b>información de producto electrónica</b>. Es una versión electrónica del prospecto de información del producto en papel que normalmente se encuentra dentro del envase de un medicamento. En algunos casos, la <b>EPI</b> puede haber reemplazado a el prospecto de papel.</p>" +
      "<p><b><h2>¿Qué es PharmaLedger?</h2></b></p><p>La Asociación PharmaLedger (PLA) es una asociación sin fines de lucro con sede en Suiza con el propósito de habilitar y fomentar un ecosistema de confianza digital en la atención médica a través de una plataforma de código abierto estandarizada y confiable. PLA promueve la colaboración y acelera la innovación y la adopción para lograr beneficios mutuos en los dominios de la salud y las ciencias de la vida para los pacientes y otras partes interesadas. PLA se formó en 2022 para continuar el trabajo del proyecto PharmaLedger, un proyecto de 3 años financiado por la Comisión Europea y la industria farmacéutica destinado a demostrar el valor de las soluciones de blockchain. Más información disponible en <a href=\"https://pharmaledger.org/\">https://pharmaledger.org/</a>.</p>" +
      "<p><b><h2>¿Qué es el DataMatrix?</h2></b></p>" +
      "<p>Es un tipo de código de barras en el envase de su medicamento. Es un código de barras de caja cuadrada en blanco y negro, que se verá similar a esto:<br> <img src=\"./images/barcode_example.png\"></p>" +
      "<p><b><h2>¿Cómo usar la aplicación?</h2></b></p>" +
      "<p>Siga las instrucciones en la página de inicio de la <b>Aplicación...</b> muestra una imagen de dónde encontrar el <b>DataMatrix</b> en el envase de su medicamento. Una vez que haya encontrado el <b>DataMatrix</b>, haga clic en el botón 'Escanear <b>DataMatrix</b>'. Permita que la aplicación use la cámara para que se pueda escanear el <b>DataMatrix</b>. Utilice la cámara para enfocar el <b>DataMatrix</b>. Una vez que el envase se escanea con éxito, se mostrará la <b>EPI</b>. Puede hacer clic en el botón ‘+’ para obtener más detalles.</p>" +
      "<p><b><h2>¿Por qué mi escaneo del DataMatrix no da un resultado?</h2></b></p>" +
      "<p> Hay varias razones por las que el <b>DataMatrix</b> en su envase puede no dar una EPI. Una de las razones podría ser el enfoque de la cámara. Por favor, intente escanear el código en un lugar bien iluminado y que el código se encuentre claramente visible en la pantalla. Si usted está teniendo problemas para mantener su mano firme, podría tratar de usar una mesa para apoyar sus manos. </p></div>"
  },
  "es-419": {
    "app_version": "Versión de la aplicación: ",
    "welcome": "Bienvenido a PharmaLedger",
    "scan_explain": "Encuentra el código de barras DataMatrix en tu medicamento para escanear y ver la información",
    "scan_button": "Escanea el código DataMatrix",
    "cancel": "Cancelar",
    "change_camera": "Cambiar cámara",
    "scan_again": "Escanear de nuevo",
    "product_not_found_title": "No reconocido",
    "product_not_loaded_title": "Información del producto no disponible",
    "error_subtitle": "Producto no verificado",
    "product_not_found": "Este producto no se puede encontrar",
    "product_not_loaded": "Lamentablemente, no se ha cargado información del producto",
    "system_busy": "El sistema está ocupado, por favor inténtelo de nuevo más tarde.",
    "err_code": "Código de error",
    "leaflet_expired_title": "Vencido",
    "leaflet_expired_message": "<p> <b>Este producto ha sido identificado como vencido.</b> </p> ",
    "leaflet_incorrect_date_title": "Fecha incorrecta",
    "leaflet_incorrect_date_subtitle": "La fecha escaneada es incorrecta",
    "leaflet_incorrect_date_message": "<b> La fecha del producto es incorrecta</b>.",
    "select_lang_title": "Lenguaje no disponible",
    "scan_error_title": "Error de escaneo",
    "camera_error_message": "Algo salió mal y la cámara seleccionada no puede ser accedida correctamente. Por favor, verifica la configuración de la cámara de tu dispositivo o intenta cambiar la cámara desde el menú.",
    "leaflet_lang_select_message": "El folleto no está disponible en tu idioma preferido. Puedes elegir de la lista de idiomas disponibles.",
    "lang_proceed": "Continuar",
    "go_home": "Regresar a casa",
    "onboarding_welcome": "Casi llegamos. Por favor, lee y acepta los términos y condiciones",
    "disagree": "Discrepo",
    "agree": "Aceptar",
    "disagree_extra_text": "\"PharmaLedger\" La aplicación no funcionará hasta que aceptes los términos y condiciones. Por favor, lee los términos y condiciones.",
    "fwd_privacy": "Política de privacidad",
    "fwd_terms": "Términos y condiciones",
    "fwd_help": "Ayuda",
    "fwd_about": "Sobre",
    "privacy_modal_title": "Política de privacidad",
    "privacy_modal_subtitle": "Nuestros Principios de Privacidad y Seguridad",
    "privacy_content": "<h1><b>Privacy Notice</b></h1> <p>Este aviso de privacidad es aplicable al uso del producto de Información de Producto Electrónico de la Asociación PharmaLedger. </p> <h2>Contactos</h2><p><b>a) Identidad y contactos del responsable o responsables conjuntos</b></p><p>El responsable de sus datos es la Asociación PharmaLedger</p> <p><b>b) Contactos del oficial de protección de datos</b></p><p>La Oficina de Protección de Datos de la Asociación PharmaLedger está disponible en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a> </p><h2>Qué datos personales utilizamos</h2><p>Recopilamos únicamente los datos técnicos necesarios para entregar su folleto electrónico. Esto incluye su dirección IP e identificadores técnicos del dispositivo y navegador que utiliza para acceder a nuestra aplicación</p> <p><em>En detalle, recopilamos los siguientes elementos de datos</em></p><ul><li><p><em>Acceso desde dispositivo móvil.</em> Podemos solicitar acceso o permiso a ciertas funciones de tu dispositivo móvil, incluyendo la cámara de tu dispositivo móvil y otras características. Si deseas cambiar nuestro acceso o permisos, puedes hacerlo en la configuración de tu dispositivo.</p></li><li><p><em>Información del dispositivo móvil.</em> Recopilamos automáticamente información del dispositivo (como el ID de tu dispositivo móvil, modelo y fabricante), información sobre el sistema operativo, información de versión y configuración del sistema, números de identificación del dispositivo y la aplicación, tipo y versión del navegador, modelo de hardware, proveedor de servicios de Internet y/o operador móvil, y dirección de Protocolo de Internet (IP) (o servidor proxy). Si estás utilizando nuestra(s) aplicación(es), también podemos recopilar información sobre la red telefónica asociada con tu dispositivo móvil, el sistema operativo o plataforma de tu dispositivo móvil, el tipo de dispositivo móvil que utilizas, el ID único de tu dispositivo móvil y la información sobre las características de nuestra(s) aplicación(es) a las que accediste.</p></li></ul><h2>Por qué recopilamos tus datos personales</h2><p><b>Propósitos </b></p><p>Recopilamos tus datos técnicos con el propósito de proporcionarte un folleto electrónico de producto para tu medicamento. </p><p>Por lo tanto, podemos basarnos en las siguientes bases legales para procesar tu información personal:</p><ul><li><p><b>Cumplimiento de un contrato.</b> Podemos procesar tu información personal cuando creemos que es necesario para cumplir con las obligaciones contractuales hacia ti, incluyendo la prestación de nuestros servicios o a tu solicitud antes de celebrar un contrato contigo.</p></li><li><p><b>Obligaciones legales.</b> Podemos procesar tu información cuando consideramos que es necesario para cumplir con nuestras obligaciones legales, como cumplir con nuestras obligaciones bajo regulaciones de atención médica y legislación de salud pública.</p></li></ul><h2>Con quiénes compartimos tus datos personales</h2><p>Empresas miembro y proveedores de servicios de terceros.</p><p>Compartimos tus datos con proveedores de terceros, prestadores de servicios, contratistas o agentes ('terceros') que realizan servicios para nosotros o en nuestro nombre y requieren acceso a dicha información para llevar a cabo su trabajo. Tenemos contratos establecidos con nuestros terceros, diseñados para ayudar a proteger tu información personal. Esto significa que no pueden hacer nada con tu información personal a menos que les hayamos indicado que lo hagan. Tampoco compartirán tu información personal con ninguna organización aparte de nosotros. También se comprometen a proteger los datos que tienen en nuestro nombre y a conservarlos durante el período que les instruimos. Las categorías de terceros con los que podemos compartir información personal son las siguientes:</p><ul><li><p>Fabricantes de medicamentos (Empresas miembro)</p></li><li><p>Proveedores de servicios técnicos</p></li></ul><h2>Cuánto tiempo almacenamos tus datos personales</h2><p>La Asociación PharmaLedger solo almacena tus datos técnicos durante el tiempo necesario para procesar tu solicitud de folleto, hasta un máximo de 30 días. </p><p>El fabricante de tu medicamento también almacenará tus datos durante un período definido según sus políticas de retención de datos. Para obtener más información sobre esta retención, por favor, ponte en contacto con el fabricante de tu medicamento.</p><h2>Si no nos proporcionas tus datos personales</h2><p>Si eliges no proporcionarnos tus datos técnicos, no podremos cumplir con tu solicitud de folleto.</p><h2>Tus derechos</h2><p>Si tienes alguna solicitud relacionada con tus datos personales bajo el RGPD, como una solicitud de acceso o eliminación de tus datos, puedes ponerte en contacto con nosotros en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Procesaremos dichas solicitudes en un plazo de 30 días.</p><h2>Revocación del consentimiento</h2><p>Si tienes alguna solicitud relacionada con tus datos personales bajo el RGPD, como una solicitud de acceso o eliminación de tus datos, puedes ponerte en contacto con nosotros en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Procesaremos dichas solicitudes en un plazo de 30 días.</p><h2>Proceso de toma de decisiones automatizado</h2><p>No utilizamos ningún proceso de toma de decisiones automatizado en la prestación de este servicio a ti.</p><h2>Transferencia Internacional de Datos Personales</h2><p>Cuando el fabricante de tu medicamento requiere que transfiramos tus datos fuera de la Unión Europea, utilizamos Cláusulas Contractuales Estándar para proteger tus datos.</p><h2>Cómo Presentar una Queja</h2><p>Si tienes alguna solicitud relacionada con tus datos personales bajo el RGPD, como una solicitud de acceso o eliminación de tus datos, puedes ponerte en contacto con nosotros en <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p>Procesaremos dichas solicitudes en un plazo de 30 días. Además, puedes ponerte en contacto con tu autoridad supervisora local si sientes que tus derechos no están siendo respetados.</p>",
    "terms_modal_title": "Términos y Condiciones",
    "terms_modal_subtitle": "Los términos y condiciones que se aplican al usar la Aplicación PharmaLedger",
    "terms_content": "<p><b>Términos y Condiciones para el Sitio Web y la Aplicación de Información Electrónica de Productos de la Asociación PharmaLedger </b></p><p>Al acceder o utilizar el sitio web y la aplicación de Información Electrónica de Productos de la Asociación PharmaLedger (los 'Servicios'), aceptas quedar sujeto a estos términos y condiciones (los 'Términos'). No podrás acceder ni utilizar los Servicios si no estás de acuerdo con estos Términos. Los Servicios son operados por la Asociación PharmaLedger (la 'Asociación') y están destinados a ser utilizados por individuos que buscan información sobre sus medicamentos. Los Servicios son entregados a través de una red multiparte, y el fabricante de tu medicamento proporciona la información del producto que se muestra a través de los Servicios. La Asociación actúa como el controlador de datos para esta información. </p><p><b>Uso de los Servicios </b></p><p>Aceptas utilizar los Servicios solo con fines legales y de una manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso y disfrute de los Servicios por parte de cualquier tercero. Esta restricción o inhibición incluye, sin limitación, conductas que sean ilegales o que puedan acosar, causar molestias o inconvenientes a cualquier persona, así como la transmisión de contenido obsceno u ofensivo o la interrupción del flujo normal de diálogo dentro de los Servicios. </p><p><b>Propiedad Intelectual </b></p><p>El contenido de los Servicios, incluyendo, pero no limitándose a, texto, gráficos, imágenes y software, es propiedad de la Asociación o de sus licenciantes y empresas miembro y está protegido por leyes de derechos de autor y otras leyes de propiedad intelectual. No puedes utilizar ningún contenido de los Servicios con fines comerciales sin el consentimiento expreso por escrito de la Asociación. </p><p><b>Responsabilidad</b> </p><p>La Asociación no realiza representaciones ni garantías de ningún tipo, ya sean expresas o implícitas, sobre el funcionamiento de los Servicios o la información, contenido, materiales o productos incluidos en los Servicios. La Asociación no será responsable de ningún tipo de daños que surjan del uso de los Servicios, incluyendo, pero sin limitarse a, daños directos, indirectos, incidentales, punitivos y consecuentes. </p><p><b>Ley Aplicable </b></p><p>Estos Términos y tu uso de los Servicios estarán regidos y se interpretarán de acuerdo con las leyes de Suiza, y cualquier disputa se resolverá en los tribunales de Basilea, Suiza. </p><p><b>Cambios en los Términos </b></p><p>La Asociación se reserva el derecho de cambiar estos Términos en cualquier momento, y eres responsable de revisar estos Términos periódicamente en busca de cambios. Tu continuo uso de los Servicios después de que se hayan realizado cambios en los Términos constituirá tu aceptación de los Términos revisados.</p><p><br></p>",
    "about_modal_subtitle": "Sobre",
    "about_modal_title": "Pharmaledger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Ayuda",
    "help_modal_subtitle": "FAQs",
    "help_content": "<div><p><b><h2>¿Qué es EPI?</h2></b></p><p><b>EPI</b> es una abreviatura de <b>Información electrónica del producto.</b> Este una versión electrónica del folleto de Información del Producto en papel que normalmente se encuentra dentro del paquete de un producto farmacéutico. En algunos casos, el <b>EPI</b> puede haber reemplazado el folleto en papel. </p> <p> <b>¿Qué es PharmaLedger?</b></p><p>La Asociación PharmaLedger (PLA) es una asociación sin fines de lucro con sede en Suiza con el propósito de habilitar y fomentar un Ecosistema de Confianza Digital en el campo de la atención médica a través de una plataforma de código abierto estandarizada y confiable. PLA promueve la colaboración y acelera la innovación y la adopción para lograr beneficios mutuos en los ámbitos de la atención médica y las ciencias de la vida, tanto para los pacientes como para otras partes interesadas. PLA se formó en 2022 para dar continuidad al trabajo del proyecto PharmaLedger, un proyecto de 3 años financiado por la Comisión Europea y la industria farmacéutica con el objetivo de demostrar el valor de las soluciones basadas en blockchain. Para obtener más información, visite el siguiente enlace: <a href='https://pharmaledger.org/'>https://pharmaledger.org/</a>.</p> <p><b><h2>¿Qué es el DataMatrix?</h2></b></p> <p>Es un tipo de código de barras que se encuentra en el paquete de su producto. Es un código de barras cuadrado en blanco y negro y se verá similar a esto:<br> <img src=\"./images/barcode_example.png\" alt='Ejemplo de código de barras DataMatrix'></p> <p> <b>¿Cómo usar la aplicación?</b></p><p>Siga las instrucciones en la página de inicio de la <b>aplicación...</b>  muestra una imagen que indica dónde encontrar el <b>DataMatrix</b> en el paquete de su producto. Una vez que haya localizado el <b>DataMatrix</b>, haga clic en el botón Escanear <b>DataMatrix</b>. Permita que la aplicación utilice la cámara para escanear el <b>DataMatrix</b>. Utilice la cámara para enfocar el <b>DataMatrix</b>. Una vez que el paquete se haya escaneado con éxito, se mostrará el <b>EPI</b>. Puede hacer clic en el botón '' para obtener más detalles. </p><p><b><h2>¿Por qué mi escaneo del DataMatrix no arroja resultados?</h2></b></p><p> Existen varias razones por las cuales el <b>DataMatrix</b> en el paquete puede no proporcionar un EPI. Una de las razones podría ser el enfoque de la cámara. Por favor, intente escanear el código en un lugar bien iluminado y asegúrese de que el código sea claramente visible en la pantalla. Si le resulta difícil mantener la mano estable, podría intentar utilizar una mesa para apoyar sus manos. </p></div>"
  },
  "pt": {
    "app_version": "Versão da aplicação:",
    "welcome": "Bem-vindo à PharmaLedger",
    "scan_explain": "Encontre o código de barras DataMatrix no seu medicamento para ler e visualizar informações.",
    "scan_button": "Ler DataMatrix",
    "cancel": "Cancelar",
    "change_camera": "Alterar a câmara",
    "scan_again": "Ler Novamente",
    "product_not_found_title": "Não Reconhecido",
    "product_not_loaded_title": "Informações do produto indisponíveis.",
    "error_subtitle": "Produto não verificado",
    "product_not_found": "Este produto não foi encontrado.",
    "product_not_loaded": "Infelizmente, nenhuma informação do produto foi carregada.",
    "system_busy": "O sistema está ocupado, por favor, tente novamente mais tarde.",
    "err_code": "Código de erro",
    "leaflet_expired_title": "Expirado",
    "leaflet_expired_message": "<p> <b>Este produto foi identificado como expirado.</b> </p> ",
    "leaflet_incorrect_date_title": "Data incorreta",
    "leaflet_incorrect_date_subtitle": "A data digitalizada está incorreta",
    "leaflet_incorrect_date_message": "<b> A data deste produto está incorreta</b>.",
    "select_lang_title": "Idioma indisponível",
    "scan_error_title": "Ler erro",
    "camera_error_message": "Algo correu mal e a câmara selecionada não pode ser acedida corretamente. Verifique as configurações da câmara do seu dispositivo ou tente alterar a câmara no menu.",
    "leaflet_lang_select_message": "O folheto não está disponível no seu idioma preferido. Poderá selecionar um na lista de idiomas disponíveis.",
    "lang_proceed": "Avançar",
    "go_home": "Voltar ao início",
    "onboarding_welcome": "Está quase! <br> Por favor, leia e concorde com os termos e condições.",
    "disagree": "Discordar",
    "agree": "Concordar",
    "disagree_extra_text": "A aplicação \"PharmaLedger\" não irá funcionar até que concorde com os termos e condições. Por favor, leia os termos e condições.",
    "fwd_privacy": "Política de privacidade",
    "fwd_terms": "Termos e condições",
    "fwd_help": "Ajuda",
    "fwd_about": "Sobre",
    "privacy_modal_title": "Política de Privacidade",
    "privacy_modal_subtitle": "Os Nossos Princípios de Privacidade e Segurança",
    "privacy_content": "<h2><b>Aviso de Privacidade</b></h2> <p> Este aviso de privacidade é aplicável à utilização do produto Informações Eletrônicas de Produtos da PharmaLedger Association. </p> <h2>Contactos</h2><p><b>a) Identidade e contactos do responsável pelo tratamento ou dos responsáveis conjuntos pelo tratamento</b></p><p> O responsável pelo tratamento dos seus dados é a PharmaLedger Association.</p> <p><b>b) Contactos do funcionário responsável pela proteção de dados</b></p><p> Você pode contactar o Gabinete de Proteção de Dados da Associação PharmaLedger em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>. </p><h2>Quais dados pessoais nós utilizamos</h2><p> Colectamos apenas os dados técnicos necessários para entregar a sua brochura eletrónica. Estes dados incluem o seu endereço IP e os identificadores técnicos do dispositivo e do browser que utiliza para aceder à nossa aplicação. </p> <p><em> Em resumo, colectamos os seguintes elementos de dados: </em></p><ul><li><p><em> Acesso a Dispositivos Móveis. </em> Poderemos solicitar acesso ou permissão para determinadas funcionalidades do seu dispositivo móvel, incluindo a câmara do dispositivo móvel e outras funcionalidades. Caso queira alterar o nosso acesso ou as nossas permissões, pode fazê-lo nas definições do seu dispositivo. </p></li><li><p><em> Dados de Dispositivos Móveis. </em> Colectamos automaticamente informações sobre o dispositivo (como o ID, modelo e fabricante do seu dispositivo móvel), sistema operativo, informações sobre a versão e informações sobre a configuração do sistema, números de identificação da aplicação e do dispositivo, tipo e versão do browser, modelo de hardware, fornecedor de serviços de Internet e/ou operador móvel e endereço IP (ou servidor proxy). Se estiver a utilizar a(s) nossa(s) aplicação(ões), também podemos recolher informações sobre a rede telefónica associada ao seu dispositivo móvel, o sistema operativo ou a plataforma do seu dispositivo móvel, o tipo de dispositivo móvel que está a utilizar, a ID exclusiva do dispositivo do seu dispositivo móvel e informações sobre as funcionalidades da(s) nossa(s) aplicação(ões) a que acedeu. </p></li></ul><h2> Porque colectamos os seus Dados Pessoais </h2><p><b> Objectivos </b></p><p>Colectamos os seus dados técnicos para lhe fornecer um folheto informativo eletrónico do seu medicamento. </p><p> Assim, podemos basear-nos nas seguintes bases legais para processar as suas informações pessoais:</p><ul><li><p><b> Execução de um contrato.</b> Podemos processar as suas informações pessoais quando considerarmos que é necessário para cumprir as nossas obrigações contratuais com você, incluindo a prestação dos nossos Serviços ou quando você as solicitar antes de celebrar um contrato conosco. </p></li><li><p><b>Obrigações Legais.</b> Podemos processar as suas informações quando considerarmos necessário para cumprir as nossas obrigações legais, por exemplo, para cumprir as nossas obrigações ao abrigo dos regulamentos de saúde e da legislação de saúde pública.</p></li></ul><h2> Com quem Partilhamos os seus Dados Pessoais </h2><p> Empresas associadas e prestadores de serviços terceiros.</p><p> Partilhamos as suas informações com terceiros fornecedores, prestadores de serviços, empreiteiros ou agentes (\"terceiros\") que prestam serviços para nós ou em nosso nome e que necessitam de acesso a essas informações para realizar esse trabalho. Temos contratos em vigor com os nossos terceiros, que foram concebidos para ajudar a proteger as suas informações pessoais. Isto significa que não podem fazer nada com as suas informações pessoais, a não ser que lhes demos instruções para o fazer. Também não partilharão as suas informações pessoais com qualquer outra organização que não nós. Concordam igualmente em proteger os dados que detêm em nosso nome e em conservá-los durante o período que lhes for indicado. As categorias de terceiros com quem podemos partilhar informações pessoais são as seguintes: </p><ul><li><p> Fabricantes de medicamentos (empresas associadas) </p></li><li><p> Fornecedores de Serviços Técnicos</p></li></ul><h2> Durante quanto tempo armazenamos os seus Dados Pessoais </h2><p> A Associação PharmaLedger apenas armazena os seus dados técnicos durante o tempo necessário para processar o seu pedido de brochura até 30 dias. </p><p>O fabricante do seu medicamento também armazenará os seus dados durante um período de tempo definido, conforme determinado pelas suas políticas de retenção de dados. Para mais informações sobre esta retenção, contacte o fabricante do seu medicamento.</p><h2> Se você não nos fornecer seus Dados Pessoais </h2><p> Se optar por não nos fornecer os seus dados técnicos, não poderemos satisfazer o seu pedido de brochura.</p><h2>Os seus direitos</h2><p>Se tiver quaisquer pedidos relacionados com os seus dados pessoais ao abrigo do RGPD, tais como um pedido de acesso ou eliminação dos seus dados, pode contactar-nos em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p> Processaremos essas solicitações dentro de 30 dias.</p><h2>Retirada do consentimento </h2><p>Se você tiver alguma solicitação relacionada aos seus dados pessoais sob o GDPR, como uma solicitação para acessar ou excluir seus dados, você pode entrar em contacto conosco em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p> Processaremos esses pedidos no prazo de 30 dias. </p><h2> Tomada de Decisão Automatizada </h2><p>Não utilizamos qualquer tomada de decisão automatizada na prestação deste serviço a você. </p><h2> Transferência Internacional de Dados Pessoais</h2><p> Quando o fabricante do seu medicamento exige que transfiramos os seus dados para fora da União Europeia, utilizamos Cláusulas Contratuais Padrão para proteger os seus dados.</p><h2> Como apresentar uma reclamação</h2><p> Se tiver um pedido relacionado com os seus dados pessoais ao abrigo do RGPD, como um pedido de acesso ou eliminação dos seus dados, pode contactar-nos em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p> Processaremos esses pedidos no prazo de 30 dias. Além disso, o utilizador pode contactar a autoridade de supervisão local se considerar que os seus direitos não estão a ser respeitados.</p>",
    "terms_modal_title": "Termos e condições",
    "terms_modal_subtitle": "Os termos e condições que se aplicam ao utilizar a aplicação PharmaLedger.",
    "terms_content": "<h2> Termos e Condições do Site e Aplicativo de Informações Eletrônicas de Produtos da PharmaLedger Association </h2><p>Ao acessar ou usar o site e aplicativo de Informações Eletrônicas de Produtos da PharmaLedger Association (os \"Serviços\"), você concorda em ficar vinculado a estes termos e condições (os termos\"). Você não pode aceder ou utilizar os Serviços se não concordar com estes Termos. Os Serviços são operados pela PharmaLedger Association (a \"Associação\") e destinam-se a indivíduos que procuram informações sobre os seus medicamentos. Os Serviços são fornecidos por uma rede multipartidária e o fabricante do seu medicamento fornece as informações do produto apresentadas através dos Serviços. A Associação actua como o responsável pelo tratamento de dados desta informação. </p><h2>Utilização dos Serviços </h2><p> Você concorda em utilizar os Serviços apenas para fins legais e de uma forma que não infrinja os direitos de terceiros, nem restrinja ou iniba a utilização e o usufruto dos Serviços por parte de terceiros. Tal restrição ou inibição inclui, sem limitação, conduta que seja ilegal ou que possa assediar ou causar angústia ou incómodo a qualquer pessoa, e a transmissão de conteúdo obsceno ou ofensivo ou a perturbação do fluxo normal de diálogo nos Serviços. </p><h2> Propriedade Intelectual </h2><p>O conteúdo dos Serviços, incluindo, mas não limitado a texto, gráficos, imagens e software, é propriedade da Associação ou dos seus licenciantes e empresas associadas e está protegido por direitos de autor e outras leis de propriedade intelectual. O utilizador não pode utilizar qualquer conteúdo dos Serviços para qualquer fim comercial sem o consentimento expresso por escrito da Associação. </p><h2>Responsabilidade </h2><p>A Associação não faz representações ou garantias de qualquer tipo, expressas ou implícitas, em relação ao funcionamento dos Serviços ou às informações, conteúdos, materiais ou produtos incluídos nos Serviços. A Associação não será responsável por quaisquer danos de qualquer tipo resultantes da utilização dos Serviços, incluindo, sem limitação, danos directos, indirectos, incidentais, punitivos e consequenciais. </p><h2> Lei Reguladora </h2><p> Estes Termos e a sua utilização dos Serviços serão regidos e interpretados de acordo com as leis da Suíça e qualquer litígio será resolvido nos tribunais de Basileia, Suíça. </p><h2> Alterações nos Termos </h2><p>A Associação reserva-se o direito de alterar estes Termos em qualquer momento, e o utilizador é responsável por rever periodicamente estes Termos para verificar se houve alterações. A utilização continuada dos Serviços pelo utilizador após a introdução de alterações aos Termos constituirá a sua aceitação dos Termos revistos.</p><p><br></p>",
    "about_modal_subtitle": "Sobre",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Ajuda",
    "help_modal_subtitle": "FAQs",
    "help_content": "<div><p><b><h2>O que é a EPI?</h2></b></p>" +
      "<p><b>EPI</b> é uma abreviatura de <b>Informação Eletrónica de Produtos</b>. É uma versão eletrónica do folheto de Informação do Produto em papel que normalmente encontra dentro de uma embalagem de um produto farmacêutico. Em alguns casos, o <b>EPI</b> pode ter substituído o folheto de papel. </p>" +
      "<p><b><h2>O que é a PharmaLedger?</h2></b></p>" +
      "<p>A PharmaLedger Association (PLA) é uma associação sem fins lucrativos com sede na Suíça com o objetivo de permitir e promover um Ecossistema de Confiança Digital na área da saúde através de uma plataforma de código aberto padronizada e confiável. A PLA promove a colaboração e acelera a inovação e a adoção para obter benefícios mútuos nos domínios da saúde e das ciências biológicas para pacientes e outras partes interessadas. A PLA foi formada em 2022 para continuar o trabalho do projeto PharmaLedger, um projeto de 3 anos financiado pela Comissão Europeia e pela indústria farmacêutica com o objetivo de provar o valor das soluções blockchain. Mais informações encontram-se disponíveis em <a href='https://pharmaledger.org/'>https://pharmaledger.org</a>. </p>" +
      "<p><b><h2>O que é a DataMatrix?</h2></b> </p>" +
      "<p>É um tipo de código de barras na embalagem do seu produto. É um código de barras quadrado preto e branco e será semelhante a este:<br> <img src=\"./images/barcode_example.png\" alt='Exemplo de código de barras DataMatrix'></p> " +
      "<p><b><h2>Como usar a Aplicação?</h2></b></p>" +
      "<p>Siga as instruções na página de destino da App… mostra uma imagem onde pode encontrar a <b>DataMatrix</b> no seu pacote de produtos. Depois de encontrar a <b>DataMatrix</b>, clique no botão Ler DataMatrix'. Permita que a aplicação use a câmara para que a <b>DataMatrix</b> possa ser lida. Use a câmara para focar a <b>DataMatrix</b>. Assim que o pacote for lido com sucesso, a <b>EPI</b> será exibido. Poderá clicar no botão '+' para obter mais detalhes.</p>" +
      "<p><b><h2>Porque é que a minha leitura da DataMatrix não apresenta resultados?</h2></b></p><p>Existem vários motivos pelos quais a DataMatrix do seu pacote poderá não fornecer uma <b>EPI</b>. Uma das razões pode ser o foco da câmara. Por favor, tente ler o código num local bem iluminado e com o código bem visível no ecrã. Se tiver dificuldades em manter a mão fixa, pode tentar usar uma mesa como apoio. </p></div>"
  },
  "pt-br": {
    "app_version": "Versão do aplicativo:",
    "welcome": "Bem-vindo à PharmaLedger",
    "scan_explain": "Encontre o Código de Barras DataMatrix no seu medicamento para digitalizar e visualizar informações.",
    "scan_button": "Escanear DataMatrix",
    "cancel": "Cancelar",
    "change_camera": "Mudar de câmera",
    "scan_again": "Escaneie novamente",
    "product_not_found_title": "Produto não encontrado",
    "product_not_loaded_title": "Informações sobre o produto não disponíveis.",
    "error_subtitle": "Produto não verificado",
    "product_not_found": "Este produto não pode ser encontrado.",
    "product_not_loaded": "Infelizmente, nenhuma informação sobre o produto foi carregada.",
    "system_busy": "O sistema está ocupado, tente novamente mais tarde.",
    "err_code": "Código de erro",
    "leaflet_expired_title": "Expirado / vencido",
    "leaflet_expired_message": "<p> <b>Este produto foi identificado como expirado / vencido.</b> </p> ",
    "leaflet_incorrect_date_title": "Data incorreta",
    "leaflet_incorrect_date_subtitle": "A data digitalizada está incorreta",
    "leaflet_incorrect_date_message": "<b>insert msg here</b>.",
    "select_lang_title": "Idioma indisponível",
    "scan_error_title": "Erro de varredura",
    "camera_error_message": "Algo deu errado e a câmera selecionada não pode ser acessada corretamente. Verifique as configurações da câmera do dispositivo ou tente alterar a câmera no menu.",
    "leaflet_lang_select_message": "O folheto não está disponível na sua língua preferida. Você pode escolher na lista de idiomas disponíveis.",
    "lang_proceed": "Proceder",
    "go_home": "Voltar para o início",
    "onboarding_welcome": "Quase lá!<br> Por favor, leia e concorde com os termos e condições de uso.",
    "disagree": "Discordar",
    "agree": "Concordar",
    "disagree_extra_text": "O aplicativo \"PharmaLedger\" não funcionará até que você concorde com os termos e condições. Por favor, leia os termos e condições de uso.",
    "fwd_privacy": "Política de privacidade",
    "fwd_terms": "Termos e Condições",
    "fwd_help": "Ajuda",
    "fwd_about": "Sobre",
    "privacy_modal_title": "Política de Privacidade",
    "privacy_modal_subtitle": "Nossos Princípios de Privacidade e Segurança",
    "privacy_content": "<h2>Aviso de Privacidade</h2> <p> Este aviso de privacidade é aplicável à utilização do produto ePI da PharmaLedger Association.</p> <h2>Contactos</h2><p><b>a) Identidade e contatos do responsável pelo tratamento ou dos responsáveis conjuntos pelo tratamento</b></p><p> O responsável pelo tratamento dos seus dados é a PharmaLedger Association.</p> <p><b>b) Contatos do funcionário responsável pela proteção de dados</b></p><p> Você pode contactar o Gabinete de Proteção de Dados da Associação PharmaLedger em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><h2>Quais dados pessoais nós utilizamos</h2><p> Colectamos apenas os dados técnicos necessários para entregar a sua brochura eletrónica. Estes dados incluem o seu endereço IP e os identificadores técnicos do dispositivo e do navegador que utiliza para acessar o nosso aplicativo.</p> <p><em> Em resumo, colectamos os seguintes elementos de dados </em></p><ul><li><p><em> Acesso a Dispositivos Móveis. </em> Poderemos solicitar acesso ou permissão para determinadas funcionalidades do seu dispositivo móvel, incluindo a a câmara do dispositivo móvel e outras funcionalidades. Caso queira alterar o nosso acesso ou as nossas permissões, pode fazê-lo nas definições do seu dispositivo.</p></li><li><p><em> Dados de Dispositivos Móveis. </em> Colectamos automaticamente informações sobre o dispositivo (como o ID, modelo e fabricante do seu dispositivo móvel), sistema operacional, informações sobre a versão e informações sobre a configuração do sistema, números de identificação da aplicação e do dispositivo, tipo e versão do navegador modelo de aparelho, fornecedor de serviços de Internet e/ou operador móvel e endereço IP (ou servidor proxy). Se estiver a utilizar a(s) nossa(s) aplicação(ões), também podemos recolher informações sobre a rede telefónica associada ao seu dispositivo móvel, o sistema operativo ou a plataforma do seu dispositivo móvel, o tipo de dispositivo móvel que está a utilizar, a ID exclusiva do dispositivo do seu dispositivo móvel e informações sobre as funcionalidades da(s) nossa(s) aplicação(ões) a que acedeu. </p></li></ul><h2> Porque colectamos os seus Dados Pessoais </h2><p><b> Objectivos </b></p><p>Colectamos os seus dados técnicos para lhe fornecer um folheto informativo eletrónico do seu medicamento. </p><p> Assim, podemos basear-nos nas seguintes bases legais para processar as suas informações pessoais:</p><ul><li><p><b> Execução de um contrato.</b> Podemos processar as suas informações pessoais quando considerarmos que é necessário para cumprir as nossas obrigações contratuais com você, incluindo a prestação dos nossos Serviços ou quando você as solicitar antes de celebrar um contrato conosco. </p></li><li><p><b>Obrigações Legais.</b> Podemos processar as suas informações quando considerarmos necessário para cumprir as nossas obrigações legais, por exemplo, para cumprir as nossas obrigações ao abrigo dos regulamentos de saúde e da legislação de saúde pública.</p></li></ul><h2> Com quem Partilhamos os seus Dados Pessoais </h2><p> Empresas associadas e prestadores de serviços terceiros.</p><p> Partilhamos as suas informações com terceiros fornecedores, prestadores de serviços, empreiteiros ou agentes (\"terceiros\") que prestam serviços para nós ou em nosso nome e que necessitam de acesso a essas informações para realizar esse trabalho. Temos contratos em vigor com os nossos terceiros, que foram concebidos para ajudar a proteger as suas informações pessoais. Isto significa que não podem fazer nada com as suas informações pessoais, a não ser que lhes demos instruções para o fazer. Também não partilharão as suas informações pessoais com qualquer outra organização que não nós. Concordam igualmente em proteger os dados que detêm em nosso nome e em conservá-los durante o período que lhes for indicado. As categorias de terceiros com quem podemos partilhar informações pessoais são as seguintes: </p><ul><li><p> Fabricantes de medicamentos (empresas associadas) </p></li><li><p> Fornecedores de Serviços Técnicos</p></li></ul><h2> Durante quanto tempo armazenamos os seus Dados Pessoais </h2><p> A Associação PharmaLedger apenas armazena os seus dados técnicos durante o tempo necessário para processar o seu pedido de brochura até 30 dias. </p><p>O fabricante do seu medicamento também armazenará os seus dados durante um período de tempo definido, conforme determinado pelas suas políticas de retenção de dados. Para mais informações sobre esta retenção, contacte o fabricante do seu medicamento.</p><h2> Se você não nos fornecer seus Dados Pessoais </h2><p> Se optar por não nos fornecer os seus dados técnicos, não poderemos satisfazer o seu pedido de brochura.</p><h2>Os seus direitos</h2><p>Se tiver quaisquer pedidos relacionados com os seus dados pessoais ao abrigo do RGPD, tais como um pedido de acesso ou eliminação dos seus dados, pode contactar-nos em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p> Processaremos essas solicitações dentro de 30 dias.</p><h2>Retirada do consentimento </h2><p>Se você tiver alguma solicitação relacionada aos seus dados pessoais sob o GDPR, como uma solicitação para acessar ou excluir seus dados, você pode entrar em contacto conosco em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p> Processaremos esses pedidos no prazo de 30 dias. </p><h2> Tomada de Decisão Automatizada </h2><p>Não utilizamos qualquer tomada de decisão automatizada na prestação deste serviço a você. </p><h2> Transferência Internacional de Dados Pessoais</h2><p> Quando o fabricante do seu medicamento exige que transfiramos os seus dados para fora da União Europeia, utilizamos Cláusulas Contratuais Padrão para proteger os seus dados.</p><h2> Como apresentar uma reclamação</h2><p> Se tiver um pedido relacionado com os seus dados pessoais ao abrigo do RGPD, como um pedido de acesso ou eliminação dos seus dados, pode contactar-nos em <a href=\"mailto:dpo@pharmaledger.org\">dpo@pharmaledger.org</a>.</p><p> Processaremos esses pedidos no prazo de 30 dias. Além disso, o utilizador pode contactar a autoridade de supervisão local se considerar que os seus direitos não estão a ser respeitados.</p>",
    "terms_modal_title": "Termos e condições",
    "terms_modal_subtitle": "Os termos e condições que se aplicam ao usar o Aplicativo PharmaLedger.",
    "terms_content": "<h2> Termos e Condições do Site e Aplicativo de Informações Eletrônicas de Produtos da PharmaLedger Association </h2><p>Ao acessar ou usar o site e aplicativo de Informações Eletrônicas de Produtos da PharmaLedger Association (os \"Serviços\"), você concorda em ficar vinculado a estes termos e condições (os \"termos\"). Você não pode aceder ou utilizar os Serviços se não concordar com estes Termos. Os Serviços são operados pela PharmaLedger Association (a \"Associação\") e destinam-se a indivíduos que procuram informações sobre os seus medicamentos. Os Serviços são fornecidos por uma rede multipartidária e o fabricante do seu medicamento fornece as informações do produto apresentadas através dos Serviços. A Associação actua como o responsável pelo tratamento de dados desta informação. </p><h2>Utilização dos Serviços </h2><p> Você concorda em utilizar os Serviços apenas para fins legais e de uma forma que não infrinja os direitos de terceiros, nem restrinja ou iniba a utilização e o usufruto dos Serviços por parte de terceiros. Tal restrição ou inibição inclui, sem limitação, conduta que seja ilegal ou que possa assediar ou causar angústia ou incómodo a qualquer pessoa, e a transmissão de conteúdo obsceno ou ofensivo ou a perturbação do fluxo normal de diálogo nos Serviços. </p><h2> Propriedade Intelectual </h2><p>O conteúdo dos Serviços, incluindo, mas não limitado a texto, gráficos, imagens e software, é propriedade da Associação ou dos seus licenciantes e empresas associadas e está protegido por direitos de autor e outras leis de propriedade intelectual. O utilizador não pode utilizar qualquer conteúdo dos Serviços para qualquer fim comercial sem o consentimento expresso por escrito da Associação. </p><h2>Responsabilidade </h2><p>A Associação não faz representações ou garantias de qualquer tipo, expressas ou implícitas, em relação ao funcionamento dos Serviços ou às informações, conteúdos, materiais ou produtos incluídos nos Serviços. A Associação não será responsável por quaisquer danos de qualquer tipo resultantes da utilização dos Serviços, incluindo, sem limitação, danos directos, indirectos, incidentais, punitivos e consequenciais. </p><h2> Lei Reguladora </h2><p> Estes Termos e a sua utilização dos Serviços serão regidos e interpretados de acordo com as leis da Suíça e qualquer litígio será resolvido nos tribunais de Basileia, Suíça. </p><h2> Alterações nos Termos </h2><p>A Associação reserva-se o direito de alterar estes Termos em qualquer momento, e o utilizador é responsável por rever periodicamente estes Termos para verificar se houve alterações. A utilização continuada dos Serviços pelo utilizador após a introdução de alterações aos Termos constituirá a sua aceitação dos Termos revistos.</p><p><br></p>",
    "about_modal_subtitle": "Sobre",
    "about_modal_title": "PharmaLedger",
    "about_content": "<iframe style=\"width: 100%; height: 100%; margin-bottom: 24px; border: 0\" src=\"https://pharmaledger.org\"></iframe>",
    "help_modal_title": "Ajuda",
    "help_modal_subtitle": "Perguntas Frequentes",
    "help_content": "<div><p><b><h2>O que é EPI?</h2></b></p>" +
      "<p><b>EPI</b> é uma abreviação de <b>informativo eletrônico do produto</b>. É uma versão eletrônica do folheto informativo do produto em papel que você normalmente encontra dentro de uma embalagem de produto farmacêutico. Em alguns casos, o <b>EPI</b> pode ter substituído o folheto em papel.</p>" +
      "<p><b><h2>O que é PharmaLedger?</h2></b></p>" +
      "<p>A Associação PharmaLedger (PharmaLedger Association PLA) é uma associação sem fins lucrativos com sede na Suíça com o objetivo de habilitar e promover um ecossistema de confiança digital na área da saúde por meio de uma plataforma de código aberto padronizada e confiável. A PLA promove a colaboração e acelera a inovação e a adoção para alcançar benefícios mútuos nos domínios da saúde e das ciências da vida para pacientes e outras partes interessadas. A PLA foi formado em 2022 para continuar o trabalho do projeto PharmaLedger, um projeto de 3 anos financiado pela Comissão Europeia e pela indústria farmacêutica com o objetivo de provar o valor das soluções blockchain. Mais informações estão disponíveis no site <a href=\"https://pharmaledger.org/\">https://pharmaledger.org/</a>.</p>" +
      "<p><b><h2>O que é o DataMatrix?</h2></b></p>" +
      "<p>É um tipo de código de barras na embalagem do seu produto. É um código de barras de caixa quadrada preto e branco e será semelhante a este:<br><img src=\"./images/barcode_example.png\" alt='Exemplo de código de barras DataMatrix'></p>" +
      "<p><b><h2>Como usar o aplicativo?</h2></b></p>" +
      "<p>Siga as instruções na página inicial do <b>App...</b> ele mostra uma imagem de onde encontrar o <b>DataMatrix</b> na caixa do produto. Depois de encontrar o DataMatrix, clique no botão 'Scan <b>DataMatrix</b>'. Permita que o aplicativo use a câmera para que o DataMatrix possa ser verificado. Use a câmera para focar no DataMatrix. Uma vez que o pacote é digitalizado com sucesso, o <b>EPI</b> será exibido. Você pode clicar no botão '+' para obter mais detalhes.</p>" +
      "<p><b><h2>Por que minha verificação DataMatrix não dá um resultado?</h2></b></p><p>Há várias razões pelas quais o <b>DataMatrix</b> em seu pacote pode não fornecer um EPI. Um dos motivos pode ser o foco para a câmera. Por favor, tente digitalizar o código em um lugar bem iluminado e código claramente visível na tela. Se você está tendo dificuldade para manter sua mão firme, você pode tentar usar uma superficie para apoiar suas mãos.</p></div>"
  },

}

export function changeLanguage(newLang) {
  let languages = Object.keys(translations);
  if (languages.find(lang => lang === newLang)) {
    localStorage.setItem(constants.APP_LANG, newLang)
    translate();
  }
}

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

function setDefaultLanguage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let appLang = urlParams.get("lang") || window.navigator.language.toLowerCase() || localStorage.getItem(constants.APP_LANG);
  appLang = transformToISOStandardLangCode(appLang);
  appLang = langSubtypesMap[appLang.toLowerCase()] || appLang;
  appLang = translations[appLang] ? appLang : "en"
  localStorage.setItem(constants.APP_LANG, appLang);
  setTextDirectionForLanguage(appLang);
}

export function translate() {
  setDefaultLanguage();
  let matches = document.querySelectorAll("[translate]");
  matches.forEach((item) => {
    item.innerHTML = translations[localStorage.getItem(constants.APP_LANG)][item.getAttribute('translate')];
  });
}

export function getTranslation(key) {
  setDefaultLanguage();
  return translations[localStorage.getItem(constants.APP_LANG)][key];
}
