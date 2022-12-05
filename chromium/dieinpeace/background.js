// background.js
chrome.storage.sync.get(["urls"], function(items) {
  const URLS_TO_DELETE = items.urls || [];
  chrome.history.deleteUrl({url: URLS_TO_DELETE});
});
