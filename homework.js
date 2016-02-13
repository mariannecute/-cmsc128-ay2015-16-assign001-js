var userInput = 123234;
var delim = ",";
var jumpSize = 3;

var stringInput = "one hundred twenty three thousand two hundred thirty four";
var stringCurrency = "PHP";

function numToWords(input){
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var places = ['', 'thousand', 'million'];

	var toPrint = "";

	if(input > 1000000){
		console.log("Invalid input!");
	}
	else{
		while(input > 999){
			if(input > 999999){
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
			else{
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

			while(input > 9){
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

function wordsToNum(input){
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var places = ['hundred', 'thousand', 'million'];
	var additional = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	var number = 0;
	var finalNumber = 0;

	input = input.toString().split(" ");
	for(var i = 0; i < input.length; i++){

		for(var w = 0; w < ones.length; w++){
			if(input[i] == ones[w]){
				number += w;
			}
		}

		for(var x = 0; x < tens.length; x++){
			if(input[i] == tens[x]){
				x = x * 10;
				number += x;
			}
		}

		for(var y = 0; y < additional.length; y++){
			if(input[i] == additional[y]){
				y = 10 + y;
				number += y;
			}
		}

		for(var z = 0; z < places.length; z++){
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
	finalNumber += number;
	//console.log(finalNumber);
	return finalNumber;
}

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

function wordsToCurrency(input, currency){
	var toPrint = currency + wordsToNum(input);
	console.log(toPrint);
}

//numberDelimited(userInput, delim, jumpSize);
//numToWords(userInput);
console.log(wordsToNum(stringInput));
//wordsToCurrency(stringInput, stringCurrency);