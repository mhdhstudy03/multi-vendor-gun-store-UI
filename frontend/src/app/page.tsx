import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Shield,
  ShoppingBag,
  Target,
  Truck,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar";
import { Separator } from "../components/ui/separator";

const categories = [
  {
    name: "Fire Arms",
    description: "Rifles, pistols, and carbines tuned for accuracy.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    vendors: 54,
  },
  {
    name: "Gun Ammo",
    description: "Match-grade ammunition from trusted vendors.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80&sat=-70",
    vendors: 31,
  },
  {
    name: "Grenades",
    description: "Training and tactical grenades with compliance badges.",
    image:
      "https://images.unsplash.com/photo-1442328166075-47fe7153c128?auto=format&fit=crop&w=900&q=80",
    vendors: 12,
  },
  {
    name: "Army Knives",
    description: "Field knives, rescue tools, and limited editions.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80&sat=-55",
    vendors: 27,
  },
];

const popularProducts = [
  {
    name: "Tactical XM-14 Carbine",
    vendor: "Delta North Armory",
    price: "$1,650.00",
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1510822732953-9581e50281b5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Guardian .45 ACP",
    vendor: "Blackstone Forge",
    price: "$920.00",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vanguard Suppressor Kit",
    vendor: "Maverick Labs",
    price: "$480.00",
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80",
  },
];

const services = [
  {
    title: "Advanced Training",
    description: "Live fire, CQB, and long-range courses taught weekly.",
    icon: Shield,
  },
  {
    title: "Weapon Selection",
    description: "Expert curators verify every vendor submission.",
    icon: Compass,
  },
  {
    title: "Certified Instructors",
    description: "Multi-branch veterans guide your tactical journey.",
    icon: BadgeCheck,
  },
];

const featuredVendors = [
  {
    name: "Northern Tactical Co.",
    fulfillment: "48h avg fulfillment",
    rating: "4.9",
    categories: ["Pistols", "Carbines", "Optics"],
  },
  {
    name: "SureShot Defense",
    fulfillment: "Same-day drop ship",
    rating: "4.8",
    categories: ["Ammo", "Suppressors"],
  },
  {
    name: "Granite Edge Outfitters",
    fulfillment: "72h global shipping",
    rating: "4.7",
    categories: ["Blades", "Training Gear"],
  },
];

const testimonials = [
  {
    quote:
      "We scaled to six figures in 90 days thanks to GunPoint handling compliance and marketing.",
    name: "Stefane Rosaford",
    role: "Vendor, Tactical Apex",
  },
  {
    quote:
      "Clients trust the curated catalog. Every firearm we recommend comes from verified partners.",
    name: "Augusta Nino",
    role: "Lead Instructor, Sierra Range",
  },
];

