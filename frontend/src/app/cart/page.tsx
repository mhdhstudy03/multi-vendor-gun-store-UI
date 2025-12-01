import Image from "next/image";

import { PageHero } from "../../components/page-hero";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

const cartItems = [
  {
    name: "Carbon Edge XM-14",
    vendor: "Delta North Armory",
    price: 3590,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Guardian .45 ACP",
    vendor: "Blackstone Forge",
    price: 920,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1510822732953-9581e50281b5?auto=format&fit=crop&w=900&q=80",
  },
];

const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);
const taxes = subtotal * 0.0625;
const shipping = 120;
const total = subtotal + taxes + shipping;

export default function CartPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Cart"
        title="Mission-ready loadout confirmation."
        description="Compliance docs, carrier selection, and range delivery windows happen on the next screen."
        actions={
          <>
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Proceed to checkout
            </Button>
            <Button variant="outline" className="border-white/30 text-white">
              Continue shopping
            </Button>
          </>
        }
      />

      <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <Card className="border-white/10 bg-zinc-950">
          <CardHeader>
            <CardTitle>Items ({cartItems.length})</CardTitle>
            <CardDescription className="text-zinc-400">
              Vendors ship directly with serialized tracking.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 p-4 sm:flex-row sm:items-center"
              >
                <div className="relative h-32 w-full overflow-hidden rounded-xl bg-black sm:w-40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        {item.vendor}
                      </p>
                    </div>
                    <p className="text-lg text-white">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                    <Badge className="bg-white/10 text-xs text-white">
                      Qty: {item.quantity}
                    </Badge>
                    <span>FFL transfer included</span>
                  </div>
                  <Button variant="ghost" className="w-fit px-0 text-zinc-300">
                    Remove item
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 p-6 text-white">
          <CardTitle>Order summary</CardTitle>
          <div className="mt-6 space-y-4 text-sm text-zinc-300">
            <SummaryRow label="Subtotal" value={subtotal} />
            <SummaryRow label="Range delivery" value={shipping} />
            <SummaryRow label="Estimated tax" value={taxes} />
            <Separator className="bg-white/10" />
            <SummaryRow label="Total" value={total} bold />
          </div>

          <div className="mt-6 space-y-3">
            <Input
              placeholder="Enter promo or vendor code"
              className="border-white/20 bg-black/20"
            />
            <Button variant="outline" className="w-full border-white/30 text-white">
              Apply code
            </Button>
          </div>

          <Button className="mt-6 w-full bg-lime-400 text-black hover:bg-lime-300">
            Confirm and proceed
          </Button>
        </Card>
      </section>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  bold,
}: {
  label: string;
  value: number;
  bold?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={bold ? "text-white" : ""}>{label}</span>
      <span className={bold ? "text-xl text-lime-300" : ""}>
        ${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </span>
    </div>
  );
}


