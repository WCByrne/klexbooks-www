import { PRICING, SITE } from "@src/lib/site";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is the free plan actually free?",
    a: `Yep. No trial clock, no credit card. You can run up to ${PRICING.freeActiveJobs} active jobs at a time with every core feature. Jobs you’ve finished don’t count, so plenty of solo businesses never need more.`,
  },
  {
    q: "What does “active job” mean?",
    a: "Any job that isn’t finished or cancelled yet: leads, upcoming work and jobs in progress. Once a job wraps up, it stops counting toward the limit.",
  },
  {
    q: "What happens if I stop paying for Pro?",
    a: "Nothing scary. All your jobs, clients, files and history stay right where they are. You just can’t add new jobs past the free limit until some wrap up.",
  },
  {
    q: "Do I need to make an account?",
    a: "No. There’s nothing to sign up for. Klex Books uses the Apple Account you’re already signed into, and your data syncs through your own iCloud.",
  },
  {
    q: "Does it take card payments?",
    a: "Klex Books doesn’t process payments, so there are no transaction fees. Get paid however you already do (cash, check, card, Venmo, Zelle) and mark it paid in a tap.",
  },
  {
    q: "Is it only for home organizers?",
    a: "Not at all. If you book jobs, show up at people’s homes and bill for your time or by the job, it fits: handymen, cleaners, painters, landscapers, pet sitters, tutors and more.",
  },
  {
    q: "Will it do my taxes?",
    a: "It won’t file them, but it will make them a lot less painful. Mileage, expenses, receipts and income are all tracked as you go, and Pro can export a Profit & Loss statement for you or your accountant.",
  },
  {
    q: "Can I get my data out?",
    a: "Any time. Export everything as spreadsheets from Settings. It’s your business, after all.",
  },
];

const Faq: React.FC = () => {
  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <p className="section-kicker hand">questions we hear a lot</p>
          <h2>Good questions.</h2>
          <p className="section-lede">
            Still wondering about something? Email{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> and a real
            person will write back.
          </p>
        </div>
        <div className="faq-list">
          {FAQS.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <span>{item.q}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
