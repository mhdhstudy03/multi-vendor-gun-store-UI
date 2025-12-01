import Image from "next/image";

import { PageHero } from "../../components/page-hero";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { fetchProducts } from "../../lib/api";

const loadouts = [
  {
    title: "Range Proven Kits",
    description:
      "Barrels, triggers, and optics matched by ballistic twins so vendors can ship confident bundles.",
  },
  {
    title: "Mission Tuned Mods",
    description:
      "Approved suppressors and gas systems curated to keep velocity and recoil inside spec sheets.",
  },
  {
    title: "Compliance Ledger",
    description:
      "Every weapon listing includes serialized media, ATF ruling tags, and vendor-specific terms.",
  },
];

export default async function WeaponsPage() {
  const products = await fetchProducts();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Weapons catalog"
        title="Verified firearms, parts, and ready-to-ship loadouts."
        description="Browse curated SKUs submitted by our 180+ vendors. Every platform ships with full compliance packets, rich media, and fulfillment telemetry."
        actions={
          <>
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Request vendor access
            </Button>
            <Button variant="outline" className="border-white/30 text-white">
              Download catalog PDF
            </Button>
          </>
        }
      />

      <section className="grid gap-6 md:grid-cols-3">
        {products.map((weapon) => (
          <Card key={weapon.id} className="overflow-hidden border-white/10 bg-zinc-950">
            <CardHeader className="space-y-3 p-0">
              <div className="relative h-56 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80"
                  alt={weapon.name}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-2 p-5">
              <Badge className="bg-white/10 text-xs uppercase text-white">
                {weapon.category}
              </Badge>
              <CardTitle className="text-2xl">{weapon.name}</CardTitle>
              <p className="text-sm text-zinc-400">{weapon.vendor}</p>
              <p className="text-lime-300">${weapon.price.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {loadouts.map((item) => (
          <Card key={item.title} className="border-white/10 bg-white/5 p-6">
            <CardTitle className="text-xl">{item.title}</CardTitle>
            <p className="mt-3 text-sm text-zinc-300">{item.description}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}


