import Link from "next/link";
import { Container } from "@/components/Container";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <Container>
      <section className="space-y-4">

        <h1 className="text-4xl font-semibold tracking-tight">
          {site.name}
        </h1>
        <p className="text-lg text-gray-600">{site.title}</p>
        <p className="max-w-2xl text-gray-700">
          I build software and explore AI. This site has my projects, experience,
          and a downloadable resume.
        </p>

        <div className="flex gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-xl border px-4 py-2 text-sm shadow-sm hover:bg-gray-50"
          >
            View Projects
          </Link>
          <Link
            href="/resume/download"
            target="_blank"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Download Resume
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">
            See all
          </Link>
        </div>

        <div className="grid gap-4">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </Container>
  );
}
