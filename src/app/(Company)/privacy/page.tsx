import type { Metadata } from "next";
import LegalPage, { Callout } from "@/components/Legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Gold Health",
  description:
    "Learn how Gold Health collects, uses, and protects your personal information. Read our full privacy policy.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle='Welcome to GOLD, Inc. ("we," "our," "us"). We are committed to protecting your privacy and ensuring the security of your personal information.'
      lastUpdated="January 5, 2026"
    >
      <section>
        <h2>1. Summary</h2>
        <p>
          We collect information to provide personalized coaching and improve the
          Services. We:
        </p>
        <ul>
          <li>collect only what is reasonably necessary,</li>
          <li>
            use de-identified and/or aggregated data when feasible for analytics,
          </li>
          <li>
            use reasonable and appropriate safeguards designed to protect
            information, and
          </li>
          <li>
            give you controls over what you share (including integrations like
            Apple Health).
          </li>
        </ul>
        <Callout variant="info">
          <strong>HIPAA Notice:</strong> GOLD is generally not a HIPAA-covered
          entity (see Section 12).
        </Callout>
      </section>

      <section>
        <h2>2. Data Minimization (HIPAA-Adjacent Practice)</h2>
        <p>
          We aim to collect and process only information reasonably necessary to
          provide the Services and the features you use.
        </p>
        <p>
          You can limit what you share and disconnect third-party integrations at
          any time.
        </p>
      </section>

      <section>
        <h2>3. Information We Collect</h2>

        <h3>Information you provide</h3>
        <ul>
          <li>Name and email</li>
          <li>Account credentials</li>
          <li>Goals and preferences</li>
          <li>Training, nutrition, and sleep inputs and preferences</li>
          <li>
            Body composition inputs as goals and check-ins (e.g., weight, body
            fat %, muscle), if you choose to enter them
          </li>
          <li>
            Messages and transcribed voice with the AI Coach or human coaches
          </li>
          <li>Appointment-related details</li>
        </ul>

        <h3>Health and fitness information (optional)</h3>
        <p>
          If you connect Apple Health or provide data manually, we may collect
          the data types you authorize, such as:
        </p>
        <ul>
          <li>Activity and workouts</li>
          <li>Steps</li>
          <li>Sleep and heart rate (if authorized)</li>
          <li>Energy expenditure (if authorized)</li>
          <li>Body measurements and composition (if authorized or entered)</li>
          <li>
            Blood glucose data and other analytes (as shared by sensors to Apple
            Health only)
          </li>
          <li>Environmental data such as UV light exposure</li>
          <li>Location for sunrise/sunset times</li>
        </ul>

        <h3>Payment information</h3>
        <p>
          Payments are processed by third parties. We do not store full payment
          card numbers. We may store transaction records and receipts.
        </p>

        <h3>Automatically collected information</h3>
        <ul>
          <li>Device identifiers and settings</li>
          <li>IP address and approximate location (derived from IP)</li>
          <li>App interactions and usage metrics</li>
          <li>Crash logs and performance diagnostics</li>
        </ul>
      </section>

      <section>
        <h2>4. How We Use Information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Provide and personalize coaching and recommendations</li>
          <li>Adjust your plan over time</li>
          <li>Support paid coaching appointments</li>
          <li>Communicate about your account and service updates</li>
          <li>Improve our features and coaching effectiveness</li>
          <li>Protect against fraud, abuse, and security threats</li>
          <li>Comply with law</li>
        </ul>
      </section>

      <section>
        <h2>5. De-Identification and Analytics (Core Commitment)</h2>
        <p>
          When we analyze data to improve coaching and user experience, we use{" "}
          <strong>de-identified and/or aggregated data</strong> when reasonably
          feasible.
        </p>
        <p>
          We remove or transform identifiers where appropriate and restrict
          access to those who need it.
        </p>
        <h3>De-identified/aggregated data may be used to:</h3>
        <ul>
          <li>Improve personalization,</li>
          <li>Evaluate coaching effectiveness,</li>
          <li>Develop and test new features, and</li>
          <li>Improve the Services for all users.</li>
        </ul>
        <p>
          De-identification reduces risk but does not eliminate it. We take
          reasonable steps to prevent re-identification.
        </p>
      </section>

      <section>
        <h2>6. Sensitive Information (HIPAA-Adjacent Practice)</h2>
        <p>
          Some information may be sensitive (for example, health and fitness
          metrics). We apply heightened protections such as restricted access,
          vendor controls, and secure storage practices.
        </p>
      </section>

      <section>
        <h2>7. How We Share Information</h2>
        <p>
          We share information only as needed to operate the Services:
        </p>

        <h3>Service providers</h3>
        <p>
          We use vendors for hosting, analytics, customer support, payments, and
          appointment scheduling. They are required by contract to protect
          information and use it only for authorized purposes.
        </p>

        <h3>Coaches</h3>
        <p>
          If you book a human coach appointment or request coach support, we
          share relevant information to provide the service.
        </p>

        <h3>Legal and safety</h3>
        <p>
          We may share information to comply with law or protect the rights,
          property, and safety of GOLD, our users, or others.
        </p>

        <h3>Business transfers</h3>
        <p>
          Information may be transferred in connection with a merger,
          acquisition, financing, or sale of assets, subject to protections.
        </p>

        <h3>No sale for money</h3>
        <p>
          We do not sell your personal information for monetary consideration.
        </p>
      </section>

      <section>
        <h2>8. Apple Health and Other Integrations</h2>
        <p>If you connect Apple Health:</p>
        <ul>
          <li>We access only the data types you authorize,</li>
          <li>
            You can revoke access in iOS settings at any time, and
          </li>
          <li>
            Apple&apos;s handling of your data is governed by Apple&apos;s
            policies.
          </li>
        </ul>
      </section>

      <section>
        <h2>9. Security</h2>
        <p>
          We use{" "}
          <strong>
            reasonable and appropriate administrative, technical, and physical
            safeguards
          </strong>{" "}
          designed to protect information. These may include:
        </p>
        <ul>
          <li>
            Encryption in transit and at rest where appropriate,
          </li>
          <li>Access controls and least-privilege policies,</li>
          <li>Monitoring and incident response procedures, and</li>
          <li>
            Vendor security diligence and contractual protections.
          </li>
        </ul>
        <p>
          No system is completely secure. You are responsible for protecting your
          credentials and device.
        </p>
      </section>

      <section>
        <h2>10. Retention</h2>
        <p>
          We retain information as long as reasonably necessary to provide the
          Services, meet legal obligations, resolve disputes, and enforce
          agreements. We may retain de-identified/aggregated data longer for
          legitimate purposes.
        </p>
      </section>

      <section>
        <h2>11. Your Choices and Rights</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul>
          <li>
            Access, correct, delete, or export your information,
          </li>
          <li>Object to or restrict certain processing, and</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
        <p>
          To request these rights:{" "}
          <a href="mailto:privacy@gold.com">
            <code>privacy@gold.com</code>
          </a>
        </p>
      </section>

      <section>
        <h2>12. HIPAA Notice</h2>
        <Callout variant="info">
          GOLD is a consumer wellness and performance platform and generally{" "}
          <strong>is not a HIPAA-covered entity</strong>. Unless GOLD enters
          into a written HIPAA agreement (such as a Business Associate
          Agreement) or explicitly states HIPAA applies, information processed by
          GOLD is generally not regulated as protected health information (PHI)
          under HIPAA.
        </Callout>
        <p>
          Even when HIPAA does not apply, we aim to apply privacy and security
          practices aligned with high standards for sensitive information.
        </p>
      </section>

      <section>
        <h2>13. AI Transparency and Improvement</h2>
        <p>
          We may use de-identified and/or aggregated information to improve
          coaching quality, personalization, and safety. We may analyze user
          interactions (including messages) to improve the Services in a
          privacy-protective manner consistent with this policy.
        </p>
      </section>

      <section>
        <h2>14. Children&apos;s Privacy</h2>
        <p>
          The Services are not intended for children under{" "}
          <strong>13</strong> (or higher where required). If we learn we
          collected data unlawfully from a child, we will delete it.
        </p>
      </section>

      <section>
        <h2>15. International Users</h2>
        <p>
          If you use the Services outside the United States, your information may
          be transferred and processed in the U.S. or other countries where we
          and our vendors operate.
        </p>
      </section>

      <section>
        <h2>16. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. If changes are material, we will
          provide notice. Continued use means you accept the updated policy.
        </p>
      </section>

      <section>
        <h2>17. Contact</h2>
        <p>
          <strong>GOLD, Inc.</strong>
        </p>
        <p>
          <code>9191 Towne Center Drive, Ste 150</code>
          <br />
          San Diego, CA 92122
        </p>
        <p>
          <a href="/support">Contact Us</a>
        </p>
        <p>
          <em>Legal representation: Cooley</em>
        </p>
      </section>
    </LegalPage>
  );
}
