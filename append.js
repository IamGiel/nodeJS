var fs = require("fs");

var input = process.argv[2];
var aNumber = process.argv[3];
  
	switch(input) {
		case "total":
		  total();
		  console.log("your total funds: ");
		  break;
		case "deposit":
		  deposit();
		  console.log("your deposit");
		  break;
		case "withdraw":
		  withdraw();
		  console.log("your withdrawal");
		  break;
		case "lotto":
		  lotto();
		  console.log("playing lottery");
		  break;
	}

function total() {
	//write 
	fs.readFile("append.txt", "utf8", function(error, data){

		if (error){
			return console.log(error);
		}
		var Numbers = data.split(' ');
		var sum = Numbers.reduce(function(a, b) { return parseFloat(a) + parseFloat(b); }, 0);;
		console.log(sum.toFixed(2));
	});
}
function deposit() {
	//add 
	fs.appendFile("append.txt", ", " + aNumber, function(error, data){

		if (error){
			return console.log(error);
		}
			console.log(aNumber);
	});
}
function withdraw() {
	//subtract 
	fs.appendFile("append.txt", ", -" + aNumber, function(error, data){

		if (error){
			return console.log(error);
		}
			console.log(" -" + aNumber);
	});
}
function lotto() {
	//randomly generating a number.
	//Let random numbers between 1 - 10
	//if random number is 1, declare user a winner;
	//else declare user lost
	var random = Math.floor(Math.random() * 10) + 1;
	console.log(random);
	if (random == 1){
		console.log("YOU WIN!!!");
		//append the price money
		fs.appendFile("append.txt", ", " + 2, function(error, data){

			if (error){
				return console.log(error);
			}	
			console.log("You won $2.00");
		});
	}
	else {
		console.log("BETTER LUCK NEXT TIME...");
		//deduct the lottery ticket
		fs.appendFile("append.txt", ", -" + .25, function(error, data){

			if (error){
				return console.log(error);
			}
			console.log("You lost .25 cents");	
		});
	} 

	

}
// 
// fs.readFile("append.txt", "utf8", function(error, data){

// 	if (error){
// 		return console.log(error);
// 	}

// 	console.log(data);
// 	console.log("reading");

// });

// var number = //came from an input

// fs.appendFile("append.txt", , function(error, data){

// 	if (error){
// 		return console.log(error);
// 	}

// 	console.log(data);
// 	console.log("append it!");

// });