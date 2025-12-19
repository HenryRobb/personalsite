import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <Container>
      <SectionHeading
        title="Contact"
        subtitle="The easiest ways to reach me."
      />

      <div className="space-y-3 text-gray-700">
        <p>
          Email: <a className="underline" href="mailto:you@example.com">you@example.com</a>
        </p>
        <p>
          GitHub: <a className="underline" href="https://github.com/HenryRobb">github.com/HenryRobb</a>
        </p>
        {/* add LinkedIn */}
      </div>
    </Container>
  );
}
