import type { CredentialGroup } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type CredentialsSectionProps = {
  credentials: CredentialGroup[];
};

export function CredentialsSection({ credentials }: CredentialsSectionProps) {
  return (
    <section id="credentials" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Credentials"
          title="Education, certifications, and engineering approach."
          description="The academic foundation, professional learning, and working habits behind my project delivery."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {credentials.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="font-semibold text-[var(--text)]">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
