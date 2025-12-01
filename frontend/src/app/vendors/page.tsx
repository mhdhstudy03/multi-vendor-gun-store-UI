import { PageHero } from "../../components/page-hero";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { fetchVendors } from "../../lib/api";

const onboardingSteps = [
  "Submit FFL + compliance certificates through secure briefcase.",
  "Upload SKUs with serialized media and MAP policies.",
  "Integrate shipping carrier or use GunPoint managed freight.",
  "Track analytics and payouts inside the vendor cockpit.",
];

export default async function VendorsPage() {
  const vendorProfiles = await fetchVendors();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Vendor network"
        title="Launch your storefront inside the GunPoint marketplace."
        description="We onboard serious manufacturers and resellers that prioritize transparency, compliance, and premium service levels."
        actions={
          <>
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Start onboarding
            </Button>
            <Button variant="outline" className="border-white/30 text-white">
              View SLA and policies
            </Button>
          </>
        }
      />

      <section className="grid gap-6 md:grid-cols-3">
        {vendorProfiles.map((vendor) => (
          <Card key={vendor.id} className="border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <CardTitle>{vendor.name}</CardTitle>
              <Badge className="bg-lime-300 text-black">
                {vendor.rating.toFixed(1)} ★
              </Badge>
            </div>
            <p className="mt-2 text-sm text-zinc-400">{vendor.fulfillment}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
              <span className="rounded-full border border-white/15 px-3 py-1">
                Multi-vendor partner
              </span>
            </div>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-white/10 bg-zinc-950 p-8">
          <CardTitle className="text-2xl">Onboarding pipeline</CardTitle>
          <ul className="mt-6 space-y-4 text-sm text-zinc-300">
            {onboardingSteps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="text-lime-300">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="border-white/10 bg-white/5 p-8 text-sm text-zinc-300">
          <CardHeader className="p-0">
            <Badge className="w-fit bg-white/15 text-white">Vendor support</Badge>
            <CardTitle className="mt-3 text-2xl text-white">
              Dedicated compliance desk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-0 pt-5">
            <p>
              Our internal FFL staff double-checks every listing, manages controlled
              shipments, and helps with multi-state paperwork so your team focuses on
              selling.
            </p>
            <p>Email: vendors@gunpoint.co</p>
            <p>Secure line: +1 (406) 555-7712</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


