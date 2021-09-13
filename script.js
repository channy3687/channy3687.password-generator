// Assignment code here

// variables
var ConfirmLength;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacters;
var password;

//Password Options
//Special Characters
confirmSpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Numbers
confirmNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Letters
confirmLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

confirmUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
;

//Generate password
function generatePassword() {
    var confirmLength = (prompt("How many characters would you like your password? Choose between 8 and 128"));
if(confirmLength < 8 || confirmLength > 128){
//Error message
    alert("Error. Please choose a number between 8 - 128")

var confirmLength = (prompt("How many many characters will your password have"));
}

//Confirm password length
alert('The length of your password will be '+ confirmLength +' long.');
}

//confirm number, upper/lower case, special character

var confirmLowercase = function() {
	// prompt to choose whether or not to include lowercase characters
	confirmLowercase = window.prompt("Do you want to include lowercase characters? Select 'ok' for yes and 'cancel' for no.");
	confirmLowercase = confirmLowercase.toLowerCase();
	if (confirmLowercase === "yes") {
		window.alert("You have chosen to include lowercase characters.");
		confirmLowercase = true;
	}
	else if (confirmLowercase === "no") {
		window.alert("You have chosen not to include lowercase characters.");
		confirmLowercase = false;
	}
}

var confirmUppercase = function(){
	// prompt to choose whether or not to include uppercase characters
	confirmUppercase = window.prompt("Do you want to include uppercase characters? Select 'ok' for yes and 'cancel' for no.");
	confirmUppercase = confirmUppercase.toUpperCase();
	if (confirmUppercase === "yes") {
		window.alert("You have chosen to include uppercase characters.");
		confirmUppercase = true;
	}
	else if (confirmUppercase === "no") {
		window.alert("You have chosen not to include uppercase characters.");
		confirmUppercase = false;
	}
}

    var confirmSpecialCharacters = function (){
        // prompt to choose whether or not to include Special characters
        confirmSpecialCharacters = window.prompt("Do you want to include special characters? Select 'ok' for yes and 'cancel' for no.");
        confirmSpecialCharacters = confirmSpecialCharacters.tospecialcharacters();
        if (confirmSpecialCharacters === "yes") {
            window.alert("You have chosen to include special characters.");
            confirmSpecialCharacters = true;
        }
        else if (confirmSpecialCharacters === "no") {
            window.alert("You have chosen not to include special characters.");
            confirmSpecialCharacters = false;
        }
    }
    
var confirmNumber = function() {
	// prompt to choose whether or not to include numbers
	confirmNumber = window.prompt("Do you want to include numbers? Select 'ok' for yes and 'cancel' for no.");
	confirmNumber = confirmNumber.toConfirmNumber  ();
	if (confirmNumber === "yes") {
		window.alert("You have chosen to include numbers.");
		confirmNumber= true;
	}
	else if (confirmNumber === "no") {
		window.alert("You have chosen not to include numbers.");
		confirmNumber = false;
	}
}
//Random 
for (var i = 0; i < enter; i++) {
    var password = password[Math.floor(Math.random() * password.length)];
    password.push(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);