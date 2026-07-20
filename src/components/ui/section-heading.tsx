import { Reveal } from "@/components/animations/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-50 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
    </Reveal>
  );
}
