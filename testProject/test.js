


// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var nodeArgs = process.argv;
var movieTitle = "";

for (var i = 2; i < nodeArgs.length; i++) {
	if (i > 2 && i < nodeArgs.length){
		movieTitle = movieTitle + "+" + nodeArgs[i];
		console.log(movieTitle);
	}
	else {
		movieTitle += nodeArgs[i];
	}
}
var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=40e9cece";
// Then run a request to the OMDB API with the movie specified
request(queryURL, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    var database = JSON.parse(body);
    console.log(database.Year);
    console.log(database.Rated);
    console.log(database.Released);
    console.log(database.imdbRating);
    console.log(database.Actors);

  }
  
});
// //============
// var request = require("request");

// // Store all of the arguments in an array
// var nodeArgs = process.argv;
// console.log(nodeArgs);
// // Create an empty variable for holding the movie name
// var movieName = "";

// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < nodeArgs.length; i++) {
//   if (i > 2 && i < nodeArgs.length) {
//     movieName = movieName + "+" + nodeArgs[i];
//   }
//   else {
//     movieName += nodeArgs[i];
//   }
// }

// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// // This line is just to help us debug against the actual URL.
// // console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     var database = JSON.parse(body);
//     	console.log(database);
//         console.log(database.Year);
//         console.log(database.Rated);
//         console.log(database.BoxOffice);
//         console.log(database.imdbRating);
//         console.log(database.Actors);
//   }
// });


