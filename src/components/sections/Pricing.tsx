import { Check, Circle } from "@components/elements/Doodles";
import AppStoreButton from "@components/elements/AppStoreButton";
import { PRICING } from "@src/lib/site";

const FREE = [
  `Up to ${PRICING.freeActiveJobs} active jobs at a time`,
  `Up to ${PRICING.freeFilesPerJob} photos & files per job`,
  "Scheduling, time clock & drive-time alerts",
  "Invoices, payments, expenses & mileage",
  "Monthly finances overview",
];

const PRO = [
  "Unlimited active jobs",
  "Unlimited photos & files",
  "Insights: top clients, best job types, busy seasons",
  "What’s coming in over the next 30 days",
  "Reconnect with past clients",
  "Profit & Loss export for tax time",
];

const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="ledger">
          <span className="ledger-tab hand">the cost</span>
          <h2>Cheaper than the coffee you drink on the way to the job.</h2>
          <p className="ledger-lede">
            Most business software is priced for businesses with a payroll. Klex Books is
            priced for you.
          </p>

          <div className="ledger-cols">
            <div className="ledger-col">
              <p className="ledger-plan">Free</p>
              <p className="ledger-amt">$0</p>
              <p className="ledger-sub hand">for as long as you like</p>
              <ul className="checklist">
                {FREE.map((item) => (
                  <li key={item}>
                    <Check className="checklist-mark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="ledger-col ledger-col-pro">
              <p className="ledger-plan">Pro</p>
              <p className="ledger-amt">
                {PRICING.monthly}
                <small>/month</small>
              </p>
              <p className="ledger-sub hand">
                or{" "}
                <span className="circled">
                  {PRICING.yearly}/year
                  <Circle className="circled-mark" />
                </span>{" "}
                ≈ {PRICING.yearlyPerMonth}/mo
              </p>
              <p className="ledger-includes">Everything in Free, plus:</p>
              <ul className="checklist">
                {PRO.map((item) => (
                  <li key={item}>
                    <Check className="checklist-mark" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ledger-foot">
            <AppStoreButton />
            <p>
              <b>Your first month of Pro is free.</b> Finished jobs don’t count
              toward the free limit, and if you ever stop paying, nothing gets hidden or
              deleted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
