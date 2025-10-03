"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

type FormData = {
  name: string;
  email: string;
  project_type: string;
  budget_range?: string;
  message?: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);

  const onSubmit = async (data: FormData) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
    const token = await window.grecaptcha.execute(siteKey, { action: "submit" });

    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, recaptchaToken: token }),
    });

    if (res.ok) { alert("送信しました"); reset(); }
    else {
      const err = await res.json().catch(() => ({}));
      alert(`送信失敗: ${err.error ?? "unknown"}`);
    }
  };

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-2xl font-bold">お問い合わせ</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name", { required: true })} placeholder="氏名" className="w-full rounded border p-3" />
        <input {...register("email", { required: true })} placeholder="メールアドレス" className="w-full rounded border p-3" />
        <select {...register("project_type", { required: true })} className="w-full rounded border p-3">
          <option value="">プロジェクト種別</option>
          <option value="Web">Web</option>
          <option value="App">App</option>
          <option value="Consult">相談</option>
        </select>
        <select {...register("budget_range")} className="w-full rounded border p-3">
          <option value="">予算レンジ（任意）</option>
          <option>〜50万円</option><option>50-100万円</option>
          <option>100-300万円</option><option>300万円〜</option>
        </select>
        <textarea {...register("message")} rows={6} placeholder="内容（任意）" className="w-full rounded border p-3" />
        <button className="rounded bg-black px-5 py-3 text-white">送信</button>
      </form>
    </main>
  );
}