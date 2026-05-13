import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-taxi.jpg";
import logoPlaceholder from "../assets/yosicreo.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Línea Yo Sí Creo en Venezuela · Taxi en Punto Fijo" },
      { name: "description", content: "Servicio de taxi 24/7 en Punto Fijo y la Península de Paraguaná. Choferes verificados, taxímetro digital y tarifas justas." },
    ],
  }),
});

const services = [
  { title: "Servicio urbano", desc: "Recorridos dentro de Punto Fijo, Carirubana y Los Taques con tarifa por taxímetro.", icon: "🏙️" },
  { title: "Aeropuerto Las Piedras", desc: "Traslados puntuales al Aeropuerto Internacional Josefa Camejo, 24 horas.", icon: "✈️" },
  { title: "Encomiendas", desc: "Envíos seguros de paquetes y documentos dentro de la península.", icon: "📦" },
  { title: "Viajes nacionales", desc: "Coro, Maracaibo, Valencia y Caracas bajo tarifa cerrada y conductor relevo.", icon: "🛣️" },
  { title: "Tour Paraguaná", desc: "Médanos, Adícora, Cabo San Román y Judibana con chofer-guía local.", icon: "🌅" },
  { title: "Servicio empresarial", desc: "Convenios con hoteles, refinería CRP y empresas de la zona franca.", icon: "🏢" },
];

const stats = [
  { k: "12+", v: "Años en Punto Fijo" },
  { k: "25", v: "Unidades activas" },
  { k: "24/7", v: "Central de despacho" },
  { k: "100%", v: "Choferes verificados" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Taxi amarillo en una calle soleada de Punto Fijo, Falcón"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-32 md:pt-40 md:pb-44">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Punto Fijo · Estado Falcón
            </p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-foreground text-balance">
              Yo Sí Creo <em className="text-gold not-italic">en Venezuela</em>.<br />
              Y por eso, la muevo.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80 leading-relaxed">
              Línea de taxi al servicio de la Península de Paraguaná desde 2013. Choferes
              verificados, taxímetro digital y atención 24 horas para que llegues seguro a tu destino.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+582691234567"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-glow)] hover:brightness-110 transition"
              >
                Llamar central · 0424-6488403
              </a>
              <a
                href="https://wa.me/584145550123"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-background/60 transition"
              >
                WhatsApp 24h
              </a>
            </div>
          </div>
        </div>
        <div className="flag-stripe h-1 w-full" aria-hidden />
      </section>

      {/* STATS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.v} className="text-center md:text-left">
              <p className="font-serif text-5xl text-gold">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Una línea, todas las soluciones de movilidad"
          description="Desde una carrera urbana hasta un viaje nacional, operamos con disciplina, transparencia y orgullo venezolano."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border/70 bg-surface p-7 hover:border-gold/60 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px w-10 bg-gold/60 group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT / STRUCTURE */}
      <section className="bg-surface/40 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="Quiénes somos"
              title="Una cooperativa de transporte con identidad venezolana"
              description="Nacimos en 2013 en pleno corazón de Punto Fijo con la convicción de que un buen servicio se construye con disciplina, fe y compromiso con la comunidad."
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Operamos bajo figura de cooperativa, registrada ante el Instituto Nacional de Transporte
              Terrestre (INTT) y la Alcaldía del Municipio Carirubana. Cada unidad y cada conductor está
              identificado, asegurado y supervisado por nuestra central de despacho.
            </p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background p-8">
            <p className="text-xs uppercase tracking-widest text-gold mb-6">Estructura organizacional</p>
            <ol className="space-y-5">
              {[
                ["Asamblea de Asociados", "Máxima autoridad. Reúne a los 25 socios-conductores."],
                ["Consejo de Administración", "Presidente, Vicepresidente, Secretario y Tesorero."],
                ["Coordinación de Operaciones", "Despacho, rutas, asignación de carreras."],
                ["Comité de Seguridad y Calidad", "Verificación de choferes, control de unidades."],
                ["Atención al Cliente", "Central telefónica y WhatsApp 24/7."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex-none flex h-8 w-8 items-center justify-center rounded-full bg-gold text-gold-foreground font-serif">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* DRIVERS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl flag-stripe opacity-80" />
            <img
              src={logoPlaceholder}
              alt="Chofer de la línea Yo Sí Creo en Venezuela"
              loading="lazy"
              width={900}
              height={1100}
              className="relative rounded-2xl object-cover w-full"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Perfil de los choferes"
              title="Manos limpias, ruta clara, palabra de honor"
              description="Cada conductor pasa por un riguroso proceso de admisión antes de portar el escudo de la línea."
            />
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Mínimo 5 años de experiencia comprobada al volante",
                "Licencia de 5to grado vigente",
                "Certificado médico actualizado",
                "Récord policial y antecedentes penales sin observaciones",
                "Conocimiento certificado de Punto Fijo y Paraguaná",
                "Uniforme identificado y carnet visible obligatorio",
                "Evaluación trimestral de calidad y conducta",
              ].map((req) => (
                <li key={req} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface p-10 md:p-16 text-center">
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-flag-blue/30 blur-3xl" />
          <p className="relative text-xs uppercase tracking-[0.3em] text-gold">Solicita tu carrera</p>
          <h2 className="relative mt-4 font-serif text-4xl md:text-5xl text-foreground text-balance">
            Tu destino, nuestra ruta. <em className="text-gold not-italic">Llámanos ya.</em>
          </h2>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+582691234567" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:brightness-110 transition">
              0424-6488403
            </a>
            <Link to="/tarifas" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-background/40 transition">
              Ver tarifas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
