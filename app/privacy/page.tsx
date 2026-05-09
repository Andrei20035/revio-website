import type { Metadata } from "next"
import { LegalPage } from "../legal-page"

const contactEmail = "contact@revio.app"

export const metadata: Metadata = {
  title: "Privacy Policy | Revio",
  description: "Simple privacy information for the Revio early access landing page.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains what Revio collects while the early access landing page is live and how that information is used."
      updated="May 9, 2026"
      sections={[
        {
          title: "What we collect",
          body: (
            <>
              <p>
                Revio collects email addresses submitted through the early access signup form so we can manage interest in the MVP and contact people about access when it becomes available.
              </p>
              <p>
                We may also collect basic analytics data, such as page views, approximate location, device type, referral source, and interaction events, to understand landing page performance.
              </p>
            </>
          ),
        },
        {
          title: "How we use information",
          body: (
            <p>
              We use signup information to maintain the early access list and send relevant updates about Revio. Analytics data helps us improve the website and understand which parts of the landing page are working.
            </p>
          ),
        },
        {
          title: "Data sharing",
          body: (
            <p>
              Revio does not sell personal data. We may use trusted service providers for hosting, analytics, email delivery, or form processing, but only as needed to operate the landing page and early access signup.
            </p>
          ),
        },
        {
          title: "Deleting your data",
          body: (
            <p>
              You can request deletion of your email address or related signup data by contacting us at <a className="text-[#4A90E2] hover:text-white" href={`mailto:${contactEmail}`}>{contactEmail}</a>. This contact address is a placeholder and may be replaced before launch.
            </p>
          ),
        },
        {
          title: "Changes",
          body: (
            <p>
              Revio is still in MVP stage, so this policy may change as the product, signup process, and analytics setup evolve. Any future version should stay clear about what is collected and why.
            </p>
          ),
        },
      ]}
    />
  )
}
