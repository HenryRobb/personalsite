import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import UploadForm from "./upload-form"
import type { Prisma } from "@prisma/client"

type ResumeRow = Prisma.ResumeGetPayload<{}>

export default async function AdminResumePage() {
  const session = await auth()
  const adminEmail = process.env.ADMIN_EMAIL

  if (!session?.user?.email) redirect("/api/auth/signin")
  if (adminEmail && session.user.email !== adminEmail) redirect("/")

  const current: ResumeRow | null = await prisma.resume.findFirst({
    where: { isCurrent: true },
    orderBy: { createdAt: "desc" },
  })

  const resumes: ResumeRow[] = await prisma.resume.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  })

  return (
    <div style={{ padding: 24, display: "grid", gap: 16 }}>
      <h1>Resume</h1>

      <section style={{ border: "1px solid #333", padding: 16, borderRadius: 12 }}>
        <h2>Upload new resume (PDF)</h2>
        <UploadForm />
      </section>

      <section style={{ border: "1px solid #333", padding: 16, borderRadius: 12 }}>
        <h2>Current</h2>
        {current ? (
          <div style={{ display: "grid", gap: 8 }}>
            <div>Uploaded: {current.createdAt.toLocaleString()}</div>
            <a href={current.url} target="_blank" rel="noreferrer">
              Open PDF
            </a>
            <a href="/resume/download" target="_blank" rel="noreferrer">
              Public download link
            </a>
          </div>
        ) : (
          <p>No resume uploaded yet.</p>
        )}
      </section>

      <section style={{ border: "1px solid #333", padding: 16, borderRadius: 12 }}>
        <h2>History</h2>
        <ul style={{ display: "grid", gap: 8 }}>
          {resumes.map((r: ResumeRow) => (
            <li key={r.id}>
              {r.isCurrent ? "✅ " : ""}
              {r.createdAt.toLocaleString()} —{" "}
              <a href={r.url} target="_blank" rel="noreferrer">
                open
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
