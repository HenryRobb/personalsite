import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <Container>
      <SectionHeading
        title="About"
        subtitle="A quick snapshot of who I am and what I’m into."
      />

      <div className="prose max-w-none">
        <p>
          I’m Henry — a CS student focused on AI. I like building clean web apps,
          experimenting with ML, and shipping projects end-to-end.
        </p>

        <h2>Interests</h2>
        <ul>
          <li>Machine learning + applied AI</li>
          <li>Full-stack web development</li>
          <li>Data visualization + tooling</li>
        </ul>
      </div>
    </Container>
  );
}
