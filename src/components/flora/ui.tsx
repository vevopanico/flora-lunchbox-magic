import { type ReactNode } from "react";

export function CTAButton({
  children = "Quero minhas manhãs de volta",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a href="#oferta" className={`btn-cta btn-cta-hover ${className}`}>
      {children}
    </a>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
