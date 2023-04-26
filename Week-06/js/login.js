window.onload = function(){


/*NAME VALIDATION*/ /*SACAR ERROR MESSAGE EN FOCUS */
var inputName = document.querySelector('#input-name');

inputName.addEventListener('input', function() {
  var name = this.value.trim();
  var nameValidation = validateName(name);

  if (nameValidation) {
    this.classList.remove('red-border');
    this.classList.add('green-border');
  } else {
    this.classList.remove('green-border');
    this.classList.add('red-border');
  }
});

inputName.addEventListener('blur', function() {
  var name = this.value.trim();
  var nameValidation = validateName(name);

  if (!nameValidation) {
    var errorMessage1 = document.createElement('span');
    errorMessage1.innerHTML = 'The name must contain at least 4 characters';
    errorMessage1.classList.add('error-message');
    this.classList.add('red-border');
    this.parentNode.insertBefore(errorMessage1, this.nextSibling);
  } else {
    this.classList.add('green-border');
  }
});

inputName.addEventListener('focus', function() {
  this.classList.remove('red-border');
  this.classList.remove('green-border');
});

function validateName(name) {
  var nameLength = name.length;

  if (nameLength < 4) {
    return false;
  }

  var hasOnlyLetters = true;

  for (var i = 0; i < nameLength; i++) {
    var character = name.charAt(i);

    if (!isLetter(character)) {
      hasOnlyLetters = false;
      break;
    }
  }

  return hasOnlyLetters;
}

function isLetter(character) {
  var code = character.charCodeAt(0);

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return true;
  } else {
    return false;
  }
}
      
/*LAST NAME VALIDATION */ /*SACAR ERROR MESSAGE EN FOCUS */
  var inputLastname = document.querySelector('#input-lastname');

  inputLastname.addEventListener('input', function() {
      var lastNameValue = this.value.trim();
      var lastNameValidation = validateLastname(lastNameValue);
    
      if (lastNameValidation) {
        this.classList.remove('red-border');
        this.classList.add('green-border');
      } else {
        this.classList.remove('green-border');
        this.classList.add('red-border');
      }
    });
    
    inputLastname.addEventListener('blur', function() {
      var lastNameValue = this.value.trim();
      var lastNameValidation = validateLastname(lastNameValue);
    
      if (!lastNameValidation) {
        var errorMessage2 = document.createElement('span');
        errorMessage2.innerHTML = 'The name must contain at least 4 characters';
        errorMessage2.classList.add('error-message');
        this.classList.add('red-border');
        this.parentNode.insertBefore(errorMessage2, this.nextSibling);
      } else {
        this.classList.add('green-border');
      }
    });
    
    inputLastname.addEventListener('focus', function() {
      this.classList.remove('red-border');
      this.classList.remove('green-border');
      removeErrorMessage2();
    });
    
    function validateLastname(name) {
      var lastNameLength = name.length;
    
      if (lastNameLength < 4) {
        return false;
      }
    
      var lettersOnly = true;
    
      for (var i = 0; i < lastNameLength; i++) {
        var caracter = name.charAt(i);
    
        if (!isLetter(caracter)) {
          lettersOnly = false;
          break;
        }
      }
    
      return lettersOnly;
    }
    
    function isLetter(caracter) {
      var check = caracter.charCodeAt(0);
    
      if ((check >= 65 && check <= 90) || (check >= 97 && check <= 122)) {
        return true;
      } else {
        return false;
      }
    }
    
    function removeErrorMessage() {
      var errorMessages = document.querySelectorAll('.error-message');
    
      for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].parentNode.removeChild(errorMessages[i]);
      }
    }
  
/*DNI VALIDATION */
  var inputDNI = document.querySelector('#input-DNI');

  inputDNI.addEventListener('input', function() {
      var dni = this.value.trim();
      var dniValidation = validateDNI(dni);

      if (dniValidation) {
          this.classList.remove('red-border');
          this.classList.add('green-border');
      } else {
          this.classList.remove('green-border');
          this.classList.add('red-border');
      }
  });

  inputDNI.addEventListener('blur', function() {
      var dni2 = this.value.trim();
      var dniValidation2 = validateDNI(dni);

      if (dniValidation) {
          this.classList.add('green-border');
      } else {
          this.classList.add('red-border');
          createErrorMessage('The DNI must contain only 8 numbers.');
      }
  });

  inputDNI.addEventListener('focus', function() {
      this.classList.remove('red-border');
      this.classList.remove('green-border');
      removeErrorMessage();
  });

  function validateDNI(dni) {
      if (/^\d{8}$/.test(dni)) {
          return true;
      } else {
          return false;
      }
  }

  function createErrorMessage(message) {
      var dniErrorMesage = document.createElement('span');
      dniErrorMesage.innerText = message;
      dniErrorMesage.classList.add('error-message');
      inputDNI.parentNode.appendChild(dniErrorMesage);
  }

  function removeErrorMessage() {
      var dniErrorMesage2 = document.querySelector('.error-message');
      if (dniErrorMesage2) {
          inputDNI.parentNode.removeChild(dniErrorMesage2);
      }
  }




