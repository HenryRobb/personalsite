import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";

export function NavBar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold">
            {site.name}
          </Link>

          <nav className="flex gap-4 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
