import Image from "next/image";
import { Arrow } from "@components/elements/Doodles";

const Everywhere: React.FC = () => {
  return (
    <section className="everywhere">
      <div className="wrap">
        <div className="section-head section-head-center">
          <p className="section-kicker hand">phone in the truck, Mac at the desk</p>
          <h2>Out on the job or catching up at home, it’s all there.</h2>
          <p className="section-lede">
            Klex Books runs on iPhone, iPad and Mac, and keeps everything in sync through
            your own iCloud. Book a job on your laptop Sunday night, clock in from your
            phone Monday morning.
          </p>
        </div>
        <div className="devices">
          <div className="device device-mac">
            <Image
              src="/screens/mac-calendar-month.webp"
              alt="Klex Books on a Mac showing a month of booked jobs"
              width={1800}
              height={1102}
              sizes="(max-width: 960px) 100vw, 820px"
            />
          </div>
          <div className="device device-phone">
            <Image
              src="/screens/iphone-calendar-list.webp"
              alt="Klex Books on iPhone showing upcoming jobs"
              width={720}
              height={1492}
              sizes="220px"
            />
          </div>
          <p className="devices-note hand">
            same jobs, same clients,
            <br />
            no copying anything over
            <Arrow className="devices-arrow" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Everywhere;
