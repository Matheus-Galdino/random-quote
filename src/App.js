import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./QuoteGarden";

//components
import Header from "./components/Header";
import Quote from "./components/Quote";

function App() {
  const [quote, setQuote] = useState({});
  const [showAuthorQuotes, setShowAuthorQuotes] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    const getAuthorQuotes = async () => {
      const result = await API.getAuthorQuotes(quote.quote.quoteAuthor);
      setQuote(result);
    };

    if (showAuthorQuotes === true) getAuthorQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAuthorQuotes]);

  const getQuote = async () => {
    const result = await API.getRandomQuote();
    setQuote(result);
    setShowAuthorQuotes(false);
  };

  return (
    <div className="App">
      <Header getQuote={getQuote} />
      {!showAuthorQuotes && (
        <Quote
          quote={quote.quote}
          showAuthorInfo={true}
          setShowAuthorQuotes={setShowAuthorQuotes}
        />
      )}
      {showAuthorQuotes && (
        <div className="author-quotes-container">
          {quote.quotes && (
            <div>
              <h1>{quote.quotes[0].quoteAuthor}</h1>
              {quote.quotes.map((item) => (
                <Quote quote={item} showAuthorInfo={false} />
              ))}
            </div>
          )}
        </div>
      )}
      <footer className={showAuthorQuotes ? "margin" : ""}>
        Matheus Carvalho @devChallenges.io
      </footer>
    </div>
  );
}

export default App;
