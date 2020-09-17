import React from "react";
import "../css/quote.css";

const Quote = ({ quote, showAuthorInfo, setShowAuthorQuotes }) => {
  const showAuthorQuotes = () => {
    setShowAuthorQuotes(true);
  };

  return (
    <>
      {quote && (
        <div className="quote-container">
          <p className="quote">{`"${quote.quoteText}"`}</p>
          {showAuthorInfo && (
            <div className="author-info" onClick={showAuthorQuotes}>
              <div>
                <h4>{quote.quoteAuthor}</h4>
                <p>{quote.quoteGenre}</p>
              </div>

              <span className="material-icons">arrow_right_alt</span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Quote;
