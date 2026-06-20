import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Droplet, Sparkles, Heart, Wind, ArrowRight, Play, GraduationCap, Users } from "lucide-react";
import advocateImg from "@/assets/doterra-wellness-advocate.png";

const usos = [
  { icon: Wind, title: "Aromático", desc: "Difusión en el aire para crear ambientes que apoyan el ánimo, la concentración o el descanso." },
  { icon: Droplet, title: "Tópico", desc: "Aplicación diluida sobre la piel para masaje, cuidado cosmético o protocolos de bienestar." },
  { icon: Heart, title: "Interno", desc: "Solo con aceites certificados grado terapéutico CPTG y siguiendo las indicaciones de seguridad." },
];

const categorias = [
  { tag: "Aceites individuales", desc: "Lavanda, Limón, Menta, Incienso… los esenciales de toda la vida." },
  { tag: "Mezclas patentadas", desc: "Sinergias exclusivas doTERRA para cada momento del día." },
  { tag: "Bienestar diario", desc: "Suplementos y soluciones para apoyar tu salud integral." },
  { tag: "On Guard", desc: "Línea protectora con la mezcla insignia de doTERRA." },
  { tag: "Spa", desc: "Cosmética natural para ritual de cuidado en casa." },
  { tag: "Protección solar", desc: "Filtros minerales con ingredientes naturales." },
  { tag: "Cuidado de la piel", desc: "Línea Essential Skin Care: limpieza, hidratación y antiedad." },
  { tag: "Difusores", desc: "Tecnología de difusión ultrasónica para tu espacio." },
];

const DIST = [
  { id: "F1agWkSThRI", tag: "Paso 1", title: "El Punto de Partida", desc: "Sienta las bases de tu negocio doTERRA: mentalidad, propósito y los primeros pasos para arrancar con claridad." },
  { id: "2KzqwdGwnSs", tag: "Paso 2", title: "Tu Lista de Contactos", desc: "Cómo identificar y conectar con tu círculo de influencia de forma natural, auténtica y sin presión." },
  { id: "6HqPWS3IMBc", tag: "Paso 3", title: "Compartir los Productos", desc: "Estrategias para presentar doTERRA y despertar el interés genuino de nuevas personas en tu entorno." },
  { id: "6Ed90S5kV7E", tag: "Paso 4", title: "El Seguimiento", desc: "Domina el arte del seguimiento: cómo acompañar a tus prospectos hasta que tomen una decisión informada." },
  { id: "Zcw-icFOoas", tag: "Paso 5", title: "Inscripción y Arranque", desc: "Incorpora a nuevos distribuidores y asegúrate de que empiecen con fuerza, motivación y las herramientas correctas." },
  { id: "4Vug0TYquLY", tag: "Pasos 6 · 7", title: "Liderazgo y Duplicación", desc: "Construye un equipo sólido, desarrolla líderes dentro de él y alcanza tus metas de rango con consistencia." },
];

const PUB = [
  { id: "geG6ZhV6nDA", tag: "Clase", title: "Aromaterapia en Niños", desc: "Guía práctica para usar aceites esenciales con los más pequeños: seguridad, dilución, rutinas y aplicaciones cotidianas." },
  { id: "s8vYvlN6uYc", tag: "Mayo 2025", title: "Presentación AromaTouch", desc: "Descubre la técnica AromaTouch de doTERRA: una experiencia de aplicación de aceites para el bienestar integral cuerpo-mente." },
];

export const Route = createFileRoute("/aromaterapia")({
  head: () => ({
    meta: [
      { title: "Aromaterapia doTERRA · Productos y formaciones · María Vital" },
      {
        name: "description",
        content:
          "Tu distribuidora doTERRA de confianza. Aceites esenciales puros certificados CPTG, 192 productos, formaciones y asesoría gratuita con María Vital.",
      },
      {
        name: "keywords",
        content:
          "aromaterapia, aceites esenciales doTERRA, CPTG, essential oils, salud integrativa, bienestar natural, natural wellness, selfcare, formaciones aromaterapia, tienda doTERRA, espacio vital bienestar, María Vital",
      },
      { property: "og:title", content: "Aromaterapia doTERRA · Productos y formaciones · María Vital" },
      { property: "og:description", content: "Tu tienda doTERRA: aceites esenciales puros, formaciones y asesoría." },
    ],
  }),
  component: Aromaterapia,
});

