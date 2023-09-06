document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page reload on form submission
  
      const emailInput = loginForm.elements.email;
      const passwordInput = loginForm.elements.password;
  
      if (emailInput.value.trim() === "" || passwordInput.value === "") {
        alert("Todos los campos deben ser rellenados.");
      } else {
        const formData = {
          email: emailInput.value,
          password: passwordInput.value
        };
  
        console.log(formData);
  
        // Reset form fields
        loginForm.reset();
      }
    });
  });