const blogPosts = [
  {
    title: "Match or Series? What Pro Shooters Pick",
    date: "August 11, 2025",
    excerpt:
      "A data-backed breakdown of barrel lengths, triggers, and optics most requested by range officers.",
  },
  {
    title: "Exploring Our Ship-Anywhere FFL Program",
    date: "August 3, 2025",
    excerpt:
      "How multi-vendor routing keeps delivery compliant without slowing down your launch schedules.",
  },
  {
    title: "Custom to Civilian: Firearm Media in 2025",
    date: "August 1, 2025",
    excerpt:
      "The three content pillars that tell your catalog story without tripping ad restrictions.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#0c0d0f] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 sm:px-6 lg:px-0">
        <HeroSection />
        <BrandStrip />
        <CategorySection />
        <PopularProducts />
        <TacticalStrip />
        <Services />
        <LaserTraining />
        <FeaturedProducts />
        <Testimonials />
        <BlogSection />
        <Newsletter />
      </div>
      <SiteFooter />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
      <Card className="relative overflow-hidden border-none bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1400&q=80"
            alt="Gunpoint hero"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative space-y-6 p-10">
          <Badge className="bg-lime-300 text-black">Gun Mods & Carbine</Badge>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-300">
              Multi Vendor Marketplace
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              We stock exclusive and premium models
            </h1>
          </div>
          <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
            Curated firearms, parts, and tactical training from approved
            vendors. Track fulfillment, licensing, and performance analytics in
            one mission-ready dashboard.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="gap-2 bg-lime-400 text-black">
              Discover catalog <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-2xl font-semibold text-white">180+</p>
                <p className="text-sm text-zinc-400">Active vendors</p>
              </div>
              <Separator orientation="vertical" className="bg-white/20" />
              <div>
                <p className="text-2xl font-semibold text-white">11k</p>
                <p className="text-sm text-zinc-400">Units shipped / mo</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="border-zinc-800 bg-zinc-950">
        <CardHeader className="space-y-3">
          <Badge className="w-fit bg-white/10 text-xs uppercase text-white">
            Vendor spotlight
          </Badge>
          <CardTitle className="text-2xl">
            Real-time fulfillment lanes
          </CardTitle>
          <p className="text-sm text-zinc-400">
            From onboarding to compliant shipping labels, see how high-volume
            vendors operate on GunPoint.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {featuredVendors.map((vendor) => (
            <div
              key={vendor.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">{vendor.name}</p>
                  <p className="text-sm text-zinc-400">{vendor.fulfillment}</p>
                </div>
                <Badge className="bg-lime-300 text-black">
                  {vendor.rating} ★
                </Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
                {vendor.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/15 px-3 py-1"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

function BrandStrip() {
  const brands = ["ATA", "Aimpoint", "Hogue", "SureFire", "EOTech"];
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-semibold tracking-[0.2em] text-zinc-300">
        {brands.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="space-y-6">
      <SectionHeading title="Store Categories" eyebrow="Best Sellers" />
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="group overflow-hidden border-white/10 bg-zinc-950"
          >
            <div className="relative h-60">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 space-y-3">
                <Badge className="w-fit bg-white/20 text-white">
                  {category.vendors} vendors
                </Badge>
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                <p className="text-sm text-zinc-300">{category.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PopularProducts() {
  return (
    <section className="space-y-8">
      <SectionHeading title="Popular Products" eyebrow="Trending" />
      <div className="grid gap-6 md:grid-cols-3">
        {popularProducts.map((product) => (
          <Card
            key={product.name}
            className="flex flex-col overflow-hidden border-white/10 bg-zinc-950"
          >
            <div className="relative h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute left-4 top-4">
                <Badge className="bg-lime-300 text-black">{product.badge}</Badge>
              </div>
            </div>
            <CardContent className="flex flex-1 flex-col justify-between p-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {product.vendor}
                </p>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg text-lime-300">{product.price}</p>
              </div>
              <Button
                variant="ghost"
                className="mt-4 justify-start gap-2 text-white"
              >
                View listing <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TacticalStrip() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="relative overflow-hidden border-none bg-black">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80"
          alt="Shooting range"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative space-y-4 p-10">
          <Badge className="bg-white/15 text-white">We are powerful</Badge>
          <h2 className="text-3xl font-semibold">
            The tactical skills to respond with confidence
          </h2>
          <p className="text-zinc-300">
            Host your next demo day or long-range session at our flagship range
            with ballistic analytics streamed to every vendor dashboard.
          </p>
          <Button className="bg-white text-black hover:bg-white/90">
            Book the range
          </Button>
        </div>
      </Card>
      <Card className="space-y-4 border-white/10 bg-zinc-950 p-8">
        <h3 className="text-2xl font-semibold">Why vendors choose us</h3>
        <div className="space-y-5 text-sm text-zinc-300">
          <VendorAdvantage
            icon={Truck}
            title="FFL aware shipping lanes"
            description="Auto-routing ensures each order uses compliant carriers and paperwork."
          />
          <VendorAdvantage
            icon={ShoppingBag}
            title="Real-time catalog edits"
            description="Update pricing, compliance docs, and media across every channel instantly."
          />
          <VendorAdvantage
            icon={Target}
            title="Performance intelligence"
            description="Conversion and retention telemetry benchmarked across 180+ sellers."
          />
        </div>
      </Card>
    </section>
  );
}

function Services() {
  return (
    <section className="space-y-6">
      <SectionHeading title="Our Best Services" eyebrow="We deliver" />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            className="border-white/10 bg-white/5 p-6 text-white"
          >
            <service.icon className="mb-4 h-10 w-10 text-lime-300" />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{service.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function LaserTraining() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <Card className="space-y-4 border-white/10 bg-zinc-950 p-8">
        <Badge className="bg-white/15 text-white">
          Inside the vendor store
        </Badge>
        <h3 className="text-3xl font-semibold">
          Sharpen your skills with laser training devices
        </h3>
        <p className="text-zinc-300">
          Showcase your range kits using interactive demos and bookable
          simulator sessions. Our concierge team captures leads and routes them
          straight to your vendor dashboard.
        </p>
        <ul className="space-y-3 text-sm text-zinc-300">
          <li>• Firearm rentals orchestrated by FFL partners in 38 states</li>
          <li>• Ammo purchase workflows with verifiable ID gates</li>
          <li>• Live analytics for walk-ins, online demos, and waitlists</li>
        </ul>
        <Button variant="outline" className="border-white/30 text-white">
          Schedule a walkthrough
        </Button>
      </Card>
      <Card className="relative overflow-hidden border-none">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80"
          alt="Laser training"
          fill
          className="object-cover"
        />
      </Card>
    </section>
  );
}

function FeaturedProducts() {
  const featured = [
    {
      name: "S10 Trucking Tactical Shotgun",
      price: "$2,050.00",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80&sat=-35",
    },
    {
      name: "Carbon Edge AR-15 Builder Kit",
      price: "$1,240.00",
      image:
        "https://images.unsplash.com/photo-1519810755548-39cd217da494?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Elite DMR Carbon G2",
      price: "$3,590.00",
      image:
        "https://images.unsplash.com/photo-1455098934982-64c622c5e066?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="space-y-6">
      <SectionHeading title="Featured Products" eyebrow="Just in" />
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((item) => (
          <Card
            key={item.name}
            className="overflow-hidden border-white/10 bg-zinc-950"
          >
            <div className="relative h-52">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-lime-300">{item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="space-y-6">
      <SectionHeading title="Client Feedback" eyebrow="Vetted voices" />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="border-white/10 bg-white/5 p-6 text-white"
          >
            <p className="text-lg italic text-zinc-100">
              “{testimonial.quote}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Avatar className="h-12 w-12 border border-white/30">
                <AvatarImage
                  src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
                    testimonial.name,
                  )}`}
                  alt={testimonial.name}
                />
                <AvatarFallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-zinc-300">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="space-y-6">
      <SectionHeading title="Our Latest Posts" eyebrow="Pro intel" />
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            key={post.title}
            className="border-white/10 bg-zinc-950 p-5 text-white"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {post.date}
            </p>
            <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
            <p className="mt-3 text-sm text-zinc-300">{post.excerpt}</p>
            <Button
              variant="link"
              className="mt-3 px-0 text-lime-300 hover:text-lime-200"
            >
              Continue reading
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900 to-black p-8 text-white lg:p-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <Badge className="bg-white/10 text-white">Data newsletter</Badge>
          <h3 className="text-3xl font-semibold">Subscribe your newsroom</h3>
          <p className="text-sm text-zinc-300">
            Weekly marketplace intel, compliance updates, and launch playbooks.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-1/2">
          <Input
            placeholder="Enter your work email"
            className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
            type="email"
          />
          <Button className="bg-lime-400 text-black hover:bg-lime-300">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const footerLinks = [
    {
      title: "About Store",
      links: ["Company", "Mission", "Press", "Contact"],
    },
    {
      title: "Your Account",
      links: ["Dashboard", "Orders", "Saved items", "Support"],
    },
    { title: "Quick Links", links: ["Vendors", "Training", "Blog", "Careers"] },
    {
      title: "Information",
      links: ["FFL Partners", "Legal", "Privacy", "Compliance"],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-sm text-zinc-400 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-white">GUNPOINT</p>
          <p>We stock exclusive and premium models across 180+ vendors.</p>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} GunPoint. All rights reserved.
          </p>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                {section.title}
              </p>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link} className="hover:text-white">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.4em] text-lime-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold">{title}</h2>
    </div>
  );
}

function VendorAdvantage({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Shield;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="rounded-full bg-white/10 p-2">
        <Icon className="h-5 w-5 text-lime-300" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
