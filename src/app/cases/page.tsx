import Link from "next/link";

export default function CasesPage() {
  // 後で Firestore/API からデータを取得
  const data = [
    { id: "1", title: "心理テスト診断システム", summary: "Webアプリ開発", slug: "test-system" },
    { id: "2", title: "メンタルヘルス管理アプリ", summary: "モバイルアプリ", slug: "mental-health" }
  ];

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-bold">実績紹介</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {data.map(item => (
          <Link key={item.id} href={`/cases/${item.slug}`} className="rounded border p-4 hover:shadow">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}