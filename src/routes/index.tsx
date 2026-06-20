import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, GraduationCap, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero-fern.png";
import mariaImg from "@/assets/maria-vital.jpg";
import mariaRisaImg from "@/assets/maria-risa.jpg";
import { Testimonials } from "@/components/Testimonials";
import igPost1 from "@/assets/ig-thumb-1.jpg";
import igPost2 from "@/assets/ig-thumb-2.jpg";
import igPost3 from "@/assets/ig-thumb-3.jpg";
import igPost4 from "@/assets/ig-thumb-4.jpg";
import igPost5 from "@/assets/ig-thumb-5.jpg";
import igPost6 from "@/assets/ig-thumb-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María Vital · Tu distribuidor doTERRA y bienestar holístico" },
      { name: "description", content: "Tu distribuidor doTERRA en España. Tu tienda doTERRA con los 192 aceites esenciales, asesoría gratuita, kinesiología y acompañamiento holístico con María Vital." },
      { name: "keywords", content: "bienestar holístico, aromaterapia, aceites esenciales, doTERRA, salud digestiva, salud emocional, kinesiología, terapia holística, natural wellness, selfcare, espacio vital bienestar, María Vital, intestino cerebro, vivir con propósito" },
      { property: "og:title", content: "María Vital · Bienestar holístico y aromaterapia" },
      { property: "og:description", content: "Acompaño a personas a reconectar con su salud desde dentro. Kinesiología, aromaterapia y aceites esenciales para que vivas con equilibrio y propósito." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[66vh] flex items-center">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/98 via-cream/90 to-cream/30" />
        <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <span className="eyebrow">HOLÍSTICO · AROMATERAPIA · DOTERRA</span>
              <h1 className="mt-5 font-display text-[2.7rem] md:text-[4.3rem] leading-[1.02] text-forest-deep">
                Bienestar que fluye.<br />
                Naturaleza que sana.<br />
                <span className="text-leaf italic">Liderazgo con propósito.</span>
              </h1>
              <p className="mt-8 text-lg text-foreground/70 max-w-xl leading-relaxed">
                Sesiones holísticas y aromaterapia con aceites esenciales doTERRA puros y certificados. Catálogo completo, formaciones y acompañamiento personal para que conectes con tu potencial.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/acompanamiento" className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-8 py-4 text-base font-medium hover:bg-forest-deep transition-colors shadow-elegant">
                  Descubrir cómo trabajo <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/34671724828?text=Hola%20María%2C%20quiero%20reservar%20una%20sesión" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border-2 border-forest text-forest px-8 py-4 text-base font-medium hover:bg-forest hover:text-primary-foreground transition-colors">
                  Reservar sesión
                </a>
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-72 h-80 rounded-[2.5rem] overflow-hidden shadow-elegant">
                <img src={mariaImg} alt="María Vital, terapeuta holística" className="absolute inset-0 h-full w-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-forest-deep">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-leaf">Mi enfoque</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary-foreground">Tres caminos hacia el bienestar</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: HeartHandshake, title: "Acompañamiento holístico", desc: "Sesiones de kinesiología para trabajar la conexión intestino-emoción y recuperar tu equilibrio.", to: "/acompanamiento" },
              { icon: Leaf, title: "Aromaterapia doTERRA", desc: "192 aceites esenciales puros y certificados CPTG, con asesoría gratuita y formaciones incluidas.", to: "/aromaterapia" },
              { icon: GraduationCap, title: "Formaciones", desc: "Clases temáticas abiertas y un Centro de Formación para líderes vitales doTERRA.", to: "/aromaterapia" },
            ].map(p => (
              <Link key={p.title} to={p.to} className="group rounded-2xl bg-white/8 border border-white/15 p-8 hover:bg-white/14 hover:border-leaf transition-all">
                <div className="h-12 w-12 rounded-xl bg-leaf/20 flex items-center justify-center text-leaf group-hover:bg-leaf group-hover:text-forest-deep transition-colors">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-primary-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-leaf">
                  Descubrir <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img src={mariaRisaImg} alt="María Vital" className="absolute inset-0 h-full w-full object-cover object-center" />
          </div>
          <div>
            <span className="eyebrow">Sobre María</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Naturaleza que sana, presencia que acompaña.</h2>
            <p className="mt-6 text-foreground/75 leading-relaxed">
              Desde Espacio Vital Bienestar acompaño a personas y equipos a reconectar con su salud
              integral. Combino la sabiduría de la aromaterapia clínica con prácticas holísticas para
              crear procesos personalizados, conscientes y duraderos.
            </p>
            <Link to="/sobre" className="mt-7 inline-flex items-center gap-2 text-forest font-medium hover:text-forest-deep">
              Conoce mi historia <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* SOCIAL MEDIA */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow">Sígueme</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Conéctate conmigo</h2>
            <p className="mt-4 text-muted-foreground">Contenido diario sobre bienestar, aceites esenciales y salud holística.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-stretch">

            {/* INSTAGRAM CARD */}
            <div className="rounded-3xl bg-card border border-border shadow-elegant overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-px">
                <div className="bg-card px-6 py-5 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#ee2a7b]/30 shrink-0">
                    <img src={mariaImg} alt="María Vital" className="h-full w-full object-cover object-top" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">mariavital2.0</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Salud digestiva y emocional 🌿</div>
                    <div className="flex gap-4 mt-1.5 text-xs text-muted-foreground">
                      <span><strong className="text-foreground">507</strong> publicaciones</span>
                      <span><strong className="text-foreground">1.498</strong> seguidores</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Posts grid */}
              <div className="grid grid-cols-3 gap-px bg-border flex-1">
                {[igPost1, igPost2, igPost3, igPost4, igPost5, igPost6].map((src, i) => (
                  <a key={i} href="https://instagram.com/mariavital2.0" target="_blank" rel="noopener"
                    className="aspect-square bg-muted overflow-hidden group">
                    <img src={src} alt={`Post Instagram ${i + 1}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </a>
                ))}
              </div>
              {/* CTA — fijado al fondo */}
              <div className="px-6 py-5 mt-auto">
                <a href="https://instagram.com/mariavital2.0" target="_blank" rel="noopener"
                  className="w-full flex items-center justify-center gap-2 rounded-full border-2 border-[#ee2a7b] text-[#ee2a7b] py-2.5 text-sm font-semibold hover:bg-[#ee2a7b] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Seguir en Instagram
                </a>
              </div>
            </div>

            {/* LINKEDIN CARD */}
            <div className="rounded-3xl bg-card border border-border shadow-elegant overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-[#0A66C2] p-px">
                <div className="bg-card px-6 py-5 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-[#0A66C2]/30 shrink-0">
                    <img src={mariaImg} alt="María Vital" className="h-full w-full object-cover object-top" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">María Vital</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Terapeuta Holística · Wellness Advocate doTERRA</div>
                    <div className="flex gap-4 mt-1.5 text-xs text-muted-foreground">
                      <span><strong className="text-foreground">+500</strong> seguidores</span>
                      <span>Santiago de Compostela</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Posts list */}
              <div className="divide-y divide-border flex-1">
                {[
                  "¿Sabías que el 90% de la serotonina se produce en el intestino? La conexión intestino-cerebro es real y trabajarla cambia todo. 🌿",
                  "El aceite esencial de Lavanda no solo relaja. En combinación con Copaiba actúa como un antiinflamatorio natural de primer nivel. ✨",
                  "Nueva sesión de kinesiología disponible online. Tu cuerpo siempre sabe más de lo que crees. ¿Le escuchas? 💚",
                ].map((text, i) => (
                  <a key={i} href="https://www.linkedin.com/in/maria-vital-087099268/" target="_blank" rel="noopener"
                    className="block px-6 py-4 hover:bg-pale transition-colors group">
                    <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2 group-hover:text-forest transition-colors">{text}</p>
                  </a>
                ))}
              </div>
              {/* CTA — fijado al fondo */}
              <div className="px-6 py-5 mt-auto">
                <a href="https://www.linkedin.com/in/maria-vital-087099268/" target="_blank" rel="noopener"
                  className="w-full flex items-center justify-center gap-2 rounded-full border-2 border-[#0A66C2] text-[#0A66C2] py-2.5 text-sm font-semibold hover:bg-[#0A66C2] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Seguir en LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
