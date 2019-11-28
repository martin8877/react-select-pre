
module.exports = function (html) {
	if (typeof document !== 'undefined') {
		return;
	}

	// var jsdom = require('jsdom').jsdom;
	// global.document = jsdom(html || '');

	var jsdom = require('jsdom');
	const { JSDOM } = jsdom;
	const { document } = (new JSDOM('')).window;
	global.document = document;
	global.window = global.document.defaultView;
	global.navigator = {
		userAgent: 'JSDOM'
	};
};
