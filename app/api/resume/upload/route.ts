import { NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"

export const runtime = "nodejs" // important: Blob + file upload

export async function POST(req: Request) {
  const session = await auth()
  const adminEmail = process.env.ADMIN_EMAIL

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  if (adminEmail && session.user.email !== adminEmail) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const formData = await req.formData()
  const file = formData.get("file")

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 })
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json({ error: "Only PDF allowed" }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const filename = `resume-${Date.now()}.pdf`

  const blob = await put(filename, bytes, {
    access: "public",
    contentType: "application/pdf",
  })

  // Make this the current resume
  await prisma.$transaction([
    prisma.resume.updateMany({
      where: { isCurrent: true },
      data: { isCurrent: false },
    }),
    prisma.resume.create({
      data: {
        url: blob.url,
        pathname: blob.pathname,
        size: file.size,
        mimeType: file.type,
        isCurrent: true,
      },
    }),
  ])

  return NextResponse.json({ ok: true, url: blob.url })
}
