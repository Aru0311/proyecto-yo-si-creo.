type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
