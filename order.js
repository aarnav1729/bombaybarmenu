// Ensure the DOM is loaded before accessing elements
window.addEventListener("DOMContentLoaded", function () {
  const orderSummaryText = document.querySelector("pre.order-summary-text");
  const contactInput = document.getElementById("contactInput");
  const nameField = document.getElementById("name");
  const phoneField = document.getElementById("phone");

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
  const upiImage = document.getElementById("upiImage");

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
  
  // Event listener for payment preference change
  const paymentPreferenceInputs = document.querySelectorAll('input[name="paymentPreference"]');
  const upiPaymentLink = document.getElementById("upiPaymentLink");

  function toggleUPIImage() {
    if (paymentPreferenceInputs[1].checked) {
      upiImage.classList.remove("hidden");
      upiPaymentLink.style.display = "block";
    } else {
      upiImage.classList.add("hidden");
      upiPaymentLink.style.display = "none";
    }
  }

  // Event listener for payment preference change
  paymentPreferenceInputs.forEach(function (input) {
    input.addEventListener("change", toggleUPIImage);
  });

  // Send order button click event
  sendOrderButton.addEventListener("click", function () {
    const deliveryPreference = deliveryPreferenceInputs[0].checked
      ? "Pickup"
      : "Delivery";
    const paymentPreference = paymentPreferenceInputs[0].checked ? "Cash" : "UPI";
    const name = nameField.value.trim();
    const phone = phoneField.value.trim();
    const address = addressField.value.trim();

    // Prepare the order message
    let orderMessage = orderSummary;
    orderMessage += `\n\nContact Information:\nName: ${name}\nPhone: ${phone}`;
    orderMessage += `\n\nDelivery Preference: ${deliveryPreference}`;
    if (deliveryPreference === "Delivery") {
      orderMessage += `\nAddress: ${address}`;
    }
    orderMessage += `\n\nPayment Preference: ${paymentPreference}`;
    
    // Send the order
    const phoneNumber = "+919573501100";
    const message = encodeURIComponent(orderMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, "_blank");

    if (paymentPreference === "UPI") {
      const orderTotal = calculateOrderTotal(selectedItems);
      const upiPaymentLink = generateGooglePayLink(orderTotal);
      if (upiPaymentLink) {
        // Open the UPI payment link in a new tab
        window.open(upiPaymentLink, "_blank");
      } 
      else {
        // Error handling if the UPI payment link is not generated
        alert("Failed to generate UPI payment link.");
      }
    }
  });

  // Download receipt button click event
  downloadReceiptButton.addEventListener("click", function () {
    const orderSummary = orderSummaryText.textContent;
    const fileName = "order_receipt.txt";
    const fileData = new Blob([orderSummary], { type: "text/plain" });

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(fileData);
    downloadLink.download = fileName;

    // Trigger the download
    downloadLink.click();

    // Clean up
    URL.revokeObjectURL(downloadLink.href);
  });

  // Clear the order summary from localStorage
  localStorage.removeItem("orderSummary");
});

// Function to calculate the order total
function calculateOrderTotal(selectedItems) {
  let orderTotal = 0;
  selectedItems.forEach(function (item) {
    orderTotal += item.price * item.quantity;
  });
  return orderTotal;
}

// Function to generate the Google Pay UPI payment link
function generateGooglePayLink(orderTotal) {
  // Replace the placeholders with your actual values for UPI payment
  const upiID = "<YOUR_UPI_ID>";
  const recipientName = "<RECIPIENT_NAME>";
  const merchantCode = "<MERCHANT_CODE>";
  const transactionID = "<TRANSACTION_ID>";
  const transactionRefID = "<TRANSACTION_REF_ID>";
  const transactionNote = "<TRANSACTION_NOTE>";
  const currencyCode = "<CURRENCY_CODE>";
  const returnURL = "<RETURN_URL>";
  const paymentMode = "<PAYMENT_MODE>";
  const signature = "<SIGNATURE>";

  // Generate the Google Pay UPI payment link with the order total amount
  const upiPaymentLink = `upi://pay?pa=${upiID}&pn=${recipientName}&mc=${merchantCode}&tid=${transactionID}&tr=${transactionRefID}&tn=${transactionNote}&am=${orderTotal}&cu=${currencyCode}&url=${returnURL}&mode=${paymentMode}&sign=${signature}`;

  return upiPaymentLink;
}
