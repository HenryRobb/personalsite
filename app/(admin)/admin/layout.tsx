import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  const adminEmail = process.env.ADMIN_EMAIL

  if (!session?.user?.email) redirect("/api/auth/signin")
  if (adminEmail && session.user.email !== adminEmail) redirect("/")

  return <>{children}</>
}
