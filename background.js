chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in background script:", message);
    // Handle the message and send a response if needed
    sendResponse({ response: "Message received" });
  });