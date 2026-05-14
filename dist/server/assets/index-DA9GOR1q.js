import { T as jsxRuntimeExports } from "./worker-entry-3XPevHYn.js";
import { l as logoPlaceholder, L as Link } from "./router-Dnc3-dfK.js";
import { S as SectionHeading } from "./SectionHeading-BY0Rpo4y.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const heroImg = "/assets/hero-taxi-C5KVXNNd.jpg";
const services = [{
  title: "Servicio urbano",
  desc: "Recorridos dentro de Punto Fijo, Carirubana y Los Taques con tarifa por taxímetro.",
  icon: "🏙️"
}, {
  title: "Aeropuerto Las Piedras",
  desc: "Traslados puntuales al Aeropuerto Internacional Josefa Camejo, 24 horas.",
  icon: "✈️"
}, {
  title: "Encomiendas",
  desc: "Envíos seguros de paquetes y documentos dentro de la península.",
  icon: "📦"
}, {
  title: "Viajes nacionales",
  desc: "Coro, Maracaibo, Valencia y Caracas bajo tarifa cerrada y conductor relevo.",
  icon: "🛣️"
}, {
  title: "Tour Paraguaná",
  desc: "Médanos, Adícora, Cabo San Román y Judibana con chofer-guía local.",
  icon: "🌅"
}, {
  title: "Servicio empresarial",
  desc: "Convenios con hoteles, refinería CRP y empresas de la zona franca.",
  icon: "🏢"
}];
const stats = [{
  k: "12+",
  v: "Años en Punto Fijo"
}, {
  k: "25",
  v: "Unidades activas"
}, {
  k: "24/7",
  v: "Central de despacho"
}, {
  k: "100%",
  v: "Choferes verificados"
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Taxi amarillo en una calle soleada de Punto Fijo, Falcón", width: 1600, height: 1100, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "var(--gradient-hero)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 pt-28 pb-32 md:pt-40 md:pb-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold" }),
          " Punto Fijo · Estado Falcón"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-serif text-5xl md:text-7xl leading-[1.05] text-foreground text-balance", children: [
          "Yo Sí Creo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "en Venezuela" }),
          ".",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Y por eso, la muevo."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-foreground/80 leading-relaxed", children: "Línea de taxi al servicio de la Península de Paraguaná desde 2013. Choferes verificados, taxímetro digital y atención 24 horas para que llegues seguro a tu destino." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+582691234567", className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-glow)] hover:brightness-110 transition", children: "Llamar central · 0424-6488403" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/584145550123", className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-background/60 transition", children: "WhatsApp 24h" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flag-stripe h-1 w-full", "aria-hidden": true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-5xl text-gold", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.v })
    ] }, s.v)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Nuestros servicios", title: "Una línea, todas las soluciones de movilidad", description: "Desde una carrera urbana hasta un viaje nacional, operamos con disciplina, transparencia y orgullo venezolano." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative rounded-2xl border border-border/70 bg-surface p-7 hover:border-gold/60 transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-4", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-px w-10 bg-gold/60 group-hover:w-full transition-all duration-500" })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface/40 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Quiénes somos", title: "Una cooperativa de transporte con identidad venezolana", description: "Nacimos en 2013 en pleno corazón de Punto Fijo con la convicción de que un buen servicio se construye con disciplina, fe y compromiso con la comunidad." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Operamos bajo figura de cooperativa, registrada ante el Instituto Nacional de Transporte Terrestre (INTT) y la Alcaldía del Municipio Carirubana. Cada unidad y cada conductor está identificado, asegurado y supervisado por nuestra central de despacho." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-background p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-gold mb-6", children: "Estructura organizacional" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-5", children: [["Asamblea de Asociados", "Máxima autoridad. Reúne a los 25 socios-conductores."], ["Consejo de Administración", "Presidente, Vicepresidente, Secretario y Tesorero."], ["Coordinación de Operaciones", "Despacho, rutas, asignación de carreras."], ["Comité de Seguridad y Calidad", "Verificación de choferes, control de unidades."], ["Atención al Cliente", "Central telefónica y WhatsApp 24/7."]].map(([t, d], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-none flex h-8 w-8 items-center justify-center rounded-full bg-gold text-gold-foreground font-serif", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: d })
          ] })
        ] }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-2xl flag-stripe opacity-80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoPlaceholder, alt: "Chofer de la línea Yo Sí Creo en Venezuela", loading: "lazy", width: 900, height: 1100, className: "relative rounded-2xl object-cover w-full" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Perfil de los choferes", title: "Manos limpias, ruta clara, palabra de honor", description: "Cada conductor pasa por un riguroso proceso de admisión antes de portar el escudo de la línea." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid sm:grid-cols-2 gap-4", children: ["Mínimo 5 años de experiencia comprobada al volante", "Licencia de 5to grado vigente", "Certificado médico actualizado", "Récord policial y antecedentes penales sin observaciones", "Conocimiento certificado de Punto Fijo y Paraguaná", "Uniforme identificado y carnet visible obligatorio", "Evaluación trimestral de calidad y conducta"].map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gold" }),
          req
        ] }, req)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-gold/30 bg-surface p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gold/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-flag-blue/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-xs uppercase tracking-[0.3em] text-gold", children: "Solicita tu carrera" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "relative mt-4 font-serif text-4xl md:text-5xl text-foreground text-balance", children: [
        "Tu destino, nuestra ruta. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "Llámanos ya." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+582691234567", className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:brightness-110 transition", children: "0424-6488403" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tarifas", className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-background/40 transition", children: "Ver tarifas" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
