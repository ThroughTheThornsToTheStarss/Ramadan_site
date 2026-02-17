import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  padding = "default",
}: {
  children: ReactNode;
  className?: string;
  padding?: "default" | "none" | "lg";
}) {
  const paddingClass =
    padding === "none"
      ? ""
      : padding === "lg"
        ? "p-8"
        : "p-6";

  return (
    <div
      className={`rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-card)] ${paddingClass} ${className}`}
    >
      {children}
    </div>
  );
}
