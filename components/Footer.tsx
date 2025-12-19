import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-gray-600">
          <div className="flex gap-4">
            {site.socials.map((s) => (
              <a key={s.href} href={s.href} className="hover:text-gray-900">
                {s.label}
              </a>
            ))}
          </div>
          <div>© {new Date().getFullYear()} {site.name}</div>
        </div>
      </Container>
    </footer>
  );
}
