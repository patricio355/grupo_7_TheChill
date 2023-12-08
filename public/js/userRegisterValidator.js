console.log("Poniendo en marcha la validacion de userRegister")

window.onload = function () {
   
    const inputTitle = document.querySelector('#firstname');
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
    
          function validate(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainer');
            var errorMessageElement = document.getElementById('errorMessage');
          
            if (element.value.trim() === "") {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Error: Campo vacío';
              errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
          }
          
          function validateUser(element) {
            var errorMessageContainer = document.getElementById('errorMessageContainer');
            var errorMessageElement = document.getElementById('errorMessage');
          
            if (element.value.length < 2) {
              element.classList.add('inputError');
              errorMessageElement.textContent = 'Error: La longitud del texto es demasiado corta';
              errorMessageContainer.style.opacity = 1;
            } else {
              element.classList.remove('inputError');
              errorMessageElement.textContent = '';
              errorMessageContainer.style.opacity = 0;
            }
          }
          inputTitle.addEventListener('blur', function () {
              validateUser(this);
            validate(this);
          });
          
    //   inputRating.addEventListener('blur', validate);
    //   inputAwards.addEventListener('blur', validate);
    //   inputReleaseDate.addEventListener('blur', validate);
    //   inputLength.addEventListener('blur', validate);
    //   inputGenre.addEventListener('blur', validate);
  
  
  
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
  
  
  
  