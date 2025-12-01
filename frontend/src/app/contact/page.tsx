import { PageHero } from "../../components/page-hero";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Contact"
        title="Compliance, vendor ops, and press hotline."
        description="Use the secure form or dial the priority lines for rapid support. Our humans answer in under two hours during business days."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="border-white/10 bg-zinc-950 p-6">
          <CardHeader className="p-0">
            <CardTitle>Message us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-0 pt-6">
            <Input placeholder="Your name" className="border-white/20 bg-white/5" />
            <Input placeholder="Work email" type="email" className="border-white/20 bg-white/5" />
            <textarea
              placeholder="How can we help?"
              className="min-h-[140px] w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/60 focus-visible:outline-none"
            />
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Send message
            </Button>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 p-6 text-sm text-zinc-200">
          <CardTitle className="text-2xl text-white">Direct lines</CardTitle>
          <div className="mt-5 space-y-4">
            <div>
              <Badge className="bg-white/15 text-white">Vendor desk</Badge>
              <p className="mt-2 text-lg text-white">vendors@gunpoint.co</p>
              <p>+1 (406) 555-7712</p>
            </div>
            <div>
              <Badge className="bg-white/15 text-white">Media & press</Badge>
              <p className="mt-2 text-lg text-white">press@gunpoint.co</p>
              <p>+1 (917) 555-6601</p>
            </div>
            <div>
              <Badge className="bg-white/15 text-white">Range facility</Badge>
              <p className="mt-2 text-lg text-white">range@gunpoint.co</p>
              <p>+1 (928) 555-4402</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}


