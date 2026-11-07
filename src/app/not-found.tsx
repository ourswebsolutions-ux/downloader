import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="text-gradient mt-4 text-5xl font-semibold">Page not found</h1>
      <p className="mt-4 max-w-md text-text-2">The page you’re looking for doesn’t exist or has moved.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">Go home</Link>
        <Link href="/download/" className="btn btn-ghost">Download</Link>
      </div>
    </section>
  );
}
