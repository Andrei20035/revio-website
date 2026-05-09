import type { Metadata } from "next"
import { LegalPage } from "../legal-page"

export const metadata: Metadata = {
  title: "Cookies | Revio",
  description: "Simple cookie information for the Revio early access landing page.",
}

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      description="This page explains how cookies may be used on the Revio early access landing page."
      updated="May 9, 2026"
      sections={[
        {
          title: "What cookies are",
          body: (
            <p>
              Cookies are small files stored by your browser. They can help a website remember basic settings, keep essential features working, or understand how visitors use the site.
            </p>
          ),
        },
        {
          title: "Cookies we may use",
          body: (
            <>
              <p>
                Revio may use essential cookies that are needed for the website to function correctly.
              </p>
              <p>
                We may also use basic analytics cookies to understand traffic, measure landing page performance, and improve the early access signup experience.
              </p>
            </>
          ),
        },
        {
          title: "Managing cookies",
          body: (
            <p>
              You can control or delete cookies through your browser settings. Blocking some cookies may affect how parts of the website work, but the landing page should remain readable.
            </p>
          ),
        },
        {
          title: "Changes",
          body: (
            <p>
              Because Revio is still an MVP, the cookie setup may change as the website and early access process evolve. This page should be updated when meaningful cookie or analytics changes are made.
            </p>
          ),
        },
      ]}
    />
  )
}
