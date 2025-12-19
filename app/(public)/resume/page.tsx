import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function ResumePage() {
  return (
    <Container>
      <SectionHeading
        title="Resume"
        subtitle="Download the latest version."
      />

      <div className="rounded-2xl border p-5">
        <p className="text-gray-700">
          Click below to download my current resume PDF.
        </p>

        <div className="mt-4">
          <Link
            href="/resume/download"
            target="_blank"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </Container>
  );
}
