  
// Function to handle the API call and return the response
async function callOpenAI(query) {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

    // Replace 'YOUR_API_KEY' with your OpenAI API key
    const apiKey = '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';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: query,
            max_tokens: 50
        })
    });

    const data = await response.json();
    const { choices } = data;
    const output = choices[0].text.trim();
    
    return output;
}

// Function to handle the API call and display the response
async function getResponse() {
    const inputBox = document.getElementById('input-box');
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = 'Loading...';

    const query = inputBox.value;

    try {
        const response = await callOpenAI(query);
        outputDiv.innerText = response;
    } catch (error) {
        console.log('Error:', error);
        outputDiv.innerText = 'An error occurred. Please try again.';
    }
}
