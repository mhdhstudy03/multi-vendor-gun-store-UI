import Image from "next/image";

import { PageHero } from "../../components/page-hero";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../components/ui/card";

const collections = [
  {
    name: "Recon Carbon Set",
    description: "Lightweight carbine with offset optic, suppressor kit, and hard case.",
    price: "$5,480",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Heritage Steel Vault",
    description: "Limited pistols, heirloom knives, and leather kit for collectors.",
    price: "$7,120",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Night Ops Bundle",
    description: "Suppressed PDW, NV-capable laser modules, and range-ready armor.",
    price: "$6,240",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
];

export default function CollectionsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Curated collections"
        title="Top vendors collaborate on themed drops."
        description="Limited-run assortments pair firearms, gear, media assets, and concierge delivery. Every collection ships with serialized certificates."
        actions={
          <Button className="bg-lime-400 text-black hover:bg-lime-300">
            Join drop list
          </Button>
        }
      />

      <section className="grid gap-6 md:grid-cols-3">
        {collections.map((collection) => (
          <Card key={collection.name} className="overflow-hidden border-white/10 bg-zinc-950">
            <div className="relative h-56">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="space-y-2 p-5">
              <CardTitle>{collection.name}</CardTitle>
              <p className="text-sm text-zinc-300">{collection.description}</p>
              <p className="text-lime-300">{collection.price}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


