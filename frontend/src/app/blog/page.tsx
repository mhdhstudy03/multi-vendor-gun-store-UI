import { PageHero } from "../../components/page-hero";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../components/ui/card";

const posts = [
  {
    title: "How vendors craft compliant media",
    date: "August 18, 2025",
    excerpt:
      "A look at our in-house creative studio and how it keeps ad platforms green-lit for firearms brands.",
  },
  {
    title: "Ship-anywhere FFL routing",
    date: "August 9, 2025",
    excerpt:
      "Dive into our API that hands every buyer the correct paperwork, from suppressors to SBR conversions.",
  },
  {
    title: "Building community-driven drops",
    date: "July 31, 2025",
    excerpt:
      "Lessons from collectors clubs that sold out in under 8 minutes using GunPoint waitlists.",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-0">
      <PageHero
        eyebrow="Intel briefings"
        title="Stories, compliance updates, and launch debriefs."
        description="Our editorial team works with instructors, lawyers, and vendor founders to publish share-worthy playbooks."
        actions={
          <Button className="bg-lime-400 text-black hover:bg-lime-300">
            Subscribe to updates
          </Button>
        }
      />

      <section className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="border-white/10 bg-zinc-950 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {post.date}
            </p>
            <CardTitle className="mt-3 text-xl">{post.title}</CardTitle>
            <CardContent className="p-0 pt-4 text-sm text-zinc-300">
              {post.excerpt}
            </CardContent>
            <Button variant="link" className="mt-4 px-0 text-lime-300 hover:text-lime-200">
              Continue reading
            </Button>
          </Card>
        ))}
      </section>
    </div>
  );
}


