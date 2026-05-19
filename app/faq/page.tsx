import { AccordionPage } from "@/components/shared/AccordionPage";

export const metadata = {
  title: "FAQ | ClimbX Digital",
  description: "Frequently Asked Questions about ClimbX Digital services.",
};

const sections = [
  {
    number: "01",
    title: "Why is ClimbX Digital considered one of the best digital marketing agencies in Nagpur?",
    content: (
      <p>
        ClimbX Digital focuses on creative branding, performance marketing, SEO optimization, social media growth, and modern website development tailored for businesses looking to grow online professionally.
      </p>
    ),
  },
  {
    number: "02",
    title: "Is ClimbX Digital the best website development company in Nagpur?",
    content: (
      <p>
        ClimbX Digital develops responsive, SEO-friendly, fast-loading, and modern websites designed for startups, local businesses, personal brands, clinics, and growing companies.
      </p>
    ),
  },
  {
    number: "03",
    title: "Which is the best SEO agency in Nagpur for local businesses?",
    content: (
      <p>
        ClimbX Digital helps businesses improve Google rankings through Local SEO, Google Business Profile optimization, keyword strategy, technical SEO, and content marketing.
      </p>
    ),
  },
  {
    number: "04",
    title: "Why should businesses invest in digital marketing?",
    content: (
      <p>
        Digital marketing helps businesses increase visibility, generate leads, improve brand awareness, attract customers online, and grow faster through platforms like Google, Instagram, Facebook, and YouTube.
      </p>
    ),
  },
  {
    number: "05",
    title: "What services does ClimbX Digital provide?",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Website Development</li>
        <li>SEO Services</li>
        <li>Social Media Marketing</li>
        <li>Meta Ads &amp; Google Ads</li>
        <li>Branding &amp; Logo Design</li>
        <li>Content Creation</li>
        <li>Graphic Design</li>
        <li>Video Editing</li>
        <li>Performance Marketing</li>
      </ul>
    ),
  },
  {
    number: "06",
    title: "Do you provide social media marketing services in Nagpur?",
    content: (
      <p>
        Yes. We manage Instagram, Facebook, and other social media platforms with professional content creation, reels strategy, engagement, and paid advertising campaigns.
      </p>
    ),
  },
  {
    number: "07",
    title: "Can ClimbX Digital help startups grow online?",
    content: (
      <p>
        Yes. We help startups build a strong digital presence through branding, websites, SEO, advertising, and growth-focused marketing strategies.
      </p>
    ),
  },
  {
    number: "08",
    title: "Do you create SEO-friendly websites?",
    content: (
      <p>
        Yes. Every website is built with SEO structure, mobile responsiveness, optimized speed, and modern UI/UX practices.
      </p>
    ),
  },
  {
    number: "09",
    title: "How much does a professional website cost in Nagpur?",
    content: (
      <p>
        Website pricing depends on features, pages, functionality, and project requirements. Contact us for a custom quote tailored to your needs.
      </p>
    ),
  },
  {
    number: "10",
    title: "How long does it take to build a website?",
    content: (
      <p>
        Most websites are completed within 7–21 working days depending on the project scope.
      </p>
    ),
  },
  {
    number: "11",
    title: "Do you run Meta Ads and Google Ads?",
    content: (
      <p>
        Yes. We manage Facebook Ads, Instagram Ads, Meta Ads, and Google Ads campaigns focused on lead generation, sales, and business growth.
      </p>
    ),
  },
  {
    number: "12",
    title: "Why is SEO important for business growth?",
    content: (
      <p>
        SEO improves Google rankings, increases organic traffic, builds trust, generates leads, and helps businesses grow organically.
      </p>
    ),
  },
  {
    number: "13",
    title: "Do you provide branding and logo design services?",
    content: (
      <p>
        Yes. We create logos, brand identity systems, social media branding, packaging design, and marketing creatives.
      </p>
    ),
  },
  {
    number: "14",
    title: "Do you work with businesses outside Nagpur?",
    content: (
      <p>
        Yes. ClimbX Digital works with clients across Maharashtra and India through digital collaboration and online meetings.
      </p>
    ),
  },
  {
    number: "15",
    title: "What makes ClimbX Digital different from other marketing agencies?",
    content: (
      <p>
        We focus on strategy, creativity, branding, SEO, performance marketing, and business-focused execution that delivers real, measurable results.
      </p>
    ),
  },
  {
    number: "16",
    title: "Can you improve my Google Business Profile ranking?",
    content: (
      <p>
        Yes. We optimize Google Business Profiles to improve local search visibility, map rankings, and customer engagement.
      </p>
    ),
  },
  {
    number: "17",
    title: "Do you provide content creation services?",
    content: (
      <p>
        Yes. We create reels, ad creatives, graphics, videos, social media posts, captions, and promotional content.
      </p>
    ),
  },
  {
    number: "18",
    title: "How can I contact ClimbX Digital?",
    content: (
      <div className="space-y-1">
        <p>Website: <a href="https://climbxdigital.in" className="text-[#F5A623] hover:underline">https://climbxdigital.in</a></p>
        <p>Email: <a href="mailto:climbxdigital@gmail.com" className="text-[#F5A623] hover:underline">climbxdigital@gmail.com</a></p>
        <p>Phone: <a href="tel:+918767198554" className="text-[#F5A623] hover:underline">+91 87671 98554</a></p>
      </div>
    ),
  },
];

export default function FAQPage() {
  return (
    <AccordionPage
      title="frequently asked questions"
      sections={sections}
    />
  );
}
