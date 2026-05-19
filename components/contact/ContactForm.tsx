"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactPayload } from "@/lib/validations";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactPayload) => {
    setStatus("");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (!response.ok) {
      setStatus(data.message || "Something went wrong.");
      return;
    }
    reset();
    setStatus("We'll be in touch soon!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl bg-[#1A1A1A] p-6">
      <input {...register("name")} placeholder="Name" className="w-full rounded bg-black/30 p-3" />
      {errors.name && <p className="text-sm text-red-300">{errors.name.message}</p>}
      <input {...register("email")} placeholder="Email" className="w-full rounded bg-black/30 p-3" />
      {errors.email && <p className="text-sm text-red-300">{errors.email.message}</p>}
      <input {...register("phone")} placeholder="Phone (optional)" className="w-full rounded bg-black/30 p-3" />
      <input {...register("company")} placeholder="Company (optional)" className="w-full rounded bg-black/30 p-3" />
      <select {...register("service")} className="w-full rounded bg-black/30 p-3">
        <option value="">Service Interested In</option>
        <option>Performance Marketing</option>
        <option>SEO</option>
        <option>Social</option>
        <option>Brand</option>
        <option>Web</option>
        <option>Other</option>
      </select>
      <textarea {...register("message")} placeholder="Message" rows={5} className="w-full rounded bg-black/30 p-3" />
      {errors.message && <p className="text-sm text-red-300">{errors.message.message}</p>}
      <button disabled={isSubmitting} className="rounded-full bg-[#F5A623] px-6 py-3 font-semibold text-black">
        {isSubmitting ? "Sending..." : "Send It →"}
      </button>
      {status && <p className="text-sm text-white/80">{status}</p>}
    </form>
  );
}
