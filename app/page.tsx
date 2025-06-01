import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Coming soon",
    week: 1,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Coming soon",
    week: 2,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Coming soon",
    week: 3,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Coming soon",
    week: 4,
    status: "upcoming",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Coming soon",
    week: 5,
    status: "upcoming",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Coming soon",
    week: 6,
    status: "upcoming",
  },
  {
    id: 7,
    title: "Project Seven",
    description: "Coming soon",
    week: 7,
    status: "upcoming",
  },
  {
    id: 8,
    title: "Project Eight",
    description: "Coming soon",
    week: 8,
    status: "upcoming",
  },
  {
    id: 9,
    title: "Project Nine",
    description: "Coming soon",
    week: 9,
    status: "upcoming",
  },
  {
    id: 10,
    title: "Project Ten",
    description: "Coming soon",
    week: 10,
    status: "upcoming",
  },
];

export default function Home() {
  return (
    <div className="py-12 md:py-20">
      {/* Magazine Header */}
      <header className="mb-16 text-center">
        <h1 className="magazine-title mb-4">10 WEEKS</h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-6">VOLUME 1 • ISSUE 1</p>
        <Separator className="magazine-divider" />
        <p className="mt-8 text-xl md:text-2xl italic">A Journey Through Ten Creative Projects</p>
      </header>

      {/* Introduction Section */}
      <section className="mb-16">
        <div className="vintage-border mb-10">
          <h2 className="article-heading mb-6">The Challenge</h2>
          <div className="column-text">
            <p className="drop-cap mb-4">
              Welcome to <span className="accent-text">10 Weeks</span>, an ambitious journey through ten unique projects. 
              Each week, a new creation will be unveiled, showcasing different skills, technologies, and creative visions.
              This magazine-style showcase documents the process, challenges, and results of each undertaking.
            </p>
            <p className="mb-4">
              From interactive applications to artistic expressions, each project represents a focused effort to build 
              something meaningful in a limited timeframe. Follow along as the collection grows week by week, forming 
              a complete portfolio of diverse works.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">The Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-border hover:border-accent transition-colors duration-300">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">Week {project.week}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground uppercase">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="outline" className="w-full" disabled={project.status === "upcoming"}>
                  {project.status === "upcoming" ? "Coming Soon" : "View Project"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <div className="bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About This Showcase</h2>
          <p className="mb-4">
            This showcase is designed in the style of vintage magazines, with a clean greyscale palette accented with 
            vibrant red highlights. The layout draws inspiration from classic editorial design, featuring multi-column 
            text, drop caps, and elegant typography.
          </p>
          <p>
            Built with Next.js and Shadcn UI, this site combines modern web technologies with timeless design principles.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-8 border-t border-border">
        <p className="text-muted-foreground">© 2024 Ten Weeks Project</p>
      </footer>
    </div>
  );
}
