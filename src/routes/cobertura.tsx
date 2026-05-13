import { createFileRoute } from "@tanstack/react-router";
import coverImg from "@/assets/coverage.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/cobertura")({
  component: CoberturaPage,
  head: () => ({
    meta: [
      { title: "Áreas de cobertura · Yo Sí Creo en Venezuela" },
      { name: "description", content: "Cobertura local en Punto Fijo y la Península de Paraguaná, y servicios nacionales a las principales ciudades de Venezuela." },
      { property: "og:image", content: "/src/assets/coverage.jpg" },
    ],
  }),
});

const local = [
  "Centro Punto Fijo", "Caja de Agua", "Pueblo Nuevo de Paraguaná",
  "Carirubana", "Judibana", "Las Piedras", "Los Taques", "Santa Ana",
  "Punta Cardón", "Adícora", "Médanos de Coro", "Cabo San Román",
];

const nacional = [
  ["Coro", "1 h"], ["Maracaibo", "3 h 30 min"], ["Barquisimeto", "5 h"],
  ["Valencia", "7 h"], ["Caracas", "9 h"], ["Mérida", "8 h"],
  ["San Cristóbal", "10 h"], ["Puerto La Cruz", "12 h"],
];

function CoberturaPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <img src={coverImg} alt="Vista aérea de Punto Fijo y la Península de Paraguaná" width={1400} height={900} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Cobertura</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground text-balance max-w-3xl">
            De la <em className="text-gold not-italic">península</em> al país entero.
          </h1>
          <p className="mt-5 max-w-2xl text-foreground/80">
            Conocemos cada calle de Punto Fijo y cada curva de la carretera Falcón–Zulia. Si hay ruta, te llevamos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading eyebrow="Cobertura local" title="Punto Fijo y Paraguaná" description="Servicio urbano completo dentro del Municipio Carirubana, Falcón y Los Taques." />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {local.map((z) => (
              <div key={z} className="rounded-xl border border-border/70 bg-surface px-4 py-3 text-sm text-foreground">
                {z}
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Cobertura nacional" title="Viajes a toda Venezuela" description="Tarifas cerradas, conductor relevo en trayectos largos y servicio puerta a puerta." />
          <div className="mt-8 rounded-2xl border border-border/70 bg-surface overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-background/40 text-xs uppercase tracking-widest text-gold">
                <tr>
                  <th className="px-6 py-3 text-left">Destino</th>
                  <th className="px-6 py-3 text-right">Tiempo aprox.</th>
                </tr>
              </thead>
              <tbody>
                {nacional.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-background/20" : ""}>
                    <td className="px-6 py-4 text-foreground">{k}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
