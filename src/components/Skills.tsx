"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I am learning and using."
      subtitle="A beginner-friendly stack for building static sites, interactive interfaces, APIs, and database-backed applications."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="rounded-lg border border-line bg-panel/70 p-5 transition hover:-translate-y-1 hover:border-accent/60 hover:bg-panel"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{skill.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
