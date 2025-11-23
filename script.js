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

// Form submission handler
const demoForm = document.getElementById('demoForm');
if (demoForm) {
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            link: document.getElementById('link').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show a confirmation
        console.log('Demo submission:', formData);
        
        // Show success message
        alert('Thank you for your submission! We will review your demo and get back to you soon.');
        
        // Reset form
        demoForm.reset();
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


