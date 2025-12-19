"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        background: "color-mix(in oklab, var(--background) 85%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <Container>
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-semibold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            <span style={{ color: "var(--accent)" }}>{site.name}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:opacity-90"
                style={{ color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}
              >
                <span className="hover:underline" style={{ textDecorationColor: "var(--accent)" }}>
                  {item.label}
                </span>
              </Link>
            ))}

            <ThemeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl border px-3 py-2 text-sm"
              style={{ borderColor: "var(--border)" }}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <nav className="flex flex-col gap-1 py-3">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm transition"
                  style={{
                    color: "var(--foreground)",
                    background: "color-mix(in oklab, var(--card) 85%, transparent)",
                  }}
                >
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}

              {/* tiny accent row */}
              <div className="mt-2 flex gap-2 px-3">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent-2)" }} />
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
