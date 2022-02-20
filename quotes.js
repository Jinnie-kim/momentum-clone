const quotes = [
    {
        quote: "Jumping from failure to failure with undiminished enthusiasm is the big secret to success.",
        author: "unknown",
    },
    {
        quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
        author: "Oprah Winfrey",
    },
    {
        qoute: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Life is trying things to see if they work.",
        author: "Ray Bradbury",
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma - which is living with the results of other people’s thinking.",
        author: "Steve Jobs",
    },
    {
        quote: "Success usually come to those who are busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving. They make mistakes but they don’t quit.",
        author: "Conrad Hilton",
    },
    {
        quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell",
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;