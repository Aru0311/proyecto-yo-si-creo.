import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/tarifas")({
  component: TarifasPage,
  head: () => ({
    meta: [
      { title: "Tarifas y Taxímetro · Yo Sí Creo en Venezuela" },
      { name: "description", content: "Tarifas oficiales con taxímetro digital, recargos y horarios de servicio en Punto Fijo, Falcón." },
    ],
  }),
});

const meterRows = [
  ["Bajada de bandera (primer kilómetro)", "$ 1,50"],
  ["Kilómetro adicional recorrido", "$ 0,80"],
  ["Minuto de espera o tráfico detenido", "$ 0,15"],
  ["Recargo nocturno (10:00 pm – 5:00 am)", "+ 25 %"],
  ["Recargo dominical y feriados", "+ 15 %"],
  ["Equipaje voluminoso (más de 2 maletas)", "$ 1,00"],
];

const fixedRoutes = [
  ["Centro Punto Fijo → Aeropuerto Las Piedras", "$ 8"],
  ["Punto Fijo → Judibana", "$ 5"],
  ["Punto Fijo → Coro", "$ 35"],
  ["Punto Fijo → Adícora / Médanos", "$ 25"],
  ["Punto Fijo → Cabo San Román", "$ 45"],
  ["Punto Fijo → Maracaibo", "$ 90"],
  ["Punto Fijo → Valencia", "$ 180"],
  ["Punto Fijo → Caracas", "$ 260"],
];

const schedule = [
  ["Lunes a Viernes", "5:00 am – 11:00 pm"],
  ["Sábados", "5:00 am – 12:00 am"],
  ["Domingos y feriados", "6:00 am – 11:00 pm"],
  ["Servicio nocturno bajo demanda", "24 horas vía central"],
];

function TarifasPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Tarifas oficiales 2026</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground text-balance">
            Precios <em className="text-gold not-italic">claros</em>, taxímetro a la vista.
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Todas nuestras unidades operan con taxímetro digital calibrado. Las
            tarifas están publicadas dentro del vehículo y pueden cancelarse en bolívares al tipo de
            cambio BCV del día.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="Taxímetro urbano" title="Tarifa por carrera dentro de la ciudad" />
          <div className="mt-8 rounded-2xl border border-border/70 bg-surface overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {meterRows.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-background/30" : ""}>
                    <td className="px-6 py-4 text-muted-foreground">{k}</td>
                    <td className="px-6 py-4 text-right font-semibold text-gold">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            * Precios referenciales en USD, equivalentes en Bs. al tipo de cambio BCV.
          </p>
        </div>
        <div>
          <SectionHeading eyebrow="Tarifas cerradas" title="Rutas frecuentes con precio fijo" />
          <div className="mt-8 rounded-2xl border border-border/70 bg-surface overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {fixedRoutes.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-background/30" : ""}>
                    <td className="px-6 py-4 text-muted-foreground">{k}</td>
                    <td className="px-6 py-4 text-right font-semibold text-gold">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <SectionHeading
              eyebrow="Horarios de servicio"
              title="Operamos cuando la ciudad late"
              description="Nuestra central nunca duerme: aún fuera del horario regular, atendemos solicitudes nocturnas con unidades de guardia."
            />
            <ul className="mt-8 divide-y divide-border/60 rounded-2xl border border-border/70 bg-background overflow-hidden">
              {schedule.map(([d, h]) => (
                <li key={d} className="flex justify-between px-6 py-4">
                  <span className="text-muted-foreground">{d}</span>
                  <span className="font-semibold text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-background p-8">
            <p className="text-xs uppercase tracking-widest text-gold">Métodos de pago</p>
            <h3 className="font-serif text-3xl mt-3">Aceptamos lo de hoy</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-gold">●</span> Efectivo (Bs. y USD)</li>
              <li className="flex gap-3"><span className="text-gold">●</span> Pago móvil interbancario</li>
              <li className="flex gap-3"><span className="text-gold">●</span> Transferencia bancaria</li>
              <li className="flex gap-3"><span className="text-gold">●</span> Zelle (rutas nacionales)</li>
              <li className="flex gap-3"><span className="text-gold">●</span> Binance Pay</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
