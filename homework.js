var userInput = 123234;
var delim = ",";
var jumpSize = 3;

function numToWords(input){
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var places = ['', 'thousand', 'million'];

	function toHundreds(trimmedInput){
		var x = 0;
	
		while(trimmedInput > 9){
			if(trimmedInput > 99){
				var x = trimmedInput / 100;
				x = parseInt(x);
				trimmedInput = trimmedInput % 100;
				console.log(ones[x] + " hundred");
			}
			else{
				var x = trimmedInput / 10;
				x = parseInt(x);
				trimmedInput = trimmedInput % 10;
				console.log(tens[x]);
			}
		}
		x = trimmedInput;
		console.log(ones[x]);

	}

	if(input > 1000000){
		console.log("Invalid input!");
	}
	else{
		while(input > 999){
			if(input > 999999){
				var i = input / 1000000;
				i = parseInt(i);
				toHundreds(i);
				input = input % 1000;
				console.log("million");
			}
			else{
				var i = input / 1000;
				i = parseInt(i);
				toHundreds(i);
				input = input % 1000;
				console.log("thousand");
			}
		}
		toHundreds(input);
	}
}

function wordsToNum(input){

}

function numberDelimited(input, delim, jumpSize){
	var splitted = input.toString().split("");

	for(var i = 0; i < splitted.length - jumpSize; i++){
		console.log(splitted[i]);
	}
	console.log(delim);
	for(var j = splitted.length - jumpSize; j < splitted.length; j++){
		console.log(splitted[j]);
	}
}

numberDelimited(userInput, delim, jumpSize);
//numToWords(userInput);