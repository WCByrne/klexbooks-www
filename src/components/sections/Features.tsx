import Image from "next/image";
import { Arrow, Check, Tape } from "@components/elements/Doodles";

type Spotlight = {
  kicker: string;
  title: string;
  body: string;
  points: string[];
  note: string;
  image: { src: string; alt: string };
};

const SPOTLIGHTS: Spotlight[] = [
  {
    kicker: "scheduling",
    title: "Book jobs without playing calendar Tetris.",
    body: "Your jobs sit right next to your personal calendars, so the dentist appointment and the kid’s recital don’t get double-booked with a garage clean-out.",
    points: [
      "Warns you about overlaps before you save",
      "Flags when there isn’t enough drive time between jobs",
      "Multi-day jobs, one session at a time",
      "Jobs show up in the Calendar app you already use",
    ],
    note: "it’ll tell you when the drive won’t fit",
    image: {
      src: "/screens/iphone-scheduler.webp",
      alt: "Scheduling a job in Klex Books with a warning that it overlaps another job",
    },
  },
  {
    kicker: "invoices & payments",
    title: "Get paid without the awkward chase.",
    body: "Charge by the hour or a flat rate, add materials as you go, and send a clean, professional invoice in a couple of taps. Then mark it paid, however the money showed up.",
    points: [
      "Hourly or flat-rate pricing, your call",
      "Line items for materials and extras",
      "PDF invoices with your business name on them",
      "Cash, check, card, Venmo, Zelle: record it all",
    ],
    note: "see what you actually made on every job",
    image: {
      src: "/screens/iphone-job-billing.webp",
      alt: "A job's billing tab showing labor, a payment and profit after expenses",
    },
  },
  {
    kicker: "finances",
    title: "Know how business is going, in plain English.",
    body: "No accounting degree required. Klex Books sums up each month the way a friend would, and shows what came in, what went out and what you kept.",
    points: [
      "A quick monthly recap: up, down, or steady",
      "Income, expenses and profit at a glance",
      "Twelve months of history in one chart",
      "See who still owes you, and how much",
    ],
    note: "“you kept about 71% after expenses”",
    image: {
      src: "/screens/iphone-finances.webp",
      alt: "The Finances overview with a written monthly recap, income, expenses and net profit",
    },
  },
];

type Card = { title: string; body: string; note?: string; pin: "terra" | "sage" | "charcoal" };

const CARDS: Card[] = [
  {
    title: "Clients, with all the details",
    body: "Addresses, notes, photos and files for every client. Sync them to Contacts so you know who’s calling before you pick up.",
    pin: "terra",
  },
  {
    title: "Receipts that read themselves",
    body: "Snap a receipt and Klex Books fills in the store, the total and the category for you. Keep the photo with the expense.",
    note: "smart reading needs an Apple Intelligence device",
    pin: "sage",
  },
  {
    title: "Slow day? Make it a good one.",
    body: "Nothing booked today? Klex Books points you to open leads and past clients worth checking in with, and drafts a friendly note to send.",
    note: "reconnecting is a Pro feature",
    pin: "charcoal",
  },
  {
    title: "Before & after photos",
    body: "Attach photos and PDFs to any job or client, or share them straight from the Photos app. Proof of a job well done.",
    pin: "sage",
  },
  {
    title: "Just ask Siri",
    body: "“Do I have any jobs today?” Add clients and jobs or check your week hands-free, while your hands are full.",
    pin: "terra",
  },
  {
    title: "Your data, your way out",
    body: "Export everything to spreadsheets whenever you like. Your accountant will be delighted. Probably.",
    pin: "charcoal",
  },
];

const Features: React.FC = () => {
  return (
    <section className="toolbox" id="features">
      <div className="wrap">
        <div className="section-head">
          <p className="section-kicker hand">what’s in the toolbox</p>
          <h2>Everything a one-person business runs on. Nothing it doesn’t.</h2>
          <p className="section-lede">
            Built for people who’d rather be working than doing admin. No team features
            you’ll never use, no setup weekend, no manual to read.
          </p>
        </div>

        <div className="spotlights">
          {SPOTLIGHTS.map((spot, i) => (
            <article key={spot.kicker} className={`spotlight ${i % 2 ? "spotlight-flip" : ""}`}>
              <div className="spotlight-copy">
                <p className="spotlight-kicker hand">{spot.kicker}</p>
                <h3>{spot.title}</h3>
                <p>{spot.body}</p>
                <ul className="checklist">
                  {spot.points.map((point) => (
                    <li key={point}>
                      <Check className="checklist-mark" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="spotlight-art">
                <div className="taped spotlight-phone">
                  <Tape className="spotlight-tape" />
                  <Image src={spot.image.src} alt={spot.image.alt} width={720} height={1492} sizes="300px" />
                </div>
                <p className="spotlight-note hand">
                  <Arrow className="spotlight-arrow" />
                  {spot.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="cards-head">
          <h3>
            And a few more things you’ll <span className="hand hand-inline">love</span>
          </h3>
        </div>
        <ul className="index-cards">
          {CARDS.map((card) => (
            <li key={card.title} className="index-card">
              <span className={`pin pin-${card.pin}`} aria-hidden="true" />
              <h4>{card.title}</h4>
              <p>{card.body}</p>
              {card.note && <p className="index-card-note hand">{card.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
