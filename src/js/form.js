(() => {

    const input = document.querySelector(".form-input");
    const submitButton = document.querySelector(".form-button");
    

    input.addEventListener("input", () => {
      
        if (input.classList.contains("valid")) {
          
            submitButton.disabled = false;
        } else {
     
            submitButton.disabled = true;
        }
      });
   
})();
