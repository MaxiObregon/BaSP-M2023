window.onload = function(){


/*NAME VALIDATION*/
    var inputName = document.querySelector('#input-name');

    inputName.addEventListener('input', function() {
        var nameValue = this.value.trim();
        var nameValid = validateName(nameValue);
      
        if (nameValid) {
          this.classList.remove('red-border');
          this.classList.add('green-border');
        } else {
          this.classList.remove('green-border');
          this.classList.add('red-border');
        }
      });
      
      inputName.addEventListener('blur', function() {
        var nameValue = this.value.trim();
        var nameValid = validateName(nameValue);
      
        if (!nameValid) {
          var errorMessage = document.createElement('span');
          errorMessage.innerHTML = 'The name must contain at least 4 characters';
          errorMessage.classList.add('error-message');
          this.classList.add('red-border');
          this.parentNode.insertBefore(errorMessage, this.nextSibling);
        } else {
          this.classList.add('green-border');
        }
      });
      
      inputName.addEventListener('focus', function() {
        this.classList.remove('red-border');
        this.classList.remove('green-border');
        removeErrorMessage();
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
      
      function removeErrorMessage() {
        var errorMessages = document.querySelectorAll('.error-message');
      
        for (var i = 0; i < errorMessages.length; i++) {
          errorMessages[i].parentNode.removeChild(errorMessages[i]);
        }
      }
      
/*LAST NAME VALIDATION */
      
      
    

}
