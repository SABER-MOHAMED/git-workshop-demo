function getResponse() {
    const userInput = document.getElementById('userInput').value;
    const responseArea = document.getElementById('aiResponse');
    
    if (!userInput.trim()) {
        responseArea.textContent = "Please enter a question or message.";
        return;
    }
    
    // Simple "AI" responses
    const responses = [
        "I'm analyzing your request...",
        "That's an interesting question!",
        "Based on my algorithms, I suggest...",
        "Have you considered alternative approaches?",
        "The answer might be simpler than you think.",
        "Let me process that information...",
        "Embedded AI is still learning!"
    ];
    
    // Simulate AI thinking
    responseArea.textContent = "Thinking...";
    
    setTimeout(() => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseArea.textContent = `You asked: "${userInput}"\n\nAI says: ${randomResponse}`;
    }, 1500);
}