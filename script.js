// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*",
      retPass = "";
  for (var i = 0, z = charset.length; i < length; ++i) {
      retPass += charset.charAt(Math.floor(Math.random() * z));
  }
  return retPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
