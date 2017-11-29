var fs = require("fs");

fs.readFile("best_thing_ever.txt", "utf8", function(err, data){
	if (err) {
		return console.log("error");
	}

	console.log(data);
	var array = data.split(',');
	console.log(array);
	console.log(array.join('\n'));
});