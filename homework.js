//Author: Marianne Louise Rivera
//Date Finished: February 14, 2016
//About the Program: Converts words to numbers and vice versa with additional features.
//---------------------------------------------------------------------------------

//hard coded inputs
var userInput = 123234;
var delim = ",";
var jumpSize = 3;

var stringInput = "one hundred twenty three thousand two hundred thirty four";
var stringCurrency = "PHP";

//---------------------------------------------------------------------------------
//function that converts numbers to words
//algorithm used is inspired by quotients and modulos
function numToWords(input){
	//hard-coded ready-to-print arrays
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var places = ['', 'thousand', 'million'];

	var toPrint = "";			//initialize variable that will print the numbers-turned-words

	if(input > 1000000){		//too large number
		console.log("Invalid input!");
	}
	else{
		while(input > 999){
			if(input > 999999){			//if the input is more than 6 digits
				var i = input / 1000000;
				i = parseInt(i);
				input = input % 1000;

				var x = 0;
	
				while(i > 9){
					if(i > 99){
						var x = i / 100;
						x = parseInt(x);
						i = i % 100;
						toPrint += ones[x] + " hundred";
					}
					else{
						var x = i / 10;
						x = parseInt(x);
						i = i % 10;
						toPrint += " " + tens[x];
					}
				}
				x = i;
				toPrint += " " + ones[x];
				

				toPrint += " million ";
			}
			else if(input > 999){					//if the input is greater than 3 digits
				var i = input / 1000;
				i = parseInt(i);
				input = input % 1000;
				
				var x = 0;
	
				while(i > 9){
					if(i > 99){
						var x = i / 100;
						x = parseInt(x);
						i = i % 100;
						toPrint += ones[x] + " hundred";
					}
					else{
						var x = i / 10;
						x = parseInt(x);
						i = i % 10;
						toPrint += " " + tens[x];
					}
				}
				x = i;
				toPrint += " " + ones[x];

				toPrint += " thousand ";
			}
		}
			
		var x = 0;

			while(input > 9){					//if the input is less than 4 digits
				if(input > 99){
					var x = input / 100;
					x = parseInt(x);
					input = input % 100;
					toPrint += ones[x] + " hundred";
				}
				else{
					var x = input / 10;
					x = parseInt(x);
					input = input % 10;
					toPrint += " " + tens[x];
				}
			}
			x = input;
			toPrint += " " + ones[x];

			console.log(toPrint);
	}
}


//function that turns words into numbers
//algorithm used is derived from the one I used in the numToWords function
function wordsToNum(input){
	//hard-coded ready-to-be-converted arrays
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var places = ['hundred', 'thousand', 'million'];
	var additional = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	var number = 0;
	var finalNumber = 0;

	input = input.toString().split(" ");		//split the string per words
	for(var i = 0; i < input.length; i++){

		for(var w = 0; w < ones.length; w++){		//for words one through nine
			if(input[i] == ones[w]){
				number += w;
			}
		}

		for(var x = 0; x < tens.length; x++){		//for words ten through ninety
			if(input[i] == tens[x]){
				x = x * 10;
				number += x;
			}
		}

		for(var y = 0; y < additional.length; y++){		//for special words eleven through nineteen
			if(input[i] == additional[y]){
				y = 10 + y;
				number += y;
			}
		}

		for(var z = 0; z < places.length; z++){			//determines if it's hundred, thousand or million
			if(input[i] == places[z]){
				if(z == 0) number = number * 100;
				else if(z == 1){
					number = number * 1000;
					finalNumber += number;
					number = 0;
				}
				else if(z == 2){
					number = number * 1000000;
					finalNumber += number;
					number = 0;
				}
			}
		}
	}
	finalNumber += number;		//produces the final number
	//console.log(finalNumber);
	return finalNumber;
}

//additional feature:  function that puts a delimeter on a number given a specified size
//exercised the concept of split and delimiters
function numberDelimited(input, delim, jumpSize){
	var splitted = input.toString().split("");

	var toPrint = "";

	for(var i = 0; i < splitted.length - jumpSize; i++){
		toPrint += splitted[i];
	}
	toPrint += delim;
	for(var j = splitted.length - jumpSize; j < splitted.length; j++){
		toPrint += splitted[j];
	}

	console.log(toPrint);
}

//function that appends the currency of a number-turned-string
function wordsToCurrency(input, currency){
	var toPrint = currency + wordsToNum(input);
	console.log(toPrint);
}
//--------------------------------------------------------------------
//list of function calls to use

//numberDelimited(userInput, delim, jumpSize);
//numToWords(userInput);
//console.log(wordsToNum(stringInput));
//wordsToCurrency(stringInput, stringCurrency);