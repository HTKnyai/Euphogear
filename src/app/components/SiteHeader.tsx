"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// ナビゲーション（ワイヤーフレーム準拠: Top / Cases / Vision / Services / Contact）
const links = [
  { href: "/", label: "Top" },
  { href: "/cases", label: "Cases" },
  { href: "/vision", label: "Vision" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        {/* Brand */}
        <Link href="/" className="shrink-0 text-lg font-extrabold tracking-tight">
          Euphogear
        </Link>

        {/* Nav (中央寄せ / スクロール可能) */}
        <nav className="-mx-2 hidden flex-1 items-center justify-center gap-1 overflow-x-auto sm:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "rounded px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors",
                  active && "text-gray-900 font-semibold underline underline-offset-8"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA（右側） */}
        <div className="ml-auto">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            相談してみる
          </Link>
        </div>
      </div>
    </header>
  );
}