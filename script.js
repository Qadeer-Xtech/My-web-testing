document.addEventListener('DOMContentLoaded', function() {
    
    // --- FULLSCREEN NAVIGATION MENU ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        });
    });

    // --- DARK MODE TOGGLE ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // --- TIKTOK DOWNLOADER ---
    const downloadBtn = document.getElementById('tiktok-download-btn');
    const urlInput = document.getElementById('tiktok-url');
    const resultDiv = document.getElementById('downloader-result');

    downloadBtn.addEventListener('click', () => {
        const videoUrl = urlInput.value.trim();
        if (videoUrl) {
            downloadTikTokVideo(videoUrl);
        } else {
            resultDiv.innerHTML = `<p style="color: red;">Please paste a TikTok URL first.</p>`;
        }
    });

    async function downloadTikTokVideo(url) {
        // --- IMPORTANT! GET YOUR KEY ---
        // 1. Go to a site like RapidAPI.com and search for "TikTok Downloader".
        // 2. Subscribe to a free API.
        // 3. Get your 'X-RapidAPI-Key' and paste it below.
        const apiKey = 'AIzaSyDPO1sHoIozWOOx5Ie2qE6OH-7LKI0f228'; // <-- PASTE YOUR KEY HERE

        // This example uses the "TikTok Video Downloader" API from RapidAPI
        const apiHost = 'tiktok-video-downloader-unofficial.p.rapidapi.com';
        const apiUrl = `https://tiktok-video-downloader-unofficial.p.rapidapi.com/getVideo?url=${encodeURIComponent(url)}`;
        
        if (apiKey === 'YOUR_API_KEY_HERE') {
            resultDiv.innerHTML = `<p style="color: orange;">API Key is missing. Please add it in the script.js file.</p>`;
            return;
        }

        // Show loading message
        resultDiv.innerHTML = `<p>Fetching video, please wait...</p>`;
        downloadBtn.disabled = true;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': apiHost
                }
            });

            const data = await response.json();

            if (data.status === 'success' && data.video_url) {
                // Display the video and download button
                resultDiv.innerHTML = `
                    <p><strong>Video Found!</strong></p>
                    <video controls src="${data.video_url}"></video>
                    <a href="${data.video_url}" download="tiktok_video.mp4">Download Video</a>
                `;
            } else {
                // Handle API errors
                resultDiv.innerHTML = `<p style="color: red;">Error: ${data.message || 'Could not fetch video.'}</p>`;
            }

        } catch (error) {
            // Handle network errors
            console.error('Error:', error);
            resultDiv.innerHTML = `<p style="color: red;">An error occurred. Please check the console for details.</p>`;
        } finally {
            downloadBtn.disabled = false;
        }
    }

    // --- OTHER FEATURES (Back to top, Contact Form) ---
    // These remain the same
    const backToTopButton = document.getElementById("back-to-top-btn");
    window.onscroll = function() { /* ... */ };
    backToTopButton.addEventListener('click', () => { /* ... */ });
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) { /* ... */ });
});
