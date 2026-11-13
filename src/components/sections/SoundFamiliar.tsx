import { Tape } from "@components/elements/Doodles";

const OLD_WAY = [
  "Client addresses scattered across texts",
  "Hours scribbled on the back of a receipt",
  "Mileage log? What mileage log?",
  "A shoebox of receipts for tax time",
  "“Did I ever invoice the Hendersons?”",
  "Double-booked Tuesday. Again.",
];

const SoundFamiliar: React.FC = () => {
  return (
    <section className="familiar">
      <div className="wrap familiar-grid">
        <div className="familiar-copy">
          <p className="section-kicker hand">sound familiar?</p>
          <h2>Your business shouldn’t live in five different places.</h2>
          <p className="section-lede">
            When you’re the owner, the scheduler, the bookkeeper and the one actually doing
            the job, the paperwork piles up fast. Klex Books puts it all in one spot and
            does most of it for you.
          </p>
        </div>
        <div className="notepad">
          <Tape className="notepad-tape" />
          <p className="notepad-title hand">the old system:</p>
          <ul>
            {OLD_WAY.map((item) => (
              <li key={item} className="hand">
                <span className="strike">{item}</span>
              </li>
            ))}
          </ul>
          <p className="notepad-fix hand">→ fixed.</p>
        </div>
      </div>
    </section>
  );
};

export default SoundFamiliar;
