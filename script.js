 // Get the form element
 const contactForm = document.getElementById('contactForm');
        
 // Add event listener to the form
 contactForm.addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form from submitting normally
     
     // Display the success alert
     alert('Message successfully sent to Pranish!');
 });