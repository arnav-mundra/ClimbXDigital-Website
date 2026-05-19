import { AccordionPage } from "@/components/shared/AccordionPage";

export const metadata = {
  title: "Privacy Policy | ClimbX Digital",
  description: "Privacy Policy for ClimbX Digital.",
};

const sections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <p>
        Welcome to ClimbX Digital. Your privacy is important to us. This Privacy Policy explains how ClimbX Digital ("Company," "we," "our," or "us") collects, uses, stores, and protects your information when you visit our website or use our services.
      </p>
    ),
  },
  {
    number: "02",
    title: "Information We Collect",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Business Name</li>
        <li>Billing Information</li>
        <li>IP Address</li>
        <li>Browser Type</li>
        <li>Device Information</li>
        <li>Website Usage Data</li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "How We Use Your Information",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Provide and improve services</li>
        <li>Respond to inquiries</li>
        <li>Manage marketing campaigns</li>
        <li>Improve website performance</li>
        <li>Process invoices and payments</li>
        <li>Maintain security</li>
      </ul>
    ),
  },
  {
    number: "04",
    title: "Cookies & Tracking Technologies",
    content: (
      <div>
        <p className="mb-3">Our website may use:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Analytics</li>
          <li>Meta Pixel</li>
          <li>Advertising and remarketing tools</li>
        </ul>
      </div>
    ),
  },
  {
    number: "05",
    title: "Third-Party Services",
    content: (
      <div>
        <p className="mb-3">We may use:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google</li>
          <li>Meta</li>
          <li>YouTube</li>
          <li>WordPress</li>
          <li>Shopify</li>
          <li>Hosting providers</li>
        </ul>
      </div>
    ),
  },
  {
    number: "06",
    title: "Data Security",
    content: (
      <p>
        We implement reasonable security measures to protect user information. However, no online transmission can be guaranteed completely secure.
      </p>
    ),
  },
  {
    number: "07",
    title: "Data Sharing",
    content: (
      <div>
        <p className="mb-3">We may share information:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>To provide services</li>
          <li>For legal compliance</li>
          <li>With trusted service providers</li>
        </ul>
      </div>
    ),
  },
  {
    number: "08",
    title: "Retention of Information",
    content: (
      <p>
        We may retain information for ongoing projects, legal requirements, and business operations.
      </p>
    ),
  },
  {
    number: "09",
    title: "Your Rights",
    content: (
      <div>
        <p className="mb-3">Users may request:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access to data</li>
          <li>Correction of data</li>
          <li>Deletion of data</li>
          <li>Withdrawal of consent</li>
        </ul>
      </div>
    ),
  },
  {
    number: "10",
    title: "External Links",
    content: (
      <p>
        We are not responsible for the privacy practices of external websites linked from our platform.
      </p>
    ),
  },
  {
    number: "11",
    title: "Changes to This Policy",
    content: (
      <p>We may update this Privacy Policy periodically.</p>
    ),
  },
  {
    number: "12",
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

export default function PrivacyPage() {
  return (
    <AccordionPage
      title="privacy policy"
      subtitle="Effective Date: May 17, 2026"
      sections={sections}
    />
  );
}
