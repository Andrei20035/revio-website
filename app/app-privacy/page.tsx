import type { Metadata } from "next"
import { LegalPage } from "../legal-page"

const contactEmail = "threvioapp@gmail.com"

export const metadata: Metadata = {
  title: "App Privacy Policy | Revio",
  description:
    "Privacy Policy for the Revio mobile app: what we collect, how we use it, who we share it with, and how to delete your data.",
}

export default function AppPrivacyPage() {
  return (
    <LegalPage
      title="App Privacy Policy"
      description={
        'Revio is a car-spotting community where users can create profiles, share car photos and posts, discover public posts, and interact through comments and likes. This Privacy Policy explains how Andrei R., the developer of Revio ("Revio", "we", "us", or "our"), collects, uses, shares, stores, and protects personal data when you use the Revio mobile application and related services (collectively, the "Services").'
      }
      updated="August 21, 2026"
      sections={[
        {
          title: "Developer and contact",
          body: (
            <>
              <p>Developer and data controller: Andrei R.</p>
              <p>
                Contact:{" "}
                <a className="text-[#4A90E2] hover:text-white" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </p>
              <p>
                This Policy applies to the Revio Android app, its backend, and the related waitlist and support services
                operated by Andrei R.
              </p>
            </>
          ),
        },
        {
          title: "1. Eligibility",
          body: (
            <p>
              Revio is intended for people aged 13 or older. We collect the date of birth entered during profile setup,
              but it is not displayed publicly. If you believe a child under 13 has provided personal data, contact{" "}
              <a className="text-[#4A90E2] hover:text-white" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>{" "}
              so we can investigate and delete it where appropriate.
            </p>
          ),
        },
        {
          title: "2. Data we collect",
          body: (
            <>
              <h3 className="text-base font-semibold text-white/80">Account and profile</h3>
              <p>
                We collect the information needed to create and operate your account: email address, sign-in method,
                account identifiers, full name, username, date of birth, country, optional phone number, profile photo,
                and optional details and photo of your own car. For password sign-in, the server stores a one-way
                password hash, not your plain-text password.
              </p>
              <p>
                We also process account status and activity statistics such as SpotScore, streaks, challenge progress,
                leaderboard position, badges, post count, Early Spotter status, and moderation status.
              </p>
              <p>
                Security and session records can include device identifier and name, IP address, user-agent, sign-in
                provider, session and hashed refresh-token records, and timestamps.
              </p>
              <p>
                Waitlist data you previously submitted — such as email, username, platform, country, and signup
                timestamps — may be matched by email to prefill your profile and assign Early Spotter status.
              </p>

              <h3 className="text-base font-semibold text-white/80">Content and activity</h3>
              <p>
                We collect content and actions you provide: car photos, captions, car make and model, posts, comments,
                likes, challenge participation, reports, notifications, and related timestamps. We also process
                moderation and safety records needed to investigate reports and enforce our rules.
              </p>

              <h3 className="text-base font-semibold text-white/80">Location and photos</h3>
              <p>
                Location is optional and requested only when you create a post. If permitted, we may collect and store
                the precise latitude and longitude attached to that post and derive its town and country. Revio does not
                collect location in the background. Uploaded photos are re-encoded before upload, so EXIF metadata such
                as GPS tags is not copied to the stored image.
              </p>

              <h3 className="text-base font-semibold text-white/80">Feedback and support</h3>
              <p>
                If you send feedback or request support, we collect your messages, category, ratings, and related
                context. If you choose to include diagnostics, we may also receive app version, Android version, device
                model, connection type, and recent technical error information. An optional account-deletion reason may
                be retained without your user ID for product analysis.
              </p>

              <h3 className="text-base font-semibold text-white/80">Optional analytics and crash diagnostics</h3>
              <p>
                Firebase Analytics and Firebase Crashlytics collection are disabled by default. If you enable “Help
                improve Revio” in Settings, Google may process app interactions, feature-performance events, app and
                device information, identifiers, crash reports, non-fatal errors, and technical breadcrumbs. We design
                Revio&apos;s own analytics event parameters to avoid names, email, phone number, birth date, captions,
                comments, exact location, image URLs, passwords, tokens, and internal user or post IDs. You can turn
                collection off at any time to stop future collection. We do not use this data for advertising.
              </p>

              <h3 className="text-base font-semibold text-white/80">On-device data</h3>
              <p>
                The app stores sign-in tokens in protected device storage and may cache feed data, images, settings, and
                consent choices locally so it can work reliably. You can remove local app data through Android settings
                or by uninstalling the app.
              </p>
            </>
          ),
        },
        {
          title: "3. How we use data",
          body: (
            <>
              <p>
                We use data to provide and secure accounts; operate profiles and social features; upload and display
                images; calculate scores, streaks, challenges and rankings; provide optional post location; send in-app
                activity updates; handle feedback; investigate abuse; maintain and improve the Services; and comply with
                legal obligations.
              </p>
              <p>
                We process optional location and Firebase analytics/crash data based on your choices. Other processing
                is necessary to provide the Services, keep them secure, or comply with law.
              </p>
            </>
          ),
        },
        {
          title: "4. Visibility and sharing",
          body: (
            <>
              <p>
                Other Revio users may see your full name, username, country, profile photo, optional car details/photo,
                SpotScore, streak, rankings, badges, posts, comments, and likes. Public content can be viewed, copied,
                or shared by others, so do not post confidential or sensitive information.
              </p>
              <p>
                A location-enabled post shows town and country in the standard app interface. At present, the stored
                coordinates attached to that post can also be included in post data delivered to authenticated Revio
                clients. Do not attach location if you do not want precise coordinates associated with a post.
              </p>
              <p>
                We use Cloudflare R2 for uploaded images; Hetzner Online GmbH for backend and database hosting; Google
                for Google Sign-In, Firebase Analytics, and Firebase Crashlytics; and Supabase for waitlist data. These
                providers process data only to supply their services to Revio and under their applicable terms.
              </p>
              <p>
                We may disclose data when required by law, to protect users or the Services, or as part of a business
                transfer subject to appropriate safeguards. We do not sell personal data or share it for behavioural
                advertising.
              </p>
            </>
          ),
        },
        {
          title: "5. International processing",
          body: (
            <p>
              Our providers may process data in countries other than your own. Where required, we use appropriate
              contractual or legal safeguards for international transfers.
            </p>
          ),
        },
        {
          title: "6. Retention and deletion",
          body: (
            <>
              <p>
                We keep account data while your account is active and only as long as needed for the purposes described
                above. Security records, legal records, and backups may be retained for a limited period when necessary
                to prevent abuse, meet legal obligations, or resolve disputes.
              </p>
              <p>
                Delete your account in Settings → Account → Delete account, or follow the instructions at{" "}
                <a className="text-[#4A90E2] hover:text-white" href="/delete-account">
                  joinrevio.app/delete-account
                </a>
                . Confirmed deletion removes the account and associated profile, posts, comments, likes, reports,
                sessions, and other database records. Revio then deletes associated image objects; failed image removals
                are queued for retry.
              </p>
              <p>
                Limited de-identified deletion feedback, aggregated statistics, and security/audit records may remain
                where they no longer directly identify you or retention is required for security or law. Data previously
                sent to Firebase is subject to Google&apos;s retention and deletion controls. Account deletion is
                permanent.
              </p>
            </>
          ),
        },
        {
          title: "7. Your choices and rights",
          body: (
            <>
              <p>
                You can edit profile information, deny or revoke Android location permission, turn optional Firebase
                collection on or off in Settings, omit optional feedback diagnostics, and delete your account.
              </p>
              <p>
                Depending on where you live, you may request access, correction, deletion, restriction, objection, or
                portability, and withdraw consent where processing relies on consent. Email{" "}
                <a className="text-[#4A90E2] hover:text-white" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>{" "}
                from the address associated with your account. We may verify your identity. You may also complain to
                your local data-protection authority.
              </p>
            </>
          ),
        },
        {
          title: "8. Security",
          body: (
            <p>
              We use measures designed to protect data, including HTTPS for production network traffic, one-way password
              hashing, protected token storage on Android, access controls, and limited provider access. No system is
              completely secure, so absolute security cannot be guaranteed.
            </p>
          ),
        },
        {
          title: "9. Policy changes",
          body: (
            <p>
              We may update this Policy when the Services or legal requirements change. We will update the effective
              date and provide additional notice in the app when a change is material.
            </p>
          ),
        },
        {
          title: "10. Contact",
          body: (
            <>
              <p>Developer and data controller: Andrei R.</p>
              <p>
                Privacy, deletion, and safety requests:{" "}
                <a className="text-[#4A90E2] hover:text-white" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
