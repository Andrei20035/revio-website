import type { Metadata } from "next"
import { LegalPage } from "../legal-page"

export const metadata: Metadata = {
  title: "Terms | Revio",
  description: "Simple terms for the Revio early access landing page.",
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      description="These terms describe the current early access landing page for Revio, an unreleased MVP social platform for automotive enthusiasts."
      updated="May 9, 2026"
      sections={[
        {
          title: "Early access status",
          body: (
            <p>
              Revio is currently in an early access and MVP stage. The website is informational, and joining the early access list does not guarantee immediate access, a specific launch date, or a particular set of features.
            </p>
          ),
        },
        {
          title: "Product changes",
          body: (
            <p>
              Features, rewards, community mechanics, visuals, and availability may change before launch. Content on this landing page should be treated as a preview of the direction of the product, not a final product promise.
            </p>
          ),
        },
        {
          title: "Responsible use",
          body: (
            <p>
              Please do not misuse the website, interfere with its operation, attempt unauthorized access, or submit false, spam, or misleading information through signup forms.
            </p>
          ),
        },
        {
          title: "No warranties",
          body: (
            <p>
              The landing page and early access signup are provided as-is at this MVP stage. Revio does not provide warranties that the website will always be available, error-free, or suitable for any particular purpose.
            </p>
          ),
        },
        {
          title: "Updates to these terms",
          body: (
            <p>
              These terms may be updated as Revio moves closer to launch. Future versions may include more detailed rules for accounts, content, community behavior, and product use.
            </p>
          ),
        },
      ]}
    />
  )
}
