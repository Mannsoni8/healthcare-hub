document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    
    console.log('Feedback submitted:', { name, email, feedback });
    
    alert('Thank you for your feedback!');
    
    // Reset the form
    document.getElementById('feedbackForm').reset();
    
    // Redirect to home page
    window.location.href = 'index.html';
});
