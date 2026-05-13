import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/seguridad")({
  component: SeguridadPage,
  head: () => ({
    meta: [
      { title: "Políticas de seguridad · Yo Sí Creo en Venezuela" },
      { name: "description", content: "Protocolos de seguridad para usuarios: identificación de unidades, GPS, contacto de emergencia y atención de quejas." },
    ],
  }),
});

const policies = [
  { t: "Unidades identificadas", d: "Toda nuestra flota lleva el logotipo de la línea, número visible y franja amarilla reflectiva. Si no la ves, no es nuestra." },
  { t: "Chofer carnetizado", d: "El conductor porta un carnet con foto, número de socio y código QR verificable desde tu teléfono." },
  { t: "GPS y monitoreo en vivo", d: "Cada carrera es registrada por la central. Puedes solicitar el código de viaje y compartirlo con un familiar." },
  { t: "Botón de pánico", d: "Las unidades cuentan con botón silencioso conectado a la central y al CICPC del Municipio Carirubana." },
  { t: "Tarifa antes de partir", d: "El conductor está obligado a confirmarte la tarifa estimada o activar el taxímetro a la vista antes de iniciar la carrera." },
  { t: "Tolerancia cero", d: "Prohibido fumar, consumir alcohol, cobrar de más o desviar la ruta sin autorización del pasajero." },
];

const emergencies = [
  ["Central de despacho 24/7", "0269-123-4567"],
  ["WhatsApp emergencias", "+58 414-555-0123"],
  ["Línea de quejas y reclamos", "denuncias@yosicreo.ve"],
  ["Policía Municipal Carirubana", "171"],
  ["CICPC Punto Fijo", "0800-CICPC-00"],
];

function SeguridadPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Seguridad del usuario</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground text-balance max-w-3xl">
            Tu confianza viaja <em className="text-gold not-italic">primero</em>.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Cumplimos protocolos auditados por el INTT y la Alcaldía. Cada viaje es un compromiso firmado entre la línea y quien sube a bordo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((p, i) => (
            <article key={p.t} className="rounded-2xl border border-border/70 bg-surface p-7 hover:border-gold/60 transition">
              <p className="font-serif text-gold text-2xl">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-2xl text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeading
            eyebrow="Antes de subir al taxi"
            title="Verifica siempre estos 4 puntos"
            description="Una rutina simple que toma 10 segundos y te garantiza un viaje seguro."
          />
          <ol className="space-y-5">
            {[
              "Confirma el número de unidad pintado en el techo y la puerta.",
              "Pide al chofer mostrar su carnet de identificación de la línea.",
              "Acuerda la tarifa o exige que active el taxímetro al iniciar.",
              "Comparte el código de viaje con un familiar vía WhatsApp.",
            ].map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="flex-none flex h-9 w-9 items-center justify-center rounded-full bg-gold text-gold-foreground font-serif">{i + 1}</span>
                <p className="pt-1 text-foreground">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Contacto de emergencia" title="Una llamada, atención inmediata" />
        <div className="mt-10 rounded-2xl border border-border/70 bg-surface overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {emergencies.map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-background/30" : ""}>
                  <td className="px-6 py-4 text-muted-foreground">{k}</td>
                  <td className="px-6 py-4 text-right font-semibold text-gold">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
