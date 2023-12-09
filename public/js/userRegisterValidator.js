console.log("Poniendo en marcha la validacion de userRegister")

window.onload = function () {
   
    // const inputRating = document.querySelector('input#rating');
    // const inputAwards = document.querySelector('input#awards');
    // const inputReleaseDate = document.querySelector('input#release_date');
    // const inputLength = document.querySelector('input#length');
    // const inputGenre = document.querySelector('select#genre_id');
  
  
    /**
     * Ver las diferencias entre elemento.onEvent y addeventListener
     */
  
    // codigo
  
      // inputTitle.onclick = function(){
      //   console.log('primer valor')
      // }
  
      // inputTitle.onclick = function(){
      //   console.log('segundo valor')
      // }
  
      // inputTitle.addEventListener('click', function(){
      //   console.log('primer valor')
      // });
  
      // inputTitle.addEventListener('click', function(){
      //   console.log('segundo valor')
      // })
  
  
  
    /**
     * Si el input está vacío agregar la clase "is-invalid"
     * sino remover is-invalid y agregar "is-valid"
     */
  
    // Realizar el código
  
    /**
     *   inputRating 
          inputReleaseDate
          inputLength
          inputGenre
     */
          function validarArchivo() {
            var inputArchivo = document.getElementById('avatar');
            var archivo = inputArchivo.files[0];
        
            if (archivo) {
              var nombreArchivo = archivo.name;
              var extensionPermitida = ['.jpg', '.jpeg', '.png'];
        
              var extension = nombreArchivo.slice(((nombreArchivo.lastIndexOf(".") - 1) >>> 0) + 2);
              if (extensionPermitida.includes('.' + extension.toLowerCase())) {
                console.log('Archivo válido');
              } else {
                console.log('Selecciona un archivo con una extensión válida: ' + extensionPermitida.join(', '));
                inputArchivo.value = '';
              }
            }
          }
          function validatePhone(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerT');
            var errorMessageElement = document.getElementById('errorMessageT');
          
            if (element.value.trim() === "") {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
          }
          // Name Validation
          function validateName(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerN');
            var errorMessageElement = document.getElementById('errorMessageN');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
            } else if (element.value.length < 2) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Nombre muy corto';
              errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
          }
          // Lastname Validation
          function validateLastName(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerLN');
            var errorMessageElement = document.getElementById('errorMessageLN');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
            } else if (element.value.length < 2) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Apellido muy corto';
              errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
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
            } else if (!isValidEmail(element.value)) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Debes escribir un formato de correo válido';       errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
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
            } else if (!validationResult.isValid) {
              element.classList.add('inputError');
              errorMessageElement.innerHTML = '<ul style="margin-left:20px;margin-top:5px">' +
      validationResult.errors.map(error => `<li>${error}</li>`).join('') +
      '</ul>';
              errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
          }
          function validatePasswordRewrite(element){
            var errorMessageContainer = document.getElementById('errorMessageContainerPR');
            var errorMessageElement = document.getElementById('errorMessagePR');
            var passValue = document.querySelector('#pass').value;
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
            } else if (element.value !== passValue) {
              element.classList.add('inputError');
              errorMessageElement.innerHTML = '<ul style="margin-left:20px;margin-top:5px;"><li>Las contraseñas no coinciden</li></ul>';
              errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
          }

          const inputName = document.querySelector('#firstname');
          const inputLastName = document.querySelector('#lastname');
          const inputEmail = document.querySelector('#email');
          const inputPhone = document.querySelector('#mobile');
          const inputPassword = document.querySelector('#pass');
          const inputArchivo = document.querySelector('#avatar');
          const inputConfirmPassword = document.querySelector('#confirmedPass');

          inputArchivo.addEventListener('change', validarArchivo);
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
    const createUser = document.querySelector('form');

    createUser.addEventListener( 'submit', function(e){

      const formulario = [...createUser.elements];

      formulario.pop();

      let thereErrors = false;

    //   formulario.forEach((element) =>{
    //     if(element.value.trim() === ""){
    //       element.classList.add('inputError');
    //       thereErrors = true;
    //     }else{
    //       element.classList.remove('inputError')
    //       element.classList.add('inputError')
  
    //     }
    //   })
  
      if(thereErrors === true){
        e.preventDefault();
      }
  
  
  
    } )
  
    
    
  }
  
  
  
  
  
  
  
  
  
  
  
  // createMovie.addEventListener('submit', (e) => {
  
  //   let formFields = [...createMovie.elements];
  //   formFields.pop();
  
  //   let areErrors = false;
  
  //   formFields.forEach((field) => {
  //     if (field.value.trim() === '') {
  //       field.classList.add('is-invalid');
  //       //   field.style.border = '1px solid red'
  //       areErrors = false;
  
  //     } else {
  //       field.classList.remove('is-invalid');
  //       field.classList.add('is-valid');
  
  //     }
  
  //   })
  
  //   if (areErrors) {
  //     console.log('Hay errores')
  //     e.preventDefault()
  //   }
  
  
  // });
  
  
  
  