import { Section } from "@/components/Section";
import { timeline } from "@/lib/data";

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Learning journey"
      title="A simple timeline of steady progress."
      subtitle="The goal is to show growth honestly while still looking polished and professional."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-line sm:left-1/2" aria-hidden="true" />
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <article
              key={item.title}
              className="relative grid gap-4 pl-12 sm:grid-cols-2 sm:gap-8 sm:pl-0"
            >
              <div
                className={`sm:text-right ${index % 2 === 1 ? "sm:col-start-2 sm:text-left" : ""}`}
              >
                <span className="inline-flex rounded-md bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                  {item.date}
                </span>
              </div>
              <div
                className={`rounded-lg border border-line bg-panel/70 p-5 ${
                  index % 2 === 1 ? "sm:col-start-1 sm:row-start-1" : ""
                }`}
              >
                <span className="absolute left-[11px] top-2 h-3 w-3 rounded-full border-2 border-background bg-accent sm:left-1/2 sm:-ml-1.5" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
