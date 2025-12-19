import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function ExperiencePage() {
  return (
    <Container>
      <SectionHeading
        title="Experience"
        subtitle="Roles, leadership, and relevant things I’ve done."
      />

      <div className="space-y-6">
        <div className="rounded-2xl border p-5">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-semibold">Your Role / Org</h3>
            <span className="text-sm text-gray-600">2025 — Present</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Add 2–4 bullet highlights here.
          </p>
        </div>
      </div>
    </Container>
  );
}
