# Monarch

Monarch is a modern landing page built with plain HTML, JavaScript, and Tailwind CSS. The project uses reusable component files to keep the page modular and easy to customize.

## Project Overview

This project is a responsive marketing website for a business/brand landing page. It includes sections such as:

- Header navigation
- Hero section
- Client showcase
- Community section
- Experience section
- Stats section
- Testimonials
- Blog cards
- CTA banner
- Footer

## Tech Stack

- HTML5
- CSS via Tailwind CDN
- Vanilla JavaScript
- Static asset images and SVGs

## Project Structure

```bash
Monarch/
├── assest/              # Static assets such as images and logos
├── components/          # Reusable HTML sections
├── index.html           # Main page entry point
├── script.js            # Component loader and interaction logic
├── README.md            # Project documentation
└── .gitignore           # Git ignore file (if present)
```

## Features

- Responsive layout for desktop and mobile screens
- Modular section loading via JavaScript
- Mobile hamburger menu interaction
- Tailwind-based styling for quick design flexibility
- Static site setup for easy deployment

## Run Locally

Because this is a static web project, you can open it directly in a browser or serve it locally with a lightweight local server.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Use a local web server

From the project root, run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Customization

You can update the website by editing:

- `index.html` for the page structure
- `script.js` for mobile menu and component loading behavior
- `components/*.html` for individual sections
- `assest/` for branding images and icons

## Notes

- The project uses remote Tailwind CSS via CDN (`https://cdn.tailwindcss.com`).
- Images are referenced using root-relative paths such as `/assest/images/...`.
- The site is designed as a simple front-end static page, so no backend or build process is required.

## License

This project is provided as-is for educational or personal use unless otherwise specified by the repository owner.
