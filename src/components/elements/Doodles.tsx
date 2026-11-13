// Hand-drawn marks used around the site. They're decorative, so they're hidden from screen readers.

type Props = { className?: string; style?: React.CSSProperties };

export const Underline: React.FC<Props> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 300 22"
    preserveAspectRatio="none"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M4 14c60-9 140-11 292-6" strokeWidth="5" />
    <path d="M30 19c70-6 150-7 230-3" strokeWidth="3" opacity=".7" />
  </svg>
);

export const Circle: React.FC<Props> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 200 100"
    preserveAspectRatio="none"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M110 6C40 2 4 30 8 56c5 34 80 42 140 34 40-6 52-30 44-52C184 14 130 6 82 12" />
  </svg>
);

/** A curvy arrow pointing down and to the right. Flip or rotate it with CSS. */
export const Arrow: React.FC<Props> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 80 44"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8c26-6 50 2 66 26" />
    <path d="M58 32l11 4 2-12" />
  </svg>
);

export const Check: React.FC<Props> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 13c3 2 5 5 6 7 3-7 7-12 12-16" />
  </svg>
);

/** A strip of masking tape for sticking things to the page. */
export const Tape: React.FC<Props> = ({ className, style }) => (
  <span className={`tape ${className ?? ""}`} style={style} aria-hidden="true" />
);
