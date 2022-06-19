// Assignment code here

//character arrays
var lowerCase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberSet = ["0","1","2","3","4","5","6","7","8","9",];
var specialSet = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

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


/* PSUEDOCODE */
/* if button is clicked, user is prompted for pw criteria
password criteria prompts would include:
  password length
    8-128 characters
  character types
    true/false for:
      lowercase
      uppercase
      numeric
      special characters
criteria prompts are complete, then user input should be validated
+ 1 character type to be selected (?)
then password is generated to match selected criteria
generated password displayed in an alert or written to page */