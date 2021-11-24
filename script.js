// Assignment Code
var generateBtn = document.querySelector("#generate");

const random = Math.random

const Possible_Characters = {
  Upper_Case: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  Lower_Case: "abcdefghijklmnopqrstuvwxyz",
  Number: "0123456789",
  Symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // Password Parameters taken here
  function generatePassword() {

    // Length of the password
    var userChoice = window.prompt("Enter length: (min length 8, Max length 128)");
    length_Choice = userChoice
    if (!(8 <= length_Choice && length_Choice <= 128)) {
      return;
    }

    var userChoice = window.prompt("Include Lowercase Letters?:(Y/N)");
    Lowercase_Choice = userChoice
    var userChoice = window.prompt("Include Uppercase Letters?:(Y/N)");
    Uppercase_Choice = userChoice
    var userChoice = window.prompt("Include Numbers?:(Y/N)");
    Numbers_Choice = userChoice  
    var userChoice = window.prompt("Include Special Characters?:(Y/N)");
    SpecialChar_Choice = userChoice  

    
    if (8 <= length_Choice && length_Choice <= 128) {
      for (var i = 0; i < length_Choice; i++) {
        
        // Include Lowercase
        if (userChoice.upperCase === "Y") {
          function lowerCase() {
            return Possible_Characters.Lower_Case[Math.floor(Math.random() * Possible_Characters.Lower_Case.length)];
          };
          lowerCase();
        }
        
        // Include Uppercase
        if (userChoice.upperCase === "Y") {
          function upperCase() {
            return Possible_Characters.Upper_Case[Math.floor(Math.random() * Possible_Characters.Upper_Case.length)];
          };
          upperCase();
        }
        
        // Include Numbers
        if (userChoice.upperCase === "Y") {
          function number() {
            return Possible_Characters.number[Math.floor(Math.random() * keys.number.length)];
          };
          number();
        }  
        
        // Include Special characters
        if (userChoice.upperCase === "Y") {
          function symbol() {
            return Possible_Characters.symbol[Math.floor(Math.random() * keys.symbol.length)];
          };
          symbol();
        }  
      } 
    }
  };
  
  generatePassword();

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
