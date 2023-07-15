// Ensure the DOM is loaded before accessing elements
window.addEventListener("DOMContentLoaded", function () {
    const orderSummaryText = document.querySelector("pre.order-summary-text");
  
    // Retrieve the order summary from localStorage
    const orderSummary = localStorage.getItem("orderSummary");
  
    // Check if order summary exists and update the text content
    if (orderSummary) {
      orderSummaryText.textContent = orderSummary;
    } else {
      orderSummaryText.textContent = "Order summary not found.";
    }
  
    const deliveryPreferenceInputs = document.querySelectorAll(
      'input[name="deliveryPreference"]'
    );
    const addressInput = document.getElementById("addressInput");
    const addressField = document.getElementById("address");
    const sendOrderButton = document.getElementById("sendOrderButton");
    const downloadReceiptButton = document.getElementById("downloadReceiptButton");
  
    // Toggle address input based on delivery preference
    function toggleAddressInput() {
      if (deliveryPreferenceInputs[1].checked) {
        addressInput.style.display = "block";
      } else {
        addressInput.style.display = "none";
      }
    }
  
    // Event listener for delivery preference change
    deliveryPreferenceInputs.forEach(function (input) {
      input.addEventListener("change", toggleAddressInput);
    });
  
    // Send order button click event
    sendOrderButton.addEventListener("click", function () {
      const deliveryPreference = deliveryPreferenceInputs[0].checked
        ? "Pickup"
        : "Delivery";
      const address = addressField.value.trim();
  
      // Prepare the order message
      let orderMessage = orderSummary;
      orderMessage += `\n\nDelivery Preference: ${deliveryPreference}`;
      if (deliveryPreference === "Delivery") {
        orderMessage += `\nAddress: ${address}`;
      }
  
      // Send the order
      const phoneNumber = "+919849015550";
      const message = encodeURIComponent(orderMessage);
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
      window.open(whatsappURL, "_blank");
    });
  
    // Download receipt button click event
    downloadReceiptButton.addEventListener("click", function () {
      const filename = "order_receipt.txt";
      const textContent = orderSummary;
  
      // Create a temporary element to trigger the download
      const element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(textContent));
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  
    // Clear the order summary from localStorage
    localStorage.removeItem("orderSummary");
  });  
