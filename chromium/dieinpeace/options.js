// options.js
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const urls = document.getElementById("urls").value.split("\n");
  chrome.storage.sync.set({urls: urls});
});
