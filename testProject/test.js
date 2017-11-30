// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var movieTitle = process.argv[2];
// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

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
