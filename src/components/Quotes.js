import { useState } from "react";

const quotes = [
  {
    id: 1,
    quote: `
  "Le bonheur, c'est lorsque nos pensées, nos actes et nos paroles sont en harmonie" `,
  },
  { id: 2, quote: "I think, therefore I am." },
  { id: 3, quote: "When life gives you lemons, make lemonade." },
  { id: 4, quote: "Have no fear of perfection, you'll never reach it." },
];

const Quotes = () => {
  const [quote, setQuote] = useState(`
  "Le bonheur, c'est lorsque nos pensées, nos actes et nos paroles sont en harmonie" `);

  const randomQuoteMachine = (listOfQuotes) => {
    const quote = listOfQuotes[Math.floor(Math.random() * listOfQuotes.length)];
    setQuote(quote.quote);
  };

  setInterval(function () {
    randomQuoteMachine(quotes);
  }, 15000);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        fontFamily: "Raleway, sans-serif",
        fontSize: "1rem",
      }}
    >
      <div style={{ border: "1px solid #D3D3D3", padding: "20px", borderRadius: "5px" }}>{quote}</div>
    </div>
  );
};

export default Quotes;
