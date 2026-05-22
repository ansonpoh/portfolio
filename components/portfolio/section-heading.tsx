type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <div className="flex items-center gap-4">
        <p className="section-kicker">{eyebrow}</p>
        <span className="terminal-rule hidden sm:block" />
      </div>
      <h2
        data-text={title}
        className="glitch-hover font-display text-3xl uppercase leading-[1.02] tracking-[0.16em] text-white sm:text-4xl"
      >
        {title}
      </h2>
      <p className="max-w-xl text-sm leading-7 text-[var(--color-muted-strong)] sm:text-base">
        {description}
      </p>
    </div>
  );
}
