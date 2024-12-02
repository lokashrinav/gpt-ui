document.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.sendMessage({ greeting: "hello" }, (response) => {
    console.log("Response from background script:", response);
  });
});