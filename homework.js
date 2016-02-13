var userInput = 123234;
var delim = ",";
var jumpSize = 3;

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

numberDelimited(userInput, delim, jumpSize);
//numToWords(userInput);