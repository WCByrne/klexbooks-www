import { Metadata } from "next";
import Container from "@components/elements/Container";
import PageHeader from "@components/elements/PageHeader";
import { SITE } from "@src/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} handles your information.`,
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

const EFFECTIVE_DATE = "November 9, 2026";

export default function PrivacyPolicy() {
  const email = SITE.supportEmail;

  return (
    <main className="pageWrapper">
      <PageHeader title="Privacy Policy" subtitle={`Effective ${EFFECTIVE_DATE}`} />
      <Container narrow>
        <article className="prose">
          <p>
            {SITE.name} is built so that your business information stays with you. This
            policy explains what the {SITE.name} app and this website do with your
            information. The short version: we don&apos;t collect it.
          </p>

          <h2>No account, no tracking</h2>
          <p>
            {SITE.name} doesn&apos;t have accounts, so there&apos;s nothing to sign up for
            and no email address or password to give us. The app contains no advertising,
            no third-party analytics and no tracking, and we don&apos;t sell or share
            information about you with anyone.
          </p>

          <h2>Where your data is stored</h2>
          <p>
            Everything you enter — clients, jobs, schedules, time entries, invoices,
            payments, expenses and attached files — is stored on your device. If
            you&apos;re signed in to iCloud, it&apos;s also synced to your private iCloud
            database so it stays up to date across your iPhone, iPad and Mac. That
            database belongs to your Apple Account; we can&apos;t see or access it.
            iCloud is provided by Apple and is covered by{" "}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple&apos;s Privacy Policy
            </a>
            .
          </p>

          <h2>Permissions the app may ask for</h2>
          <p>
            Each of these is optional and only requested when you use the feature that
            needs it. You can change them at any time in your device&apos;s Settings.
          </p>
          <ul>
            <li>
              <strong>Contacts</strong> — to save your clients to Contacts and link them to
              existing contacts, so you can see who&apos;s calling or texting.
            </li>
            <li>
              <strong>Calendars</strong> — to add your scheduled jobs to a {SITE.name}{" "}
              calendar and to show events from calendars you choose, so you can schedule
              around them.
            </li>
            <li>
              <strong>Camera and photos</strong> — to take or choose photos and files you
              attach to clients and jobs.
            </li>
            <li>
              <strong>Location</strong> — to estimate the drive time to your next job and,
              if you turn on background updates, keep that estimate current. Your location
              and job addresses are sent to Apple Maps to work out addresses and drive
              times; they are never sent to us.
            </li>
            <li>
              <strong>Notifications</strong> — for time clock reminders and heads-ups about
              upcoming jobs. These are scheduled on your device.
            </li>
          </ul>

          <h2>Purchases</h2>
          <p>
            {SITE.name} Pro subscriptions are sold and managed by Apple through the App
            Store. We don&apos;t receive your name, payment details or other billing
            information. You can manage or cancel a subscription in your Apple Account
            settings.
          </p>

          <h2>Sharing and exporting</h2>
          <p>
            When you share an invoice or report, or export your data, the app hands it to
            the app or person you choose. What happens next is up to you and that
            app&apos;s own privacy practices.
          </p>

          <h2>Deleting your data</h2>
          <p>
            You can delete any record inside the app. Deleting the app removes its data from
            that device; to remove the synced copy, delete {SITE.name}&apos;s data from
            iCloud in your device&apos;s iCloud storage settings.
          </p>

          <h2>This website</h2>
          <p>
            This website is hosted by Vercel and uses Vercel Web Analytics to count page
            views. It doesn&apos;t use cookies, and it doesn&apos;t identify you or track
            you across other sites. Like most web hosts, Vercel may keep standard server
            logs (such as IP address and browser type) for security and reliability.
          </p>

          <h2>Children</h2>
          <p>
            {SITE.name} is a business tool and isn&apos;t directed at children under 13.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we&apos;ll update it here and change the effective date
            above.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy? Email <a href={`mailto:${email}`}>{email}</a>.
          </p>
        </article>
      </Container>
    </main>
  );
}
