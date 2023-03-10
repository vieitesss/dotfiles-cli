const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
	unhandled();
	welcome({
		title: `dot-cli`,
		tagLine: `by vieitesss`,
		description: `${pkg.description}\nTry 'dot-cli -h'`,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear: false
	});
};
