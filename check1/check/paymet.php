<!DOCTYPE html> 
<html lang="en"> 
<head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Razorpay Payment</title> 
</head> 
<body> 
  <h1>Razorpay Payment</h1> 
   
  <label for="entreamount">Amount:</label> 
  <input type="number" id="entreamount" placeholder="Enter amount"><br><br> 
   
  <label for="enterName">Name:</label> 
  <input type="text" id="enterName" placeholder="Enter your name"><br><br> 
   
  <label for="enterAddress">Address:</label> 
  <input type="text" id="enterAddress" placeholder="Enter your address"><br><br> 
   
  <label for="enterModelName">Model Name:</label> 
  <input type="text" id="enterModelName" placeholder="Enter model name"><br><br> 
   
  <label for="enterEmail">Email:</label> 
  <input type="email" id="enterEmail" placeholder="Enter your email"><br><br> 
   
  <label for="entrePhoneNumber">Phone Number:</label> 
  <input type="text" id="entrePhoneNumber" placeholder="Enter your phone number"><br><br> 
   
  <button id="btnPay">Pay Now</button> 
 
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script> 
  <script> 
    const razorpay = new Razorpay({ 
      key_id: 'rzp_test_3R7vaA9lrfvQB4', // Your Razorpay key ID 
      key_secret: '', // Add your secret key here if needed 
    }); 
 
    function handlePayment() { 
      const options = { 
        amount: document.getElementById('entreamount').value * 100, // Amount in paisa/cents 
        currency: 'INR', // Change to your currency if not Indian Rupees 
        receipt: 'receipt#1', // Unique receipt identifier 
        payment_capture: 1, // Auto capture payment 
        name: document.getElementById('enterName').value, // Name 
        address: document.getElementById('enterAddress').value, // Address 
        email: document.getElementById('enterEmail').value, // Email 
        model_name: document.getElementById('enterModelName').value, // Model Name 
        'Phone Number': document.getElementById('entrePhoneNumber').value, // Phone Number 
        image: 'path/to/your/logo.png' // Replace with the path to your logo image 
      }; 
 
      razorpay.orders.create(options, function(err, order) { 
        if (err) { 
          // Handle error 
          console.error('Error creating order:', err); 
          return; 
        } 
        // If order creation is successful, proceed with payment 
        razorpay.createPayment(order, function(err, payment) { 
          if (err) { 
            // Handle error 
            console.error('Error creating payment:', err); 
            return; 
          } 
          // Payment successful 
          console.log('Payment successful:', payment); 
          // You can perform additional actions here such as updating UI or notifying the user 
        }); 
      }); 
    } 
 
    // Attach click event listener to payment button 
    document.getElementById('btnPay').addEventListener('click', handlePayment); 
  </script> 
</body> 
</html>