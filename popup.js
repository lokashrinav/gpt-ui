document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleDarkMode');

  toggleButton.addEventListener('click', () => {
    // Send a message to the content script to toggle dark mode
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleDarkMode' }, (response) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        } else {
          console.log(response);
        }
      });
    });
  });
});