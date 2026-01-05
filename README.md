# Web Developer Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring a clean, minimalist design inspired by contemporary web development best practices.

## 🌐 Live Demo

[View Live Site](https://dev.richarddaskas.com/)

## ✨ Features

- **Responsive Design** - Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Modern UI/UX** - Clean, professional interface with subtle hover effects and transitions
- **Project Showcase** - Dedicated sections for highlighting web development projects with live links
- **Theme System** - Custom color theming using CSS variables for easy customization
- **Performance Optimized** - Built with Next.js for optimal loading speeds and SEO

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Language:** JavaScript (JSX)

## 🎨 Design Features

- Two-column layout with sticky navigation
- Custom color scheme (charcoal background with orange accents)
- Circular navigation indicators that expand on hover/active
- Project cards with hover effects
- Smooth scroll behavior
- Accessible markup with ARIA labels

## 📂 Project Structure

```
├── app/
│   ├── page.js          # Main portfolio component
│   ├── layout.js        # Root layout with fonts
│   └── globals.css      # Global styles and theme variables
├── public/              # Static assets (images, resume)
└── package.json         # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/webdev-portfolio.git
cd webdev-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Changing the Color Theme

The color theme is managed through CSS variables in `app/globals.css`. To switch themes, uncomment one of the preset theme blocks in the `:root` selector:

```css
/* Current: Charcoal/Orange */
:root {
  --color-accent: 251 146 60;        /* orange-400 */
  --color-bg-primary: 10 10 10;      /* neutral-950 */
  /* ... */
}
```

Alternative themes (Slate/Teal, Purple/Violet, Blue/Cyan) are included as commented-out options.

### Updating Content

- Edit `app/page.js` to update your name, bio, experience, and projects
- Replace project images in `/public` folder
- Update project links and descriptions in the Projects section

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🔗 Featured Projects

The portfolio showcases three main projects:

1. **Property Management Platform** - Full-stack rental property management application
2. **Systems Design Portfolio** - Interactive portfolio showcasing game systems design work
3. **Client Website** - E-commerce site with payment integration


## 📧 Contact

Richard Daskas - [LinkedIn](https://linkedin.com/in/richard-d-03128838b) - [GitHub](https://github.com/richarddaskas)

---

Built with Next.js and Tailwind CSS