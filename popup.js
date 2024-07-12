document.getElementById("show-passwords").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting
      .executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          document
            .querySelectorAll('input[type="password"]')
            .forEach((input) => {
              input.type = "text";
            });
          console.log("Changed password inputs to text");
        },
      })
      .then(() => {
        console.log("Script executed successfully");
      })
      .catch((error) => {
        console.error("Script execution failed: ", error);
      });
  });
});
