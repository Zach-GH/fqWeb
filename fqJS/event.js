window.onload = function() {
    // Get all events
    const events = document.querySelectorAll('.event');

    // Get overlay and registration form
    const overlay = document.querySelector('.registration-overlay');
    const registrationForm = overlay.querySelector('.registration-form');

    // Get registration form elements
    const registrationTitle = registrationForm.querySelector('h3');
    
    const registrationButton = registrationForm.querySelector('input[type="submit"]');
    const closeRegistrationButton = registrationForm.querySelector('.close-registration');

    // Add click event listener to each event
    events.forEach((event) => {
    event.addEventListener('click', () => {
        // Set registration form title and description
        registrationTitle.textContent = event.querySelector('.event-title').textContent;

        // Show overlay and registration form
        overlay.style.display = 'block';
        });
    });



    // Hide overlay and registration form when overlay is clicked or close button is clicked
    function hideOverlay() {
        overlay.style.display = 'none';
    }

    overlay.addEventListener('click', hideOverlay);
    closeRegistrationButton.addEventListener('click', hideOverlay);

    // Hide overlay and registration form when escape key is pressed
    document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideOverlay();
    }
    });

    // Handle registration form submission
    registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle form submission here
    hideOverlay();
    });
};

