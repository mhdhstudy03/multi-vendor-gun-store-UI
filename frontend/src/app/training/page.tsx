import { PageHero } from "../../components/page-hero";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const modules = [
  {
    name: "Long-range doctrine",
    duration: "3 day block",
    description:
      "Wind reading, ballistic calculators, and live-fire data streaming to the vendor cockpit.",
  },
  {
    name: "CQB + low light",
    duration: "2 day block",
    description:
      "Force-on-force evolutions with role players, IR-enabled video capture, and after action reports.",
  },
  {
    name: "Vendor demo days",
    duration: "Custom",
    description:
      "Host clients at our Flagstaff range with curated armorers and fulfillment concierge staff.",
  },
];

const schedule = [
  { day: "Monday", focus: "Advanced pistol mechanics" },
  { day: "Wednesday", focus: "Suppressed carbine lab" },
  { day: "Friday", focus: "Precision rifle validation" },
];

export default function TrainingPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Training program"
        title="Tactical skills built with real telemetry."
        description="Our instructor cadre includes SOF alumni, federal armorers, and master range officers. Every course produces shareable clips, analytics, and sales-ready media."
        actions={
          <>
            <Button className="bg-lime-400 text-black hover:bg-lime-300">
              Reserve range time
            </Button>
            <Button variant="outline" className="border-white/30 text-white">
              Download syllabus
            </Button>
          </>
        }
      />

      <section className="grid gap-6 md:grid-cols-3">
        {modules.map((module) => (
          <Card key={module.name} className="border-white/10 bg-zinc-950 p-6">
            <CardTitle className="text-xl">{module.name}</CardTitle>
            <p className="text-sm uppercase tracking-[0.3em] text-lime-200">
              {module.duration}
            </p>
            <p className="mt-3 text-sm text-zinc-300">{module.description}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_0.6fr]">
        <Card className="border-white/10 bg-white/5 p-8">
          <CardTitle className="text-2xl">Weekly cadence</CardTitle>
          <div className="mt-6 space-y-4">
            {schedule.map((block) => (
              <div key={block.day}>
                <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">
                  {block.day}
                </p>
                <p className="text-lg text-white">{block.focus}</p>
                <Separator className="mt-3 bg-white/10" />
              </div>
            ))}
          </div>
        </Card>
        <Card className="border-white/10 bg-zinc-950 p-8">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl">Facility features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-0 pt-5 text-sm text-zinc-300">
            <p>• 1,400m steel gallery with live wind towers.</p>
            <p>• Six climate-controlled shoot houses with IR lighting.</p>
            <p>• Integrated broadcast studio for remote vendor demos.</p>
            <p>• On-site compliance desk and secure armory storage.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


