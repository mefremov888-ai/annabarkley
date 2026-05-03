import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="pt-32 pb-32 px-7 max-md:pt-24">
      <div className="container-x text-center" style={{ maxWidth: '560px' }}>
        <div
          aria-hidden="true"
          className="font-heading font-light text-charcoal mb-4"
          style={{ fontSize: 'clamp(72px, 14vw, 144px)', lineHeight: 1, letterSpacing: '-0.04em' }}
        >
          404
        </div>
        <div className="grad-line mx-auto mb-8" />
        <h1 className="mb-5">Page not found · Страница не найдена</h1>
        <p className="text-text-muted font-light leading-[1.85] mb-10" style={{ fontSize: '17px' }}>
          The page you are looking for has moved or no longer exists.
          <br />
          Страница, которую вы ищете, была перемещена или больше не существует.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn-primary">Home · На главную</Link>
          <Link href="/contact" className="btn-outline">Contact · Связаться</Link>
        </div>
      </div>
    </section>
  );
}
