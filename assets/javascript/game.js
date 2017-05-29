$(document).ready(function() {

	var targetNumber = Math.floor(Math.random() * 101) + 19;
	var wins = 0;
	var losses = 0;
	var counter = 0;
	var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var red = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	var blue = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	var	yellow = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	var green = numberOptions[Math.floor(Math.random() * numberOptions.length)];


	var updateWins = function() {
		document.querySelector("#wins").innerHTML = wins;
	};

	var updateNumberToGuess = function() {
		targetNumber = Math.floor(Math.random() * 101) + 19;
		document.querySelector("#number-to-guess").innerHTML = targetNumber;
	};


	var updateCounter = function () {
		document.querySelector("#score").innerHTML = counter;
	}

	var updateCrystals = function () {
		red = numberOptions[Math.floor(Math.random() * numberOptions.length)];
		blue = numberOptions[Math.floor(Math.random() * numberOptions.length)];
		yellow = numberOptions[Math.floor(Math.random() * numberOptions.length)];
		green = numberOptions[Math.floor(Math.random() * numberOptions.length)];
	}

	var reset = function() {
		counter = 0;
		updateCrystals();
		updateNumberToGuess();
		$("#red").append(red);
		console.log("red: " + red);
		$("#blue").append(blue);
		console.log("blue: " + blue);
		$("#yellow").append(yellow);
		console.log("yellow: " + yellow);
		$("#green").append(green);
		console.log("green: " + green);
		
	}
	
	// user's score appears in score box
	$("#score").append(counter);

	// number assigned to random number box
	$("#number-to-guess").text(targetNumber);
	
	// color variable values are assigned to corresponding crystal
	$("#red").append(red);
	console.log("red: " + red);
	$("#blue").append(blue);
	console.log("blue: " + blue);
	$("#yellow").append(yellow);
	console.log("yellow: " + yellow);
	$("#green").append(green);
	console.log("green: " + green);	

	$("#red").on("click", function() {
		counter += red; 
		updateCounter();
		console.log(counter)
		if (counter === targetNumber) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			console.log("wins");
			reset();
			} 
		if (counter >= targetNumber) {
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			console.log("losses");
			reset();
			}
	}) // end of function for red crystal

	$("#blue").on("click", function() {
		counter += blue;
		updateCounter();
		console.log(counter);
		if (counter === targetNumber) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			console.log("wins");
			reset();
			} 
		if (counter >= targetNumber) {
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			console.log("losses");
			reset();
			}
	}) // end of function for blue crystal

	$("#yellow").on("click", function() {
		counter += yellow; 
		updateCounter();
		console.log(counter)
		if (counter === targetNumber) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			console.log("wins");
			reset();
		} 
		if (counter >= targetNumber) {
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			console.log("losses");
			reset();
		}

	}) // end of function for yellow crystal

	$("#green").on("click", function() {
		counter += green;
		updateCounter(); 
		console.log(counter)

		if (counter === targetNumber) {
			wins++;
			document.querySelector("#wins").innerHTML = wins;
			console.log("wins");
			reset();
		} 

		if (counter >= targetNumber) {
			losses++;
			document.querySelector("#losses").innerHTML = losses;
			console.log("losses");
			reset();
		}

	}) // end of function for green crystal
})

