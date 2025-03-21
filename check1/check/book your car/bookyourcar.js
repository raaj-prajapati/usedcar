document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add code here to handle form submission, such as sending booking details to the backend.
    // For demonstration purposes, let's log the form data to the console.
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    console.log(formDataObject);
});
