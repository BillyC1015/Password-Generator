// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
// all of the var below are different characters that pop up and ask if the user wants them to be in the password the prompts will tell users to input a number between 8 and 128 and the confirms will make them choose yes or no
  var passwordLength = prompt("Please choose a length for you password between 8 and 128 characters")
  var chooseOne = confirm ("You must answer Ok to at lease one of the following")
  var chooseLowerCase = confirm ("Do you want lower case letters in your password?")
  var chooseUpperCase = confirm ("Do you want upper case letters in your password?")
  var characterType = confirm ("Do you want special characters in your password?")
  var characterTypeNumber = confirm ("Do you want numbers in your password?") 
  // the following will define the allCharacters variable 
  var allCharacters = ""
  // the two if statements regarding passwordLength will pop up if the password is too long or two short
  if (passwordLength <8) {
    console.log ("Password is too short")
  }
    if (passwordLength >128) {
      console.log ("Password is too long")
    }
    // the rest of the if statements add or take away characters depending on the responses to the prompts above
    if (chooseLowerCase) {
      allCharacters += "abcdefghijklmnopqrstuvwxyz"
    }
    if (chooseUpperCase) {
      allCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"      
    }
    if (characterType) {
      allCharacters += "!@#$%^&*()"
    }
    if (characterTypeNumber) {
      allCharacters += "1234567890"
    }
  for (let index = 0; index < passwordLength; index++) { 
    console.log (index)
    // the following creates the password by mixing everything together
   const randomIndex = math.floor(math.random() * allCharacters.passwordLength)
   password += allCharacters[randomIndex] 
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
