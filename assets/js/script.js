// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

    // Global variable declaration
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let characters = "!@#$%^&*()_+}{|~[]\=-><";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let desiredCharacters = "";
    let finalPassword = "";
    
    // Prompts user for desired length of password and will alert / ask again if its not in between 8 - 128
    let passwordLength = window.prompt("How many characters would you like?\n(8-128)");
    while (passwordLength < 8 || passwordLength > 128 ){
        if (!passwordLength) {
        finalPassword = "Password creation aborted!";
        return finalPassword;
        }
        window.alert("Please enter a number between 8 - 128!");
        passwordLength = window.prompt("How many characters would you like?\n(8-128)");   
    }
    do {
        if (passwordLength) {
        // If user would like to use uppercase then it will add the uppercase string to the desiredCharacters variable
        let confirmUppercase = window.confirm("Would you like to include uppercase characters?");
        if (confirmUppercase) {
            desiredCharacters = uppercase.concat(desiredCharacters);
        }
        // If user would like to use special characters then it will add the chracters string to the desiredCharacters variable
        let confirmCharacters = window.confirm("Would you like to include special characters/symbols?");
        if (confirmCharacters) {
            desiredCharacters = characters.concat(desiredCharacters);
        }
        // If user would like to use lowercase then it will add the lowercase string to the desiredCharacters variable
        let confirmLowercase = window.confirm("Would you like to include lowercase characters?");
        if (confirmLowercase) {
            desiredCharacters = lowercase.concat(desiredCharacters);
        }
        // If user would like to use numbers then it with add the numbers variable to the desiredCharacters variable
        let confirmNumbers = window.confirm("Would you like to include numbers?");
        if (confirmNumbers) {
            desiredCharacters = numbers.concat(desiredCharacters);
        }
        if (desiredCharacters.length < 1) {
            window.alert("You must select atleast 1 type of character!");
        } 
    } 
    } while (desiredCharacters < 1);
    
    // This will grab a random character out of the desiredCharacters variable and add it to finalPassword until it is the same length as passwordLength
    while (finalPassword.length < passwordLength) {
        let randomNumber = Math.floor(Math.random() * desiredCharacters.length);
        let randomChar = desiredCharacters.charAt(randomNumber);
        finalPassword = finalPassword + randomChar;
    }
    console.log(finalPassword);
    return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
