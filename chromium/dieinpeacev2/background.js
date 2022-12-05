// Add a listener to open the options page when the user clicks the extension icon
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({url: "options.html"});
});

// Add a listener to block URLs containing the blocked strings
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  // Get the list of blocked strings from storage
  chrome.storage.sync.get({blockedStrings: []}, function(items) {
    var blockedStrings = items.blockedStrings;
    for (var i = 0; i < blockedStrings.length; i++) {
      if (details.url.indexOf(blockedStrings[i]) != -1) {
        // Cancel the navigation and delete any existing cookies for the URL
        chrome.webNavigation.onBeforeNavigate.removeListener(this);
        chrome.cookies.getAll({url: details.url}, function(cookies) {
          for (var i = 0; i < cookies.length; i++) {
            chrome.cookies.remove({url: details.url, name: cookies[i].name});
          }
        });
        return;
      }
    }
  });
});
