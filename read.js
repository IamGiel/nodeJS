var fs = require("fs");

fs.readFile("read.txt", "utf8", function(err, data){
	if (err) {
		return console.log("error");
	}

	console.log(data);
	var array = data.split(" ");
	console.log(array);
});