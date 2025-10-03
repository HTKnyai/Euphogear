import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Euphogear | 人々を幸せにするシステムを作る",
  description: "要件定義から実装・運用まで伴走するプロダクトチーム",
};

export default function TopPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 sm:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            人々を幸せにするシステムを作る
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Euphogear は、システム開発を通じて皆様の課題解決と成長を支援します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-black px-6 py-3 text-white"
            >
              相談してみる
            </Link>
            <Link
              href="/services"
              className="rounded-xl border px-6 py-3"
            >
              サービスを見る
            </Link>
          </div>

          {/* 数値ハイライト（必要なら） */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { k: "50+", v: "プロジェクト" },
              { k: "2週間〜", v: "初期リリース" },
              { k: "99.9%", v: "稼働SLA" },
            ].map((it) => (
              <div key={it.k}>
                <div className="text-2xl font-bold">{it.k}</div>
                <div className="text-xs text-gray-500">{it.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ヒーロー画像枠（ワイヤーフレームの右側） */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-gray-50">
          {/* 後で実画像に差し替え */}
          <Image
            src="/hero-placeholder.png"
            alt=""
            fill
            className="object-cover opacity-90"
          />
        </div>
      </section>

      {/* ロゴ帯（トラスト） */}
      <section className="py-10">
        <div className="rounded-xl border px-6 py-4">
          <p className="mb-4 text-center text-xs uppercase tracking-wider text-gray-500">
            Trusted by
          </p>
          <div className="grid grid-cols-3 items-center justify-items-center gap-6 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-6 w-20 rounded bg-gray-200"
                aria-hidden
              />
            ))}
          </div>
        </div>
      </section>

      {/* 実績ハイライト（3カード） */}
      <section className="py-16">
        <h2 className="text-2xl font-bold">実績ハイライト</h2>
        <p className="mt-2 text-gray-600">
          価値検証から本番運用まで、課題に合わせて最適な進め方で支援します。
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "知の盆栽プラットフォーム",
              desc: "知識の分解・再編集・発信の循環を促すWebアプリ",
              tags: ["React", "Firebase"],
            },
            {
              title: "家事共有アプリ",
              desc: "日々のタスクをスムーズに分担するモバイル体験",
              tags: ["React Native", "Cloud Functions"],
            },
            {
              title: "社内ポータル刷新",
              desc: "ドキュメント検索と通知を統合し定着率を改善",
              tags: ["Next.js", "Search"],
            },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gray-100 px-2 py-0.5 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/services" className="text-sm underline">
            提供できることを詳しく見る →
          </Link>
        </div>
      </section>

      {/* プロセス（3〜4段） */}
      <section className="py-16">
        <h2 className="text-2xl font-bold">進め方</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { n: "01", t: "要件定義", d: "課題分解・価値仮説・KPI設計" },
            { n: "02", t: "設計/実装", d: "小さく速く届けるプロトタイプ" },
            { n: "03", t: "検証/改善", d: "計測と学習のループで継続改善" },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border p-6">
              <div className="text-xs text-gray-500">{s.n}</div>
              <h3 className="mt-1 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA バンド */}
      <section className="mt-8 rounded-2xl bg-gray-900 px-6 py-10 text-white">
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">まずは小さく始めましょう</h3>
            <p className="mt-2 text-sm text-gray-300">
              2週間のスプリントで仮説検証から。要件相談は無料です。
            </p>
          </div>
          <div className="sm:text-right">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-white px-6 py-3 font-medium text-gray-900"
            >
              相談してみる
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}