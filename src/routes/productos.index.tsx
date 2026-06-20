import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Leaf, ArrowRight, X } from "lucide-react";
import { products, categories } from "@/data/products";
import shopAppImg from "@/assets/doterra-shop-app.png";

export const Route = createFileRoute("/productos/")({
  head: () => ({
    meta: [
      { title: "Tu tienda doTERRA · 192 aceites y productos · María Vital" },
      { name: "description", content: "Tu tienda doTERRA online: 192 productos, aceites esenciales individuales, mezclas, On Guard, Spa y más. Fichas oficiales y asesoría gratuita de tu distribuidor doTERRA." },
      { name: "keywords", content: "tienda doTERRA, aceites esenciales, productos doTERRA, CPTG, aromaterapia, essential oils, bienestar natural, natural wellness, selfcare, salud integrativa, María Vital" },
      { property: "og:title", content: "Tu tienda doTERRA · Catálogo completo" },
      { property: "og:description", content: "192 productos doTERRA con fichas oficiales y asesoría de tu distribuidor doTERRA." },
    ],
  }),
  component: ProductosIndex,
});

function ProductosIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter(p => {
      if (cat && p.category !== cat) return false;
      if (!term) return true;
      return p.name.toLowerCase().includes(term)
        || p.englishName?.toLowerCase().includes(term)
        || p.benefits.some(b => b.toLowerCase().includes(term));
    });
  }, [q, cat]);

  return (
    <>
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <span className="eyebrow">Tu tienda doTERRA</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">192 productos puros</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Bienvenido a <strong>tu tienda doTERRA</strong>: aceites esenciales certificados grado terapéutico CPTG®,
              mezclas patentadas y líneas de bienestar. Cada ficha está extraída del catálogo oficial doTERRA.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={shopAppImg}
              alt="dōTERRA Shop App"
              className="w-36 md:w-48 rounded-3xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Search + filter */}
        <div className="sticky top-16 z-30 -mx-6 lg:-mx-8 px-6 lg:px-8 py-4 bg-background/90 backdrop-blur-md border-b border-border mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por nombre, beneficio…"
                className="w-full rounded-full border border-input bg-card pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-leaf"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setCat(null)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition ${cat === null ? "bg-forest text-primary-foreground border-forest" : "bg-card border-border text-foreground/70 hover:border-leaf"}`}
              >
                Todos · {products.length}
              </button>
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium border transition ${cat === c ? "bg-forest text-primary-foreground border-forest" : "bg-card border-border text-foreground/70 hover:border-leaf"}`}
                >
                  {c.replace(/^\d{2}\s*-\s*/, "")}
                </button>
              ))}
              {(cat || q) && (
                <button onClick={() => { setCat(null); setQ(""); }} className="whitespace-nowrap inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-forest px-2">
                  <X className="h-3 w-3" />Limpiar
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">{filtered.length} producto{filtered.length === 1 ? "" : "s"}</div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(p => (
            <Link
              key={p.slug}
              to="/productos/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-leaf hover:shadow-elegant transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="h-10 w-10 rounded-xl bg-pale text-forest flex items-center justify-center shrink-0">
                  <Leaf className="h-5 w-5" />
                </div>
                <span className="text-[0.6rem] uppercase tracking-widest text-muted-foreground text-right leading-tight">
                  {p.category.replace(/^\d{2}\s*-\s*/, "")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl leading-tight">{p.name}</h3>
              {p.englishName && <p className="text-xs italic text-muted-foreground mt-0.5">{p.englishName}</p>}
              {p.benefits[0] && (
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed line-clamp-3">{p.benefits[0]}</p>
              )}
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-forest">
                Ver ficha <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No encontramos productos con esa búsqueda.
          </div>
        )}
      </section>
    </>
  );
}
