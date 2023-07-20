// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add an event listener to the order form
    const orderForm = document.querySelector("#order-form");
    if (orderForm) {
      orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Perform form validation and submission
        submitOrder();
      });
    }
  
    // Function to submit the order form
    function submitOrder() {
      // Get form input values
      const name = document.querySelector("#name").value;
      const address = document.querySelector("#address").value;
      const phone = document.querySelector("#phone").value;
  
      // Perform AJAX request to submit the order
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/submit-order", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // Handle successful response
            const response = JSON.parse(xhr.responseText);
            displayOrderConfirmation(response.message);
          } else {
            // Handle error
            console.error("Error submitting the order.");
          }
        }
      };
      const data = JSON.stringify({ name: name, address: address, phone: phone });
      xhr.send(data);
    }
  
    // Function to display the order confirmation message
    function displayOrderConfirmation(message) {
      const confirmationMessage = document.querySelector("#order-confirmation-message");
      if (confirmationMessage) {
        confirmationMessage.textContent = message;
      }
    }
  });
  