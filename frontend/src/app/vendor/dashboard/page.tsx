import { PageHero } from "../../../components/page-hero";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { fetchProducts, fetchVendors } from "../../../lib/api";

export default async function VendorDashboardPage() {
  const [products, vendors] = await Promise.all([
    fetchProducts(),
    fetchVendors(),
  ]);

  const totalVendors = vendors.length;
  const totalProducts = products.length;
  const avgRating =
    vendors.reduce((sum, v) => sum + v.rating, 0) / Math.max(totalVendors, 1);

  const apiOnline = products.length > 0 || vendors.length > 0;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Vendor cockpit"
        title="Overview of your marketplace performance."
        description="Track listings, fulfillment speed, and network health from a single tactical dashboard. Data below uses the public demo API."
        actions={
          <>
            <a href="/vendor/upload">
              <Button className="bg-lime-400 text-black hover:bg-lime-300">
                Create new listing
              </Button>
            </a>
            <Button variant="outline" className="border-white/30 text-white">
              Invite team member
            </Button>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Active vendors" value={totalVendors} helper="Across the marketplace" />
        <StatCard
          label="Catalog size"
          value={totalProducts}
          helper="Demo products connected"
        />
        <StatCard
          label="Average rating"
          value={avgRating.toFixed(1)}
          helper="Based on vendor profiles"
        />
      </section>

      {!apiOnline ? (
        <Card className="border-white/10 bg-[#2b1f1f] p-6 text-sm text-red-200">
          <CardTitle>Unable to reach backend API</CardTitle>
          <p className="mt-2 text-red-100">
            Start the NestJS server via <code>cd backend && npm run start:dev</code> and refresh this
            page. A fallback message is shown until the API responds.
          </p>
        </Card>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-white/10 bg-zinc-950">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Recent products</CardTitle>
              <p className="text-sm text-zinc-400">
                Pulled from the NestJS `/products` endpoint.
              </p>
            </div>
            <Badge className="bg-white/10 text-xs text-white">
              Demo data
            </Badge>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="grid grid-cols-[2fr,1.2fr,1fr] gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
              <span>Product</span>
              <span>Vendor</span>
              <span className="text-right">Price</span>
            </div>
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[2fr,1.2fr,1fr] gap-3 rounded-lg border border-white/5 bg-black/40 px-4 py-3"
              >
                <div>
                  <p className="font-medium text-white">{product.name}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-lime-200">
                    {product.category}
                  </p>
                </div>
                <p className="self-center text-sm text-zinc-300">
                  {product.vendor}
                </p>
                <p className="self-center text-right text-sm text-lime-300">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 p-6 text-sm text-zinc-200">
          <CardHeader className="p-0">
            <Badge className="w-fit bg-white/15 text-white">
              Network health
            </Badge>
            <CardTitle className="mt-3 text-2xl text-white">
              Fulfillment lanes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-0 pt-5">
            <p>
              Benchmark your own SLAs against the rest of the marketplace. Demo
              numbers below come from the `/vendors` API.
            </p>
            <Separator className="bg-white/10" />
            {vendors.map((vendor) => (
              <div key={vendor.id} className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">{vendor.name}</p>
                  <span className="text-xs text-lime-300">
                    {vendor.rating.toFixed(1)} ★
                  </span>
                </div>
                <p className="text-xs text-zinc-400">{vendor.fulfillment}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string | number;
  helper: string;
}) {
  return (
    <Card className="border-white/10 bg-white/5 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-zinc-400">{helper}</p>
    </Card>
  );
}


