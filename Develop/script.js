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

//generate string pw for writePassword() function and return
function generatePassword() {
  let password = '';
  //prompt for password length
  var passwordLength = prompt("How many chararacters would you like your password to contain?");
  // conditionals by confirm functions on length of pw (8-128 characters)
  if(passwordLength >=8 && passwordLength <= 128) {
    var upCase = confirm("Would you like uppercase letters in your password?");
    if(upCase == true) {
      var numberPick = confirm("Would you like numbers in your password?");
      if(numberPick == true) {
        var specialPick = confirm("Would you like special characters in your password?");
        if(specialPick == true) {
          // pw includes upper, lower, numbers, and special characters
          var allTrue = upperCase.concat(lowerCase, numberSet, specialSet);
            // for loop executes amount of times equal to the defined password length to generate randomly chosen characters from previously defined array
            for(var i = 0; i < passwordLength; i++) {
              characterNext = allTrue[Math.floor(Math.random() * Math.floor(allTrue.length))];
              password = password.toString()+characterNext.toString();
              console.log(password);
            }
        }
        else {
          // password includes upper, lower, and numbers (NOT special characters)
          var upLowNumTrue = upperCase.concat(lowerCase, numberSet);
          for(var i = 0; i < passwordLength; i++) {
            characterNext = upLowNumTrue[Math.floor(Math.random() * Math.floor(upLowNumTrue.length))];
            password = password.toString()+characterNext.toString();
            console.log(password);
          }
        }
      }
      else {
        var specialPick = confirm("Would you like special characters in your password?");
        if(specialPick == true) {
          // password includes upper, lower, and special characters (NOT number)
          var upLowSpecTrue = upperCase.concat(lowerCase, specialSet);
          for(var i = 0; i < passwordLength; i++) {
            characterNext = upLowSpecTrue[Math.floor(Math.random() * Math.floor(upLowSpecTrue.length))];
            password = password.toString()+characterNext.toString();
            console.log(password);
          }
        }
        else {
          // password includes upper and lower (NOT numbers OR special characters)
          var upLowTrue = upperCase.concat(lowerCase);
          for(var i = 0; i < passwordLength; i++) {
            characterNext = upLowTrue[Math.floor(Math.random() * Math.floor(upLowTrue.length))];
            password = password.toString()+characterNext.toString();
            console.log(password);
          }
        }
      }
    }
  }
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