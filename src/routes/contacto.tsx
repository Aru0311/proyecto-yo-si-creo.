import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
  head: () => ({
    meta: [
      { title: "Contacto · Línea Yo Sí Creo en Venezuela" },
      { name: "description", content: "Comunícate con la central de despacho 24/7 en Punto Fijo, Falcón." },
    ],
  }),
});

function ContactoPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Estamos a una llamada de distancia"
            description="Atendemos solicitudes de carrera, contratos empresariales, sugerencias y reclamos."
          />
          <ul className="mt-10 space-y-6">
            <li>
              <p className="text-xs uppercase tracking-widest text-gold">Central</p>
              <a href="tel:+582691234567" className="mt-1 block font-serif text-4xl text-foreground hover:text-gold">0269-123-4567</a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-widest text-gold">WhatsApp</p>
              <a href="https://wa.me/584145550123" className="mt-1 block font-serif text-4xl text-foreground hover:text-gold">+58 414-555-0123</a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-widest text-gold">Correo</p>
              <a href="mailto:central@yosicreo.ve" className="mt-1 block font-serif text-3xl text-foreground hover:text-gold">central@yosicreo.ve</a>
            </li>
            <li>
              <p className="text-xs uppercase tracking-widest text-gold">Sede</p>
              <p className="mt-1 text-foreground">Av. Bolívar c/c calle Falcón, Edif. Paraguaná, PB · Punto Fijo, Falcón.</p>
            </li>
          </ul>
        </div>
        <form className="rounded-2xl border border-border/70 bg-surface p-8 space-y-5">
          <div>
            <label className="text-xs uppercase tracking-widest text-gold">Nombre</label>
            <input className="mt-2 w-full rounded-md bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-gold">Teléfono</label>
            <input className="mt-2 w-full rounded-md bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold" placeholder="0414-000-0000" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-gold">Mensaje</label>
            <textarea rows={5} className="mt-2 w-full rounded-md bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold" placeholder="¿En qué te ayudamos?" />
          </div>
          <button type="button" className="w-full rounded-full bg-gold text-gold-foreground py-3.5 font-semibold hover:brightness-110 transition">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
