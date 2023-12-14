console.log("Poniendo en marcha la validacion de userRegister")

window.onload = function () {
  let thereErrors = true;
          function isValidEmail(email) {
            return email.includes('@') && email.includes('.');
          }
          function validateEmail(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerE');
            var errorMessageElement = document.getElementById('errorMessageE');
            console.log(isValidEmail(element.value))
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else if (!isValidEmail(element.value)) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Debes escribir un formato de correo válido';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
              return false;
            }
            return false;
          }
          function isEmptyPassword(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerP');
            var errorMessageElement = document.getElementById('errorMessageP');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
              return false;
            }
            return false;
          }
          
          const inputEmail = document.querySelector('#email');
          const inputPassword = document.querySelector('#pass');
          
          inputEmail.addEventListener('blur', function () {
            validateEmail(this);
          });
          inputPassword.addEventListener('blur', function () {
            isEmptyPassword(this);
          });

    /*******  Formulario ********/

    function hasErrors() {
      return (
        isEmptyPassword(inputPassword)||
        validateEmail(inputEmail)
      );
    }

    const userLogin = document.querySelector('form');

    userLogin.addEventListener('submit', async function (e) {
      // Verificar si hay errores antes de enviar el formulario
      if (hasErrors()) {
        e.preventDefault();
      }
    });
};