/*EMAIL VALIDATION*/ /*PRONTO */
var inputEmail = document.querySelector('#input-email');

inputEmail.addEventListener('blur', function() {
    var emailValue = this.value.trim();
    var emailValid = validateEmail(emailValue);

    if (!emailValid) {
      var errorMessage = document.createElement('span');
      errorMessage.innerHTML = 'Enter a valid email address';
      errorMessage.classList.add('error-message');
      this.classList.add('red-border');
      this.parentNode.insertBefore(errorMessage, this.nextSibling);
    } else {
      this.classList.add('green-border');
    }
});

inputEmail.addEventListener('focus', function() {
    var errorMessage = this.parentNode.querySelector('.error-message');
    if (errorMessage) {
      this.parentNode.removeChild(errorMessage);
      this.classList.remove('red-border');
      this.classList.remove('green-border');
    }
});
function validateEmail(email) {
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}


/*PASSWORD VALIDATION */ /*PRONTO */
    var inputPassword = document.querySelector('#input-password');
    
    inputPassword.addEventListener('input', function() {
        var passwordValue = this.value.trim();
        var passwordValid = validatePassword(passwordValue);
    
        if (passwordValid) {
            this.classList.remove('red-border');
            this.classList.add('green-border');
        } else {
            this.classList.remove('green-border');
            this.classList.add('red-border');
        }
    });
    
    inputPassword.addEventListener('blur', function() {
        var passwordValue = this.value.trim();
        var passwordValid = validatePassword(passwordValue);
    
        if (passwordValid) {
            this.classList.add('green-border');
        } else {
            this.classList.add('red-border');
            createErrorMessage('The password must contain at least 8 alphanumeric characters.');
        }
    });
    
    inputPassword.addEventListener('focus', function() {
        this.classList.remove('red-border');
        this.classList.remove('green-border');
        removeErrorMessage();
    });
    
    function validatePassword(password) {
        var passwordLength = password.length;
        var hasNumber = false;
        var hasLetter = false;
    
        if (passwordLength < 8) {
            return false;
        }
    
        for (var i = 0; i < passwordLength; i++) {
            var character = password.charAt(i);
    
            if (!isNaN(character)) {
                hasNumber = true;
            } else if (character.match(/[a-z]/i)) {
                hasLetter = true;
            }
        }
    
        return hasNumber && hasLetter;
    }
    
    function createErrorMessage(message) {
        var errorMessage = document.createElement('span');
        errorMessage.innerText = message;
        errorMessage.classList.add('error-message');
        inputPassword.parentNode.appendChild(errorMessage);
    }
    
    function removeErrorMessage() {
        var errorMessage = document.querySelector('.error-message');
        if (errorMessage) {
            inputPassword.parentNode.removeChild(errorMessage);
        }
    }

    

/*VALIDATION REPEAT PASSWORD */  /*PRONTO */
  var inputRepeatpassword = document.querySelector('#input-repeatpassword');
      
  inputRepeatpassword.addEventListener('input', function() {
      var resetPasswordValue = this.value.trim();
      var resetPasswordValid = validatePassword(resetPasswordValue);

      if (resetPasswordValid) {
          this.classList.remove('red-border');
          this.classList.add('green-border');
      } else {
          this.classList.remove('green-border');
          this.classList.add('red-border');
      }
  });

  inputRepeatpassword.addEventListener('blur', function() {
      var resetPasswordValue = this.value.trim();
      var resetPasswordValid = validatePassword(resetPasswordValue);

      if (resetPasswordValid) {
          this.classList.add('green-border');
      } else {
          this.classList.add('red-border');
          createErrorMessage('The password must contain at least 8 alphanumeric characters.');
      }
  });

  inputRepeatpassword.addEventListener('focus', function() {
      this.classList.remove('red-border');
      this.classList.remove('green-border');
      removeErrorMessage();
  });

  function validatePassword(password) {
      var rpwdLength = password.length;
      var rpwdNumber = false;
      var rpwdLetter = false;

      if (rpwdLength < 8) {
          return false;
      }

      for (var i = 0; i < rpwdLength; i++) {
          var character = password.charAt(i);

          if (!isNaN(character)) {
              rpwdNumber = true;
          } else if (character.match(/[a-z]/i)) {
              rpwdLetter = true;
          }
      }

      return rpwdNumber && rpwdLetter;
  }

  function createErrorMessage(message) {
      var errorMessage11 = document.createElement('span');
      errorMessage11.innerText = message;
      errorMessage11.classList.add('error-message');
      inputRepeatpassword.parentNode.appendChild(errorMessage11);
  }

  function removeErrorMessage() {
      var errorMessage11 = document.querySelector('.error-message');
      if (errorMessage11) {
          inputRepeatpassword.parentNode.removeChild(errorMessage11);
      }
  }




}
