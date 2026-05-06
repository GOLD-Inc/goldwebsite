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
      lastUpdated="May 5, 2026"
    >
      <section>
        <h2>1. Summary</h2>
        <p>
          We collect information to provide personalized coaching and improve
          the Services. We:
        </p>
        <ul>
          <li>Collect only what is reasonably necessary</li>
          <li>
            Use de-identified and/or aggregated data when feasible for analytics
          </li>
          <li>
            Use reasonable and appropriate safeguards designed to protect
            information
          </li>
          <li>
            Give you controls over what you share (including integrations like
            Apple Health)
          </li>
        </ul>
        <p>
          We may use artificial intelligence (AI) tools to help generate
          personalized coaching responses based on information you choose to
          provide.
        </p>
        <Callout variant="info">
          <strong>HIPAA Notice:</strong> GOLD is generally not a HIPAA-covered
          entity (see Section 13).
        </Callout>
      </section>

      <section>
        <h2>2. Data Minimization (HIPAA-Adjacent Practice)</h2>
        <p>
          We aim to collect and process only information reasonably necessary to
          provide the Services and the features you use.
        </p>
        <p>You can:</p>
        <ul>
          <li>Limit what you share</li>
          <li>Control how your data is used for coaching</li>
          <li>Disconnect third-party integrations at any time</li>
        </ul>
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
          If you provide data manually or connect Apple Health (HealthKit), we
          may collect the data types you authorize, such as:
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
        <p>
          All health and fitness data collection is optional and based on your
          permissions.
        </p>

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
          <li>
            Generate AI-powered coaching responses tailored to your goals and
            inputs
          </li>
          <li>Adjust your plan over time</li>
          <li>Support paid coaching appointments</li>
          <li>Communicate about your account and service updates</li>
          <li>Improve our features and coaching effectiveness</li>
          <li>Protect against fraud, abuse, and security threats</li>
          <li>Comply with law</li>
        </ul>
      </section>

      <section>
        <h2>5. AI Processing and Third-Party Services</h2>
        <p>
          To provide AI-powered coaching features, we may securely transmit
          selected user data to third-party service providers, including
          artificial intelligence providers.
        </p>
        <ul>
          <li>
            We share only the data necessary to generate relevant coaching
            responses
          </li>
          <li>
            Data is used solely to provide responses and improve the Services
          </li>
          <li>We do not sell your personal or health data</li>
          <li>
            Where feasible, we minimize, de-identify, or aggregate data before
            analysis
          </li>
        </ul>
        <p>
          These providers are contractually required to safeguard data and use
          it only for authorized purposes.
        </p>
      </section>

      <section>
        <h2>6. De-Identification and Analytics (Core Commitment)</h2>
        <p>
          When we analyze data to improve coaching and user experience, we use{" "}
          <strong>de-identified and/or aggregated data</strong> when reasonably
          feasible.
        </p>
        <p>
          We remove or transform identifiers where appropriate and restrict
          access to those who need it.
        </p>
        <h3>De-identified and/or aggregated data may be used to:</h3>
        <ul>
          <li>Improve personalization</li>
          <li>Evaluate coaching effectiveness</li>
          <li>Develop and test new features</li>
          <li>Improve the Services for all users</li>
        </ul>
        <p>
          De-identification reduces risk but does not eliminate it. We take
          reasonable steps to prevent re-identification.
        </p>
      </section>

      <section>
        <h2>7. Sensitive Information (HIPAA-Adjacent Practice)</h2>
        <p>
          Some information may be sensitive (for example, health and fitness
          metrics). We apply heightened protections such as:
        </p>
        <ul>
          <li>Restricted access controls</li>
          <li>Secure storage practices</li>
          <li>Vendor safeguards and contractual protections</li>
          <li>Data minimization when sharing with third parties</li>
        </ul>
        <p>
          Use of sensitive data for AI-powered coaching occurs only in
          connection with user-enabled features.
        </p>
      </section>

      <section>
        <h2>8. How We Share Information</h2>
        <p>We share information only as needed to operate the Services.</p>

        <h3>Service providers</h3>
        <p>We use vendors for:</p>
        <ul>
          <li>Hosting</li>
          <li>Analytics</li>
          <li>AI processing</li>
          <li>Customer support</li>
          <li>Payments</li>
          <li>Appointment scheduling</li>
        </ul>
        <p>
          They are required by contract to protect information and use it only
          for authorized purposes.
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
        <h2>9. Apple Health and Other Integrations</h2>
        <p>If you connect Apple Health:</p>
        <ul>
          <li>We access only the data types you explicitly authorize</li>
          <li>
            This data is used solely to provide and improve user-facing features
          </li>
          <li>
            We do not use HealthKit data for advertising, marketing, or sale
          </li>
          <li>You can revoke access at any time in iOS settings</li>
          <li>
            Apple&apos;s handling of your data is governed by Apple&apos;s
            policies
          </li>
        </ul>
      </section>

      <section>
        <h2>10. Security</h2>
        <p>
          We use{" "}
          <strong>
            reasonable and appropriate administrative, technical, and physical
            safeguards
          </strong>{" "}
          designed to protect information. These may include:
        </p>
        <ul>
          <li>Encryption in transit and at rest where appropriate</li>
          <li>Access controls and least-privilege policies</li>
          <li>Monitoring and incident response procedures</li>
          <li>Vendor security diligence and contractual protections</li>
        </ul>
        <p>
          No system is completely secure. You are responsible for protecting
          your credentials and device.
        </p>
      </section>

      <section>
        <h2>11. Retention</h2>
        <p>We retain information as long as reasonably necessary to:</p>
        <ul>
          <li>Provide the Services</li>
          <li>Meet legal obligations</li>
          <li>Resolve disputes</li>
          <li>Enforce agreements</li>
        </ul>
        <p>
          We may retain de-identified and/or aggregated data longer for
          legitimate business purposes.
        </p>
      </section>

      <section>
        <h2>12. Your Choices and Rights</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul>
          <li>Access, correct, delete, or export your information</li>
          <li>Object to or restrict certain processing</li>
          <li>
            Withdraw consent for optional data use (including AI coaching
            features)
          </li>
        </ul>
        <p>
          To request these rights:{" "}
          <a href="mailto:privacy@goldhealth.ai">
            <code>privacy@goldhealth.ai</code>
          </a>
        </p>
      </section>

      <section>
        <h2>13. HIPAA Notice</h2>
        <Callout variant="info">
          GOLD is a consumer wellness and performance platform and generally{" "}
          <strong>is not a HIPAA-covered entity</strong>.
        </Callout>
        <p>
          Unless GOLD enters into a written HIPAA agreement (such as a Business
          Associate Agreement) or explicitly states HIPAA applies, information
          processed by GOLD is generally not regulated as protected health
          information (PHI) under HIPAA.
        </p>
        <p>
          Even when HIPAA does not apply, we aim to apply privacy and security
          practices aligned with high standards for sensitive information.
        </p>
      </section>

      <section>
        <h2>14. AI Transparency and Improvement</h2>
        <p>We use artificial intelligence to:</p>
        <ul>
          <li>Generate coaching responses</li>
          <li>Improve the Services</li>
        </ul>
        <p>
          We may analyze user interactions (including messages and coaching
          inputs) in a privacy-protective manner to:
        </p>
        <ul>
          <li>Improve coaching quality</li>
          <li>Enhance personalization</li>
          <li>Increase system safety and reliability</li>
        </ul>
        <p>
          Where reasonably feasible, we use de-identified or aggregated data
          for these purposes.
        </p>
      </section>

      <section>
        <h2>15. Children&apos;s Privacy</h2>
        <p>
          The Services are not intended for children under{" "}
          <strong>13</strong> (or higher where required). If we learn we
          collected data unlawfully from a child, we will delete it.
        </p>
      </section>

      <section>
        <h2>16. International Users</h2>
        <p>
          If you use the Services outside the United States, your information
          may be transferred and processed in the U.S. or other countries where
          we and our vendors operate.
        </p>
      </section>

      <section>
        <h2>17. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. If changes are material, we will
          provide notice. Continued use means you accept the updated policy.
        </p>
      </section>

      <section>
        <h2>18. Contact</h2>
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
          <a href="mailto:privacy@goldhealth.ai">
            <code>privacy@goldhealth.ai</code>
          </a>
        </p>
        <p>
          <em>Legal representation: Cooley</em>
        </p>
      </section>
    </LegalPage>
  );
}
