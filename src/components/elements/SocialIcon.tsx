import type { SocialNetwork } from "@src/lib/site";

// Simple single-color marks for the footer's social links.
const SocialIcon: React.FC<{ network: SocialNetwork }> = ({ network }) => {
  switch (network) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
        </svg>
      );
    case "Threads":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M16.6 11.2c-.5-2.6-2.3-3.7-4.3-3.7-1.9 0-3.3 1-3.8 2.4" />
          <path d="M16.7 11.4c-3.6-.9-7.2-.1-7.2 2.4 0 1.4 1.3 2.3 2.8 2.2 2.4-.1 3.8-1.8 3.8-5.2" />
          <path d="M19.4 8.4C18.3 5 15.6 3 12 3 6.9 3 4 6.6 4 12s2.9 9 8 9c4.4 0 7.4-2.4 7.4-5.6 0-1.9-1.1-3.4-2.7-4" />
        </svg>
      );
  }
};

export default SocialIcon;
