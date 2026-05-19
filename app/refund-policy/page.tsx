import { AccordionPage } from "@/components/shared/AccordionPage";

export const metadata = {
  title: "Cancellation & Refund Policy | ClimbX Digital",
  description: "Cancellation & Refund Policy for ClimbX Digital.",
};

const sections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <p>
        Welcome to ClimbX Digital. This Cancellation & Refund Policy outlines the terms related to cancellations, refunds, project termination, and service discontinuation for all services offered by ClimbX Digital.
      </p>
    ),
  },
  {
    number: "02",
    title: "Service-Based Nature of Business",
    content: (
      <div>
        <p className="mb-3">ClimbX Digital provides services including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Website Development</li>
          <li>Social Media Marketing</li>
          <li>Branding &amp; Design</li>
          <li>SEO Services</li>
          <li>Paid Advertising</li>
          <li>Content Creation</li>
          <li>Video Editing</li>
          <li>Consulting &amp; Strategy Services</li>
        </ul>
      </div>
    ),
  },
  {
    number: "03",
    title: "Project Cancellation by Client",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Advance payments are generally non-refundable.</li>
        <li>Work completed until cancellation will be chargeable.</li>
        <li>Third-party expenses are non-refundable.</li>
      </ul>
    ),
  },
  {
    number: "04",
    title: "Refund Policy",
    content: (
      <div>
        <p className="mb-3">Non-refundable services include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SEO Services</li>
          <li>Social Media Management</li>
          <li>Paid Advertising</li>
          <li>Graphic Design</li>
          <li>Video Editing</li>
          <li>Branding &amp; Creative Work</li>
          <li>Website Development Milestones</li>
          <li>Consultation Fees</li>
          <li>Domain &amp; Hosting Charges</li>
        </ul>
        <p className="mt-3">Partial refunds may be considered only before project initiation.</p>
      </div>
    ),
  },
  {
    number: "05",
    title: "Advertising Budget Policy",
    content: (
      <p>
        Advertising spends on Meta, Google, YouTube, influencers, and promotions are non-refundable once campaigns begin.
      </p>
    ),
  },
  {
    number: "06",
    title: "Subscription & Retainer Services",
    content: (
      <p>
        Clients must provide at least 7 days prior notice before cancellation of recurring services.
      </p>
    ),
  },
  {
    number: "07",
    title: "Delayed Response or Inactivity",
    content: (
      <p>
        Projects inactive for more than 30 days may be paused and reactivation charges may apply.
      </p>
    ),
  },
  {
    number: "08",
    title: "Termination by ClimbX Digital",
    content: (
      <div>
        <p className="mb-3">Services may be terminated due to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Delayed payments</li>
          <li>Misconduct</li>
          <li>False information</li>
          <li>Illegal or unethical activities</li>
        </ul>
      </div>
    ),
  },
  {
    number: "09",
    title: "Chargebacks & Payment Disputes",
    content: (
      <p>
        Unauthorized chargebacks after successful service delivery may lead to legal action and permanent service suspension.
      </p>
    ),
  },
  {
    number: "10",
    title: "Contact Information",
    content: (
      <div className="space-y-1">
        <p>ClimbX Digital</p>
        <p>Nagpur, Maharashtra, India</p>
        <p>Website: <a href="https://climbxdigital.in" className="text-[#F5A623] hover:underline">https://climbxdigital.in</a></p>
        <p>Email: <a href="mailto:climbxdigital@gmail.com" className="text-[#F5A623] hover:underline">climbxdigital@gmail.com</a></p>
      </div>
    ),
  },
];

export default function RefundPage() {
  return (
    <AccordionPage
      title="cancellation & refund policy"
      subtitle="Effective Date: May 17, 2026"
      sections={sections}
    />
  );
}
