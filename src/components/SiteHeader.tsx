import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoLoto from "@/assets/ChatGPT Image 3 jun 2026, 11_25_08.png";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/sobre", label: "Sobre María" },
  { to: "/acompanamiento", label: "Acompañamiento" },
  { to: "/aromaterapia", label: "Aromaterapia" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-[100px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group" onClick={() => setOpen(false)}>
          <img src={logoLoto} alt="Logo María Vital" className="h-14 w-auto" />
          <div className="leading-tight">
            <div className="font-display text-2xl text-forest-deep">María Vital</div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Bienestar · Aromaterapia</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className="text-base text-foreground/80 hover:text-forest transition-colors"
              activeProps={{ className: "text-forest font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a href="https://wa.me/34671724828?text=Hola%20María%2C%20quiero%20reservar%20una%20sesión" target="_blank" rel="noopener" className="rounded-full bg-forest text-primary-foreground px-6 py-2.5 text-base font-medium hover:bg-forest-deep transition-colors shadow-soft">
            Reservar sesión
          </a>
        </nav>

        <button className="lg:hidden flex items-center gap-1.5 px-2 py-2 text-foreground/70" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="text-[0.65rem] uppercase tracking-widest font-medium">{open ? "Cerrar" : "Menú"}</span>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-5 flex flex-col gap-1">
            {nav.map(n => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80"
                activeProps={{ className: "text-forest font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
