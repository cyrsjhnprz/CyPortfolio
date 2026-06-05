import { Github, Instagram, Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { developer } from "@/lib/data";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let us build something useful."
      subtitle="Send a message or reach me through my active profiles."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-line bg-panel/70 p-6">
          <h3 className="text-xl font-semibold text-white">Contact details</h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            I am open to project ideas, collaboration, and learning opportunities.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${developer.email}`}
              className="flex items-center gap-3 text-sm text-muted transition hover:text-white"
            >
              <Mail size={18} className="text-accent" />
              {developer.email}
            </a>
            <a
              href={developer.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-muted transition hover:text-white"
            >
              <Github size={18} className="text-accent" />
              GitHub profile
            </a>
            <a
              href={developer.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-muted transition hover:text-white"
            >
              <Instagram size={18} className="text-accent" />
              Instagram profile
            </a>
          </div>
        </div>

        <form
          action={`mailto:${developer.email}`}
          method="post"
          encType="text/plain"
          className="rounded-lg border border-line bg-panel/70 p-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-white">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-md border border-line bg-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white">
              Email
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="rounded-md border border-line bg-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-accent"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-medium text-white">
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project or opportunity..."
              className="resize-none rounded-md border border-line bg-background px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
