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

    if (8 <= length_Choice <= 128) {
      for (var i = 0; i < length_Choice; i++) {
        
        // Include Lowercase
        var userChoice = window.prompt("Include Lowercase Letters?:(Y/N)");
        if (userChoice.upperCase === "Y") {
          Lowercase_Choice = userChoice
          function lowerCase() {
            return Possible_Characters.Lower_Case[Math.floor(Math.random() * Possible_Characters.Lower_Case.length)];
          };
          lowerCase();
        }
        
        // Include Uppercase
        var userChoice = window.prompt("Include Uppercase Letters?:(Y/N)");
        if (userChoice.upperCase === "Y") {
          Uppercase_Choice = userChoice
          function upperCase() {
            return Possible_Characters.Upper_Case[Math.floor(Math.random() * Possible_Characters.Upper_Case.length)];
          };
          upperCase();
        }
        
        // Include Numbers
        var userChoice = window.prompt("Include Numbers?:(Y/N)");
        if (userChoice.upperCase === "Y") {
          Numbers_Choice = userChoice  
          function number() {
            return Possible_Characters.number[Math.floor(Math.random() * keys.number.length)];
          };
          number();
        }  
        
        // Include Special characters
        var userChoice = window.prompt("Include Special Characters?:(Y/N)");
        if (userChoice.upperCase === "Y") {
          SpecialChar_Choice = userChoice  
          function symbol() {
            return Possible_Characters.symbol[Math.floor(Math.random() * keys.symbol.length)];
          };
          symbol();
        }  
      } 
    }
  };
  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
