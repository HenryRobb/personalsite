import { ReactNode } from "react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="py-10">{children}</main>
      <Footer />
    </>
  );
}
