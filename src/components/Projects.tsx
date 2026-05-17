"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/Section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Realistic beginner projects with practical features."
      subtitle="Use these as starter examples, then replace the links and descriptions with your own deployed work."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel/75"
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot placeholder`}
              width={900}
              height={620}
              className="aspect-[1.45] w-full border-b border-line object-cover"
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-3 py-2 text-sm font-semibold text-white transition hover:border-accent hover:bg-white/5"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
