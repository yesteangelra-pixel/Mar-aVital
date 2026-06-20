import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/ig-post-2.jpg";

export const Route = createFileRoute("/acompanamiento")({
  head: () => ({
    meta: [
      { title: "Acompañamiento holístico · Kinesiología y bienestar · María Vital" },
      {
        name: "description",
        content:
          "Sesiones de kinesiología y acompañamiento holístico con María Vital. Trabajo la conexión intestino-emoción para que recuperes el equilibrio. Presencial en Palma de Mallorca, Barcelona, Santiago y online.",
      },
      {
        name: "keywords",
        content:
          "acompañamiento holístico, kinesiología, salud digestiva, salud emocional, terapia holística, intestino cerebro, bienestar natural, natural wellness, espacio vital bienestar, María Vital, selfcare, vivir con propósito",
      },
      { property: "og:title", content: "Acompañamiento holístico · Kinesiología · María Vital" },
      { property: "og:description", content: "Kinesiología y acompañamiento holístico para recuperar tu equilibrio interior." },
    ],
  }),
  component: Acompanamiento,
});

function Acompanamiento() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid gap-14 md:grid-cols-[6fr_5fr] items-center">
          <div>
            <span className="eyebrow">Acompañamiento holístico</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">
              Tu cuerpo recuerda lo que tu mente intentó olvidar.
            </h1>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              Las emociones no procesadas no desaparecen. Se instalan en el cuerpo y esperan.
              Trabajo la conexión profunda entre tus <strong>emociones</strong> y tu{" "}
              <strong>sistema digestivo</strong> para que por fin puedas escuchar lo que tu cuerpo
              lleva tiempo diciéndote.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/34671724828?text=Hola%20María%2C%20quiero%20reservar%20una%20sesión%20holística"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-7 py-3.5 font-medium hover:bg-forest-deep transition-colors shadow-elegant"
              >
                Reservar sesión <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-forest text-forest px-7 py-3.5 font-medium hover:bg-forest hover:text-primary-foreground transition-colors"
              >
                Preguntar sin compromiso
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
            <img
              src={heroImg}
              alt="Acompañamiento holístico con María Vital"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DOLOR — frases virales */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
        <span className="eyebrow">¿Reconoces esto?</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">
          Hinchazón, fatiga, mal humor, insomnio.
        </h2>
        <p className="mt-4 font-display text-2xl italic text-forest">
          Tu médico dice que estás bien. Tú sabes que no.
        </p>
        <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
          Llevas años diciéndole a tu cuerpo que aguante. Comer bien no es suficiente si tu sistema
          nervioso está en alerta permanente. Cada síntoma crónico es una conversación pendiente con
          tu cuerpo.
        </p>
        <div className="mt-8 rounded-2xl bg-card border border-border p-8 shadow-soft">
          <p className="font-display text-2xl text-forest">Tu intestino no está roto. Está agotado.</p>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            Hay diferencia. Y esa diferencia lo cambia todo: ya no se trata de aguantar mejor, sino de
            entender qué está pasando y por qué tu cuerpo te está mandando esa señal.
          </p>
        </div>
      </section>

      {/* 3 COSAS QUE NADIE TE CUENTA */}
      <section className="bg-forest-deep text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-leaf">Conexión intestino-cerebro</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary-foreground">
              3 cosas que nadie te cuenta
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "El 90% de tu serotonina se produce en el intestino",
                body: "No en el cerebro. Por eso cuando estás mal de la barriga, estás mal de la cabeza. Y al revés. Son el mismo sistema.",
              },
              {
                num: "02",
                title: "El estrés cambia tu microbiota en menos de 72 horas",
                body: "Tu sistema nervioso y tu intestino hablan constantemente a través del nervio vago. Cuando tu mente entra en modo supervivencia, tu barriga lo nota de inmediato.",
              },
              {
                num: "03",
                title: "Las emociones no expresadas viven en el intestino",
                body: "Tu intestino tiene más neuronas que la médula espinal. Lleva el registro de todo lo que no has dicho, lo que no has procesado, lo que has aguantado.",
              },
            ].map(item => (
              <div key={item.num} className="rounded-2xl bg-white/8 border border-white/15 p-8">
                <div className="font-display text-5xl text-leaf/60">{item.num}</div>
                <h3 className="mt-4 font-display text-xl text-primary-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-display text-xl italic text-leaf">
            "El estrés no solo te afecta la cabeza. Le dice a tu intestino que entre en modo supervivencia. Y eso duele."
          </p>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <span className="eyebrow">🌿 Cómo trabajo</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Un enfoque integral</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Emociones e intestino",
                d: "Trabajo el vínculo entre tus emociones no procesadas y tus problemas intestinales. El cuerpo no miente. El cuerpo simplemente avisa.",
              },
              {
                t: "Kinesiología aplicada",
                d: "Técnicas de kinesiología para identificar y liberar bloqueos emocionales y físicos que el cuerpo lleva sosteniendo.",
              },
              {
                t: "Aromaterapia doTERRA",
                d: "Aceites esenciales certificados CPTG como apoyo natural para el sistema digestivo y el equilibrio emocional.",
              },
              {
                t: "Transformación holística",
                d: "Acompañamiento integral cuerpo, mente y emoción. Presencial en Palma de Mallorca, Barcelona, Santiago o en sesión online.",
              },
            ].map(item => (
              <div key={item.t} className="rounded-2xl bg-card border border-border p-8 shadow-soft">
                <h3 className="font-display text-2xl text-forest">{item.t}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
        <blockquote className="font-display text-3xl md:text-4xl italic text-forest-deep leading-snug">
          "Una sesión no te arregla. Te muestra el camino. Tú decides si caminar."
        </blockquote>
        <p className="mt-4 text-sm text-muted-foreground">— María Vital</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            ¿Empezamos a escuchar lo que tu cuerpo quiere decirte?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/34671724828?text=Hola%20María%2C%20quiero%20reservar%20una%20sesión"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full bg-forest text-primary-foreground px-8 py-3 font-medium shadow-elegant hover:opacity-90 transition"
            >
              Reservar sesión
            </a>
            <Link
              to="/aromaterapia"
              className="inline-flex items-center justify-center rounded-full border border-forest text-forest px-8 py-3 font-medium hover:bg-forest hover:text-primary-foreground transition"
            >
              Descubrir aromaterapia
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
