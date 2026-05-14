import { T as jsxRuntimeExports } from "./worker-entry-3XPevHYn.js";
import { S as SectionHeading } from "./SectionHeading-BY0Rpo4y.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const policies = [{
  t: "Unidades identificadas",
  d: "Toda nuestra flota lleva el logotipo de la línea, número visible y franja amarilla reflectiva. Si no la ves, no es nuestra."
}, {
  t: "Chofer carnetizado",
  d: "El conductor porta un carnet con foto, número de socio y código QR verificable desde tu teléfono."
}, {
  t: "GPS y monitoreo en vivo",
  d: "Cada carrera es registrada por la central. Puedes solicitar el código de viaje y compartirlo con un familiar."
}, {
  t: "Botón de pánico",
  d: "Las unidades cuentan con botón silencioso conectado a la central y al CICPC del Municipio Carirubana."
}, {
  t: "Tarifa antes de partir",
  d: "El conductor está obligado a confirmarte la tarifa estimada o activar el taxímetro a la vista antes de iniciar la carrera."
}, {
  t: "Tolerancia cero",
  d: "Prohibido fumar, consumir alcohol, cobrar de más o desviar la ruta sin autorización del pasajero."
}];
const emergencies = [["Central de despacho 24/7", "0269-123-4567"], ["WhatsApp emergencias", "+58 414-555-0123"], ["Línea de quejas y reclamos", "denuncias@yosicreo.ve"], ["Policía Municipal Carirubana", "171"], ["CICPC Punto Fijo", "0800-CICPC-00"]];
function SeguridadPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-20 pb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Seguridad del usuario" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-serif text-5xl md:text-6xl text-foreground text-balance max-w-3xl", children: [
        "Tu confianza viaja ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "primero" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-muted-foreground", children: "Cumplimos protocolos auditados por el INTT y la Alcaldía. Cada viaje es un compromiso firmado entre la línea y quien sube a bordo." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: policies.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border/70 bg-surface p-7 hover:border-gold/60 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-gold text-2xl", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-serif text-2xl text-foreground", children: p.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.d })
    ] }, p.t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface/40 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Antes de subir al taxi", title: "Verifica siempre estos 4 puntos", description: "Una rutina simple que toma 10 segundos y te garantiza un viaje seguro." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-5", children: ["Confirma el número de unidad pintado en el techo y la puerta.", "Pide al chofer mostrar su carnet de identificación de la línea.", "Acuerda la tarifa o exige que active el taxímetro al iniciar.", "Comparte el código de viaje con un familiar vía WhatsApp."].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-none flex h-9 w-9 items-center justify-center rounded-full bg-gold text-gold-foreground font-serif", children: i + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-1 text-foreground", children: s })
      ] }, s)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Contacto de emergencia", title: "Una llamada, atención inmediata" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-2xl border border-border/70 bg-surface overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: emergencies.map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-background/30" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-muted-foreground", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-right font-semibold text-gold", children: v })
      ] }, k)) }) }) })
    ] })
  ] });
}
export {
  SeguridadPage as component
};
