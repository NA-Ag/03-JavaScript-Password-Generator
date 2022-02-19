// Set the possible characters in a key-value list for ease of access.
const options = {
  upperCaseLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCaseLetter: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

// Random number generator will provide an index to find a specific character.
function randomCharacters(characters) {
  const randomIndex = Math.floor(Math.random()*characters.length);
  const items = characters[randomIndex];
  return items;
}

// Function will shuffle the array around to make the password random and thus more secure. 
function shuffleArray(array) {
  let currentIndex = array.length;
  while (0 !== currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    let temporary = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporary;
  }
  return array;
}

// Password function will validate all the user inputs to generate a desired output. 
function generatePassword() {
  document.body.innerHTML = document.body.innerHTML.replace(password, "Your Secure Password");
  let passwordArray = [];
  let passwordLength = window.prompt("How many characters do you want?: (Choose between 8 and 128)")
  let numberOfUpperCaseLetters = window.prompt("How many upper case letters do you want?: ");
  let numberOfLowerCaseLetters = window.prompt("How many lower case letters do you want?: ");
  let numberOfNumbers = window.prompt("How many numbers do you want?: ");
  let numberOfSymbols = window.prompt("How many special characters do you want?: ");

  if (passwordLength >= 8 && passwordLength <= 128) {
    if (0 < numberOfUpperCaseLetters)
      for (let i = 0; i < numberOfUpperCaseLetters; i++) {
        let array = options.upperCaseLetter;
        let result = randomCharacters(array);
        passwordArray.push(result)
      }
      
    if (0 < numberOfLowerCaseLetters)
      for (let i = 0; i < numberOfLowerCaseLetters; i++) {
        let array = options.lowerCaseLetter;
        let result = randomCharacters(array);
        passwordArray.push(result)
      }
      
    if (0 < numberOfNumbers)
      for (let i = 0; i < numberOfNumbers; i++) {
        let array = options.number;
        let result = randomCharacters(array);
        passwordArray.push(result) 
      }
      
    if (0 < numberOfSymbols)
      for (let i = 0; i < numberOfSymbols; i++) {
        let array = options.symbol;
        let result = randomCharacters(array);
        passwordArray.push(result)
      }
    
      passwordShuffled = shuffleArray(passwordArray);
      password = passwordArray.join("");
      let textAreaInHTML = document.getElementById('password');
      textAreaInHTML.value = password;
  } 
  
  else {
    window.alert("Invalid input");
  }
}
