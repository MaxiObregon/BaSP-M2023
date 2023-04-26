window.onload = function(){

    var inputEmail = document.querySelector('#input-mail');

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
    
    
    /*VALIDACIÓN DE PASSWORD */
    var inputPassword = document.querySelector('input[name="input-pwd"]');
    
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

    
    var submitButton = document.querySelector('#submit-button');  
    submitButton.addEventListener('click', function() {
        if (inputEmail.value && inputPassword.classList.contains('green-border')) {
            alert('Email: ' + inputEmail.value + '\nPassword: ' + inputPassword.value);
        } else {
            alert('Please fill out both fields with valid values.');
        }
    });


}
