import { T as jsxRuntimeExports } from "./worker-entry-3XPevHYn.js";
function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-2xl ${alignCls}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-4", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-foreground text-balance", children: title }),
    description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: description })
  ] });
}
export {
  SectionHeading as S
};
