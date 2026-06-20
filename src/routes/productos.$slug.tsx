import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Leaf, ExternalLink, Sparkles, MessageCircle } from "lucide-react";
import { products, type Product } from "@/data/products";

export const Route = createFileRoute("/productos/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = products.find(p => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },

  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Producto · María Vital" }] };
    const desc = p.benefits[0] || `Ficha oficial doTERRA de ${p.name}.`;
    return {
      meta: [
        { title: `${p.name} doTERRA · Ficha completa · María Vital` },
        { name: "description", content: desc.slice(0, 158) },
        { property: "og:title", content: `${p.name} doTERRA` },
        { property: "og:description", content: desc.slice(0, 158) },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();

  return (
    <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12">
      <Link to="/productos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-forest mb-8">
        <ArrowLeft className="h-4 w-4" />Volver al catálogo
      </Link>

      <header className="rounded-3xl bg-gradient-forest text-primary-foreground p-10 shadow-elegant">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-primary-foreground/15 border border-primary-foreground/25 px-3 py-1 text-[0.65rem] uppercase tracking-widest">
              {p.category.replace(/^\d{2}\s*-\s*/, "")}
            </span>
            <h1 className="mt-4 font-display text-5xl text-primary-foreground">{p.name}</h1>
            {p.englishName && <p className="mt-1 text-primary-foreground/80 italic">{p.englishName}</p>}
          </div>
          <div className="h-16 w-16 rounded-2xl bg-primary-foreground/15 flex items-center justify-center">
            <Leaf className="h-8 w-8" />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          {p.type && <span className="rounded-full bg-primary-foreground/15 px-3 py-1">{p.type}</span>}
          {p.source && <span className="rounded-full bg-primary-foreground/15 px-3 py-1">Origen: {p.source}</span>}
        </div>
      </header>

      <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          {p.benefits.length > 0 && (
            <section>
              <h2 className="font-display text-3xl flex items-center gap-3"><Sparkles className="h-6 w-6 text-leaf" />Beneficios</h2>
              <ul className="mt-5 space-y-3">
                {p.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-leaf shrink-0" />{b}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {p.uses.length > 0 && (
            <section>
              <h2 className="font-display text-3xl">Cómo usarlo</h2>
              <ul className="mt-5 space-y-3">
                {p.uses.map((u: string, i: number) => (
                  <li key={i} className="rounded-xl bg-pale p-4 text-sm text-foreground/80 leading-relaxed">{u}</li>
                ))}
              </ul>
            </section>
          )}

          {p.methods.length > 0 && (
            <section>
              <h3 className="font-display text-2xl">Métodos de aplicación</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.methods.map((m: string, i: number) => (
                  <span key={i} className="rounded-full bg-pale text-forest-deep px-4 py-1.5 text-xs font-medium">{m}</span>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="md:sticky md:top-24 self-start space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-xl">¿Te interesa?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Escríbeme por WhatsApp y te lo gestiono directamente.</p>
            <a
              href={`https://wa.me/34671724828?text=${encodeURIComponent(`Hola María 👋\nMe interesa el producto *${p.name}* de doTERRA.\n¿Me puedes dar más información y cómo pedirlo?`)}`}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 text-sm font-medium hover:bg-[#1da851] transition-colors shadow-soft"
            >
              <MessageCircle className="h-4 w-4" />Pedir por WhatsApp
            </a>
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-forest">
                Ficha oficial doTERRA <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>

        </aside>
      </div>
    </section>
  );
}
