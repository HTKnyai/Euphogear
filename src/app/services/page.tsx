export const metadata = {
  title: "Services | Euphogear",
  description: "提供サービス",
};

const services = [
  { title: "要件定義・企画", desc: "課題分解、価値仮説、KPI設計、ロードマップ" },
  { title: "UI/UX設計", desc: "情報設計、ワイヤー、プロトタイプ" },
  { title: "アプリ/WEB開発", desc: "Next.js / Firebase / Functions" },
  { title: "運用・改善", desc: "メトリクス設計、A/Bテスト、継続改善" },
];

export default function ServicesPage() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Services</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}