// background.js
const URLS_TO_DELETE = [  "https://www.example.com/",  "https://www.example.net/",  "https://www.example.org/"];

chrome.history.deleteUrl({url: URLS_TO_DELETE});
