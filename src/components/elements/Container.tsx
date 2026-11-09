import { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode; narrow?: boolean }> = ({
  children,
  narrow = false,
}) => {
  return (
    <div className={`content-wrapper${narrow ? " narrow" : ""}`}>{children}</div>
  );
};

export default Container;
