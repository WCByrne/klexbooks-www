const TRADES = [
  "Home organizers",
  "Handymen",
  "House cleaners",
  "Painters",
  "Landscapers",
  "Pet sitters",
  "Movers",
  "You, probably",
];

const Trades: React.FC = () => {
  return (
    <div className="trades">
      <div className="wrap trades-inner">
        <span className="trades-label hand">built for…</span>
        <ul className="trades-list">
          {TRADES.map((trade) => (
            <li key={trade} className="tag">
              {trade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trades;
