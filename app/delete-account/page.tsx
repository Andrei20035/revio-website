import type { Metadata } from "next"
import Link from "next/link"

const contactEmail = "threvioapp@gmail.com"

export const metadata: Metadata = {
  title: "Account Deletion | Revio",
  description: "Account deletion requests for the Revio app — coming soon.",
}

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,144,226,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(155,89,182,0.18),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-8 sm:px-6 md:py-12">
        <header className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            Back to home
          </Link>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center pb-24 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/45">Account deletion</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Coming soon</h1>
          <p className="mb-8 max-w-xl text-lg leading-8 text-white/65">
            Web-based account deletion is not available yet. In the meantime you can delete your account directly in the
            Revio app under Settings → Account → Delete account, or email us and we will handle the request.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            {contactEmail}
          </a>
        </div>
      </div>
    </main>
  )
}
