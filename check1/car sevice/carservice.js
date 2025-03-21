document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedService = document.getElementById('service').value;
    const serviceCosts = {
      "Oil Change": 50,
      "Tire Rotation": 30,
      "Brake Inspection": 40,
      "Car Wash": 20
    };
  
    const serviceCost = serviceCosts[selectedService];
    if (serviceCost !== undefined) {
      const confirmationMessage = document.getElementById('confirmationMessage');
      const costMessage = document.getElementById('costMessage');
      
      confirmationMessage.textContent = `You have booked ${selectedService}.`;
      costMessage.textContent = `Cost: $${serviceCost}`;
  
      document.getElementById('confirmation').style.display = 'block';
    }
  });
  