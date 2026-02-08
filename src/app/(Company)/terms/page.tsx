import type { Metadata } from "next";
import LegalPage, { Callout } from "@/components/Legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Gold Health",
  description:
    "Read the Terms of Service governing your use of the Gold Health website, apps, AI coaching features, and related services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle='These Terms of Service ("Terms") govern your use of the GOLD website, apps, AI coaching features, and related services (collectively, the "Services") operated by GOLD, Inc. ("GOLD," "we," "us").'
      lastUpdated="February 1, 2026"
    >
      <p>
        By using the Services, you agree to these Terms and the{" "}
        <a href="/privacy">Privacy Policy</a>. If you do not agree, do not use
        the Services.
      </p>

      <section>
        <h2>1. The Services Are Not Medical Care</h2>
        <p>
          GOLD provides{" "}
          <strong>human performance and lifestyle coaching</strong> for fitness,
          recovery, nutrition, and habits. The Services may include AI-based
          coaching (&quot;AI Coach&quot;), educational content, and paid
          appointments with human coaches.
        </p>
        <Callout variant="warning">
          <strong>Not medical advice.</strong> The Services do not provide
          medical advice, diagnosis, or treatment. GOLD is not a healthcare
          provider, and using the Services does not create a doctor-patient
          relationship. You should consult a licensed healthcare professional
          before starting a new training program or making major changes,
          especially if you have a medical condition, injury, are pregnant, or
          are at risk of harm.
        </Callout>
      </section>

      <section>
        <h2>2. Do Not Use GOLD for Emergencies</h2>
        <Callout variant="warning">
          If you have a medical emergency, call <strong>911</strong> (or your
          local emergency number).
        </Callout>
      </section>

      <section>
        <h2>3. AI Coach Disclosure</h2>
        <p>
          The AI Coach provides automated recommendations based on information
          you provide and data sources you connect. AI output may be inaccurate,
          incomplete, or inappropriate.
        </p>
        <p>
          You are responsible for deciding what to follow and for using your
          judgment and caution.
        </p>
      </section>

      <section>
        <h2>4. No Pharmaceuticals / No Supplement Guidance</h2>
        <p>
          GOLD does not prescribe medication and does not provide pharmaceutical
          advice. GOLD does not recommend pharmaceuticals. Any mention of
          supplements (if any) is informational only and not medical advice.
        </p>
      </section>

      <section>
        <h2>5. Safety and Assumption of Risk</h2>
        <p>
          Training and lifestyle changes involve risk. You agree that you:
        </p>
        <ul>
          <li>Are responsible for your health and safety,</li>
          <li>
            Will stop any activity that causes pain or concerning symptoms, and
          </li>
          <li>Will seek medical attention when appropriate.</li>
        </ul>
        <p>
          You assume all risks related to using the Services, including injury or
          adverse outcomes.
        </p>
      </section>

      <section>
        <h2>6. No Guarantee of Results</h2>
        <p>GOLD does not guarantee outcomes. Results vary.</p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law:</p>
        <ul>
          <li>
            GOLD is not responsible for any injury, loss, or damages arising from
            your use of the Services or reliance on recommendations (AI or
            human).
          </li>
          <li>
            GOLD will not be liable for indirect, incidental, consequential,
            special, or punitive damages.
          </li>
        </ul>
        <p>
          If liability cannot be excluded, GOLD&apos;s total liability is
          limited to the amount you paid to GOLD in the prior{" "}
          <strong>12 months</strong>, or <strong>$100</strong> if you paid
          nothing, whichever is greater.
        </p>
      </section>

      <section>
        <h2>8. Your Account</h2>
        <p>You are responsible for:</p>
        <ul>
          <li>Providing accurate information,</li>
          <li>Maintaining the security of your account, and</li>
          <li>All activity under your account.</li>
        </ul>
        <p>
          <strong>Age.</strong> You must be at least{" "}
          <strong>13 years old</strong> (or older where required). If you are
          under 18, you must have parental/guardian permission.
        </p>
      </section>

      <section>
        <h2>9. Paid Coaching Appointments</h2>
        <p>
          Some Services require payment, including appointments with human
          coaches.
        </p>
        <p>
          Paid sessions are for coaching and education — not medical care.
          Pricing and cancellation/rescheduling policies are shown at purchase.
        </p>
        <p>
          Some coaches may be independent contractors and not employees or agents
          of GOLD.
        </p>
      </section>

      <section>
        <h2>10. Your Content</h2>
        <p>
          You may provide information such as goals, fitness metrics, messages,
          and preferences (&quot;User Content&quot;).
        </p>
        <p>
          You grant GOLD a license to use your User Content to operate and
          improve the Services as described in the{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>11. Acceptable Use</h2>
        <p>You may not:</p>
        <ul>
          <li>Interfere with the Services,</li>
          <li>Attempt to access accounts you do not own,</li>
          <li>Reverse engineer or scrape the Services or models,</li>
          <li>Upload malicious code, or</li>
          <li>Use the Services for illegal purposes.</li>
        </ul>
      </section>

      <section>
        <h2>12. Safety Controls</h2>
        <p>
          We may restrict content or features to help protect users and the
          Services (for example, to address harmful content, suspected
          emergencies, or abuse). We cannot guarantee that unsafe content will
          always be detected.
        </p>
      </section>

      <section>
        <h2>13. Privacy</h2>
        <p>
          Our <a href="/privacy">Privacy Policy</a> explains how we collect and
          use information.
        </p>
      </section>

      <section>
        <h2>14. Changes to the Services or Terms</h2>
        <p>
          We may update the Services or these Terms. If changes are material, we
          will provide notice. Continued use means you accept the changes.
        </p>
      </section>

      <section>
        <h2>15. Termination</h2>
        <p>
          You may stop using the Services at any time. We may suspend or
          terminate access if necessary to protect users, enforce these Terms, or
          comply with law.
        </p>
      </section>

      <section>
        <h2>16. Governing Law</h2>
        <p>
          These Terms are governed by the laws of <strong>Delaware</strong>, USA
          excluding conflict-of-law rules. Disputes must be brought in courts
          located in <strong>Delaware</strong>, USA unless required otherwise.
        </p>
      </section>

      <section>
        <h2>17. Contact</h2>
        <p>
          If you have any questions or concerns about these Terms, please contact
          us at:
        </p>
        <p>
          <strong>GOLD, Inc.</strong>
        </p>
        <p>
          9191 Towne Center Drive, Ste 150
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
