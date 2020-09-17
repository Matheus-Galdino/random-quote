const basicFetch = async (endPoint) => {
  const req = await fetch(endPoint);
  const json = await req.json();

  return json;
};

export default {
  getRandomQuote: async () => {
    return basicFetch(
      "https://quote-garden.herokuapp.com/api/v2/quotes/random"
    );
  },
  getAuthorQuotes: async (authorName) => {
    return basicFetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=4`
    );
  },
};
