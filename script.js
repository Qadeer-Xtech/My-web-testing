document.addEventListener('DOMContentLoaded', function() {
    
    // --- RESPONSIVE NAVIGATION MENU ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    // --- DARK MODE TOGGLE (NOW IN HEADER) ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // --- NEW: LOAD RANDOM PHOTO ---
    const randomPhoto = document.getElementById('random-photo');
    // We use picsum.photos to get a random image. The query string ensures we get a new one each time.
    randomPhoto.src = 'https://picsum.photos/400/250?random=' + new Date().getTime();


    // --- TEXT COPIER BUTTON ---
    const copyTextBtn = document.getElementById('copy-text-btn');
    copyTextBtn.addEventListener('click', () => {
        const textToCopy = document.getElementById('text-to-copy');
        navigator.clipboard.writeText(textToCopy.value).then(() => {
            alert("Text copied to clipboard!");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    // --- TIKTOK DOWNLOADER (DEMO) BUTTON ---
    const tiktokDownloadBtn = document.getElementById('tiktok-download-btn');
    tiktokDownloadBtn.addEventListener('click', () => {
        const tiktokUrl = document.getElementById('tiktok-url').value;
        if (tiktokUrl) {
            alert("This is a UI demonstration. A real downloader requires a back-end server to work!");
        } else {
            alert("Please paste a TikTok URL first.");
        }
    });

    // --- BACK TO TOP BUTTON ---
    // (This code remains the same)
    const backToTopButton = document.getElementById("back-to-top-btn");
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
    backToTopButton.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    // --- FORM SUBMISSION ---
    // (This code remains the same)
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('name').value;
        if (name) {
            alert(`Thank you for your message, ${name}!`);
            form.reset();
        } else {
            alert('Please enter your name.');
        }
    });
});

