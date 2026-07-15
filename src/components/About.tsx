import Image from "next/image";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A junior developer building steady, practical skills."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-line bg-panel">
          <Image
            src="/images/profile-photo1.jpg"
            alt="Profile photo"
            width={720}
            height={720}
            className="aspect-square w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-5 text-base leading-8 text-muted">
          <p>
            I am a full-stack developer focused on building clean,
            responsive, and useful web applications. I enjoy turning ideas into
            simple interfaces that are easy to use on both desktop and mobile.
          </p>
          <p>
            My learning journey started with HTML and CSS, then moved into JavaScript,
            TypeScript, backend basics, databases, and version control. I like projects
            that teach real skills: forms, APIs, authentication, dashboards, and CRUD
            features.
          </p>
          <p>
            Right now I am improving my understanding of Next.js, Node.js, Express, PHP,
            MySQL, and deployment workflows so I can contribute confidently to
            internships, freelance projects, and junior developer roles.
          </p>
          <p>
            Born in San Carlos City in 1999, I turned a passion for web development into a relentless pursuit of building modern digital experiences
          </p>

        </div>
      </div>
    </Section>
  );
}
