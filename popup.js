const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const newQuoteButton = document.getElementById("newQuoteButton");

const pickRandomQuote = () => {
  const index = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[index];
};

const renderQuote = () => {
  const quote = pickRandomQuote();
  quoteTextEl.textContent = quote.text;
  quoteAuthorEl.textContent = `— ${quote.author}`;
};

document.addEventListener("DOMContentLoaded", () => {
  renderQuote();

  newQuoteButton.addEventListener("click", () => {
    renderQuote();
  });
});
