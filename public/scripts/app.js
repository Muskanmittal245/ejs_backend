window.onload = function () {
    let lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        document.getElementById('lastVisit').innerText = `You last visited on ${lastVisit}`;
    } else {
        document.getElementById('lastVisit').innerText = "This is your first visit!";
    }

    const now = new Date();
    localStorage.setItem('lastVisit', now.toLocaleString());
};

// Ensure the elements exist before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    const quoteButton = document.getElementById('changeQuote');
    const clearButton = document.getElementById('clearStorage');
    const quoteElement = document.getElementById('quote');

    if (quoteButton) {
        quoteButton.addEventListener('click', async function () {
            const newQuote = await fetchRandomQuote();
            if (quoteElement) {
                quoteElement.innerText = newQuote;
            }
        });
    }

    if (clearButton) {
        clearButton.addEventListener('click', function () {
            localStorage.clear();
            const lastVisitElement = document.getElementById('lastVisit');
            if (lastVisitElement) {
                lastVisitElement.innerText = "Storage cleared! No visit history.";
            }
        });
    }
});

// Function to fetch random quotes asynchronously
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        return `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        return "Stay motivated and keep pushing forward!";
    }
}
