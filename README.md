# Portfolio

A personal portfolio website built with [Next.js](https://nextjs.org). It includes an MDX-based content system for projects and blog posts, an about / CV page, and a gallery.

## Getting started

**1. Install dependencies**
```
npm install
```

**2. Run the dev server**
```
npm run dev
```
The site will be available at [http://localhost:3000](http://localhost:3000).

**3. Build for production**
```
npm run build
npm start
```

## Project structure

- `src/app` — pages and routes (App Router)
- `src/components` — reusable UI components
- `src/resources` — site configuration and content
- `src/app/blog/posts` — blog posts (`.mdx`)
- `src/app/work/projects` — project pages (`.mdx`)

To add a new blog post or project, create a `.mdx` file in the corresponding directory.

## Requirements

- Node.js v18.17+

## License

See `LICENSE` for details.
