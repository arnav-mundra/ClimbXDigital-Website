import { AccordionPage } from "@/components/shared/AccordionPage";

export const metadata = {
  title: "Terms & Conditions | ClimbX Digital",
  description: "Terms & Conditions for ClimbX Digital services.",
};

const sections = [
  {
    number: "01",
    title: "Introduction",
    content: (
      <p>
        Welcome to ClimbX Digital. These Terms & Conditions govern your use of our website, services, and digital platforms operated by ClimbX Digital ("Company," "we," "our," or "us"). By accessing our website or engaging with our services, you agree to comply with these Terms & Conditions.
        <br /><br />
        If you do not agree with any part of these terms, please discontinue the use of our website and services immediately.
      </p>
    ),
  },
  {
    number: "02",
    title: "About Us",
    content: (
      <div>
        <p className="mb-3">ClimbX Digital is a digital marketing and creative agency providing services including but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Social Media Marketing</li>
          <li>Branding &amp; Creative Design</li>
          <li>Website Development</li>
          <li>SEO Services</li>
          <li>Performance Marketing</li>
          <li>Content Creation</li>
          <li>Video Production</li>
          <li>Advertising Campaign Management</li>
          <li>Consulting &amp; Strategy Services</li>
        </ul>
      </div>
    ),
  },
  {
    number: "03",
    title: "Use of Website",
    content: (
      <div>
        <p className="mb-3">By using this website, you agree that:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You will use the website only for lawful purposes.</li>
          <li>You will not misuse, hack, disrupt, or attempt unauthorized access to any part of the website.</li>
          <li>You will not copy, reproduce, or distribute website content without written permission.</li>
          <li>You will not use this website in any way that may damage the reputation or operations of ClimbX Digital.</li>
        </ul>
      </div>
    ),
  },
  {
    number: "04",
    title: "Intellectual Property",
    content: (
      <p>
        All content available on this website including logos, branding, graphics, videos, website design, text content, marketing materials, and creative assets are the intellectual property of ClimbX Digital unless otherwise stated.
      </p>
    ),
  },
  {
    number: "05",
    title: "Service Agreements",
    content: (
      <p>
        All services provided by ClimbX Digital are subject to individual project discussions, quotations, and approvals.
        <br /><br />
        Project timelines, deliverables, revisions, pricing, and scope will be defined separately through proposals, invoices, contracts, emails, WhatsApp confirmations, and written agreements.
      </p>
    ),
  },
  {
    number: "06",
    title: "Payments & Refund Policy",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Payments must be made as per the agreed invoice schedule.</li>
        <li>Delayed payments may result in service pauses or project delays.</li>
        <li>Advance payments made for services are non-refundable unless otherwise agreed in writing.</li>
        <li>Advertising budgets paid to third-party platforms are non-refundable.</li>
      </ul>
    ),
  },
  {
    number: "07",
    title: "Client Responsibilities",
    content: (
      <p>
        Clients are responsible for providing accurate information, timely approvals, and ensuring they own rights to the materials shared with us.
      </p>
    ),
  },
  {
    number: "08",
    title: "Third-Party Platforms",
    content: (
      <p>
        Our services may involve platforms such as Meta, Google, YouTube, WordPress, Shopify, hosting providers, and advertising platforms.
        <br /><br />
        We are not responsible for outages, account suspensions, policy changes, algorithm updates, or third-party technical issues.
      </p>
    ),
  },
  {
    number: "09",
    title: "Results Disclaimer",
    content: (
      <p>
        ClimbX Digital does not guarantee specific sales results, viral reach, lead volume, search engine rankings, revenue growth, or social media performance.
      </p>
    ),
  },
  {
    number: "10",
    title: "Limitation of Liability",
    content: (
      <p>
        ClimbX Digital shall not be held liable for any direct or indirect losses, business interruptions, data loss, revenue loss, advertising losses, or technical damages arising from the use of our website or services.
      </p>
    ),
  },
  {
    number: "11",
    title: "Confidentiality",
    content: (
      <p>
        We respect client confidentiality and do not intentionally share confidential business information with third parties unless required by law or authorized by the client.
      </p>
    ),
  },
  {
    number: "12",
    title: "Website Content Accuracy",
    content: (
      <p>
        We strive to keep website information accurate and updated. However, we do not guarantee completeness, accuracy, availability, or error-free operation.
      </p>
    ),
  },
  {
    number: "13",
    title: "Termination of Services",
    content: (
      <p>
        We reserve the right to terminate or refuse services for non-payment, misconduct, false information, or violations of legal and ethical standards.
      </p>
    ),
  },
  {
    number: "14",
    title: "Governing Law",
    content: (
      <p>
        These Terms & Conditions shall be governed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Nagpur, Maharashtra.
      </p>
    ),
  },
  {
    number: "15",
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

export default function TermsPage() {
  return (
    <AccordionPage
      title="terms & conditions"
      subtitle="Effective Date: May 17, 2026"
      sections={sections}
    />
  );
}
