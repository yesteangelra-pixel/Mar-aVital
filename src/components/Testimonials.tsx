import { Quote } from "lucide-react";

type Testimonial = {
  text: string;
  name: string;
  role?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    text: "Llevaba años con hinchazón y malestar digestivo. En pocas sesiones con María entendí que mis emociones tenían mucho que ver. Hoy vivo sin ese peso constante.",
    name: "Laura M.",
    role: "Cliente · Palma de Mallorca",
  },
  {
    text: "Su forma de combinar kinesiología y aceites esenciales doTERRA me cambió la rutina. Duermo mejor, gestiono el estrés y por fin entiendo lo que mi cuerpo me pide.",
    name: "Andrea R.",
    role: "Cliente online",
  },
  {
    text: "María es la distribuidora doTERRA que recomiendo siempre. Asesora con honestidad, te enseña a usar cada aceite y se nota el conocimiento detrás de cada protocolo.",
    name: "Cristina G.",
    role: "Cliente · Barcelona",
  },
  {
    text: "Una profesional cercana, intuitiva y con un saber enorme. Salí de la sesión con herramientas reales para mi día a día y con ganas de seguir cuidándome.",
    name: "Marta P.",
    role: "Cliente · Santiago de Compostela",
  },
];

export function Testimonials({ items = defaultTestimonials }: { items?: Testimonial[] }) {
  return (
    <section className="bg-pale">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Testimonios</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Lo que dicen quienes han confiado</h2>
          <p className="mt-4 text-muted-foreground">
            Procesos reales con kinesiología, gestión emocional y aromaterapia doTERRA.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-card border border-border p-8 shadow-soft flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-400 text-lg" aria-label="5 estrellas">
                  {"★★★★★"}
                </div>
                <Quote className="h-5 w-5 text-leaf/40" aria-hidden />
              </div>
              <blockquote className="mt-4 text-foreground/85 leading-relaxed italic">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-border">
                <div className="font-display text-lg text-forest">{t.name}</div>
                {t.role && (
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">
                    {t.role}
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
