export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Euphogear. All rights reserved.</p>
          <p className="opacity-80">“人々を幸せにするシステムを作る”</p>
        </div>
      </div>
    </footer>
  );
}