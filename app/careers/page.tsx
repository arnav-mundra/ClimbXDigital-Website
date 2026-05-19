"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Role {
  title: string;
  description: string;
}

const roles: Role[] = [
  {
    title: "performance marketer",
    description: "Lead ad campaigns, optimize ROAS, and drive growth for top brands.",
  },
  {
    title: "seo specialist",
    description: "Dominate search rankings, craft content strategies, and build organic traffic.",
  },
  {
    title: "creative designer",
    description: "Design stunning visuals, brand identities, and high-converting ad creatives.",
  },
];

function ApplyModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0];
    if (picked && picked.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      e.target.value = "";
      return;
    }
    setFile(picked || null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Application for ${role.title}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\n${file ? `CV attached: ${file.name}` : "No CV attached."}`
    );
    window.location.href = `mailto:climbxdigital@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-lg bg-[#111111] border border-white/10 p-8 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-white/50 hover:text-white text-2xl leading-none"
          >
            ×
          </button>

          {submitted ? (
            <div className="py-10 text-center">
              <p className="text-4xl mb-4">🎉</p>
              <h2 className="text-2xl font-bold text-[#F5A623] mb-2">Application Sent!</h2>
              <p className="text-white/70">We'll be in touch soon. Thank you for applying.</p>
              <button
                onClick={onClose}
                className="mt-8 px-6 py-2 bg-[#F5A623] text-black font-semibold text-sm"
              >
                close
              </button>
            </div>
          ) : (
            <>
              <h2 className="mb-1 text-2xl font-bold lowercase text-[#F5A623]">{role.title}</h2>
              <p className="mb-6 text-sm text-white/60">{role.description}</p>
              <hr className="mb-6 border-white/10" />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Full Name *</label>
                  <input
                    name="name"
                    required
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[#F5A623] outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[#F5A623] outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[#F5A623] outline-none transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Why you?</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[#F5A623] outline-none transition-colors resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {/* PDF-only CV upload */}
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Upload CV (PDF only)</label>
                  <div
                    className="mt-2 flex cursor-pointer flex-col items-center justify-center border border-dashed border-white/20 px-4 py-6 text-center text-white/50 hover:border-[#F5A623]/60 hover:text-white/80 transition-colors"
                    onClick={() => fileRef.current?.click()}
                  >
                    <svg className="mb-2 h-8 w-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    {file ? (
                      <span className="text-sm text-[#F5A623]">{file.name}</span>
                    ) : (
                      <span className="text-sm">Click to upload your CV &mdash; PDF only</span>
                    )}
                    <input
                      ref={fileRef}
                      type="file"
                      accept="application/pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-[#F5A623] py-3 text-sm font-bold lowercase text-black transition-opacity hover:opacity-90"
                >
                  send application
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function DropCVModal({ onClose }: { onClose: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0];
    if (picked && picked.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      e.target.value = "";
      return;
    }
    setFile(picked || null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent("General Application — CV Drop");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n${file ? `CV attached: ${file.name}` : "No CV attached."}`
    );
    window.location.href = `mailto:climbxdigital@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-lg bg-[#111111] border border-white/10 p-8 text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-white/50 hover:text-white text-2xl leading-none"
          >
            ×
          </button>

          {submitted ? (
            <div className="py-10 text-center">
              <p className="text-4xl mb-4">🎉</p>
              <h2 className="text-2xl font-bold text-[#F5A623] mb-2">CV Dropped!</h2>
              <p className="text-white/70">We'll reach out if there's a match. Thanks!</p>
              <button onClick={onClose} className="mt-8 px-6 py-2 bg-[#F5A623] text-black font-semibold text-sm">close</button>
            </div>
          ) : (
            <>
              <h2 className="mb-1 text-2xl font-bold lowercase text-[#F5A623]">drop your cv</h2>
              <p className="mb-6 text-sm text-white/60">No open role? Send us your CV anyway — we love meeting talented people.</p>
              <hr className="mb-6 border-white/10" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Full Name *</label>
                  <input name="name" required className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[#F5A623] outline-none transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Email *</label>
                  <input name="email" type="email" required className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[#F5A623] outline-none transition-colors" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Tell us about yourself</label>
                  <textarea name="message" rows={3} className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/30 focus:border-[#F5A623] outline-none transition-colors resize-none" placeholder="Skills, experience, what you're looking for..." />
                </div>

                {/* PDF-only upload */}
                <div>
                  <label className="mb-1 block text-xs text-white/50 uppercase tracking-wider">Upload CV (PDF only) *</label>
                  <div
                    className="mt-2 flex cursor-pointer flex-col items-center justify-center border border-dashed border-white/20 px-4 py-6 text-center text-white/50 hover:border-[#F5A623]/60 hover:text-white/80 transition-colors"
                    onClick={() => fileRef.current?.click()}
                  >
                    <svg className="mb-2 h-8 w-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    {file ? (
                      <span className="text-sm text-[#F5A623]">{file.name}</span>
                    ) : (
                      <span className="text-sm">Click to upload your CV &mdash; PDF only</span>
                    )}
                    <input ref={fileRef} type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
                  </div>
                </div>

                <button type="submit" className="mt-2 w-full bg-[#F5A623] py-3 text-sm font-bold lowercase text-black transition-opacity hover:opacity-90">
                  send application
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CareersPage() {
  const [activeRole, setActiveRole] = useState<Role | null>(null);
  const [showDropCV, setShowDropCV] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <div className="mb-6 flex items-end justify-between">
        <div className="flex items-baseline gap-4">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">join the climb</h1>
          <span className="hidden text-sm font-medium text-white/60 md:inline-block">/ careers</span>
        </div>
      </div>
      <hr className="mb-12 border-white/20" />
      <p className="mb-10 max-w-2xl text-lg text-white/80">
        We are always looking for driven, creative, and passionate individuals to join our team. Let's build the future of digital marketing together.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <div key={role.title} className="flex flex-col border border-white/10 bg-[#1A1A1A] p-6">
            <h3 className="mb-2 text-2xl font-bold lowercase text-[#F5A623]">{role.title}</h3>
            <p className="mb-6 flex-grow text-white/70">{role.description}</p>
            <button
              onClick={() => setActiveRole(role)}
              className="mt-auto w-full bg-[#F5A623] py-3 text-sm font-bold lowercase text-black transition-opacity hover:opacity-90"
            >
              apply now
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-[#F5A623] to-[#FF6B00] p-10 text-center text-black">
        <h2 className="mb-4 text-3xl font-black lowercase">don't see your role?</h2>
        <p className="mb-8 text-lg font-medium text-black/80">Send us your resume anyway. We love meeting talented people.</p>
        <button
          onClick={() => setShowDropCV(true)}
          className="inline-block bg-black px-8 py-3 text-sm font-semibold lowercase text-white transition-opacity hover:opacity-80"
        >
          drop your cv
        </button>
      </div>

      {/* Modals */}
      {activeRole && <ApplyModal role={activeRole} onClose={() => setActiveRole(null)} />}
      {showDropCV && <DropCVModal onClose={() => setShowDropCV(false)} />}
    </div>
  );
}
