import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-forest-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">María Vital</div>
          <p className="mt-2 text-xs uppercase tracking-widest text-leaf">Tu distribuidor doTERRA · Tu tienda doTERRA</p>
          <p className="mt-3 text-sm text-primary-foreground/75 max-w-md leading-relaxed">
            Bienestar que fluye. Naturaleza que sana. Liderazgo con propósito.
            Acompañamiento holístico y aromaterapia con aceites esenciales doTERRA.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground text-sm font-semibold uppercase tracking-widest">Explora</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-leaf">Inicio</Link></li>
            <li><Link to="/sobre" className="hover:text-leaf">Sobre María</Link></li>
            <li><Link to="/acompanamiento" className="hover:text-leaf">Acompañamiento</Link></li>
            <li><Link to="/aromaterapia" className="hover:text-leaf">Aromaterapia</Link></li>
            <li><Link to="/contacto" className="hover:text-leaf">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground text-sm font-semibold uppercase tracking-widest">Conecta</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="https://instagram.com/mariavital2.0" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-leaf"><Instagram className="h-4 w-4" />@mariavital2.0</a></li>
            <li><a href="https://www.linkedin.com/in/maria-vital-087099268/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-leaf"><Linkedin className="h-4 w-4" />LinkedIn</a></li>
            <li><a href="/contacto" className="inline-flex items-center gap-2 hover:text-leaf"><Mail className="h-4 w-4" />Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} María Vital · Todos los derechos reservados</span>
          <span>mariavital.com</span>
        </div>
      </div>
    </footer>
  );
}
