<?php
// Include Razorpay PHP SDK
require_once 'razorpay-php/Razorpay.php';

// Your Razorpay API Key and Secret
$keyId = 'rzp_test_SICJqE4TX3p0UC';
$keySecret = 'Rnk3vYqvZ79OSXnlt751dZWf';


// Initialize Razorpay client
use Razorpay\Api\Api;
$api = new Api($keyId, $keySecret);

// Fetch appointment details from the request
$postData = json_decode(file_get_contents('php://input'), true);
$name = $postData['name'];
$email = $postData['email'];
// Other appointment details

// Create Razorpay order
$order = $api->order->create([
    'amount' => 50000, // Amount in paisa (Example: 50000 = ₹500.00)
    'currency' => 'INR',
    'receipt' => 'appointment_' . time(), // Unique identifier for the order
    'payment_capture' => 1 // Auto-capture payment
]);

// Return order details as JSON response
echo json_encode([
    'id' => $order->id,
    'amount' => $order->amount
]);
?>
