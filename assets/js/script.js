const options = {
  letter: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}


function randomCharacters(characters) {
  const randomIndex = Math.floor(Math.random()*characters.length);
  const items = characters[randomIndex];
  return items;
}

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

function generatePassword() {
  document.body.innerHTML = document.body.innerHTML.replace(password, "Your Secure Password");
  let passwordArray = [];
  let numberOfLetters = window.prompt("How many letters do you want?: ");
  let numberOfNumbers = window.prompt("How many numbers do you want?: ");
  let numberOfSymbols = window.prompt("How many special characters do you want?: ");
  if (0 < numberOfLetters) 
    for (let i = 0; i < numberOfLetters; i++) {
      let array = options.letter;
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
