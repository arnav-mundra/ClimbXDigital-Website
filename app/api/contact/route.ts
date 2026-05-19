import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/mailer";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const store = new Map<string, { count: number; expires: number }>();

function allowRequest(ip: string) {
  const now = Date.now();
  const current = store.get(ip);
  if (!current || current.expires < now) {
    store.set(ip, { count: 1, expires: now + WINDOW_MS });
    return true;
  }
  if (current.count >= MAX_REQUESTS) return false;
  current.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    if (!allowRequest(ip)) {
      return NextResponse.json({ success: false, message: "Too many requests." }, { status: 429 });
    }

    const json = await request.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid request body", errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    await sendContactEmail(parsed.data);
    return NextResponse.json({ success: true, message: "Email sent" }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to send email." }, { status: 500 });
  }
}
