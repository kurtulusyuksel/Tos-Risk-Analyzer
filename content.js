chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extract_text") {
    try {
      const bodyText = document.body ? document.body.innerText : "";
      const cleanedText = bodyText.replace(/\s+/g, ' ').trim().substring(0, 15000);
      sendResponse({ text: cleanedText });
    } catch (err) {
      sendResponse({ text: null, error: err.message });
    }
  }
  return true;
});