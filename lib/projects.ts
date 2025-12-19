export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "personal-site",
    name: "Personal Website",
    summary: "My Next.js + TS + Tailwind site deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: [{ label: "Repo", href: "https://github.com/HenryRobb/PersonalSite" }],
  },
  // add more later
];
