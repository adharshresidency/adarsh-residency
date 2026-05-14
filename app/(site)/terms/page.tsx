// app/terms/page.tsx

import PolicyLayout from "@/app/components/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle="Please review the terms governing bookings, stay policies, and usage of Adharsh Residency services."
    >
      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">1. General</h2>
      <p>
        Adharsh Residency provides premium serviced apartment accommodation in
        Mysuru for short and long stays. All bookings are subject to
        availability and these terms.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        2. Check-in & Identification
      </h2>
      <ul>
        <li>Standard Check-in Time: 2:00 PM</li>
        <li>Standard Check-out Time: 12:00 PM</li>
        <li>Valid government-issued ID is mandatory during check-in.</li>
      </ul>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        3. Occupancy Policy
      </h2>
      <p>Number of guests must not exceed permitted occupancy limits.</p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        4. Tariff & Payment Policy
      </h2>
      <p>
        Full payment must be completed during check-in unless otherwise agreed.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        5. Guest Conduct
      </h2>
      <ul>
        <li>Quiet hours: 10:00 PM to 8:00 AM</li>
        <li>Smoking prohibited indoors</li>
        <li>Visitors restricted after 10:00 PM</li>
      </ul>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        6. Housekeeping & Property Care
      </h2>
      <p>
        Housekeeping services are available daily between 9:30 AM and 6:30 PM.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        7. Safety & Liability
      </h2>
      <p>
        Guests are responsible for safeguarding personal belongings and any
        property damage caused during their stay.
      </p>

      <h2>8. Cancellation & Rescheduling</h2>
      <p>Refunds and cancellations are governed by the Refund Policy.</p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        9. Website Usage
      </h2>
      <p>
        All website content and branding are intellectual property of Adharsh
        Residency.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        10. Rights of Management
      </h2>
      <p>
        Management reserves the right to refuse accommodation or cancel bookings
        in cases of policy violations.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        11. Amendments
      </h2>
      <p>Policies may be updated at any time without prior notice.</p>
    </PolicyLayout>
  );
}
