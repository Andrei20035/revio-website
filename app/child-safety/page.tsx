import type { Metadata } from "next"
import { LegalPage } from "../legal-page"

const contactEmail = "threvioapp@gmail.com"
const googleStandardsUrl = "https://support.google.com/googleplay/android-developer/answer/14747720"

export const metadata: Metadata = {
  title: "Child Safety Standards | Revio",
  description:
    "Revio's Child Safety Standards: our zero-tolerance policy on child sexual abuse and exploitation (CSAE/CSAM), prohibited content, and how to report child-safety concerns.",
  alternates: {
    canonical: "https://www.joinrevio.app/child-safety",
  },
  openGraph: {
    title: "Child Safety Standards | Revio",
    description:
      "Revio has zero tolerance for child sexual abuse and exploitation. Learn what is prohibited and how to report child-safety concerns.",
    url: "https://www.joinrevio.app/child-safety",
    siteName: "Revio",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const link = "text-[#4A90E2] hover:text-white"

export default function ChildSafetyPage() {
  return (
    <LegalPage
      title="Child Safety Standards"
      description={
        'Revio is a 13+ social car-spotting community where users create profiles, upload and share car-related posts and photos, and interact through comments. These Child Safety Standards explain how Andrei R., the developer of Revio ("Revio", "we", "us", or "our"), addresses child sexual abuse and exploitation (CSAE) and how anyone can report a concern.'
      }
      updated="August 22, 2026"
      sections={[
        {
          title: "Effective date",
          body: (
            <p>
              These Child Safety Standards are effective as of <strong className="text-white/80">August 22, 2026</strong>. They apply to the Revio mobile app and to all content, profiles, and interactions on Revio.
            </p>
          ),
        },
        {
          title: "Zero tolerance for child sexual abuse and exploitation",
          body: (
            <>
              <p>
                Revio has zero tolerance for child sexual abuse and exploitation. Child sexual abuse material (CSAM) and any content or behaviour that sexualizes, exploits, or endangers a minor is strictly prohibited on Revio, without exception.
              </p>
              <p>
                Accounts that create, upload, share, request, or promote such content or behaviour are removed. Where we are legally required to do so, we escalate reports to the relevant authorities.
              </p>
            </>
          ),
        },
        {
          title: "Minimum age",
          body: (
            <p>
              Revio is intended for users aged 13 and over. Accounts that we identify as belonging to someone under the minimum age may be restricted or removed. Revio is not designed for, or directed at, children under 13.
            </p>
          ),
        },
        {
          title: "Prohibited content and behaviour",
          body: (
            <>
              <p>The following are not allowed anywhere on Revio, including in posts, photos, comments, usernames, profile text, and profile images:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Child sexual abuse material (CSAM) in any form, real or generated.</li>
                <li>Content that sexualizes, exploits, or endangers a minor, including sexualized depictions or descriptions of minors.</li>
                <li>Soliciting, offering, trading, or advertising CSAE material, or linking to it.</li>
                <li>Grooming, sexual advances, or sexually explicit communication directed at a minor.</li>
                <li>Attempting to arrange offline contact with a minor for sexual purposes.</li>
                <li>Sextortion, threats to share intimate imagery, or coercion involving a minor.</li>
                <li>Sharing personal or identifying information about a minor in a way that puts them at risk.</li>
              </ul>
              <p>
                Uploading car-related content does not exempt any part of a post — including captions, comments, or background details in a photo — from these rules.
              </p>
            </>
          ),
        },
        {
          title: "How to report a child-safety concern",
          body: (
            <>
              <p>
                If you see content, an account, or behaviour on Revio that may involve child sexual abuse or exploitation, please contact us by email at{" "}
                <a className={link} href={`mailto:${contactEmail}?subject=Child%20Safety%20Report`}>{contactEmail}</a>. Please use the subject line <em>Child Safety Report</em> so we can identify it quickly.
              </p>
              <p>Please include as much of the following as you can:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>A link to, or the username shown on, the profile or post involved.</li>
                <li>Screenshots of the profile text, caption, or comments that show the problem.</li>
                <li>A short description of what you saw and when you saw it.</li>
                <li>Any other context that helps us locate the content in the app.</li>
              </ul>
              <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/75">
                <strong className="text-white">Important:</strong> do not include, attach, forward, or re-share any illegal imagery in your report — including suspected child sexual abuse material. Describe it instead, and report it to your local law enforcement or national reporting hotline. If a child is in immediate danger, contact your local emergency services first.
              </p>
            </>
          ),
        },
        {
          title: "What happens after you report",
          body: (
            <>
              <p>
                Reports sent to <a className={link} href={`mailto:${contactEmail}`}>{contactEmail}</a> are reviewed by the developer. Depending on what the review finds, reported content or accounts may be removed, restricted, or suspended, and repeat or severe violations result in permanent removal from Revio.
              </p>
              <p>
                Where we are legally required to do so, we report and escalate cases to the relevant authorities and preserve information connected to a report so that it can be provided to them.
              </p>
            </>
          ),
        },
        {
          title: "Requests from law enforcement",
          body: (
            <p>
              Law enforcement and child-protection agencies can contact us at{" "}
              <a className={link} href={`mailto:${contactEmail}`}>{contactEmail}</a> regarding child-safety matters, including lawful requests for information related to a reported account or piece of content.
            </p>
          ),
        },
        {
          title: "Compliance with Google Play",
          body: (
            <p>
              These standards are published to meet the child safety requirements for social apps distributed on Google Play. Google&apos;s guidance is available in the{" "}
              <a className={link} href={googleStandardsUrl} target="_blank" rel="noopener noreferrer">
                Google Play Child Safety Standards policy
              </a>
              .
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              Revio is developed by Andrei R. For child-safety reports or questions about these standards, contact{" "}
              <a className={link} href={`mailto:${contactEmail}`}>{contactEmail}</a>. We may update these standards as Revio evolves, and the effective date above will be revised when we do.
            </p>
          ),
        },
      ]}
    />
  )
}
