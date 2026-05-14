// app/refund/page.tsx

import PolicyLayout from "@/app/components/PolicyLayout";

export default function RefundPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      subtitle="Understand cancellation eligibility, refund timelines, and rescheduling conditions."
    >
      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        1. Cancellation Policy
      </h2>

      <h3>100% Refund</h3>
      <p>
        Cancellations made 15 days or more before check-in qualify for full
        refund.
      </p>

      <h3>50% Refund</h3>
      <p>
        Cancellations made between 7–14 days before check-in qualify for 50%
        refund.
      </p>

      <h3>No Refund</h3>
      <ul>
        <li>Cancellations within 7 days of check-in</li>
        <li>Early check-outs</li>
        <li>No-shows</li>
      </ul>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        2. Rescheduling Policy
      </h2>
      <p>
        Date changes should be informed at least 7 days before check-in and
        remain subject to availability.
      </p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        3. Refund Processing
      </h2>
      <p>Eligible refunds are processed within 7–14 business days.</p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        4. Third-Party Bookings
      </h2>
      <p>OTA platform bookings follow respective platform refund policies.</p>

      <h2 className="font-medium modernfont text-2xl mt-4 mb-2">
        5. Cancellation by Management
      </h2>
      <p>
        In rare cases where accommodation cannot be honored, guests will receive
        alternative accommodation or full refund.
      </p>
    </PolicyLayout>
  );
}
