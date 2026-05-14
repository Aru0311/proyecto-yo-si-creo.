import { T as jsxRuntimeExports } from "./worker-entry-3XPevHYn.js";
import { S as SectionHeading } from "./SectionHeading-BY0Rpo4y.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const meterRows = [["Bajada de bandera (primer kilómetro)", "$ 1,50"], ["Kilómetro adicional recorrido", "$ 0,80"], ["Minuto de espera o tráfico detenido", "$ 0,15"], ["Recargo nocturno (10:00 pm – 5:00 am)", "+ 25 %"], ["Recargo dominical y feriados", "+ 15 %"], ["Equipaje voluminoso (más de 2 maletas)", "$ 1,00"]];
const fixedRoutes = [["Centro Punto Fijo → Aeropuerto Las Piedras", "$ 8"], ["Punto Fijo → Judibana", "$ 5"], ["Punto Fijo → Coro", "$ 35"], ["Punto Fijo → Adícora / Médanos", "$ 25"], ["Punto Fijo → Cabo San Román", "$ 45"], ["Punto Fijo → Maracaibo", "$ 90"], ["Punto Fijo → Valencia", "$ 180"], ["Punto Fijo → Caracas", "$ 260"]];
const schedule = [["Lunes a Viernes", "5:00 am – 11:00 pm"], ["Sábados", "5:00 am – 12:00 am"], ["Domingos y feriados", "6:00 am – 11:00 pm"], ["Servicio nocturno bajo demanda", "24 horas vía central"]];
function TarifasPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-20 pb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Tarifas oficiales 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-serif text-5xl md:text-6xl text-foreground text-balance", children: [
        "Precios ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "claros" }),
        ", taxímetro a la vista."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-muted-foreground", children: "Todas nuestras unidades operan con taxímetro digital calibrado. Las tarifas están publicadas dentro del vehículo y pueden cancelarse en bolívares al tipo de cambio BCV del día." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Taxímetro urbano", title: "Tarifa por carrera dentro de la ciudad" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl border border-border/70 bg-surface overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: meterRows.map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-background/30" : "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-muted-foreground", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-right font-semibold text-gold", children: v })
        ] }, k)) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "* Precios referenciales en USD, equivalentes en Bs. al tipo de cambio BCV." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Tarifas cerradas", title: "Rutas frecuentes con precio fijo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl border border-border/70 bg-surface overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: fixedRoutes.map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-background/30" : "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-muted-foreground", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-right font-semibold text-gold", children: v })
        ] }, k)) }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-surface/40 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Horarios de servicio", title: "Operamos cuando la ciudad late", description: "Nuestra central nunca duerme: aún fuera del horario regular, atendemos solicitudes nocturnas con unidades de guardia." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 divide-y divide-border/60 rounded-2xl border border-border/70 bg-background overflow-hidden", children: schedule.map(([d, h]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: h })
        ] }, d)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gold/30 bg-background p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-gold", children: "Métodos de pago" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl mt-3", children: "Aceptamos lo de hoy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "●" }),
            " Efectivo (Bs. y USD)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "●" }),
            " Pago móvil interbancario"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "●" }),
            " Transferencia bancaria"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "●" }),
            " Zelle (rutas nacionales)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "●" }),
            " Binance Pay"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  TarifasPage as component
};
