# CyPortfolio

A modern, beginner-friendly portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It is designed to look professional enough for internships, freelance work, and junior developer applications while keeping the code easy to study and edit.

## Features

- Dark mode by default
- Responsive mobile-first layout
- Sticky navigation with smooth scrolling
- Subtle Framer Motion animations
- Hero, About, Skills, Projects, Learning Journey, Contact, and Footer sections
- Beginner-readable folder structure
- Placeholder project screenshots and profile image
- Basic SEO metadata
- Easy-to-customize content in one data file

## Folder Structure

```text
.
|-- public
|   `-- images
|       |-- profile-placeholder.svg
|       |-- project-ecommerce.svg
|       |-- project-portfolio.svg
|       `-- project-task-manager.svg
|-- src
|   |-- app
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components
|   |   |-- About.tsx
|   |   |-- Contact.tsx
|   |   |-- Footer.tsx
|   |   |-- Hero.tsx
|   |   |-- Journey.tsx
|   |   |-- Navbar.tsx
|   |   |-- Projects.tsx
|   |   |-- Section.tsx
|   |   `-- Skills.tsx
|   `-- lib
|       `-- data.ts
|-- package.json
|-- tailwind.config.ts
|-- postcss.config.mjs
|-- next.config.mjs
`-- tsconfig.json
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:3000
```

## Customize Your Portfolio

Most personal content is in:

```text
src/lib/data.ts
```

Update:

- Your name and role
- Email, GitHub, and Instagram links
- Skills
- Project titles, descriptions, tech stacks, GitHub links, and live demo links
- Learning journey timeline

Update SEO metadata in:

```text
src/app/layout.tsx
```

Replace placeholder images in:

```text
public/images
```

## Build for Production

Run:

```bash
npm run build
```

Then preview the production build:

```bash
npm run start
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com).
3. Click **Add New Project**.
4. Import your GitHub repository.
5. Keep the default Next.js settings.
6. Click **Deploy**.

After deployment, update your project demo links in `src/lib/data.ts` with your real Vercel URLs.

## Notes for Beginners

- Components are split by page section so each file is small.
- `Section.tsx` handles repeated section spacing and scroll animation.
- `data.ts` keeps editable portfolio content away from layout code.
- The contact form is visual only. Connect it later to a form service or a backend API.
