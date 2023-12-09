console.log("Poniendo en marcha la validacion de userRegister")

window.onload = function () {
  let thereErrors = true;
          function validateFile(element) {
            var inputFile = document.getElementById('avatar');
            var file = inputFile.files[0];
            var errorMessageContainer = document.getElementById('errorMessageContainerAv');
            var errorMessageElement = document.getElementById('errorMessageAv');
        
            if (file) {
              var filename = file.name;
              var allowedExtensions = ['.jpg', '.jpeg', '.png'];
        
              var extension = filename.slice(filename.lastIndexOf("."))
              if (allowedExtensions.includes(extension.toLowerCase())) {
                element.classList.remove('inputError');
                errorMessageElement.textContent = '';
                errorMessageContainer.style.opacity = 0;
                return false;
              } else {
                element.classList.add('inputError');
                errorMessageElement.textContent = 'Extensiones permitidas: jpg, jpeg, png';
                errorMessageContainer.style.opacity = 1;
                inputFile.value = '';
                return true;
              }
            }
            return false;
          }
          function validateGender(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerGen');
            var errorMessageElement = document.getElementById('errorMessageGen');
          
            if (element.value.trim() === "") {
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
            return false
          }
          function validatePhone(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerT');
            var errorMessageElement = document.getElementById('errorMessageT');
          
            if (element.value.trim() === "") {
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
          // Name Validation
          function validateName(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerN');
            var errorMessageElement = document.getElementById('errorMessageN');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else if (element.value.length < 2) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Nombre muy corto';
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
          // Lastname Validation
          function validateLastName(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerLN');
            var errorMessageElement = document.getElementById('errorMessageLN');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else if (element.value.length < 2) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Apellido muy corto';
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
          function isValidEmail(email) {
            return email.includes('@') && email.includes('.');
          }
          function isValidPassword(password) {
            var errors = [];
          
            // Verificar longitud mínima
            if (password.length < 8) {
              errors.push('La contraseña debe tener al menos 8 caracteres.');
            }
          
            // Verificar presencia de mayúscula
            if (!/[A-Z]/.test(password)) {
              errors.push('La contraseña debe contener al menos una letra mayúscula.');
            } else {
              // Eliminar el error si la condición se cumple
              errors = errors.filter(error => error !== 'La contraseña debe contener al menos una letra mayúscula.');
            }
          
            // Verificar presencia de minúscula
            if (!/[a-z]/.test(password)) {
              errors.push('La contraseña debe contener al menos una letra minúscula.');
            } else {
              // Eliminar el error si la condición se cumple
              errors = errors.filter(error => error !== 'La contraseña debe contener al menos una letra minúscula.');
            }
          
            // Verificar presencia de número
            if (!/\d/.test(password)) {
              errors.push('La contraseña debe contener al menos un número.');
            } else {
              // Eliminar el error si la condición se cumple
              errors = errors.filter(error => error !== 'La contraseña debe contener al menos un número.');
            }
          
            // Verificar presencia de carácter especial
            if (!/[!@#$%^&*]/.test(password)) {
              errors.push('La contraseña debe contener al menos un carácter especial (!@#$%^&*).');
            } else {
              // Eliminar el error si la condición se cumple
              errors = errors.filter(error => error !== 'La contraseña debe contener al menos un carácter especial (!@#$%^&*).');
            }
          
            // Devolver los errores encontrados
            return {
              isValid: errors.length === 0,
              errors: errors
            };
          };
          function validatePassword(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerP');
            var errorMessageElement = document.getElementById('errorMessageP');
            var validationResult = isValidPassword(element.value);
            
            console.log(validationResult.errors.join('\n'));
          
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else if (!validationResult.isValid) {
              element.classList.add('inputError');
              errorMessageElement.innerHTML = '<ul style="margin-left:20px;margin-top:5px">' +
      validationResult.errors.map(error => `<li>${error}</li>`).join('') +
      '</ul>';
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
          function validatePasswordRewrite(element){
            var errorMessageContainer = document.getElementById('errorMessageContainerPR');
            var errorMessageElement = document.getElementById('errorMessagePR');
            var passValue = document.querySelector('#pass').value;
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else if (element.value !== passValue) {
              element.classList.add('inputError');
              errorMessageElement.innerHTML = '<ul style="margin-left:20px;margin-top:5px;"><li>Las contraseñas no coinciden</li></ul>';
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

          const inputName = document.querySelector('#firstname');
          const inputLastName = document.querySelector('#lastname');
          const inputEmail = document.querySelector('#email');
          const inputPhone = document.querySelector('#mobile');
          const inputPassword = document.querySelector('#pass');
          const inputAvatar = document.querySelector('#avatar');
          const inputConfirmPassword = document.querySelector('#confirmedPass');
          const inputGender = document.querySelector('#gender');

          inputAvatar.addEventListener('change', function () {
            validateFile(this);
          });
          inputGender.addEventListener('blur', function () {
            validateGender(this);
          });
          inputPhone.addEventListener('blur', function () {
            validatePhone(this);
          });
          inputConfirmPassword.addEventListener('blur', function () {
            validatePasswordRewrite(this);
          });
          inputPassword.addEventListener('blur', function () {
            validatePassword(this);
          });
          inputEmail.addEventListener('blur', function () {
            validateEmail(this);
          });
          inputLastName.addEventListener('blur', function () {
            validateLastName(this);
          });
          inputName.addEventListener('blur', function () {
            validateName(this);
          });

    /*******  Formulario ********/

    function hasErrors() {
      return (
        validateFile(inputAvatar) ||
        validateGender(inputGender) ||
        validatePhone(inputPhone)||
        validatePasswordRewrite(inputConfirmPassword)||
        validatePassword(inputPassword)||
        validateEmail(inputEmail)||
        validateLastName(inputLastName)||
        validateName(inputName)
      );
    }

    const createUser = document.querySelector('form');

    createUser.addEventListener('submit', async function (e) {
      // Verificar si hay errores antes de enviar el formulario
      if (hasErrors()) {
        e.preventDefault();
      }
    });
};