import { Link } from "@tanstack/react-router";
import logo from "../../assets/yosicreo.jpg";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/tarifas", label: "Tarifas" },
  { to: "/cobertura", label: "Cobertura" },
  { to: "/seguridad", label: "Seguridad" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="flag-stripe h-1 w-full" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
      {/* Contenedor del logo más grande y centrado */}
      <div className="relative flex h-14 w-14 items-center justify-center">
      <img 
      src={logo} 
      alt="Yo Sí Creo Logo" 
      className="h-full w-full object-contain" 
      />
     </div>
  <span className="leading-tight">
    <span className="block font-serif text-lg text-foreground">Yo Sí Creo</span>
    <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      en Venezuela · Punto Fijo
    </span>
  </span>
</Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+582691234567"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-4 py-2 text-sm font-semibold hover:brightness-110 transition"
        >
          Pedir taxi
        </a>
      </div>
    </header>
  );
}
