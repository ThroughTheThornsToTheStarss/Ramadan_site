import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--container-px)] ${className}`}
    >
      {children}
    </div>
  );
}
