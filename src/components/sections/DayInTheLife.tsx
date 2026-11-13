import Image from "next/image";
import { Arrow } from "@components/elements/Doodles";

type Entry = { time: string; title: string; body: string };

const MORNING: Entry[] = [
  {
    time: "8:24",
    title: "“Time to leave.”",
    body: "A heads-up on your Lock Screen with the drive time from wherever you are right now. No more guessing how bad traffic is.",
  },
  {
    time: "9:00",
    title: "One tap, you’re on the clock",
    body: "Clock in right from the alert. Or let Klex Books clock you in when the job starts, so you never lose an hour.",
  },
];

const AFTERNOON: Entry[] = [
  {
    time: "11:00",
    title: "Hours turn into an invoice",
    body: "Your time and materials add up on their own. Share a clean PDF invoice before you’ve even started the car.",
  },
  {
    time: "11:01",
    title: "Mileage? Already logged.",
    body: "Round trip, at the IRS rate, for every job with an address. Future-you at tax time says thanks.",
  },
];

const Log: React.FC<{ entries: Entry[]; className?: string }> = ({ entries, className }) => (
  <ol className={`log ${className ?? ""}`}>
    {entries.map((entry) => (
      <li key={entry.time}>
        <span className="log-time hand">{entry.time}</span>
        <h3>{entry.title}</h3>
        <p>{entry.body}</p>
      </li>
    ))}
  </ol>
);

const DayInTheLife: React.FC = () => {
  return (
    <section className="day" id="features">
      <div className="wrap">
        <div className="section-head">
          <p className="section-kicker hand">a tuesday, start to finish</p>
          <h2>It keeps up with your day, so you don’t have to keep track of it.</h2>
          <p className="section-lede">
            No timesheets to fill in tonight. No mileage log in the glovebox. Klex Books
            quietly does the bookkeeping while you do the job.
          </p>
        </div>
        <div className="day-grid">
          <Log entries={MORNING} />
          <div className="day-phone">
            <Image
              src="/screens/iphone-live-activity.webp"
              alt="The Klex Books timer on an iPhone Lock Screen, with a Clock Out button and a one-hour-remaining reminder"
              width={720}
              height={1492}
              sizes="(max-width: 960px) 300px, 340px"
            />
            <p className="annot annot-1 hand">
              plus a heads-up before time’s up
              <Arrow className="annot-arrow" />
            </p>
          </div>
          <Log entries={AFTERNOON} className="log-late" />
        </div>
      </div>
    </section>
  );
};

export default DayInTheLife;
