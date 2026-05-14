import { T as jsxRuntimeExports } from "./worker-entry-3XPevHYn.js";
import { S as SectionHeading } from "./SectionHeading-BY0Rpo4y.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const coverImg = "/assets/coverage-P7KubPE1.jpg";
const local = ["Centro Punto Fijo", "Caja de Agua", "Pueblo Nuevo de Paraguaná", "Carirubana", "Judibana", "Las Piedras", "Los Taques", "Santa Ana", "Punta Cardón", "Adícora", "Médanos de Coro", "Cabo San Román"];
const nacional = [["Coro", "1 h"], ["Maracaibo", "3 h 30 min"], ["Barquisimeto", "5 h"], ["Valencia", "7 h"], ["Caracas", "9 h"], ["Mérida", "8 h"], ["San Cristóbal", "10 h"], ["Puerto La Cruz", "12 h"]];
function CoberturaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coverImg, alt: "Vista aérea de Punto Fijo y la Península de Paraguaná", width: 1400, height: 900, className: "h-full w-full object-cover opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "var(--gradient-hero)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 pt-24 pb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Cobertura" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-serif text-5xl md:text-6xl text-foreground text-balance max-w-3xl", children: [
          "De la ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "península" }),
          " al país entero."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-foreground/80", children: "Conocemos cada calle de Punto Fijo y cada curva de la carretera Falcón–Zulia. Si hay ruta, te llevamos." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Cobertura local", title: "Punto Fijo y Paraguaná", description: "Servicio urbano completo dentro del Municipio Carirubana, Falcón y Los Taques." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3", children: local.map((z) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border/70 bg-surface px-4 py-3 text-sm text-foreground", children: z }, z)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Cobertura nacional", title: "Viajes a toda Venezuela", description: "Tarifas cerradas, conductor relevo en trayectos largos y servicio puerta a puerta." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-2xl border border-border/70 bg-surface overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-background/40 text-xs uppercase tracking-widest text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left", children: "Destino" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right", children: "Tiempo aprox." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: nacional.map(([k, v], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 ? "bg-background/20" : "", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-foreground", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-right text-muted-foreground", children: v })
          ] }, k)) })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  CoberturaPage as component
};
