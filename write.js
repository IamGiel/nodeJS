var fs = require("fs");

//this method creates a file (in this example: movies.txt)
fs.writeFile("movies.txt", "Inception, hello", function(error) {

	if (error) {
		return console.log(error);
	}
		console.log("movies.txt updated!");
});