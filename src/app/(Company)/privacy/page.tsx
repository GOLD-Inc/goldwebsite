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
      lastUpdated="May 5th, 2026"
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
            Apple Health) and over your AI Coach conversation history.
          </li>
        </ul>
        <p>
          We may use artificial intelligence (AI) to help generate personalized
          coaching responses based on information you choose to provide. Your
          inputs to the AI Coach are <strong>not used to train</strong> our AI
          providers&apos; general-purpose foundation models. See Section 14 for
          details.
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
        <p>
          You can limit what you share, control how your data is used for
          coaching, and disconnect third-party integrations at any time.
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
          <li>
            Voice recordings (when you use voice input), used to generate a
            transcript and typically deleted after transcription unless you save
            them
          </li>
          <li>
            AI Coach context and memory derived from your messages (for
            example, summarized goals and preferences)
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
          selected user data to third-party services, including artificial
          intelligence providers.
        </p>
        <ul>
          <li>
            We share only the data necessary to generate relevant coaching
            responses,
          </li>
          <li>
            Data is used solely to provide responses and improve the Services,
          </li>
          <li>We do not sell your personal or health data, and</li>
          <li>
            Where feasible, we minimize, de-identify, or aggregate data before
            analysis.
          </li>
        </ul>
        <p>
          These providers are contractually required to safeguard data and use
          it only for authorized purposes. We work with AI providers under
          contracts that prohibit using your inputs to train their
          general-purpose foundation models, and that apply zero or short
          data-retention terms where available.
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
        <h3>De-identified/aggregated data may be used to:</h3>
        <ul>
          <li>Improve personalization,</li>
          <li>Evaluate coaching effectiveness and AI Coach quality,</li>
          <li>Develop and test new features and AI prompts/models, and</li>
          <li>Improve the Services for all users.</li>
        </ul>
        <p>
          De-identification reduces risk but does not eliminate it. We take
          reasonable steps to prevent re-identification.
        </p>
        <p>
          <strong>Foundation model training.</strong> We do not allow our AI
          providers to use your AI Coach inputs (messages, transcripts, or
          health data) to train their general-purpose foundation models. Where
          we fine-tune or evaluate models internally, we use de-identified data
          and apply additional safeguards.
        </p>
      </section>

      <section>
        <h2>7. Sensitive Information (HIPAA-Adjacent Practice)</h2>
        <p>
          Some information may be sensitive (for example, health and fitness
          metrics). We apply heightened protections such as restricted access,
          vendor controls, and secure storage practices.
        </p>
      </section>

      <section>
        <h2>8. How We Share Information</h2>
        <p>
          We share information only as needed to operate the Services:
        </p>

        <h3>Service providers</h3>
        <p>
          We use vendors for hosting, analytics, customer support, payments, and
          appointment scheduling. They are required by contract to protect
          information and use it only for authorized purposes.
        </p>

        <h3>AI providers</h3>
        <p>
          See Section 5 for how data is shared with AI service providers.
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
          <li>
            Encryption in transit and at rest where appropriate,
          </li>
          <li>Access controls and least-privilege policies,</li>
          <li>
            Encrypted handling of AI Coach conversations and tightly scoped
            internal access for safety and quality review,
          </li>
          <li>Monitoring and incident response procedures, and</li>
          <li>
            Vendor security diligence and contractual protections, including
            for AI providers.
          </li>
        </ul>
        <p>
          No system is completely secure. You are responsible for protecting your
          credentials and device.
        </p>
      </section>

      <section>
        <h2>11. Retention</h2>
        <p>
          We retain information as long as reasonably necessary to provide the
          Services, meet legal obligations, resolve disputes, and enforce
          agreements. We may retain de-identified/aggregated data longer for
          legitimate purposes.
        </p>
        <h3>AI Coach conversations</h3>
        <p>
          We retain your AI Coach messages and transcripts so the coach can
          maintain context across sessions and so you can review your history.
          You can delete individual conversations or your full AI Coach
          history at any time from in-app settings, subject to short backup
          retention windows.
        </p>
        <p>
          Voice recordings used as input to the AI Coach are typically deleted
          after transcription unless you choose to save them or we are required
          to keep them for safety, security, or legal reasons.
        </p>
      </section>

      <section>
        <h2>12. Your Choices and Rights</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul>
          <li>
            Access, correct, delete, or export your information,
          </li>
          <li>Object to or restrict certain processing, and</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
        <h3>AI Coach controls</h3>
        <p>
          You can also, from in-app settings or by contacting us:
        </p>
        <ul>
          <li>Delete individual AI Coach conversations or your full history,</li>
          <li>Reset the AI Coach&apos;s long-term memory about you,</li>
          <li>
            Disconnect Apple Health or other integrations so the AI Coach no
            longer uses that data,
          </li>
          <li>
            Opt out of having your interactions used to improve the Services
            (beyond what is needed to operate them and keep them safe), and
          </li>
          <li>
            Request human review of significant decisions that were materially
            based on AI output, where applicable law provides this right.
          </li>
        </ul>
        <p>
          To request these rights:{" "}
          <a href="mailto:privacy@gold.com">
            <code>privacy@gold.com</code>
          </a>
        </p>
      </section>

      <section>
        <h2>13. HIPAA Notice</h2>
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
        <h2>14. AI Transparency and Improvement</h2>
        <p>
          The AI Coach uses artificial intelligence — including large language
          models and speech-to-text systems — to generate personalized coaching
          responses based on the information you share and the data sources you
          connect.
        </p>

        <h3>How the AI Coach uses your data</h3>
        <ul>
          <li>
            Your messages, voice transcripts, goals, preferences, and
            authorized health and fitness data may be sent to AI providers as
            input to generate a response.
          </li>
          <li>
            We may include a summarized memory of your prior conversations so
            recommendations stay coherent over time. You can reset this memory
            at any time.
          </li>
          <li>
            We do not use your AI Coach inputs to train third-party
            general-purpose foundation models, and we contract with AI
            providers under zero or short data-retention terms where available.
          </li>
        </ul>

        <h3>Limitations of AI</h3>
        <Callout variant="warning">
          AI output may be inaccurate, incomplete, or inappropriate. The AI
          Coach is not a medical professional and does not provide medical
          advice, diagnosis, or treatment. You are responsible for deciding
          what to follow and for using your judgment. See our{" "}
          <a href="/terms">Terms of Service</a> for more.
        </Callout>

        <h3>Human review</h3>
        <p>
          Trained personnel may review a limited, de-identified sample of AI
          Coach interactions to evaluate quality, detect safety issues, fix
          bugs, and improve prompts and models. Access is restricted on a
          need-to-know basis.
        </p>

        <h3>Improving the Services</h3>
        <p>
          We may use de-identified and/or aggregated information to improve
          coaching quality, personalization, and safety. We may analyze user
          interactions (including messages) to improve the Services in a
          privacy-protective manner consistent with this policy. You can opt
          out of the use of your interactions for improvement (beyond what is
          needed to operate the Services and keep them safe) — see Section 12.
        </p>

        <h3>Automated decisions</h3>
        <p>
          The AI Coach provides recommendations, not decisions that produce
          legal or similarly significant effects on you. Where applicable law
          gives you a right to human review of automated decisions, you may
          contact us at{" "}
          <a href="mailto:privacy@gold.com">
            <code>privacy@gold.com</code>
          </a>
          .
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
          we and our vendors operate, including our hosting and AI service
          providers. These countries may have different data protection laws
          than your country of residence.
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
          <em>Legal representation: Cooley</em>
        </p>
      </section>
    </LegalPage>
  );
}
