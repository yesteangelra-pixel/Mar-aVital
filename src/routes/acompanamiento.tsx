import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mariaImg from "@/assets/maria-vital.jpg";

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid gap-14 md:grid-cols-[5fr_6fr] items-center">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-elegant">
            <img
              src={mariaImg}
              alt="María Vital, terapeuta holística y kinesióloga"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Acompañamiento holístico</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">Tu cuerpo tiene un mensaje</h1>
            <p className="mt-3 font-display text-2xl italic text-forest">
              "Deja de tratar los síntomas. Empieza a escuchar los mensajes."
            </p>
            <p className="mt-7 text-foreground/80 leading-relaxed">
              Trabajo la conexión entre el <strong>sistema digestivo</strong> y las{" "}
              <strong>emociones</strong>. Acompaño a personas que llevan tiempo con molestias que nadie
              termina de explicar, y que intuyen que su estrés y sus emociones tienen mucho que ver con
              cómo está su barriga.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              El cuerpo no miente. El cuerpo no dramatiza. El cuerpo simplemente avisa.
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
        </div>
      </section>

      {/* SÍNTOMAS / DOLOR */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
        <span className="eyebrow">¿Te suena?</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">
          ¿Sientes que tu cuerpo te pone obstáculos constantemente?
        </h2>
        <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
          Hinchazón, malestar digestivo, fatiga, cambios de humor, insomnio, dolores que no ceden…
          Síntomas que los médicos no terminan de explicar y que van robándote energía y calidad de vida.
        </p>
        <p className="mt-4 font-display text-2xl italic text-forest">
          Tu intestino no está roto. Está agotado. Hay diferencia.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <span className="eyebrow">🌿 Cómo trabajo</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Un enfoque integral</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Emociones e intestino",
                d: "Trabajo el vínculo entre tus emociones no procesadas y tus problemas intestinales. El 90% de la serotonina se fabrica en el intestino.",
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

      {/* A QUIÉN AYUDO */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
        <span className="eyebrow">🔍 A quién ayudo</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">¿Es para ti?</h2>
        <p className="mt-6 text-foreground/80 leading-relaxed">
          Personas que llevan tiempo con molestias digestivas sin encontrar una solución definitiva. Que
          sienten que sus emociones y su estrés tienen que ver con cómo está su barriga. Que quieren ir
          más allá del síntoma y entender qué hay detrás.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
          <p className="font-display text-2xl text-forest">¿El resultado?</p>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            No se trata de aguantar mejor el malestar. Se trata de entender qué te quiere decir tu cuerpo
            para que tengas <strong>total libertad</strong> de decidir qué hacer con tu vida.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { n: "10+", l: "años acompañando" },
            { n: "100%", l: "enfoque personalizado" },
            { n: "∞", l: "potencial por desplegar" },
          ].map(s => (
            <div key={s.l} className="text-center rounded-2xl bg-card border border-border p-8 shadow-soft">
              <div className="font-display text-5xl text-forest">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
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
