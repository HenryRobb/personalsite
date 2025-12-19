"use client"

import { useState } from "react"

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<string>("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file) return

    setStatus("Uploading...")

    const form = new FormData()
    form.append("file", file)

    const res = await fetch("/api/resume/upload", {
      method: "POST",
      body: form,
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setStatus(`Error: ${data.error ?? res.statusText}`)
      return
    }

    setStatus("Uploaded! Refreshing...")
    window.location.reload()
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button type="submit" disabled={!file}>
        Upload
      </button>
      {status ? <p>{status}</p> : null}
    </form>
  )
}
