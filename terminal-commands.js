const fs = require('fs');

module.exports.ls = () => {
	fs.readdir('./', (err, files) => {
		const filesToString = files.reduce((acc, file) => {
			return `${acc} ${file}`;
		}, '');

		console.log(filesToString);
	});
};

module.exports.touch = () => {
  fs.exists('message.txt', (exists) => {
  	if (exists) {
  		console.log("This file already exists");
  	} else {
  		fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err) => {
  			if (err) throw err;
  			console.log('file created');
  		});
  	}
  });
};

module.exports.mkdir = () => {
  fs.exists('terminal-commands', (exists) => {
  	if (exists) {
  		console.log("This folder already exists");
  	} else {
  		fs.mkdir('terminal-commands', { recursive: true }, (err) => {
  			if (err) throw err;
  			console.log('folder created');
		});
  	}
  });
};