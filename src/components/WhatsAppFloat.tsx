import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const PHONE_INTL = "34671724828";
const PHONE_DISPLAY = "+34 671 72 48 28";
const MESSAGE = "Hola María, me gustaría más información 🌿";

const WHATSAPP_URL = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(MESSAGE)}`;

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="rounded-2xl bg-card border border-border shadow-elegant p-4 w-72 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="font-display text-lg text-forest-deep">María Vital</div>
              <div className="text-xs text-muted-foreground">Responde habitualmente en minutos</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar" className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
            ¡Hola! 🌿 Cuéntame cómo te puedo ayudar y te respondo enseguida.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf text-white px-4 py-2.5 text-sm font-medium hover:bg-forest transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Abrir WhatsApp
            </a>
            <a
              href={`tel:+${PHONE_INTL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border text-foreground px-4 py-2.5 text-sm font-medium hover:bg-pale transition-colors"
            >
              <Phone className="h-4 w-4" /> Llamar {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Contactar por WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white shadow-elegant hover:bg-forest transition-colors"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-leaf/60 animate-ping" aria-hidden />}
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-6 w-6" />}
      </button>
    </div>
  );
}
