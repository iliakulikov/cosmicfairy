// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler with redirect to thank you page
const demoForm = document.getElementById('demoForm');
if (demoForm) {
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = demoForm.querySelector('.submit-btn');
        const formData = new FormData(demoForm);
        const action = demoForm.action;
        
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Submit to Google Sheets
        fetch(action, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            // Redirect to thank you page regardless of response
            window.location.href = 'thank-you.html';
        })
        .catch(error => {
            // Even on error, redirect to thank you page
            // The form data is likely still sent
            console.log('Form submitted');
            window.location.href = 'thank-you.html';
        });
    });
}

// Play button functionality (placeholder for future Spotify/SoundCloud integration)
document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Play button clicked');
        // In a real implementation, this would open a music player or streaming service
        alert('This would play the track. Connect to your music streaming service for full functionality.');
    });
});


