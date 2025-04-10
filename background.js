chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "formatJson",
    title: "See Formatted JSON",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "formatJson" && info.selectionText) {
    chrome.storage.local.set({ selectedJson: info.selectionText }, () => {
      chrome.tabs.create({ url: "https://jsonformatter.org" }, (newTab) => {
        // Inject selected JSON into localStorage
        chrome.scripting.executeScript({
          target: { tabId: newTab.id },
          func: (text) => {
            localStorage.setItem("selected_json_temp", text);
          },
          args: [info.selectionText],
          world: "MAIN"
        });

        // Reload the page after a short delay (so content.js runs cleanly)
        setTimeout(() => {
          chrome.tabs.reload(newTab.id);
        }, 700);
      });
    });
  }
});
