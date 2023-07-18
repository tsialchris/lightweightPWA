import constants from "../constants.js";

function LogsController() {

  let debugLog = JSON.parse(localStorage.getItem(constants.DEV_DEBUG));
  const formattedJSON = JSON.stringify(debugLog, null, 4);
  document.querySelector("#logs-container").innerHTML = formattedJSON;
  const shareData = {
    text: formattedJSON
  };

  const copyBtn = document.querySelector("button#copy-btn");
  const shareBtn = document.querySelector("button#share-btn");
  const downloadBtn = document.querySelector("button#download-btn");

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(formattedJSON);
      alert("Copied to clipboard");
    } catch (err) {
      alert(`Error: ${err}`);
    }
  });

  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.share(shareData);
      alert("Data shared successfully");
    } catch (err) {
      alert(`Error: ${err}`);
    }
  });


  downloadBtn.addEventListener("click", async () => {
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(formattedJSON);
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "lwa-logs.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  })
}

const logsController = new LogsController();

