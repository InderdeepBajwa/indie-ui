import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const buttonClassName = `button button-${variant}`;
  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
