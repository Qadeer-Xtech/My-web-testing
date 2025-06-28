document.addEventListener('DOMContentLoaded', function() {
    
    // --- RESPONSIVE NAVIGATION MENU ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Hamburger
        hamburger.classList.toggle('toggle');
    });


    // --- BACK TO TOP BUTTON ---
    const backToTopButton = document.getElementById("back-to-top-btn");

    // Show the button when the user scrolls down 200px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    backToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });


    // --- FORM SUBMISSION (from previous version) ---
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('name').value;
        if (name) { // Only show alert if a name is entered
            alert(`Thank you for your message, ${name}!`);
            form.reset();
        } else {
            alert('Please enter your name.');
        }
    });
});
