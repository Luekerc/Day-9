$(document).ready(function(){

// Assignment 1
function randomArray(array){
var randomNumber=Math.floor(Math.random()*3);
return array[randomNumber];
}

$('#btn').click(function(){
	var myArray=["Item A","Item B","Item C"];
	$('#result1').val(randomArray(myArray));
})

//Function 2
function randomPairing(inputArray){
	var finalArray = [];
	if (inputArray.length%2!=0){
		$(".error5").html("You must enter an even number of items");
	}else{

		for (var i=0; i<inputArray.length; i++){
			var pairs = [];
			pairs.push('[');
		//randomly sort the names within the array to create newArray
		//I found the sort(0.5-math.random()) at 
		//Stack Overflow but don't fully understand how it works
		//http://stackoverflow.com/questions/21295162/javascript-randomly-pair-items-from-array-without-repeats
		var newArray = inputArray.sort(function(){return 0.5 - Math.random()});
		//splice the array in half starting at position 0
		//and create a leftHalf array and a rightHalf array
		//using splice in this way came from Stack Overflow
		//http://stackoverflow.com/questions/9181188/splice-
		//an-array-in-half-no-matter-the-size
		var leftHalf = newArray.splice(0,newArray.length/2);
		var rightHalf = newArray;
		console.log(leftHalf);
		console.log(rightHalf);
		for (var i in leftHalf){
			for (var j in rightHalf){
				pairs.push("["+leftHalf[j]+", "+rightHalf[j]+"]");
			}
			finalArray = ("[" + pairs.splice(0, pairs.length/2) + "]");
			console.log(typeof pairs);
		}	
		pairs.push(']');
		return finalArray;
	}
	}	
}


$('#f5').click(function() {
	var textInput=[];
	//make textInput the "#enter5" value(aka: the users input) 
	textInput=$('#enter5').val();
	//then split the list of items as separated by the comma
	inputArray= textInput.split(',');
	console.log(inputArray);
	//take the split data from textArray and run it through 
	//the function randomPairing above
	$('#result5').val(randomPairing(inputArray));
 })

//Function 6
function dashString(string) {

	var arrayOfString = string.split('');

	if (typeof string != 'string') {
		throw 'You did not enter an string.';
	}
	return arrayOfString.join('-');
}


$('#f6').click(function() {
	var textInput = $('#enter6').val();
	$('#result6').val(dashString(textInput));
});

//Function 7
function noJoinString(string) {
	var newString = '';
	if (typeof string != 'string') {
		throw 'You did not enter an string.';
	}

	for(var i =0; i < string.length; i++) {
        newString += string.slice(i, i+1)+"-";
	}
	newString = newString.slice(0,-1);
	return newString;
}

$('#f7').click(function() {
	var textInput = $('#enter7').val();
	$('#result7').val(dashString(textInput));
});

//Function 8
function noJoin2Strings(string1, string2) {
	var combinedString = string1 + string2;
	console.log(combinedString);
	var newString = '';

	if (typeof string1 !='string' || typeof string2 !='string') {

	}

	for(var i =0; i < combinedString.length; i++) {
        newString += combinedString.slice(i, i+1)+"-";
	}
	newString = newString.slice(0,-1);
	return newString;
}

$('#f8').click(function() {
	var textInput = $('#enter8').val();
	var textInput2 = $('#enter8-1').val();

	$('#result8').val(noJoin2Strings(textInput,textInput2));
});
});

//Assignment 2
// function rot13Encoder (undecodedString) {
	//variable declaration
	// var storeVal = 0;
	// var decodedName = '';
	// var lowerMin = 'a'.charCodeAt();
	// var lowerMiddle = 'm'.charCodeAt();
	// var lowerMax = 'z'.charCodeAt();
	// var upperMin = 'A'.charCodeAt();
	// var upperMiddle = 'M'.charCodeAt();
	// var upperMax = 'Z'.charCodeAt();

	//clears the error message if the function is run a second time.
	// $('.error').html('');

	//data validation
	// if (typeof(undecodedString) != 'string' || undecodedString==='') {
	// 	throw 'You did not enter a string.' && $('.error').html('You must enter a string')
	// } 

	// for (var y =0; y < undecodedString.length; y++) {

	// 	if ((undecodedString[y].charCodeAt() > lowerMax) || (undecodedString[y].charCodeAt() < upperMin)) {
	// 		throw 'You can only encode letters from a to z (or uppercase A to Z).  You cannot enter spaces either.'
	// 		&& $('.error').html('You can only encode letters from a to z (or uppercase A to Z).  You cannot enter spaces either.');
	// 	}
	// }

	//function

	// for(var i = 0; i < undecodedString.length; i++) {

	// 	storeVal = undecodedString.charCodeAt(i);

	// 	if (storeVal >= lowerMin && storeVal <= lowerMax) {

	// 		if (storeVal <= lowerMiddle ) {
	// 			storeVal +=13;
	// 			decodedName = decodedName + String.fromCharCode(storeVal);
	// 		} else {
	// 			storeVal -=13;
	// 			decodedName = decodedName + String.fromCharCode(storeVal);
	// 		}
	// 	}

