import { ReactNode } from "react";

import { Badge } from "./ui/badge";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-8">
      <Badge className="bg-white/10 text-white">{eyebrow}</Badge>
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-base text-zinc-300 sm:text-lg">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}


