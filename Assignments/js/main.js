
// #1 - Function 1
$('#btn').click(function(){
	var myArray=["Item A","Item B","Item C"];
	var randomNumber=Math.floor(Math.random()*3);
	var finalArray = myArray[randomNumber];
	$('#result1').val(finalArray);
});

//#2 - Function 5
function randomPairing(inputArray){
	var finalArray = [];
	if (inputArray.length%2!=0){
		$(".error5").html("You must enter an even number of items\
		                   separated by commas");
	}else{
		$(".error5").html("");

		for (var i=0; i<inputArray.length; i++){
			var pairs = [];
			//For some reason I have to push a "[", but not a "]"
			//later as I'd expect.
			pairs.push('[');
			//"var newArray" randomly sorts "inputArray"
			//Note: I found the sort(0.5-math.random()) at 
			//Stack Overflow. I don't fully understand how it works.
			//http://stackoverflow.com/questions/21295162/javascript-randomly-pair-items-from-array-without-repeats
			var newArray = inputArray.sort(function(){
				return 0.5 - Math.random();
			});
			//Cut "newArray" in half starting at position 0
			//to create two arrays which will be used to pair w/each other.
			//http://stackoverflow.com/questions/9181188/splice-
			//an-array-in-half-no-matter-the-size
			var leftHalf = newArray.splice(0,newArray.length/2);
			var rightHalf = newArray;
			//Next, I run a loop to pair the two arrays' values
			//Source: http://bytes.com/topic/javascript/insights/699379-optimize-loops-compare-two-arrays
			for (var i in leftHalf){
				for (var j in rightHalf){
					pairs.push("["+leftHalf[j]+", "+rightHalf[j]+"]");
				}
				//The code above gives me two identical outputs right
				//next to each other so the following splits that in half.
				finalArray = ("[" + pairs.splice(0, pairs.length/2) + "]");
			}	
			//"pairs" is an object/array for future use, but
			//"finalArray" is a string for the html display
			console.log(typeof pairs);
			console.log(typeof finalArray);
			console.log(pairs);
			//verifying we can access pairs just like an array 
			console.log(pairs[1]);
			return finalArray;
		}
	}	
};

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
 });

//#3 - Function 6
$('#f6').click(function() {
	//The #enter6.val() is a string by default
	//since its a text box.  Hence, no 'typeof'
	// validation is needed.
	var sixInput = $('#enter6').val();
	if (sixInput===""){
		$(".error6").html("You must type something.");
	}else{
		$(".error6").html("");
	//I found I could have the .split and .join on the same line
	//from Daniel St. Clair's Day-9 github example.  Otherwise, I had
	//to define an extra variable for the ".join".
	var dashedString = sixInput.split('').join('-');
	$('#result6').val(dashedString);
	}
});

//#4 - Function 7
$('#f7').click(function() {
	var string = $('#enter7').val();
	if (string===""){
		$(".error7").html("You must type something.");
	}
	else{

		$(".error7").html("");
		var thisString='';
		for(var i=0; i<string.length; i++){
			//Adapted from Stackoverflow "Add a space between 
			//characters in a string [duplicate]".
			//As the string is iterated over, each character
			//place is concantenated with a "-".
			thisString += string.charAt(i)+"-";
			//"thisString" is a string where every character is
			//separated by a "-", but there is still one extra "-"
			//at the end.
			console.log(thisString);
		}
		//Since the above code gave us an extra "-" at the end, we need a new string.
		//This code uses .slice() and specifies that we want to start at place 0
		//,the first letter, and end at the penultimate character.
		thisString = thisString.slice(0, thisString.length-1);
		console.log(thisString);
		//Now we post the result, "thisString", in the html
		$('#result7').val(thisString);
	}
});


//#5 - Function 8
$('#f8').click(function() {
	var textInput1 = $('#enter8').val();
	var textInput2 = $('#enter8-1').val();
	//Concantinating the two input strings
	var combinedString = textInput1 + textInput2;
	console.log(combinedString);
	var thisString = '';
	var newString;
	if (textInput1===""||textInput2===""){
		$(".error8").html("You must type something in each box.");
	}
	else
	{
		$(".error8").html("");
		for(var i =0; i<combinedString.length; i++) {
	       	 thisString += combinedString.charAt(i)+"-";
	       	 console.log(thisString);
		}
		newString = thisString.slice(0, thisString.length-1);
		console.log(newString);
	}
	$('#result8').val(newString);
});



// The following code is taken from Travis Cwerz' Day-9 GitHub repository 
// with some minor adjustments on my part 
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









  














  



