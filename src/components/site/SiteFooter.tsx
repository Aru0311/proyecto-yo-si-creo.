import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background mt-24">
      <div className="flag-stripe h-1 w-full" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-foreground">Yo Sí Creo en Venezuela</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Línea de taxi al servicio de Punto Fijo y la Península de Paraguaná. Conducimos con orgullo, puntualidad y esperanza.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-3">Navegación</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/tarifas" className="hover:text-foreground">Tarifas</Link></li>
            <li><Link to="/cobertura" className="hover:text-foreground">Cobertura</Link></li>
            <li><Link to="/seguridad" className="hover:text-foreground">Seguridad</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-gold mb-3">Central 24/7</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Tel: +58 269 123 4567</li>
            <li>WhatsApp: +58 414 555 0123</li>
            <li>Av. Bolívar, Punto Fijo, Falcón</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Línea Yo Sí Creo en Venezuela · RIF J-502439935
      </div>
    </footer>
  );
}
