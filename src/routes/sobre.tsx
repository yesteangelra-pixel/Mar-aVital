import { createFileRoute, Link } from "@tanstack/react-router";
import mariaImg from "@/assets/maria-vital.jpg";
import igPost1 from "@/assets/ig-thumb-1.jpg";
import igPost2 from "@/assets/ig-thumb-2.jpg";
import igPost3 from "@/assets/ig-thumb-3.jpg";
import igPost4 from "@/assets/ig-thumb-4.jpg";
import igPost5 from "@/assets/ig-thumb-5.jpg";
import igPost6 from "@/assets/ig-thumb-6.jpg";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre María Vital · Terapeuta holística y kinesióloga" },
      {
        name: "description",
        content:
          "María Vital, terapeuta holística y kinesióloga especializada en salud digestiva, gestión emocional y aromaterapia doTERRA. Tu cuerpo te está hablando… ¿le escuchas?",
      },
      { name: "keywords", content: "terapeuta holística, kinesióloga, salud digestiva, gestión emocional, aromaterapia doTERRA, bienestar natural, natural wellness, terapia holística, intestino cerebro, espacio vital bienestar, María Vital, Palma de Mallorca, Barcelona, Santiago de Compostela" },
      { property: "og:title", content: "Sobre María Vital" },
      {
        property: "og:description",
        content:
          "Salud digestiva, emociones y aromaterapia. Acompañamiento holístico en Palma de Mallorca, Barcelona y online.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
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
            <span className="eyebrow">Sobre mí</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">María Vital</h1>
            <p className="mt-3 font-display text-2xl italic text-forest">
              "Tu cuerpo te está hablando… ¿le escuchas?"
            </p>
            <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
              Terapeuta Holística · Kinesióloga · Tu distribuidor doTERRA
            </p>
            <p className="mt-7 text-foreground/80 leading-relaxed">
              Especialista en la conexión entre el <strong>sistema digestivo</strong> y las{" "}
              <strong>emociones</strong>. Acompaño a personas que llevan tiempo con molestias que
              nadie termina de explicar, y que intuyen que su estrés y sus emociones tienen mucho
              que ver con cómo está su barriga.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Mi trabajo parte de una convicción profunda: <em>el cuerpo no enferma porque sí</em>.
              Cada síntoma es un mensaje que, cuando aprendes a descifrar, te devuelve el control
              de tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* Síntomas / dolor del cliente */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
        <span className="eyebrow">¿Te suena?</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">
          ¿Sientes que tu cuerpo te pone obstáculos constantemente?
        </h2>
        <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
          Hinchazón, malestar digestivo, diarreas, estreñimiento, dolores que no ceden, cambios de
          humor, insomnio… Síntomas que los médicos no terminan de explicar y que van robándote
          energía y calidad de vida.
        </p>
        <p className="mt-4 font-display text-2xl italic text-forest">
          Te entiendo. Yo también lo viví.
        </p>
      </section>

      {/* Qué hago */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <span className="eyebrow">🌿 Qué hago exactamente</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Un enfoque integral</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Emociones e intestino",
                d: "Trabajo el vínculo entre tus emociones no procesadas y tus problemas intestinales.",
              },
              {
                t: "Kinesiología",
                d: "Aplico técnicas de kinesiología para identificar bloqueos emocionales y físicos.",
              },
              {
                t: "Aromaterapia doTERRA",
                d: "Aceites esenciales certificados como apoyo natural para el sistema digestivo y el equilibrio emocional.",
              },
              {
                t: "Transformación holística",
                d: "Acompaño procesos personales desde un enfoque integral: cuerpo, mente y emoción.",
              },
            ].map(item => (
              <div
                key={item.t}
                className="rounded-2xl bg-card border border-border p-8 shadow-soft"
              >
                <h3 className="font-display text-2xl text-forest">{item.t}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A quién ayudo */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
        <span className="eyebrow">🔍 A quién ayudo</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">¿Es para ti?</h2>
        <p className="mt-6 text-foreground/80 leading-relaxed">
          Personas que llevan tiempo con molestias digestivas sin encontrar una solución definitiva.
          Que sienten que sus emociones y su estrés tienen que ver con cómo está su barriga. Que
          quieren ir más allá del síntoma y entender qué hay detrás.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft">
          <p className="font-display text-2xl text-forest">¿El resultado?</p>
          <p className="mt-3 text-foreground/80 leading-relaxed">
            No se trata de aguantar mejor el malestar. Se trata de entender qué te quiere decir tu
            cuerpo para que tengas <strong>total libertad</strong> de decidir qué hacer con tu vida.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { n: "10+", l: "años acompañando" },
            { n: "192", l: "productos doTERRA" },
            { n: "∞", l: "potencial por desplegar" },
          ].map(s => (
            <div
              key={s.l}
              className="text-center rounded-2xl bg-card border border-border p-8 shadow-soft"
            >
              <div className="font-display text-5xl text-forest">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filosofía + cómo trabajo */}
      <section className="bg-gradient-pale">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20">
          <div className="prose prose-stone">
          <h2 className="font-display text-4xl">Mi filosofía</h2>
          <p className="text-foreground/80 leading-relaxed">
            Creo que el bienestar verdadero no se impone, se cultiva. Cada persona tiene un ritmo,
            una historia y unos recursos propios. Mi rol es escuchar, sostener y aportar
            herramientas naturales —kinesiología, aromaterapia y prácticas holísticas— para que
            descubras tu propia vía.
          </p>
          <h2 className="font-display text-4xl mt-12">Cómo trabajo</h2>
          <ul className="mt-4 space-y-3 text-foreground/80">
            <li>· Sesiones individuales presenciales y online.</li>
            <li>· Protocolos personalizados con aceites esenciales doTERRA.</li>
            <li>· Kinesiología aplicada a salud digestiva y gestión emocional.</li>
            <li>· Talleres y formaciones para grupos y empresas.</li>
            <li>· Mentorización a líderes vitales del equipo doTERRA.</li>
          </ul>
          <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground not-prose">
            📍 Palma de Mallorca · Barcelona · Santiago de Compostela · Online
          </p>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl">
          ¿Empezamos a escuchar lo que tu cuerpo quiere decirte?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/34671724828?text=Hola%20María%2C%20quiero%20reservar%20una%20sesión"
            target="_blank" rel="noopener"
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
      </section>
    </>
  );
}
