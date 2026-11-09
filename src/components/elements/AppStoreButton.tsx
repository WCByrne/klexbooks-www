import { SITE } from "@src/lib/site";

// Shows a download link once SITE.appStoreUrl is set, otherwise a "coming soon" pill.
const AppStoreButton: React.FC = () => {
  if (SITE.appStoreUrl) {
    return (
      <a href={SITE.appStoreUrl} className="cta-button">
        Download on the App Store
      </a>
    );
  }

  return (
    <span className="coming-soon">
      <span className="coming-soon-dot" aria-hidden="true" />
      Coming soon to the App Store
    </span>
  );
};

export default AppStoreButton;
