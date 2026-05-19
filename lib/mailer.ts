import nodemailer from "nodemailer";
import { ContactPayload } from "@/lib/validations";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(payload: ContactPayload) {
  const to = process.env.CONTACT_EMAIL_TO || "hello@climbxdigital.in";
  const from = process.env.SMTP_FROM || "noreply@climbxdigital.in";
  const entries = Object.entries(payload).map(
    ([key, value]) => `<tr><td style="padding:8px;font-weight:700">${key}</td><td style="padding:8px">${value || "-"}</td></tr>`
  );

  await transporter.sendMail({
    to,
    from,
    subject: `New Enquiry from ${payload.name} - ClimbXDigital`,
    html: `<div style="font-family:Inter,Arial;background:#0A0A0A;color:#fff;padding:24px">
      <h2 style="color:#F5A623">New Contact Enquiry</h2>
      <table style="width:100%;border-collapse:collapse;background:#1A1A1A">${entries.join("")}</table>
    </div>`,
  });

  await transporter.sendMail({
    to: payload.email,
    from,
    subject: "We received your enquiry - ClimbXDigital",
    html: `<div style="font-family:Inter,Arial;padding:24px"><p>Hi ${payload.name},</p><p>Thanks for reaching out. Our team will respond within 24 hours.</p></div>`,
  });
}
