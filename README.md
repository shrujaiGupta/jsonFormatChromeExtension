# 🧩 JSON Formatter QuickView – Chrome Extension

Tired of manually pasting JSON into online formatters?

**JSON Formatter QuickView** is a lightweight Chrome extension that helps you instantly beautify selected JSON with just a right-click!

---

## 🚀 Features

- ✅ Select any raw JSON text on a webpage  
- ✅ Right-click → **See Formatted JSON**  
- ✅ Automatically opens [jsonformatter.org](https://jsonformatter.org)  
- ✅ Pre-fills the selected text and clicks **Beautify** for you  
- ✅ No copy-paste, no clicks – just clean, formatted JSON in seconds  

---

## 🛠️ How It Works

1. Select any JSON snippet on any webpage  
2. Right-click and choose **See Formatted JSON**  
3. A new tab opens [jsonformatter.org](https://jsonformatter.org)  
4. The extension:
   - Injects the selected text into the site's localStorage (`index`)
   - Triggers the **Beautify** button for you  
5. You instantly see clean, readable JSON

---

## 📦 Installation (Manual)

1. Clone or download this repository  
2. Go to `chrome://extensions` in your Chrome browser  
3. Enable **Developer Mode** (toggle on top right)  
4. Click **Load unpacked** and select the extension folder  
5. Done! 🎉 Right-click any JSON text and give it a try!

---
## 🧠 Tech Stack

- Chrome Extension APIs:
  - `contextMenus`
  - `tabs`
  - `storage`
  - `scripting`
- JS injection to interact with site’s localStorage
- DOM automation for formatting

---
## ✨ Credits

Made with ❤️ by **Shrujai Gupta**  
Contributions welcome — feel free to fork, improve, and send PRs!
