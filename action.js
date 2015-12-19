/*
 * @author Tristan Damron (github.com/tristandamron)
 * @license GNU General Public License v. 2
*/

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'spoilers.js' 
  });
});
