export const site = {
  name: "Henry Robb",
  title: "Henry Robb — Software Engineer",
  description:
    "Personal site for Henry Robb — projects, experience, and contact.",
  nav: [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ],
  socials: [
    { href: "https://github.com/HenryRobb", label: "GitHub" },
    { href: "https://linkedin.com/in/henry-robb", label: "LinkedIn" },
    // add LinkedIn, email, etc
  ],
} as const;
