document.querySelector('form').addEventListener('submit', function(event) {
    alert('Thank you for reaching out! I will get back to you soon.');
    event.preventDefault(); // Prevents actual form submission for demo purposes
});
