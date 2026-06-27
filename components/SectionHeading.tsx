type SectionHeadingProps = {
  title: string;
  description: string;
};

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
    </div>
  );
}
