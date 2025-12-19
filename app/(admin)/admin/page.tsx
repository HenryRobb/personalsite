import { auth, signOut } from "@/auth"

export default async function AdminPage() {
  const session = await auth()

  return (
    <div>
      <h1>Admin</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  )
}