// 		else if (storeVal >= upperMin && storeVal <= upperMax) {

// 			if (storeVal <= upperMiddle) {
// 				storeVal += 13;
// 				decodedName = decodedName + String.fromCharCode(storeVal);
// 			} else {
// 				storeVal -=13;
// 				decodedName = decodedName + String.fromCharCode(storeVal);
// 			}
// 		}
		
// 	}
// 	return decodedName;
// }

// $('#f2').click(function() {
// 	var textInput = $('#enter2').val();
// 	$('#result2').val(rot13Encoder(textInput));
// 	rot = rot13Encoder(textInput);
// });


//Function 3
// function rot13Decoder (encodedString) {
	//variable declarations
	// var storeVal = 0;
	// var codedString = '';
	// var lowerMin = 'a'.charCodeAt();
	// var lowerMiddle = 'm'.charCodeAt();
	// var lowerMax = 'z'.charCodeAt();
	// var upperMin = 'A'.charCodeAt();
	// var upperMiddle = 'M'.charCodeAt();
	// var upperMax = 'Z'.charCodeAt();

	// //function
	// for(var i = 0; i < encodedString.length; i++) {
	// 	storeVal = encodedString.charCodeAt(i);
	// 	if (storeVal >= lowerMin && storeVal <= lowerMax) {
	// 		if (storeVal <= lowerMiddle ) {
	// 			storeVal +=13;
	// 			codedString = codedString + String.fromCharCode(storeVal);
	// 		} else {
	// 			storeVal -=13;
	// 			codedString = codedString + String.fromCharCode(storeVal);
	// 		}
	// 	}

	// 	else if (storeVal >= upperMin && storeVal <= upperMax) {
// 			if (storeVal <= upperMiddle) {
// 				storeVal += 13;
// 				codedString = codedString + String.fromCharCode(storeVal);
// 			} else {
// 				storeVal -=13;
// 				codedString = codedString + String.fromCharCode(storeVal);
// 			}
// 		}
		
// 	}
// 	return codedString;
// }

// $('#f3').click(function() {
// 	$('#result3').html(rot13Decoder(rot));
// });

//Function 4
// function rotN(unencrypted, n){
// 	var encrypted = '';

	
// 	if(unencrypted === '') {
// 	$('.error4').html('You must enter string to encrypt.');
// 	}
	
// 	if(typeof n !== 'number') {
// 	$('.error4b').html('You must enter a number.');
// 	}

// 	if(typeof unencrypted !== 'string') {
// 	$('.error4').html('The first argument must be a string')
// 	}

	// for(var i=0; i<unencrypted.length; i++) {
	// 	var targetCharacter = unencrypted.charAt(i);
	// 	targetCharacter = targetCharacter.toLowerCase();
	// 	var targetCharacterCode = targetCharacter.charCodeAt(0);
	// 	if(targetCharacterCode < 97 || targetCharacterCode > 122) {
	// 	$('.error4').html('The unencrypted string can only have a-z or A-Z');
	// 	}
	// }

	// for(var i=0; i<unencrypted.length; i++) {
	// 	var charCode = unencrypted.charCodeAt(i);
	// 	if(charCode >= 65 && charCode <= 90) {

	// 		var translatedCharcode = charCode - 65;
	// 		translatedCharcode += n;
	// 		translatedCharcode %= 26;

// 			encrypted += String.fromCharCode(translatedCharcode+65);
// 		}
// 		else if(charCode >= 97 && charCode <= 122) {
// 			var translatedCharcode = charCode - 97;
// 			translatedCharcode += n;
// 			translatedCharcode %= 26;
// 			encrypted += String.fromCharCode(translatedCharcode+97);
// 		}
// 	}
// 	return encrypted; 
// }

// $('#btn4').click(function() {
// 	$('.error4').html('');
// 	var textInput = $('#enter4').val();
// 	var numInput = $('#enter41').val();
	// numInput = parseInt(numInput);
// 	$('#result4').val(rotN(textInput,numInput));
// });









  














  



