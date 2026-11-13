import { SITE } from "@src/lib/site";

// Shows a download link once SITE.appStoreUrl is set, otherwise a "coming soon" label.
const AppStoreButton: React.FC<{ className?: string }> = ({ className }) => {
  if (SITE.appStoreUrl) {
    return (
      <a href={SITE.appStoreUrl} className={`btn ${className ?? ""}`}>
        <AppleLogo />
        Download on the App Store
      </a>
    );
  }

  return (
    <span className={`btn btn-soon ${className ?? ""}`}>
      <AppleLogo />
      Coming soon to the App Store
    </span>
  );
};

const AppleLogo = () => (
  <svg width="18" height="20" viewBox="0 0 17 20" fill="currentColor" aria-hidden="true">
    <path d="M14.1 10.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9C3.6 4.7 2 5.7 1.1 7.2c-1.9 3.2-.5 8 1.3 10.6.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.9 3.4-.9s2 .9 3.4.8c1.4 0 2.3-1.3 3.2-2.6 1-1.5 1.4-2.9 1.4-3-.1 0-2.9-1.1-3-4.1zM11.5 3c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5z" />
  </svg>
);

export default AppStoreButton;
