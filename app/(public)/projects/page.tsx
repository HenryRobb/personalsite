import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Container>
      <SectionHeading
        title="Projects"
        subtitle="A few things I’ve built (more coming soon)."
      />
      <div className="grid gap-4">
        {projects.map((p) => (
          <div key={p.slug} id={p.slug}>
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </Container>
  );
}
