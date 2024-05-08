# Starter Astro

Starter boilerplate for Astro projects.

Tech stacks:

-   Astro
-   AlpineJS
-   TailwindCSS

By default, source code path is `/src` and build path is `/docs`. These paths can be configured in `vite.config.js`.

`/src/site.mjs` is constant values specifically for site's content that are shared universally. Below is an example on how to access this values using frontmatter in `.astro` files.

```astro
---
import Site from `../site.mjs`;
---

<p>This site name is {Site.name}<p>
```

## Installation

Clone this repository to get started.

Execute the following command in project directory to install dependencies.

```bash
npm install
```

To run Astro, execute one of the following commands:

```bash
npm run dev
npm run build
npm run preview
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://github.com/mkfizi/starter-astro/blob/main/LICENSE)
