// Assignment Code
var generateBtn = document.querySelector("#generate");

const random = Math.random

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    console.log("Hello world")
    return
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
