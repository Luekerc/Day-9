var rot;

$(document).ready(function(){

var rot;
// Assignment 1
function randomArray(array){
var randomNumber=Math.floor(Math.random()*3);
return array[randomNumber];
}

$('#btn').click(function(){
	var myArray=["Item A","Item B","Item C"];
	$('#result1').val(randomArray(myArray));
})



//Assignment 2
function rot13Encoder (undecodedString) {
	//variable declaration
	var storeVal = 0;
	var decodedName = '';
	var lowerMin = 'a'.charCodeAt();
	var lowerMiddle = 'm'.charCodeAt();
	var lowerMax = 'z'.charCodeAt();
	var upperMin = 'A'.charCodeAt();
	var upperMiddle = 'M'.charCodeAt();
	var upperMax = 'Z'.charCodeAt();

	//clears the error message if the function is run a second time.
	$('.error').html('');

	//data validation
	if (typeof(undecodedString) != 'string' || undecodedString==='') {
		throw 'You did not enter a string.' && $('.error').html('You must enter a string')
	} 

	for (var y =0; y < undecodedString.length; y++) {

		if ((undecodedString[y].charCodeAt() > lowerMax) || (undecodedString[y].charCodeAt() < upperMin)) {
			throw 'You can only encode letters from a to z (or uppercase A to Z).  You cannot enter spaces either.'
			&& $('.error').html('You can only encode letters from a to z (or uppercase A to Z).  You cannot enter spaces either.');
		}
	}

	//function

	for(var i = 0; i < undecodedString.length; i++) {

		storeVal = undecodedString.charCodeAt(i);

		if (storeVal >= lowerMin && storeVal <= lowerMax) {

			if (storeVal <= lowerMiddle ) {
				storeVal +=13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			}
		}

		else if (storeVal >= upperMin && storeVal <= upperMax) {

			if (storeVal <= upperMiddle) {
				storeVal += 13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				decodedName = decodedName + String.fromCharCode(storeVal);
			}
		}
		
	}
	return decodedName;
}

$('#f2').click(function() {
	var textInput = $('#enter2').val();
	$('#result2').val(rot13Encoder(textInput));
	rot = rot13Encoder(textInput);
});


//Function 3
function rot13Decoder (encodedString) {
	//variable declarations
	var storeVal = 0;
	var codedString = '';
	var lowerMin = 'a'.charCodeAt();
	var lowerMiddle = 'm'.charCodeAt();
	var lowerMax = 'z'.charCodeAt();
	var upperMin = 'A'.charCodeAt();
	var upperMiddle = 'M'.charCodeAt();
	var upperMax = 'Z'.charCodeAt();
	
	//data validation
	if (typeof(encodedString) != 'string') {
		throw 'You did not enter a string.';
	} 
	for (var y =0; y < encodedString.length; y++) {

		if ((encodedString[y].charCodeAt() > lowerMax) || (encodedString[y].charCodeAt() < upperMin)) {
			throw 'You can only encode letters from a to z (or uppercase A to Z)';
		}
	}

	//function
	for(var i = 0; i < encodedString.length; i++) {
		storeVal = encodedString.charCodeAt(i);
		if (storeVal >= lowerMin && storeVal <= lowerMax) {
			if (storeVal <= lowerMiddle ) {
				storeVal +=13;
				codedString = codedString + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				codedString = codedString + String.fromCharCode(storeVal);
			}
		}

		else if (storeVal >= upperMin && storeVal <= upperMax) {
			if (storeVal <= upperMiddle) {
				storeVal += 13;
				codedString = codedString + String.fromCharCode(storeVal);
			} else {
				storeVal -=13;
				codedString = codedString + String.fromCharCode(storeVal);
			}
		}
		
	}
	return codedString;
}

$('#f3').click(function() {
	$('#result3').html(rot13Decoder(rot));
});

//Function 4
function rotN (unencrypted, n) {

	if(unencrypted === undefined) {
	throw 'You must enter string to encrypt.';
	// && $('.error4').html('You must enter string to encrypt.')
	}
	

	if(typeof unencrypted !== 'string') {
	throw 'The first argument must be a string';
	// && $('.error4').html('The first argument must be a string')
	}

	for(var i=0; i<unencrypted.length; i++) {
		var targetCharacter = unencrypted.charAt(i);
		targetCharacter = targetCharacter.toLowerCase();
		var targetCharacterCode = targetCharacter.charCodeAt(0);
		if(targetCharacterCode < 97 || targetCharacterCode > 122) {
		throw 'The unencrypted string can only have a-z or A-Z';
		// && $('.error4').html('The unencrypted string can only have a-z or A-Z')
		}
	}

	var encrypted = '';

	for(var i=0; i<unencrypted.length; i++) {
		var charCode = unencrypted.charCodeAt(i);
		if(charCode >= 65 && charCode <= 90) {

			var translatedCharcode = charCode - 65;
			translatedCharcode += n;
			translatedCharcode %= 26;

			encrypted += String.fromCharCode(translatedCharcode+65);
		}
		else if(charCode >= 97 && charCode <= 122) {
			var translatedCharcode = charCode - 97;
			translatedCharcode += n;
			translatedCharcode %= 26;
			encrypted += String.fromCharCode(translatedCharcode+97);
		}
	}
	return encrypted; 
}

$('#btn4').click(function() {
	console.log('checking');
	var textInput = $('#enter4').val();
	var numInput = $('#enter4-1').val();
	numInput = parseInt(numInput);
	$('#result4').val(rotN(textInput,numInput));
});


})









  














  



