document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add code here to handle form submission, like sending an email to the dealer.
    // For demonstration purposes, let's log the form data to the console.
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    console.log(formDataObject);
});