function Aromaterapia() {
  const [tab, setTab] = useState<"pub" | "dist">("pub");
  const videos = tab === "dist" ? DIST : PUB;
  const isDist = tab === "dist";

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-forest text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-primary-foreground/15 border border-primary-foreground/25 px-4 py-1 text-xs uppercase tracking-widest">
              TU TIENDA DOTERRA · AROMATERAPIA · FORMACIONES
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl text-primary-foreground">
              El poder de los aceites esenciales.
            </h1>
            <p className="mt-6 text-primary-foreground/85 leading-relaxed">
              Trabajo exclusivamente con aceites esenciales certificados grado terapéutico CPTG®, por su
              pureza y trazabilidad. Cada gota lleva décadas de ciencia y siglos de tradición.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/productos/"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-forest-deep px-7 py-3.5 font-medium hover:bg-pale transition-colors"
              >
                Ver los 192 productos <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/34671724828?text=Hola%20María%2C%20quiero%20asesoría%20sobre%20aceites%20doTERRA"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 text-primary-foreground px-7 py-3.5 font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Pedir asesoría gratuita
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={advocateImg}
              alt="dōTERRA Wellness Advocate"
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* TRES USOS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Tres formas de uso</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Cómo se aplican</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            El olfato es el único sentido con acceso directo al cerebro. Por eso un aroma puede cambiarte el día en segundos.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {usos.map(u => (
            <div key={u.title} className="rounded-2xl bg-card border border-border p-8 shadow-soft">
              <div className="h-12 w-12 rounded-xl bg-pale text-forest flex items-center justify-center">
                <u.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{u.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="bg-pale">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Catálogo</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Familias de producto</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categorias.map(c => (
              <div key={c.tag} className="rounded-2xl bg-card border border-border p-6 hover:border-leaf transition-colors">
                <Sparkles className="h-5 w-5 text-leaf" />
                <h3 className="mt-3 font-display text-xl">{c.tag}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/productos/"
              className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-7 py-3.5 font-medium hover:bg-forest-deep transition-colors shadow-elegant"
            >
              Explorar catálogo completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FORMACIONES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20" id="formaciones">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Centro de Formación</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Aprende, comparte, lidera</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Recursos exclusivos del Espacio Vital Bienestar: clases temáticas abiertas sobre aromaterapia
            y una ruta de 7 pasos para líderes doTERRA.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setTab("pub")}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${tab === "pub" ? "bg-accent text-accent-foreground shadow-soft" : "bg-card border border-border text-foreground/70 hover:border-accent"}`}
          >
            <Users className="h-4 w-4" />Público
          </button>
          <button
            onClick={() => setTab("dist")}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${tab === "dist" ? "bg-forest text-primary-foreground shadow-soft" : "bg-card border border-border text-foreground/70 hover:border-leaf"}`}
          >
            <GraduationCap className="h-4 w-4" />Líderes Vitales
          </button>
        </div>

        <div className="text-center mb-10 max-w-2xl mx-auto">
          {isDist ? (
            <>
              <span className="inline-block rounded-full bg-pale text-forest-deep px-4 py-1 text-xs uppercase tracking-widest">Uso interno · Equipo</span>
              <h3 className="mt-4 font-display text-3xl">7 Pasos para el Éxito</h3>
              <p className="mt-3 text-muted-foreground">Formación oficial doTERRA para líderes. Sigue la secuencia para construir un negocio sólido y duplicable.</p>
            </>
          ) : (
            <>
              <span className="inline-block rounded-full bg-accent/20 text-accent px-4 py-1 text-xs uppercase tracking-widest">Clases temáticas · Abierto</span>
              <h3 className="mt-4 font-display text-3xl">Formaciones para clientes</h3>
              <p className="mt-3 text-muted-foreground">Clases divulgativas sobre aceites esenciales y bienestar natural. Ideales para compartir con familia y amigos.</p>
            </>
          )}
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {videos.map(v => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener"
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition-all"
            >
              <div className="relative aspect-video overflow-hidden bg-pale">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-widest font-semibold ${isDist ? "bg-forest text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                  {v.tag}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`h-14 w-14 rounded-full flex items-center justify-center ${isDist ? "bg-forest" : "bg-accent"} text-primary-foreground shadow-elegant group-hover:scale-110 transition-transform`}>
                    <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{v.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl">¿No sabes por dónde empezar?</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Te ayudo a elegir los aceites adecuados para tu momento y a diseñar un protocolo personal.
            Asesoría gratuita para clientes nuevos.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-forest text-forest px-7 py-3.5 font-medium hover:bg-forest hover:text-primary-foreground transition-colors"
          >
            Reservar asesoría
          </Link>
        </div>
      </section>
    </>
  );
}
