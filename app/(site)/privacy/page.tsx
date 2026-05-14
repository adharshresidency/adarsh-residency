// app/privacy/page.tsx

import PolicyLayout from "@/app/components/PolicyLayout";

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Learn how Adharsh Residency collects, uses, and protects guest information."
    >
      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        1. Introduction
      </h2>
      <p>
        Adharsh Residency respects your privacy and is committed to protecting
        your information.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        2. Information We Collect
      </h2>
      <ul>
        <li>Name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Booking information</li>
        <li>Identification details</li>
      </ul>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        3. How We Use Information
      </h2>
      <ul>
        <li>Booking processing</li>
        <li>Guest verification</li>
        <li>Customer communication</li>
        <li>Improving website experience</li>
      </ul>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        4. Data Protection
      </h2>
      <p>Reasonable security measures are used to protect guest data.</p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        5. Sharing of Information
      </h2>
      <p>
        Guest information is never sold and is only shared where legally
        necessary.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        6. Cookies & Tracking
      </h2>
      <p>Cookies and analytics may be used to improve website performance.</p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        7. Third-Party Links
      </h2>
      <p>
        Adharsh Residency is not responsible for external websites linked
        through this website.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        8. Guest Rights
      </h2>
      <p>
        Guests may request correction or removal of personal data where
        applicable.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        9. Policy Updates
      </h2>
      <p>Privacy policies may be updated periodically.</p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        10. Contact Information
      </h2>
      <p>
        Adharsh Residency Serviced Apartments
        <br />
        BEML Layout, Srirampura 2nd Stage, Mysuru
        <br />
        +91 9353363060
        <br />
        info@adharshresidency.com
      </p>
    </PolicyLayout>
  );
}
