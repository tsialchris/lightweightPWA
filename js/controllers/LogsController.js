import constants from "../constants.js";

function LogsController() {

  let debugLog = JSON.parse(localStorage.getItem(constants.DEV_DEBUG));
  const formattedJSON = JSON.stringify(debugLog, null, 4);
  document.querySelector("#logs-container").innerHTML = formattedJSON;
  const shareData = {
    text: formattedJSON
  };

  const shareBtn = document.querySelector("button#share-btn");

  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(formattedJSON);
      alert("Copied to clipboard");
    } catch (err) {
      alert(`Error: ${err}`);
    }
  });
}

const logsController = new LogsController();

