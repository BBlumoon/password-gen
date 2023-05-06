// Assignment code here
var specialChar = '!@#$%^&*()'
var numbers = '123456789'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function generatePassword() {
  var array = ''
  var password = ''

  if(document.getElementById('upperCase').checked) {
    array += upperCase
  }

  if(document.getElementById('lowerCase').checked) {
    array += lowerCase
  }

  if(document.getElementById('numbers').checked) {
    array += numbers
  }

  if(document.getElementById('specialChar').checked) {
    array += specialChar
  }

  if(array == '')
  password = 'Must pick at least one character type'

  else {
    for (let i = 0; i < 10; i++) {
      password += array[Math.floor(Math.random() * array.length)]
    }
  }
document.getElementById('password').value = password;
console.log('it works')
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);