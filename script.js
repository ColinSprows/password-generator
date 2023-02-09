// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Character bank
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Generate password button function
function generatePassword() {

  // User chooses number of characters
  var characterChoice = prompt("Choose a length between 8-128 characters");
  if (characterChoice >= 8 && characterChoice <= 128) {
    console.log(characterChoice)
  } else {
    alert("Please choose a number between 8-128!")
  }

  // Confirm character types
  var lowercaseChoice = confirm("Would you like to include lowercase characters?");
  var uppercaseChoice = confirm("Would you like to include uppercase characters?");
  var numberChoice = confirm("Would you like to include numbers?");
  var specialChoice = confirm("Would you like to include special characters?");

  // User must select atleast one character type
  if (
    lowercaseChoice === false && 
    uppercaseChoice === false && 
    numberChoice === false && 
    specialChoice === false
  ) {
    alert("Please choose atleast one type")
    return null;
  }

  // Append character bank based on user prompt selections
  var charactersBank = [];
  if (lowercaseChoice) {
    charactersBank = charactersBank.concat(lowercase)
  }
  if (uppercaseChoice) {
    charactersBank = charactersBank.concat(uppercase)
  }
  if (numberChoice) {
    charactersBank = charactersBank.concat(number)
  }
  if (specialChoice) {
    charactersBank = charactersBank.concat(special)
  }
  console.log(charactersBank)

  // Generate password based on length and characters selected by user 
  var generatedPassword = "";
  for (var i = 0; i < characterChoice; i++) {
    var randomCharacter = charactersBank[Math.floor(Math.random() * charactersBank.length)]
    generatedPassword = generatedPassword + randomCharacter;
  }

  return generatedPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
