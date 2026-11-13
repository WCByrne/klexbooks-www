import { Tape } from "@components/elements/Doodles";

// The origin story, kept anonymous on purpose.
const Story: React.FC = () => {
  return (
    <section className="story">
      <div className="wrap">
        <div className="letter">
          <Tape className="letter-tape letter-tape-l" />
          <Tape className="letter-tape letter-tape-r" />
          <p className="letter-kicker hand">why this exists</p>
          <h2>It started with one home organizer and a very full kitchen table.</h2>
          <p>
            Klex Books was built for someone close to me who runs a one-person home
            organizing business. She’s brilliant at the work. The admin around it, not so
            much fun: tracking hours, remembering mileage, figuring out who’d paid and who
            hadn’t, all spread across notes, texts and memory.
          </p>
          <p>
            Everything we tried was either built for a company with a dispatcher and a
            fleet of trucks, or priced like one. So I built her something simple that does
            the boring parts on its own and stays out of the way.
          </p>
          <p>
            It turns out a lot of people work the same way she does. If you’re the one
            doing the work, the booking and the books, this is for you too.
          </p>
          <p className="letter-sign hand">— the maker of Klex Books</p>
        </div>
      </div>
    </section>
  );
};

export default Story;
