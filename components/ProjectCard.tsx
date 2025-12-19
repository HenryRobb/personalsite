import Link from "next/link";
import { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-gray-600">{project.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2 py-0.5 text-xs text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/projects#${project.slug}`}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Details
        </Link>
      </div>

      {project.links?.length ? (
        <div className="mt-4 flex gap-4 text-sm">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} className="underline underline-offset-4">
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
