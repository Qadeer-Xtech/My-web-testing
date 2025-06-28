document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generate-btn');
    const userInput = document.getElementById('prompt-input');
    const resultBox = document.getElementById('gemini-result');

    generateBtn.addEventListener('click', async () => {
        const prompt = userInput.value.trim();
        if (!prompt) {
            resultBox.innerHTML = `<p style="color:red;">Please enter a prompt.</p>`;
            return;
        }

        resultBox.innerHTML = `<p>Generating response, please wait...</p>`;
        generateBtn.disabled = true;

        const apiKey = 'AIzaSyDPO1sHoIozWOOx5Ie2qE6OH-7LKI0f228'; // Gemini Pro API key
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

        const body = {
            contents: [{ parts: [{ text: prompt }] }]
        };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });

            const data = await response.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';

            resultBox.innerHTML = `<p><strong>Gemini:</strong> ${text}</p>`;
        } catch (error) {
            console.error('Error:', error);
            resultBox.innerHTML = `<p style="color:red;">An error occurred. See console for details.</p>`;
        } finally {
            generateBtn.disabled = false;
        }
    });
});
