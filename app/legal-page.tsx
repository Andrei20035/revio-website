import Link from "next/link"
import type { ReactNode } from "react"

type LegalSection = {
  title: string
  body: ReactNode
}

type LegalPageProps = {
  title: string
  description: string
  updated: string
  sections: LegalSection[]
}

export function LegalPage({ title, description, updated, sections }: LegalPageProps) {
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

        <article className="pb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/45">Revio legal</p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mb-3 text-lg leading-8 text-white/65">{description}</p>
          <p className="mb-12 text-sm text-white/40">Last updated: {updated}</p>

          <div className="space-y-9">
            {sections.map((section) => (
              <section key={section.title} className="border-t border-white/10 pt-8">
                <h2 className="mb-3 text-xl font-semibold text-white">{section.title}</h2>
                <div className="space-y-4 text-base leading-8 text-white/65">{section.body}</div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}
