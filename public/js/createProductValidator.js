// window.addEventListener("load", function(){
//     let form = document.querySelector("#form.product");
//     let errors = [];
//     form.addEventListener("submit", function(event){
//         event.preventDefault();
//         console.log ("el campo nombre tiene que estar completo");
//         let title = document.querySelector("#title") 
//         if(title.value == ""){
             
//         }
        
//     })
// })

console.log("Poniendo en marcha la validacion de createProduct")

window.onload = function () {
  let thereErrors = true;
          function validateFile(element) {
            var inputFile = document.getElementById('image');
            var file = inputFile.files[0];
            var errorMessageContainer = document.getElementById('errorMessageContainerImg');
            var errorMessageElement = document.getElementById('errorMessageImg');
        
            if (file) {
              var filename = file.name;
              var allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        
              var extension = filename.slice(filename.lastIndexOf("."))
              if (allowedExtensions.includes(extension.toLowerCase())) {
                element.classList.remove('inputError');
                errorMessageElement.textContent = '';
                errorMessageContainer.style.opacity = 0;
                return false;
              } else {
                element.classList.add('inputError');
                errorMessageElement.textContent = 'Extensiones permitidas: jpg, jpeg, png, gif';
                errorMessageContainer.style.opacity = 1;
                inputFile.value = '';
                return true;
              }
            }
            return false;
          }
          // Name Validation
          function validateName(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerName');
            var errorMessageElement = document.getElementById('errorMessageName');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else if (element.value.length < 5) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Debe tener como minimo 5 carácteres';
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
          function validateContent(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerContent');
            var errorMessageElement = document.getElementById('errorMessageContent');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            } else if (element.value.length < 10 ) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Debe tener al menos 20 carácteres';
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
          function validateQuantity(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerQuantity');
            var errorMessageElement = document.getElementById('errorMessageQuantity');
            
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
          function validateSize(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerSize');
            var errorMessageElement = document.getElementById('errorMessageSize');
            
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
          function validatePrice(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerPrice');
            var errorMessageElement = document.getElementById('errorMessagePrice');
            
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
          function validateBrand(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerBrand');
            var errorMessageElement = document.getElementById('errorMessageBrand');
            
            if (element.value.trim().length === 0) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Campo obligatorio';
              errorMessageContainer.style.opacity = 1;
              return true;
            }else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
              return false;
            }
            return false;
          }
          function validateModelName(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainerModelName');
            var errorMessageElement = document.getElementById('errorMessageModelName');
            
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
          const inputName = document.querySelector('#title');
          const inputImage = document.querySelector('#image');
          const inputContent = document.querySelector('#content');
          const inputCategory = document.querySelector('#category');
          const inputQuantity = document.querySelector('#quantity');
          const inputSize = document.querySelector('#size');
          const inputPrice = document.querySelector('#price');
          const inputDiscount = document.querySelector('#discount');
          const inputBrand = document.querySelector('#brand');
          const inputGender= document.querySelector('#gender');
          const inputModelName= document.querySelector('#model_name');

          inputImage.addEventListener('change', function () {
            validateFile(this);
          });
          inputName.addEventListener('blur', function () {
            validateName(this);
          });
          inputContent.addEventListener('blur', function () {
            validateContent(this);
          });
          inputCategory.addEventListener('blur', function () {
            validateCategory(this);
          });
          inputQuantity.addEventListener('blur', function () {
            validateQuantity(this);
          });
          inputSize .addEventListener('blur', function () {
            validateSize(this);
          });
          inputPrice.addEventListener('blur', function () {
            validatePrice(this);
          });
          inputDiscount.addEventListener('blur', function () {
            validateDiscount(this);
          });
          inputBrand.addEventListener('blur', function () {
            validateBrand(this);
          });
          inputGender.addEventListener('blur', function () {
            validateGender(this);
          });
          inputModelName.addEventListener('blur', function () {
            validateModelName(this);
          });

    /*******  Formulario ********/

    function hasErrors() {
      return (
        validateFile(inputImage) ||
        validateName(inputName)
      );
    }

    const createProduct = document.querySelector('form');

    createProduct.addEventListener('submit', function (e) {
      // Verificar si hay errores antes de enviar el formulario
      if (hasErrors()) {
        e.preventDefault();
      }
    });
};