import { NextResponse } from "next/server";
import { dbAdmin } from "@/server/firebaseAdmin";

export async function POST(req: Request) {
  try {
    const { name, email, project_type, budget_range, message, recaptchaToken } = await req.json();

    // reCAPTCHA v3 検証
    if (!recaptchaToken) {
      return NextResponse.json({ error: "missing_recaptcha" }, { status: 400 });
    }
    const vr = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!, // ← GitHub Secretsに入れたやつ
        response: recaptchaToken,
      }),
    });
    const v = await vr.json();
    if (!v.success || (v.score ?? 0) < 0.5) {
      return NextResponse.json({ error: "invalid_recaptcha" }, { status: 400 });
    }

    // Firestoreへ保存（サーバー経由）
    const ref = await dbAdmin.collection("inquiries").add({
      name,
      email,
      project_type,
      budget_range: budget_range ?? null,
      message: message ?? null,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ id: ref.id, status: "success" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}