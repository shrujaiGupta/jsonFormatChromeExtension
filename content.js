window.addEventListener('load', () => {
    chrome.storage.local.get("selectedJson", (data) => {
      if (!data.selectedJson) return;
  
      // Set the raw JSON directly into localStorage used by jsonformatter.org
      localStorage.setItem("index", data.selectedJson);
  
      // Wait for page to load everything (including format button)
      setTimeout(() => {
        const formatBtn = document.getElementById("defaultaction");
        if (formatBtn) {
          formatBtn.click();
        } else {
          console.error("Could not find the format button (#defaultaction)");
        }
      }, 500); // You can tweak the delay if needed
    });
  });
  