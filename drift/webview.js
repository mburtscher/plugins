// Zalo integration
const path = require('path');

module.exports = (Franz, options) => {
	function getMessages() {
		var count = 0;
		var viewNameElements = document.getElementsByClassName('view-name');
		for (var i = 0; i < viewNameElements.length; i++) {
			if (viewNameElements[i].innerText.trim() == 'Open') {
				count = parseInt(viewNameElements[i].parentNode.children[0].innerText);
			}
		}
		Franz.setBadge(count);
	};
	Franz.loop(getMessages);
};
