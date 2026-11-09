const FEATURES = [
  {
    title: "Clients",
    body: "Keep contact details, addresses, notes and files for every client, and save them to Contacts so you know who's calling.",
  },
  {
    title: "Scheduling",
    body: "Book jobs on a calendar that sits alongside the calendars you already use, so you can schedule around the rest of your life.",
  },
  {
    title: "Time clock",
    body: "Clock in and out of jobs with one tap, and keep an eye on the running clock from your Lock Screen.",
  },
  {
    title: "Invoices & payments",
    body: "Turn your hours and line items into a clean invoice, then record payments as they come in.",
  },
  {
    title: "Expenses & mileage",
    body: "Log business expenses as they happen, and let round-trip mileage to each job add itself.",
  },
  {
    title: "Drive time",
    body: "See how long it'll take to get to your next job, and get a heads-up when it's time to leave.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features">
      <div className="section-title">
        <p className="eyebrow">Features</p>
        <h2>Everything behind the work</h2>
      </div>
      <div className="feature-grid">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="feature-item">
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
