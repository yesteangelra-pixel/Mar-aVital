import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, Linkedin, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · María Vital" },
      { name: "description", content: "Reserva una sesión holística o asesoría con aceites esenciales doTERRA. Escríbeme directamente." },
      { name: "keywords", content: "sesión holística, asesoría doTERRA, reservar sesión, kinesiología, aromaterapia, contacto, María Vital, espacio vital bienestar" },
      { property: "og:title", content: "Contacto · María Vital" },
      { property: "og:description", content: "Reserva una sesión o asesoría gratuita." },
    ],
  }),
  component: Contacto,
});

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

function Contacto() {
  const [via, setVia] = useState<"whatsapp" | "email">("whatsapp");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = data.get("name") as string;
    const tema = data.get("tema") as string;
    const msg = data.get("message") as string;

    if (via === "whatsapp") {
      let text = `Hola María, te escribo desde tu web 👋\n\n*Nombre:* ${nombre}`;
      if (tema) text += `\n*Me interesa:* ${tema}`;
      text += `\n\n*Mensaje:*\n${msg}`;
      window.open(`https://wa.me/34671724828?text=${encodeURIComponent(text)}`, "_blank");
    } else {
      const subject = tema ? `Web · ${tema}` : "Mensaje desde tu web";
      let body = `Hola María,\n\nTe escribo desde tu web.\n\nNombre: ${nombre}`;
      if (tema) body += `\nMe interesa: ${tema}`;
      body += `\n\nMensaje:\n${msg}`;
      window.open(`mailto:mariavitalholistica@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20 grid gap-12 md:grid-cols-2">
      <div>
        <span className="eyebrow">Hablemos</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Conecta con María</h1>
        <p className="mt-5 text-foreground/75 leading-relaxed">
          Cuéntame qué buscas: una sesión holística, asesoría con aceites esenciales, una formación
          para tu grupo o sumarte al equipo de líderes vitales doTERRA.
        </p>
        <ul className="mt-8 space-y-4 text-sm">
          <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-forest mt-0.5" /><a href="https://wa.me/34671724828" target="_blank" rel="noopener" className="hover:text-forest">+34 671 72 48 28 · WhatsApp</a></li>
          <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-forest mt-0.5" /><a href="mailto:mariavitalholistica@gmail.com" className="hover:text-forest">mariavitalholistica@gmail.com</a></li>
          <li className="flex items-start gap-3"><Instagram className="h-5 w-5 text-forest mt-0.5" /><a href="https://instagram.com/mariavital2.0" target="_blank" rel="noopener" className="hover:text-forest">@mariavital2.0</a></li>
          <li className="flex items-start gap-3"><Linkedin className="h-5 w-5 text-forest mt-0.5" /><a href="https://www.linkedin.com/in/maria-vital-087099268/" target="_blank" rel="noopener" className="hover:text-forest">LinkedIn · María Vital</a></li>
          <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-forest mt-0.5" /><span>R. Montero Ríos 50 · Santiago de Compostela<br/>Sesiones presenciales y online</span></li>
        </ul>
      </div>

      <form
        className="rounded-3xl bg-card border border-border p-8 shadow-elegant space-y-5"
        onSubmit={handleSubmit}
      >
        {/* Canal de contacto */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">¿Cómo prefieres contactar?</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setVia("whatsapp")}
              className={`flex items-center justify-center gap-2 rounded-xl border-2 py-2.5 text-sm font-medium transition-colors ${via === "whatsapp" ? "border-[#25D366] bg-[#25D366]/10 text-[#1a9e4a]" : "border-border text-muted-foreground hover:border-[#25D366]/50"}`}
            >
              {WA_ICON}WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setVia("email")}
              className={`flex items-center justify-center gap-2 rounded-xl border-2 py-2.5 text-sm font-medium transition-colors ${via === "email" ? "border-forest bg-forest/10 text-forest" : "border-border text-muted-foreground hover:border-forest/50"}`}
            >
              <Mail className="h-4 w-4" />Email
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Nombre</label>
          <input required name="name" placeholder="Tu nombre" className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-leaf" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">¿Qué te interesa?</label>
          <select name="tema" className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-leaf text-foreground/80">
            <option value="">— Selecciona un tema —</option>
            <option>Sesión holística</option>
            <option>Aromaterapia doTERRA</option>
            <option>Formaciones</option>
            <option>Hacerme distribuidora</option>
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Mensaje</label>
          <textarea required name="message" rows={4} placeholder="Cuéntame en qué puedo ayudarte…" className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-leaf" />
        </div>

        {via === "whatsapp" ? (
          <button className="w-full rounded-full bg-[#25D366] text-white py-3.5 font-medium hover:bg-[#1da851] transition-colors shadow-soft flex items-center justify-center gap-2">
            {WA_ICON}Enviar por WhatsApp
          </button>
        ) : (
          <button className="w-full rounded-full bg-forest text-primary-foreground py-3.5 font-medium hover:bg-forest-deep transition-colors shadow-soft flex items-center justify-center gap-2">
            <Mail className="h-5 w-5" />Enviar por Email
          </button>
        )}
      </form>
    </section>
  );
}
